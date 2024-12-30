from django.db import models

# Create your models here.
class Message(models.Model):
    name = models.CharField(max_length=60,)
    email = models.EmailField()
    message = models.CharField(max_length=200)
    services = models.JSONField(default=list)

    def __str__(self):
        return self.email