from django import template

register = template.Library()

@register.inclusion_tag('core/pagination/navigation.html')
def navigation(page_obj, url, outer_size=2, inner_size=2):
    """Inclusion tag for a block of navigation controls for the given
    Pagination obj and with all links pointing towards url."""
    page_list = []

    # Current page
    page_list.append(page_obj.number)

    # Inner window
    for p in range(inner_size):
        left = page_obj.number - p - 1
        if left >= 1:
            page_list.insert(0, left)

        right = page_obj.number + p + 1
        if right <= page_obj.paginator.num_pages:
            page_list.append(right)

    # Outer window
    for p in range(outer_size):
        left = outer_size - p
        if left < page_obj.number - inner_size:
            if p == 0 and left < page_list[0] - 1:
                page_list.insert(0, None)
            page_list.insert(0, left)

        right = page_obj.paginator.num_pages - outer_size + p + 1
        if right > page_obj.number + inner_size:
            if p == 0 and right > page_list[-1] + 1:
                page_list.append(None)
            page_list.append(right)

    # Previous and next
    previous_page = page_obj.previous_page_number() if page_obj.has_previous() else None
    page_list.insert(0, previous_page)

    next_page = page_obj.next_page_number() if page_obj.has_next() else None
    page_list.append(next_page)

    return {
        "page_list": page_list,
        "page_current": page_obj.number,
        "outer_size": outer_size,
        "inner_size": inner_size
    }
