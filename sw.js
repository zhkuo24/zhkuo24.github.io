/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Gallery/suipai/index.html","0d0e5a55cb04e9dc03c46f115ba06fd9"],["/Gallery/suipai2021/index.html","00b4b73d8964f358ec5239d50b5e7d69"],["/about/index.html","833f2c1729497162e6754a56d177c186"],["/archives/2016/01/index.html","155dfc5bc2364791acb25278d9ab979f"],["/archives/2016/07/index.html","b28829d461d6c27d31da6ceb8b53bc61"],["/archives/2016/08/index.html","040331702b36ba951a1fa06770069f0d"],["/archives/2016/09/index.html","aaa36f486251c76cbb21bbc609c35cf5"],["/archives/2016/index.html","cc65ccda01a034093f7005d4de3f2bea"],["/archives/2017/08/index.html","07cfc0a766f40934841648bcbe21248f"],["/archives/2017/index.html","bf796595f34c79d17e2d9241ffa14d97"],["/archives/2019/03/index.html","79817400e7ffbebe0c008fb4a1b2491a"],["/archives/2019/index.html","850abecea8f3f0a065e82cff75bffa05"],["/archives/2020/01/index.html","7704d63c0d789e2d8099df6b9482c9ab"],["/archives/2020/12/index.html","6d41ae3609a48cdf1e45fa681a9397ce"],["/archives/2020/index.html","74015eed93a7f6eacc0a0ecf7ccedd95"],["/archives/index.html","54ed211b20053a22a37b649acff439d9"],["/archives/page/2/index.html","05cc9bf42b0a46de89795d83f712cbea"],["/books/index.html","c04080b61d992762e89dba11388ad9e7"],["/categories/C-C-学习笔记/index.html","1113bdb894dbc6ee70680021fb4e3cfd"],["/categories/Python/index.html","9e901f15a5d97240ff43085de2f70628"],["/categories/iOS笔记/index.html","1e8e2cb1141d933ea8bbdd704c8ed2e7"],["/categories/index.html","248de651e2c3abb37af3540490afe719"],["/categories/深度学习笔记/index.html","2bce94b824bff08bd8ed7ff59b8d7729"],["/categories/算法/index.html","0328728f42c231082db6943519ac1c3b"],["/categories/读书笔记/index.html","f76d45850944a992b026a8ea83fa3d9c"],["/css/index.css","710b6ca0423f1c5ac220f2860d30e066"],["/css/var.css","fced1308e4ed4394f951b71d25f8b3d1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b26805be6f3fdd1cf6d78280ae205696"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/movies/index.html","200f5959cb1733bfd5f517a301c7d216"],["/my_imgs/avatar.gif","64c930fe595f027cf98310173536b6ca"],["/page/2/index.html","03690cc65e74ac28b07e95c1ee0d4841"],["/photos/index.html","a0182a30fecc9051c124aca4b3506c2a"],["/posts/1e2d973/index.html","956f8036f67114910d893451f6ac84fd"],["/posts/3071f1b7/index.html","a6262f6b477f18385f03e9b0d4838b7b"],["/posts/46fad066/index.html","67d19b1bf72816284eca7d0a971d10d1"],["/posts/4727556a/index.html","7213872686faf90dd345275e95bcdd6b"],["/posts/66b18fb4/index.html","b5c133b5434f9a6f692dbbd663708a56"],["/posts/6a1612fa/index.html","85fbffd1806a100fd535ea95adf48344"],["/posts/6a70e6ae/index.html","f230ac9f56ab043247c67857a98b5e69"],["/posts/6ea8b1ca/index.html","89fe2aec800115773872192e23f105d3"],["/posts/70a8dfc8/index.html","be4258ede9427e058160d9161a1c32cd"],["/posts/97b39fbe/index.html","76f1ad8090c7f3227261e87fbc51b87c"],["/posts/9a55744d/index.html","a0cd1ac48f4433317308d5bb7d31ddc9"],["/posts/9bbebf74/index.html","3a4f4818dadaba35ca8135305f42db36"],["/posts/9ce9d2d3/index.html","c5a3f06fab6d9deb2e7d912486ba9796"],["/posts/acff3e0b/index.html","80873f353732dc1f50d05c8b9b007cff"],["/posts/bd50476c/index.html","d2837de209d51b0c1820bc6510d3259c"],["/posts/dcd6586c/index.html","fca52fa349aba97bc158a4232ba15cc9"],["/posts/e48c91fc/index.html","78e6e37cec194d5c437240555cfbf178"],["/sw-register.js","7bb15dec724e68f7f11afa4fb112a6fc"],["/tags/C-C/index.html","94c830f44209f1e3f0bbdf3269e2284a"],["/tags/PyTorch/index.html","a83cff2b256e4c0be65869146eed3c8c"],["/tags/iOS/index.html","c391dd5d8ac2bd4a65498d34a6bda8d2"],["/tags/index.html","9b9bc1e076bb3fe15ed336ff58409027"],["/tags/objc/index.html","19c6d6abf255c208f238d7df11b6e30f"],["/tags/python/index.html","01894bcf6f6604a896a23f9ccf4a2449"],["/tags/swift/index.html","36061a278e534a34dc0c62ffdc2292f4"],["/tags/机器学习/index.html","0dd3c6e046b28b658eace5c5b2d477ec"],["/tags/神经网络/index.html","d0fd55439c627f754afbaa7be423d52b"],["/tags/程序员/index.html","41eb88d9bff02615d3e8b69a47f89a92"],["/tags/算法/index.html","fdb099eb8e8659be0465c9326192d129"]];
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
