from django.shortcuts import get_object_or_404
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView

from .models import BlogPost, Category

class BlogPostListView(ListView):
    """A list view for our BlogPosts..."""
    template_name = 'blog/blogpost_list.html'

    model = BlogPost

    paginate_by = 10


class BlogPostListViewByCategory(ListView):
    template_name = 'blog/blogpost_list.html'

    model = BlogPost

    paginate_by = 10

    def get_queryset(self):
        self.category = get_object_or_404(Category, slug=self.kwargs["slug"])
        return BlogPost.objects.filter(categories=self.category)


class BlogPostDetailView(DetailView):
    """A list view for our BlogPosts..."""
    model = BlogPost
