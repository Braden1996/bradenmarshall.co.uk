import re

from django import template

from ..models import Category

register = template.Library()


class SidebarBlogPostCategories(template.Node):
    def __init__(self, var_name):
        self.var_name = var_name

    def render(self, context):
        context[self.var_name] = Category.objects.all()
        return ''

@register.tag
def get_blog_categories(parser, token):
    """Return all the categories for our blog posts."""
    try:
        tag_name, arg = token.contents.split(None, 1)
    except ValueError:
        raise template.TemplateSyntaxError(
            "%r tag requires arguments" % token.contents.split()[0]
        )

    m = re.search(r'as (\w+)', arg)

    if not m:
        raise template.TemplateSyntaxError("%r tag had invalid arguments" % tag_name)

    var_name = m.groups()[0]

    return SidebarBlogPostCategories(var_name)
