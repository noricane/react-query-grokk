# react-redux-grokk

##Redux version of the react-query-grokk repository.

Here I will explore how to integrate redux, rtk and rtk query into the application.

Completed:
* Car list
    * Fetch and cache
    * Invalidate upon uploading new car (leads to refetch of the car list)
* Last selected 
    * Selecting car will first send a patch to update the selected car and then invalidate the current selected car and trigger a refetch.
* Brand list
    * Paginated requests
    * Prefetch
    * Cache pages