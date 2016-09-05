from django import template
from django.template.defaultfilters import stringfilter

import mistune

register = template.Library()

@register.filter
@stringfilter
def markdown(value):
    markdown = mistune.Markdown()
    return markdown(value)
