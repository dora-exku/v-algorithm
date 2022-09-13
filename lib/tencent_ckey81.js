window = {
  document: {
    // URL: "https://v.qq.com/x/cover/324olz7ilvo2j5f/r0044z77vu7.html",
    URL: "https://v.qq.com/x/cover/2w2legt0g8z26al/q0043w6hy6v.html",
    referrer: "https://v.qq.com/channel/choice?channel_2022=1"
  },
  navigator: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    platform: 'MacIntel'
  }
}

//209213E429A0164D404F2913B858D3FF1333756D32FD4FCBE716DB9442BADD76CEBFE90D226E3EC9CD001B6C38A89EC868BF207141E44E36246282690631BCAA4E887D37E2782E3E15594E392415EAEF1C42364A3A0223B5F508B8384C9BC49231E92E6565C2748A3CEFBCCCFBF49CA8F1F95486BCC79244AE9ED7C33B68E89F8A5595E7EE2CF37FDD14152A55BFD4D4304FDCC53D9437DAD2FE60FB403E8D6CAD4CB42D34E66B09F6086F65A83B6B4C302628F4FCDEF6796A926FB0276A510C46DAC0093DE20CE5E616C75011724F0B66C1AA20391C83292B2AA150A46C4F9B
// https://h5vv6.video.qq.com/getvinfo?charge=0&otype=json&defnpayver=3&spau=1&spaudio=0&spwm=1&sphls=2&host=v.qq.com&refer=https://v.qq.com/x/cover/324olz7ilvo2j5f/r0044z77vu7.html&ehost=https://v.qq.com/x/cover/324olz7ilvo2j5f/r0044z77vu7.html&sphttps=1&encryptVer=8.1&cKey=&clip=4&guid=c504bdf377891e043b5a8618b5a4fe27&flowid=0761875b5f1a45f9095627841b709bc2&platform=10901&sdtfrom=v1010&appVer=3.5.57&unid=&auth_from=&auth_ext=&vid=r0044z77vu7&defn=sd&fhdswitch=0&dtype=3&spsrt=2&tm=1661933777&lang_code=0&logintoken={"access_token":"9F78F31093E1865B6A43CF1664064E01","appid":"101483052","vusession":"lz_A55qgHVOhyPFxZvu4wQ.N","openid":"9DC2DF0053768143217AC15D2E0E1465","vuserid":"774829724","video_guid":"c504bdf377891e043b5a8618b5a4fe27","main_login":"qq"}&spvvpay=1&spadseg=3&hevclv=16&spsfrhdr=0&spvideo=0&drm=40&callback=getinfo_callback_249507

const getCkey = function () {
  var e, t, o, r, i, n = 253, a = -496, s = s || function (e, t) {
    var o = {}, r = o.a = {}, i = function () {
    }, a = r.b = {
      c: function (e) {
        for (var t = "", o = 0; o < "ॅूॅक़".length; o++) t += String.fromCharCode(2348 ^ "ॅूॅक़".charCodeAt(o));
        i.prototype = this;
        var r = new i;
        return e && r.d(e), r.hasOwnProperty(t) || (r.init = function () {
          r.$super.init.apply(this, arguments)
        }), r.init.prototype = r, r.$super = this, r
      }, create: function () {
        var e = this.c();
        return e.init.apply(e, arguments), e
      }, init: function () {
      }, d: function (e) {
        for (var t = "", o = 0; o < ";͙ͥ;͸ͣͤͭ".length; o++) t += String.fromCharCode(778 ^ ";͙ͥ;͸ͣͤͭ".charCodeAt(o));
        for (var r in e) e.hasOwnProperty(r) && (this[r] = e[r]);
        e.hasOwnProperty(t) && (this.toString = e.toString)
      }, e: function () {
        return this.init.prototype.c(this)
      }
    }, s = r.f = a.c({
      init: function (e, t) {
        e = this.g = e || [], this.h = null != t ? t : (-2630 + n + 10924) * e.length
      }, toString: function (e) {
        return (e || p).i(this)
      }, concat: function (e) {
        var t = this.g, o = e.g, r = this.h;
        if (e = e.h, this.j(), r % 4) for (var i = 0; i < e; i++) t[r + i >>> 2] |= (o[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8; else if (65535 < o.length) for (i = 0; i < e; i += 4) t[r + i >>> 2] = o[i >>> 2]; else t.push.apply(t, o);
        return this.h += e, this
      }, j: function () {
        var t = this.g, o = this.h;
        t[o >>> 2] &= 4294967295 << 32 - o % 4 * 8, t.length = e.ceil(o / 4)
      }, e: function () {
        var e = a.e.call(this);
        return e.g = this.g.slice(0), e
      }, random: function (t) {
        for (var o = [], r = 0; r < t; r += 4) o.push(4294967296 * e.random() | 0);
        return new s.init(o, t)
      }
    }), l = o.k = {}, p = l.l = {
      i: function (e) {
        for (var t = "", o = 0; o < "".length; o++) t += String.fromCharCode(368 ^ "".charCodeAt(o));
        var r = e.g;
        e = e.h;
        for (var i = [], n = 0; n < e; n++) {
          var a = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
          i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
        }
        return i.join(t)
      }, parse: function (e) {
        for (var t = e.length, o = [], r = 0; r < t; r += 2) o[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
        return new s.init(o, t / 2)
      }
    }, c = l.m = {
      i: function (e) {
        for (var t = "", o = 0; o < "".length; o++) t += String.fromCharCode(2238 ^ "".charCodeAt(o));
        var r = e.g;
        e = e.h;
        for (var i = [], n = 0; n < e; n++) i.push(String.fromCharCode(r[n >>> 2] >>> 24 - n % 4 * 8 & 255));
        return i.join(t)
      }, parse: function (e) {
        for (var t = e.length, o = [], r = 0; r < t; r++) o[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
        return new s.init(o, t)
      }
    }, d = l.n = {
      i: function (e) {
        for (var t = "", o = 0, r = "ØôùóúçøðñµÀÁÓ¸­µñôáô"; o < r.length; o++) t += String.fromCharCode(149 ^ r.charCodeAt(o));
        try {
          return decodeURIComponent(escape(c.i(e)))
        } catch (e) {
          throw Error(t)
        }
      }, parse: function (e) {
        return c.parse(unescape(encodeURIComponent(e)))
      }
    }, u = r.o = a.c({
      p: function () {
        this.q = new s.init, this.r = 0
      }, s: function (e) {
        for (var t = "", o = 0; o < "ྦྷྠྦ྽ྺླ".length; o++) t += String.fromCharCode(4052 ^ "ྦྷྠྦ྽ྺླ".charCodeAt(o));
        t == typeof e && (e = d.parse(e)), this.q.concat(e), this.r += e.h
      }, t: function (t) {
        var o = this.q, r = o.g, i = o.h, n = this.u, a = i / (4 * n);
        if (t = (a = t ? e.ceil(a) : e.max((0 | a) - this.v, 0)) * n, i = e.min(4 * t, i), t) {
          for (var l = 0; l < t; l += n) this.w(r, l);
          l = r.splice(0, t), o.h -= i
        }
        return new s.init(l, i)
      }, e: function () {
        var e = a.e.call(this);
        return e.q = this.q.e(), e
      }, v: 0
    });
    r.x = u.c({
      y: a.c(), init: function (e) {
        this.y = this.y.c(e), this.p()
      }, p: function () {
        u.p.call(this), this.z()
      }, A: function (e) {
        return this.s(e), this.t(), this
      }, B: function (e) {
        return e && this.s(e), this.C()
      }, u: 16, D: function (e) {
        return function (t, o) {
          return new e.init(o).B(t)
        }
      }, F: function (e) {
        return function (t, o) {
          return new A.HMAC.init(e, o).B(t)
        }
      }
    });
    var A = o.G = {};
    return o
  }(Math);

  function l(e) {
    return p.call(this, 2, e)
  }

  function p(e) {
    for (var t = "", o = 0; o < "ऊ".length; o++) t += String.fromCharCode(2422 ^ "ऊ".charCodeAt(o));
    for (var r = "", i = 0; i < "ޭ".length; i++) r += String.fromCharCode(2001 ^ "ޭ".charCodeAt(i));
    for (var c = "", d = 0; d < "Ҡ".length; d++) c += String.fromCharCode(1244 ^ "Ҡ".charCodeAt(d));
    for (var u = "", A = 0; A < "ഇ".length; A++) u += String.fromCharCode(3451 ^ "ഇ".charCodeAt(A));
    for (var _ = "", E = 0; E < "׿".length; E++) _ += String.fromCharCode(1411 ^ "׿".charCodeAt(E));
    for (var g = "", f = 0; f < "ࢨ".length; f++) g += String.fromCharCode(2260 ^ "ࢨ".charCodeAt(f));
    for (var h = "", v = 0; v < "ଶ".length; v++) h += String.fromCharCode(2890 ^ "ଶ".charCodeAt(v));
    for (var y = "", m = 0; m < "ƨƢǶƦǶƧǵǱƧƤ".length; m++) y += String.fromCharCode(453 ^ "ƨƢǶƦǶƧǵǱƧƤ".charCodeAt(m));
    for (var T = "", C = 0; C < "੸".length; C++) T += String.fromCharCode(2564 ^ "੸".charCodeAt(C));
    for (var I = "", P = 0; P < "ࡌ".length; P++) I += String.fromCharCode(2096 ^ "ࡌ".charCodeAt(P));
    for (var x = "", N = 0; N < "ٶ".length; N++) x += String.fromCharCode(1546 ^ "ٶ".charCodeAt(N));
    for (var S = "", D = 0; D < "ઈ".length; D++) S += String.fromCharCode(2804 ^ "ઈ".charCodeAt(D));
    for (var O = "", b = 0; b < "ȧ".length; b++) O += String.fromCharCode(603 ^ "ȧ".charCodeAt(b));
    for (var L = "", R = 0; R < "о".length; R++) L += String.fromCharCode(1090 ^ "о".charCodeAt(R));
    for (var w = "", M = 0; M < "ߡ".length; M++) w += String.fromCharCode(1949 ^ "ߡ".charCodeAt(M));
    for (var V = "", B = 0; B < "̅".length; B++) V += String.fromCharCode(889 ^ "̅".charCodeAt(B));
    for (var k = "", K = 0; K < "".length; K++) k += String.fromCharCode(3568 ^ "".charCodeAt(K));
    for (var Y = "", F = 0; F < "".length; F++) Y += String.fromCharCode(777 ^ "".charCodeAt(F));
    for (var Q = "", U = 0; U < "".length; U++) Q += String.fromCharCode(2613 ^ "".charCodeAt(U));
    for (var H = "", $ = 0; $ < "´¹²¯".length; $++) H += String.fromCharCode(214 ^ "´¹²¯".charCodeAt($));
    for (var G = "", q = 0; q < "ۘە۞ۃ".length; q++) G += String.fromCharCode(1722 ^ "ۘە۞ۃ".charCodeAt(q));
    for (var j = "", W = 0; W < "٨٩٨٣".length; W++) j += String.fromCharCode(1542 ^ "٨٩٨٣".charCodeAt(W));
    for (var z = "", X = 0; X < "ÁÌ".length; X++) z += String.fromCharCode(168 ^ "ÁÌ".charCodeAt(X));
    for (var J = "", Z = 0; Z < "ۆۋ۔".length; Z++) J += String.fromCharCode(1698 ^ "ۆۋ۔".charCodeAt(Z));
    for (var ee = "", te = 0, oe = "ଶଋ୑୞ଈ଍଍୑୙ଶ"; te < oe.length; te++) ee += String.fromCharCode(2921 ^ oe.charCodeAt(te));
    for (var re = "", ie = 0; ie < "יׇ׀׊ׁי".length; ie++) re += String.fromCharCode(1454 ^ "יׇ׀׊ׁי".charCodeAt(ie));
    switch (e) {
      case 0:
        // var ne = [];
        // window[re] === window ? ne.push(0) : ne.push(1);
        // try {
        //     var ae = ee + Math.floor(1e7 * Math.random()), se = document.createElement(J);
        //     se.setAttribute(z, ae), se.style.La = j, (document.body || document.getElementsByTagName(G)[0]).appendChild(se), document.getElementById(ae) ? ne.push(0) : ne.push(1), (document.body || document.getElementsByTagName(H)[0]).removeChild(se)
        // } catch (e) {
        //     ne.push(1)
        // }
        // return ne.join(Q);
        return '00'
      case 1:
        var le = arguments[1], pe = new s.a.f.init([1332468387, -1641050960, 2136896045, -1629555948], 16),
          ce = new s.a.f.init([22039283, 1457920463, 776125350, -1941999367], 16);
        return s.Ga.$(le, pe, {ra: ce, ba: s.ba.la, qa: s.na.ma}).xa.toString().toUpperCase();
      case 2:
        return (fe = arguments[1]) ? fe.length > 48 ? fe.substr(0, 48) : fe : Y;
      case 3:
        var de = window.document.URL, ue = window.navigator.userAgent.toLowerCase(), Ae = k;
        window.document.referrer.length > 0 && (Ae = window.document.referrer);
        try {
          0 == Ae.length && opener.location.href.length > 0 && (Ae = opener.location.href)
        } catch (e) {
        }
        var _e = window.navigator.appCodeName, Ee = window.navigator.appName,
          ge = window.navigator.platform;
        de = l(de), Ae = l(Ae)
        return de + V + (ue = l(ue)) + w + Ae + L + _e + O + Ee + S + ge;
      case 4:
        var fe = arguments[1], he = 0;
        if (0 == fe.length) return he;
        for (n = 0; n < fe.length; n++) {
          var ve = fe.charCodeAt(n);
          he = (he = (he << 5) - he + ve) & he
        }
        return he;
      case 5:


        var c3 = function () {
          return p.call(this, 3)
        }();

        // 浏览      https://v.qq.com/x/cover/2w2legt0g8z26al/q0043w6|mozilla/5.0 (macintosh; intel mac os x 10_15_7) |https://m.v.qq.com/|Mozilla|Netscape|MacIntel
        // 本地 c3   https://v.qq.com/x/cover/2w2legt0g8z26al/n0044or|mozilla/5.0 (macintosh; intel mac os x 10_15_7) |https://m.v.qq.com/|Mozilla|Netscape|MacIntel

        var call0 = function () {
          return p.call(this, 0)
        }()

        // 浏览 00
        // 本地 00

        var ye = x + arguments[a + n + 8787] + I + arguments[2] + T + y + h + arguments[3] + g + arguments[4] + _ + arguments[5] + u + c3 + c + call0 + r;

        a1 = function (e) {
          return p.call(this, 1, e)
        }

        he = function (e) {

          // 浏览 e         |q0043w6hy6v|1661942559|mg3c3b04ba|3.5.57|c504bdf377891e043b5a8618b5a4fe27|10901|https://v.qq.com/x/cover/2w2legt0g8z26al/q0043w6|mozilla/5.0 (macintosh; intel mac os x 10_15_7) |https://m.v.qq.com/|Mozilla|Netscape|MacIntel|00|
          // 本地 e call4 e |q0043w6hy6v|1661942559|mg3c3b04ba|3.5.57|c504bdf377891e043b5a8618b5a4fe27|10901|https://v.qq.com/x/cover/2w2legt0g8z26al/n0044or|mozilla/5.0 (macintosh; intel mac os x 10_15_7) |https://m.v.qq.com/|Mozilla|Netscape|MacIntel|00|
          return p.call(this, 4, e)
        }

        // 浏览 1761917109
        // 本地 1639931955
        // console.log('he', he(ye))
        // console.log('ye', ye)

        return a1(t + he(ye) + ye)


      // return function (e) {
      //     return p.call(this, 1, e)
      // }(t + () + ye)
    }
  }

  return function () {
    for (var e = "", t = 0, o = "±²³´µ¶·¸¹º»¼½¾¿ ¡¢£¤¥¦§¨©ªàáâãäåæçèéûÿí"; t < o.length; t++) e += String.fromCharCode(208 ^ o.charCodeAt(t));
    var r = s, i = r.a.f;
    r.k.H = {
      i: function (e) {
        for (var t = "", o = 0; o < "".length; o++) t += String.fromCharCode(4077 ^ "".charCodeAt(o));
        var r = e.g, i = e.h, n = this.I;
        e.j(), e = [];
        for (var a = 0; a < i; a += 3) for (var s = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, l = 0; 4 > l && a + .75 * l < i; l++) e.push(n.charAt(s >>> 6 * (3 - l) & 63));
        if (r = n.charAt(64)) for (; e.length % 4;) e.push(r);
        return e.join(t)
      }, parse: function (e) {
        var t = e.length, o = this.I;
        (r = o.charAt(64)) && -1 != (r = e.indexOf(r)) && (t = r);
        for (var r = [], n = 0, a = 0; a < t; a++) if (a % 4) {
          var s = o.indexOf(e.charAt(a - 1)) << a % 4 * 2, l = o.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
          r[n >>> 2] |= (s | l) << 24 - n % 4 * 8, n++
        }
        return i.create(r, n)
      }, I: e
    }
  }(), function (e) {
    function t(e, t, o, r, i, n, a) {
      return u.call(this, 0, e, t, o, r, i, n, a)
    }

    function o(e, t, o, r, i, n, a) {
      return u.call(this, 1, e, t, o, r, i, n, a)
    }

    function r(e, t, o, r, i, n, a) {
      return u.call(this, 2, e, t, o, r, i, n, a)
    }

    function i(e, t, o, r, i, n, a) {
      return u.call(this, 3, e, t, o, r, i, n, a)
    }

    for (var n = s, a = (p = n.a).f, l = p.x, p = n.G, c = [], d = 0; 64 > d; d++) c[d] = 4294967296 * e.abs(e.sin(d + 1)) | 0;

    function u(e) {
      switch (e) {
        case 0:
          var t = arguments[1], o = arguments[2], r = arguments[3], i = arguments[4], n = arguments[5],
            a = arguments[6];
          return ((t = t + (o & r | ~o & i) + n + arguments[7]) << a | t >>> 32 - a) + o;
        case 1:
          return ((t = (t = arguments[1]) + ((o = arguments[2]) & (i = arguments[4]) | (r = arguments[3]) & ~i) + (n = arguments[5]) + arguments[7]) << (a = arguments[6]) | t >>> 32 - a) + o;
        case 2:
          return ((t = (t = arguments[1]) + ((o = arguments[2]) ^ (r = arguments[3]) ^ (i = arguments[4])) + (n = arguments[5]) + arguments[7]) << (a = arguments[6]) | t >>> 32 - a) + o;
        case 3:
          return ((t = (t = arguments[1]) + ((r = arguments[3]) ^ ((o = arguments[2]) | ~(i = arguments[4]))) + (n = arguments[5]) + arguments[7]) << (a = arguments[6]) | t >>> 32 - a) + o
      }
    }

    p = p.J = l.c({
      z: function () {
        this.K = new a.init([1732584193, 4023233417, 2562383102, 271733878])
      }, w: function (e, n) {
        for (var a = 0; 16 > a; a++) {
          var s = e[d = n + a];
          e[d] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
        }
        a = this.K.g;
        var l, p, d = e[n + 0], u = (s = e[n + 1], e[n + 2]), A = e[n + 3], _ = e[n + 4], E = e[n + 5],
          g = e[n + 6], f = e[n + 7], h = e[n + 8], v = e[n + 9], y = e[n + 10], m = e[n + 11],
          T = e[n + 12], C = e[n + 13], I = e[n + 14], P = e[n + 15], x = a[0],
          N = i(N = i(N = i(N = i(N = r(N = r(N = r(N = r(N = o(N = o(N = o(N = o(N = t(N = t(N = t(N = t(N = a[1], p = t(p = a[2], l = t(l = a[3], x = t(x, N, p, l, d, 7, c[0]), N, p, s, 12, c[1]), x, N, u, 17, c[2]), l, x, A, 22, c[3]), p = t(p, l = t(l, x = t(x, N, p, l, _, 7, c[4]), N, p, E, 12, c[5]), x, N, g, 17, c[6]), l, x, f, 22, c[7]), p = t(p, l = t(l, x = t(x, N, p, l, h, 7, c[8]), N, p, v, 12, c[9]), x, N, y, 17, c[10]), l, x, m, 22, c[11]), p = t(p, l = t(l, x = t(x, N, p, l, T, 7, c[12]), N, p, C, 12, c[13]), x, N, I, 17, c[14]), l, x, P, 22, c[15]), p = o(p, l = o(l, x = o(x, N, p, l, s, 5, c[16]), N, p, g, 9, c[17]), x, N, m, 14, c[18]), l, x, d, 20, c[19]), p = o(p, l = o(l, x = o(x, N, p, l, E, 5, c[20]), N, p, y, 9, c[21]), x, N, P, 14, c[22]), l, x, _, 20, c[23]), p = o(p, l = o(l, x = o(x, N, p, l, v, 5, c[24]), N, p, I, 9, c[25]), x, N, A, 14, c[26]), l, x, h, 20, c[27]), p = o(p, l = o(l, x = o(x, N, p, l, C, 5, c[28]), N, p, u, 9, c[29]), x, N, f, 14, c[30]), l, x, T, 20, c[31]), p = r(p, l = r(l, x = r(x, N, p, l, E, 4, c[32]), N, p, h, 11, c[33]), x, N, m, 16, c[34]), l, x, I, 23, c[35]), p = r(p, l = r(l, x = r(x, N, p, l, s, 4, c[36]), N, p, _, 11, c[37]), x, N, f, 16, c[38]), l, x, y, 23, c[39]), p = r(p, l = r(l, x = r(x, N, p, l, C, 4, c[40]), N, p, d, 11, c[41]), x, N, A, 16, c[42]), l, x, g, 23, c[43]), p = r(p, l = r(l, x = r(x, N, p, l, v, 4, c[44]), N, p, T, 11, c[45]), x, N, P, 16, c[46]), l, x, u, 23, c[47]), p = i(p, l = i(l, x = i(x, N, p, l, d, 6, c[48]), N, p, f, 10, c[49]), x, N, I, 15, c[50]), l, x, E, 21, c[51]), p = i(p, l = i(l, x = i(x, N, p, l, T, 6, c[52]), N, p, A, 10, c[53]), x, N, y, 15, c[54]), l, x, s, 21, c[55]), p = i(p, l = i(l, x = i(x, N, p, l, h, 6, c[56]), N, p, P, 10, c[57]), x, N, g, 15, c[58]), l, x, C, 21, c[59]), p = i(p, l = i(l, x = i(x, N, p, l, _, 6, c[60]), N, p, m, 10, c[61]), x, N, u, 15, c[62]), l, x, v, 21, c[63]);
        a[0] = a[0] + x | 0, a[1] = a[1] + N | 0, a[2] = a[2] + p | 0, a[3] = a[3] + l | 0
      }, C: function () {
        var t = this.q, o = t.g, r = 8 * this.r, i = 8 * t.h;
        o[i >>> 5] |= 128 << 24 - i % 32;
        var n = e.floor(r / 4294967296);
        for (o[15 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), o[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.h = 4 * (o.length + 1), this.t(), o = (t = this.K).g, r = 0; 4 > r; r++) i = o[r], o[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
        return t
      }, e: function () {
        var e = l.e.call(this);
        return e.K = this.K.e(), e
      }
    }), n.J = l.D(p), n.L = l.F(p)
  }(Math), o = (e = (t = s).a).b, r = e.f, i = (e = t.G).M = o.c({
    y: o.c({N: 4, O: e.J, P: 1}),
    init: function (e) {
      this.y = this.y.c(e)
    },
    Q: function (e, t) {
      for (var o = (s = this.y).O.create(), i = r.create(), n = i.g, a = s.N, s = s.P; n.length < a;) {
        l && o.A(l);
        var l = o.A(e).B(t);
        o.p();
        for (var p = 1; p < s; p++) l = o.B(l), o.p();
        i.concat(l)
      }
      return i.h = 4 * a, i
    }
  }), t.M = function (e, t, o) {
    return i.create(o).Q(e, t)
  }, s.a.R || function (e) {
    var t = (_ = s).a, o = t.b, r = t.f, i = t.o, n = _.k.H, a = _.G.M, l = t.R = i.c({
      y: o.c(), S: function (e, t) {
        return this.create(this.T, e, t)
      }, U: function (e, t) {
        return this.create(this.V, e, t)
      }, init: function (e, t, o) {
        this.y = this.y.c(o), this.W = e, this.X = t, this.p()
      }, p: function () {
        i.p.call(this), this.z()
      }, Y: function (e) {
        return this.s(e), this.t()
      }, B: function (e) {
        return e && this.s(e), this.C()
      }, N: 4, Z: 4, T: 1, V: 2, D: function (e) {
        return {
          $: function (t, o, r) {
            for (var i = "", n = 0; n < "ǠǧǡǺǽǴ".length; n++) i += String.fromCharCode(403 ^ "ǠǧǡǺǽǴ".charCodeAt(n));
            return (i == typeof o ? E : A).$(e, t, o, r)
          }, _: function (t, o, r) {
            for (var i = "", n = 0; n < "ࣘࣟࣙࣂࣅ࣌".length; n++) i += String.fromCharCode(2219 ^ "ࣘࣟࣙࣂࣅ࣌".charCodeAt(n));
            return (i == typeof o ? E : A)._(e, t, o, r)
          }
        }
      }
    });
    t.aa = l.c({
      C: function () {
        return this.t(!0)
      }, u: 1
    });
    var p = _.ba = {}, c = function (e, t, o) {
      var r = this.ca;
      r ? this.ca = void 0 : r = this.da;
      for (var i = 0; i < o; i++) e[t + i] ^= r[i]
    }, d = (t.ea = o.c({
      S: function (e, t) {
        return this.fa.create(e, t)
      }, U: function (e, t) {
        return this.ga.create(e, t)
      }, init: function (e, t) {
        this.ha = e, this.ca = t
      }
    })).c();
    d.fa = d.c({
      ia: function (e, t) {
        var o = this.ha, r = o.u;
        c.call(this, e, t, r), o.ja(e, t), this.da = e.slice(t, t + r)
      }
    }), d.ga = d.c({
      ia: function (e, t) {
        var o = this.ha, r = o.u, i = e.slice(t, t + r);
        o.ka(e, t), c.call(this, e, t, r), this.da = i
      }
    }), p = p.la = d, d = (_.na = {}).ma = {
      na: function (e, t) {
        for (var o, i = (o = (o = 4 * t) - e.h % o) << 24 | o << 16 | o << 8 | o, n = [], a = 0; a < o; a += 4) n.push(i);
        o = r.create(n, o), e.concat(o)
      }, oa: function (e) {
        e.h -= 255 & e.g[e.h - 1 >>> 2]
      }
    }, t.pa = l.c({
      y: l.y.c({ba: p, qa: d}), p: function () {
        l.p.call(this);
        var e = (t = this.y).ra, t = t.ba;
        if (this.W == this.T) var o = t.S; else o = t.U, this.v = 1;
        this.sa = o.call(t, this, e && e.g)
      }, w: function (e, t) {
        this.sa.ia(e, t)
      }, C: function () {
        var e = this.y.qa;
        if (this.W == this.T) {
          e.na(this.q, this.u);
          var t = this.t(!0)
        } else t = this.t(!0), e.oa(t);
        return t
      }, u: 4
    });
    var u = t.ta = o.c({
      init: function (e) {
        this.d(e)
      }, toString: function (e) {
        return (e || this.ua).i(this)
      }
    }), A = (p = (_.wa = {}).va = {
      i: function (e) {
        var t = e.xa;
        return ((e = e.ya) ? r.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(n)
      }, parse: function (e) {
        var t = (e = n.parse(e)).g;
        if (1398893684 == t[0] && 1701076831 == t[1]) {
          var o = r.create(t.slice(2, 4));
          t.splice(0, 4), e.h -= 16
        }
        return u.create({xa: e, ya: o})
      }
    }, t.za = o.c({
      y: o.c({wa: p}), $: function (e, t, o, r) {
        r = this.y.c(r);
        var i = e.S(o, r);
        return t = i.B(t), i = i.y, u.create({
          xa: t,
          Aa: o,
          ra: i.ra,
          Ba: e,
          ba: i.ba,
          qa: i.qa,
          u: e.u,
          ua: r.wa
        })
      }, _: function (e, t, o, r) {
        return r = this.y.c(r), t = this.Ca(t, r.wa), e.U(o, r).B(t.xa)
      }, Ca: function (e, t) {
        for (var o = "", r = 0; r < "ࠕࠒࠔࠏࠈࠁ".length; r++) o += String.fromCharCode(2150 ^ "ࠕࠒࠔࠏࠈࠁ".charCodeAt(r));
        return o == typeof e ? t.parse(e, this) : e
      }
    })), _ = (_.Da = {}).va = {
      Ea: function (e, t, o, i) {
        return i || (i = r.random(8)), e = a.create({N: t + o}).Q(e, i), o = r.create(e.g.slice(t), 4 * o), e.h = 4 * t, u.create({
          Aa: e,
          ra: o,
          ya: i
        })
      }
    }, E = t.Fa = A.c({
      y: A.y.c({Da: _}), $: function (e, t, o, r) {
        return o = (r = this.y.c(r)).Da.Ea(o, e.N, e.Z), r.ra = o.ra, (e = A.$.call(this, e, t, o.Aa, r)).d(o), e
      }, _: function (e, t, o, r) {
        return r = this.y.c(r), t = this.Ca(t, r.wa), o = r.Da.Ea(o, e.N, e.Z, t.ya), r.ra = o.ra, A._.call(this, e, t, o.Aa, r)
      }
    })
  }(), function () {
    for (var e = s, t = e.a.pa, o = e.G, r = [], i = [], n = [], a = [], l = [], p = [], c = [], d = [], u = [], A = [], _ = [], E = 0; 256 > E; E++) _[E] = 128 > E ? E << 1 : E << 1 ^ 283;
    var g = 0, f = 0;
    for (E = 0; 256 > E; E++) {
      var h = (h = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4) >>> 8 ^ 255 & h ^ 99;
      r[g] = h, i[h] = g;
      var v = _[g], y = _[v], m = _[y], T = 257 * _[h] ^ 16843008 * h;
      n[g] = T << 24 | T >>> 8, a[g] = T << 16 | T >>> 16, l[g] = T << 8 | T >>> 24, p[g] = T, T = 16843009 * m ^ 65537 * y ^ 257 * v ^ 16843008 * g, c[h] = T << 24 | T >>> 8, d[h] = T << 16 | T >>> 16, u[h] = T << 8 | T >>> 24, A[h] = T, g ? (g = v ^ _[_[_[m ^ v]]], f ^= _[_[f]]) : g = f = 1
    }
    var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    o = o.Ga = t.c({
      z: function () {
        for (var e = (o = this.X).g, t = o.h / 4, o = 4 * ((this.Ha = t + 6) + 1), i = this.Ia = [], n = 0; n < o; n++) if (n < t) i[n] = e[n]; else {
          var a = i[n - 1];
          n % t ? 6 < t && 4 == n % t && (a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a]) : (a = r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[255 & a], a ^= C[n / t | 0] << 24), i[n] = i[n - t] ^ a
        }
        for (e = this.Ja = [], t = 0; t < o; t++) n = o - t, a = t % 4 ? i[n] : i[n - 4], e[t] = 4 > t || 4 >= n ? a : c[r[a >>> 24]] ^ d[r[a >>> 16 & 255]] ^ u[r[a >>> 8 & 255]] ^ A[r[255 & a]]
      }, ja: function (e, t) {
        this.Ka(e, t, this.Ia, n, a, l, p, r)
      }, ka: function (e, t) {
        var o = e[t + 1];
        e[t + 1] = e[t + 3], e[t + 3] = o, this.Ka(e, t, this.Ja, c, d, u, A, i), o = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = o
      }, Ka: function (e, t, o, r, i, n, a, s) {
        for (var l = this.Ha, p = e[t] ^ o[0], c = e[t + 1] ^ o[1], d = e[t + 2] ^ o[2], u = e[t + 3] ^ o[3], A = 4, _ = 1; _ < l; _++) {
          var E = r[p >>> 24] ^ i[c >>> 16 & 255] ^ n[d >>> 8 & 255] ^ a[255 & u] ^ o[A++],
            g = r[c >>> 24] ^ i[d >>> 16 & 255] ^ n[u >>> 8 & 255] ^ a[255 & p] ^ o[A++],
            f = r[d >>> 24] ^ i[u >>> 16 & 255] ^ n[p >>> 8 & 255] ^ a[255 & c] ^ o[A++];
          u = r[u >>> 24] ^ i[p >>> 16 & 255] ^ n[c >>> 8 & 255] ^ a[255 & d] ^ o[A++], p = E, c = g, d = f
        }
        E = (s[p >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & u]) ^ o[A++], g = (s[c >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & p]) ^ o[A++], f = (s[d >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & c]) ^ o[A++], u = (s[u >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & d]) ^ o[A++], e[t] = E, e[t + 1] = g, e[t + 2] = f, e[t + 3] = u
      }, N: 8
    }), e.Ga = t.D(o)
  }(), function (e, t, o, r, i, url, referer) {
    window.document.URL = url
    window.document.referrer = referer
    return p.call(this, 5, e, t, o, r, i)
  }
}()

module.exports = getCkey