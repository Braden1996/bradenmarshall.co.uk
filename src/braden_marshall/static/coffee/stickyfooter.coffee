# bumpIt = ->
#   $('#l-site__content').css 'margin-bottom', $('#l-site__footer').height()
#   return
#
# didResize = false
# bumpIt()
# $(window).resize ->
#   didResize = true
#   return
# setInterval (->
#   if didResize
#     didResize = false
#     bumpIt()
#   return
# ), 250
