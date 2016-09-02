from django.db import models
from django.contrib.auth.models import User

import datetime

class BlogPost(models.Model):
    """A blog post model."""
    title = models.CharField(max_length=120)
    author = models.ForeignKey(User)
    publish = models.DateTimeField(default=datetime.datetime.now)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    excerpt = models.CharField(max_length=210, blank=True)
