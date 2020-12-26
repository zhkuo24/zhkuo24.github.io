/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","cf49a1cb6ebd1e351b31adde96b8912a"],["/about/index.html","73e9082e16fa77665a874bcb18813dd7"],["/archives/2016/01/index.html","0e6a17ae9b268c9e5591e403f61efe81"],["/archives/2016/07/index.html","dc88cb4298572fafd018a2ead55751ee"],["/archives/2016/08/index.html","c8ce57aba1eecf3ef07d9bc3fe18e6ce"],["/archives/2016/09/index.html","05339ba432ef20083abbbb4319926e81"],["/archives/2016/index.html","29972d0d92e71aaad3c3a87d858a4cc2"],["/archives/2017/08/index.html","dc0b33e489d82785bf693d57097ae97e"],["/archives/2017/index.html","617eaaae791352b8a7f4e908f24e07f1"],["/archives/2019/03/index.html","2348a6f87b2b2709e9af662024336848"],["/archives/2019/index.html","cd282c3dfa3fdc225ac41f859167701c"],["/archives/2020/01/index.html","3abba851a3963bec285a115e076f0c3e"],["/archives/2020/12/index.html","135377896998e1a4366d8d803a93946d"],["/archives/2020/index.html","2c0035e20a07af2cddeb15edc065799f"],["/archives/index.html","daa1ea86de35c3a13bc9d61b561d0a5e"],["/archives/page/2/index.html","f8150b6d2d48c0515ee064402096ebd3"],["/books/index.html","9d4dbf8252b3338a6245626d466460d8"],["/categories/C-C-学习笔记/index.html","a97b8d32fb0229719d6879f8cf29a128"],["/categories/Python/index.html","3230c2f3c38d104b636c4b4dc7bce906"],["/categories/iOS笔记/index.html","305b578194aa8cbceebbd4378847795d"],["/categories/index.html","5f2b388581e60af4afc4b70377c24ca9"],["/categories/深度学习笔记/index.html","88d162969be21677e3677f0a5f50aa23"],["/categories/算法/index.html","50824e1d36fd3ee80f15d405262424b3"],["/categories/读书笔记/index.html","340eb5f8fcc06fb9362a85b7aaf73b50"],["/css/index.css","7ea2d1a68c350dd176353c88fa84de0b"],["/css/var.css","185feddc474e03a20842985be2d06795"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3138caa572dcdc22cd33db2b8feb6dee"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/movies/index.html","315526d382705835d2119b69fdeeb079"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","147c8c4b0cdbadbf9b26401944471f4e"],["/photos/index.html","43049d08111a7b985cda2c2e345d2037"],["/posts/1e2d973/index.html","0e57279c20953acb5e3ca59afa13f7f4"],["/posts/3071f1b7/index.html","d49561e2e74c2ba2e85c401430c7a69c"],["/posts/46fad066/index.html","5bfc8252b098179f15f13323c69c9b8d"],["/posts/4727556a/index.html","fa1d47e6151128a9f1046ea98bd46a50"],["/posts/66b18fb4/index.html","e44160f782cc8559aa1459ebe43fd8ed"],["/posts/6a1612fa/index.html","53d35ea1ba760db1b41ca1448a7725eb"],["/posts/6a70e6ae/index.html","fa31139784b57b925492322898aab249"],["/posts/6ea8b1ca/index.html","f0a922d9e67d9db871dd149048bda041"],["/posts/70a8dfc8/index.html","8ab567a4b99d9e81418b5e111e20d7bc"],["/posts/97b39fbe/index.html","8cc9c58e7605d35b490436a38050e85b"],["/posts/9a55744d/index.html","4de6cb9ea9d16098e6440f0b7dee698a"],["/posts/9bbebf74/index.html","2a5315d600c05fffbe2b60e18f06e499"],["/posts/9ce9d2d3/index.html","631c39f704d51cc00348332b4fbf0288"],["/posts/acff3e0b/index.html","84592788b660889924086cf239d79d26"],["/posts/bd50476c/index.html","dde53e7b5bb3703c5da72dd12c79d85c"],["/posts/dcd6586c/index.html","044b5d91a72e81521edbb8d38f50db34"],["/posts/e48c91fc/index.html","2d87eac7ba6aa60c3040488d7f17c277"],["/sw-register.js","55ee9ae2439bbed12cc91b492ec447eb"],["/tags/C-C/index.html","7937e5670ad875e8f7dc28a50b6f55d1"],["/tags/PyTorch/index.html","87d41305d87173fee809f4fa45b04534"],["/tags/iOS/index.html","afa23959a348a6ad7097e174c8793fb9"],["/tags/index.html","3f545cae3324fefec1389732d8f018cc"],["/tags/objc/index.html","26916fddbf54c2a2f2ddf3e05f6551f8"],["/tags/python/index.html","c62dc55d8216d531e9bf3c8d6e66cd8c"],["/tags/swift/index.html","6e343ff091dd2925cb08b9eec940f225"],["/tags/机器学习/index.html","f4c03be35ff5c493cec7ff535207eaeb"],["/tags/神经网络/index.html","0ebd236082840f44ecd0ac2f04961a99"],["/tags/程序员/index.html","eadaf625ac70648d572566a24ef37fc1"],["/tags/算法/index.html","32d76b8dee664246634737b246460056"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
