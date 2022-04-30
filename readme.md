# Basic React native App to show Reddit r/programming feed. 

### List of the posts should be fetched from: [https://api.reddit.com/r/programming/hot.json](https://api.reddit.com/r/programming/hot.json)

### Reddit API wiki: [https://github.com/reddit-archive/reddit/wiki/JSON](https://github.com/reddit-archive/reddit/wiki/JSON)Tasks:

1. It display enough posts to fill the current viewport, then load additional posts as the user scrolls down on the page (infinite scrolling).
2. Each post shows the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation.Layout:
    
    [https://lh6.googleusercontent.com/oyD2VMrVpkRNTphefs7m5c2_Vu4DtDAONK8ChbvvfHRPA3sTBRLpRqJdt_qtjvmPkkD_nUyT8aeKzZr_1f1SGaAqaVV_ucviCZc_X6Ca4YRyDQSoDe_HCtk9BPqJ9ytYmsOXK2ug](https://lh6.googleusercontent.com/oyD2VMrVpkRNTphefs7m5c2_Vu4DtDAONK8ChbvvfHRPA3sTBRLpRqJdt_qtjvmPkkD_nUyT8aeKzZr_1f1SGaAqaVV_ucviCZc_X6Ca4YRyDQSoDe_HCtk9BPqJ9ytYmsOXK2ug)
    
3. Once the user taps on a post, it navigate to the post’s URL in a WebView/Open with the browser.
4. It shows new and top posts from r/programming feed.([https://api.reddit.com/r/programming/new.json](https://api.reddit.com/r/programming/top.json) - New posts)([https://api.reddit.com/r/programming/top.json](https://api.reddit.com/r/programming/new.json) - Top posts)
5. It adds a search input so we should be able to find posts by word/a few letters, add caching of search history(previously input words for search should be listed in dropdown on focusing search input).
6. App work both on iOS and Android and cover as many devices as possible.
