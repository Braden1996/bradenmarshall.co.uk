from django.views.generic.detail import DetailView
from django.views.generic.list import ListView

from .models import BlogPost

class BlogPostListView(ListView):
    """A list view for our BlogPosts..."""
    model = BlogPost

    paginate_by = 10


class BlogPostDetailView(DetailView):
    """A list view for our BlogPosts..."""
    model = BlogPost
