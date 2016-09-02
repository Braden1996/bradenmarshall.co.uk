from django.views.generic.list import ListView

from .models import BlogPost

class BlogPostListView(ListView):
    """A list view for our BlogPosts..."""
    model = BlogPost

    paginate_by = 1
