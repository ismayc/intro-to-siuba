(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1004:function(t,e,n){"use strict";n.r(e);var o=n(9),a=n(834),s=n(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:n[t]=function(){return r[t]}}))},p=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",A={excerpt:null,title:"Wrap up",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var b=function(t){t.options[c]&&(t.options[c]=A),s.a.util.defineReactive(t.options,c,A),t.options.computed=p.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},l=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("h1",{attrs:{id:"wrap-up"}},[o("a",{attrs:{href:"#wrap-up","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Wrap up")]),o("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[o("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nurl = "https://siublocks.s3.us-east-2.amazonaws.com/music_top200.csv"\nmusic_top200 = pd.read_csv(url)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!<b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),o("h2",{attrs:{id:"putting-it-together"}},[o("a",{attrs:{href:"#putting-it-together","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Putting it together")]),o("p",[t._v("TODO: explain")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[o("g-image",{attrs:{src:n(988),alt:"png"}})],1),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (-9223372036573935742)>")])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('(music_top200 \n  >> filter(_.position == 1)\n  >> select(_.country, _.energy, _.acousticness) \n  >> ggplot(aes("energy", "acousticness")) + geom_point()\n)')])])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[o("g-image",{attrs:{src:n(989),alt:"png"}})],1),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (301641399)>")])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: don\'t include hours, introduce a lot of baggage\n#hours = 3600*1000 \n\n(music_top200\n  >> filter(_.country == "Hong Kong")\n  >> mutate(stream_ms = _.streams * _.duration_ms)\n#  >> mutate(stream_hours = (_.streams * _.duration_ms) / hours)\n  >> select(_.stream_ms, _.position, _.acousticness, _.energy)\n  >> ggplot(aes("stream_ms", "position")) + geom_point()\n)')])])]),o("h2",{attrs:{id:"exercises"}},[o("a",{attrs:{href:"#exercises","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercises")]),o("ul",[o("li",[t._v("What is Argentina's 10th most popular song? What's their most danceable song?\n(future note: we can't filter eg 10th most danceable yet)")]),o("li",[t._v("TODO: add more")])]),o("p",[t._v("Advanced")]),o("ul",[o("li",[t._v("Notice how we could filter songs in the 5th most streamed position, but not the 5th most danceable. (Show row_number called directly on Series, invite to put into mutate)")])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof u&&u(l),"function"==typeof b&&b(l);e.default=l.exports},834:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},988:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/01e-wrap-up_3_0.0e237b4.fd205fbf68efc5d974eb3fc798a7bbe1.png",size:{width:563,height:430},sizes:"(max-width: 563px) 100vw, 563px",srcset:["/intro-to-siuba/assets/static/01e-wrap-up_3_0.0e237b4.fd205fbf68efc5d974eb3fc798a7bbe1.png 563w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 563 430' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-58705beb27f913573ff77bc98f18603a'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-58705beb27f913573ff77bc98f18603a)' width='563' height='430' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAHK0lEQVRo3tWaaWsVTRCF8///gH4IBBUSFEFQVCSuqLgrJnHfd2PivmQxpuVpOEPdutWTnnsn8X0Hhtmqt%2bqq06eqZyK5Y3Nzs7mWzj9//qSNjY1Wmf/LORENmuPXr19peXk5ffz4MZ%2bfPn0auF9dXR16Z585P3/%2bPPBcI%2bPbkkzfbfGNSZzwM6/j58%2bfaXFxMX348CGfS0tLzfXNmzfp9OnTzTe957RlaCiSse9qZey7ceqx3xsFaPCY9u/fv/OHlZWVZjAIYw3cc0UBx48fDxtEs2q4tuNeRm3VKoD7XhSAwMLCQj412FoXkIk9efIkK45vMjnq4YzM8suXL724gK9nK5kBF5ACeMHA1tbW0tevX5vZkCL0bN9L03z/9u1bmp6eTg8ePMiNyRq%2bf/%2beByE5Ww8ytp6oLS8jpdoyaivqX1QP11YMAAQjF/BmiQyDnZmZSfPz8%2bnHjx%2bNDGX4Bl7cuXMn3/%2bnXcCuAgJBq2ULhpoFvXvx4kV6//79QINSwPnz59P9%2b/cbK1AZ6m9TQAlLNIuRAmz99t7XM6CAiAd0UQCnzMsDIs%2b4gDdR3qMc3MaWaVOAnq35%2b7a8TAmgh1zAKwAX8Bige/mcfSdwsTLMuB2MZHjGVU6cOJGuXbuWFdRXW7UyfBtSQI0LdF2bSzIM6u7du%2bnZs2fN7NViQJsL1PanVwwomZw3Xe8CzAirjfdd70ptCujNBfwqYImQrbhPdlYCQeHGmTNn0pEjRwZWpG1lgszIw4cP09OnT5sZtsTB%2bqcnOdbn%2bpChvbdv32bWKQLThgnyb9/vUlsDGAAF5oAEyeS0ZO0kMHkZsbltBUFv%2biUXoJAPdPoKUMYB015cQBGetYYoGpQp1oBgtH7XkJyuRMgC5cggePPmzXTu3LlQATIlQOnAgQPp9u3bWREypUjjtYOj/mhJ23EmCIe/fPnyEBOEpV2/fj0dOnQo4wN0FkuxEduofkkHqN%2bToH9ChK5evdoowFoAHXv9%2bnUOce1KELlAFwtg5hn87OxsVjBcIAq8dswCbty4kd0gcgHNQMTOxsEAZgN3Ytn1TFDu0ScGiH2GGEBHpIC2VaBvZKZD6%2bvr%2bepXGFxjx1aBixcvprm5ueznr169Su/evWti9%2b3yS2HA0aNHMwYpAUO9tI97RATGJ0V6wQBmn5gdBTx//jx3oIYJ6t1WzMu%2bt2UY9KVLl7IboHBmBtq7Z8%2betHfv3qwgrwDkfMa6hgnarHCogLNnz/YSC1BG5WpiAbDGuoCAVxZh60Hu3r172TpQxDgZ6AEXIIdHyioCwS7RIFc6jqYt6LRFev5ZbuBBUJzk0aNH6cKFC43F9BINshQRedUooGQBSnKQLsesUYTthOqqYYIevSmjrJLu/WyPlQ%2bA4Hge0DUjJP8kyUE0aTGCBsGXqampAcCLwMu3RVncETLGRIk4bUsw5BMi3lStVn1SVN81cLmA1ny4xq1btwZM3btJ5BYiTVeuXEkvX75Mhw8fzhaGIqyFRi4Q5ShDF/Abn6NgQMnkNACWO6yD%2bzaSE7XFM%2bVQJEpglfJtj50VHnVfoMbnpATL%2bEYhOWKmEf70khGS2eOjERHyuyyW6lqiYnHCmmLbro8tWyMTtWXLtPVnaGdICmDgBD6koqIU1XZsWXfZGxTQ0k9fZqy9wX%2bVFNVOUm09XGGNik57I0I7nRanXmV9AceatpQpPnnyZE7e1KwC1USoTQF9gGCJ5JQsoG0jVtvuoxKh0AK6bo1p/d4qGrTgZetgRSAE37Vr11A7JdIVAWVEcjz2dNoai1aEiAgBQtG%2bvt%2b09CTHyrCWa1ssIkL22Q4k%2bm7bwkrAiFJ/tvw/oGZvcN%2b%2bfU1ucNTfX%2bxmaUnGR5XkKqKUmN4xwMePH%2bdwOqqXd5OTk5lMbbk5KiIUARO/0Hil9J3zl6XRB64MjByBjzBVBzJgihKt0col7BChKloAUZ2txJudfn8ZxwVKMoonCKh2796d%2b8IfJqdOncppecJh%2b6MFgyeJg4KwWsl6F0YOC1KmqUiFiQVIOqDNEqmwGaE%2bflzy9VA3s0QAxTN9gZxhuppJKQ6%2bwqD379%2bfx0CGm6gRBfh2SLSw7KrNVgyIdmS9z/W1peXfeRewqSzfF5kzg0JRXG2yxLsAFiXXbsUAPvK3GFlbnTzrHZWhZf4rtHL2nkZQpH9v66HzzGIkQw5B9eDbkQxXberqXuVsW5yyGH1rfpX1VLi0YaoD8yGLzI9RpQON40qYXelgJaEefFju59tmtkjZYQGlg/KE2rhI6eAbMuCAPSa6/izNgfYwMywgktVWO%2bbGtSSjupSDiPpBedrBIkv1YGWANtetZLAAKzOROh5%2bhiJraZOxYMtyyqyA7KTKmGnupZBSPW3W2rU/E6MM3mvX35dkvAJIb7EfQSKVTO/BgwfTsWPHhjApqqemrRqZzhbQx1HCGIDOmvpOHH8Bu8xiNP0ywZIAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},989:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/01e-wrap-up_4_0.28d0d65.bdf442e08d65c79371d4169989760222.png",size:{width:567,height:431},sizes:"(max-width: 567px) 100vw, 567px",srcset:["/intro-to-siuba/assets/static/01e-wrap-up_4_0.28d0d65.bdf442e08d65c79371d4169989760222.png 567w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 567 431' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-74aba6d22e06f027ff85032f5961d5bc'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-74aba6d22e06f027ff85032f5961d5bc)' width='567' height='431' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAJk0lEQVRo3tWaVa8VTROFz6/iZ3AJN3DNDReQ4B4kWHALBA2uwd3d3d3d3evNU1/WTtF0zz6HAN9mks7sPT1t1VWrVlVP0/fv342Le1r0/Nu3b15ydX%2bjtGSslr7bpAbp9erVK3v%2b/Lm9fPnSPnz4YO/fv7dnz57VnnFXefHiRe2u32kd/aV1qld/sZ/m1OWeaX5Vddw/fvz4PwFo8Ty4fPmyXbp0yRf69OlTLw8ePLAdO3bY4cOH7fXr1/7ekydP7PHjx36PRe3S5xQGzT1Xu9xz%2biq10/xKY5XqGIu5s6k/CIAdvnbtmt28ebM2obdv3/rip02bZsOGDbOOHTva/v37/V0NwrtaOM/0Py3sQKku10790S6Oo7rcb/3Xbqd1GovnNQ0omQAvoS779u2z06dPOwa0b9/exowZ48K5ffu2bd682QX05s0be/jwYU3KSDgtknyuMFbuedyxXF3VWKU6xnr06NHPGhDBgcVKkseOHbMrV664dkyZMsV27txp48ePtw4dOtiZM2dqC1fnObWjrsoEJIC0jXYwV1fVTppQ6vMHE4i7LmFIAHR09epV1wIEwLOePXva1KlTrXXr1jZ//nzvCCFEAfxTGlAlAEzg%2bPHj1q9fPxs1apQdPXrUZsyYYffu3bNTp045YMadrQeCuToJ%2bneDYKlPPW%2bWAADB1atX%2b6IvXrxoq1atsoEDB9q2bdts4cKFtnv3bndvUfL/nABSDJAA9OLdu3dt%2b/btvtgNGzbYoEGD/PmiRYvcFHCN0pZ/EgRzXkAC0ECgPOXdu3e%2b%2byD/kiVLrFWrVv4eIHnkyBEXQjrBhgfBuOtfvnyxr1%2b/ukDiwGjBjRs3bPLkyTZp0iQbPHiwjRw50ncfADx58qRt3LjR/yPdlmhAXMjv1IBSn0U3yA6dOHHCzp079wPB0M4NGDDAeQC7v379eps4caK7xM%2bfPzupkNaUyBDa0VKSJCJUqiuNJSJUNdZPVJiFsIMAH5ogySMtmN/WrVt955HcnTt3bM2aNbZs2TInQ926dbO9e/d65zmKXI8Kl8CsZAJVIFgPjLM8IMWAaAKoOEgPCEKA%2bvTpY9OnT3eCxHX27FmvAygjBjQXmJprAmnbnAnkMKAEuHWZoAZGK9jZtWvXugts166dC%2bXAgQOuEbzHOwgpBal0V9K6emBWDwSrxmoRCEYhpF4Am%2bc3fAA17969u7Vt29Z/o/4IAwHEzjGbdHcaVgOi2kcBiLisW7fO7t%2b/b7du3XJajMqz8K5du/odLMADEDYLZKQNslPFFfF/LDH8Tp9rHrm6UjsBYKkdc6uBIL6dHSxpAKCo0JhFAIijR4%2b2sWPHWqdOnZwODx061LmAcgrQZCYRd6VheQA%2bHJqrhacYgIrzG5vnPYAOTSAv0KVLF3edw4cPd5NACOfPn7ctW7a4FkRTaFgM2LNnj7u49KITFkADhNCmTRvHAVQdN0g9iyVOQCDjxo3zHAFCQAukASJGDUuFifBYCAyQxRHpYRIxmGDXN23a5IwP94ftf/r0yd0fAiBSRBN4jyAJWgx1ZkDuIi0twQAtXqbTXAxIg6ESBtQEAJs7dOiQCwAWSEFCcQDUGVtHUJgCz5QW4/mcOXNceITN5AjAC7lQQBKN4FkuRVXFHkspsSomGFNipT5/SIkBWCwqZwJSGwSiyWD7Bw8edBqMygOG7DiACEWmY4QhIaIx5BnFEhvOBMTtSyCogSQEtAAuQG6A9wBAtICs8axZs2zx4sWOAwqM0B5JvyG9AADGDpbCYRWAkEaoOHbOtXz5ck%2bY8h%2bAhCYTNV6/ft1TaALSho4Gq4hQulNqCCCiNSyaa8SIER4pQpi48CwkT7B7ucK/eS5QFQz9dC6gY6%2bUCOXQl4YQJ5AfIcycOdMzRGgAHcMFVqxYUQt/48LreYF0rCovkAqguV6gmBOsigVikU0rPwjgYfO9evVybsAgBEiAKnWYFvW4wqhFDZkVjiFxDgQjiKQAQ3DUu3dvXzgZI8JlNIVMEh4ggpl4QWz/fz8XSDUgdYOpBMUOsXF2vn///r7ouXPnOqtcunSpmwOeIA6MKyS4QoMkhIZKitIIVJfLK0Va3NlJFgsf4DcLIzNEloiEKVoUM8W04z04RDx//NvRoDAlezbIQ3Y210E8sKQD0mZ9%2b/a1lStXelsSJgiPxU%2bYMMEzRFBmFg1ucMc1Yhr0xX8EFIUac5G6xzC66nA03tPD0XT%2bPx2O5tJi0YenKqQdZTchPRoUSgwHwB326NHDw2JUDZJEEhUhKc1OHAGpol1JXWO%2bMJrMHzOBXEqsBDCR5ek9RY8IQVEmuKCkCQJh8WgHWgKVziU147gsnAANthmx4o8fjtYDwRjqKuHBISqLQrXpY8GCBTZkyBDvl9%2bcJjEwwpk9e3YtoIoZaH1JIgLFfzSFtvSrMX87E2wOESoBjEJmbJ4jczSARQB2JE1wj3gG8IKBeR%2bs4R1iEdJtIk9EpvQRiRR1COKPpMTqaUBz1YsFcUGRSZmx0Ki%2bAGDnzp3dBQKEOnyFNyA4ziVYNO6TE2lpR2oWqSZWnQuUzhOyPKCUFo/EI0eEUmBCEIAg7Vk8wgAHWCwYgFbgKsk7UI/7RL3RBIgTEwMnEAJ5BAQRAzJ9AJXjDyUBRCar/5UmkJ4N1mOCaV2kvai3XI%2bOx9CIXbt2OTiSiGEyaA7fIEWgJPeAsGQuCAPB8I5MpJ6WCp9kRsKRrAboYynSXWlWNweCJReZY3IRVONndvrEhmfEFwRW8v3z5s3zxcIowQawBI0iEMOMqk6hNEd%2bo0kwVvoQC2WdWQGA4thr1eHirxxYxsPRFLDUhkkpH8nkyVWISDFxcpL8lvutdziKYOkTjGHxFM41GKMyH4BaViUVS8nIqP4lCp22iSFq1DDlIlWHAPUxRmpuVXOUK2V8HeFVEiFd%2blaAF1E3JInrUG6Q3zyTyfC%2bCohOO31hyl2nzHqWa0efgKXG0gkT7zEHCu1jG4r6UzsJT3NUO%2bZFoY1yID%2bZQPotLQsGeEhuUkijE%2bdToLjKEqcxBbZLvYraUOgDGs0uSeO42FmNhbrGdrShYAaavK4LFy54f5pTbKO%2b8D7pJvO76AUiJ9Buxl2NBYmmPCJ9R4UdkKutuuI46fip2y7NKz5n3NwGN1VNIvcFab1367Vh10mbQZsJpXGHHKXhLgFgaDK7KaFWjdeS%2bZXm1tScBbXkM/VSG%2b04AmDhcAFYHyoLKQLxodBElzwTSFWN19JP9nNCaLK/eFXtmFT1VzXwV6//AAR0qlDIaVeyAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}}}]);