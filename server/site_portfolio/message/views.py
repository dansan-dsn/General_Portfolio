from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import MessageSerializer
from django.core.mail import send_mail

def send_email(data):
    subject = "Client Request Service"
    message = f"""
        Name: {data['name']}\n
        Email: {data['email']}\n
        Message: {data['message']}\n
        Services: {', '.join(data['services'])}
    """
    recipient_list = ['ddryn970@gmail.com']

    try:
        send_mail(
            subject,
            message,
            data['email'],
            recipient_list,
            fail_silently=False,
        )
        return True
    except Exception as e:
        return False

@api_view(['POST'])
def create_message(request):
    serializer = MessageSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()

        # Send email with the message data
        if send_email(request.data):
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Email not sent'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_message(request):
    data_message = Message.objects.all()  # Queryset of all messages
    serializer = MessageSerializer(data_message, many=True)  # Serialize the queryset
    return Response(serializer.data)
