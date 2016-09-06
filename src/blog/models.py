from django.db import models
from django.contrib.auth.models import User

import datetime


class Category(models.Model):
    """A Blog Post Category."""
    title = models.CharField(max_length=64)
    slug = models.SlugField(max_length=50, unique=True, default=None)

    class Meta:
        """Add non-field model data"""
        ordering = ('title',)

    def __str__(self):
        """String representation of the model"""
        return self.title


class BlogPost(models.Model):
    """A blog post model."""
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=120)
    author = models.ForeignKey(User)
    publish = models.DateTimeField(default=datetime.datetime.now)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    excerpt = models.CharField(max_length=210, blank=True)
    slug = models.SlugField(max_length=50, unique=True, default=None)
    body = models.TextField(default="")
    categories = models.ManyToManyField(Category, blank=True)

    class Meta:
        """Add non-field model data"""
        ordering = ["-publish"]

    def __str__(self):
        """String representation of the model"""
        return "{0} - by '{1}'".format(self.title, self.author)
