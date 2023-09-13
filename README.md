# react-query-grokk

## Description of the project
In this repository I grokked TanStack Query in the main branch before deciding 
to move on to Redux Toolkit & Redux Toolkit Query.

### Branches
Main branch: TanStack Query implementation
Redux branch: Redux Toolkit & RTK Query implementation

Both branches are based around the exact same ui and logic (may be some slight differences but the project is essentially the same). I.e it is the same application but with two different approaches to managing client-side state and 
the synchronization of client-side state with server-side state.

--------------------------------------------------------------------------------
### The case for TanStack Query
The idea of the repository was to grokk react query a little since it is a very widely used async client-side <-> server-side synchronization library that handles various scenarios (retries, automatic refetch, caching etc.) with it's implemented mechanisms.

This will by no means be a large or even medium sized project. I will simply play around a bit here while learning react-query on a deeper level to be able to use it in enterprise scale codebases.

Completed (TanStack):
* Car list
    * Fetch and cache  
        (refetch on page change, I'm using idiomatic next routing but still couldn't get query to cooperate. Didn't give it my all but tried some tips)
    * Invalidate upon uploading new car (leads to refetch of the car list)
* Last selected 
    * Selecting car will first send a patch to update the selected car and then invalidate the current selected car and trigger a refetch.
* Brand list
    * Paginated requests
    * Prefetch (Had a working prefetch example I worked with but didn't implement)
    * Didn't manage to cache pages on this project but I played aroudn with a smaller code base where I managed to do this and prefetch also.