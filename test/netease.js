(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    };
    NEJ.P = function(By) {
        if (!By || !By.length) return null;
        var TC = window;
        for (var a = By.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; TC = TC[a[i]] = TC[a[i]] || {}, i++);
        return TC
    };
    NEJ.Q = function(dB, By) {
        dB = dB || NEJ.O;
        var cH = By.split(".");
        for (var i = 0, l = cH.length; i < l; i++) {
            dB = dB[cH[i]];
            if (!dB) break
        }
        return dB
    };
    NEJ.C = function() {
        var bjL = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bjP = function(bD, cE) {
            for (var x in cE)
                if (bD == cE[x]) return x;
            return null
        };
        var bid = {
                dv: 0,
                cz: 1,
                cR: 2,
                dm: 3,
                cY: 4,
                ht: 5,
                lO: 6,
                ft: 7
            },
            td = {
                dC: 0,
                cB: 1,
                cV: 2,
                dw: 3,
                df: 4,
                jn: 5,
                mX: 6,
                gS: 7
            };
        return function() {
            var gb = function() {
                this.bjV();
                return this.dv.apply(this, arguments)
            };
            gb.prototype.bjV = NEJ.F;
            gb.prototype.dv = NEJ.F;
            gb.bU = function(zC, bka) {
                if (bjL(zC)) return;
                if (bka == null || !!bka) NEJ.X(this, zC, bjL);
                this.bFo = zC;
                this.dr = zC.prototype;
                var cQ = function() {};
                cQ.prototype = zC.prototype;
                this.prototype = new cQ;
                var BM = this.prototype;
                BM.constructor = this;
                var fy;
                for (var x in bid) {
                    fy = bjP(bid[x], td);
                    if (!fy || !this.dr[x]) continue;
                    BM[x] = function(bX) {
                        return function() {
                            this[bX].apply(this, arguments)
                        }
                    }(fy)
                }
                var CM = {};
                for (var x in td) {
                    fy = bjP(td[x], bid);
                    if (!fy || !this.dr[fy]) continue;
                    CM[fy] = zC;
                    BM[x] = function(bX) {
                        return function() {
                            var bp, cQ = this.Zg[bX],
                                UZ = cQ.prototype[bX];
                            this.Zg[bX] = cQ.bFo || zC;
                            if (!!UZ) bp = UZ.apply(this, arguments);
                            this.Zg[bX] = zC;
                            return bp
                        }
                    }(fy)
                }
                BM.bjV = function() {
                    this.Zg = NEJ.X({}, CM)
                };
                BM.cgr = BM.dC;
                return BM
            };
            return gb
        }
    }();
    NEJ.X = function(gR, cX, eV) {
        if (!gR || !cX) return gR;
        eV = eV || NEJ.F;
        for (var x in cX) {
            if (cX.hasOwnProperty(x) && !eV(cX[x], x)) gR[x] = cX[x]
        }
        return gR
    };
    NEJ.EX = function(gR, cX) {
        if (!gR || !cX) return gR;
        for (var x in gR) {
            if (gR.hasOwnProperty(x) && cX[x] != null) gR[x] = cX[x]
        }
        return gR
    };
    var CW = Function.prototype;
    CW.fj = function(nF, Zk) {
        var f = NEJ.F,
            Zk = Zk || f,
            nF = nF || f,
            fr = this;
        return function() {
            var be = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            nF(be);
            if (!be.stopped) {
                be.value = fr.apply(this, be.args);
                Zk(be)
            }
            return be.value
        }
    };
    CW.bi = function() {
        var cn = arguments,
            gR = arguments[0],
            WV = this;
        return function() {
            var tS = NEJ.R.slice.call(cn, 1);
            NEJ.R.push.apply(tS, arguments);
            return WV.apply(gR || window, tS)
        }
    };
    CW.gY = function() {
        var cn = arguments,
            gR = NEJ.R.shift.call(cn),
            WV = this;
        return function() {
            NEJ.R.push.apply(arguments, cn);
            return WV.apply(gR || window, arguments)
        }
    };
    var CW = String.prototype;
    if (!CW.trim) {
        CW.trim = function() {
            var eh = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(eh, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bM = bd("nej.p"),
        UV = window.navigator.platform,
        sn = window.navigator.userAgent;
    var kN = {
        mac: UV,
        win: UV,
        linux: UV,
        ipad: sn,
        ipod: sn,
        iphone: UV,
        android: sn
    };
    bM.Hj = kN;
    for (var x in kN) kN[x] = (new RegExp(x, "i")).test(kN[x]);
    kN.ios = kN.ipad || kN.iphone || kN.ipod;
    kN.tablet = kN.ipad;
    kN.desktop = kN.mac || kN.win || kN.linux && !kN.android;
    var ir = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    bM.ek = ir;
    if (/msie\s+(.*?);/i.test(sn) || /trident\/.+rv:([\d\.]+)/i.test(sn)) {
        ir.engine = "trident";
        ir.browser = "ie";
        ir.version = RegExp.$1;
        ir.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var pM = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        ir.release = pM[document.documentMode] || pM[parseInt(ir.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sn)) {
        ir.engine = "webkit";
        ir.release = RegExp.$1 || "";
        ir.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sn)) {
        ir.engine = "gecko";
        ir.release = RegExp.$1 || "";
        ir.browser = "firefox";
        ir.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(sn)) ir.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sn)) {
        ir.engine = "presto";
        ir.release = RegExp.$1 || "";
        ir.browser = "opera";
        ir.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(sn)) ir.version = RegExp.$1 || ""
    }
    if (ir.browser == "unknow") {
        var pM = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = pM.length, bX; i < l; i++) {
            bX = pM[i] == "safari" ? "version" : pM[i];
            if ((new RegExp(bX + "/(.*?)(?=\\s|$)", "i")).test(sn)) {
                ir.browser = pM[i];
                ir.version = RegExp.$1.trim();
                break
            }
        }
    }
    bM.bke = {};
    var UT = ir.engine != "trident";
    bM.ns = {
        gecko: ir.engine != "gecko",
        webkit: ir.engine != "webkit",
        presto: ir.engine != "presto",
        trident0: UT || ir.release > "2.0",
        trident1: UT || ir.release < "6.0",
        trident2: UT || ir.release > "3.0",
        trident: UT || ir.release >= "6.0"
    }
})();
(function() {
    var jf = NEJ.P("nej.c"),
        ce = {};
    var Xu = function() {
        var eh = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(bZ) {
            bZ = bZ || "";
            if (eh.test(bZ)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Id = function() {
        var bkg = function(bk, cE) {
            if (!bk || !bk.length) return;
            for (var i = 0, l = bk.length, lq; i < l; i++) {
                lq = bk[i];
                if (lq.indexOf("://") > 0) cE[Xu(lq)] = lq
            }
        };
        var cj = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(cX) {
            jf.Db("root", cX.root || "/res/");
            var bcW, gg = jf.bG("root");
            for (var x in cj) {
                bcW = cj[x];
                jf.Db(x, cX[bcW.name] || gg + bcW.dft)
            }
            var zl = cX.p_csrf;
            if (zl == !0) {
                zl = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            jf.Db("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, zl));
            ce.frames = {};
            bkg(cX.p_frame, ce.frames);
            ce.flashs = {};
            bkg(cX.p_flash, ce.flashs)
        }
    }();
    jf.Db = function(bN, bD) {
        ce[bN] = bD
    };
    jf.bG = function(bN) {
        return ce[bN]
    };
    jf.bFH = function(bZ) {
        var tW = Xu(bZ);
        return ce.frames[tW] || tW + "/res/nej_proxy_frame.html"
    };
    jf.bFS = function(bZ) {
        return ce.flashs[Xu(bZ)]
    };
    Id(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p"),
        jf = bd("nej.c"),
        cX = window.NEJ_CONF || NEJ.O;
    if (bM.ns.trident) return;
    jf.Db("storage.swf", cX.storage || jf.bG("root") + "nej_storage.swf");
    if (bM.ek.release < "4.0") {
        jf.Db("blank.png", cX.blank || jf.bG("root") + "nej_blank.gif")
    }
    var bk = cX.xdr,
        gK = /^(https?:\/\/.*?)(?=\/|$)/i,
        jY = /[\/?=&]/i;
    var bkq = function(bZ) {
        return (gK.test(bZ) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!bk && !!bk.length)
        for (var i = bk.length - 1, bZ, bN; i >= 0; i--) {
            bZ = bk[i];
            bN = bkq(bZ);
            if (!!bN) jf.Db(bN, bZ)
        }
    jf.cge = function(bZ) {
        var bN = bkq(bZ);
        if (!bN) {
            if (jY.test(bZ)) {
                bN = location.protocol + "//" + location.host
            } else if (bZ.indexOf("://") < 0) {
                bN = location.protocol + "//" + bZ
            } else {
                bN = bZ
            }
        }
        return jf.bG(bN) || bN + "/res/nej_xdomain.html"
    }
})();
(function() {
    var bd = NEJ.P,
        jf = bd("nej.c"),
        bM = bd("nej.g"),
        gJ = +(new Date);
    bM.cgd = 1e4 - gJ;
    bM.beh = 10001 - gJ;
    bM.cfZ = 10002 - gJ;
    bM.bku = 10003 - gJ;
    bM.bIQ = 10004 - gJ;
    bM.cfU = 10005 - gJ;
    bM.Xi = 10006 - gJ;
    bM.bJa = 10007 - gJ;
    bM.yY = "Content-Type";
    bM.cfO = "text/plain";
    bM.cmN = "multipart/form-data";
    bM.bJr = "application/x-www-form-urlencoded";
    bM.Zi = jf.bG("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var bd = NEJ.P,
        gm = NEJ.R,
        bM = bd("nej.p"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        cf = bd("nej.h");
    var lp = bM.ek.prefix,
        bky = bM.bke,
        bKo = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bLf = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        JU = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var Id = function() {
        var ri = cf.bkG();
        bky.css3d = !!ri && ri.m41 != null;
        var eh = /-([a-z])/g;
        for (var x in JU) {
            JU[bkK(x)] = JU[x]
        }
    };
    var bkK = function() {
        var eh = /-([a-z])/g;
        return function(bX) {
            bX = bX || "";
            return bX.replace(eh, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bkM = function(bX) {
        return (!bky.css3d ? bKo : bLf)[bX]
    };
    var bkQ = function() {
        var eh = /\s+/;
        return function(gb) {
            gb = (gb || "").trim();
            return !!gb ? gb.split(eh) : null
        }
    }();
    var Uu = function(bC, bu, gb) {
        bC = bb.bG(bC);
        if (!bC) return;
        bm.cv(bkQ(gb), function(eL) {
            bC.classList[bu](eL)
        })
    };
    cf.Dl = function(bk) {
        return gm.slice.call(bk, 0)
    };
    cf.Yl = function(bC) {
        return cf.Dl(bC.children)
    };
    cf.YE = function(bC, gb) {
        return cf.Dl(bC.getElementsByClassName(gb))
    };
    cf.YU = function(bC, Dm) {
        Uu(bC, "add", Dm)
    };
    cf.Zh = function(bC, Do) {
        Uu(bC, "remove", Do)
    };
    cf.MB = function(bC, Do, Dm) {
        Uu(bC, "remove", Do);
        Uu(bC, "add", Dm)
    };
    cf.ZI = function(bC, gb) {
        bC = bb.bG(bC);
        if (!bC) return !1;
        var bk = bC.classList;
        if (!bk || !bk.length) return !1;
        return bm.eg(bkQ(gb), function(eL) {
            return bk.contains(eL)
        }) >= 0
    };
    cf.baJ = function(bC, eL) {};
    cf.baL = function(bC) {};
    cf.baX = function(gw, ld) {
        gw.selectionEnd = ld.end || 0;
        gw.selectionStart = ld.start || 0;
        gw.focus()
    };
    cf.bcE = function(gw) {
        return {
            end: gw.selectionEnd,
            start: gw.selectionStart
        }
    };
    cf.bcM = function() {
        var Ao = function(eL, be) {
            var bC = bj.bY(be);
            if (!bC.value) bb.bH(bC, eL)
        };
        var Dp = function(eL, be) {
            bb.bJ(bj.bY(be), eL)
        };
        return function(bC, fC, eL) {
            if (fC == 1) {
                bj.bt(bC, "blur", Ao.bi(null, eL))
            }
            if (fC == 1 || fC == -1) {
                bj.bt(bC, "focus", Dp.bi(null, eL))
            }
        }
    }();
    cf.biB = function(bE) {
        return (new XMLSerializer).serializeToString(bE) || ""
    };
    cf.Vk = function(yP) {
        var gg = (new DOMParser).parseFromString(yP, "text/xml").documentElement;
        return gg.nodeName == "parsererror" ? null : gg
    };
    cf.VH = function(bC) {};
    cf.mP = function(bC) {
        return null
    };
    cf.We = function(bC) {
        return null
    };
    cf.Wt = function(fA) {};
    cf.WR = function() {
        var cn = cf.Dl(arguments);
        cn[0] = bb.bG(cn[0]);
        if (!cn[0]) return null;
        cn[1] = (cn[1] || "").toLowerCase();
        if (!cn[1]) return null;
        return cn
    };
    cf.yO = function() {
        var ug = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            iZ = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bMm = function(bu) {
            return (lp.evt || lp.pro) + bu
        };
        return function() {
            var cn = cf.WR.apply(cf, arguments);
            if (!cn) return;
            var Uh = iZ[cn[1]],
                Uf = ug[cn[1]];
            if (!!Uh) {
                cn[4] = cn[1];
                cn[1] = bMm(Uh)
            } else if (!!Uf) {
                var bX = "on" + cn[1];
                if (!(bX in cn[0])) {
                    cn[4] = cn[1];
                    cn[1] = Uf
                }
            }
            return cn
        }
    }();
    cf.XV = function() {
        var cn = arguments;
        cn[0].addEventListener(cn[1], cn[2], !!cn[3])
    };
    cf.Ud = function() {
        var cn = arguments;
        cn[0].removeEventListener(cn[1], cn[2], !!cn[3])
    };
    cf.Yp = function(bC, bu, bf) {
        var be = document.createEvent("Event");
        be.initEvent(bu, !0, !0);
        NEJ.X(be, bf);
        bC.dispatchEvent(be)
    };
    cf.bkG = function() {
        var gK = /\((.*?)\)/,
            jY = /\s*,\s*/,
            bk = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Ub = function(ri) {
            var iS = {};
            if (gK.test(ri || "")) {
                bm.cv(RegExp.$1.split(jY), function(bD, bv) {
                    iS[bk[bv]] = bD || ""
                })
            }
            return iS
        };
        return function(ri) {
            if (!!window.CSSMatrix) return new CSSMatrix(ri);
            var bX = lp.clz + "CSSMatrix";
            if (!!window[bX]) return new window[bX](ri || "");
            return Ub(ri)
        }
    }();
    cf.bkR = function() {
        var eh = /\{(.*?)\}/g;
        return function(bX, cE) {
            cE = cE || o;
            var rl = bkM(bX);
            return !rl ? "" : rl.replace(eh, function($1, $2) {
                var cH = $2.split("|");
                return cE[cH[0]] || cH[1] || "0"
            })
        }
    }();
    cf.ZC = function(bC, bX, bD) {
        bC.style[cf.bkX(bX)] = bD
    };
    cf.bkX = function() {
        var eh = /^[a-z]/,
            ZP = lp.css;
        var bNn = function(bX) {
            return bX.replace(eh, function($1) {
                return ZP + $1.toUpperCase()
            })
        };
        return function(bX) {
            bX = bkK(bX);
            var bOk = cf.bOo(bX, JU);
            return bOk ? bNn(bX) : bX
        }
    }();
    cf.bOo = function() {
        var eh = /^([a-z]+?)[A-Z]/;
        return function(bX, cE) {
            if (!cE[bX]) {
                if (eh.test(bX)) bX = RegExp.$1
            }
            return !!cE[bX]
        }
    }();
    cf.bPn = function() {
        var eh = /\$<(.*?)>/gi,
            ZP = "-" + lp.css.toLowerCase() + "-";
        return function(kE) {
            return kE.replace(eh, function($1, $2) {
                var gu = $2,
                    cH = gu.split("|"),
                    rl = bkM(cH[0]);
                if (!!rl) {
                    return cf.bkR(cH[0], bm.iO(cH[1]))
                }
                return !cf.bPo(gu, JU) ? gu : ZP + gu
            })
        }
    }();
    cf.bPo = function(bX, cE) {
        return !!cE[bX]
    };
    cf.bbD = function(ds, kE) {
        ds.textContent = kE
    };
    cf.bch = function(ds, kE) {
        var wI = ds.sheet,
            cF = wI.cssRules.length;
        wI.insertRule(kE, cF);
        return wI.cssRules[cF]
    };
    cf.ceN = function(bC, bf) {};
    cf.TL = function(TI) {
        return (TI || "").toLowerCase() != "transparent"
    };
    cf.bPt = function(bC) {};
    cf.bgt = function(bC, bX) {
        if (!!bC.getAttribute) return bC.getAttribute(bX);
        return ""
    };
    cf.TH = function(fU) {
        bb.dW(fU)
    };
    Id()
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bM = bd("nej.p"),
        cf = bd("nej.h");
    if (bM.ns.trident0) return;
    var gJ = +(new Date);
    ce = {};
    cf.baJ = cf.baJ.fj(function(be) {
        be.stopped = !0;
        var cn = be.args,
            bB = bb.lr(cn[0]),
            bN = "hover-" + bB;
        if (!bB || !!ce[bN]) return;
        ce[bN] = !0;
        bj.bt(bB, "mouseenter", bb.bJ.bi(bb, bB, cn[1]));
        bj.bt(bB, "mouseleave", bb.bH.bi(bb, bB, cn[1]))
    });
    cf.baL = function() {
        var ceH = function() {};
        return cf.baL.fj(function(be) {
            be.stopped = !0;
            var bC = be.args[0],
                bB = "fixed-" + bb.lr(bC);
            if (!!ce[bB]) return;
            var cj = {};
            ce[bB] = cj
        })
    }();
    cf.VH = cf.VH.fj(function(be) {
        be.stopped = !0;
        var bC = be.args[0],
            ds = bC.style,
            blo = bb.qr();
        ds.width = blo.scrollWidth + "px";
        ds.height = blo.scrollHeight + "px"
    });
    cf.mP = cf.mP.fj(function(be) {
        be.stopped = !0;
        var bC = be.args[0],
            kD = ce[bC.msk];
        if (!kD) {
            bC.msk = gJ++;
            kD = bb.ef("iframe");
            kD.style.position = "absolute";
            ce[bC.msk] = kD
        }
        be.value = kD;
        var ds = kD.style;
        ds.top = (parseInt(bb.ey(bC, "top")) || 0) + "px";
        ds.left = (parseInt(bb.ey(bC, "left")) || 0) + "px";
        ds.width = bC.offsetWidth + "px";
        ds.height = bC.offsetHeight + "px";
        bC.insertAdjacentElement("beforeBegin", kD)
    });
    cf.We = cf.We.fj(function(be) {
        be.stopped = !0;
        var kD = ce[be.args[0].msk];
        if (!!kD) bb.mB(kD)
    })
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p"),
        bb = bd("nej.e"),
        cf = bd("nej.h");
    if (bM.ns.trident1) return;
    cf.yO = function() {
        var ug = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return cf.yO.fj(function(be) {
            var cn = cf.WR.apply(cf, be.args);
            if (!cn) {
                be.stopped = !0;
                return
            }
            var bu = ug[cn[1]];
            if (!!bu && ("on" + bu).toLowerCase() in cn[0]) {
                cn[4] = cn[1];
                cn[1] = bu;
                be.stopped = !0;
                be.value = cn
            }
        })
    }();
    cf.TL = function(TI) {
        return !0
    };
    cf.TH = cf.TH.fj(function(be) {
        be.stopped = !0;
        var fU = be.args[0];
        bb.ch(fU, "display", "none");
        try {
            fU.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bM = bd("nej.p"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        cf = bd("nej.h"),
        Wy = {};
    if (bM.ns.trident) return;
    cf.Dl = cf.Dl.fj(function(be) {
        be.stopped = !0;
        var bk = be.args[0];
        if (!bk) {
            be.value = null;
            return
        }
        var bv = 0,
            bp = [];
        while (!!bk[bv]) {
            bp.push(bk[bv++])
        }
        be.value = bp
    });
    cf.Yl = cf.Yl.fj(function(be) {
        be.stopped = !0;
        var cH = [];
        bm.cv(be.args[0].childNodes, function(bh) {
            if (bh.nodeType == 1) cH.push(bh)
        });
        be.value = cH
    });
    cf.YE = cf.YE.fj(function(be) {
        var bC = be.args[0];
        if (!!bC.getElementsByClassName) return;
        be.stopped = !0;
        var bp = [],
            WD = new RegExp("(\\s|^)(?:" + be.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        bm.cv(bC.getElementsByTagName("*"), function(bh) {
            if (WD.test(bh.className)) bp.push(bh)
        });
        be.value = bp
    });
    cf.baX = cf.baX.fj(function(be) {
        var gw = be.args[0],
            ld = be.args[1];
        if (gw.selectionStart == null) {
            be.stopped = !0;
            var dQ = gw.createTextRange();
            dQ.collapse(!0);
            dQ.moveStart("character", ld.start);
            dQ.moveEnd("character", ld.end - ld.start);
            dQ.select();
            gw.focus()
        }
    });
    cf.bcE = cf.bcE.fj(function(be) {
        var gw = be.args[0];
        gw.focus();
        if (gw.selectionStart == null) {
            be.stopped = !0;
            var blp = document.selection.createRange();
            var blq = gw.createTextRange();
            blq.moveToBookmark(blp.getBookmark());
            var Xv = gw.createTextRange();
            Xv.collapse(!0);
            Xv.setEndPoint("EndToStart", blq);
            var mO = Xv.text.length;
            be.value = {
                start: mO,
                end: mO + blp.text.length
            }
        }
    });
    cf.biB = cf.biB.fj(function(be) {
        if (!!window.XMLSerializer) return;
        be.stopped = !0;
        var bC = be.args[0];
        be.value = bC.xml != null ? bC.xml : bC.outHTML
    });
    cf.Vk = function() {
        var IJ = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bRh = function() {
            try {
                for (var i = 0, l = IJ.length; i < l; i++) return new ActiveXObject(IJ[i])
            } catch (ex) {
                return null
            }
        };
        return cf.Vk.fj(function(be) {
            if (!!window.DOMParser) return;
            be.stopped = !0;
            var Tx = bRh();
            if (!!Tx && Tx.loadXML(be.args[0]) && !Tx.parseError.errorCode) be.value = Tx.documentElement
        })
    }();
    cf.yO = function() {
        var iZ = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iZ) Wy[iZ[x]] = !0;
        var bRn = function(bC, bu) {
            if ("on" + bu in bC) return null;
            return iZ[bu] || ""
        };
        var bRo = function(bu, fr) {
            var gP = fr;
            switch (bu) {
                case "readystatechange":
                    gP = function(be) {
                        var bC = bj.bY(be) || this;
                        if (bC.readyState == "loaded" || bC.readyState == "complete") {
                            be.target = bC;
                            fr.call(bC, be)
                        }
                    };
                    break;
                case "propertychange":
                    gP = function(be) {
                        var bC = bj.bY(be) || this;
                        if ("value" in bC && be.propertyName == "value") {
                            be.target = bC;
                            fr.call(bC, be)
                        }
                    };
                    break
            }
            return gP
        };
        return cf.yO.fj(function(be) {
            var cn = cf.WR.apply(cf, be.args);
            if (!cn) {
                be.stopped = !0;
                return
            }
            var bu = bRn(cn[0], cn[1]);
            if (!!bu) {
                be.stopped = !0;
                cn[4] = cn[1];
                cn[1] = bu;
                if (!!cn[2]) {
                    cn[5] = cn[2];
                    cn[2] = bRo(cn[1], cn[2])
                }
                be.value = cn
            }
        }, function(be) {
            var cn = be.value;
            if (!cn[0] || !bm.hC(cn[2])) return;
            if (!bm.hC(cn[5])) cn[5] = cn[2];
            cn[2] = cn[2].bi(cn[0])
        })
    }();
    cf.XV = cf.XV.fj(function(be) {
        var cn = be.args;
        if (!!Wy[cn[1]] || !document.addEventListener) {
            be.stopped = !0;
            cn[0].attachEvent("on" + cn[1], cn[2])
        }
    });
    cf.Ud = cf.Ud.fj(function(be) {
        var cn = be.args;
        if (!!Wy[cn[1]] || !document.removeEventListener) {
            be.stopped = !0;
            cn[0].detachEvent("on" + cn[1], cn[2])
        }
    });
    cf.Yp = cf.Yp.fj(function(be) {
        if (!document.createEvent) {
            be.stopped = !0;
            var cn = be.args,
                bls = document.createEventObject();
            NEJ.X(bls, cn[2]);
            try {
                cn[0].fireEvent("on" + cn[1], bls)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    cf.ZC = cf.ZC.fj(function(be) {
        var cn = be.args,
            bX = cn[1].toLowerCase();
        if (bX == "opacity" && !(bX in document.body.style)) {
            cn[1] = "filter";
            cn[2] = "alpha(opacity=" + cn[2] * 100 + ")"
        }
    });
    cf.bbD = function() {
        var hM = 30;
        return cf.bbD.fj(function(be) {
            var bC = be.args[0];
            if (!bC.styleSheet) return;
            be.stopped = !0;
            var kE = be.args[1];
            var bk = document.styleSheets;
            if (bk.length > hM) {
                bC = bk[hM];
                kE = bC.cssText + kE
            } else {
                bC = bC.styleSheet
            }
            bC.cssText = kE
        })
    }();
    cf.bch = cf.bch.fj(function(be) {
        var cn = be.args,
            wI = cn[0].sheet;
        if (!!wI) return;
        be.stopped = !0;
        var wI = cn[0].styleSheet,
            cF = wI.rules.length,
            cH = cn[1].split(/[\{\}]/);
        wI.addRule(cH[0], cH[1], cF);
        be.value = wI.rules[cF]
    });
    cf.bcM = function() {
        var Ao = function(eL, be) {
            bb.bH(bj.bY(be), eL)
        };
        return cf.bcM.fj(function(be) {
            if (bM.ek.release >= "4.0") return;
            var cn = be.args;
            if (cn[1] != 1) {
                bj.bt(cn[0], "blur", Ao.bi(null, cn[2]));
                cn[1] = -1
            }
        })
    }();
    cf.TL = function(TI) {
        return !0
    };
    cf.bgt = cf.bgt.fj(function(be) {
        var cn = be.args,
            bh = (cn[0].attributes || cg)[cn[1]];
        if (!!bh) {
            be.stopped = !0;
            be.value = bh.value
        }
    }, function(be) {
        var cn = be.args;
        if (cn[1] == "maxlength" && be.value == 2147483647) be.value = ""
    });
    if (bM.ek.release < 5) {
        cf.Wt = function() {
            var hd, fU, jU = [],
                Zo = "cb-" + +(new Date),
                cm = '<script>parent.nej.h["' + Zo + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var blt = function() {
                hd = window.clearTimeout(hd);
                if (!jU.length) return;
                var fA = jU.shift();
                try {
                    var uq = fU.contentWindow.document;
                    uq.open();
                    uq.write("<head><title>");
                    uq.write(document.title);
                    uq.write("</title>");
                    uq.write(cm.replace("#<HASH>", encodeURIComponent(fA)));
                    uq.write("</head><body></body>");
                    if (location.hostname != document.domain) uq.domain = document.domain;
                    uq.close();
                    cf[Zo] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jU.unshift(fA)
                }
                hd = window.setTimeout(blt, 50)
            };
            return cf.Wt.fj(function(be) {
                be.stopped = !0;
                var fA = be.args[0];
                if (!!cf[Zo] || !fU && !fA) return;
                jU.push(fA);
                if (!fU) fU = bb.Tp();
                blt()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var bd = NEJ.P,
        bj = bd("nej.v"),
        cf = bd("nej.h"),
        bM = bd("nej.p"),
        Tn = bM.bke;
    if (bM.ns.gecko) return;
    var Id = function() {
        Tn.css3d = Tn.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(iD, bC) {
            if (!iD || !bC) return;
            switch (iD) {
                case "beforeEnd":
                    this.appendChild(bC);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(bC, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(bC) : this.insertBefore(bC, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(bC) : this.parentNode.insertBefore(bC, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(cm) {
                this.textContent = cm
            })
        }
    };
    cf.yO = function() {
        var gK = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return cf.yO.fj(function(be) {
            var cn = be.args;
            if (gK.test(cn[1] || "")) {
                be.stopped = !0;
                be.value = cn
            }
        })
    }();
    cf.bPt = function() {
        var bRx = function(be) {
            bj.cu(be);
            bj.bY(be).control.click()
        };
        return function(bC) {
            bj.bt(bC, "click", bRx)
        }
    }();
    Id()
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        cf = bd("nej.h");
    var Tl = function() {
        var pM = !!document.body.classList;
        return function() {
            return pM
        }
    }();
    var blv = function() {
        var eh = /\s+/g;
        return function(gb) {
            gb = (gb || "").trim();
            return !gb ? null : new RegExp("(\\s|^)(?:" + gb.replace(eh, "|") + ")(?=\\s|$)", "g")
        }
    }();
    cf.MB = cf.MB.fj(function(be) {
        if (Tl()) return;
        be.stopped = !0;
        var cn = be.args,
            bC = bb.bG(cn[0]);
        if (!bC || !cn[1] && !cn[2]) return;
        var gb = bC.className || "";
        var Dm = " " + (cn[2] || ""),
            Do = blv((cn[1] || "") + Dm);
        !!Do && (gb = gb.replace(Do, "$1"));
        bC.className = (gb + Dm).replace(/\s+/g, " ").trim()
    });
    cf.YU = cf.YU.fj(function(be) {
        if (Tl()) return;
        be.stopped = !0;
        var cn = be.args;
        cf.MB(cn[0], "", cn[1])
    });
    cf.Zh = cf.Zh.fj(function(be) {
        if (Tl()) return;
        be.stopped = !0;
        var cn = be.args;
        cf.MB(cn[0], cn[1], "")
    });
    cf.ZI = cf.ZI.fj(function(be) {
        if (Tl()) return;
        be.stopped = !0;
        var cn = be.args,
            bC = bb.bG(cn[0]);
        if (!bC) {
            be.value = !1;
            return
        }
        var eh = blv(cn[1]);
        be.value = !eh ? !1 : eh.test(bC.className || "")
    })
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p"),
        cf = bd("nej.h");
    if (bM.ns.webkit) return;
    cf.TL = function(TI) {
        return !0
    }
})();
(function() {
    var bd = NEJ.P,
        cf = bd("nej.h"),
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        dY = bd("nej.x"),
        ce = {};
    var blw = function(bC) {
        bC = bb.bG(bC);
        if (!bC || !ce[bC.id]) return;
        var Tg = !0,
            bB = bC.id;
        bm.fo(ce[bB], function() {
            Tg = !1;
            return !0
        });
        if (Tg) delete ce[bB]
    };
    bj.bt = dY.bt = function() {
        var bRA = function() {
            var cn = cf.yO.apply(cf, arguments);
            if (!cn || !cn[2]) return;
            var tw = bb.lr(cn[0]),
                bZz = ce[tw] || {};
            ce[tw] = bZz;
            tw = cn[4] || cn[1];
            var ye = bZz[tw] || [];
            bZz[tw] = ye;
            ye.push({
                type: cn[1],
                func: cn[2],
                capt: !!cn[3],
                sfun: cn[5] || cn[2]
            });
            return cn.slice(0, 4)
        };
        return function() {
            var cn = bRA.apply(null, arguments);
            if (!!cn) cf.XV.apply(cf, cn);
            return this
        }
    }();
    bj.oz = dY.oz = function() {
        var bRC = function() {
            var tS = arguments,
                tw = bb.lr(tS[0]),
                bZz = ce[tw],
                bu = (tS[1] || "").toLowerCase(),
                be = tS[2];
            if (!bZz || !bu || !be) return;
            bZz = bZz[bu];
            if (!bZz) return;
            var bSK = !!tS[3],
                bv = bm.eg(bZz, function(iZ) {
                    return be == iZ.sfun && bSK == iZ.capt
                });
            if (bv < 0) return;
            var iZ = bZz.splice(bv, 1)[0];
            return !iZ ? null : [bb.bG(tw), iZ.type, iZ.func, iZ.capt]
        };
        return function() {
            var cn = bRC.apply(null, arguments);
            if (!!cn) {
                cf.Ud.apply(cf, cn);
                blw(cn[0])
            }
            return this
        }
    }();
    bj.ky = dY.ky = function() {
        var bly = function() {
            var tS = arguments,
                tw = bb.lr(tS[0]),
                bZz = ce[tw],
                ye = (tS[1] || "").toLowerCase();
            if (!bZz || !ye) return;
            var bC = bb.bG(tw);
            bm.nt(bZz[ye], function(iZ, bv, bk) {
                cf.Ud(bC, iZ.type, iZ.func, iZ.capt);
                bk.splice(bv, 1)
            });
            delete bZz[ye]
        };
        var bTw = function(bC) {
            bC = bb.bG(bC);
            if (!bC) return;
            var bB = bC.id;
            bm.fo(ce[bB], function(bk, bu) {
                bly(bB, bu)
            });
            delete ce[bB]
        };
        return function(bC, bu) {
            !bu ? bTw(bC) : bly(bC, bu);
            blw(bC);
            return this
        }
    }();
    bj.bY = function() {
        var bhr;
        var DC = function(bX, bC) {
            var cH = bX.split(":");
            if (cH.length > 1) {
                if (!bhr) bhr = {
                    c: bb.cU,
                    d: bb.bz,
                    a: bb.ix
                };
                var DD = bhr[cH[0]];
                if (!!DD) return !!DD(bC, cH[1]);
                bX = cH[1]
            }
            return !!bb.ix(bC, bX) || !!bb.bz(bC, bX) || bb.cU(bC, bX)
        };
        return function(be) {
            if (!be) return null;
            var bC = be.target || be.srcElement,
                eV = arguments[1];
            if (!eV) return bC;
            if (bm.gH(eV)) eV = DC.bi(null, eV);
            if (bm.hC(eV)) {
                while (bC) {
                    if (!!eV(bC)) return bC;
                    bC = bC.parentNode
                }
                return null
            }
            return bC
        }
    }();
    bj.cu = function(be) {
        bj.ru(be);
        bj.dp(be);
        return this
    };
    bj.ru = function(be) {
        if (!!be) {
            !!be.stopPropagation ? be.stopPropagation() : be.cancelBubble = !0
        }
        return this
    };
    bj.dp = function(be) {
        if (!!be) {
            !!be.preventDefault ? be.preventDefault() : be.returnValue = !1
        }
        return this
    };
    bj.cec = function() {
        var pT = !1;
        var bUR = function() {
            if (pT) return;
            pT = !0;
            bj.bt(document, "click", bVr, !0)
        };
        var bVr = function(be) {
            var bC = bj.bY(be),
                bVS = bb.bz(bC, "stopped");
            if (bVS == "true") {
                bj.cu(be);
                bb.bz(bC, "stopped", "false")
            }
        };
        return function(be) {
            if (!be) return;
            if (be.type == "click") {
                bj.cu(be);
                return
            }
            bUR();
            bb.bz(bj.bY(be), "stopped", "true")
        }
    }();
    bj.mS = function(be) {
        return be.pageX != null ? be.pageX : be.clientX + bb.qr().scrollLeft
    };
    bj.qi = function(be) {
        return be.pageY != null ? be.pageY : be.clientY + bb.qr().scrollTop
    };
    bj.bK = dY.bK = function(bC, bu, bf) {
        var cn = cf.yO(bC, bu);
        if (!!cn) cf.Yp(cn[0], cn[1], bf);
        return this
    };
    bd("dbg").dumpEV = function() {
        return ce
    };
    dY.isChange = !0
})();
(function() {
    var o = !0,
        w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function(a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m) p = function(a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0,
                    b, h, n;
                (b = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function(a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function(a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function(a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function(a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function(a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function(a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function() {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function() {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function(a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                        (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function(a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function(a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function(a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p");
    if (bM.ns.trident0) return;
    JSON.parse = JSON.parse.fj(function(be) {
        var dT = be.args[0] || "";
        if (dT.length >= 5e5) {
            be.stopped = !0;
            be.value = eval("(" + dT + ")")
        }
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        fm = bd("nej.g"),
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        cf = bd("nej.h"),
        dY = bd("nej.x"),
        DL, Xr = {},
        ce = document.createDocumentFragment();
    bb.lr = dY.lr = function(bC) {
        bC = bb.bG(bC);
        if (!bC) return;
        var bB = !!bC.id ? bC.id : "auto-id-" + bm.blF(16);
        bC.id = bB;
        if (bb.bG(bB) != bC) Xr[bB] = bC;
        return bB
    };
    bb.bG = dY.bG = function(bC) {
        var bh = Xr["" + bC];
        if (!!bh) return bh;
        if (!bm.gH(bC) && !bm.uu(bC)) return bC;
        return document.getElementById(bC)
    };
    bb.eu = dY.eu = function(bC, eL) {
        bC = bb.bG(bC);
        if (!bC) return null;
        var bk = cf.Yl(bC);
        if (!!eL) bm.nt(bk, function(bh, bv) {
            if (!bb.cU(bh, eL)) bk.splice(bv, 1)
        });
        return bk
    };
    bb.bP = dY.bP = function(bC, gb) {
        bC = bb.bG(bC);
        return !bC ? null : cf.YE(bC, gb.trim())
    };
    bb.blH = dY.blH = function(bC) {
        bC = bb.bG(bC);
        if (!!bC) {
            bC = bC.parentNode;
            while (!!bC) {
                if (bC.scrollHeight > bC.clientHeight) break;
                bC = bC.parentNode
            }
            if (!!bC) return bC
        }
        var bZz = document.body.scrollHeight,
            ye = document.documentElement.scrollHeight;
        return ye >= bZz ? document.documentElement : document.body
    };
    bb.qr = function() {
        var blI = function(bk) {
            var bp = 0;
            bm.cv(bk, function(hV) {
                if (!hV) return;
                if (!bp) {
                    bp = hV
                } else {
                    bp = Math.min(bp, hV)
                }
            });
            return bp
        };
        return function(uq) {
            var blM = uq || document,
                xV = blM.body,
                xQ = blM.documentElement,
                bp = {
                    scrollTop: Math.max(xV.scrollTop, xQ.scrollTop),
                    scrollLeft: Math.max(xV.scrollLeft, xQ.scrollLeft),
                    clientWidth: blI([xV.clientWidth, xV.offsetWidth, xQ.clientWidth, xQ.offsetWidth]),
                    clientHeight: blI([xV.clientHeight, xV.offsetHeight, xQ.clientHeight, xQ.offsetHeight])
                };
            bp.scrollWidth = Math.max(bp.clientWidth, xV.scrollWidth, xQ.scrollWidth);
            bp.scrollHeight = Math.max(bp.clientHeight, xV.scrollHeight, xQ.scrollHeight);
            return bp
        }
    }();
    bb.cdH = function(hM, nR) {
        var bp = NEJ.X({}, nR),
            blT = hM.width / hM.height,
            SP = nR.width / nR.height;
        if (blT > SP && nR.height > hM.height) {
            bp.height = hM.height;
            bp.width = bp.height * SP
        }
        if (blT < SP && nR.width > hM.width) {
            bp.width = hM.width;
            bp.height = bp.width / SP
        }
        return bp
    };
    bb.cdB = function() {
        var eh = /\s+/;
        var tJ = {
            left: function() {
                return 0
            },
            center: function(hA, nR) {
                return (hA.width - nR.width) / 2
            },
            right: function(hA, nR) {
                return hA.width - nR.width
            },
            top: function() {
                return 0
            },
            middle: function(hA, nR) {
                return (hA.height - nR.height) / 2
            },
            bottom: function(hA, nR) {
                return hA.height - nR.height
            }
        };
        return function(hA, nR, ng) {
            var bp = {},
                cH = (ng || "").split(eh),
                hs = tJ[cH[1]] || tJ.middle,
                jQ = tJ[cH[0]] || tJ.center;
            bp.top = hs(hA, nR);
            bp.left = jQ(hA, nR);
            return bp
        }
    }();
    bb.rx = dY.rx = function(bC, eL) {
        cf.baJ(bC, eL || bb.bz(bC, "hover") || "js-hover");
        return this
    };
    bb.Lh = dY.Lh = function(bC) {
        bC = bb.bG(bC);
        if (!bC) return;
        cf.baL(bC)
    };
    bb.bZK = dY.bZK = function() {
        var ce = {},
            blV = 2;
        var cae = function(bB, eL, be) {
            ce[bB] = [bj.mS(be), bj.qi(be)];
            bb.bJ(bB, eL)
        };
        var caf = function(bB, eL, be) {
            var cK = ce[bB];
            if (!bm.hh(cK)) return;
            var cde = Math.abs(bj.mS(be) - cK[0]),
                ccZ = Math.abs(bj.qi(be) - cK[1]);
            if (cde > blV || ccZ > blV) bbQ(bB, eL)
        };
        var bbQ = function(bB, eL) {
            if (bm.hh(ce[bB])) {
                ce[bB] = -1;
                bb.bH(bB, eL)
            }
        };
        return function(bC, eL) {
            var bB = bb.lr(bC);
            if (!bB || ce[bB] != null) return;
            ce[bB] = -1;
            eL = eL || bb.bz(bB, "highlight") || "js-highlight";
            bj.bt(bB, "touchstart", cae.bi(null, bB, eL));
            bj.bt(document, "touchmove", caf.bi(null, bB, eL));
            bj.bt(document, "touchend", bbQ.bi(null, bB, eL));
            bj.bt(document, "touchcancel", bbQ.bi(null, bB, eL))
        }
    }();
    bb.xE = dY.xE = function() {
        var ccY = function(bB, eL, ccX) {
            var bC = bb.bG(bB),
                be = {
                    clazz: eL,
                    target: bC
                };
            if (bb.cU(bC, eL)) {
                be.toggled = !1;
                bb.bH(bC, eL)
            } else {
                be.toggled = !0;
                bb.bJ(bC, eL)
            }
            ccX.call(null, be)
        };
        return function(bC, bf) {
            bC = bb.bG(bC);
            if (!!bC) {
                var iS = {
                    ontoggle: cC,
                    clazz: "js-toggle",
                    element: bC.parentNode
                };
                if (bm.gH(bf)) {
                    var bh = bb.bG(bf);
                    !!bh ? iS.element = bh : iS.clazz = bf
                } else {
                    NEJ.EX(iS, bf);
                    iS.element = bb.bG(iS.element)
                }
                var bB = bb.lr(iS.element);
                bj.bt(bC, "click", ccY.bi(null, bB, iS.clazz, iS.ontoggle || cC))
            }
            return this
        }
    }();
    bb.mK = dY.mK = function(bC, bf) {
        bC = bb.bG(bC);
        if (!bC) return;
        var fC = 0,
            eL = "js-focus";
        if (bm.uu(bf)) {
            fC = bf
        } else if (bm.gH(bf)) {
            eL = bf
        } else if (bm.qj(bf)) {
            fC = bf.mode || fC;
            eL = bf.clazz || eL
        }
        var bD = parseInt(bb.bz(bC, "mode"));
        if (!isNaN(bD)) fC = bD;
        bD = bb.bz(bC, "focus");
        if (!!bD) eL = bD;
        cf.bcM(bC, fC, eL);
        return this
    };
    bb.ef = function() {
        var cE = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fP, gb, cQ) {
            var bC = document.createElement(fP);
            NEJ.X(bC, cE[fP.toLowerCase()]);
            if (!!gb) bC.className = gb;
            cQ = bb.bG(cQ);
            if (!!cQ) cQ.appendChild(bC);
            return bC
        }
    }();
    bb.Tp = function() {
        var ccW = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ccU = function(bX) {
            bX = bX.trim();
            if (!bX) return bb.ef("iframe");
            var fU;
            try {
                fU = document.createElement('<iframe name="' + bX + '"></iframe>');
                fU.frameBorder = 0
            } catch (e) {
                fU = bb.ef("iframe");
                fU.name = bX
            }
            return fU
        };
        return function(bf) {
            bf = bf || cg;
            var fU = ccU(bf.name || "");
            if (!bf.visible) fU.style.display = "none";
            if (bm.hC(bf.onload)) bj.bt(fU, "load", function(be) {
                if (!fU.src) return;
                bj.ky(fU, "load");
                bf.onload(be)
            });
            var cQ = bf.parent;
            if (bm.hC(cQ)) {
                try {
                    cQ(fU)
                } catch (e) {}
            } else {
                (bb.bG(cQ) || document.body).appendChild(fU)
            }
            var eR = bf.src || ccW();
            window.setTimeout(function() {
                fU.src = eR
            }, 0);
            return fU
        }
    }();
    bb.dW = dY.dW = function() {
        var bmj = function(LZ) {
            LZ.src = fm.Zi
        };
        var bmk = function(uz) {
            uz.src = "about:blank"
        };
        return function(bC, ccN) {
            bC = bb.bG(bC);
            if (!bC) return this;
            if (!ccN) bj.ky(bC);
            delete Xr[bC.id];
            var fP = bC.tagName;
            if (fP == "IFRAME") {
                bmk(bC)
            } else if (fP == "IMG") {
                bmj(bC)
            } else if (!!bC.getElementsByTagName) {
                bm.cv(bC.getElementsByTagName("img"), bmj);
                bm.cv(bC.getElementsByTagName("iframe"), bmk)
            }
            if (!!bC.parentNode) {
                bC.parentNode.removeChild(bC)
            }
            return this
        }
    }();
    bb.mB = dY.mB = function(bC) {
        bC = bb.bG(bC);
        if (!!bC) ce.appendChild(bC);
        return this
    };
    bb.bms = dY.bms = function(bC) {
        bC = bb.bG(bC);
        if (!bC) return;
        bm.nt(bC.childNodes, function(bh) {
            bb.dW(bh)
        })
    };
    bb.Eg = dY.Eg = function() {
        var eL, gK = /\s+/;
        var ccE = function() {
            if (!!eL) return;
            eL = bb.rA(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            bb.bmu()
        };
        return function(bC, bf) {
            bC = bb.bG(bC);
            if (!bC) return;
            ccE();
            bf = bf || cg;
            var cQ = bC.parentNode;
            if (!bb.cU(cQ, eL)) {
                cQ = bb.ef("span", eL);
                bC.insertAdjacentElement("beforeBegin", cQ);
                cQ.appendChild(bC)
            }
            var bmz = bf.nid || "",
                bh = bb.bP(cQ, bmz || eL + "-show")[0];
            if (!bh) {
                var eG = ((bf.clazz || "") + " " + bmz).trim();
                eG = eL + "-show" + (!eG ? "" : " ") + eG;
                bh = bb.ef(bf.tag || "span", eG);
                cQ.appendChild(bh)
            }
            var eG = bf.clazz;
            if (!!eG) {
                eG = (eG || "").trim().split(gK)[0] + "-parent";
                bb.bJ(cQ, eG)
            }
            return bh
        }
    }();
    bb.bz = dY.bz = function() {
        var bim = {},
            fP = "data-",
            eh = /\-(.{1})/gi;
        var zU = function(bC) {
            var bB = bb.lr(bC);
            if (!!bim[bB]) return;
            var cE = {};
            bm.cv(bC.attributes, function(bh) {
                var bN = bh.nodeName;
                if (bN.indexOf(fP) != 0) return;
                bN = bN.replace(fP, "").replace(eh, function($1, $2) {
                    return $2.toUpperCase()
                });
                cE[bN] = bh.nodeValue || ""
            });
            bim[bB] = cE
        };
        return function(bC, bN, bD) {
            bC = bb.bG(bC);
            if (!bC) return null;
            var Sk = bC.dataset;
            if (!Sk) {
                zU(bC);
                Sk = bim[bC.id]
            }
            if (bD !== undefined) Sk[bN] = bD;
            return Sk[bN]
        }
    }();
    bb.ix = dY.ix = function(bC, bX, bD) {
        bC = bb.bG(bC);
        if (!bC) return "";
        if (bD !== undefined && !!bC.setAttribute) bC.setAttribute(bX, bD);
        return cf.bgt(bC, bX)
    };
    bb.oZ = function(eN) {
        var pX = document.createElement("div");
        pX.innerHTML = eN;
        var bk = bb.eu(pX);
        return bk.length > 1 ? pX : bk[0]
    };
    bb.ccw = dY.ccw = function(bC) {
        bC = bb.bG(bC);
        return !bC ? "" : cf.biB(bC)
    };
    bb.bmB = function(yP) {
        yP = (yP || "").trim();
        return !yP ? null : cf.Vk(yP)
    };
    bb.ccq = function(ew, bu) {
        ew = ew || "";
        switch (bu) {
            case "xml":
                ew = bb.bmB(ew);
                break;
            case "json":
                try {
                    ew = JSON.parse(ew)
                } catch (ex) {
                    ew = null
                }
                break
        }
        return ew
    };
    bb.jX = dY.jX = function() {
        var ccp = function(bC) {
            return bC == document.body || bC == document.documentElement
        };
        return function(eO, nA) {
            eO = bb.bG(eO);
            if (!eO) return null;
            nA = bb.bG(nA) || null;
            var bp = {
                    x: 0,
                    y: 0
                },
                Wv, cjL, Sj;
            while (!!eO && eO != nA) {
                Wv = ccp(eO);
                cjL = Wv ? 0 : eO.scrollLeft;
                Sj = parseInt(bb.ey(eO, "borderLeftWidth")) || 0;
                bp.x += eO.offsetLeft + Sj - cjL;
                cjL = Wv ? 0 : eO.scrollTop;
                Sj = parseInt(bb.ey(eO, "borderTopWidth")) || 0;
                bp.y += eO.offsetTop + Sj - cjL;
                eO = eO.offsetParent
            }
            return bp
        }
    }();
    bb.nw = dY.nw = function(bC) {
        var cq = bb.jX(bC);
        window.scrollTo(cq.x, cq.y);
        return this
    };
    bb.cdh = function(ri) {
        ri = (ri || "").trim();
        return cf.bkG(ri)
    };
    bb.cck = dY.cck = function(bC, bX, cE) {
        bC = bb.bG(bC);
        if (!bC) return this;
        var bD = cf.bkR(bX, cE);
        if (!bD) return this;
        bb.ch(bC, "transform", bD);
        return this
    };
    bb.fp = dY.fp = function(bC, cE) {
        bC = bb.bG(bC);
        if (!!bC) bm.fo(cE, function(bD, bX) {
            bb.ch(bC, bX, bD)
        });
        return this
    };
    bb.ccj = dY.ccj = function(gw, bf) {
        gw = bb.bG(gw);
        if (!gw) return {
            start: 0,
            end: 0
        };
        if (bm.uu(bf)) bf = {
            start: bf,
            end: bf
        };
        if (bf != null) {
            if (bf.end == null) bf.end = bf.start || 0;
            cf.baX(gw, bf)
        } else {
            bf = cf.bcE(gw)
        }
        return bf
    };
    bb.ch = dY.ch = function(bC, bX, bD) {
        bC = bb.bG(bC);
        if (!!bC) cf.ZC(bC, bX, bD);
        return this
    };
    bb.ey = dY.ey = function(bC, bX) {
        bC = bb.bG(bC);
        if (!bC) return "";
        var hb = !window.getComputedStyle ? bC.currentStyle || cg : window.getComputedStyle(bC, null);
        return hb[cf.bkX(bX)] || ""
    };
    bb.bmF = function() {
        var eh = /[\s\r\n]+/gi;
        return function(ds) {
            ds = (ds || "").trim().replace(eh, " ");
            if (!ds) return;
            var bh = bb.ef("style");
            document.head.appendChild(bh);
            cf.bbD(bh, cf.bPn(ds));
            return bh
        }
    }();
    bb.bmI = function(RW) {
        try {
            RW = RW.trim();
            if (!!RW) return (new Function(RW))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    bb.rA = function() {
        var eh = /#<.*?>/g,
            gJ = +(new Date);
        return function(kE) {
            if (!DL) DL = [];
            var gb = "auto-" + gJ++;
            DL.push(kE.replace(eh, gb));
            return gb
        }
    }();
    bb.bmu = function() {
        if (!!DL) {
            bb.bmF(DL.join(""));
            DL = null
        }
        return this
    };
    bb.cdj = function(ds, kE) {
        ds = bb.bG(ds);
        return !ds ? null : cf.bch(ds, kE)
    };
    bb.bJ = dY.bJ = function() {
        cf.YU.apply(cf, arguments);
        return this
    };
    bb.bH = dY.bH = function() {
        cf.Zh.apply(cf, arguments);
        return this
    };
    bb.gL = dY.gL = function() {
        cf.MB.apply(cf, arguments);
        return this
    };
    bb.cU = dY.cU = function() {
        return cf.ZI.apply(cf, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    dY.isChange = !0
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        gm = NEJ.R,
        cC = NEJ.F,
        bb = bd("nej.e"),
        cf = bd("nej.h"),
        bm = bd("nej.u");
    var cmO = function(bl, bu) {
        try {
            bu = bu.toLowerCase();
            if (bl === null) return bu == "null";
            if (bl === undefined) return bu == "undefined";
            return cg.toString.call(bl).toLowerCase() == "[object " + bu + "]"
        } catch (e) {
            return !1
        }
    };
    bm.hC = function(bl) {
        return cmO(bl, "function")
    };
    bm.gH = function(bl) {
        return cmO(bl, "string")
    };
    bm.uu = function(bl) {
        return cmO(bl, "number")
    };
    bm.cdk = function(bl) {
        return cmO(bl, "boolean")
    };
    bm.RQ = function(bl) {
        return cmO(bl, "date")
    };
    bm.hh = function(bl) {
        return cmO(bl, "array")
    };
    bm.qj = function(bl) {
        return cmO(bl, "object")
    };
    bm.hk = function() {
        var eh = /[^\x00-\xfff]/g;
        return function(cm) {
            return ("" + (cm || "")).replace(eh, "**").length
        }
    }();
    bm.eg = function(bk, bw) {
        var eV = bm.hC(bw) ? bw : function(bD) {
                return bD === bw
            },
            bv = bm.fo(bk, eV);
        return bv != null ? bv : -1
    };
    bm.cdl = function() {
        var bmN;
        var Hp = function(bk, nP, nS) {
            if (nP > nS) return -1;
            var Hr = Math.ceil((nP + nS) / 2),
                bp = bmN(bk[Hr], Hr, bk);
            if (bp == 0) return Hr;
            if (bp < 0) return Hp(bk, nP, Hr - 1);
            return Hp(bk, Hr + 1, nS)
        };
        return function(bk, DD) {
            bmN = DD || cC;
            return Hp(bk, 0, bk.length - 1)
        }
    }();
    bm.nt = function(bk, gP, rD) {
        if (!bk || !bk.length || !bm.hC(gP)) return null;
        for (var i = bk.length - 1; i >= 0; i--)
            if (!!gP.call(rD, bk[i], i, bk)) return i;
        return null
    };
    bm.cv = function(bk, gP, rD) {
        if (!bk || !bk.length || !bm.hC(gP)) return this;
        if (!!bk.forEach) {
            bk.forEach(gP, rD);
            return this
        }
        for (var i = 0, l = bk.length; i < l; i++) gP.call(rD, bk[i], i, bk);
        return this
    };
    bm.fo = function(bk, gP, rD) {
        if (!bk || !bm.hC(gP)) return null;
        if (bk.length != null) {
            if (bk.length > 0)
                for (var i = 0, l = bk.length; i < l; i++)
                    if (!!gP.call(rD, bk[i], i, bk)) return i
        }
        if (bm.qj(bk)) {
            for (var x in bk)
                if (bk.hasOwnProperty(x) && !!gP.call(rD, bk[x], x, bk)) return x
        }
        return null
    };
    bm.cbL = function(iQ, cbH, bf) {
        iQ = iQ || [];
        bf = bf || cg;
        var bmT = !!bf.union,
            uE = !!bf.begin,
            RL = bf.compare,
            cbC = bmT && uE ? bm.nt : bm.cv;
        cbC(cbH, function(bw) {
            if (!!RL) RL = RL.gY(bw);
            var bv = bm.eg(iQ, RL || bw);
            if (bv >= 0) iQ.splice(bv, 1);
            if (bmT) iQ[uE ? "unshift" : "push"](bw)
        });
        return iQ
    };
    bm.Ez = function(cE, cm) {
        if (!cE || !cm || !cm.replace) return cm || "";
        return cm.replace(cE.r, function($1) {
            var bp = cE[!cE.i ? $1.toLowerCase() : $1];
            return bp != null ? bp : $1
        })
    };
    bm.fd = function() {
        var cE = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(cm) {
            return bm.Ez(cE, cm)
        }
    }();
    bm.cdm = function() {
        var cE = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(cm) {
            return bm.Ez(cE, cm)
        }
    }();
    bm.nc = function() {
        var cE = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            cbA = ["ä¸Šåˆ", "ä¸‹åˆ"],
            cbz = ["A.M.", "P.M."],
            baR = ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
            cby = ["ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹", "å", "åä¸€", "åäºŒ"],
            cbu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Hy = function(gk) {
            gk = parseInt(gk) || 0;
            return (gk < 10 ? "0" : "") + gk
        };
        var cbs = function(oM) {
            return oM < 12 ? 0 : 1
        };
        return function(cT, RF, cbq) {
            if (!cT || !RF) return "";
            cT = bm.RE(cT);
            cE.yyyy = cT.getFullYear();
            cE.yy = ("" + cE.yyyy).substr(2);
            cE.M = cT.getMonth() + 1;
            cE.MM = Hy(cE.M);
            cE.eM = cbu[cE.M - 1];
            cE.cM = cby[cE.M - 1];
            cE.d = cT.getDate();
            cE.dd = Hy(cE.d);
            cE.H = cT.getHours();
            cE.HH = Hy(cE.H);
            cE.m = cT.getMinutes();
            cE.mm = Hy(cE.m);
            cE.s = cT.getSeconds();
            cE.ss = Hy(cE.s);
            cE.ms = cT.getMilliseconds();
            cE.w = baR[cT.getDay()];
            var bnk = cbs(cE.H);
            cE.ct = cbA[bnk];
            cE.et = cbz[bnk];
            if (!!cbq) {
                cE.H = cE.H % 12
            }
            return bm.Ez(cE, RF)
        }
    }();
    bm.RE = function(cT) {
        var dH = cT;
        if (bm.gH(cT)) dH = new Date(Date.parse(cT));
        if (!bm.RQ(cT)) dH = new Date(cT);
        return dH
    };
    bm.Lh = function(cbj, cbe) {
        return (new Number(cbj)).toFixed(cbe)
    };
    bm.bdO = function() {
        var gK = /([^\/:])\/.*$/,
            jY = /\/[^\/]+$/,
            HF = /[#\?]/,
            bej = location.href.split(/[?#]/)[0],
            rG = document.createElement("a");
        var bep = function(mi) {
            return (mi || "").indexOf("://") > 0
        };
        var bnn = function(mi) {
            return (mi || "").split(HF)[0].replace(jY, "/")
        };
        var cbc = function(mi, gg) {
            if (mi.indexOf("/") == 0) return gg.replace(gK, "$1") + mi;
            return bnn(gg) + mi
        };
        bej = bnn(bej);
        return function(mi, gg) {
            mi = (mi || "").trim();
            if (!bep(gg)) gg = bej;
            if (!mi) return gg;
            if (bep(mi)) return mi;
            mi = cbc(mi, gg);
            rG.href = mi;
            mi = rG.href;
            return bep(mi) ? mi : rG.getAttribute("href", 4)
        }
    }();
    bm.cbb = function() {
        var eh = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(bZ) {
            if (eh.test(bZ || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    bm.bnp = function(bE, iS) {
        if (!bE) return iS;
        var bX = bE.tagName.toLowerCase(),
            bk = bb.eu(bE);
        if (!bk || !bk.length) {
            iS[bX] = bE.textContent || bE.text || "";
            return iS
        }
        var fy = {};
        iS[bX] = fy;
        bm.cv(bk, function(bh) {
            bm.bnp(bh, fy)
        });
        return iS
    };
    bm.cdq = function(yP) {
        try {
            return bm.bnp(bb.bmB(yP), {})
        } catch (ex) {
            return null
        }
    };
    bm.bnq = function(iN, HG) {
        var iS = {};
        bm.cv((iN || "").split(HG), function(bX) {
            var Rw = bX.split("=");
            if (!Rw || !Rw.length) return;
            var bN = Rw.shift();
            if (!bN) return;
            iS[decodeURIComponent(bN)] = decodeURIComponent(Rw.join("="))
        });
        return iS
    };
    bm.BW = function(gR, HG, caL) {
        if (!gR) return "";
        var cH = [];
        for (var x in gR) {
            cH.push(encodeURIComponent(x) + "=" + (!!caL ? encodeURIComponent(gR[x]) : gR[x]))
        }
        return cH.join(HG || ",")
    };
    bm.iO = function(cN) {
        return bm.bnq(cN, "&")
    };
    bm.eX = function(gR) {
        return bm.BW(gR, "&", !0)
    };
    bm.cds = function(gR) {
        return cf.Dl(gR)
    };
    bm.cdt = function(bk, eV) {
        var bp = {};
        bm.cv(bk, function(bw) {
            var bN = bw;
            if (!!eV) {
                bN = eV(bw)
            }
            bp[bN] = bw
        });
        return bp
    };
    bm.cdw = function(gk, gM) {
        var caE = ("" + gk).length,
            caD = Math.max(1, parseInt(gM) || 0),
            cjL = caD - caE;
        if (cjL > 0) {
            gk = (new Array(cjL + 1)).join("0") + gk
        }
        return "" + gk
    };
    bm.NB = function(gR, bX) {
        if (!bm.hh(bX)) {
            try {
                delete gR[bX]
            } catch (e) {
                gR[bX] = undefined
            }
            return this
        }
        bm.cv(bX, bm.NB.bi(bm, gR));
        return this
    };
    bm.blF = function() {
        var bns = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(cF) {
            cF = cF || 10;
            var bp = [];
            for (var i = 0, bnt; i < cF; ++i) {
                bnt = Math.floor(Math.random() * bns.length);
                bp.push(bns.charAt(bnt))
            }
            return bp.join("")
        }
    }();
    bm.HQ = function(iT, hM) {
        return Math.floor(Math.random() * (hM - iT) + iT)
    };
    bm.nY = function(cF) {
        cF = Math.max(0, Math.min(cF || 8, 30));
        var iT = Math.pow(10, cF - 1),
            hM = iT * 10;
        return bm.HQ(iT, hM).toString()
    };
    bm.Ro = function() {
        var gJ = +(new Date);
        return function() {
            return "" + gJ++
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        gm = NEJ.R,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        oc;
    if (!!bM.dZ) return;
    bM.dZ = NEJ.C();
    oc = bM.dZ.prototype;
    bM.dZ.bF = function(bf) {
        bf = bf || {};
        var dP = !!this.HS && this.HS.shift();
        if (!dP) {
            dP = new this(bf);
            this.cau = (this.cau || 0) + 1
        }
        dP.cz(bf);
        return dP
    };
    bM.dZ.bW = function() {
        var HU = function(bw, bv, bk) {
            bw.bW();
            bk.splice(bv, 1)
        };
        return function(dP) {
            if (!dP) return null;
            if (!bm.hh(dP)) {
                if (!(dP instanceof this)) {
                    var gb = dP.constructor;
                    if (!!gb.bW) gb.bW(dP);
                    return null
                }
                if (dP == this.fJ) delete this.fJ;
                if (dP == this.ze) delete this.ze;
                dP.cR();
                if (!this.HS) this.HS = [];
                if (bm.eg(this.HS, dP) < 0) {
                    this.HS.push(dP)
                }
                return null
            }
            bm.nt(dP, HU, this)
        }
    }();
    bM.dZ.iE = function(bf) {
        bf = bf || {};
        if (!this.fJ) this.fJ = this.bF(bf);
        return this.fJ
    };
    bM.dZ.car = function(bf, qO) {
        bf = bf || {};
        if (!!qO && !!this.ze) {
            this.ze.bW();
            delete this.ze
        }
        if (!this.ze) {
            this.ze = this.bF(bf)
        } else {
            this.ze.cz(bf)
        }
        return this.ze
    };
    oc.dv = function() {
        var gJ = +(new Date);
        return function() {
            this.id = gJ++;
            this.lC = {};
            this.bnv = {}
        }
    }();
    oc.cz = function(bf) {
        this.XF(bf)
    };
    oc.cR = function() {
        this.ky();
        this.XI()
    };
    oc.dq = function() {
        var gJ = +(new Date);
        var cal = function(cn) {
            if (!cn || cn.length < 3) return;
            this.bnv["de-" + gJ++] = cn;
            bj.bt.apply(bj, cn)
        };
        return function(bk) {
            bm.cv(bk, cal, this)
        }
    }();
    oc.XI = function() {
        var caa = function(cn, bN, cE) {
            delete cE[bN];
            bj.oz.apply(bj, cn)
        };
        return function() {
            bm.fo(this.bnv, caa)
        }
    }();
    oc.cdz = function(eV) {
        eV = eV || cC;
        bm.fo(this, function(Cb, bN, cE) {
            if (!!Cb && !!Cb.bW && !eV(Cb)) {
                delete cE[bN];
                Cb.bW()
            }
        })
    };
    oc.bW = function() {
        this.constructor.bW(this)
    };
    oc.bnI = function(bu) {
        var be = this.lC[bu.toLowerCase()];
        return !!be && be !== cC
    };
    oc.bt = function(bu, be) {
        this.Ch.apply(this, arguments);
        return this
    };
    oc.oz = function(bu, be) {
        var bu = (bu || "").toLowerCase(),
            fs = this.lC[bu];
        if (!bm.hh(fs)) {
            if (fs == be) delete this.lC[bu];
            return
        }
        bm.nt(fs, function(gO, bv, bk) {
            if (gO == be) bk.splice(bv, 1)
        })
    };
    oc.Ch = function(bu, be) {
        if (!!bu && bm.hC(be)) this.lC[bu.toLowerCase()] = be;
        return this
    };
    oc.XF = function() {
        var bZQ = function(be, bu) {
            this.Ch(bu, be)
        };
        return function(fs) {
            bm.fo(fs, bZQ, this);
            return this
        }
    }();
    oc.ky = function() {
        var YR = function(be, bu) {
            this.ky(bu)
        };
        return function(bu) {
            var bu = (bu || "").toLowerCase();
            if (!!bu) {
                delete this.lC[bu]
            } else {
                bm.fo(this.lC, YR, this)
            }
            return this
        }
    }();
    oc.YT = function(bu, be) {
        if (!bu || !bm.hC(be)) return this;
        bu = bu.toLowerCase();
        var fs = this.lC[bu];
        if (!fs) {
            this.lC[bu] = be;
            return this
        }
        if (!bm.hh(fs)) {
            this.lC[bu] = [fs]
        }
        this.lC[bu].push(be);
        return this
    };
    oc.bK = function(bu) {
        var be = this.lC[(bu || "").toLowerCase()];
        if (!be) return this;
        var cn = gm.slice.call(arguments, 1);
        if (!bm.hh(be)) return be.apply(this, cn);
        bm.cv(be, function(fr) {
            try {
                fr.apply(this, cn)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    bM.Rd = function() {
        var ce = {};
        return function(bB, gb, bf) {
            var fB = gb.bZO;
            if (!fB) {
                fB = bm.blF(10);
                gb.bZO = fB
            }
            var bN = bB + "-" + fB,
                dP = ce[bN];
            if (!!bf && !dP) {
                dP = gb.bF(bf);
                dP.bW = dP.bW.fj(function(be) {
                    delete ce[bN];
                    delete dP.bW
                });
                ce[bN] = dP
            }
            return dP
        }
    }()
})();
(function() {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.hI = function() {
        var dH = new Date,
            bXh = +dH,
            bbh = 864e5;
        var bXg = function(bX) {
            var qw = document.cookie,
                rS = "\\b" + bX + "=",
                PM = qw.search(rS);
            if (PM < 0) return "";
            PM += rS.length - 2;
            var yn = qw.indexOf(";", PM);
            if (yn < 0) yn = qw.length;
            return qw.substring(PM, yn) || ""
        };
        return function(bX, bl) {
            if (bl === undefined) return bXg(bX);
            if (u.gH(bl)) {
                if (!!bl) {
                    document.cookie = bX + "=" + bl + ";";
                    return bl
                }
                bl = {
                    expires: -100
                }
            }
            bl = bl || o;
            var qw = bX + "=" + (bl.value || "") + ";";
            delete bl.value;
            if (bl.expires !== undefined) {
                dH.setTime(bXh + bl.expires * bbh);
                bl.expires = dH.toGMTString()
            }
            qw += u.BW(bl, ";");
            document.cookie = qw
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        jf = bd("nej.c"),
        fm = bd("nej.g"),
        bb = bd("nej.e"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        bM = bd("nej.ut.j"),
        bm = bd("nej.u"),
        bc;
    if (!!bM.FF) return;
    bM.FF = NEJ.C();
    bc = bM.FF.bU(bI.dZ);
    bc.cz = function(bf) {
        this.cB(bf);
        this.qG = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.qG, bf);
        var zl = jf.bG("csrf");
        if (!!zl.cookie && !!zl.param) {
            var cN = encodeURIComponent(zl.param) + "=" + encodeURIComponent(bA.hI(zl.cookie) || ""),
                HG = this.qG.url.indexOf("?") < 0 ? "?" : "&";
            this.qG.url += HG + cN
        }
        this.PK = bf.headers || {};
        var cm = this.PK[fm.yY];
        if (cm == null) this.PK[fm.yY] = fm.bJr
    };
    bc.cR = function() {
        this.cV();
        delete this.xu;
        delete this.qG;
        delete this.PK
    };
    bc.bXf = function(cm) {
        var cE = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.qG.noescape) {
            return bm.Ez(cE, cm)
        } else {
            return cm
        }
    };
    bc.tu = function(be) {
        var gf = be.status;
        if (gf == -1) {
            this.bK("onerror", {
                code: fm.bku,
                message: "è¯·æ±‚[" + this.qG.url + "]è¶…æ—¶ï¼"
            });
            return
        }
        if (("" + gf).indexOf("2") != 0) {
            this.bK("onerror", {
                data: gf,
                code: fm.Xi,
                message: "æœåŠ¡å™¨è¿”å›žå¼‚å¸¸çŠ¶æ€[" + gf + "]!"
            });
            return
        }
        this.bK("onload", bb.ccq(this.bXf(be.result), this.qG.type))
    };
    bc.dJ = cC;
    bc.bcO = function(bl) {
        var bZ = this.qG.url;
        if (!bZ) {
            this.bK("onerror", {
                code: fm.beh,
                message: "æ²¡æœ‰è¾“å…¥è¯·æ±‚åœ°å€ï¼"
            });
            return this
        }
        try {
            this.qG.data = bl == null ? null : bl;
            var be = {
                request: this.qG,
                headers: this.PK
            };
            try {
                this.bK("onbeforerequest", be)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.dJ(be)
        } catch (e) {
            this.bK("onerror", {
                code: fm.Xi,
                message: "è¯·æ±‚[" + bZ + "]å¤±è´¥:" + e.message + "ï¼"
            })
        }
        return this
    };
    bc.rV = cC
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        cf = bd("nej.h"),
        fm = bd("nej.g"),
        bm = bd("nej.u"),
        bM = bd("nej.ut.j"),
        ce = {},
        Kv;
    if (!!bM.PE) return;
    bM.PE = NEJ.C();
    Kv = bM.PE.bU(bM.FF);
    Kv.cR = function() {
        this.cV();
        window.clearTimeout(this.gl);
        delete this.gl;
        try {
            this.qS.onreadystatechange = cC;
            this.qS.abort()
        } catch (e) {}
        delete this.qS
    };
    Kv.dJ = function() {
        var bXe = function(bD, bN) {
            this.qS.setRequestHeader(bN, bD)
        };
        return function(bf) {
            var gy = bf.request,
                vf = bf.headers;
            this.qS = cf.bdR();
            if (vf[fm.yY] === fm.cmN) {
                delete vf[fm.yY];
                this.qS.upload.onprogress = this.iA.bi(this, 1);
                if (gy.data.tagName === "FORM") gy.data = new FormData(gy.data)
            }
            this.qS.onreadystatechange = this.iA.bi(this, 2);
            if (gy.timeout != 0) {
                this.gl = window.setTimeout(this.iA.bi(this, 3), gy.timeout)
            }
            this.qS.open(gy.method, gy.url, !gy.sync);
            bm.fo(vf, bXe, this);
            if (!!this.qG.cookie && "withCredentials" in this.qS) this.qS.withCredentials = !0;
            this.qS.send(gy.data)
        }
    }();
    Kv.iA = function(bu) {
        switch (bu) {
            case 1:
                this.bK("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qS.readyState == 4) this.tu({
                    status: this.qS.status,
                    result: this.qS.responseText || ""
                });
                break;
            case 3:
                this.tu({
                    status: -1
                });
                break
        }
    };
    Kv.rV = function() {
        this.tu({
            status: 0
        });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Ic = {},
        QY = [],
        bnJ = /\s+/g,
        gJ = +(new Date),
        GN, cX, qI;
    var Ac = function() {
        var gK = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jY = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            HF = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bZJ = /^new\s+/,
            bZH = /['"]/;
        var bZG = function(bD) {
            if (gK.test(bD)) return;
            bD = bD.split(".")[0].trim();
            if (!bD || bZH.test(bD)) return;
            bD = bD.replace(bZJ, "");
            try {
                if (HF.test(bD)) return;
                qI[bD] = 1
            } catch (e) {}
        };
        return function(cm) {
            cm = cm || "";
            if (!cm || gK.test(cm)) return;
            var cH = cm.split(jY);
            for (var i = 0, l = cH.length; i < l; i++) bZG(cH[i])
        }
    }();
    var bZD = function(es) {
        if (es[2] != "in") throw "bad for loop statement: " + es.join(" ");
        QY.push(es[1]);
        Ac(es[3]);
        return "var __HASH__" + es[1] + " = " + es[3] + "," + es[1] + "," + es[1] + "_count=0;" + "if (!!__HASH__" + es[1] + ")" + "for(var " + es[1] + "_key in __HASH__" + es[1] + "){" + es[1] + " = __HASH__" + es[1] + "[" + es[1] + "_key];" + "if (typeof(" + es[1] + ')=="function") continue;' + es[1] + "_count++;"
    };
    var bZC = function() {
        var es = QY[QY.length - 1];
        return "}; if(!__HASH__" + es + "||!" + es + "_count){"
    };
    var bZB = function() {
        QY.pop();
        return "};"
    };
    var bZA = function(es) {
        if (es[2] != "as") throw "bad for list loop statement: " + es.join(" ");
        var Io = es[1].split("..");
        if (Io.length > 1) {
            Ac(Io[0]);
            Ac(Io[1]);
            return "for(var " + es[3] + "," + es[3] + "_index=0," + es[3] + "_beg=" + Io[0] + "," + es[3] + "_end=" + Io[1] + "," + es[3] + "_length=parseInt(" + es[3] + "_end-" + es[3] + "_beg+1);" + es[3] + "_index<" + es[3] + "_length;" + es[3] + "_index++){" + es[3] + " = " + es[3] + "_beg+" + es[3] + "_index;"
        } else {
            Ac(es[1]);
            return "for(var __LIST__" + es[3] + " = " + es[1] + "," + es[3] + "," + es[3] + "_index=0," + es[3] + "_length=__LIST__" + es[3] + ".length;" + es[3] + "_index<" + es[3] + "_length;" + es[3] + "_index++){" + es[3] + " = __LIST__" + es[3] + "[" + es[3] + "_index];"
        }
    };
    var bZw = function(es) {
        if (!es || !es.length) return;
        es.shift();
        var bX = es[0].split("(")[0];
        return "var " + bX + " = function" + es.join("").replace(bX, "") + "{var __OUT=[];"
    };
    var bZi = function(es) {
        if (!es[1]) throw "bad include statement: " + es.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var baT = function(lp, es) {
        Ac(es.slice(1).join(" "));
        return lp
    };
    var bZg = function(es) {
        return baT("if(", es)
    };
    var bZd = function(es) {
        return baT("}else if(", es)
    };
    var bZa = function(es) {
        return baT("var ", es)
    };
    cX = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: bZg,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: bZd,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: bZD,
                pmin: 3
            },
            forelse: {
                pfix: bZC
            },
            "/for": {
                pfix: bZB
            },
            list: {
                pfix: bZA,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: bZa,
                sfix: ";"
            },
            macro: {
                pfix: bZw
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    GN = !0
                }
            },
            "/trim": {
                pfix: function() {
                    GN = null
                }
            },
            inline: {
                pfix: bZi,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(lp) {
                return (lp || "") + "" + gJ
            },
            "default": function(bD, oI) {
                return bD || oI
            }
        }
    };
    var bYT = function() {
        var bYS = /\\([\{\}])/g;
        return function(cm, jo) {
            cm = cm.replace(bYS, "$1");
            var es = cm.slice(1, -1).split(bnJ),
                cj = cX.def[es[0]];
            if (!cj) {
                QP(cm, jo);
                return
            }
            if (!!cj.pmin && cj.pmin >= es.length) throw "Statement needs more parameters:" + cm;
            jo.push(!!cj.pfix && typeof cj.pfix != "string" ? cj.pfix(es) : cj.pfix || "");
            if (!!cj.sfix) {
                if (es.length <= 1) {
                    if (!!cj.pdft) jo.push(cj.pdft)
                } else {
                    for (var i = 1, l = es.length; i < l; i++) {
                        if (i > 1) jo.push(" ");
                        jo.push(es[i])
                    }
                }
                jo.push(cj.sfix)
            }
        }
    }();
    var bnW = function(EU, jo) {
        if (!EU || !EU.length) return;
        if (EU.length == 1) {
            var bci = EU.pop();
            Ac(bci);
            jo.push(bci == "" ? '""' : bci);
            return
        }
        var bcz = EU.pop().split(":");
        jo.push("__MDF['" + bcz.shift() + "'](");
        bnW(EU, jo);
        if (bcz.length > 0) {
            var cn = bcz.join(":");
            Ac(cn);
            jo.push("," + cn)
        }
        jo.push(")")
    };
    var QP = function(cm, jo) {
        if (!cm) return;
        var uP = cm.split("\n");
        if (!uP || !uP.length) return;
        for (var i = 0, l = uP.length, iz; i < l; i++) {
            iz = uP[i];
            if (!!GN) {
                iz = iz.trim();
                if (!iz) continue
            }
            bYP(iz, jo);
            if (!!GN && i < l - 1) jo.push("__OUT.push('\\n');")
        }
    };
    var bYP = function() {
        var bYO = /\|\|/g,
            bYN = /#@@#/g;
        return function(cm, jo) {
            var Iz = "}",
                IB = -1,
                cF = cm.length,
                uE, kp, EY, QH, IE;
            while (IB + Iz.length < cF) {
                uE = "${";
                kp = "}";
                EY = cm.indexOf(uE, IB + Iz.length);
                if (EY < 0) break;
                if (cm.charAt(EY + 2) == "%") {
                    uE = "${%";
                    kp = "%}"
                }
                QH = cm.indexOf(kp, EY + uE.length);
                if (QH < 0) break;
                QE(cm.substring(IB + Iz.length, EY), jo);
                IE = cm.substring(EY + uE.length, QH).replace(bYO, "#@@#").split("|");
                for (var i = 0, l = IE.length; i < l; IE[i] = IE[i].replace(bYN, "||"), i++);
                jo.push("__OUT.push(");
                bnW(IE, jo);
                jo.push(");");
                Iz = kp;
                IB = QH
            }
            QE(cm.substring(IB + Iz.length), jo)
        }
    }();
    var QE = function() {
        var cE = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var bYM = function(cm) {
            return (cm || "").replace(cE.r, function($1) {
                return cE[$1] || $1
            })
        };
        return function(cm, jo) {
            if (!cm) return;
            jo.push("__OUT.push('" + bYM(cm) + "');")
        }
    }();
    var bYF = function() {
        var bYE = /\t/g,
            bYD = /\n/g,
            bYC = /\r\n?/g;
        var bof = function(cm, uE) {
            var bv = cm.indexOf("}", uE + 1);
            while (cm.charAt(bv - 1) == "\\") {
                bv = cm.indexOf("}", bv + 1)
            }
            return bv
        };
        var bYA = function() {
            var cH = [],
                bYz = arguments[0];
            for (var x in bYz) {
                x = (x || "").trim();
                if (!x) continue;
                cH.push(x + "=$v('" + x + "')")
            }
            return cH.length > 0 ? "var " + cH.join(",") + ";" : ""
        };
        return function(cm) {
            qI = {};
            cm = cm.replace(bYC, "\n").replace(bYE, "    ");
            var qU = ["if(!__CTX) return '';", ""];
            qU.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qU.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qU.push("__OUT=[];");
            var zM = -1,
                cF = cm.length;
            var mx, Fj, Jh, Jj, xy, Jk, bib, Jo;
            while (zM + 1 < cF) {
                mx = zM;
                mx = cm.indexOf("{", mx + 1);
                while (mx >= 0) {
                    Fj = bof(cm, mx);
                    Jh = cm.substring(mx, Fj);
                    Jj = Jh.match(cX.blk);
                    if (!!Jj) {
                        xy = Jj[1].length + 1;
                        Jk = cm.indexOf("}", mx + xy);
                        if (Jk >= 0) {
                            bib = Jk - mx - xy <= 0 ? "{/" + Jj[1] + "}" : Jh.substr(xy + 1);
                            xy = cm.indexOf(bib, Jk + 1);
                            if (xy >= 0) {
                                QP(cm.substring(zM + 1, mx), qU);
                                Jo = cm.substring(Jk + 1, xy);
                                switch (Jj[1]) {
                                    case "cdata":
                                        QE(Jo, qU);
                                        break;
                                    case "minify":
                                        QE(Jo.replace(bYD, " ").replace(bnJ, " "), qU);
                                        break;
                                    case "eval":
                                        if (!!Jo) qU.push("__OUT.push((function(){" + Jo + "})());");
                                        break
                                }
                                mx = zM = xy + bib.length - 1
                            }
                        }
                    } else if (cm.charAt(mx - 1) != "$" && cm.charAt(mx - 1) != "\\" && Jh.substr(Jh.charAt(1) == "/" ? 2 : 1).search(cX.tag) == 0) {
                        break
                    }
                    mx = cm.indexOf("{", mx + 1)
                }
                if (mx < 0) break;
                Fj = bof(cm, mx);
                if (Fj < 0) break;
                QP(cm.substring(zM + 1, mx), qU);
                bYT(cm.substring(mx, Fj + 1), qU);
                zM = Fj
            }
            QP(cm.substring(zM + 1), qU);
            qU.push(';return __OUT.join("");');
            qU[1] = bYA(qI);
            qI = null;
            return new Function("__CTX", "__MDF", qU.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gJ
    };
    TrimPath.merge = function() {
        var Js = {};
        TrimPath.dump = function() {
            return {
                func: Js,
                text: Ic
            }
        };
        return function(fB, bl, lE) {
            try {
                bl = bl || {};
                if (!Js[fB] && !Ic[fB]) return "";
                if (!Js[fB]) {
                    Js[fB] = bYF(Ic[fB]);
                    delete Ic[fB]
                }
                if (!!lE) {
                    for (var x in cX.ext)
                        if (!lE[x]) lE[x] = cX.ext[x]
                }
                return Js[fB](bl, lE || cX.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var bYw = +(new Date);
        return function(cm, fB) {
            if (!cm) return "";
            fB = fB || "ck_" + bYw++;
            Ic[fB] = cm;
            return fB
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        ib = {};
    bb.Fq = TrimPath.seed;
    bb.dg = function() {
        var bog = function(bB) {
            return !bb.jZ ? "" : bb.jZ(bB)
        };
        return function(fB, bl, lE) {
            bl = bl || {};
            bl.inline = bog;
            lE = NEJ.X(NEJ.X({}, ib), lE);
            lE.rand = bm.nY;
            lE.format = bm.nc;
            lE.escape = bm.fd;
            lE.inline = bog;
            return TrimPath.merge(fB, bl, lE)
        }
    }();
    bb.gs = function(cm, bYm) {
        if (!cm) return "";
        var fB, bC = bb.bG(cm);
        if (!!bC) {
            fB = bC.id;
            cm = bC.value || bC.innerText;
            if (!bYm) bb.dW(bC)
        }
        return TrimPath.parse(cm, fB)
    };
    bb.fR = function(cQ, fB, bl, lE) {
        cQ = bb.bG(cQ);
        if (!!cQ) cQ.innerHTML = bb.dg(fB, bl, lE);
        return this
    };
    bb.cdJ = function(cE) {
        NEJ.X(ib, cE)
    };
    bd("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var ej = NEJ.P("nej.p"),
        bM = window,
        kN = ej.Hj,
        bpd = kN.ipad || kN.iphone;
    if (!bpd && !!bM.requestAnimationFrame && !!bM.cancelRequestAnimationFrame) return;
    var lp = ej.ek.prefix.pro;
    if (!bpd && !!bM[lp + "RequestAnimationFrame"] && !!bM[lp + "CancelRequestAnimationFrame"]) {
        bM.requestAnimationFrame = bM[lp + "RequestAnimationFrame"];
        bM.cancelRequestAnimationFrame = bM[lp + "CancelRequestAnimationFrame"];
        return
    }
    var PC = kN.desktop ? 80 : kN.ios ? 50 : 30;
    bM.requestAnimationFrame = function(gP) {
        return window.setTimeout(function() {
            try {
                gP(+(new Date))
            } catch (ex) {}
        }, 1e3 / PC)
    };
    bM.cancelRequestAnimationFrame = function(bB) {
        window.clearTimeout(bB);
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bm = bd("nej.u"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        cf = bd("nej.h"),
        dY = bd("nej.x"),
        Pz = bd("nej.ut.j.cb"),
        iq;
    if (!!bb.rW) return;
    bb.rW = dY.rW = function() {
        var ce = {},
            gK = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(be) {
            var bB = decodeURIComponent(be.target),
                bu = be.type.toLowerCase();
            var fr = ce[bB + "-on" + bu];
            if (!!fr) {
                try {
                    fr(be)
                } catch (e) {}
                return
            }
            var dU = ce[bB + "-tgt"];
            if (!!dU && gK.test(bu)) {
                bpi(dU, be)
            }
        };
        var bfm = function(bf) {
            var cQ = bb.bG(bf.parent) || document.body,
                eN = bb.dg(iq, bf);
            cQ.insertAdjacentHTML(!bf.hidden ? "beforeEnd" : "afterBegin", eN)
        };
        var bpi = function(bB, be) {
            var bu = be.type.toLowerCase();
            requestAnimationFrame(function() {
                bj.bK(bB, bu)
            })
        };
        var bWY = function(hQ) {
            return !!hQ && !!hQ.inited && !!hQ.inited()
        };
        var KE = function(bB) {
            var cH = [document.embeds[bB], bb.bG(bB), document[bB], window[bB]],
                bv = bm.fo(cH, bWY),
                hQ = cH[bv],
                bgf = bB + "-count";
            ce[bgf]++;
            if (!!hQ || ce[bgf] > 100) {
                ce[bB](hQ);
                delete ce[bB];
                delete ce[bgf];
                return
            }
            window.setTimeout(KE.bi(null, bB), 300)
        };
        var bWV = function(bf) {
            var bB = bf.id,
                jF = bf.params;
            if (!jF) {
                jF = {};
                bf.params = jF
            }
            var qI = jF.flashvars || "";
            qI += (!qI ? "" : "&") + ("id=" + bB);
            if (!bf.hidden && (!!bf.target || cf.TL(jF.wmode))) {
                var kZ = bb.lr(bf.target) || bb.lr(bf.parent),
                    bpl = bm.Ro();
                Pz["cb" + bpl] = bpi.bi(null, kZ);
                qI += "&onevent=nej.ut.j.cb.cb" + bpl;
                ce[bB + "-tgt"] = kZ
            }
            jF.flashvars = qI;
            bm.fo(bf, function(bD, bN) {
                if (bm.hC(bD) && bN != "onready") {
                    ce[bB + "-" + bN] = bD
                }
            })
        };
        return function(bf) {
            bf = NEJ.X({}, bf);
            if (!bf.src) return;
            var bB = "flash_" + bm.Ro();
            bf.id = bB;
            bWV(bf);
            bfm(bf);
            if (!bf.onready) return;
            ce[bB] = bf.onready;
            ce[bB + "-count"] = 0;
            KE(bB)
        }
    }();
    iq = bb.gs('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    dY.isChange = !0
})();
(function() {
    var bd = NEJ.P,
        jf = bd("nej.c"),
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bM = bd("nej.ut.j"),
        Pz = bd("nej.ut.j.cb"),
        ce = {},
        gJ = +(new Date),
        bgU;
    if (!!bM.bgW) return;
    Pz["ld" + gJ] = function(bN, ew) {
        var jH = ce[bN];
        if (!jH) return;
        delete ce[bN];
        jH.tu({
            status: 200,
            result: ew
        })
    };
    Pz["er" + gJ] = function(bN, gf) {
        var jH = ce[bN];
        if (!jH) return;
        delete ce[bN];
        jH.tu({
            status: gf || 0
        })
    };
    bM.bgW = NEJ.C();
    bgU = bM.bgW.bU(bM.FF);
    bgU.dJ = function(bf) {
        var hQ = ce.flash;
        if (bm.hh(hQ)) {
            hQ.push(this.dJ.bi(this, bf));
            return
        }
        if (!hQ) {
            ce.flash = [this.dJ.bi(this, bf)];
            bb.rW({
                hidden: !0,
                src: jf.bG("ajax.swf"),
                onready: function(hQ) {
                    if (!hQ) return;
                    var bk = ce.flash;
                    ce.flash = hQ;
                    bm.nt(bk, function(fr) {
                        try {
                            fr()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.xu = "swf-" + bm.nY();
        ce[this.xu] = this;
        var bl = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, bf.request);
        bl.key = this.xu;
        bl.headers = bf.headers;
        bl.onerror = "nej.ut.j.cb.er" + gJ;
        bl.onloaded = "nej.ut.j.cb.ld" + gJ;
        var bpq = jf.bFS(bl.url);
        if (!!bpq) bl.policyURL = bpq;
        hQ.request(bl)
    };
    bgU.rV = function() {
        delete ce[this.xu];
        this.tu({
            status: 0
        });
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cf = bd("nej.h");
    cf.bpv = function() {
        var eh = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(iM) {
            iM = iM || "";
            if (eh.test(iM)) return RegExp.$1;
            return "*"
        }
    }();
    cf.bhF = function(bl) {
        return bl
    };
    cf.bhH = function(bpw, bf) {
        if (!bpw.postMessage) return;
        bf = bf || cg;
        bpw.postMessage(cf.bhF(bf.data), cf.bpv(bf.origin))
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        bc;
    if (!!bM.gN) return;
    bM.gN = NEJ.C();
    bc = bM.gN.bU(bM.dZ);
    bc.dv = function() {
        this.bS = {};
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.Jy = bb.bG(bf.element) || window;
        this.boy(bf.event);
        this.bYh();
        this.bK("oninit")
    };
    bc.cR = function() {
        var Bu = function(bD, bN, cE) {
            if (!bm.hh(bD)) {
                bm.NB(this.Jy, bN)
            }
            delete cE[bN]
        };
        return function() {
            this.cV();
            bm.fo(this.bS, Bu, this);
            delete this.Jy
        }
    }();
    bc.Qi = function(bC, bu) {
        bC = bb.bG(bC);
        return bC == this.Jy && (!bu || !!this.bS["on" + bu])
    };
    bc.boy = function(be) {
        if (bm.gH(be)) {
            var bX = "on" + be;
            if (!this.bS[bX]) {
                this.bS[bX] = this.bYe.bi(this, be)
            }
            this.boB(be);
            return
        }
        if (bm.hh(be)) {
            bm.cv(be, this.boy, this)
        }
    };
    bc.boB = function(bu) {
        var be = "on" + bu,
            fr = this.Jy[be],
            boD = this.bS[be];
        if (fr != boD) {
            this.Qf(bu);
            if (!!fr && fr != cC) this.boE(bu, fr);
            this.Jy[be] = boD
        }
    };
    bc.boE = function(bu, fr, bXS) {
        var bk = this.bS[bu];
        if (!bk) {
            bk = [];
            this.bS[bu] = bk
        }
        if (bm.hC(fr)) {
            !bXS ? bk.push(fr) : bk.unshift(fr)
        }
    };
    bc.Qf = function(bu, fr) {
        var bk = this.bS[bu];
        if (!bk || !bk.length) return;
        if (!fr) {
            delete this.bS[bu];
            return
        }
        bm.nt(bk, function(bD, bv, Fv) {
            if (fr === bD) {
                Fv.splice(bv, 1);
                return !0
            }
        })
    };
    bc.bYe = function(bu, be) {
        be = be || {
            noargs: !0
        };
        be.type = bu;
        this.bK("ondispatch", be);
        if (!!be.stopped) return;
        bm.cv(this.bS[bu], function(fr) {
            try {
                fr(be)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    bc.bYh = function() {
        var Xl = function(be) {
            var cn = be.args,
                bu = cn[1].toLowerCase();
            if (this.Qi(cn[0], bu)) {
                be.stopped = !0;
                this.boB(bu);
                this.boE(bu, cn[2], cn[3]);
                this.bK("oneventadd", {
                    type: bu,
                    listener: cn[2]
                })
            }
        };
        var bXR = function(be) {
            var cn = be.args,
                bu = cn[1].toLowerCase();
            if (this.Qi(cn[0], bu)) {
                be.stopped = !0;
                this.Qf(bu, cn[2])
            }
        };
        var YR = function(be) {
            var cn = be.args,
                bu = (cn[1] || "").toLowerCase();
            if (this.Qi(cn[0])) {
                if (!!bu) {
                    this.Qf(bu);
                    return
                }
                bm.fo(this.bS, function(bD, bN) {
                    if (bm.hh(bD)) {
                        this.Qf(bN)
                    }
                }, this)
            }
        };
        var bXQ = function(be) {
            var cn = be.args,
                bu = cn[1].toLowerCase();
            if (this.Qi(cn[0], bu)) {
                be.stopped = !0;
                cn[0]["on" + bu].apply(cn[0], cn.slice(2))
            }
        };
        return function() {
            if (!!this.bXP) return;
            this.bXP = true;
            bj.bt = bj.bt.fj(Xl.bi(this));
            bj.oz = bj.oz.fj(bXR.bi(this));
            bj.ky = bj.ky.fj(YR.bi(this));
            bj.bK = bj.bK.fj(bXQ.bi(this))
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p"),
        cf = bd("nej.h"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bI = bd("nej.ut");
    if (bM.ns.trident) return;
    if (!!window.postMessage) {
        cf.bhF = cf.bhF.fj(function(be) {
            be.stopped = !0;
            be.value = JSON.stringify(be.args[0])
        });
        return
    }
    var bN = "MSG|",
        jU = [];
    var bWO = function() {
        var bX = unescape(window.name || "").trim();
        if (!bX || bX.indexOf(bN) != 0) return;
        window.name = "";
        var bp = bm.bnq(bX.replace(bN, ""), "|"),
            iM = (bp.origin || "").toLowerCase();
        if (!!iM && iM != "*" && location.href.toLowerCase().indexOf(iM) != 0) return;
        bj.bK(window, "message", {
            data: JSON.parse(bp.data || "null"),
            source: window.frames[bp.self] || bp.self,
            origin: cf.bpv(bp.ref || document.referrer)
        })
    };
    var bWG = function() {
        var Pu;
        var bWF = function(cE, bv, bk) {
            if (bm.eg(Pu, cE.w) < 0) {
                Pu.push(cE.w);
                bk.splice(bv, 1);
                cE.w.name = cE.d
            }
        };
        return function() {
            Pu = [];
            bm.nt(jU, bWF);
            Pu = null
        }
    }();
    cf.bhH = function() {
        var bWD = function(bl) {
            var bp = {};
            bl = bl || cg;
            bp.origin = bl.origin || "";
            bp.ref = location.href;
            bp.self = bl.source;
            bp.data = JSON.stringify(bl.data);
            return bN + bm.BW(bp, "|", !0)
        };
        return cf.bhH.fj(function(be) {
            be.stopped = !0;
            var cn = be.args;
            jU.unshift({
                w: cn[0],
                d: escape(bWD(cn[1]))
            })
        })
    }();
    bI.gN.bF({
        element: window,
        event: "message"
    });
    window.setInterval(bWG, 100);
    window.setInterval(bWO, 20)
})();
(function() {
    var bd = NEJ.P,
        cf = bd("nej.h"),
        bb = bd("nej.e"),
        bA = bd("nej.j");
    bA.bWC = function() {
        var jb = window.name || "_parent",
            bWA = {
                hs: window.top,
                jb: window,
                cQ: window.parent
            };
        return function(dU, bf) {
            if (typeof dU == "string") {
                dU = bWA[dU] || window.frames[dU];
                if (!dU) return this
            }
            var bl = NEJ.X({
                origin: "*",
                source: jb
            }, bf);
            cf.bhH(dU, bl);
            return this
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        jf = bd("nej.c"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bM = bd("nej.ut.j"),
        ce = {},
        Pp;
    if (!!bM.bjo) return;
    bM.bjo = NEJ.C();
    Pp = bM.bjo.bU(bM.FF);
    Pp.dv = function() {
        var fI = "NEJ-AJAX-DATA:",
            zU = !1;
        var bjs = function(be) {
            var bl = be.data;
            if (bl.indexOf(fI) != 0) return;
            bl = JSON.parse(bl.replace(fI, ""));
            var jH = ce[bl.key];
            if (!jH) return;
            delete ce[bl.key];
            bl.result = decodeURIComponent(bl.result || "");
            jH.tu(bl)
        };
        var bjA = function() {
            if (!zU) {
                zU = !0;
                bj.bt(window, "message", bjs)
            }
        };
        return function() {
            this.dC();
            bjA()
        }
    }();
    Pp.dJ = function(bf) {
        var gy = bf.request,
            jH = jf.bFH(gy.url),
            uz = ce[jH];
        if (bm.hh(uz)) {
            uz.push(this.dJ.bi(this, bf));
            return
        }
        if (!uz) {
            ce[jH] = [this.dJ.bi(this, bf)];
            bb.Tp({
                src: jH,
                visible: !1,
                onload: function(be) {
                    var bk = ce[jH];
                    ce[jH] = bj.bY(be).contentWindow;
                    bm.nt(bk, function(fr) {
                        try {
                            fr()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.xu = "frm-" + bm.nY();
        ce[this.xu] = this;
        var bl = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gy);
        bl.key = this.xu;
        bl.headers = bf.headers;
        bA.bWC(ce[jH], {
            data: bl
        })
    };
    Pp.rV = function() {
        delete ce[this.xu];
        this.tu({
            status: 0
        });
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        fm = bd("nej.g"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bM = bd("nej.ut.j"),
        ce = {},
        FO;
    if (!!bM.Vg) return;
    bM.Vg = NEJ.C();
    FO = bM.Vg.bU(bM.FF);
    FO.dv = function() {
        var fI = "NEJ-UPLOAD-RESULT:",
            zU = !1;
        var bjs = function(be) {
            var bl = be.data;
            if (bl.indexOf(fI) != 0) return;
            bl = JSON.parse(bl.replace(fI, ""));
            var jH = ce[bl.key];
            if (!jH) return;
            delete ce[bl.key];
            jH.tu(decodeURIComponent(bl.result))
        };
        var bjA = function() {
            if (!zU) {
                zU = !0;
                bj.bt(window, "message", bjs)
            }
        };
        return function() {
            this.dC();
            bjA()
        }
    }();
    FO.cR = function() {
        this.cV();
        bb.dW(this.Vj);
        delete this.Vj;
        window.clearTimeout(this.gl);
        delete this.gl
    };
    FO.tu = function(ew) {
        var bV;
        try {
            bV = JSON.parse(ew);
            this.bK("onload", bV)
        } catch (e) {
            this.bK("onerror", {
                code: fm.bIQ,
                message: ew
            })
        }
    };
    FO.dJ = function() {
        var bWz = function() {
            var qe, ew;
            try {
                var qe = this.Vj.contentWindow.document.body,
                    ew = qe.innerText || qe.textContent
            } catch (e) {
                return
            }
            this.tu(ew)
        };
        var Vy = function(bZ, fC, qw) {
            bA.cG(bZ, {
                type: "json",
                method: "POST",
                cookie: qw,
                mode: parseInt(fC) || 0,
                onload: function(bl) {
                    if (!this.gl) return;
                    this.bK("onuploading", bl);
                    this.gl = window.setTimeout(Vy.bi(this, bZ, fC, qw), 1e3)
                }.bi(this),
                onerror: function(dc) {
                    if (!this.gl) return;
                    this.gl = window.setTimeout(Vy.bi(this, bZ, fC, qw), 1e3)
                }.bi(this)
            })
        };
        return function(bf) {
            var gy = bf.request,
                vf = bf.headers,
                fF = gy.data,
                bX = "fom-" + bm.nY();
            ce[bX] = this;
            fF.target = bX;
            fF.method = "POST";
            fF.enctype = fm.cmN;
            fF.encoding = fm.cmN;
            var bZ = fF.action || "",
                mb = bZ.indexOf("?") <= 0 ? "?" : "&";
            fF.action = bZ + mb + "_proxy_=form";
            this.Vj = bb.Tp({
                name: bX,
                onload: function(be) {
                    var uz = bj.bY(be);
                    bj.bt(uz, "load", bWz.bi(this));
                    fF.submit();
                    var bpF = (fF.nej_query || cg).value;
                    if (!bpF) return;
                    var fC = (fF.nej_mode || cg).value,
                        qw = (fF.nej_cookie || cg).value == "true";
                    this.gl = window.setTimeout(Vy.bi(this, bpF, fC, qw), 100)
                }.bi(this)
            })
        }
    }();
    FO.rV = function() {
        this.bK("onerror", {
            code: fm.bJa,
            message: "å®¢æˆ·ç«¯ç»ˆæ­¢æ–‡ä»¶ä¸Šä¼ "
        });
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cf = bd("nej.h"),
        bM = bd("nej.ut.j");
    cf.bdR = function() {
        return new XMLHttpRequest
    };
    cf.VI = function(fC, Ph, bf) {
        var cE = !!Ph ? {
            2: bM.Vg
        } : {
            2: bM.bjo,
            3: bM.bgW
        };
        return (cE[fC] || bM.PE).bF(bf)
    }
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p"),
        cf = bd("nej.h");
    if (bM.ns.trident) return;
    cf.bdR = function() {
        var IJ = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var bWu = function() {
            for (var i = 0, l = IJ.length; i < l; i++) {
                try {
                    return new ActiveXObject(IJ[i])
                } catch (e) {}
            }
            return null
        };
        return cf.bdR.fj(function(be) {
            if (!!window.XMLHttpRequest) return;
            be.stopped = !0;
            be.value = bWu()
        })
    }();
    cf.VI = function() {
        var CM = {
            0: 2,
            1: 3
        };
        return cf.VI.fj(function(be) {
            var cn = be.args,
                fC = cn[0] || 0;
            cn[0] = !!cn[1] ? 2 : CM[fC] || fC
        })
    }()
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        cf = bd("nej.h"),
        fm = bd("nej.g"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bM = bd("nej.ut.j"),
        Lf = {},
        DC = cC;
    bA.rV = function(fB) {
        var ce = Lf[fB];
        if (!ce) return this;
        ce.req.rV();
        return this
    };
    bA.cdR = function(eV) {
        DC = eV || cC;
        return this
    };
    bA.cG = function() {
        var jq = (location.protocol + "//" + location.host).toLowerCase();
        var bWs = function(bZ) {
            var iM = bm.cbb(bZ);
            return !!iM && iM != jq
        };
        var bWr = function(vf) {
            return (vf || cg)[fm.yY] == fm.cmN
        };
        var bWl = function(bf) {
            var Ph = bWr(bf.headers);
            if (!bWs(bf.url) && !Ph) return bM.PE.bF(bf);
            return cf.VI(bf.mode, Ph, bf)
        };
        var Bu = function(fB) {
            var ce = Lf[fB];
            if (!ce) return;
            if (!!ce.req) ce.req.bW();
            delete Lf[fB]
        };
        var bpW = function(fB, bu) {
            var ce = Lf[fB];
            if (!ce) return;
            Bu(fB);
            try {
                var be = {
                    type: bu,
                    result: arguments[2]
                };
                DC(be);
                if (!be.stopped)(ce[bu] || cC)(be.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var Ln = function(fB, bl) {
            bpW(fB, "onload", bl)
        };
        var WF = function(fB, dc) {
            bpW(fB, "onerror", dc)
        };
        return function(bZ, bf) {
            bf = bf || {};
            var fB = bm.nY(),
                ce = {
                    onload: bf.onload || cC,
                    onerror: bf.onerror || cC
                };
            Lf[fB] = ce;
            bf.onload = Ln.bi(null, fB);
            bf.onerror = WF.bi(null, fB);
            if (!!bf.query) {
                var mb = bZ.indexOf("?") < 0 ? "?" : "&",
                    cN = bf.query;
                if (bm.qj(cN)) cN = bm.eX(cN);
                if (!!cN) bZ += mb + cN
            }
            bf.url = bZ;
            ce.req = bWl(bf);
            ce.req.bcO(bf.data);
            return fB
        }
    }();
    bA.jT = function(fF, bf) {
        var hl = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(hl, bf);
        hl.data = fF;
        hl.method = "POST";
        hl.timeout = 0;
        hl.headers[fm.yY] = fm.cmN;
        return bA.cG(fF.action, hl)
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        fm = bd("nej.g"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bM = bd("nej.ut.j"),
        lW, zn = 6e4;
    if (!!bM.JN) return;
    bM.JN = NEJ.C();
    lW = bM.JN.bU(bI.dZ);
    lW.dv = function() {
        this.dC();
        this.JO = {
            onerror: this.bXO.bi(this),
            onloaded: this.bXL.bi(this)
        };
        if (!this.constructor.bS) this.constructor.bS = {
            loaded: {}
        }
    };
    lW.cz = function(bf) {
        this.cB(bf);
        this.Fz = bf.version;
        this.XT = bf.timeout;
        this.JO.version = this.Fz;
        this.JO.timeout = this.XT
    };
    lW.boF = function(bN) {
        delete this.constructor.bS[bN]
    };
    lW.yB = function(bN) {
        return this.constructor.bS[bN]
    };
    lW.boI = function(bN, bl) {
        this.constructor.bS[bN] = bl
    };
    lW.PW = cC;
    lW.boL = function(gy) {
        bj.ky(gy)
    };
    lW.YH = function(gy) {
        gy.src = this.lL;
        document.head.appendChild(gy)
    };
    lW.yp = function() {
        var ce = this.yB(this.lL);
        if (!ce) return;
        window.clearTimeout(ce.timer);
        this.boL(ce.request);
        delete ce.bind;
        delete ce.timer;
        delete ce.request;
        this.boF(this.lL);
        this.yB("loaded")[this.lL] = !0
    };
    lW.PU = function(bX) {
        var ce = this.yB(this.lL);
        if (!ce) return;
        var bk = ce.bind;
        this.yp();
        if (!!bk && bk.length > 0) {
            var dP;
            while (bk.length) {
                dP = bk.shift();
                try {
                    dP.bK(bX, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                dP.bW()
            }
        }
    };
    lW.hi = function(dc) {
        this.PU("onerror", dc)
    };
    lW.boM = function() {
        this.PU("onloaded")
    };
    lW.bXz = function(bZ) {
        this.constructor.bF(this.JO).PT(bZ)
    };
    lW.boN = function(dc) {
        var ce = this.yB(this.uS);
        if (!ce) return;
        if (!!dc) ce.error++;
        ce.loaded++;
        if (ce.loaded < ce.total) return;
        this.boF(this.uS);
        this.bK(ce.error > 0 ? "onerror" : "onloaded")
    };
    lW.bXO = function(dc) {
        this.boN(!0)
    };
    lW.bXL = function() {
        this.boN()
    };
    lW.PT = function(bZ) {
        bZ = bm.bdO(bZ);
        if (!bZ) {
            this.bK("onerror", {
                code: fm.beh,
                message: "è¯·æŒ‡å®šè¦è½½å…¥çš„èµ„æºåœ°å€ï¼"
            });
            return this
        }
        this.lL = bZ;
        if (!!this.Fz) this.lL += (this.lL.indexOf("?") < 0 ? "?" : "&") + this.Fz;
        if (this.yB("loaded")[this.lL]) {
            try {
                this.bK("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.bW();
            return this
        }
        var ce = this.yB(this.lL),
            gy;
        if (!!ce) {
            ce.bind.unshift(this);
            ce.timer = window.clearTimeout(ce.timer)
        } else {
            gy = this.PW();
            ce = {
                request: gy,
                bind: [this]
            };
            this.boI(this.lL, ce);
            bj.bt(gy, "load", this.boM.bi(this));
            bj.bt(gy, "error", this.hi.bi(this, {
                code: fm.Xi,
                message: "æ— æ³•åŠ è½½æŒ‡å®šèµ„æºæ–‡ä»¶[" + this.lL + "]ï¼"
            }))
        }
        if (this.XT != 0) ce.timer = window.setTimeout(this.hi.bi(this, {
            code: fm.bku,
            message: "æŒ‡å®šèµ„æºæ–‡ä»¶[" + this.lL + "]è½½å…¥è¶…æ—¶ï¼"
        }), this.XT || zn);
        if (!!gy) this.YH(gy);
        this.bK("onloading");
        return this
    };
    lW.boV = function(bk) {
        if (!bk || !bk.length) {
            this.bK("onerror", {
                code: fm.beh,
                message: "è¯·æŒ‡å®šè¦è½½å…¥çš„èµ„æºé˜Ÿåˆ—ï¼"
            });
            return this
        }
        this.uS = bm.nY();
        var ce = {
            error: 0,
            loaded: 0,
            total: bk.length
        };
        this.boI(this.uS, ce);
        for (var i = 0, l = bk.length; i < l; i++) {
            if (!bk[i]) {
                ce.total--;
                continue
            }
            this.bXz(bk[i])
        }
        this.bK("onloading");
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        cf = bd("nej.h"),
        bM = bd("nej.ut.j"),
        Kc;
    if (!!bM.ZH) return;
    bM.ZH = NEJ.C();
    Kc = bM.ZH.bU(bM.JN);
    Kc.PW = function() {
        var fU = bb.ef("iframe");
        fU.width = 0;
        fU.height = 0;
        fU.style.display = "none";
        return fU
    };
    Kc.YH = function(gy) {
        gy.src = this.lL;
        document.body.appendChild(gy)
    };
    Kc.hi = function(dc) {
        var fU = (this.yB(this.lL) || cg).request;
        this.PU("onerror", dc);
        cf.TH(fU)
    };
    Kc.boM = function() {
        var qe = null,
            fU = (this.yB(this.lL) || cg).request;
        try {
            qe = fU.contentWindow.document.body
        } catch (ex) {}
        this.PU("onloaded", qe);
        cf.TH(fU)
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bM = bd("nej.ut.j"),
        ZJ;
    if (!!bM.PR) return;
    bM.PR = NEJ.C();
    ZJ = bM.PR.bU(bM.JN);
    ZJ.PW = function() {
        return bb.ef("link")
    };
    ZJ.YH = function(gy) {
        gy.href = this.lL;
        document.head.appendChild(gy)
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bM = bd("nej.ut.j"),
        PQ;
    if (!!bM.PO) return;
    bM.PO = NEJ.C();
    PQ = bM.PO.bU(bM.JN);
    PQ.cz = function(bf) {
        this.cB(bf);
        this.boW = bf.async;
        this.baD = bf.charset;
        this.JO.async = !1;
        this.JO.charset = this.baD
    };
    PQ.PW = function() {
        var gy = bb.ef("script");
        if (this.boW != null) gy.async = !!this.boW;
        if (this.baD != null) gy.charset = this.baD;
        return gy
    };
    PQ.boL = function(gy) {
        bb.dW(gy)
    }
})();
(function() {
    var bd = NEJ.P,
        bA = bd("nej.j"),
        bM = bd("nej.ut.j");
    bA.bXn = function(bZ, bf) {
        bM.PO.bF(bf).PT(bZ);
        return this
    };
    bA.bXl = function(bk, bf) {
        bM.PO.bF(bf).boV(bk);
        return this
    };
    bA.cdP = function(bZ, bf) {
        bM.PR.bF(bf).PT(bZ);
        return this
    };
    bA.bXj = function(bk, bf) {
        bM.PR.bF(bf).boV(bk);
        return this
    };
    bA.bpc = function(bZ, bf) {
        bM.ZH.bF(bf).PT(bZ);
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        ce = {},
        cmE = +(new Date) + "-";
    bb.dV = function() {
        var dE = 0;
        var Lp = function() {
            if (dE > 0) return;
            dE = 0;
            bj.bK(document, "templateready");
            bj.ky(document, "templateready")
        };
        var Pb = function(gw, bf) {
            var eR = bb.bz(gw, "src");
            if (!eR) return;
            bf = bf || cg;
            var gg = bf.root;
            if (!gg) {
                gg = gw.ownerDocument.location.href
            } else {
                gg = bm.bdO(gg)
            }
            eR = eR.split(",");
            bm.cv(eR, function(bD, bv, bk) {
                bk[bv] = bm.bdO(bD, gg)
            });
            return eR
        };
        var bWf = function(gw, bf) {
            if (!gw) return;
            var eR = Pb(gw, bf);
            if (!!eR) bA.bXj(eR, {
                version: bb.bz(gw, "version")
            });
            bb.bmF(gw.value)
        };
        var bWe = function(bD) {
            dE--;
            bb.bmI(bD);
            Lp()
        };
        var bWd = function(gw, bf) {
            if (!gw) return;
            var eR = Pb(gw, bf),
                gu = gw.value;
            if (!!eR) {
                dE++;
                var bf = {
                    version: bb.bz(gw, "version"),
                    onloaded: bWe.bi(null, gu)
                };
                window.setTimeout(bA.bXl.bi(bA, eR, bf), 0);
                return
            }
            bb.bmI(gu)
        };
        var bWa = function(qe) {
            dE--;
            bb.dV(qe);
            Lp()
        };
        var bVZ = function(gw, bf) {
            if (!gw) return;
            var eR = Pb(gw, bf)[0];
            if (!!eR) {
                dE++;
                var bf = {
                    version: bb.bz(gw, "version"),
                    onloaded: bWa
                };
                window.setTimeout(bA.bpc.bi(bA, eR, bf), 0)
            }
        };
        var bVX = function(bB, ew) {
            dE--;
            bb.FZ(bB, ew || "");
            Lp()
        };
        var bVW = function(gw, bf) {
            if (!gw || !gw.id) return;
            var bB = gw.id,
                eR = Pb(gw, bf)[0];
            if (!!eR) {
                dE++;
                var bZ = eR + (eR.indexOf("?") < 0 ? "?" : "&") + (bb.bz(gw, "version") || ""),
                    bf = {
                        type: "text",
                        method: "GET",
                        onload: bVX.bi(null, bB)
                    };
                window.setTimeout(bA.cG.bi(bA, bZ, bf), 0)
            }
        };
        var bVU = function(bh, bf) {
            var bu = bh.name.toLowerCase();
            switch (bu) {
                case "jst":
                    bb.gs(bh, !0);
                    return;
                case "txt":
                    bb.FZ(bh.id, bh.value || "");
                    return;
                case "ntp":
                    bb.kg(bh.value || "", bh.id);
                    return;
                case "js":
                    bWd(bh, bf);
                    return;
                case "css":
                    bWf(bh, bf);
                    return;
                case "html":
                    bVZ(bh, bf);
                    return;
                case "res":
                    bVW(bh, bf);
                    return
            }
        };
        bI.gN.bF({
            element: document,
            event: "templateready",
            oneventadd: Lp
        });
        return function(bC, bf) {
            bC = bb.bG(bC);
            if (!!bC) {
                var bk = bC.tagName == "TEXTAREA" ? [bC] : bC.getElementsByTagName("textarea");
                bm.cv(bk, function(bh) {
                    bVU(bh, bf)
                });
                bb.dW(bC, !0)
            }
            Lp();
            return this
        }
    }();
    bb.FZ = function(bN, bD) {
        ce[bN] = bD || "";
        return this
    };
    bb.jZ = function(bN) {
        return ce[bN] || ""
    };
    bb.kg = function(bC, bN) {
        bN = bN || bm.nY();
        bC = bb.bG(bC) || bC;
        bb.FZ(cmE + bN, bC);
        bb.mB(bC);
        return bN
    };
    bb.fg = function(bN) {
        if (!bN) return null;
        bN = cmE + bN;
        var bD = bb.jZ(bN);
        if (!bD) return null;
        if (bm.gH(bD)) {
            bD = bb.oZ(bD);
            bb.FZ(bN, bD)
        }
        return bD.cloneNode(!0)
    };
    bb.yb = function() {
        var DC = function(bD, bN) {
            return bN == "offset" || bN == "limit"
        };
        return function(bk, bw, bf) {
            var cH = [];
            if (!bk || !bk.length || !bw) return cH;
            bf = bf || cg;
            var gx = bk.length,
                kr = parseInt(bf.offset) || 0,
                kp = Math.min(gx, kr + (parseInt(bf.limit) || gx)),
                dG = {
                    total: bk.length,
                    range: [kr, kp]
                };
            NEJ.X(dG, bf, DC);
            for (var i = kr, dP; i < kp; i++) {
                dG.index = i;
                dG.data = bk[i];
                dP = bw.bF(dG);
                var bB = dP.zR();
                ce[bB] = dP;
                dP.bW = dP.bW.fj(function(bB, dP) {
                    delete ce[bB];
                    delete dP.bW
                }.bi(null, bB, dP));
                cH.push(dP)
            }
            return cH
        }
    }();
    bb.bqa = function(bB) {
        return ce[bB]
    };
    bb.cdV = function(eG, bf) {
        bf = bf || cg;
        bb.dV(bf.tid || "template-box");
        bj.bt(document, "templateready", function() {
            eG.bF().bK("onshow", bf)
        })
    };
    bd("dbg").dumpTC = function() {
        return ce
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bM = bd("nej.ui"),
        bc;
    if (!!bM.gh) return;
    bM.gh = NEJ.C();
    bc = bM.gh.bU(bI.dZ);
    bc.dv = function() {
        this.dC();
        bb.bmu();
        this.dx();
        this.dm()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.bVP(bf.clazz);
        this.bqe(bf.parent)
    };
    bc.cR = function() {
        this.cV();
        this.bqf();
        delete this.gX;
        bb.mB(this.bs);
        bb.bH(this.bs, this.Zb);
        delete this.Zb
    };
    bc.dx = cC;
    bc.dm = function() {
        if (!this.dy) this.OT();
        this.bs = bb.fg(this.dy);
        if (!this.bs) this.bs = bb.ef("div", this.lz);
        bb.bJ(this.bs, this.lz)
    };
    bc.OT = cC;
    bc.bVP = function(eL) {
        this.Zb = eL || "";
        bb.bJ(this.bs, this.Zb)
    };
    bc.bVM = function() {
        if (!this.lz) return;
        bb.bJ(this.gX, this.lz + "-parent")
    };
    bc.bqf = function() {
        if (!this.lz) return;
        bb.bH(this.gX, this.lz + "-parent")
    };
    bc.mL = function() {
        return this.bs
    };
    bc.bqe = function(cQ) {
        if (!this.bs) return this;
        this.bqf();
        if (bm.hC(cQ)) {
            this.gX = cQ(this.bs)
        } else {
            this.gX = bb.bG(cQ);
            if (!!this.gX) this.gX.appendChild(this.bs)
        }
        this.bVM();
        return this
    };
    bc.bR = function() {
        if (!this.gX || !this.bs || this.bs.parentNode == this.gX) return this;
        this.gX.appendChild(this.bs);
        return this
    };
    bc.cw = function() {
        bb.mB(this.bs);
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        cf = bd("nej.h"),
        bM = bd("nej.ui"),
        ul, bqh;
    if (!!bM.LR) return;
    bM.LR = NEJ.C();
    ul = bM.LR.bU(bM.gh);
    bqh = bM.LR.dr;
    ul.cz = function(bf) {
        this.cB(bf);
        this.Ch("oncontentready", bf.oncontentready || this.bVK.bi(this));
        this.bVI = !!bf.nohack;
        this.bVH = !!bf.destroyable;
        this.Gj(bf.content)
    };
    ul.cR = function() {
        this.bK("onbeforerecycle");
        this.cV();
        this.OG();
        this.Gj("");
        bb.fp(this.bs, {
            top: "",
            left: ""
        })
    };
    ul.bVK = cC;
    ul.Mc = cC;
    ul.OG = function() {
        bb.mB(this.bs);
        if (!!this.mP) {
            this.mP = cf.We(this.bs);
            delete this.mP
        }
    };
    ul.Gj = function(cm) {
        if (!this.bs || !this.yN || cm == null) return this;
        cm = cm || "";
        bm.gH(cm) ? this.yN.innerHTML = cm : this.yN.appendChild(cm);
        this.bK("oncontentready", this.yN);
        return this
    };
    ul.hn = function(cq) {
        var bD = cq.top;
        if (bD != null) {
            bD += "px";
            bb.ch(this.bs, "top", bD);
            bb.ch(this.mP, "top", bD)
        }
        var bD = cq.left;
        if (bD != null) {
            bD += "px";
            bb.ch(this.bs, "left", bD);
            bb.ch(this.mP, "left", bD)
        }
        return this
    };
    ul.bR = function() {
        bb.ch(this.bs, "visibility", "hidden");
        bqh.bR.apply(this, arguments);
        this.Mc();
        bb.ch(this.bs, "visibility", "");
        if (!this.bVI) {
            this.mP = cf.mP(this.bs)
        }
        return this
    };
    ul.cw = function() {
        this.bVH ? this.bW() : this.OG();
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bm = bd("nej.u"),
        bb = bd("nej.e"),
        bM = bd("nej.ui"),
        yQ;
    if (!!bM.OD) return;
    bM.OD = NEJ.C();
    yQ = bM.OD.bU(bM.gh);
    yQ.cz = function(bf) {
        this.Me();
        this.cB(this.bVG(bf));
        this.dk.onbeforerecycle = this.bW.bi(this);
        this.nX = this.bbe()
    };
    yQ.cR = function() {
        this.bK("onbeforerecycle");
        this.cV();
        delete this.dk;
        bb.mB(this.bs);
        var zg = this.nX;
        if (!!zg) {
            delete this.nX;
            zg.bW()
        }
    };
    yQ.bbe = cC;
    yQ.bVG = function(bf) {
        var bp = {};
        bm.fo(bf, function(bw, bN) {
            this.dk.hasOwnProperty(bN) ? this.dk[bN] = bw : bp[bN] = bw
        }, this);
        return bp
    };
    yQ.Me = function() {
        this.dk = {
            clazz: "",
            parent: null,
            content: this.bs,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    yQ.bR = function() {
        if (!!this.nX) this.nX.bR();
        this.bK("onaftershow");
        return this
    };
    yQ.cw = function() {
        if (!!this.nX) this.nX.cw();
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        fm = bd("nej.g"),
        cf = bd("nej.h"),
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bM = bd("nej.ui"),
        Mj, bqk;
    if (!!bM.Gp) return;
    var iP = bb.rA(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + fm.Zi + ");}");
    bM.Gp = NEJ.C();
    Mj = bM.Gp.bU(bM.gh);
    bqk = bM.Gp.dr;
    Mj.cz = function(bf) {
        this.cB(bf);
        var cm = bf.content || "&nbsp;";
        bm.gH(cm) ? this.bs.innerHTML = cm : this.bs.appendChild(cm)
    };
    Mj.cR = function() {
        this.cV();
        this.bs.innerHTML = "&nbsp;"
    };
    Mj.dx = function() {
        this.lz = iP
    };
    Mj.bR = function() {
        cf.VH(this.bs);
        bqk.bR.apply(this, arguments);
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bM = bd("nej.ut"),
        tX;
    if (!!bM.zm) return;
    bM.zm = NEJ.C();
    tX = bM.zm.bU(bM.dZ);
    tX.cz = function(bf) {
        this.cB(bf);
        this.bVD = !!bf.overflow;
        this.bs = bb.bG(bf.body);
        this.Gq = bb.bG(bf.view) || bb.blH(this.bs);
        this.bql = bb.bG(bf.mbar) || this.bs;
        this.Ow = parseInt(bf.direction) || 0;
        if (!!bf.isRelative) {
            this.bs.style.position = "relative";
            this.bcj = true;
            this.bcm()
        }
        this.dq([
            [document, "mouseup", this.bcv.bi(this)],
            [document, "mousemove", this.bcw.bi(this)],
            [this.bql, "mousedown", this.Mn.bi(this)]
        ])
    };
    tX.bcm = function() {
        if (!!this.bcj) {
            this.Gt = bb.jX(this.bs, this.Gq);
            this.Gt.x -= parseInt(bb.ey(this.bs, "left")) || 0;
            this.Gt.y -= parseInt(bb.ey(this.bs, "top")) || 0
        }
    };
    tX.cR = function() {
        this.cV();
        delete this.bs;
        delete this.bql;
        delete this.Gq
    };
    tX.bqm = function() {
        return {
            x: Math.max(this.Gq.clientWidth, this.Gq.scrollWidth) - this.bs.offsetWidth,
            y: Math.max(this.Gq.clientHeight, this.Gq.scrollHeight) - this.bs.offsetHeight
        }
    };
    tX.Mn = function(be) {
        bj.cu(be);
        if (!!this.iL) return;
        this.iL = {
            x: bj.mS(be),
            y: bj.qi(be)
        };
        this.bqn = this.bqm();
        this.bK("ondragstart", be)
    };
    tX.bcw = function(be) {
        if (!this.iL) return;
        var cq = {
            x: bj.mS(be),
            y: bj.qi(be)
        };
        var tP = cq.x - this.iL.x,
            uf = cq.y - this.iL.y,
            bD = {
                top: (parseInt(bb.ey(this.bs, "top")) || 0) + uf,
                left: (parseInt(bb.ey(this.bs, "left")) || 0) + tP
            };
        if (this.bcj) {
            this.bcm();
            bD.top = bD.top + this.Gt.y;
            bD.left = bD.left + this.Gt.x
        }
        this.iL = cq;
        this.hn(bD)
    };
    tX.bcv = function(be) {
        if (!this.iL) return;
        delete this.bqn;
        delete this.iL;
        this.bK("ondragend", this.bdj())
    };
    tX.hn = function(be) {
        if (!this.bVD) {
            var bqo = this.bqn || this.bqm();
            be.top = Math.min(bqo.y, Math.max(0, be.top));
            be.left = Math.min(bqo.x, Math.max(0, be.left))
        }
        var ds = this.bs.style;
        if (this.bcj) {
            this.bcm();
            be.top = be.top - this.Gt.y;
            be.left = be.left - this.Gt.x
        }
        if (this.Ow == 0 || this.Ow == 2) ds.top = be.top + "px";
        if (this.Ow == 0 || this.Ow == 1) ds.left = be.left + "px";
        this.bK("onchange", be);
        return this
    };
    tX.bdj = function() {
        return {
            left: parseInt(bb.ey(this.bs, "left")) || 0,
            top: parseInt(bb.ey(this.bs, "top")) || 0
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = NEJ.P("nej.e"),
        bj = NEJ.P("nej.v"),
        bm = NEJ.P("nej.u"),
        bI = NEJ.P("nej.ut"),
        bM = NEJ.P("nej.ui"),
        iP, iq, bc, bO;
    if (!!bM.Oq) return;
    bM.Oq = NEJ.C();
    bc = bM.Oq.bU(bM.LR);
    bO = bM.Oq.dr;
    bc.dv = function() {
        this.tK = {};
        this.ko = {
            onchange: this.bcw.bi(this)
        };
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.bVx(bf.mask);
        this.bVw(bf.align);
        this.xl(bf.title);
        if (!bf.draggable) return;
        this.lA = bI.zm.bF(this.ko)
    };
    bc.cR = function() {
        this.cV();
        delete this.pk;
        delete this.Mw;
        if (!!this.xd) {
            this.xd.bW();
            delete this.xd
        }
        if (!!this.lA) {
            this.lA.bW();
            delete this.lA
        }
    };
    bc.dx = function() {
        this.lz = iP;
        this.dy = iq
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.eu(this.bs);
        this.yN = bk[1];
        this.ko.mbar = bk[0];
        this.ko.body = this.bs;
        bj.bt(bk[2], "mousedown", this.bVs.bi(this));
        bj.bt(this.ko.mbar, "mousedown", this.Mn.bi(this));
        this.bqt = bb.eu(this.ko.mbar)[0]
    };
    bc.bVs = function(be) {
        bj.cu(be);
        this.bK("onclose", be);
        if (!be.stopped) {
            this.cw()
        }
    };
    bc.Mn = function(be) {
        bj.bK(document, "click")
    };
    bc.bcw = function(be) {
        if (!this.mP) return;
        bb.fp(this.mP, {
            top: be.top + "px",
            left: be.left + "px"
        })
    };
    bc.Mc = function() {
        var gO = [function() {
                return 0
            }, function(tF, cjL, bN) {
                return Math.max(0, tF[bN] + cjL[bN] / 2)
            }, function(tF, cjL, bN) {
                return tF[bN] + cjL[bN]
            }],
            bVo = ["left", "top"];
        return function() {
            var bD = {},
                ds = this.bs.style,
                lU = bb.qr(),
                tF = {
                    left: lU.scrollLeft,
                    top: lU.scrollTop
                },
                cjL = {
                    left: lU.clientWidth - this.bs.offsetWidth,
                    top: lU.clientHeight - this.bs.offsetHeight
                };
            bm.cv(bVo, function(bN, bv) {
                var fr = gO[this.pk[bv]];
                if (!fr) return;
                bD[bN] = fr(tF, cjL, bN)
            }, this);
            this.hn(bD)
        }
    }();
    bc.bVm = function() {
        if (!this.xd) {
            if (!this.Mw) return;
            this.tK.parent = this.gX;
            this.xd = this.Mw.bF(this.tK)
        }
        this.xd.bR()
    };
    bc.OG = function() {
        if (!!this.xd) this.xd.cw();
        bO.OG.apply(this, arguments)
    };
    bc.bVx = function(kD) {
        if (!!kD) {
            if (kD instanceof bM.Gp) {
                this.xd = kD;
                return
            }
            if (bm.hC(kD)) {
                this.Mw = kD;
                return
            }
            this.Mw = bM.Gp;
            if (bm.gH(kD)) this.tK.clazz = kD;
            return
        }
        this.Mw = null
    };
    bc.xl = function(hJ, eN) {
        if (!!this.bqt) {
            var UZ = !eN ? "innerText" : "innerHTML";
            this.bqt[UZ] = hJ || "æ ‡é¢˜"
        }
        return this
    };
    bc.bVw = function() {
        var eh = /\s+/,
            bVi = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            bVg = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function(ng) {
            this.pk = (ng || "").split(eh);
            var fy = bVi[this.pk[0]];
            if (fy == null) fy = 1;
            this.pk[0] = fy;
            var fy = bVg[this.pk[1]];
            if (fy == null) fy = 1;
            this.pk[1] = fy;
            return this
        }
    }();
    bc.bR = function() {
        bO.bR.apply(this, arguments);
        this.bVm();
        return this
    };
    iP = bb.rA(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    iq = bb.kg('<div class="' + iP + '"><div class="zbar"><div class="zttl">æ ‡é¢˜</div></div><div class="zcnt"></div><span class="zcls" title="å…³é—­çª—ä½“">Ã—</span></div>')
})();
(function() {
    var bd = NEJ.P,
        bm = bd("nej.u"),
        bM = bd("nej.ui"),
        bft;
    if (!!bM.Oo) return;
    bM.Oo = NEJ.C();
    bft = bM.Oo.bU(bM.OD);
    bft.bbe = function() {
        return bM.Oq.bF(this.dk)
    };
    bft.Me = function() {
        bM.Oo.dr.Me.apply(this, arguments);
        this.dk.mask = null;
        this.dk.title = "æ ‡é¢˜";
        this.dk.align = "";
        this.dk.draggable = !1;
        this.dk.onclose = null
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        cA = bd("nej.ui"),
        bo = bd("nm.l"),
        bc, bO;
    bo.fz = NEJ.C();
    bc = bo.fz.bU(cA.Oo);
    bc.cz = function(bf) {
        bf.clazz = "m-layer z-show " + (bf.clazz || "");
        bf.nohack = true;
        bf.draggable = true;
        this.cB(bf)
    };
    bc.eH = function(bh, cZ) {
        if (!bh) return;
        bb.ch(bh, "display", !cZ ? "none" : "");
        bh.lastChild.innerText = cZ || ""
    };
    bc.eU = function(il, dI, Mx, Mz) {
        var eG = "js-lock";
        if (dI === undefined) return bb.cU(il, eG);
        !dI ? bb.bH(il, eG) : bb.bJ(il, eG);
        il.firstChild.innerText = !dI ? Mx : Mz
    };
    bo.fz.bR = function(bf) {
        bf = bf || {};
        if (bf.mask === undefined) bf.mask = "m-mask";
        if (bf.parent === undefined) bf.parent = document.body;
        if (bf.draggable === undefined) bf.draggable = true;
        !!this.fJ && this.fJ.bW();
        this.fJ = this.bF(bf);
        this.fJ.bR(bf);
        return this.fJ
    };
    bo.fz.cw = function() {
        !!this.fJ && this.fJ.bW()
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bo = bd("nm.l"),
        bc, bO;
    bo.bhw = NEJ.C();
    bc = bo.bhw.bU(bo.fz);
    bO = bo.bhw.dr;
    bc.cz = function(bf) {
        this.cB(bf);
        if (bf.bubble === undefined) bf.bubble = true;
        this.MC = bf.bubble;
        this.pe = bf.message || ""
    };
    bc.dx = function() {
        this.dy = bb.kg('<div class="lyct f-cb f-tc"></div>')
    };
    bc.dm = function() {
        this.dw();
        bj.bt(this.bs, "click", this.dM.bi(this))
    };
    bc.dM = function(be) {
        var bh = bj.bY(be, "d:action");
        if (!bh) return;
        if (bh.href) bj.dp(be);
        if (bb.bz(bh, "action") == "close") this.cw();
        if (this.MC === !1) bj.ru(be);
        this.bK("onaction", bb.bz(bh, "action"))
    };
    bc.bR = function() {
        bO.bR.call(this);
        this.bs.innerHTML = this.pe
    };
    var gJ = bb.gs('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    bn.mo = function() {
        var hd;
        var dP;
        var bhN = function(lI, cl) {
            if (bm.hC(lI, "function") && lI(cl) != -1) dP.bW()
        };
        var yG = function() {
            !!dP && dP.cw()
        };
        return function(bf) {
            clearTimeout(hd);
            bf = bf || {};
            bf.title = bf.title || "æç¤º";
            bf.clazz = bf.clazz || "";
            bf.parent = bf.parent || document.body;
            bf.buttons = bf.buttons || [];
            bf.message = bb.dg(gJ, bf);
            bf.onaction = bhN.bi(null, bf.action);
            if (bf.mask === undefined) bf.mask = true;
            if (bf.draggable === undefined) bf.draggable = true;
            !!dP && dP.bW();
            dP = bo.bhw.bF(bf);
            dP.bR();
            if (bf.autoclose) hd = setTimeout(yG.bi(null), 2e3);
            return dP
        }
    }();
    bn.gz = function(bf) {
        bf = bf || {};
        bf.clazz = bf.clazz || "m-layer-w1";
        bf.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: bf.btntxt || "ç¡®å®š"
        }];
        var dP = bn.mo(bf);
        return dP
    };
    bn.iu = function(bf) {
        bf = bf || {};
        bf.clazz = bf.clazz || "m-layer-w2";
        bf.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: bf.btnok || "ç¡®å®š",
            style: bf.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: bf.btncc || "å–æ¶ˆ",
            style: bf.ccstyle || ""
        }];
        var dP = bn.mo(bf);
        return dP
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u");
    bb.bVe = function() {
        var gK = /[\r\n]/gi,
            ce = {};
        var bVd = function(dT) {
            return (dT || "").replace(gK, "aa").length
        };
        var bqA = function(bB) {
            var cj = ce[bB],
                bqC = bb.bG(bB),
                bUY = bb.bG(bB + "-counter");
            if (!bqC || !cj) return;
            var be = {
                input: bqC.value
            };
            be.length = cj.onlength(be.input);
            be.delta = cj.max - be.length;
            cj.onchange(be);
            bUY.innerHTML = be.value || "å‰©ä½™" + be.delta + "ä¸ªå­—"
        };
        return function(bC, bf) {
            var bB = bb.lr(bC);
            if (!bB || !!ce[bB]) return;
            var cj = NEJ.X({}, bf);
            cj.onchange = cj.onchange || cC;
            cj.onlength = bVd;
            if (!cj.max) {
                var bqD = parseInt(bb.ix(bB, "maxlength")),
                    bqM = parseInt(bb.bz(bB, "maxLength"));
                cj.max = bqD || bqM || 100;
                if (!bqD && !!bqM) cj.onlength = bm.hk
            }
            ce[bB] = cj;
            bj.bt(bB, "input", bqA.bi(null, bB));
            var bh = bb.Eg(bB, {
                nid: cj.nid || "js-counter",
                clazz: cj.clazz
            });
            cj.xid = bB + "-counter";
            bh.id = cj.xid;
            bqA(bB)
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        cf = bd("nej.h");
    cf.bja = function(bC, eL) {}
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bM = bd("nej.p"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        cf = bd("nej.h");
    if (bM.ns.trident) return;
    cf.bja = function() {
        var ce = {};
        var Dp = function(be) {
            var gp = bj.bY(be);
            if (!!gp.value) return;
            bb.ch(bb.Eg(gp), "display", "none")
        };
        var Ao = function(be) {
            var gp = bj.bY(be);
            if (!!gp.value) return;
            bb.ch(bb.Eg(gp), "display", "")
        };
        var bUT = function(gp, eL) {
            var bB = bb.lr(gp),
                ln = bb.Eg(gp, {
                    tag: "label",
                    clazz: eL
                });
            ln.htmlFor = bB;
            var ew = bb.ix(gp, "placeholder") || "";
            ln.innerText = ew == "null" ? "" : ew;
            var en = gp.offsetHeight + "px";
            bb.fp(ln, {
                left: 0,
                display: !gp.value ? "" : "none"
            })
        };
        return cf.bja.fj(function(be) {
            be.stopped = !0;
            var cn = be.args,
                gp = bb.bG(cn[0]);
            if (!!ce[gp.id]) return;
            bUT(gp, cn[1]);
            ce[gp.id] = !0;
            bj.bt(gp, "blur", Ao.bi(null));
            bj.bt(gp, "focus", Dp.bi(null))
        })
    }()
})();
(function() {
    var bd = NEJ.P,
        cf = bd("nej.h"),
        bb = bd("nej.e"),
        dY = bd("nej.x");
    bb.gj = dY.gj = function(bC, eL) {
        cf.bja(bC, bb.bz(bC, "holder") || eL || "js-placeholder");
        return this
    };
    dY.isChange = !0
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        hR;
    if (!!bM.MJ) return;
    bM.MJ = NEJ.C();
    hR = bM.MJ.bU(bM.dZ);
    hR.dv = function() {
        this.dC();
        this.BT = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hR.cz = function(bf) {
        this.cB(bf);
        this.gC = document.forms[bf.form] || bb.bG(bf.form);
        this.dq([
            [this.gC, "keypress", this.bUS.bi(this)]
        ]);
        this.pe = bf.message || {};
        this.pe.pass = this.pe.pass || "&nbsp;";
        var fC = this.oO(this.gC, "focusMode", 1);
        if (!isNaN(fC)) {
            this.bqN = {
                mode: fC,
                clazz: bf.focus
            }
        }
        this.xR = bf.holder;
        this.BT.tp.clazz = "js-mhd " + (bf.tip || "js-tip");
        this.BT.ok.clazz = "js-mhd " + (bf.pass || "js-pass");
        this.BT.er.clazz = "js-mhd " + (bf.error || "js-error");
        this.bqO = bf.invalid || "js-invalid";
        this.bUL(bf);
        this.hP();
        if (!!this.zH) this.zH.focus()
    };
    hR.cR = function() {
        this.cV();
        delete this.pe;
        delete this.zH;
        delete this.Ci;
        delete this.gC;
        delete this.bqP;
        delete this.MS
    };
    hR.oO = function(bh, GE, bu) {
        var bD = bb.bz(bh, GE);
        switch (bu) {
            case 1:
                return parseInt(bD);
            case 2:
                return (bD || "").toLowerCase() == "true";
            case 3:
                return this.Wr(bD)
        }
        return bD
    };
    hR.xk = function(bD, bu) {
        if (bu == "date") return this.Wr(bD);
        return parseInt(bD)
    };
    hR.NU = function() {
        var jY = /^button|submit|reset|image|hidden|file$/i;
        return function(bh) {
            bh = this.bG(bh) || bh;
            var bu = bh.type;
            return !!bh.name && !jY.test(bh.type || "")
        }
    }();
    hR.bUJ = function() {
        var jY = /^hidden$/i;
        return function(bh) {
            if (this.NU(bh)) return !0;
            bh = this.bG(bh) || bh;
            var bu = bh.type || "";
            return jY.test(bu)
        }
    }();
    hR.Wr = function() {
        var eh = /[-\/]/;
        var bUI = function(bD) {
            if (!bD) return "";
            bD = bD.split(eh);
            bD.push(bD.shift());
            return bD.join("/")
        };
        return function(bD) {
            if ((bD || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(bUI(bD))
        }
    }();
    hR.bUS = function(be) {
        if (be.keyCode != 13) return;
        this.bK("onenter", be)
    };
    hR.bUC = function(bB, bX) {
        var qZ = this.MS[bX],
            bD = this.oO(bB, bX);
        if (!bD || !qZ) return;
        this.NS(bB, qZ);
        this.WL(bB, bX, bD)
    };
    hR.bUB = function(bB, bX) {
        try {
            var bqV = this.oO(bB, bX);
            if (!bqV) return;
            var bD = new RegExp(bqV);
            this.WL(bB, bX, bD);
            this.NS(bB, this.MS[bX])
        } catch (e) {}
    };
    hR.bUz = function(bB, bX) {
        var qZ = this.MS[bX];
        if (!!qZ && this.oO(bB, bX, 2)) this.NS(bB, qZ)
    };
    hR.WU = function(bB, bX, bD) {
        bD = parseInt(bD);
        if (isNaN(bD)) return;
        this.WL(bB, bX, bD);
        this.NS(bB, this.MS[bX])
    };
    hR.bqX = function(bB, bX) {
        this.WU(bB, bX, this.oO(bB, bX))
    };
    hR.bqZ = function(bB, bX) {
        this.WU(bB, bX, bb.ix(bB, bX))
    };
    hR.bra = function(bB, bX, bu) {
        var bD = this.xk(this.oO(bB, bX), this.oO(bB, "type"));
        this.WU(bB, bX, bD)
    };
    hR.bUt = function() {
        var gK = /^input|textarea$/i;
        var Dp = function(be) {
            this.qg(bj.bY(be))
        };
        var Ao = function(be) {
            var bh = bj.bY(be);
            if (!this.oO(bh, "ignore", 2)) {
                this.brd(bh)
            }
        };
        return function(bh) {
            if (this.oO(bh, "autoFocus", 2)) this.zH = bh;
            var pt = bb.ix(bh, "placeholder");
            if (!!pt && pt != "null") bb.gj(bh, this.xR);
            if (!!this.bqN && gK.test(bh.tagName)) bb.mK(bh, this.bqN);
            var bB = bb.lr(bh);
            this.bUz(bB, "required");
            this.bUC(bB, "type");
            this.bUB(bB, "pattern");
            this.bqZ(bB, "maxlength");
            this.bqZ(bB, "minlength");
            this.bqX(bB, "maxLength");
            this.bqX(bB, "minLength");
            this.bra(bB, "min");
            this.bra(bB, "max");
            var bX = bh.name;
            this.pe[bX + "-tip"] = this.oO(bh, "tip");
            this.pe[bX + "-error"] = this.oO(bh, "message");
            this.qg(bh);
            var cP = this.Ci[bB],
                bl = (cP || cg).data || cg,
                Nr = this.oO(bh, "counter", 2);
            if (Nr && (bl.maxlength || bl.maxLength)) {
                bb.bVe(bB, {
                    nid: this.BT.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!cP && gK.test(bh.tagName)) {
                this.dq([
                    [bh, "focus", Dp.bi(this)],
                    [bh, "blur", Ao.bi(this)]
                ])
            } else if (this.oO(bh, "focus", 2)) {
                this.dq([
                    [bh, "focus", Dp.bi(this)]
                ])
            }
        }
    }();
    hR.bUL = function() {
        var Ad = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.Wr(v))
            }
        };
        var bUr = {
            required: function(bh) {
                var bu = bh.type,
                    bUm = !bh.value,
                    bUj = (bu == "checkbox" || bu == "radio") && !bh.checked;
                if (bUj || bUm) return -1
            },
            type: function(bh, bf) {
                var eh = this.bqP[bf.type],
                    gu = bh.value.trim(),
                    bUi = !!eh.test && !eh.test(gu),
                    bUh = bm.hC(eh) && !eh.call(this, gu);
                if (bUi || bUh) return -2
            },
            pattern: function(bh, bf) {
                if (!bf.pattern.test(bh.value)) return -3
            },
            maxlength: function(bh, bf) {
                if (bh.value.length > bf.maxlength) return -4
            },
            minlength: function(bh, bf) {
                if (bh.value.length < bf.minlength) return -5
            },
            maxLength: function(bh, bf) {
                if (bm.hk(bh.value) > bf.maxLength) return -4
            },
            minLength: function(bh, bf) {
                if (bm.hk(bh.value) < bf.minLength) return -5
            },
            min: function(bh, bf) {
                var gk = this.xk(bh.value, bf.type);
                if (isNaN(gk) || gk < bf.min) return -6
            },
            max: function(bh, bf) {
                var gk = this.xk(bh.value, bf.type);
                if (isNaN(gk) || gk > bf.max) return -7
            }
        };
        return function(bf) {
            this.bqP = NEJ.X(NEJ.X({}, Ad), bf.type);
            this.MS = NEJ.X(NEJ.X({}, bUr), bf.attr)
        }
    }();
    hR.NS = function(bB, vJ) {
        if (!bm.hC(vJ)) return;
        var cP = this.Ci[bB];
        if (!cP || !cP.func) {
            cP = cP || {};
            cP.func = [];
            this.Ci[bB] = cP
        }
        cP.func.push(vJ)
    };
    hR.WL = function(bB, bX, bD) {
        if (!bX) return;
        var cP = this.Ci[bB];
        if (!cP || !cP.data) {
            cP = cP || {};
            cP.data = {};
            this.Ci[bB] = cP
        }
        cP.data[bX] = bD
    };
    hR.brd = function(bh) {
        bh = this.bG(bh) || bh;
        var cP = this.Ci[bb.lr(bh)];
        if (!bh || !cP || !this.NU(bh)) return !0;
        var bp;
        bm.fo(cP.func, function(gO) {
            bp = gO.call(this, bh, cP.data);
            return bp != null
        }, this);
        if (bp == null) {
            var be = {
                target: bh,
                form: this.gC
            };
            this.bK("oncheck", be);
            bp = be.value
        }
        var be = {
            target: bh,
            form: this.gC
        };
        if (bp != null) {
            be.code = bp;
            this.bK("oninvalid", be);
            if (!be.stopped) {
                this.bUg(bh, be.value || this.pe[bh.name + bp])
            }
        } else {
            this.bK("onvalid", be);
            if (!be.stopped) this.bUf(bh, be.value)
        }
        return bp == null
    };
    hR.vR = function() {
        var bUe = function(Uh, Uf) {
            return Uh == Uf ? "block" : "none"
        };
        var bUd = function(bh, bu, cZ) {
            var pt = bre.call(this, bh, bu);
            if (!pt && !!cZ) pt = bb.Eg(bh, this.BT[bu]);
            return pt
        };
        var bre = function(bh, bu) {
            var pt;
            if (bu == "tp") pt = bb.bG(bh.name + "-tip");
            if (!pt) pt = bb.bP(bh.parentNode, this.BT[bu].nid)[0];
            return pt
        };
        return function(bh, cZ, bu) {
            bh = this.bG(bh) || bh;
            if (!bh) return;
            bu == "er" ? bb.bJ(bh, this.bqO) : bb.bH(bh, this.bqO);
            var pt = bUd.call(this, bh, bu, cZ);
            if (!!pt && !!cZ) pt.innerHTML = cZ;
            bm.fo(this.BT, function(bD, bN) {
                bb.ch(bre.call(this, bh, bN), "display", bUe(bu, bN))
            }, this)
        }
    }();
    hR.qg = function(bh, cZ) {
        this.vR(bh, cZ || this.pe[bh.name + "-tip"], "tp");
        return this
    };
    hR.bUf = function(bh, cZ) {
        this.vR(bh, cZ || this.pe[bh.name + "-pass"] || this.pe.pass, "ok");
        return this
    };
    hR.bUg = function(bh, cZ) {
        this.vR(bh, cZ || this.pe[bh.name + "-error"], "er");
        return this
    };
    hR.jI = function() {
        var gK = /^(?:radio|checkbox)$/i;
        var bUb = function(bD) {
            return bD == null ? "" : bD
        };
        var brf = function(bD, bh) {
            if (gK.test(bh.type || "")) {
                bh.checked = bD == bh.value
            } else {
                bh.value = bUb(bD)
            }
        };
        return function(bX, bD) {
            var bh = this.bG(bX);
            if (!bh) return this;
            if (bh.tagName == "SELECT" || !bh.length) {
                brf(bD, bh)
            } else {
                bm.cv(bh, brf.bi(null, bD))
            }
            return this
        }
    }();
    hR.bG = function(bX) {
        return this.gC.elements[bX]
    };
    hR.ceb = function() {
        return this.gC
    };
    hR.NC = function() {
        var gK = /^radio|checkbox$/i,
            jY = /^number|date$/;
        var bTY = function(cE, bh) {
            var bX = bh.name,
                bD = bh.value,
                cP = cE[bX],
                bu = this.oO(bh, "type");
            if (jY.test(bu)) bD = this.xk(bD, bu);
            if (gK.test(bh.type) && !bh.checked) {
                bD = this.oO(bh, "value");
                if (!bD) return
            }
            if (!!cP) {
                if (!bm.hh(cP)) {
                    cP = [cP];
                    cE[bX] = cP
                }
                cP.push(bD)
            } else {
                cE[bX] = bD
            }
        };
        return function() {
            var bp = {};
            bm.cv(this.gC.elements, function(bh) {
                if (this.bUJ(bh)) bTY.call(this, bp, bh)
            }, this);
            return bp
        }
    }();
    hR.NE = function() {
        var bTO = function(bh) {
            if (this.NU(bh)) this.qg(bh)
        };
        return function() {
            this.gC.reset();
            bm.cv(this.gC.elements, bTO, this);
            return this
        }
    }();
    hR.ced = function() {
        this.gC.submit();
        return this
    };
    hR.hP = function() {
        var bTK = function(bh) {
            if (this.NU(bh)) this.bUt(bh)
        };
        return function() {
            this.Ci = {};
            bm.cv(this.gC.elements, bTK, this);
            return this
        }
    }();
    hR.bTG = function(bh) {
        bh = this.bG(bh) || bh;
        if (!!bh) return this.brd(bh);
        var bp = !0;
        bm.cv(this.gC.elements, function(bh) {
            var nN = this.bTG(bh);
            bp = bp && nN
        }, this);
        return bp
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bn = bd("nm.x"),
        bo = bd("nm.l"),
        bc, bO;
    bo.NK = NEJ.C();
    bc = bo.NK.bU(bo.fz);
    bO = bo.NK.dr;
    bc.dm = function() {
        this.dw();
        bj.bt(this.bs, "click", this.dM.bi(this));
        bj.bt(document, "mousewheel", this.zo.bi(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.zo.bi(this))
    };
    bc.cz = function(bf) {
        this.cB(bf);
        if (bf.jst) {
            this.bs.innerHTML = bb.dg(bf.jst, bf.data)
        } else if (bf.ntp) {
            this.bs.appendChild(bb.fg(bf.ntp))
        } else if (bf.txt) {
            this.bs.innerHTML = bb.jZ(bf.txt)
        } else if (bf.html) {
            this.bs.innerHTML = bf.html
        }
        var No = this.bs.getElementsByTagName("form");
        if (No.length) {
            this.gC = bI.MJ.bF({
                form: No[0]
            })
        }
        this.AS = bb.eu(this.bs)[0]
    };
    bc.cR = function() {
        this.bK("ondestroy");
        this.cV();
        this.bs.innerHTML = "";
        delete this.AS
    };
    bc.dM = function(be) {
        var bh = bj.bY(be, "d:action"),
            bl = this.gC ? this.gC.NC() : null,
            be = {
                action: bb.bz(bh, "action")
            };
        if (bl) be.data = bl;
        if (be.action) {
            this.bK("onaction", be);
            if (be.stopped) return;
            this.cw()
        }
    };
    bc.zo = function(be) {
        if (!this.AS) return;
        bj.cu(be);
        var cjL = be.wheelDelta || -be.detail;
        this.AS.scrollTop -= cjL
    };
    bn.lg = function(bf) {
        bf.destroyable = bf.destroyable || true;
        bf.title = bf.title || "æç¤º";
        bf.draggable = true;
        bf.parent = document.body;
        bf.mask = bf.mask || true;
        var zg = bo.NK.bF(bf);
        zg.bR();
        return zg
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var brr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Nj = {},
        Bh = {};
    for (var i = 0, l = brr.length, c; i < l; i++) {
        c = brr.charAt(i);
        Nj[i] = c;
        Bh[c] = i
    }
    var bTC = function(jA) {
        var bv = 0,
            c, bp = [];
        while (bv < jA.length) {
            c = jA[bv];
            if (c < 128) {
                bp.push(String.fromCharCode(c));
                bv++
            } else if (c > 191 && c < 224) {
                bp.push(String.fromCharCode((c & 31) << 6 | jA[bv + 1] & 63));
                bv += 2
            } else {
                bp.push(String.fromCharCode((c & 15) << 12 | (jA[bv + 1] & 63) << 6 | jA[bv + 2] & 63));
                bv += 3
            }
        }
        return bp.join("")
    };
    var bTA = function() {
        var iz = /\r\n/g;
        return function(bl) {
            bl = bl.replace(iz, "\n");
            var bp = [],
                pM = String.fromCharCode(237);
            if (pM.charCodeAt(0) < 0)
                for (var i = 0, l = bl.length, c; i < l; i++) {
                    c = bl.charCodeAt(i);
                    c > 0 ? bp.push(c) : bp.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = bl.length, c; i < l; i++) {
                        c = bl.charCodeAt(i);
                        if (c < 128) bp.push(c);
                        else if (c > 127 && c < 2048) bp.push(c >> 6 | 192, c & 63 | 128);
                        else bp.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return bp
        }
    }();
    var GI = function(jA) {
        var bv = 0,
            bp = [],
            fC = jA.length % 3;
        if (fC == 1) jA.push(0, 0);
        if (fC == 2) jA.push(0);
        while (bv < jA.length) {
            bp.push(Nj[jA[bv] >> 2], Nj[(jA[bv] & 3) << 4 | jA[bv + 1] >> 4], Nj[(jA[bv + 1] & 15) << 2 | jA[bv + 2] >> 6], Nj[jA[bv + 2] & 63]);
            bv += 3
        }
        if (fC == 1) bp[bp.length - 1] = bp[bp.length - 2] = "=";
        if (fC == 2) bp[bp.length - 1] = "=";
        return bp.join("")
    };
    var bTx = function() {
        var qO = /\n|\r|=/g;
        return function(bl) {
            var bv = 0,
                bp = [];
            bl = bl.replace(qO, "");
            for (var i = 0, l = bl.length; i < l; i += 4) bp.push(Bh[bl.charAt(i)] << 2 | Bh[bl.charAt(i + 1)] >> 4, (Bh[bl.charAt(i + 1)] & 15) << 4 | Bh[bl.charAt(i + 2)] >> 2, (Bh[bl.charAt(i + 2)] & 3) << 6 | Bh[bl.charAt(i + 3)]);
            var cF = bp.length,
                fC = bl.length % 4;
            if (fC == 2) bp = bp.slice(0, cF - 2);
            if (fC == 3) bp = bp.slice(0, cF - 1);
            return bp
        }
    }();
    p.cee = function(bl) {
        return bTC(bTx(bl))
    };
    p.bTv = function(bl) {
        try {
            return window.btoa(bl)
        } catch (ex) {
            return GI(bTA(bl))
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bj = bd("nej.v"),
        bb = bd("nej.e"),
        bA = bd("nej.j"),
        bM = bd("nej.p"),
        bm = bd("nej.u"),
        bo = bd("nm.l"),
        bT = bd("nm.w"),
        di = bd("nej.ui"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bc, bO;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    bo.brt = NEJ.C();
    bc = bo.brt.bU(bo.fz);
    bc.dx = function() {
        this.dy = "m-download-layer"
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.ZU = bk[0];
        this.bag = bk[1];
        this.brw = bk[2];
        bA.cG("/client/version/get", {
            type: "json",
            onload: this.bTq.bi(this)
        });
        if (bM.Hj.mac) {
            bb.bH(this.ZU.parentNode, "f-hide");
            bb.bJ(this.bag.parentNode, "f-hide");
            bb.bJ(this.brw, "f-hide")
        } else {
            bb.bJ(this.ZU.parentNode, "f-hide");
            bb.bH(this.bag.parentNode, "f-hide");
            bb.bH(this.brw, "f-hide")
        }
    };
    bc.cz = function(bf) {
        bf.clazz = " m-layer-down";
        bf.parent = bf.parent || document.body;
        bf.title = "ä¸‹è½½";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cB(bf);
        this.dq([
            [this.bs, "click", this.cS.bi(this)]
        ]);
        this.fL = TYPE_MAP[bf.type];
        this.kx = bf.id
    };
    bc.cR = function() {
        this.cV()
    };
    bc.BR = function() {
        this.cw()
    };
    bc.GG = function(be) {
        this.bK("onok", bD);
        this.cw()
    };
    bc.cS = function(be) {
        var bh = bj.bY(be, "d:action");
        switch (bb.bz(bh, "action")) {
            case "download":
                this.cw();
                window.open(bb.bz(bh, "src"));
                break;
            case "orpheus":
                this.cw();
                location.href = "orpheus://" + bm.bTv(JSON.stringify({
                    type: this.fL,
                    id: this.kx,
                    cmd: "download"
                }));
                break
        }
    };
    bc.bTq = function(be) {
        if (be.code == 200) {
            this.Fz = be.data;
            this.ZU.innerText = "V" + this.Fz.mac;
            this.bag.innerText = "V" + this.Fz.pc
        }
    };
    bn.NW = function(bf) {
        bo.brt.bF(bf).bR()
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bm = bd("nej.u"),
        bq = bd("nm.d"),
        cX = {};
    bq.bG = function(bN) {
        return cX[bN]
    };
    bq.sq = function(bN, cj) {
        cX[bN] = cj
    };
    bq.fX = function(bl) {
        bm.fo(bl, function(bw, bN) {
            var cj = cX[bN] || {};
            NEJ.X(cj, bw);
            cX[bN] = cj
        })
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        cf = bd("nej.h");
    cf.NY = function(bN) {
        return localStorage.getItem(bN)
    };
    cf.NZ = function(bN, bD) {
        localStorage.setItem(bN, bD)
    };
    cf.baV = function(bN) {
        localStorage.removeItem(bN)
    };
    cf.baW = function() {
        localStorage.clear()
    };
    cf.bTp = function() {
        var bp = [];
        for (var i = 0, l = localStorage.length; i < l; i++) bp.push(localStorage.key(i));
        return bp
    };
    cf.baY = function() {
        (document.onstorageready || cC)()
    };
    cf.baZ = function() {
        return !0
    }
})();
(function() {
    var bd = NEJ.P,
        bM = bd("nej.p"),
        jf = bd("nej.c"),
        cf = bd("nej.h"),
        rz;
    if (bM.ns.trident || !!window.localStorage) return;
    var bTo = function() {
        var pX, hd;
        var bfm = function() {
            pX = document.createElement("div");
            NEJ.X(pX.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", pX);
            pX.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + jf.bG("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var KE = function() {
            hd = window.clearTimeout(hd);
            var hQ = pX.getElementsByTagName("object")[0];
            if (!!hQ.initStorage) {
                delete pX;
                rz = hQ;
                rz.initStorage("nej-storage");
                (document.onstorageready || cC)();
                return
            }
            hd = window.setTimeout(KE, 500)
        };
        return function() {
            if (!!rz) return;
            bfm();
            KE()
        }
    }();
    cf.NY = cf.NY.fj(function(be) {
        be.stopped = !0;
        if (!rz) return;
        be.value = rz.getItem(be.args[0])
    });
    cf.NZ = cf.NZ.fj(function(be) {
        be.stopped = !0;
        if (!rz) return;
        var cn = be.args;
        rz.setItem(cn[0], cn[1])
    });
    cf.baV = cf.baV.fj(function(be) {
        be.stopped = !0;
        if (!rz) return;
        rz.removeItem(be.args[0])
    });
    cf.baW = cf.baW.fj(function(be) {
        be.stopped = !0;
        if (!!rz) rz.clear()
    });
    cf.baY = cf.baY.fj(function(be) {
        be.stopped = !0;
        bTo()
    });
    cf.baZ = cf.baZ.fj(function(be) {
        be.stopped = !0;
        be.value = !!rz
    })
})();
(function() {
    var bd = NEJ.P,
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        cf = bd("nej.h"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        ce = {};
    bA.wl = function(bN, bD) {
        var bry = JSON.stringify(bD);
        try {
            cf.NZ(bN, bry)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bry != cf.NY(bN)) ce[bN] = bD;
        return this
    };
    bA.sj = function(bN) {
        var bl = JSON.parse(cf.NY(bN) || "null");
        return bl == null ? ce[bN] : bl
    };
    bA.cef = function(bN, bD) {
        var bl = bA.sj(bN);
        if (bl == null) {
            bl = bD;
            bA.wl(bN, bl)
        }
        return bl
    };
    bA.Ob = function(bN) {
        delete ce[bN];
        cf.baV(bN);
        return this
    };
    bA.ceg = function() {
        var bbF = function(bw, bN, cE) {
            delete cE[bN]
        };
        return function() {
            bm.fo(ce, bbF);
            cf.baW();
            return this
        }
    }();
    bA.ceh = function(bp) {
        bp = bp || {};
        bm.cv(cf.bTp(), function(bN) {
            bp[bN] = bA.sj(bN)
        });
        return bp
    };
    bI.gN.bF({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (cf.baZ()) {
                document.onstorageready()
            }
        }
    });
    var bTg = function() {
        var bTc = function(bD, bN, cE) {
            cf.NZ(bN, JSON.stringify(bD));
            delete cE[bN]
        };
        return function() {
            bm.fo(ce, bTc)
        }
    }();
    bj.bt(document, "storageready", bTg);
    cf.baY()
})();
(function() {
    var bd = NEJ.P,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        Gy;
    if (!!bM.bce) return;
    bM.bce = NEJ.C();
    Gy = bM.bce.bU(bM.dZ);
    Gy.dv = function() {
        var gJ = +(new Date),
            nd = "dat-" + gJ;
        return function() {
            this.dC();
            var ce = this.constructor[nd];
            if (!ce) {
                ce = {};
                this.constructor[nd] = ce
            }
            this.bS = ce
        }
    }();
    Gy.bG = function(bN) {
        return this.bS[bN]
    };
    Gy.sq = function(bN, bD) {
        var lT = this.bS[bN];
        this.bS[bN] = bD;
        bj.bK(localCache, "cachechange", {
            key: bN,
            type: "set",
            oldValue: lT,
            newValue: bD
        });
        return this
    };
    Gy.dW = function(bN) {
        var lT = this.bS[bN];
        bm.NB(this.bS, bN);
        bj.bK(localCache, "cachechange", {
            key: bN,
            type: "delete",
            oldValue: lT,
            newValue: undefined
        });
        return lT
    };
    Gy.Ol = function(By) {
        return NEJ.Q(this.bS, By)
    };
    window.localCache = bM.bce.bF();
    bM.gN.bF({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var bd = NEJ.P,
        gm = NEJ.R,
        cC = NEJ.F,
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bM = bd("nej.ut"),
        nd = "dat-" + +(new Date),
        mU;
    if (!!bM.bcs) return;
    bM.bcs = NEJ.C();
    mU = bM.bcs.bU(bM.dZ);
    mU.dv = function() {
        this.dC();
        this.bS = this.constructor[nd];
        if (!this.bS) {
            this.bS = {};
            this.bS[nd + "-l"] = {};
            this.constructor[nd] = this.bS
        }
    };
    mU.qA = function(bN) {
        return this.bS[bN]
    };
    mU.pn = function(bN, bD) {
        this.bS[bN] = bD
    };
    mU.lk = function(bN, oI) {
        var bl = this.qA(bN);
        if (bl == null) {
            bl = oI;
            this.pn(bN, bl)
        }
        return bl
    };
    mU.bTa = function(bN) {
        if (bN != null) {
            delete this.bS[bN];
            return
        }
        bm.fo(this.bS, function(bw, bN) {
            if (bN == nd + "-l") return;
            this.bTa(bN)
        }, this)
    };
    mU.cei = function(bN) {
        if (!!bA.Ob) return bA.Ob(bN)
    };
    mU.bSF = function(bN) {
        if (!!bA.sj) return bA.sj(bN)
    };
    mU.bSE = function(bN, bD) {
        if (!!bA.wl) bA.wl(bN, bD)
    };
    mU.zP = function(bN, oI) {
        var bl = this.My(bN);
        if (bl == null) {
            bl = oI;
            this.uw(bN, bl)
        }
        return bl
    };
    mU.My = function(bN) {
        var bl = this.qA(bN);
        if (bl != null) return bl;
        bl = this.bSF(bN);
        if (bl != null) this.pn(bN, bl);
        return bl
    };
    mU.uw = function(bN, bD) {
        this.bSE(bN, bD);
        this.pn(bN, bD)
    };
    mU.brI = function(bN) {
        if (bN != null) {
            delete this.bS[bN];
            if (!!bA.Ob) bA.Ob(bN);
            return
        }
        bm.fo(this.bS, function(bw, bN) {
            if (bN == nd + "-l") return;
            this.brI(bN)
        }, this)
    };
    mU.cel = function() {
        this.brI();
        return this
    };
    mU.bde = function(bN) {
        var bl = this.bS[nd + "-l"],
            cn = gm.slice.call(arguments, 1);
        bm.cv(bl[bN], function(gP) {
            try {
                gP.apply(null, cn)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete bl[bN]
    };
    mU.bdi = function(bN, gP) {
        gP = gP || cC;
        var bk = this.bS[nd + "-l"][bN];
        if (!bk) {
            bk = [gP];
            this.bS[nd + "-l"][bN] = bk;
            return !1
        }
        bk.push(gP);
        return !0
    };
    mU.bSv = function(bk, cq, gM) {
        if (!bk) return !1;
        cq = parseInt(cq) || 0;
        gM = parseInt(gM) || 0;
        if (!gM) {
            if (!bk.loaded) return !1;
            gM = bk.length
        }
        if (!!bk.loaded) gM = Math.min(gM, bk.length - cq);
        for (var i = 0; i < gM; i++)
            if (!bk[cq + i]) return !1;
        return !0
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        bc, bO;
    if (!!bM.Mo) return;
    bM.Mo = NEJ.C();
    bc = bM.Mo.bU(bM.bcs);
    bO = bM.Mo.dr;
    bc.cz = function(bf) {
        this.cB(bf);
        this.uS = bf.key || "id";
        this.ck = bf.data || cg;
        this.bSs = !!bf.autogc;
        this.bSr(bf.id)
    };
    bc.cR = function() {
        this.cV();
        if (!!this.gl) {
            this.brP()
        }
    };
    bc.bSr = function(bB) {
        var ce;
        if (!!bB) {
            ce = this.bS[bB];
            if (!ce) {
                ce = {};
                this.bS[bB] = ce
            }
        }
        ce = ce || this.bS;
        ce.hash = ce.hash || {};
        this.Ml = ce
    };
    bc.brP = function() {
        this.gl = window.clearTimeout(this.gl);
        var cE = {};
        bm.fo(this.Ml, function(bk, bN) {
            if (bN == "hash") return;
            if (!bm.hh(bk)) return;
            bm.cv(bk, function(bw) {
                if (!bw) return;
                cE[bw[this.uS]] = !0
            }, this)
        }, this);
        bm.fo(this.Oz(), function(bw, bB, fA) {
            if (!cE[bB]) {
                delete fA[bB]
            }
        })
    };
    bc.bSn = function() {
        if (!!this.gl) {
            this.gl = window.clearTimeout(this.gl)
        }
        this.gl = window.setTimeout(this.brP.bi(this), 150)
    };
    bc.yg = function(bw, bei) {
        bw = this.bSj(bw, bei) || bw;
        if (!bw) return null;
        var bN = bw[this.uS];
        if (bN != null) {
            var yi = this.Oz()[bN];
            if (!!yi) bw = NEJ.X(yi, bw);
            this.Oz()[bN] = bw
        }
        delete bw.brY;
        return bw
    };
    bc.bSj = cC;
    bc.beo = function(bN, bw) {
        if (!bw) return;
        if (!bm.hh(bw)) {
            var bk = this.hT(bN),
                bw = this.yg(bw, bN);
            if (!!bw) bk.unshift(bw);
            return
        }
        bm.nt(bw, this.beo.bi(this, bN))
    };
    bc.Mh = function(bN, dL) {
        var bk = this.hT(bN);
        bk.length = Math.max(bk.length, dL);
        this.bet(bN);
        return this
    };
    bc.kW = function(bN) {
        return this.hT(bN).length
    };
    bc.bet = function(bN, qV) {
        this.hT(bN).loaded = qV != !1;
        return this
    };
    bc.OB = function(bN) {
        return !!this.hT(bN).loaded
    };
    bc.rq = function(bN, bk) {
        this.wy(bN);
        this.beL({
            key: bN,
            offset: 0,
            limit: bk.length + 1
        }, {
            list: bk,
            total: bk.length
        })
    };
    bc.hT = function() {
        var AB = function(bN) {
            return (bN || "") + (!bN ? "" : "-") + "list"
        };
        return function(bN) {
            var bN = AB(bN),
                bk = this.Ml[bN];
            if (!bk) {
                bk = [];
                this.Ml[bN] = bk
            }
            return bk
        }
    }();
    bc.Oz = function() {
        var fA = this.Ml.hash;
        if (!fA) {
            fA = {};
            this.Ml.hash = fA
        }
        return fA
    };
    bc.bff = function() {
        var AB = function(bf) {
            return "r-" + bf.key
        };
        return function(bf) {
            var iK = NEJ.X({}, bf),
                mQ = AB(iK);
            if (!this.bdi(mQ, this.bK.bi(this))) {
                iK.rkey = mQ;
                iK.onload = this.bSg.bi(this, iK);
                this.bK("dopullrefresh", iK)
            }
            return this
        }
    }();
    bc.bSg = function(bf, bk) {
        this.beo(bf.key, bk);
        this.bde(bf.rkey, "onpullrefresh", bf)
    };
    bc.qb = function() {
        var AB = function(bf) {
            return "r-" + bf.key + "-" + bf.offset + "-" + bf.limit
        };
        return function(bf) {
            bf = bf || cg;
            var iK = {
                    key: "" + bf.key || "",
                    ext: bf.ext || null,
                    data: bf.data || null,
                    offset: parseInt(bf.offset) || 0,
                    limit: parseInt(bf.limit) || 0
                },
                bk = this.hT(iK.key);
            if (this.bSv(bk, iK.offset, iK.limit)) {
                this.bK("onlistload", iK);
                return this
            }
            var mQ = AB(iK);
            if (!this.bdi(mQ, this.bK.bi(this))) {
                iK.rkey = mQ;
                iK.onload = this.beL.bi(this, iK);
                this.bK("doloadlist", iK)
            }
            return this
        }
    }();
    bc.beL = function() {
        var Bu = function(bw, bv, bk) {
            if (!!bw) {
                return !0
            }
            bk.splice(bv, 1)
        };
        return function(bf, bp) {
            bf = bf || cg;
            var bN = bf.key,
                cq = bf.offset,
                brZ = this.hT(bN);
            var bk = bp || [];
            if (!bm.hh(bk)) {
                bk = bp.result || bp.list || [];
                var dL = parseInt(bp.total);
                if (!isNaN(dL) || dL > bk.length) {
                    this.Mh(bN, dL)
                }
            }
            bm.cv(bk, function(bw, bv) {
                brZ[cq + bv] = this.yg(bw, bN)
            }, this);
            if (bk.length < bf.limit) {
                this.bet(bN);
                bm.nt(brZ, Bu)
            }
            this.bde(bf.rkey, "onlistload", bf)
        }
    }();
    bc.wy = function() {
        var Bu = function(bw, bv, bk) {
            bk.splice(bv, 1)
        };
        return function(bN) {
            var bk = this.hT(bN);
            bm.nt(bk, Bu);
            this.bet(bN, !1);
            if (this.bSs) {
                this.bSn()
            }
            return this
        }
    }();
    bc.bse = function(bw, bei) {
        return !bw.brY
    };
    bc.fw = function(bB) {
        return this.Oz()[bB]
    };
    bc.cen = function(bB) {
        var bw = this.fw(bB);
        if (!!bw) bw.brY = !0
    };
    bc.bfZ = function() {
        var AB = function(bf) {
            return "r-" + bf.key + "-" + bf.id
        };
        return function(bf) {
            bf = bf || cg;
            var bB = bf[this.uS],
                iK = {
                    id: bB,
                    ext: bf.ext,
                    data: bf.data || {},
                    key: "" + bf.key || ""
                };
            bw = this.fw(bB);
            iK.data[this.uS] = bB;
            if (!!bw && this.bse(bw, iK.key)) {
                this.bK("onitemload", iK);
                return this
            }
            var mQ = AB(iK);
            if (!this.bdi(mQ, this.bK.bi(this))) {
                iK.rkey = mQ;
                iK.onload = this.bRQ.bi(this, iK);
                this.bK("doloaditem", iK)
            }
            return this
        }
    }();
    bc.bRQ = function(bf, bw) {
        bf = bf || cg;
        this.yg(bw, bf.key);
        this.bde(bf.rkey, "onitemload", bf)
    };
    bc.kV = function(bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.wF.bi(this, bf);
        this.bK("doadditem", bf)
    };
    bc.wF = function(bf, bw) {
        var bN = bf.key;
        bw = this.yg(bw, bN);
        if (!!bw) {
            var fI = 0,
                bk = this.hT(bN);
            if (!bf.push) {
                fI = -1;
                var cq = bf.offset || 0;
                bk.splice(cq, 0, bw)
            } else if (bk.loaded) {
                fI = 1;
                bk.push(bw)
            } else {
                bk.length++
            }
        }
        var be = {
            key: bN,
            flag: fI,
            data: bw,
            action: "add",
            ext: bf.ext
        };
        this.bK("onitemadd", be);
        return be
    };
    bc.Mb = function(bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.bgv.bi(this, bf);
        this.bK("dodeleteitem", bf)
    };
    bc.bgv = function(bf, bRP) {
        var bw, bN = bf.key;
        if (!!bRP) {
            bw = this.fw(bf.id) || null;
            var bB = bf.id,
                bRO = this.uS,
                bk = this.hT(bN),
                bv = bm.eg(bk, function(yi) {
                    return !!yi && yi[bRO] == bB
                });
            if (bv >= 0) bk.splice(bv, 1)
        }
        var be = {
            key: bN,
            data: bw,
            action: "delete",
            ext: bf.ext
        };
        this.bK("onitemdelete", be);
        return be
    };
    bc.OH = function(bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.bRG.bi(this, bf);
        this.bK("doupdateitem", bf)
    };
    bc.bRG = function(bf, bw) {
        var bN = bf.key;
        if (!!bw) bw = this.yg(bw, bN);
        var be = {
            key: bN,
            data: bw,
            action: "update",
            ext: bf.ext
        };
        this.bK("onitemupdate", be);
        return be
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        bc;
    if (!!bM.bgV) return;
    bM.bgV = NEJ.C();
    bc = bM.bgV.bU(bM.Mo);
    bc.cz = function(bf) {
        this.cB(bf);
        this.XF({
            doloadlist: this.Vf.bi(this),
            doloaditem: this.bha.bi(this),
            doadditem: this.bsk.bi(this),
            dodeleteitem: this.OI.bi(this),
            doupdateitem: this.OJ.bi(this),
            dopullrefresh: this.bso.bi(this)
        })
    };
    bc.Vf = cC;
    bc.bso = cC;
    bc.bha = cC;
    bc.bsk = cC;
    bc.OI = cC;
    bc.OJ = cC
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        bc, bO;
    bq.ik = NEJ.C();
    bc = bq.ik.bU(bI.bgV);
    bc.dJ = function() {
        var bsp = location.protocol + "//" + location.host;
        var bRv = function(cH, bl) {
            var cE = {
                conf: {},
                data: {},
                urls: []
            };
            bm.cv(cH, function(bN, bv, bk) {
                var cj = bq.bG(bN);
                if (!cj) return;
                var LT = bsr(cj.url, bl[bN]);
                cE.urls.push(LT);
                cE.conf[LT] = cj;
                cE.data[LT] = JSON.stringify(bl[bN] == null ? "" : bl[bN])
            });
            return cE
        };
        var bsr = function(bZ, bl) {
            return bZ.replace(/\{(.*?)\}/gi, function($1, $2) {
                return bl[$2] || $1
            })
        };
        var bss = function(cj, bf, be) {
            bj.bK(window, "requesterror", be);
            if (!!be.stopped) return;
            var Gh = cj.onerror || bf.onerror;
            if (bm.gH(Gh)) {
                this.bK(Gh, be, bf)
            } else {
                (Gh || cC).call(this, be, bf)
            }
            var be = {
                result: be,
                option: bf
            };
            this.bK("onerror", be);
            if (!be.stopped)(cj.onmessage || cC).call(this, be.result.code, be.result)
        };
        var bsu = function(bV, cj, bf) {
            var bp = bV;
            if (bm.hC(cj.format)) {
                bp = cj.format.call(this, bV, bf)
            }
            return bp
        };
        var Ln = function(bV, cj, bf, td) {
            if (bm.hC(cj.beforeload)) {
                cj.beforeload.call(this, bV, bf, cj)
            }
            if (bV && bV.code != null && bV.code != 200) {
                bss.call(this, cj, bf, {
                    key: bf.key,
                    code: bV.code,
                    message: bV.message || "",
                    captchaId: bV.captchaId,
                    ext: bV
                });
                return
            }
            var bp = bV;
            if (!td) {
                bp = bsu.call(this, bV, cj, bf)
            } else if (bm.hC(cj.format)) {
                var bhS = [];
                bm.cv(td.urls, function(bZ) {
                    bhS.push(bsu.call(this, bV[bZ], td.conf[bZ], bf))
                }, this);
                bhS.push(bf);
                bp = cj.format.apply(this, bhS)
            }
            var su = cj.onload || bf.onload,
                bsv = cj.finaly || bf.finaly || cC;
            if (bm.gH(su)) {
                bsv.call(this, this.bK(su, bp), bf)
            } else {
                bsv.call(this, (su || cC).call(this, bp), bf)
            }
        };
        var WF = function(cj, bf, dc) {
            bss.call(this, cj, bf, {
                key: bf.key,
                code: dc.code || -1,
                message: dc.message || ""
            })
        };
        return function(cj, bf) {
            if (bm.gH(cj)) {
                cj = bq.bG(cj)
            }
            delete bf.value;
            (cj.filter || cC).call(this, bf, cj);
            var bV = bf.value;
            if (!!bV) {
                Ln.call(this, bV, cj, bf);
                return
            }
            var bZ, bl = bf.data || cg,
                wL = {
                    cookie: !0,
                    type: cj.rtype || "json",
                    method: cj.type || "POST",
                    onerror: WF.bi(this, cj, bf),
                    noescape: cj.noescape
                };
            if (bm.hh(cj.url)) {
                var td = bRv(cj.url, bl);
                bZ = bsp + "/api/batch";
                wL.data = bm.eX(td.data);
                wL.onload = Ln.gY(this, cj, bf, td);
                wL.headers = {
                    "batch-method": "POST"
                };
                delete td.data
            } else {
                var lp = cj.url.indexOf(":") < 0 ? bsp : "";
                bZ = bsr(lp + cj.url, bl);
                wL.data = bm.eX(bf.data);
                wL.onload = Ln.gY(this, cj, bf)
            }
            if (wL.method == "GET") wL.query = wL.data;
            return bA.cG(bZ, wL)
        }
    }();
    bc.BB = function() {
        var gK = /^get|list|pull$/i;
        return function(bsz, bf) {
            var bN = bf.key,
                cj = bq.bG(bN.split("-")[0] + "-" + bsz);
            if (gK.test(bsz) && bN.indexOf("post-") < 0) cj.type = "GET";
            this.dJ(cj, bf)
        }
    }();
    bc.cez = function(bN, bk) {
        var dL = bk.length;
        this.beL({
            key: bN,
            offset: 0,
            limit: dL + 1
        }, {
            list: bk,
            total: dL
        })
    };
    bc.Vf = function(bf) {
        this.BB("list", bf)
    };
    bc.bha = function(bf) {
        this.BB("get", bf)
    };
    bc.bso = function(bf) {
        this.BB("pull", bf)
    };
    bc.bsk = function(bf) {
        this.BB("add", bf)
    };
    bc.OI = function(bf) {
        this.BB("del", bf)
    };
    bc.OJ = function(bf) {
        this.BB("update", bf)
    };
    bc.bRg = function(bw) {
        this.yg(bw)
    };
    bI.gN.bF({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bq = bd("nm.d"),
        bio = {},
        bc, bO;
    var tL = function(bp, bf) {
        bp.conf = bf.conf;
        return bp
    };
    bq.fX({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(bV, bf) {
                return tL({
                    mv: bV
                }, bf)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail/",
            format: function(bp, bf) {
                if (!!bp.songs && bp.songs.length > 0) bp.song = bp.songs[0];
                else bp.song = bio;
                delete bp.songs;
                return tL(bp, bf)
            },
            filter: function(bf) {
                bf.data.ids = "[" + bf.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: tL
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: tL
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(bp, bf) {
                bp.playlist = bp.result;
                delete bp.result;
                return tL(bp, bf)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: tL
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: tL
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: tL
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(bf) {
                var bk = bf.data.id.split("-");
                bf.data.radioId = bk[0];
                bf.data.asc = bk[1] == 2;
                bf.data.limit = 1e3;
                delete bf.data.id
            },
            format: function(bV, bf) {
                var bRe = {
                    id: bf.data.radioId,
                    programs: bV.programs
                };
                return tL({
                    djradio: bRe
                }, bf)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: tL
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(bf) {
                bf.data.lv = 0;
                bf.data.tv = 0
            },
            format: function(bp, bf) {
                var tZ = {
                    lyric: "",
                    nolyric: true
                };
                if (bp.code == 200 && bp.lrc && bp.lrc.lyric) {
                    tZ.lyric = bp.lrc.lyric;
                    tZ.nolyric = false
                } else {
                    tZ.nolyric = true
                }
                return tL({
                    lyric: tZ
                }, bf)
            }
        }
    });
    bq.tV = NEJ.C();
    bc = bq.tV.bU(bq.ik);
    bc.bRc = function(bu, dO) {
        return this.qA(this.OM(bu, dO))
    };
    bc.LL = function(bu, dO, bf) {
        bf = bf || {};
        var bl = this.qA(this.OM(bu, dO));
        if (bl && (bu != 13 && bu != 19 || bf.conf && bf.conf.useCache)) {
            this.bK("onresourceload", bu, dO, bl, bf.conf);
            return
        }
        bf.data = {
            id: dO
        };
        bf.onload = this.bQX.bi(this, bu, dO);
        bf.onerror = this.bQT.bi(this, bu, dO);
        this.dJ("res-" + this.zw(bu) + "-get", bf)
    };
    bc.bQX = function(bu, dO, bp) {
        var bl = bp[this.zw(bu)];
        this.pn(this.OM(bu, dO), bl);
        this.bK("onresourceload", bu, dO, bl, bp.conf)
    };
    bc.bQT = function(bu, dO, bp, bf) {
        if (bp.code != 404) {
            this.bK("onresourceerror", bu, dO, bp.code);
            return
        }
        this.pn(this.OM(bu, dO), bio);
        this.bK("onresourceload", bu, dO, bio, bf.conf)
    };
    bc.ceB = function(bu, bf) {
        this.dJ("res-" + this.zw(bu) + "-play", bf)
    };
    bc.OM = function(bu, dO) {
        return "res-" + this.zw(bu) + "-" + dO
    };
    bc.zw = function(bu) {
        var cE = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return cE[bu]
    };
    bq.tV.Gb = function(bu, dO) {
        if (!this.fJ) this.fJ = bq.tV.bF({});
        return this.fJ.bRc(bu, dO)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bq = bd("nm.d"),
        bjt = /^[1-9][0-9]*$/,
        bc, bO;
    var LOCAL_LOG_KEY = "local-log";
    bq.fX({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    bq.kQ = NEJ.C();
    bc = bq.kQ.bU(bq.ik);
    bc.mW = function(cl, cj) {
        if (!cl || !cj) return;
        if (bm.gH(cj)) {
            try {
                cj = JSON.parse(cj)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", bb)
                }
            }
        }
        if (!bm.qj(cj)) return;
        this.dJ("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: cl,
                    json: cj
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + cl + ", json=" + JSON.stringify(cj))
        }
    };
    bc.OX = function(nO) {
        if (!bm.hh(nO)) return;
        this.dJ("bi-batch-log", {
            data: {
                logs: JSON.stringify(nO)
            }
        })
    };
    bc.bsH = function(cj) {
        if (!cj || !cj.type || !cj.rid) return;
        var nk = cj.type;
        if (bjt.test(nk)) {
            nk = this.zw(nk)
        }
        if (!nk) return;
        if (nk == "playlist") nk = "list";
        this.mW("search", {
            type: nk,
            id: cj.rid || null,
            keyword: cj.keyword || null
        })
    };
    bc.Lx = function() {
        var bQN = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(cj) {
            if (!cj || !cj.type || !cj.rid) return;
            if (cj.play === undefined) cj.play = true;
            var nk = cj.type;
            if (bjt.test(nk)) {
                nk = this.zw(nk)
            }
            if (!nk) return;
            if (nk == "playlist") nk = "list";
            var bV = {
                id: cj.rid,
                type: nk
            };
            if (nk == "song" && cj.source) {
                bV.source = this.bsM(cj.source);
                if (!!cj.sourceid) bV.sourceid = cj.sourceid
            }
            this.mW(!cj.play ? "addto" : "play", bV);
            if (nk == "song" && cj.hash && cj.hash.match(bQN)) {
                this.mW(!cj.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    bc.VC = function(bB, cT, eO, Cz) {
        var bV = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var bQJ = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        bV.id = bB;
        bV.time = Math.round(cT);
        bV.end = bm.gH(Cz) ? Cz : bQJ[Cz] || "";
        if (eO && eO.fid) {
            bV.source = this.bsM(eO.fid);
            bV.sourceId = eO.fdata
        }
        this.mW("play", bV)
    };
    bc.bsN = function(bu, dO) {
        if (!bu || !dO) return;
        if (bjt.test(bu)) bu = this.zw(bu);
        if (bu != "playlist" && bu != "dj") return;
        var cj = bq.bG("plus-" + bu + "-count");
        if (!cj) return !1;
        this.dJ(cj, {
            data: {
                id: dO
            }
        });
        var ce = this.lk("play-hist-" + bu, []);
        if (bm.eg(ce, dO) < 0) {
            ce.push(dO);
            return !0
        }
        return !1
    };
    bc.zw = function(bu) {
        var cE = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return cE[bu]
    };
    bc.bsM = function(FY) {
        var cE = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return cE[FY]
    };
    bc.bQH = function(hZ) {
        var nO = this.zP(LOCAL_LOG_KEY, []);
        nO.unshift(hZ);
        if (nO.length > 200) {
            nO.length = 200
        }
        this.uw(LOCAL_LOG_KEY, nO)
    };
    bc.bQG = function() {
        return this.My(LOCAL_LOG_KEY)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bo = bd("nm.l"),
        bn = bd("nm.x"),
        bq = bd("nm.d");
    if (!bq.tV) return;
    var ce = bq.tV.bF({
        onresourceload: bQB
    });
    var Ll = bq.kQ.iE();

    function bQB(bu, dO, bl, cj) {
        var bk = [];
        switch (parseInt(bu)) {
            case 2:
                bk = bl;
                break;
            case 13:
                bk = bl.tracks;
                break;
            case 18:
                bk.push(bl);
                break;
            case 19:
                bk = bl.songs;
                break;
            case 21:
                if (bl.mp && bl.mp.fee && bl.mp.pl <= 0) {
                    bn.Wk(bl.data.id, bl.mp.fee);
                    return
                }
                break
        }
        if (bn.FW(bk, true, null, bu == 19 ? {
                source: "album",
                sourceid: dO
            } : null) == 0) {
            return
        }
        bn.gz({
            clazz: "m-layer-w2",
            bubble: !1,
            message: cj.message
        })
    }

    function bQA(be, qX, cmJ, ib) {
        ib = ib || {};
        if (be.action == "ok") {
            if (cmJ) {
                location.dispatch2("/payfee?songId=" + cmJ)
            } else {
                location.dispatch2("/payfee?fee=" + qX || 1)
            }
            Ll.mW("click", {
                type: "tobuyvip",
                name: "box",
                source: ib.source || "song",
                sourceid: ib.sourceid || cmJ || 0
            })
        } else if (be.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + cmJ);
            Ll.mW("click", {
                type: "tobuyone",
                name: "box",
                source: ib.source || "song",
                sourceid: ib.sourceid || cmJ || 0
            })
        }
    }

    function uL(cZ) {
        bn.gz({
            clazz: "m-layer-w2",
            bubble: !1,
            message: cZ,
            btntxt: "çŸ¥é“äº†"
        })
    }

    function vd(cZ, bV) {
        uL((bV || cg).toast || cZ)
    }
    bn.kK = function(cZ, bB, bu, xr, co) {
        cZ = cZ || "ç”±äºŽç‰ˆæƒä¿æŠ¤ï¼Œæ‚¨æ‰€åœ¨çš„åœ°åŒºæš‚æ—¶æ— æ³•ä½¿ç”¨ã€‚";
        if (xr && co && co.privilege && co.privilege.toast) {
            bA.cG("/api/song/toast", {
                query: {
                    id: co.id
                },
                type: "json",
                onload: vd.bi(this, cZ),
                onerror: vd.bi(this, cZ)
            })
        } else if (bB && bu) {
            ce.LL(bu, bB, {
                conf: {
                    message: cZ,
                    useCache: bu != 18
                }
            })
        } else {
            uL(cZ)
        }
    };
    bn.sK = function(qX, cmJ, bu, ib, Gx) {
        var cX, rl = "m-popup-info",
            WA = "å•é¦–è´­ä¹°",
            bsS = "é©¬ä¸ŠåŽ»å¼€é€š",
            dS = "å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œå½“å‰æ­Œæ›²é¡»ä»˜è´¹ä½¿ç”¨ã€‚",
            cix = true;
        try {
            cX = top.api.feeMessage || {}
        } catch (e) {
            cX = {}
        }
        if (qX == 1 || qX == 8 || qX == 16) {
            if (bu == "song") {
                rl = "m-popup-song-buy";
                dS = cX["vip2"] || dS;
                bsS = cX["vip2button"] || "åŒ…æœˆè´­ä¹°";
                WA = cX["vip2link"] || WA;
                if (Gx && Gx.flag !== undefined) {
                    var cH = Gx.flag.toString(2).split("");
                    if (parseInt(cH.pop(), 10) == 1) {
                        cix = false
                    }
                }
            } else {
                dS = cX["vip"] || dS
            }
        } else if (qX == 4) {
            dS = cX["album"] || dS;
            bsS = "ç«‹å³è®¢è´­"
        } else {
            dS = cX["unknow"] || dS
        }
        bn.lg({
            clazz: "m-layer-w5",
            html: bb.dg(rl, {
                songTxt: WA,
                tip: dS,
                oktext: bsS,
                cctext: "ä»¥åŽå†è¯´",
                showSongText: cix
            }),
            onaction: bQA.gY(null, qX, cmJ, ib)
        })
    };
    bn.bsT = function(WJ, zF) {
        bn.iu({
            title: "æç¤º",
            message: "å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œè¯¥æ­Œæ›²é¡»ä¸‹è½½åŽæ’­æ”¾",
            btnok: "ä¸‹è½½",
            btncc: "å–æ¶ˆ",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(bu) {
                if (bu == "ok") {
                    bn.NW({
                        id: WJ,
                        type: zF
                    })
                }
            }
        })
    };
    bn.Wk = function(nL, qX) {
        var cX, dS = "å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œå½“å‰æ­Œæ›²é¡»ä»˜è´¹ä½¿ç”¨ã€‚";
        try {
            cX = top.api.feeMessage || {}
        } catch (e) {
            cX = {}
        }
        if (qX == 1 || qX == 8) {
            dS = cX["vip"] || dS
        } else if (qX == 4) {
            dS = cX["album"] || dS
        } else {
            dS = cX["unknow"] || dS
        }
        return bn.lg({
            clazz: "m-layer-w5",
            html: bb.dg("m-popup-info", {
                tip: dS,
                oktext: "é©¬ä¸ŠåŽ»å¼€é€š",
                cctext: "ä»¥åŽå†è¯´"
            }),
            onaction: function(be) {
                if (be.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nL);
                    Ll.mW("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: nL || 0
                    })
                }
            }
        })
    };
    bn.FW = function() {
        function compareFee(bQu, bQt) {
            var cE = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (cE[bQu] || 0) - (cE[bQt] || 0)
        }
        return function(bk, dS, sm, ib) {
            sm = sm || {};
            var vJ = [],
                Ld = {},
                bsV = 0,
                bsW = 0,
                qQ = null;
            if (!bk || !bk.length) return vJ;
            bm.cv(bk, function(co) {
                var gr = bn.oP(co);
                if (gr == 0) {
                    vJ.push(co)
                } else if (gr == 10) {
                    if (co.privilege) {
                        co.fee = co.privilege.fee
                    }
                    if (compareFee(co.fee, Ld.fee) > 0) {
                        Ld = co
                    }
                } else if (gr == 11) {
                    ++bsV;
                    if (!sm.play) vJ.push(co)
                } else if (gr == 1e3) {
                    ++bsW;
                    if (!sm.download) vJ.push(co)
                } else if (gr == 100) {
                    qQ = co
                }
            });
            if (vJ.length == 0 && dS) {
                if (bsV == bk.length) {
                    var wR = bk[0].privilege || {};
                    if (wR.payed) {
                        bn.kK("å”±ç‰‡å…¬å¸è¦æ±‚ï¼Œè¯¥æ­Œæ›²é¡»ä¸‹è½½åŽæ’­æ”¾")
                    } else {
                        bn.sK(wR.fee, null, null, ib)
                    }
                } else if (bsW == bk.length) {
                    bn.kK("å› ç‰ˆæƒæ–¹è¦æ±‚ï¼Œè¯¥æ­Œæ›²ä¸æ”¯æŒä¸‹è½½")
                } else if (Ld.id) {
                    bn.sK(Ld.fee, Ld.id, null, ib, Ld.privilege)
                } else {
                    if (qQ && bk.length == 1 && qQ.privilege && qQ.privilege.st < 0 && qQ.privilege.toast) {
                        bn.kK(null, null, null, true, qQ)
                    } else {
                        bn.kK()
                    }
                }
            }
            return vJ
        }
    }();
    bn.oP = function(co) {
        if (!co) return 0;
        var gr = co.privilege;
        if (co.program) return 0;
        if (window.GAbroad) return 100;
        if (gr) {
            if (gr.st != null && gr.st < 0) {
                return 100
            }
            if (gr.fee > 0 && gr.fee != 8 && gr.payed == 0) return 10;
            if (gr.fee == 16) return 11;
            if ((gr.fee == 0 || gr.payed) && gr.pl > 0 && gr.dl == 0) return 1e3;
            if (gr.pl == 0 && gr.dl == 0) return 100;
            return 0
        } else {
            var gf = co.status != null ? co.status : co.st != null ? co.st : 0;
            if (co.status >= 0) return 0;
            if (co.fee > 0) return 10;
            return 100
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bj = bd("nej.v"),
        bb = bd("nej.e"),
        bM = bd("nej.ui"),
        bc;
    if (!!bM.Xq) return;
    var iP = bb.rA(".#<uispace>{position:absolute;background:#fff;}");
    bM.Xq = NEJ.C();
    bc = bM.Xq.bU(bM.LR);
    bc.cz = function(bf) {
        this.cB(bf);
        this.dq([
            [document, "click", this.rf.bi(this)]
        ]);
        this.bQq = !!bf.nostop;
        this.bsX = {
            top: bf.top,
            left: bf.left
        }
    };
    bc.cR = function() {
        delete this.wN;
        delete this.XA;
        delete this.pk;
        delete this.bsY;
        delete this.Pq;
        delete this.bsX;
        this.cV()
    };
    bc.dx = function() {
        this.lz = iP
    };
    bc.dm = function() {
        this.dw();
        this.yN = this.bs;
        bj.bt(this.bs, "click", this.bQn.bi(this))
    };
    bc.rf = function(be) {
        if (be.button != 2) this.cw()
    };
    bc.bQn = function(be) {
        if (this.bQq) return;
        bj.ru(be);
        var bC = bj.bY(be);
        if (bC.tagName == "A") bj.dp(be)
    };
    bc.bQd = function() {
        var eh = /\s+/i;
        return function(ng) {
            ng = (ng || "").trim().toLowerCase().split(eh);
            ng[0] = ng[0] || "bottom";
            ng[1] = ng[1] || "left";
            this.pk = ng
        }
    }();
    bc.bQc = function(ng) {
        var bp = {},
            mI = this.XA,
            ceF = bb.qr(),
            eZ = this.bs.offsetWidth,
            en = this.bs.offsetHeight;
        switch (ng[0]) {
            case "top":
                bp.top = mI.top - en;
                bp.left = ng[1] == "right" ? mI.left + mI.width - eZ : mI.left;
                break;
            case "left":
                bp.left = mI.left - eZ;
                bp.top = ng[1] == "bottom" ? mI.top + mI.height - en : mI.top;
                break;
            case "right":
                bp.left = mI.left + mI.width;
                bp.top = ng[1] == "bottom" ? mI.top + mI.height - en : mI.top;
                break;
            default:
                bp.top = mI.top + mI.height;
                bp.left = ng[1] == "right" ? mI.left + mI.width - eZ : mI.left;
                break
        }
        return bp
    };
    bc.Mc = function() {
        if (!this.bsY) {
            this.hn(this.bsX);
            return
        }
        if (!!this.Pq) {
            this.hn(this.wN);
            return
        }
        if (!!this.XA) this.hn(this.bQc(this.pk))
    };
    bc.bPZ = function(bC, cjL, be) {
        cjL = cjL || cg;
        var btf = bb.qr(),
            dY = bj.mS(be) + (cjL.left || 0),
            hv = bj.qi(be) + (cjL.top || 0),
            eZ = bC.offsetWidth + (cjL.right || 0),
            en = bC.offsetHeight + (cjL.bottom || 0),
            FK = btf.scrollWidth,
            XW = btf.scrollHeight,
            XX = dY + eZ,
            XY = hv + en;
        switch (this.pk[0]) {
            case "top":
                hv = XY > XW ? hv - en : hv;
                if (this.pk[1] == "right") {
                    dY = dY - eZ < 0 ? 0 : dY - eZ
                } else {
                    dY = XX > FK ? FK - eZ : dY
                }
                break;
            case "left":
                dY = XX > FK ? FK - eZ : dY;
                if (this.pk[1] == "top") {
                    hv = XY > XW ? hv - en : hv
                } else {
                    hv = hv - en < 0 ? hv : hv - en
                }
                break;
            case "right":
                dY = dY - eZ < 0 ? 0 : dY - eZ;
                if (this.pk[1] == "top") {
                    hv = XY > XW ? hv - en : hv
                } else {
                    hv = hv - en < 0 ? hv : hv - en
                }
                break;
            default:
                hv = hv - en < 0 ? hv : hv - en;
                if (this.pk[1] == "left") {
                    dY = XX > FK ? FK - eZ : dY
                } else {
                    dY = dY - eZ < 0 ? 0 : dY - eZ
                }
                break
        }
        return {
            top: hv,
            left: dY
        }
    };
    bc.XZ = function() {
        var bPX = function(bC, cjL) {
            bC = bb.bG(bC);
            if (!bC) return;
            cjL = cjL || cg;
            var cq = bb.jX(bC);
            return {
                top: cq.y - (cjL.top || 0),
                left: cq.x - (cjL.left || 0),
                width: bC.offsetWidth + (cjL.right || 0),
                height: bC.offsetHeight + (cjL.bottom || 0)
            }
        };
        return function(bf) {
            bf = bf || cg;
            this.Pq = bf.event;
            this.bQd(bf.align);
            if (!!this.Pq) this.wN = this.bPZ(bf.target, bf.delta, this.Pq);
            this.XA = bPX(bf.target, bf.delta);
            this.bsY = !!bf.fitable;
            this.bR();
            return this
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bM = bd("nej.ui"),
        bc, bO;
    if (!!bM.yD) return;
    bM.yD = NEJ.C();
    bc = bM.yD.bU(bM.OD);
    bO = bM.yD.dr;
    bM.yD.ceG = function() {
        var bPU = function(be, bB, gb, kd, KF) {
            var dP, bN = bB + "-i",
                ce = gb.wA,
                btk = !!kd.noclear,
                btl = !!kd.toggled;
            if (bm.hC(kd.onbeforeclick)) {
                var PD = kd.noclear,
                    bPJ = kd.toggled;
                try {
                    kd.onbeforeclick(kd)
                } catch (e) {}
                btk = !!kd.noclear;
                btl = !!kd.toggled;
                kd.toggled = bPJ;
                kd.noclear = PD
            }
            var Cb = ce[bN];
            if (btl && !!Cb) {
                Cb.cw();
                return
            }
            bj.cu(be);
            if (!btk) {
                bj.bK(document, "click");
                dP = gb.bF(kd)
            } else {
                dP = gb.car(kd, !0)
            }
            ce[bN] = dP;
            dP.Ch("onbeforerecycle", function() {
                delete ce[bN]
            });
            dP.XZ(KF)
        };
        return function(bh, bf) {
            bh = bb.bG(bh);
            if (!bh) return this;
            if (!this.wA) this.wA = {};
            var bB = bb.lr(bh);
            if (!!this.wA[bB]) return this;
            bf = NEJ.X({}, bf);
            var KF = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, bf);
            KF.target = bB;
            bf.destroyable = !0;
            if (!bf.fixed) {
                KF.fitable = !0;
                bf.parent = document.body
            }
            this.wA[bB] = [bB, bf.event || "click", bPU.gY(null, bB, this, bf, KF)];
            bj.bt.apply(bj, this.wA[bB]);
            return this
        }
    }();
    bM.yD.ceI = function(bh) {
        if (!this.wA) return this;
        var bB = bb.lr(bh),
            be = this.wA[bB];
        if (!be) return this;
        delete this.wA[bB];
        bj.oz.apply(bj, be);
        var dP = this.wA[bB + "-i"];
        if (!!dP) dP.cw();
        return this
    };
    bc.bbe = function() {
        return bM.Xq.bF(this.dk)
    };
    bc.Me = function() {
        bO.Me.apply(this, arguments);
        this.dk.top = null;
        this.dk.left = null;
        this.dk.nostop = !1
    };
    bc.XZ = function(bf) {
        if (!!this.nX) this.nX.XZ(bf);
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cA = bd("nej.ui"),
        bo = bd("nm.l"),
        bc, bO;
    bo.YI = NEJ.C();
    bc = bo.YI.bU(cA.yD);
    bc.cz = function(bf) {
        bf.nohack = true;
        this.cB(bf)
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bo = bd("nm.l"),
        bc, bO;
    bo.ci = NEJ.C();
    bc = bo.ci.bU(bo.YI);
    bO = bo.ci.dr;
    bc.cz = function(bf) {
        this.cB(bf);
        this.fL = bf.type || 1
    };
    bc.dm = function() {
        this.dw();
        this.bs = bb.oZ(this.bPE());
        var bk = bb.eu(this.bs);
        this.FH = bk[0];
        this.dA = bk[1]
    };
    bc.bPE = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    bc.Mc = function() {
        var bD = {},
            ds = this.bs.style,
            lU = bb.qr(),
            tF = {
                left: lU.scrollLeft,
                top: lU.scrollTop
            },
            cjL = {
                left: lU.clientWidth - this.bs.offsetWidth,
                top: lU.clientHeight - this.bs.offsetHeight
            };
        bD.top = Math.max(0, tF.top + cjL.top / 2);
        bD.left = Math.max(0, tF.left + cjL.left / 2);
        this.nX.hn(bD)
    };
    bc.bR = function(bf) {
        bO.bR.call(this);
        this.Mc();
        this.fL == 1 ? bb.gL(this.FH, "u-icn-32", "u-icn-31") : bb.gL(this.FH, "u-icn-31", "u-icn-32");
        this.dA.innerHTML = bf.tip || ""
    };
    bo.ci.bR = function() {
        var hd;
        return function(bf) {
            clearTimeout(hd);
            if (bf.parent === undefined) bf.parent = document.body;
            if (bf.autoclose === undefined) bf.autoclose = true;
            bf.clazz = "m-sysmsg";
            !!this.fJ && this.fJ.bW();
            this.fJ = this.bF(bf);
            this.fJ.bR(bf);
            if (bf.autoclose) hd = setTimeout(this.cw.bi(this), 2e3)
        }
    }();
    bo.ci.cw = function() {
        !!this.fJ && this.fJ.cw()
    }
})();
(function() {
    var bd = NEJ.P,
        bA = bd("nej.j"),
        bm = bd("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        bA.cG = bA.cG.fj(function(be) {
            bf = be.args[1];
            bf.query = bf.query || {};
            if (bm.gH(bf.query)) bf.query = bm.iO(bf.query);
            bf.query.ref = "mail"
        })
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        gm = NEJ.R,
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bq = bd("nm.d"),
        bo = bd("nm.l"),
        bN = "playlist-tracks_",
        bc;
    bq.fX({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(bV, bf) {
                this.bPD(bV.playlist);
                return {
                    total: 0,
                    list: gm
                }
            },
            onerror: function() {
                this.bK("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(bV, bf) {
                var jy = bV.playlist;
                jy.creator = GUser;
                jy.isHost = !0;
                jy.typeFlag = "playlist";
                return jy
            },
            finaly: function(be, bf) {
                bj.bK(bq.hW, "listchange", be)
            },
            onmessage: function() {
                var lJ = {
                    507: "æ­Œå•æ•°é‡è¶…è¿‡ä¸Šé™ï¼",
                    405: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼",
                    406: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼"
                };
                return function(dX) {
                    bo.ci.bR({
                        tip: lJ[dX] || "åˆ›å»ºå¤±è´¥",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(bf) {
                bf.id = bf.data.pid
            },
            finaly: function(be, bf) {
                bj.bK(bq.hW, "listchange", be)
            },
            onmessage: function() {
                var lJ = {
                    404: "æ­Œå•ä¸å­˜åœ¨ï¼",
                    405: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼",
                    406: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼"
                };
                return function(dX) {
                    bo.ci.bR({
                        tip: lJ[dX] || "åˆ é™¤å¤±è´¥",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe/",
            filter: function(bf) {
                var ib = bf.ext || {};
                bf.ext = NEJ.X(ib, bf.data);
                bf.data = {
                    id: bf.ext.id
                }
            },
            format: function(bV, bf) {
                bo.ci.bR({
                    tip: "æ”¶è—æˆåŠŸ" + (bV.point > 0 ? ' èŽ·å¾—<em class="s-fc6">' + bV.point + "ç§¯åˆ†</em>" : "")
                });
                var bw = bf.ext;
                bw.subscribedCount++;
                return bw
            },
            finaly: function(be, bf) {
                bj.bK(bq.bPC, "listchange", be);
                bj.bK(bq.bPC, "itemchange", {
                    attr: "subscribedCount",
                    data: be.data
                })
            },
            onmessage: function() {
                var lJ = {
                    404: "æ­Œå•ä¸å­˜åœ¨ï¼",
                    501: "æ­Œå•å·²ç»æ”¶è—ï¼",
                    506: "æ­Œå•æ”¶è—æ•°é‡è¶…è¿‡ä¸Šé™ï¼"
                };
                return function(dX) {
                    bo.ci.bR({
                        type: 2,
                        tip: lJ[dX] || "æ”¶è—å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(bf) {
                bf.id = bf.data.id = bf.data.pid
            },
            finaly: function(be, bf) {
                bj.bK(bq.hW, "listchange", be)
            },
            onmessage: function() {
                var lJ = {
                    404: "æ­Œå•ä¸å­˜åœ¨ï¼",
                    405: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼",
                    406: "ä½ æ“ä½œå¤ªå¿«äº†ï¼Œè¯·ä¼‘æ¯ä¸€ä¼šå†è¯•ï¼"
                };
                return function(dX) {
                    bo.ci.bR({
                        tip: lJ[dX],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(bf) {
                var bl = bf.data,
                    PG = {};
                PG["playlist-update-name"] = {
                    id: bl.id,
                    name: bl.name
                };
                PG["playlist-update-tag"] = {
                    id: bl.id,
                    tags: bl.tags.join(";")
                };
                PG["playlist-update-desc"] = {
                    id: bl.id,
                    desc: bl.description
                };
                bf.data = PG;
                bf.ext = bl
            },
            format: function(bX, pr, Kq, bf) {
                if (bX.code == 200 && pr.code == 200 && Kq.code == 200) {
                    bf.ext.allSuccess = true;
                    bo.ci.bR({
                        tip: "ä¿å­˜æˆåŠŸ"
                    })
                } else if (bX.code == 407 || pr.code == 407 || Kq.code == 407) {
                    bf.ext.allSuccess = false;
                    bo.ci.bR({
                        type: 2,
                        tip: "è¾“å…¥å†…å®¹åŒ…å«å…³é”®å­—"
                    })
                } else {
                    bf.ext.allSuccess = false;
                    bo.ci.bR({
                        type: 2,
                        tip: "ä¿å­˜å¤±è´¥"
                    })
                }
                return this.fw(bf.ext.id)
            },
            finaly: function(be, bf) {
                bj.bK(bq.hW, "listchange", be)
            },
            onmessage: function(dX) {
                bo.ci.bR({
                    type: 2,
                    tip: "ä¿å­˜å¤±è´¥"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(bV, bf) {
                var bw = this.fw(bf.ext.id);
                if (bV.code == 200) bw.name = bf.ext.name;
                return bV
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(bV, bf) {
                var bw = this.fw(bf.ext.id);
                if (bV.code == 200) bw.tags = bf.ext.tags;
                return bV
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(bV, bf) {
                var bw = this.fw(bf.ext.id);
                if (bV.code == 200) bw.description = bf.ext.description;
                return bV
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(bf) {
                bf.url = bf.data.url;
                delete bf.data.url
            },
            format: function(bV, bf) {
                bo.ci.bR({
                    tip: "ä¿å­˜æˆåŠŸ"
                });
                var bw = this.fw(bf.data.id);
                bw.coverImgUrl = bf.url;
                bf.ext = bw;
                return bw
            },
            onmessage: function(dX) {
                bo.ci.bR({
                    type: 2,
                    tip: "ä¿å­˜å¤±è´¥"
                })
            },
            finaly: function(be, bf) {
                bj.bK(bq.hW, "itemchange", {
                    attr: "coverImgUrl",
                    data: bf.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(bV, bf) {
                var jy = this.fw(bf.data.id);
                if (!jy) return;
                jy.playCount++;
                bj.bK(bq.hW, "itemchange", {
                    attr: "playcount",
                    data: jy
                })
            }
        }
    });
    bq.hW = NEJ.C();
    bc = bq.hW.bU(bq.ik);
    bc.dv = function() {
        this.dC()
    };
    bc.btu = function() {
        var fh = GUser.userId;
        this.qb({
            limit: 1001,
            key: "playlist_my-" + fh,
            data: {
                offset: 0,
                limit: 1001,
                uid: fh
            }
        })
    };
    bc.bPD = function(bk) {
        var fh = GUser.userId,
            jO = [],
            btv = [];
        bm.cv(bk, function(bw) {
            bw.typeFlag = "playlist";
            if (bw.creator && bw.creator.userId == fh) {
                if (bw.specialType == 5) bw.name = "æˆ‘å–œæ¬¢çš„éŸ³ä¹";
                bw.isHost = !0;
                jO.push(bw)
            } else {
                btv.push(bw)
            }
        });
        this.rq("playlist_new-" + fh, jO);
        this.rq("playlist_fav-" + fh, btv)
    };
    bc.bPz = function(bl) {
        this.dJ("playlist-update-cover", {
            data: bl
        })
    };
    bc.ceK = function() {
        var Kn = this.bPv.bG("host-plist");
        if (Kn.length == 0) {
            return
        }
        if (Kn.length == 1 && Kn[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Kn.length; i < len; i++) {
            var bw = Kn[i];
            if (bw.trackCount > 0) return bw.id
        }
        return this.bPv.bG("host-plist")[0].id
    };
    bc.bPu = function(bB) {
        if (GUser && GUser.userId > 0) {
            this.dJ("playlist-upcount", {
                data: {
                    id: bB
                }
            })
        }
    };
    bc.BQ = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    bc.ceL = function() {
        return GUser.userId
    };
    bc.bai = function(bw) {
        if (bw.userId == GUser.userId && bw.specialType == 5) bw.name = "æˆ‘å–œæ¬¢çš„éŸ³ä¹";
        bj.bK(this.constructor, "itemchange", {
            data: this.yg(bw)
        });
        return bw
    };
    bI.gN.bF({
        element: bq.hW,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var bd = NEJ.P,
        gm = NEJ.R,
        cC = NEJ.F,
        cg = NEJ.O,
        bI = bd("nej.ut"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        bo = bd("nm.l"),
        bc, bO;
    bq.fX({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(bV) {
                return bV.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(bf) {
                bf.data.limit = 1e3;
                delete bf.data.id
            },
            format: function(bV, bf) {
                return bV.programs
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged/",
            format: function(bV, bf) {
                return bV.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe/",
            filter: function(bf) {
                bf.ext = bf.data;
                bf.data = {
                    id: bf.ext.id
                };
                bf.id = bf.data.id
            },
            format: function(bV, bf) {
                bo.ci.bR({
                    tip: "æ”¶è—æˆåŠŸ"
                });
                var bw = bf.ext;
                bw.subscribedCount++;
                bw.subscribed = !0;
                return bw
            },
            finaly: function(be, bf) {
                bj.bK(bq.pL, "listchange", be)
            },
            onmessage: function() {
                var lJ = {
                    404: "èŠ‚ç›®ä¸å­˜åœ¨ï¼",
                    501: "èŠ‚ç›®å·²æ”¶è—ï¼"
                };
                return function(dX) {
                    bo.ci.bR({
                        type: 2,
                        tip: lJ[dX] || "æ”¶è—å¤±è´¥ï¼"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe/",
            finaly: function(be, bf) {
                bj.bK(bq.pL, "listchange", be)
            },
            onmessage: function() {
                var lJ = {
                    404: "èŠ‚ç›®ä¸å­˜åœ¨ï¼",
                    502: "æ²¡æœ‰æ”¶è—æ­¤èŠ‚ç›®ï¼"
                };
                return function(dX) {
                    bn.bal({
                        txt: lJ[dX] || "å–æ¶ˆæ”¶è—å¤±è´¥ï¼"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(bf) {
                var bw = this.fw(bf.data.id) || cg;
                bf.ext = (bw.listenerCount || 0) + 1
            },
            format: function(bV, bf) {
                var bw = this.fw(bf.data.id);
                if (!!bw) {
                    bw.listenerCount = Math.max(bf.ext, bw.listenerCount || 0)
                }
            },
            finaly: function(be, bf) {
                bj.bK(bq.pL, "itemchange", {
                    attr: "playCount",
                    data: this.fw(bf.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(bf) {
                bf.data = {
                    threadId: "A_DJ_1_" + bf.id
                }
            },
            format: function(bV, bf) {
                var bw = bf.ext.data || this.fw(bf.id);
                bw.liked = true;
                bw.likedCount++;
                bf.ext.data = bw;
                try {
                    top.player.setLike(bw)
                } catch (e) {}
                return bw
            },
            finaly: function(be, bf) {
                bj.bK(bq.pL, "itemchange", {
                    attr: "likedCount",
                    data: bf.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(bf) {
                bf.data = {
                    threadId: "A_DJ_1_" + bf.id
                }
            },
            format: function(bV, bf) {
                var bw = bf.ext.data || this.fw(bf.id);
                bw.liked = false;
                bw.likedCount--;
                bf.ext.data = bw;
                try {
                    top.player.setLike(bw)
                } catch (e) {}
                return bw
            },
            finaly: function(be, bf) {
                bj.bK(bq.pL, "itemchange", {
                    attr: "likedCount",
                    data: bf.ext.data
                })
            }
        }
    });
    bq.pL = NEJ.C();
    bc = bq.pL.bU(bq.ik);
    bc.ceM = function() {
        var fh = GUser.userId;
        this.qb({
            limit: 1001,
            key: "program_fav-" + fh,
            data: {
                offset: 0,
                limit: 1e3,
                uid: fh
            }
        })
    };
    bc.ceO = function(dN) {
        var oy = dN[this.uS];
        bn.bPp(4, function(ce) {
            ce.rq("track_program-" + oy, dN.songs)
        });
        delete dN.songs;
        var cJ = dN.mainSong;
        bn.bPp(4, function(ce) {
            ce.rq("track_program_main-" + oy, !cJ ? [] : [cJ])
        });
        dN.mainSong = (cJ || cg).id
    };
    bc.ceP = function(bB) {
        var dN = this.fw(bB),
            fh = localCache.Ol("host.profile.userId");
        return !!dN && dN.dj.userId == fh
    };
    bc.ceQ = function(bB) {
        return !1
    };
    bc.bai = function(bw) {
        bj.bK(this.constructor, "itemchange", {
            attr: "detail",
            data: this.yg(bw)
        });
        return bw
    };
    bc.bPu = function(bB) {
        this.dJ("program-update-count", {
            data: {
                id: bB
            }
        })
    };
    bn.btz = function(bf) {
        var ce = bq.pL.bF({
            onitemadd: function() {
                (bf.onsuccess || cC)()
            },
            onerror: function() {
                (bf.onerror || cC)()
            }
        });
        if (bf.data.liked) {
            ce.PL(bf.data)
        } else {
            ce.xq(bf.data)
        }
    };
    bc.xq = function(dN) {
        if (!bn.ic()) return;
        var dG = {
            ext: {}
        };
        if (bm.qj(dN)) {
            dG.id = dN.id;
            dG.ext.data = dN
        } else {
            dG.id = dN
        }
        this.dJ("program-like", dG)
    };
    bc.PL = function(dN) {
        if (!bn.ic()) return;
        var dG = {
            ext: {}
        };
        if (bm.qj(dN)) {
            dG.id = dN.id;
            dG.ext.data = dN
        } else {
            dG.id = dN
        }
        this.dJ("program-unlike", dG)
    };
    bI.gN.bF({
        element: bq.pL,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        gm = NEJ.R,
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bq = bd("nm.d"),
        bo = bd("nm.l"),
        bn = bd("nm.x"),
        bN = "playlist-tracks_",
        bn = bd("nm.x"),
        bc;
    bq.fX({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(bf) {
                bf.data.c = JSON.stringify([{
                    id: bf.data.id
                }])
            },
            format: function(bV, bf) {
                var co = bn.Cf(bV.songs[0]);
                co.privilege = bV.privileges[0];
                return co
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(bf) {
                bf.data.n = 1e3
            },
            format: function(bV, bf) {
                var hu = [];
                this.cmF.bai(bV.playlist);
                bm.cv(bV.playlist.tracks, function(cJ, bv) {
                    var btC = bn.Cf(cJ);
                    btC.privilege = bV.privileges[bv];
                    hu.push(btC)
                }, this);
                return hu
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(bV, bf) {
                var hu = [];
                bm.cv(bV.songs, function(co) {
                    hu.push(bn.Cf(co))
                });
                return hu
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(bf) {
                var cE = {},
                    bl = bf.data,
                    bPk = this.hT(bf.key) || [];
                Cn = [];
                bm.cv(bPk, function(cJ) {
                    var bB = bm.qj(cJ) ? cJ.id : cJ;
                    cE[bB] = true
                });
                bf.ext = [];
                bm.cv(bl.tracks, function(cJ) {
                    var bB = bm.qj(cJ) ? cJ.id : cJ;
                    if (!cE[bB]) {
                        Cn.push(bB);
                        cE[bB] = true;
                        bf.ext.push(cJ)
                    }
                });
                bl.trackIds = JSON.stringify(Cn);
                bl.op = "add";
                if (!Cn.length) {
                    bf.value = {
                        code: 502
                    }
                }
            },
            format: function(bV, bf) {
                bo.ci.bR({
                    tip: "å·²æ·»åŠ è‡³æ­Œå•"
                });
                var jy = this.cmF.fw(bf.data.pid);
                if (!!bV.coverImgUrl) jy.coverImgUrl = bV.coverImgUrl;
                bm.nt(bf.ext, function(cJ) {
                    this.wF(bf, bm.qj(cJ) ? cJ : null);
                    if (!!jy) jy.trackCount++
                }, this);
                bj.bK(bq.hW, "itemchange", {
                    data: jy || {},
                    cmd: "add"
                });
                this.bK("onaddsuccess");
                return null
            },
            finaly: function(be, bf) {
                bj.bK(bq.uH, "listchange", {
                    key: bf.key,
                    action: "refresh"
                });
                var oy = bf.data.pid,
                    dL = this.kW(bf.key)
            },
            onmessage: function() {
                var lJ = {
                    502: "æ­Œæ›²å·²å­˜åœ¨ï¼"
                };
                return function(dX) {
                    setTimeout(function() {
                        bo.ci.bR({
                            tip: lJ[dX] || "æ·»åŠ å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•ï¼",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(bf) {
                var bl = bf.data;
                bf.ext = bl.trackIds;
                bl.trackIds = JSON.stringify(bl.trackIds);
                bl.op = "del"
            },
            format: function(bV, bf) {
                var jy = this.cmF.fw(bf.data.pid);
                bm.cv(bf.ext, function(bB) {
                    this.bgv({
                        id: bB,
                        key: "track_playlist-" + bf.data.pid
                    }, !0);
                    if (!!jy) jy.trackCount = Math.max(0, jy.trackCount - 1)
                }, this);
                bj.bK(bq.hW, "itemchange", {
                    data: jy || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(be, bf) {
                bj.bK(bq.uH, "listchange", {
                    key: bf.key,
                    action: "refresh"
                })
            },
            onmessage: function(dX) {
                bn.bal({
                    text: "æ­Œæ›²åˆ é™¤å¤±è´¥ï¼"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(bV, bf) {
                return this.btD.bai(bV.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(bV, bf) {
                var bk = [];
                if (bf.data.type == -1) {
                    if (bV.weekData && bV.weekData.length) {
                        bf.data.type = 1
                    } else {
                        bf.data.type = 0
                    }
                }
                if (bf.data.type == 1) {
                    bk = this.btE(bV.weekData)
                } else {
                    bk = this.btE(bV.allData)
                }
                return bk
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v1/discovery/recommend/songs",
            format: function(bV) {
                var nO = [];
                bm.cv(bV.recommend, function(co, bv) {
                    nO.push({
                        action: "recommendimpress",
                        json: {
                            alg: co.alg,
                            scene: "user-song",
                            position: bv,
                            id: co.id
                        }
                    })
                });
                this.kt.OX(nO);
                return bV.recommend
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(bf) {
                bf.data.lv = 0;
                bf.data.tv = 0
            },
            format: function(bp, bf) {
                return bp
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    bq.uH = NEJ.C();
    bc = bq.uH.bU(bq.ik);
    bc.dv = function() {
        this.dC();
        this.cmF = bq.hW.bF();
        this.btD = bq.pL.bF();
        this.kt = bq.kQ.bF()
    };
    bc.btE = function(bk) {
        var bp = [],
            hM = 0;
        bm.cv(bk, function(bw, bv) {
            var co = bn.Cf(bw.song);
            if (bv == 0) {
                hM = bw.score
            }
            co.max = hM;
            co.playCount = bw.playCount;
            co.score = bw.score;
            bp.push(co)
        });
        return bp
    };
    bI.gN.bF({
        element: bq.uH,
        event: ["listchange"]
    })
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function(b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function(d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function(c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var cre;
    var cqs = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var crP = 0;
    var crf = 0;
    var crg = 1;
    var crh = 0;
    var cqS = "";
    var cri = "";
    var crk = "";
    var cqM = "";
    var cqL = "";
    var cqT = "";
    var crq = 0;
    var crr = "";
    var cqC = "";
    var cqx = 0;
    var cqU = ntes_get_domain();
    var cqV = null;
    var crQ = "//analytics.163.com";
    var crO = function() {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + cqU
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + cqU
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + cqU
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var crN = 0;
    var cqE = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * cqE))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << cqE) - 1;
        for (var b = 0; b < d.length * cqE; b += cqE) {
            c[b >> 5] |= (d.charCodeAt(b / cqE) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = crN ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        cqM = "-";
        cqT = "-";
        cqL = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            cqM = b.width + "x" + b.height;
            cqT = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                cqM = f.width + "x" + f.height
            }
        }
        if (a.language) {
            cqL = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                cqL = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        crq = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function crR(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || crO;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || cre;
        cqS = escape(a || document.location);
        cri = escape(m || document.title);
        crk = l === true ? "" : escape(l || document.referrer);
        crr = ntes_get_flashver();
        var b = (new Date).getTime();
        if (cqV == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            cqV = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (cqS.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (cqV) {
                cqs = fetch_visitor_hash();
                crf = 1;
                ntes_set_cookie_long("_ntes_nnid", cqs + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", cqs)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            cqs = h.substr(0, o);
            cqx = h.substr(o + 1, p - o - 1);
            if (cqx == 0) {
                cqx = (new Date).getTime();
                f = true
            }
            if (!cqs) {
                cqs = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", cqs + "," + cqx);
                ntes_set_cookie_long("_ntes_nuid", cqs)
            }
            if (cqx != 0 && b - cqx > 365 * 86400 * 1e3) {
                cqx = 0;
                ntes_set_cookie_long("_ntes_nnid", cqs + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", cqs)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        cqC = c("P_INFO", "P_OINFO");
        cqC = cqC ? cqC.substr(0, cqC.indexOf("|")) : "";
        crh = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", cqs, "&_nvtm=", crP, "&_nvsf=", crg, "&_nvfi=", crf, "&_nlag=", cqL, "&_nlmf=", crq, "&_nres=", cqM, "&_nscd=", cqT, "&_nstm=", crh, "&_nurl=", cqS, "&_ntit=", cri, "&_nref=", crk, "&_nfla=", crr, "&_nssn=", cqC, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        crg = 0;
        neteaseTracker.callback = null
    }
    cre = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {},
        l = d.lib = {},
        s = function() {},
        t = l.Base = {
            extend: function(a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || v).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function() {
                this.bl = new r.init;
                this.btH = 0
            },
            PV: function(a) {
                "string" == typeof a && (a = x.parse(a));
                this.bl.concat(a);
                this.btH += a.sigBytes
            },
            FA: function(a) {
                var c = this.bl,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.btG, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.btI(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.bl = this.bl.clone();
                return a
            },
            btG: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bbr()
        },
        update: function(a) {
            this.PV(a);
            this.FA();
            return this
        },
        finalize: function(a) {
            a && this.PV(a);
            return this.PX()
        },
        blockSize: 16,
        bbn: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        bPe: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.cE;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this.cE,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        cE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bbr: function() {
            this.fA = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        btI: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.fA.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        PX: function() {
            var b = this.bl,
                n = b.words,
                a = 8 * this.btH,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.FA();
            b = this.fA;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.fA = this.fA.clone();
            return b
        }
    });
    t.MD5 = v.bbn(r);
    t.HmacMD5 = v.bPe(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this.bbv, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this.bPd, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.btJ = e;
                this.bN = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this.bbr()
            },
            process: function(e) {
                this.PV(e);
                return this.FA()
            },
            finalize: function(e) {
                e && this.PV(e);
                return this.PX()
            },
            keySize: 4,
            ivSize: 4,
            bbv: 1,
            bPd: 2,
            bbn: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        PX: function() {
            return this.FA(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this.btK;
            c ? this.btK = u : c = this.btM;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function(e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function(e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function(e, a) {
                this.btN = e;
                this.btK = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.btN,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.btM = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.btN,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.btM = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.btJ == this.bbv) var c = a.createEncryptor;
            else c = a.createDecryptor, this.btG = 1;
            this.fC = c.call(a, this, b && b.words)
        },
        btI: function(a, b) {
            this.fC.processBlock(a, b)
        },
        PX: function() {
            var a = this.cfg.padding;
            if (this.btJ == this.bbv) {
                a.pad(this.bl, this.blockSize);
                var b = this.FA(!0)
            } else b = this.FA(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.Ub(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            Ub: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.Ub(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bbr: function() {
                for (var a = this.bN, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.bOU = d + 6) + 1), e = this.bOT = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.bOR = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this.btR(a, b, this.bOT, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.btR(a, c, this.bOR, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            btR: function(a, b, c, d, e, j, l, f) {
                for (var m = this.bOU, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.bbn(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function() {
    var bd = NEJ.P,
        fm = bd("nej.g"),
        bA = bd("nej.j"),
        bm = bd("nej.u"),
        cnb = bd("nm.x.ek");
    cnb.emj = {
        "è‰²": "00e0b",
        "æµæ„Ÿ": "509f6",
        "è¿™è¾¹": "259df",
        "å¼±": "8642d",
        "å˜´å”‡": "bc356",
        "äº²": "62901",
        "å¼€å¿ƒ": "477df",
        "å‘²ç‰™": "22677",
        "æ†¨ç¬‘": "ec152",
        "çŒ«": "b5ff6",
        "çš±çœ‰": "8ace6",
        "å¹½çµ": "15bb7",
        "è›‹ç³•": "b7251",
        "å‘æ€’": "52b3a",
        "å¤§å“­": "b17a8",
        "å…”å­": "76aea",
        "æ˜Ÿæ˜Ÿ": "8a5aa",
        "é’Ÿæƒ…": "76d2e",
        "ç‰µæ‰‹": "41762",
        "å…¬é¸¡": "9ec4e",
        "çˆ±æ„": "e341f",
        "ç¦æ­¢": "56135",
        "ç‹—": "fccf6",
        "äº²äº²": "95280",
        "å‰": "104e0",
        "ç¤¼ç‰©": "312ec",
        "æ™•": "bda92",
        "å‘†": "557c9",
        "ç”Ÿç—…": "38701",
        "é’»çŸ³": "14af6",
        "æ‹œ": "c9d05",
        "æ€’": "c4f7f",
        "ç¤ºçˆ±": "0c368",
        "æ±—": "5b7a4",
        "å°é¸¡": "6bee2",
        "ç—›è‹¦": "55932",
        "æ’‡å˜´": "575cc",
        "æƒ¶æ": "e10b4",
        "å£ç½©": "24d81",
        "åèˆŒ": "3cfe4",
        "å¿ƒç¢Ž": "875d3",
        "ç”Ÿæ°”": "e8204",
        "å¯çˆ±": "7b97d",
        "é¬¼è„¸": "def52",
        "è·³èˆž": "741d5",
        "ç”·å­©": "46b8e",
        "å¥¸ç¬‘": "289dc",
        "çŒª": "6935b",
        "åœˆ": "3ece0",
        "ä¾¿ä¾¿": "462db",
        "å¤–æ˜Ÿ": "0a22b",
        "åœ£è¯ž": "8e7",
        "æµæ³ª": "01000",
        "å¼º": "1",
        "çˆ±å¿ƒ": "0CoJU",
        "å¥³å­©": "m6Qyw",
        "æƒŠæ": "8W8ju",
        "å¤§ç¬‘": "d"
    };
    cnb.md = ["è‰²", "æµæ„Ÿ", "è¿™è¾¹", "å¼±", "å˜´å”‡", "äº²", "å¼€å¿ƒ", "å‘²ç‰™", "æ†¨ç¬‘", "çŒ«", "çš±çœ‰", "å¹½çµ", "è›‹ç³•", "å‘æ€’", "å¤§å“­", "å…”å­", "æ˜Ÿæ˜Ÿ", "é’Ÿæƒ…", "ç‰µæ‰‹", "å…¬é¸¡", "çˆ±æ„", "ç¦æ­¢", "ç‹—", "äº²äº²", "å‰", "ç¤¼ç‰©", "æ™•", "å‘†", "ç”Ÿç—…", "é’»çŸ³", "æ‹œ", "æ€’", "ç¤ºçˆ±", "æ±—", "å°é¸¡", "ç—›è‹¦", "æ’‡å˜´", "æƒ¶æ", "å£ç½©", "åèˆŒ", "å¿ƒç¢Ž", "ç”Ÿæ°”", "å¯çˆ±", "é¬¼è„¸", "è·³èˆž", "ç”·å­©", "å¥¸ç¬‘", "çŒª", "åœˆ", "ä¾¿ä¾¿", "å¤–æ˜Ÿ", "åœ£è¯ž"]
})();
(function() {
    var bd = NEJ.P,
        fm = bd("nej.g"),
        bA = bd("nej.j"),
        bm = bd("nej.u"),
        cnb = bd("nm.x.ek"),
        bn = bd("nm.x");
    if (bA.cG.redefine) return;
    window.GEnc = true;
    var bbZ = function(bOP) {
        var bp = [];
        bm.cv(bOP, function(bOO) {
            bp.push(cnb.emj[bOO])
        });
        return bp.join("")
    };
    var bON = bA.cG;
    bA.cG = function(bZ, bf) {
        var bl = {},
            bf = NEJ.X({}, bf),
            mb = bZ.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(bZ) && !(bf.headers && bf.headers[fm.yY] == fm.cmN) && !bf.noEnc) {
            if (mb != -1) {
                bl = bm.iO(bZ.substring(mb + 1));
                bZ = bZ.substring(0, mb)
            }
            if (bf.query) {
                bl = NEJ.X(bl, bm.gH(bf.query) ? bm.iO(bf.query) : bf.query)
            }
            if (bf.data) {
                bl = NEJ.X(bl, bm.gH(bf.data) ? bm.iO(bf.data) : bf.data)
            }
            bl["csrf_token"] = bA.hI("__csrf");
            bZ = bZ.replace("api", "weapi");
            bf.method = "post";
            delete bf.query;
            var bua = window.asrsea(JSON.stringify(bl), bbZ(["æµæ³ª", "å¼º"]), bbZ(cnb.md), bbZ(["çˆ±å¿ƒ", "å¥³å­©", "æƒŠæ", "å¤§ç¬‘"]));
            bf.data = bm.eX({
                params: bua.encText,
                encSecKey: bua.encSecKey
            })
        }
        bON(bZ, bf)
    };
    bA.cG.redefine = true
})();
(function() {})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        ej = bd("nej.p"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        eT = bd("nm.u"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        bo = bd("nm.l"),
        bck = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        bl = {
            "å¤§ç¬‘": "86",
            "å¯çˆ±": "85",
            "æ†¨ç¬‘": "359",
            "è‰²": "95",
            "äº²äº²": "363",
            "æƒŠæ": "96",
            "æµæ³ª": "356",
            "äº²": "362",
            "å‘†": "352",
            "å“€ä¼¤": "342",
            "å‘²ç‰™": "343",
            "åèˆŒ": "348",
            "æ’‡å˜´": "353",
            "æ€’": "361",
            "å¥¸ç¬‘": "341",
            "æ±—": "97",
            "ç—›è‹¦": "346",
            "æƒ¶æ": "354",
            "ç”Ÿç—…": "350",
            "å£ç½©": "351",
            "å¤§å“­": "357",
            "æ™•": "355",
            "å‘æ€’": "115",
            "å¼€å¿ƒ": "360",
            "é¬¼è„¸": "94",
            "çš±çœ‰": "87",
            "æµæ„Ÿ": "358",
            "çˆ±å¿ƒ": "33",
            "å¿ƒç¢Ž": "34",
            "é’Ÿæƒ…": "303",
            "æ˜Ÿæ˜Ÿ": "309",
            "ç”Ÿæ°”": "314",
            "ä¾¿ä¾¿": "89",
            "å¼º": "13",
            "å¼±": "372",
            "æ‹œ": "14",
            "ç‰µæ‰‹": "379",
            "è·³èˆž": "380",
            "ç¦æ­¢": "374",
            "è¿™è¾¹": "262",
            "çˆ±æ„": "106",
            "ç¤ºçˆ±": "376",
            "å˜´å”‡": "367",
            "ç‹—": "81",
            "çŒ«": "78",
            "çŒª": "100",
            "å…”å­": "459",
            "å°é¸¡": "450",
            "å…¬é¸¡": "461",
            "å¹½çµ": "116",
            "åœ£è¯ž": "411",
            "å¤–æ˜Ÿ": "101",
            "é’»çŸ³": "52",
            "ç¤¼ç‰©": "107",
            "ç”·å­©": "0",
            "å¥³å­©": "1",
            "è›‹ç³•": "337",
            18: "186",
            "åœˆ": "312",
            "å‰": "313"
        },
        ckG = function() {
            if (bj && bj.bK) {
                bj.dispatchEventalias = bj.bK
            }
        };
    ckG();
    bn.bcl = function(cJ) {
        if (!cJ || cJ.copyrightId === undefined || !!cJ.program) return false;
        if (window.GAbroad) {
            cJ.fee = 0;
            return true
        }
        if (cJ.status < 0) return true;
        var JF;
        if (typeof GCopyrights !== "undefined") JF = GCopyrights;
        try {
            if (!JF && !!top.GCopyrights) JF = top.GCopyrights
        } catch (e) {}
        if (JF) {
            var bv = bm.eg(JF, cJ.copyrightId);
            if (bv >= 0) return true
        }
        return false
    };
    bn.bcp = function() {
        var xF = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            ug = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            bOL = {
                song: "å•æ›²",
                album: "ä¸“è¾‘",
                artist: "æ­Œæ‰‹",
                playlist: "æ­Œå•",
                dj: "ç”µå°èŠ‚ç›®",
                searchsong: "å•æ›²æœç´¢",
                searchlyric: "æ­Œè¯æœç´¢",
                toplist: "æ¦œå•",
                event: "åŠ¨æ€",
                djradio: "ç”µå°",
                day: "æ¯æ—¥æ­Œæ›²æŽ¨è",
                record: "å¬æ­ŒæŽ’è¡Œæ¦œ"
            };
        var bOK = function(bN, bl, JC) {
            switch (bN) {
                case "event":
                    bl = bl.split("|");
                    return "/event?id=" + bl[0] + "&uid=" + bl[1];
                case "searchsong":
                case "searchlyric":
                    var bu = bN == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(bl) + "&type=" + bu;
                case "toplist":
                    return "/discover/toplist?id=" + bl + "&_hash=songlist-" + JC;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + JC;;
                case "record":
                    bl = bl.split("|");
                    return "/user/songs/rank?id=" + bl[0] + "&cat=" + bl[1];
                    break;
                default:
                    return "/" + bN + "?id=" + bl + "&_hash=songlist-" + JC
            }
        };
        return function(eO, JC) {
            if (!eO) return null;
            var FY = eO.fid || (eO.type != 18 ? eO.type : null),
                bcD = eO.fdata || eO.rid,
                bub = eO.page || eO.fhref;
            var bN = ug[FY];
            if (!bN) {
                var vD = (bub || "").match(xF);
                if (vD) bN = vD[1]
            }
            if (!bN) return null;
            return {
                title: bOL[bN],
                link: !ug[FY] ? bub : bOK(bN, bcD, JC),
                fid: FY,
                fdata: bcD
            }
        }
    }();
    bn.Qh = function(oI) {
        var eQ = oI;
        if (typeof GUser !== "undefined" && GUser.userId > 0) eQ = GUser;
        return eQ
    };
    bn.ic = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    bn.Ft = function() {
        var xF = /#(.*?)$/;
        return function(hs) {
            var jq = hs === false ? location : top.location;
            return xF.test(jq.href) ? RegExp.$1 : ""
        }
    }();
    bn.Qj = function() {
        var buj = bn.bcX().supported,
            yw = bb.ef("audio"),
            buk = yw.canPlayType && yw.canPlayType("audio/mpeg");
        if (ej.Hj.mac) {
            if (buk) return 2;
            if (buj) return 1;
            return 0
        } else {
            if (buj) return 1;
            if (buk) return 2;
            return 0
        }
    };
    bn.bcX = function() {
        var gR, bda = !1,
            bdb = "";
        if (ej.ek.browser == "ie") {
            try {
                gR = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gR = null
            }
            if (gR) {
                bda = !0;
                bdb = gR.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gR = navigator.plugins["Shockwave Flash"];
                if (gR) {
                    bda = !0;
                    bdb = gR.description
                }
            }
        }
        return {
            supported: bda,
            version: bdb
        }
    };
    bn.qc = function() {
        return "ç½‘æ˜“äº‘éŸ³ä¹"
    };
    bn.bOD = function() {
        return bl
    };
    bn.bum = function(ew) {
        var bB = bl[ew];
        return bB == null ? "" : bck.replace("{ID}", bB)
    };
    bn.rP = function(cm, eG, bdo) {
        if (!cm) return "";
        if (!!bdo) {
            cm = bn.bOA(cm)
        }
        return bn.buo(bn.bOw(cm, eG))
    };
    bn.ciY = function() {
        var chj = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼š])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            ciV = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            ciZ = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            cja = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cjb = function(hO, ciU) {
            hO = bSH(hO);
            if (!!ciU) {
                hO = hO.replace(chj.MLINE, "\n\n").replace(chj.LING, "</br>")
            }
            hO = bn.buo(hO);
            return hO
        };
        var bSH = function(cm) {
            return bm.Ez(ciZ, cm)
        };
        return function(hO, bf, kb) {
            bf = bf || {};
            kb = kb || {};
            kb.actHash = {};
            var cjc = !!bf.parseLink,
                cjd = !!bf.parseAct,
                cje = bf.linkTpl || ciV.LINK,
                cjf = bf.atTpl || ciV.AT,
                cjg = bf.actTpl || ciV.ACT,
                ciU = !!bf.keepSpace,
                ciT = bf.linkKlass || "s-fc7";
            cjm = bf.actBiJson || "";
            if (!hO) return "";
            hO = hO.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var bKs = cja[cjc + 2 * cjd],
                eh = chj[bKs],
                cH = null,
                nE = null,
                ij = 0,
                cjl = "",
                cjk = "";
            var bJF = [];
            eh.lastIndex = 0;
            while (cH = eh.exec(hO)) {
                var vZ = {
                    html: "",
                    before: cH.index - 1,
                    after: cH.index + cH[0].length
                };
                if (cH[1]) {
                    var nE = cH[2].replace(/[^\x00-\xff]/g, "**");
                    if (nE.length < 4 || nE.length > 32) {} else {
                        var bJS = bb.gs(cjf);
                        vZ.html = bb.dg(bJS, {
                            value: bSH(cH[2]),
                            url: encodeURI("/user/home?nickname=" + cH[2]),
                            klass: ciT
                        });
                        bJF.push(vZ)
                    }
                } else if (cH.length > 8 && cH[4]) {
                    var bJS = bb.gs(cje);
                    vZ.html = bb.dg(bJS, {
                        value: bSH(cH[4]),
                        url: encodeURI(cH[4]),
                        klass: ciT
                    });
                    bJF.push(vZ)
                } else {
                    var ciX = bKs == "ACT_NOLINK" ? 4 : 9;
                    var bJS = bb.gs(cjg);
                    vZ.html = bb.dg(bJS, {
                        value: bSH(cH[ciX]),
                        klass: ciT
                    });
                    bJF.push(vZ);
                    kb.actHash[cH[ciX].slice(1, -1)] = true
                }
            }
            var cjh = bJF.length,
                oI = {
                    before: hO.length - 1,
                    after: 0
                },
                ciS = "";
            for (var i = 0; i <= cjh; i++) {
                var mO, kp;
                mO = (bJF[i - 1] || oI).after;
                kp = (bJF[i] || oI).before;
                if (kp >= mO && mO >= 0 && kp <= hO.length - 1) {
                    ciS += cjb(hO.substring(mO, kp + 1), ciU)
                }
                if (bJF[i]) {
                    ciS += bJF[i].html
                }
            }
            return ciS
        }
    }();
    bn.bOA = function() {
        var eh = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(cm) {
            return (cm || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(eh, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>ç½‘é¡µé“¾æŽ¥</a>'
            })
        }
    }();
    bn.bOw = function() {
        var eh = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var gO = function(nE, eG) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(nE) + '" class="' + (eG || "") + '">@' + nE + "</a>"
        };
        return function(cm, eG) {
            return (cm || "").replace(eh, function($0, $1) {
                return gO($1, eG)
            })
        }
    }();
    bn.buo = function() {
        var eh = /\[(.*?)\]/g;
        return function(cm) {
            return (cm || "").replace(eh, function($1, $2) {
                var bZ = bn.bum($2);
                return !bZ ? $1 : '<img src="' + bZ + '"/>'
            })
        }
    }();
    bn.xE = function(bC, eG) {
        bb.cU(bC, eG) ? bb.bH(bC, eG) : bb.bJ(bC, eG)
    };
    bn.Qm = function(dU, iM) {
        dU = bb.bG(dU);
        iM = bb.bG(iM);
        if (!dU || !iM) return !1;
        for (iM = iM.parentNode; !!iM && iM != dU; iM = iM.parentNode);
        return iM == dU
    };
    bn.nJ = function() {
        var bup = function(gk) {
            return (gk < 10 ? "0" : "") + gk
        };
        return function(rR) {
            rR = parseInt(rR) || 0;
            if (!rR) return "00:00";
            var bOu = Math.floor(rR % 60),
                bOp = Math.floor(rR / 60);
            return bup(bOp) + ":" + bup(bOu)
        }
    }();
    bn.vj = function(gD, uY) {
        if (!gD || gD.length == 0) return "";
        uY = uY || "/";
        var cH = [];
        for (var i = gD.length - 1; i >= 0; i--) {
            cH.unshift(gD[i].name)
        }
        return cH.join(uY)
    };
    bn.ph = function() {
        var Jr = function(hX, eG, dU) {
            if (!hX || !hX.name) return "";
            if (!hX.id) return '<span class="' + eG + '">' + bm.fd(hX.name) + "</span>";
            return "<a" + (dU ? ' target="_blank"' : "") + ' class="' + eG + '" href="/artist?id=' + hX.id + '" hidefocus="true">' + bm.fd(hX.name) + "</a>"
        };
        return function(gD, bX, uY, dU) {
            if (!gD || !gD.length) return "";
            uY = uY || "/";
            bX = bX || "";
            var hJ = [];
            for (var i = 0, bk = [], vk = [], iW; i < gD.length; ++i) {
                hJ.push(gD[i].name);
                if (!gD[i] || gD[i].id <= 0) {
                    vk.push(gD[i]);
                    continue
                }
                if (bm.hC(bX)) {
                    iW = bX(gD[i])
                } else {
                    iW = Jr(gD[i], bX, dU)
                }!!iW && bk.push(iW)
            }
            for (var i = 0, iW; i < vk.length; ++i) {
                if (bm.hC(bX)) {
                    iW = bX(vk[i])
                } else {
                    iW = Jr(vk[i], bX, dU)
                }!!iW && bk.push(iW)
            }
            return '<span title="' + hJ.join(uY) + '">' + bk.join(uY) + "</span>"
        }
    }();
    bn.vM = function(fS) {
        return !!fS && /^[0-9]{11}$/.test(fS)
    };
    bn.ceU = function(fS) {
        if (!bn.vM(fS)) return fS;
        return fS.substring(0, 3) + "****" + fS.substr(7)
    };
    bn.jG = function() {
        var eh = /^\s+$/g;
        return function(iN) {
            return !iN || eh.test(iN)
        }
    }();
    bn.Fp = function() {
        var beC = /[^\x00-\xfff]/g;
        return function(iN) {
            var bOl = iN.match(beC) || [],
                gx = bOl.length;
            return iN.length + gx
        }
    }();
    bn.AW = function() {
        var beC = /[^\x00-\xfff]/;
        return function(iN, hV) {
            for (var i = 0, len = iN.length; i < len && hV > 0; i++) {
                if (beC.test(iN.charAt(i))) {
                    hV -= 2;
                    if (hV < 0) {
                        break
                    }
                } else {
                    hV -= 1
                }
            }
            return iN.substring(0, i)
        }
    }();
    bn.AX = function(iN, hV, Nr) {
        hV = hV || 10;
        Nr = Nr || nej.p.ek.engine == "trident" && parseInt(nej.p.ek.release) < 5;
        if (Nr && bn.Fp(iN) > hV) {
            return bn.AW(iN, hV) + "..."
        } else {
            return iN
        }
    };
    bn.cjv = function(bh) {
        return bh === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(bh.type || bh.href || ~bh.tabIndex)
    };
    bn.bOj = function(be, dU) {
        if (!be || !dU) return !0;
        var bh, bu = be.type.toLowerCase();
        if (bu == "mouseout") {
            bh = be.relatedTarget || be.toElement
        } else if (bu == "mouseover") {
            bh = be.relatedTarget || be.fromElement
        }
        return !bh || bh !== dU && !bn.Qm(dU, bh)
    };
    bn.rx = function() {
        ce = {};
        return function(bh, eL) {
            var bB = bb.lr(bh),
                bN = "hover-" + bB;
            if (!eL || !bB || !!ce[bN]) return;
            ce[bN] = !0;
            bj.bt(bB, "mouseover", function() {
                var beR = bb.bP(bh, "hshow") || [];
                var beU = bb.bP(bh, "icn-dislike") || [];
                bb.bJ(bB, "z-hover");
                bb.ch(beR[0], "display", "block");
                bb.ch(beU[0], "display", "block")
            });
            bj.bt(bB, "mouseout", function() {
                var beR = bb.bP(bh, "hshow") || [];
                var beU = bb.bP(bh, "icn-dislike") || [];
                bb.bH(bB, "z-hover");
                bb.ch(beR[0], "display", "none");
                bb.ch(beU[0], "display", "none")
            })
        }
    }();
    bn.buz = function() {
        var cE = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(iN) {
            return bm.Ez(cE, iN)
        }
    }();
    bn.sb = function(cT) {
        if (bm.RQ(cT)) cT = cT.getTime();
        var jm = new Date,
            Fo = jm.getTime() - cT;
        if (Fo <= 6e4) return "åˆšåˆš";
        var Qq = jm.getHours() * 36e5 + jm.getMinutes() * 6e4 + jm.getSeconds() * 1e3;
        if (Fo <= Qq) {
            if (Fo < 36e5) {
                var bOh = Math.floor(Fo / 6e4);
                return bOh + "åˆ†é’Ÿå‰"
            }
            return bm.nc(cT, "HH:mm")
        } else {
            if (Fo < Qq + 864e5) {
                return "æ˜¨å¤©" + bm.nc(cT, "HH:mm")
            } else {
                var hq = jm.getFullYear(),
                    bOg = new Date(hq, 0, 1);
                var Qq = jm.getTime() - bOg.getTime();
                if (Fo < Qq) {
                    return bm.nc(cT, "Mæœˆdæ—¥ HH:mm")
                }
                return bm.nc(cT, "yyyyå¹´Mæœˆdæ—¥")
            }
        }
    };
    bn.Fn = function() {
        var eh = /\{(.*?)\}/gi;
        return function(rl, bl) {
            return (rl || "").replace(eh, function($1, $2) {
                var bD = bl[$2];
                return bD == null ? $1 : bD
            })
        }
    }();
    bn.fX = function() {
        var cn = Array.prototype.slice.call(arguments, 0),
            rl = cn.shift();
        if (rl) {
            return rl.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < cn.length ? cn[$2] : $1
            })
        }
        return ""
    };
    bn.Fk = function(bk, eG, lp) {
        return "";
        lp = lp || " - ";
        if (bk && bk.length) {
            return lp + (!!eG ? '<span class="' + eG + '">' + bk[0] + "</span>" : bk[0])
        }
        return ""
    };
    bn.buB = function() {
        if (window.getSelection) {
            var qv = window.getSelection();
            if (qv && qv.focusNode && qv.focusNode.tagName) {
                var xW = bb.eu(qv.focusNode);
                for (var i = 0, wE; i < xW.length; ++i) {
                    wE = xW[i].tagName;
                    if (!wE) continue;
                    wE = wE.toLowerCase();
                    if (wE == "textarea" || wE == "input") return !0
                }
            }
        } else if (document.selection) {
            var dQ = document.selection.createRange();
            if (dQ) {
                var bh = dQ.parentElement();
                if (bh && bh.tagName) {
                    var wE = bh.tagName.toLowerCase();
                    if (wE == "textarea" || wE == "input") return !0
                }
            }
        }
        return !1
    };
    bn.yI = function(gq) {
        if (/^[A-Z]\:\\/i.test(gq)) {
            gq = gq.split("\\")
        } else {
            gq = gq.split("/")
        }
        gq = gq[gq.length - 1];
        return gq
    };
    bn.bNZ = function() {
        var Ad = [13, 17, 34, 19, 18, 21];
        return function(bB) {
            var cH = (bB || "").split("_");
            return {
                type: Ad[cH[2]] || -1,
                id: cH[3] || ""
            }
        }
    }();
    bn.bgj = function(eQ) {
        if (4 == eQ.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (eQ.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (eQ.expertTags && eQ.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    bn.Jd = function(gk) {
        gk += "";
        if (gk) {
            return gk.substr(0, 3) + "****" + gk.substr(gk.length - 4)
        }
    };
    bn.ceW = function(bv, dL) {
        return (bv % dL + dL) % dL
    };
    bn.buD = function() {
        var Ad = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function(bB) {
            var cH = (bB || "").split("_"),
                bp = {
                    type: Ad[cH[2]] || -1,
                    id: cH[3] || ""
                };
            if (bp.type == "event") {
                bp.uid = cH[4] || "";
                return "/" + bp.type + "?id=" + bp.id + "&uid=" + bp.uid
            }
            return "/" + bp.type + "?id=" + bp.id
        }
    }();
    bn.buE = function() {
        var Ad = ["æ­Œå•", "ç”µå°èŠ‚ç›®", "åŠ¨æ€", "ä¸“è¾‘", "å•æ›²", "MV", "ä¸“æ æ–‡ç« "];
        return function(bB) {
            var cH = (bB || "").split("_");
            return Ad[cH[2]] || "èµ„æº"
        }
    }();
    bn.bNL = function(cN) {
        var qs = cN.length > 0 ? cN.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    bn.buK = function(xb, IX) {
        var Qw = 0,
            gf = new Array;
        bm.cv(xb, function(bZ, bv) {
            var gQ = bb.ef("img");
            gQ.src = bZ;
            bj.bt(gQ, "load", function(bv, be) {
                gf[bv] = 1;
                Qw++;
                if (Qw == xb.length) IX(xb, gf)
            }.bi(this, bv));
            bj.bt(gQ, "error", function(be, bv) {
                gf[bv] = 0;
                Qw++;
                if (Qw == xb.length) IX(xb, gf)
            }.bi(this, bv))
        })
    };
    bn.buL = function(bk, eV) {
        var bp = [];
        bm.cv(bk, function(bw, bv, rD) {
            bp.push(eV(bw, bv, rD))
        });
        return bp
    };
    bn.bNF = function(cm) {
        return bm.fd((cm || "").replace(/\s{2,}/g, " ").trim())
    };
    bn.bgZ = function(co) {
        if (co.transNames && co.transNames.length) {
            return co.transNames[0]
        } else if (co.alias && co.alias.length) {
            return co.alias[0]
        }
    };
    bn.buU = function(Kq) {
        if (Kq) {
            return Kq.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    bn.bhc = function(bh) {
        var bh = bb.bG(bh),
            ew = bh && bh.getElementsByTagName("textarea")[0],
            bN = bb.bz(bh, "key"),
            bhj = bb.bz(bh, "simple") == "1",
            bva = bq.uH.iE();
        if (!(bh && ew && bN)) return;
        if (bhj) {
            bva.rq(bN, bn.Cf(JSON.parse(ew.value)))
        } else {
            bva.rq(bN, JSON.parse(ew.value || ew.defaultValue))
        }
        bh.innerHTML = "";
        return bN
    };
    bn.bNw = function(ow) {
        if (!ow.onbeforelistload) {
            ow.onbeforelistload = function(be) {
                be.value = '<div class="u-load s-fc4"><i class="icn"></i> åŠ è½½ä¸­...</div>'
            }
        }
        if (!ow.onemptylist) {
            ow.onemptylist = function(be) {
                be.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (ow.emptyMsg || "æš‚æ—¶è¿˜æ²¡æœ‰æ•°æ®") + "</h3></div>"
            }
        }
        return ow
    };
    bn.Cf = function(im) {
        if (bm.hh(im)) {
            var kb = [];
            bm.cv(im, function(bhj) {
                kb.push(bvd(bhj))
            });
            return kb
        } else {
            return bvd(im)
        }

        function bvd(im) {
            if (!im) return null;
            var kb = {
                album: im.al,
                alias: im.alia || im.ala || [],
                artists: im.ar || [],
                commentThreadId: "R_SO_4_" + im.id,
                copyrightId: im.cp || 0,
                duration: im.dt || 0,
                id: im.id,
                mvid: im.mv || 0,
                name: im.name || "",
                cd: im.cd,
                position: im.no || 0,
                ringtone: im.rt,
                rtUrl: im.rtUrl,
                status: im.st || 0,
                pstatus: im.pst || 0,
                fee: im.fee || 0,
                version: im.v || 0,
                eq: im.eq,
                songType: im.t || 0,
                mst: im.mst,
                score: im.pop || 0,
                ftype: im.ftype,
                rtUrls: im.rtUrls,
                transNames: im.tns,
                privilege: im.privilege,
                lyrics: im.lyrics
            };
            return kb
        }
    };
    bn.ceX = function() {
        var bh = bb.oZ('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>åˆ†äº«æ‰“ä¸å¼€ï¼Ÿ</h3>" + '<p>è¯·ç‚¹å‡»å³ä¸Šè§’<br>é€‰æ‹©<span class="s-fc5">â€œåˆ†äº«åˆ°...â€</span></p>' + "</div></div></div>");
        document.body.appendChild(bh);
        bj.bt(bh, "click", function(be) {
            bj.cu(be);
            bb.dW(bh)
        })
    };
    bn.nW = function(dE) {
        if (dE < 1e5) {
            return dE
        } else {
            return Math.floor(dE / 1e4) + "ä¸‡"
        }
    };
    bn.ue = function(dE, ew) {
        return "<i>" + (dE ? "(" + dE + ")" : ew) + "</i>"
    };
    bn.bvi = function(bu, hU) {
        var bf = {};
        if (!bm.qj(hU)) {
            return bf
        }
        switch (parseInt(bu)) {
            case 17:
                bf.title = hU.name;
                bf.author = (hU.radio || []).name;
                bf.picUrl = hU.coverUrl;
                bf.category = hU.radio.category;
                break;
            case 19:
                bf.title = hU.name;
                bf.author = bn.vj(hU.artists);
                bf.authors = bn.vj(hU.artists, " / ");
                bf.picUrl = hU.picUrl;
                break;
            case 13:
                bf.title = hU.name;
                bf.author = (hU.creator || []).nickname;
                bf.picUrl = hU.coverImgUrl;
                break;
            case 18:
                bf.title = hU.name;
                bf.author = bn.vj(hU.artists);
                bf.picUrl = (hU.album || []).picUrl;
                break;
            case 20:
                bf.title = hU.name;
                bf.author = "";
                bf.picUrl = hU.img1v1Url;
                break;
            case 21:
                bf.title = hU.name;
                bf.author = hU.artistName;
                bf.authors = bn.vj(hU.artists, " / ");
                bf.picUrl = hU.newCover || hU.cover;
                break;
            case 70:
                bf.title = hU.name;
                bf.author = (hU.dj || []).nickname;
                bf.picUrl = hU.picUrl;
                bf.category = hU.category;
                break;
            default:
                break
        }
        return bf
    };
    bn.bvk = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    bn.cnX = function(cbv, IU) {
        if (!cbv || !IU) return false;
        if (cbv == IU) return true;
        return bn.cnX(cbv, IU.parentNode)
    };
    bn.chg = function(gO, bes, bf) {
        var dB, cn, bp;
        var zn = null;
        var SY = 0;
        if (!bf) bf = {};
        var chf = function() {
            SY = bf.leading === false ? 0 : +(new Date);
            zn = null;
            bp = gO.apply(dB, cn);
            if (!zn) dB = cn = null
        };
        return function() {
            var jm = +(new Date);
            if (!SY && bf.leading === false) SY = jm;
            var byj = bes - (jm - SY);
            dB = this;
            cn = arguments;
            if (byj <= 0 || byj > bes) {
                if (zn) {
                    clearTimeout(zn);
                    zn = null
                }
                SY = jm;
                bp = gO.apply(dB, cn);
                if (!zn) dB = cn = null
            } else if (!zn && bf.trailing !== false) {
                zn = setTimeout(chf, byj)
            }
            return bp
        }
    };
    bn.cdX = function(gO, bes, tY) {
        var zn, cn, dB, bqs, bp;
        var chf = function() {
            var ij = new Date - bqs;
            if (ij < bes && ij >= 0) {
                zn = setTimeout(chf, bes - ij)
            } else {
                zn = null;
                if (!tY) {
                    bp = gO.apply(dB, cn);
                    if (!zn) dB = cn = null
                }
            }
        };
        return function() {
            dB = this;
            cn = arguments;
            bqs = new Date;
            var bVv = tY && !zn;
            if (!zn) zn = setTimeout(chf, bes);
            if (bVv) {
                bp = gO.apply(dB, cn);
                dB = cn = null
            }
            return bp
        }
    };
    bn.bah = function(bh, jJ) {
        if (bh) {
            var bh = bh.firstElementChild;
            if (bh) {
                bh.firstElementChild && (bh = bh.firstElementChild);
                bh.setAttribute("xlink:href", "/style/pc/svg/" + jJ)
            }
        }
    };
    bn.cji = function(hJ) {
        if (!hJ || !hJ.length) {
            return
        }
        hJ = /^#(.+?)#$/.exec(hJ)[1];
        hJ = hJ.replace(/\s/g, " ");
        bA.cG("/api/act/detail", {
            type: "json",
            method: "post",
            data: bm.eX({
                actname: hJ
            }),
            onload: function(bV) {
                if (!bV || bV.code != 200 || !bV.act) {
                    bo.ci.bR({
                        type: 2,
                        tip: "è¯¥è¯é¢˜æš‚æœªåˆ›å»º"
                    })
                } else {
                    location.dispatch2("/activity?id=" + bV.act.actId)
                }
            },
            onerror: function(dc) {
                bo.ci.bR({
                    type: 2,
                    tip: "æ“ä½œå¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•"
                })
            }
        })
    };
    bn.cnX = function(cbv, IU) {
        if (!cbv || !IU) return false;
        if (cbv == IU) return true;
        return bn.cnX(cbv, IU.parentNode)
    };
    bb.crU = function(cQ, qK) {
        if (!cQ) return null;
        if (!qK) return cQ.firstChild;
        return bb.bP(cQ, qK)[0]
    };
    bn.ctH = function(iN) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(iN)
    }
})();
(function() {
    function bNj() {
        var yE = function(jR) {
            if (jR < -128) {
                return yE(128 - (-128 - jR))
            } else if (jR >= -128 && jR <= 127) {
                return jR
            } else if (jR > 127) {
                return yE(-129 + jR - 127)
            } else {
                throw new Error("1001")
            }
        };
        var bNi = function(jR, cq) {
            return yE(jR + cq)
        };
        var bNh = function(QF, biw) {
            if (QF == null) {
                return null
            }
            if (biw == null) {
                return QF
            }
            var pJ = [];
            var bNg = biw.length;
            for (var i = 0, cF = QF.length; i < cF; i++) {
                pJ[i] = bNi(QF[i], biw[i % bNg])
            }
            return pJ
        };
        var bNc = function(QM) {
            if (QM == null) {
                return QM
            }
            var pJ = [];
            var bMX = QM.length;
            for (var i = 0, cF = bMX; i < cF; i++) {
                pJ[i] = yE(0 - QM[i])
            }
            return pJ
        };
        var bMW = function(biP, Iv) {
            biP = yE(biP);
            Iv = yE(Iv);
            return yE(biP ^ Iv)
        };
        var bvv = function(Iu, bjf) {
            if (Iu == null || bjf == null || Iu.length != bjf.length) {
                return Iu
            }
            var pJ = [];
            var bMR = Iu.length;
            for (var i = 0, cF = bMR; i < cF; i++) {
                pJ[i] = bMW(Iu[i], bjf[i])
            }
            return pJ
        };
        var bvw = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var bMO = function(ej) {
            var ES = [];
            ES.push(bvw[ej >>> 4 & 15]);
            ES.push(bvw[ej & 15]);
            return ES.join("")
        };
        var bMN = function(Cv) {
            var cF = Cv.length;
            if (Cv == null || cF < 0) {
                return new String("")
            }
            var ES = [];
            for (var i = 0; i < cF; i++) {
                ES.push(bMO(Cv[i]))
            }
            return ES.join("")
        };
        var bvx = function(QT) {
            if (QT == null || QT.length == 0) {
                return QT
            }
            var bjy = new String(QT);
            var pJ = [];
            var cF = bjy.length / 2;
            var cq = 0;
            for (var i = 0; i < cF; i++) {
                var nS = parseInt(bjy.charAt(cq++), 16) << 4;
                var nP = parseInt(bjy.charAt(cq++), 16);
                pJ[i] = yE(nS + nP)
            }
            return pJ
        };
        var bML = function(dT) {
            if (dT == null || dT == undefined) {
                return dT
            }
            var Il = encodeURIComponent(dT);
            var Cv = [];
            var bvy = Il.length;
            for (var i = 0; i < bvy; i++) {
                if (Il.charAt(i) == "%") {
                    if (i + 2 < bvy) {
                        Cv.push(bvx(Il.charAt(++i) + "" + Il.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    Cv.push(Il.charCodeAt(i))
                }
            }
            return Cv
        };
        var bME = function(uF) {
            var cA = 0;
            cA += (uF[0] & 255) << 24;
            cA += (uF[1] & 255) << 16;
            cA += (uF[2] & 255) << 8;
            cA += uF[3] & 255;
            return cA
        };
        var cfl = function(cA) {
            var uF = [];
            uF[0] = cA >>> 24 & 255;
            uF[1] = cA >>> 16 & 255;
            uF[2] = cA >>> 8 & 255;
            uF[3] = cA & 255;
            return uF
        };
        var bMz = function(eR, Vq, cF) {
            var kb = [];
            if (eR == null || eR.length == 0) {
                return kb
            }
            if (eR.length < cF) {
                throw new Error("1003")
            }
            for (var i = 0; i < cF; i++) {
                kb[i] = eR[Vq + i]
            }
            return kb
        };
        var Vr = function(eR, Vq, Re, bMx, cF) {
            if (eR == null || eR.length == 0) {
                return Re
            }
            if (Re == null) {
                throw new Error("1004")
            }
            if (eR.length < cF) {
                throw new Error("1003")
            }
            for (var i = 0; i < cF; i++) {
                Re[bMx + i] = eR[Vq + i]
            }
            return Re
        };
        var bMw = function(cF) {
            var cH = [];
            for (var i = 0; i < cF; i++) {
                cH[i] = 0
            }
            return cH
        };
        var bMv = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var EH = 64;
        var Rk = 64;
        var bvB = 4;
        var bMq = function(pu) {
            var bvF = [];
            if (pu == null || pu == undefined || pu.length == 0) {
                return bMw(Rk)
            }
            if (pu.length >= Rk) {
                return bMz(pu, 0, Rk)
            } else {
                for (var i = 0; i < Rk; i++) {
                    bvF[i] = pu[i % pu.length]
                }
            }
            return bvF
        };
        var bMj = function(Ru) {
            if (Ru == null || Ru.length % EH != 0) {
                throw new Error("1005")
            }
            var VJ = [];
            var cq = 0;
            var bMh = Ru.length / EH;
            for (var i = 0; i < bMh; i++) {
                VJ[i] = [];
                for (var j = 0; j < EH; j++) {
                    VJ[i][j] = Ru[cq++]
                }
            }
            return VJ
        };
        var bMb = function(bvQ) {
            var nS = bvQ >>> 4 & 15;
            var nP = bvQ & 15;
            var cq = nS * 16 + nP;
            return bMv[cq]
        };
        var bvS = function(VU) {
            if (VU == null) {
                return null
            }
            var bvU = [];
            for (var i = 0, cF = VU.length; i < cF; i++) {
                bvU[i] = bMb(VU[i])
            }
            return bvU
        };
        var bLS = function(ED, pu) {
            if (ED == null) {
                return null
            }
            if (ED.length == 0) {
                return []
            }
            if (ED.length % EH != 0) {
                throw new Error("1005")
            }
            pu = bMq(pu);
            var Wc = pu;
            var Wd = bMj(ED);
            var HL = [];
            var bLR = Wd.length;
            for (var i = 0; i < bLR; i++) {
                var Wm = bvS(Wd[i]);
                Wm = bvS(Wm);
                var Wn = bvv(Wm, Wc);
                var bLO = bNh(Wn, bNc(Wc));
                Wn = bvv(bLO, pu);
                Vr(Wn, 0, HL, i * EH, EH);
                Wc = Wd[i]
            }
            var bvV = [];
            Vr(HL, HL.length - bvB, bvV, 0, bvB);
            var cF = bME(bvV);
            if (cF > HL.length) {
                throw new Error("1006")
            }
            var pJ = [];
            Vr(HL, 0, pJ, 0, cF);
            return pJ
        };
        var bLL = function(Rz, bN) {
            if (Rz == null) {
                return null
            }
            var bvW = new String(Rz);
            if (bvW.length == 0) {
                return []
            }
            var ED = bvx(bvW);
            if (bN == null || bN == undefined) {
                throw new Error("1007")
            }
            var pu = bML(bN);
            return bLS(ED, pu)
        };
        this.bLB = function(Rz, bN) {
            var bLA = bLL(Rz, bN);
            var Ww = new String(bMN(bLA));
            var RA = [];
            var bLr = Ww.length / 2;
            var cq = 0;
            for (var i = 0; i < bLr; i++) {
                RA.push("%");
                RA.push(Ww.charAt(cq++));
                RA.push(Ww.charAt(cq++))
            }
            return RA.join("")
        }
    }
    window.settmusic = (new bNj).bLB
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bN = "Search-tracks_",
        bc;
    bq.fX({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(bV) {
                return bV
            },
            onerror: function(bV, bf) {
                if (bV.code == 407) {
                    bf.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(bf, cj) {
                window.log && window.log("searchkeywordclient", {
                    type: this.bLp(parseInt(bf.data.type)) || "suggest",
                    keyword: bf.data.s,
                    offset: bf.offset
                })
            },
            format: function(bV, bf) {
                if (bV.abroad) {
                    try {
                        bV.result = JSON.parse(decodeURIComponent(settmusic(bV.result, bq.sk)))
                    } catch (e) {}
                }
                bV.result = bV.result || {};
                var bk, dL, rX = [],
                    ty = bf.data.s || "",
                    gM = bf.data.limit,
                    bu = parseInt(bf.data.type) || 1,
                    bp = bV.result;
                switch (bu) {
                    case 1:
                        bk = this.bwC(bp.songs, bf.data.hlpretag, bf.data.hlposttag);
                        dL = bp.songCount;
                        break;
                    case 10:
                        bk = bp.albums;
                        dL = bp.albumCount;
                        break;
                    case 100:
                        bk = bp.artists;
                        dL = bp.artistCount;
                        break;
                    case 1e3:
                        bk = bp.playlists;
                        dL = bp.playlistCount;
                        break;
                    case 1002:
                        bk = bp.userprofiles;
                        dL = bp.userprofileCount;
                        break;
                    case 1004:
                        bk = bp.mvs;
                        dL = bp.mvCount;
                        break;
                    case 1006:
                        bk = this.bwC(bp.songs, bf.data.hlpretag, bf.data.hlposttag);
                        dL = bp.songCount;
                        break;
                    case 1009:
                        var pK = bp.djRadios;
                        if (!!pK) {
                            bm.cv(pK, function(bD, bv, bLj) {
                                bD.xid = bD.id;
                                bD.id = bD.id + "_rad"
                            });
                            if (pK.length) {
                                this.rq("radio_search-" + bf.data.s, pK)
                            }
                        }
                        dL = Math.min(bp.djprogramCount, 500);
                        bk = bp.djprograms || [];
                        if (bf.data.isPub) {
                            bm.nt(pK, function(bD, bv, bLj) {
                                bD.stype = 1;
                                bk.unshift(bD)
                            });
                            dL = Math.min(bk.length, 500)
                        }
                        break
                }
                this.bK("onsearchload", bV);
                if (bk && bk.length) {
                    for (var i = 0; i < gM; i++) {
                        if (i < bk.length) {
                            rX.push(bk[i])
                        } else {
                            rX.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(dL || 0, ty.length < 3 ? 500 : 5e3),
                    list: rX
                }
            },
            onerror: function(bV, bf) {
                bf.onload(bf, []);
                if (bm.hC(bf.onerror)) {
                    bf.onerror(bV)
                }
            }
        }
    });
    bq.Af = NEJ.C();
    bc = bq.Af.bU(bq.ik);
    bc.dv = function() {
        this.dC()
    };
    bc.bLh = function(bN, bf) {
        if (!bN) return;
        if (!!this.bwJ) bA.rV(this.bwJ);
        this.bwJ = this.dJ("search-suggest", NEJ.X({
            data: {
                s: bN,
                limit: 8
            }
        }, bf))
    };
    bc.bKW = function(bN, bf) {
        if (!bN) return;
        this.dJ("search-multimatch", NEJ.X({
            data: {
                s: bN
            }
        }, bf))
    };
    bc.bwC = function() {
        var bKV = function(iz, bwL, bwO) {
            var bKO = iz.match(new RegExp(bwL + "(.+?)" + bwO, "gi")),
                dE = 0;
            bm.cv(bKO, function(bw) {
                dE += bw.replace(new RegExp(bwL, "g"), "").replace(new RegExp(bwO, "g"), "").length
            });
            return dE
        };
        return function(jl, bKN, bKL) {
            var bwQ = [];
            bm.cv(jl, function(co, cA) {
                co = bn.Cf(co);
                var RP = co.lyrics || [],
                    gx = RP.length,
                    kr = 0,
                    dL = 4,
                    RS = {
                        l: 0,
                        v: 0
                    },
                    Xj;
                if (gx > 4) {
                    bm.cv(RP, function(iz, bv) {
                        var bwR = bKV(iz, bKN, bKL);
                        if (bwR > RS.v) {
                            RS.v = bwR;
                            RS.l = bv
                        }
                    });
                    kr = RS.l;
                    kr = Math.max(kr, 0);
                    Xj = gx - kr - 4;
                    if (Xj < 0) kr += Xj;
                    co.lrcAbstractEnd = kr + dL - 1
                } else {
                    co.lrcAbstractEnd = gx - 1
                }
                co.lrcAbstractStart = kr;
                co.indexId = (RP && RP.length ? "L" : "NL") + co.id;
                bwQ.push(co)
            });
            return bwQ
        }
    }();
    bc.bLp = function(bu) {
        switch (bu) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bA = bd("nej.j"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bQ = bd("nm.m"),
        bo = bd("nm.l"),
        ez = bd("nm.i"),
        bL = bd("nm.m.sch"),
        bc, bO;
    var Xs = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3
    };
    bL.Hh = NEJ.C();
    bc = bL.Hh.bU(bI.dZ);
    bc.dv = function(bh) {
        this.dC();
        this.dm(bh);
        this.bS = bq.Af.iE()
    };
    bc.dm = function(bh) {
        this.bs = bh;
        var bk = bb.bP(bh, "j-flag");
        this.fK = bk[0];
        this.Xx = bk[1];
        this.du = bk[2];
        this.ni = bk[3];
        bj.bt(this.fK, "input", this.gv.bi(this));
        bj.bt(this.fK, "keyup", this.gv.bi(this));
        bj.bt(this.fK, "focus", this.gI.bi(this));
        bj.bt(this.Xx, "click", this.gI.bi(this));
        bj.bt(this.fK, "blur", this.XH.bi(this));
        bj.bt(this.du, "click", this.RV.bi(this));
        bj.bt(this.bs, "keydown", this.XJ.bi(this));
        bj.bt(this.bs, "keypress", this.RX.bi(this));
        bj.bt(this.ni, "mouseover", this.GZ.bi(this));
        bj.bt(this.ni, "mouseout", this.GZ.bi(this));
        if (this.fK.value) {
            this.fK.value = ""
        }
        if (this.fK.style.opacity != null) {
            this.fK.style.opacity = 1
        }
    };
    bc.gv = function(be) {
        if (be.type == "keyup" && be.keyCode == 8 || be.keyCode == 46) {
            this.AG()
        } else if (be.type == "input" || be.type == "propertychange") {
            setTimeout(this.AG.bi(this), 0)
        }
    };
    bc.gI = function() {
        this.zq(this.Xx, !1);
        bb.bJ(this.bs, "m-srch-fcs");
        this.fK.focus();
        this.AG();
        bb.bJ(bb.bP("g-topbar", "j-showoff")[0], "f-hide")
    };
    bc.XH = function() {
        if (!this.fK.value) {
            this.zq(this.Xx, !0)
        }
        var AI = bb.bP(this.ni, "slt");
        if (this.Sd(this.ni) && AI.length > 0 && bb.bz(AI[0], "type")) {
            var jJ = AI[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(jJ)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.fK.value
                })
            }
            this.XS(AI[0].href)
        }
        this.zq(this.ni, !1);
        bb.bH(this.bs, "m-srch-fcs")
    };
    bc.zq = function(bh, ly) {
        bb.ch(bh, "display", !ly ? "none" : "")
    };
    bc.Sd = function(bh) {
        return bb.ey(bh, "display") != "none"
    };
    bc.AG = function() {
        var AN = function(se, ew) {
            if (!ew) return;
            return ew.replace(new RegExp(bn.buz(se), "gi"), function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var bKI = function(iN) {
            var hV = this.bs.clientWidth > 250 ? 41 : 17;
            if (bn.Fp(iN) > hV) {
                return bn.AW(iN, hV) + "..."
            } else {
                return iN
            }
        };
        var Sg = function(bp) {
            return bp.songs && bp.songs.length || bp.albums && bp.albums.length || bp.artists && bp.artists.length || bp.playlists && bp.playlists.length
        };
        var su = function(se, be) {
            if (!bn.cjv(this.fK) || bn.jG(this.fK.value)) {
                this.zq(this.ni, !1);
                return
            }
            be.keyword = bm.fd(se);
            var eN = bb.dg("m-search-suggest", be, {
                    mark: AN.bi(this, se),
                    cutStr: bKI.bi(this)
                }),
                tk = be.result.order;
            this.ni.innerHTML = eN;
            this.zq(this.ni, Sg(be.result) ? !0 : !1);
            if (!!tk && !!tk.length) {
                this.Yb = {
                    keyword: se,
                    type: Xs[tk[0]]
                }
            }
        };
        var cjK = function() {
            this.zq(this.ni, !1);
            return
        };
        return function() {
            var bD = this.fK.value;
            if (bn.jG(bD)) {
                this.zq(this.ni, !1);
                return
            }
            this.bS.bLh(bD, {
                onload: su.bi(this, bD),
                onForbidden: cjK.bi(this)
            })
        }
    }();
    bc.RX = function(be) {
        if (be.keyCode != 13) return;
        var AI = bb.bP(this.ni, "slt");
        if (this.Sd(this.ni) && AI.length > 0) {
            this.XS(AI[0].href);
            this.zq(this.ni, !1);
            return
        }
        this.RV();
        this.zq(this.ni, !1)
    };
    bc.XJ = function(be) {
        if (!this.Sd(this.ni)) return;
        var bk = bb.bP(this.ni, "xtag"),
            gx = bk.length,
            bv = bm.eg(bk, function(bw) {
                return bb.cU(bw, "slt")
            });
        switch (be.keyCode) {
            case 38:
                if (bv >= 0) bb.bH(bk[bv], "slt");
                bb.bJ(bk[bv <= 0 ? gx - 1 : bv - 1], "slt");
                break;
            case 40:
                if (bv >= 0) bb.bH(bk[bv], "slt");
                bb.bJ(bk[(bv + 1) % gx], "slt");
                break
        }
    };
    bc.GZ = function(be) {
        if (!this.Sd(this.ni)) return;
        var GS, bC = bj.bY(be),
            bk = bb.bP(this.ni, "xtag");
        if (bC.tagName.toLowerCase() == "a") GS = bC;
        else if (bC.parentNode.tagName.toLowerCase() == "a") GS = bC.parentNode;
        if (!GS) return;
        bm.cv(bk, function(bw) {
            bb.bH(bw, "slt");
            bb.bz(bw, "type", "")
        });
        if (be.type == "mouseout") return;
        bb.bJ(GS, "slt");
        bb.bz(GS, "type", "mouse")
    };
    bc.RV = function() {
        var fA = location.hash,
            bv = fA.indexOf("?"),
            cN = bm.iO(fA.substring(bv + 1));
        cN.s = this.fK.value;
        if (bn.jG(cN.s)) return;
        if (!cN.type && this.Yb && this.Yb.keyword == cN.s) {
            cN.type = this.Yb.type
        }
        this.XS("/search/#/?" + bm.eX(cN));
        this.fK.blur()
    };
    bc.XS = function(bZ) {
        if (location.dispatch2) {
            location.dispatch2(bZ)
        } else {
            location.href = bZ
        }
    };
    bL.Hh.bKB = function() {
        var bk = bb.bP(document.body, "j-suggest");
        bm.cv(bk, function(bw) {
            new bL.Hh(bw)
        })
    };
    bL.Hh.bKB()
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bq = bd("nm.d"),
        bc;
    bq.fX({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(bV) {
                return {
                    total: bV.size || 0,
                    list: bV.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(bV) {
                return {
                    total: bV.size || 0,
                    list: bV.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all/",
            type: "POST",
            format: function(bV) {
                return bV.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(bV, bf) {
                if (bf.offset == 0) {
                    var xp = bV.data[0];
                    this.bK("onfirstload", xp);
                    bV.data.splice(0, 1);
                    return bV.data
                } else {
                    return bV.data
                }
            }
        }
    });
    bq.AV = NEJ.C();
    bc = bq.AV.bU(bq.ik);
    bc.dv = function() {
        this.dC()
    };
    bc.GP = function() {
        var cmE = "LOCAL_FLAG";
        return function(bu, bKA) {
            var bl = this.zP(cmE, {});
            if (bl[bu]) {
                return true
            } else {
                if (!bKA) {
                    bl[bu] = true;
                    this.uw(cmE, bl)
                }
                return false
            }
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        Yo;
    if (!!bM.pw) return;
    bM.pw = NEJ.C();
    Yo = bM.pw.bU(bM.dZ);
    Yo.cz = function() {
        var bKz = function(be) {
            be.matched = be.source == be.target
        };
        return function(bf) {
            bf.oncheck = bf.oncheck || bKz;
            this.cB(bf);
            this.dK = bf.list;
            this.oJ = bf.dataset || "id";
            this.kj = bf.selected || "js-selected"
        }
    }();
    Yo.pj = function(bD) {
        var bC, be = {
            target: bD
        };
        bm.cv(this.dK, function(bh) {
            delete be.matched;
            be.source = bb.bz(bh, this.oJ);
            this.bK("oncheck", be);
            if (!be.matched) {
                bb.bH(bh, this.kj)
            } else {
                bC = bh;
                bb.bJ(bh, this.kj)
            }
        }, this);
        return bC
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bM = bd("nej.ut"),
        oE;
    if (!!bM.ei) return;
    bM.ei = NEJ.C();
    oE = bM.ei.bU(bM.dZ);
    oE.dv = function() {
        this.mG = {};
        this.dC();
        this.cY()
    };
    oE.cz = function(bf) {
        this.cB(bf);
        this.YM = bf.umi || "";
        this.yt = bf.dispatcher;
        this.En = bf.composite || cg;
        this.XF({
            onshow: this.ht.bi(this),
            onhide: this.lO.bi(this),
            onrefresh: this.ft.bi(this),
            onmessage: this.Bi.bi(this),
            onbeforehide: this.bKv.bi(this)
        })
    };
    oE.cR = function() {
        delete this.YM;
        this.mG = {};
        this.cV()
    };
    oE.cmG = function(be) {
        if (!!be) be.stopped = !0
    };
    oE.cY = cC;
    oE.ht = cC;
    oE.lO = cC;
    oE.ft = cC;
    oE.Bi = cC;
    oE.bKv = cC;
    oE.YZ = function(nA, cZ, fC) {
        this.yt.bKu({
            to: nA,
            mode: fC || 0,
            data: cZ,
            from: this.YM
        })
    };
    oE.cfG = function(bu, bl) {
        this.yt.yX(bu, {
            from: this.YM,
            data: bl
        })
    };
    oE.cfH = function() {
        this.yt.lP.apply(this.yt, arguments)
    };
    oE.bKl = function() {
        return this.mG
    };
    bb.Sp = function() {
        if (!!window.dispatcher) {
            dispatcher.bxd.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cC = NEJ.F,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        vv;
    if (!!bM.fb) return;
    bM.fb = NEJ.C();
    vv = bM.fb.bU(bM.ei);
    vv.bKe = function(bf) {
        var cQ;
        if (!cQ) {
            var bl = bf.input || cg;
            cQ = bb.bG(bl.parent)
        }
        if (!cQ) {
            var bl = bf.data || cg;
            cQ = bb.bG(bl.parent)
        }
        if (!cQ) {
            cQ = bb.bG(bf.parent)
        }
        return cQ
    };
    vv.ht = function(bf) {
        var cQ = this.bKe(bf);
        if (!!cQ && !!this.bs) cQ.appendChild(this.bs);
        this.jn(bf);
        this.bxr("onshow", bf);
        this.ft(bf)
    };
    vv.ft = function(bf) {
        this.gS(bf);
        this.bxr("onrefresh", bf)
    };
    vv.lO = function() {
        this.mX();
        this.bJT();
        bb.mB(this.bs)
    };
    vv.bxv = function() {
        var gK = /^onshow|onrefresh|delay$/;
        return function(de) {
            return gK.test(de)
        }
    }();
    vv.bxw = cC;
    vv.bxr = function() {
        var bxx = function(cN, bf, de, oy) {
            if (this.bxv(oy)) return;
            if (!!cN) de += (de.indexOf("?") > 1 ? "&" : "?") + cN;
            var gp = this.bxw(oy, bf) || {};
            gp.location = bf;
            gp.parent = this.mG[oy];
            this.yt.cmV(de, {
                input: gp
            })
        };
        return function(bu, bf) {
            if (!bf.nodelay) {
                if (!!this.En.delay) return;
                var bxB = this.En[bu] || cg;
                if (bxB.delay) return
            }
            var cN = bm.eX(bf.param) || "";
            if (bu == "onrefresh") {
                bm.fo(this.En, bxx.bi(this, cN, bf))
            }
            bm.fo(bxB, bxx.bi(this, cN, bf))
        }
    }();
    vv.bJT = function() {
        var yG = function(de, oy) {
            if (!this.bxv(oy)) this.yt.cw(de)
        };
        return function() {
            bm.fo(this.En, yG, this);
            bm.fo(this.En.onshow, yG, this);
            bm.fo(this.En.onrefresh, yG, this)
        }
    }()
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bA = bd("nej.j"),
        bm = bd("nej.u"),
        bQ = bd("nm.m"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        bc, bO;
    bQ.ZK = NEJ.C();
    bc = bQ.ZK.bU(bI.dZ);
    bc.dv = function() {
        this.dC();
        this.bs = bb.bG("g-topbar");
        var bk = bb.bP(this.bs, "j-tflag");
        this.ZM = bk[0];
        this.Ed = bk[1];
        this.sX = bk[2];
        this.bxF = bk[3];
        this.ZW = bk[4];
        this.bJJ = bI.pw.bF({
            list: this.ZM.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.ZZ = bI.pw.bF({
            list: this.ZW.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.dq([
            [this.Ed, "click", this.dM.bi(this)],
            [this.Ed, "mouseout", this.bxH.bi(this, 0)],
            [this.Ed, "mouseover", this.bxH.bi(this, 1)]
        ]);
        window.scrollTopbar = this.bJA.bi(this);
        window.matchNav = this.bxP.bi(this);
        window.polling = this.sW.bi(this);
        this.LY = bq.AV.bF();
        this.bJv();
        this.LU();
        var cN = bm.iO(location.href.split("?")[1]) || {};
        if (cN.market) {
            bb.bG("topbar-download-link").href = "/download?market=" + cN.market
        }
        var bar = bb.bP(this.bs, "j-showoff");
        if (bar && !this.LY.GP("newMvSearch")) {
            bb.bH(bar[0], "f-hide");
            window.setTimeout(function() {
                bb.bJ(bar[0], "f-hide")
            }, 5e3)
        }
    };
    bc.sW = function(be) {
        var fA = bn.Ft();
        if (!/^\/msg/.test(fA)) {
            var DZ = 0;
            DZ += be.comment;
            DZ += be.forward;
            DZ += be.msg;
            DZ += be.notice;
            if (DZ > 0) {
                this.sX.innerHTML = bb.dg("m-topbar-mesg-count", {
                    count: DZ
                })
            } else {
                this.sX.innerHTML = ""
            }
            var fv = "/at";
            if (be.notice) fv = "/notify";
            if (be.comment) fv = "/comment";
            if (be.msg > 0) fv = "/private";
            if (be.forward > 0) fv = "/at";
            this.sX.href = "/msg/#" + fv
        } else {
            this.sX.innerHTML = ""
        }
        var bk = bb.bP(this.ZM, "j-t");
        if (!/^\/friend/.test(fA)) {
            if (bk && bk.length) {
                bb.ch(bk[0], "display", be.event > 0 ? "" : "none")
            }
        } else {
            bb.ch(bk[0], "display", "none")
        }
    };
    bc.dM = function(be) {
        var bh = bj.bY(be, "d:action");
        if (bh) {
            switch (bb.bz(bh, "action")) {
                case "login":
                    bj.dp(be);
                    var bu = bb.bz(bh, "type");
                    if (bu) {
                        if (bu == "sina" || bu == "tencent") top.open(bh.href);
                        else top.login(bu == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    bj.dp(be);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.LY.GP("storeNew")) {
                        bb.bJ(this.baw, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.LY.GP("levelNew")) {
                        bb.bJ(this.baA, "f-vhide")
                    }
                    break
            }
        }
    };
    bc.bxH = function(xC, be) {
        if (this.bxU) {
            this.bxU.style.display = !xC ? "none" : ""
        }
    };
    bc.bJA = function(jB) {
        bb.ch(this.bs, "top", -jB + "px")
    };
    bc.bxP = function(fv, bJt) {
        this.bJJ.pj(fv);
        if (fv == "discover") {
            bb.bJ(this.bxF, "f-hide");
            bb.bH(this.ZW, "f-hide");
            this.ZZ.pj(bJt)
        } else {
            bb.bH(this.bxF, "f-hide");
            bb.bJ(this.ZW, "f-hide")
        }
    };
    bc.bJv = function() {
        var uz = bb.bG("g_iframe");
        if (!uz) return;
        var hs = uz.contentWindow.document.getElementById("g_top");
        this.bxP(bb.bz(hs, "module"), bb.bz(hs, "sub"))
    };
    bc.LU = function() {
        var eQ = GUser || {},
            bJs = GUserAcc || {};
        if (eQ && eQ.userId) {
            bb.fR(this.Ed, "m-topbar-user-login", NEJ.X(eQ, bJs));
            bb.ch(this.sX, "display", "")
        } else {
            this.Ed.innerHTML = bb.jZ("m-topbar-user-unlogin");
            this.sX.innerHTML = "";
            var bk = bb.bP(this.ZM, "j-t");
            bb.ch(bk[0], "display", "none");
            bb.ch(this.sX, "display", "none")
        }
        var bk = bb.bP(this.Ed, "j-uflag");
        this.bxU = bk[0];
        this.cfL = bk[1];
        this.baA = bk[2];
        this.baw = bk[3];
        if (!this.LY.GP("storeNew", true)) {
            bb.bH(this.baw, "f-vhide")
        } else {
            bb.bJ(this.baw, "f-vhide")
        }
        if (!this.LY.GP("levelNew", true)) {
            bb.bH(this.baA, "f-vhide")
        } else {
            bb.bJ(this.baA, "f-vhide")
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bq = bd("nm.d"),
        bc, bO;
    bq.fX({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(bV) {
                bj.bK(bq.xM, "message", bV)
            }
        }
    });
    bq.xM = NEJ.C();
    bc = bq.xM.bU(bq.ik);
    bc.SG = function() {
        this.dJ("polling-get", {})
    };
    bc.xP = function() {
        var hd;
        return function() {
            if (!!hd) return;
            hd = window.setInterval(this.SG.bi(this), 1e5);
            this.SG()
        }
    }();
    bI.gN.bF({
        event: "message",
        element: bq.xM
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function(qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function(arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "ï¿½" + packet.length + "ï¿½" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "ï¿½") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "ï¿½") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() {
            this.open = true
        };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
                args = arguments;
            WebSocket.SH(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
                args = arguments;
            WebSocket.SH(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.Le.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.baS();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function() {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function() {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function() {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function() {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function() {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.kx = WebSocket.bJq++;
            WebSocket.bxV[self.kx] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lC = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.SH(function() {
                    WebSocket.or.create(self.kx, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.or.send(this.kx, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.or.close(this.kx)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.lC)) {
                this.lC[type] = []
            }
            this.lC[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.lC)) return;
            var events = this.lC[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lC[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.bJo = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bxX(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bxX("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bJk("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bxX = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.bJk = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.or = null;
        WebSocket.bxV = {};
        WebSocket.Le = [];
        WebSocket.bJq = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.SH(function() {
                WebSocket.or.loadManualPolicyFile(url)
            })
        };
        WebSocket.baS = function() {
            if (WebSocket.or) return;
            if (WebSocket.bJi) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bJi
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bJg()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cfM = function() {
            setTimeout(function() {
                WebSocket.or = document.getElementById("webSocketFlash");
                WebSocket.or.setCallerUrl(location.href);
                WebSocket.or.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Le.length; ++i) {
                    WebSocket.Le[i]()
                }
                WebSocket.Le = []
            }, 0)
        };
        WebSocket.cfN = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.or.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bxV[events[i].webSocketId].bJo(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cfQ = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.eH = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.SH = function(task) {
            if (WebSocket.or) {
                task()
            } else {
                WebSocket.Le.push(task)
            }
        };
        WebSocket.bJg = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.baS()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.baS()
                })
            }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        };
        HTMLFile.prototype.bd = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.bd(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.bd = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.fs) this.fs = {};
        this.bye = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.fs || !this.fs.error || isArray(this.fs.error) && !this.fs.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.fs) return false;
        var handler = this.fs[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.fs) this.fs = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.fs[type]) {
            this.fs[type] = listener
        } else if (isArray(this.fs[type])) {
            this.fs[type].push(listener)
        } else {
            this.fs[type] = [this.fs[type], listener]
        }
        if (isArray(this.fs[type]) && !this.fs[type].warned) {
            var m;
            if (this.bye !== undefined) {
                m = this.bye
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.fs[type].length > m) {
                this.fs[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.fs[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.fs || !this.fs[type]) return this;
        var list = this.fs[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.fs[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.fs = {};
            return this
        }
        var events = this.fs && this.fs[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.fs[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.fs) this.fs = {};
        if (!this.fs[type]) this.fs[type] = [];
        if (!isArray(this.fs[type])) {
            this.fs[type] = [this.fs[type]]
        }
        return this.fs[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bn = bd("nm.x"),
        eT = bd("nm.u"),
        bq = bd("nm.d"),
        JP = bd("pomelo"),
        eD = 0,
        bc, bO;
    bq.fX({
        "polling-init": {
            url: "/api/push/init",
            format: function(bV) {
                eD = 2;
                var rI = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    bl = bV.account || cg,
                    fh = GUser.userId;
                JP.init(rI.host, rI.port, true, this.bIX.bi(this, {
                    user: fh,
                    nonce: bl.nonce,
                    domain: rI.domain,
                    productKey: rI.key,
                    signature: bl.signature,
                    expire_time: bl.expireTime
                }))
            },
            onerror: function() {
                return this.bbq()
            }
        }
    });
    bq.yH = NEJ.C();
    bc = bq.yH.bU(bq.ik);
    bc.dv = function() {
        var pT = !1;
        return function(bf) {
            if (!pT) {
                pT = !0
            }
            this.dC(bf);
            JP.on("specify", this.Bi.bi(this));
            JP.on("broadcast", this.Bi.bi(this))
        }
    }();
    bc.Bi = function(be) {
        bm.cv(be, function(cZ) {
            bj.bK(bq.yH, "message", cZ)
        }, this)
    };
    bc.bbq = function() {
        var cT = 500;
        return function() {
            eD = 0;
            JP.disconnect();
            if (cT > 6e4) cT = 500;
            cT *= 2
        }
    }();
    bc.bIX = function(bf, dc) {
        if (!!dc) {
            return this.bbq()
        }
        eD = 3;
        JP.registerAndBind(bf, function(bp) {
            if (bp.code != 200) {
                return this.bbq()
            }
            eD = 4
        }.bi(this))
    };
    bc.cfS = function() {
        eT.bIR.iE().cfT()
    };
    bc.cfW = function() {
        eT.bIR.iE().cfX()
    };
    bc.bbL = function() {
        var pT = !1;
        return function() {
            if (pT) return;
            pT = !0;
            this.dJ("polling-init", {})
        }
    }();
    bI.gN.bF({
        event: "message",
        element: bq.yH
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        ej = bd("nej.p"),
        bm = bd("nej.u"),
        bo = bd("nm.l"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        hY = bd("api"),
        bc, bO;
    var iq = bb.kg('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">ä»»ä½•äº§å“ä¸­çš„é—®é¢˜ï¼Œæ¬¢è¿Žåé¦ˆç»™æˆ‘ä»¬</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="è¯·è¾“å…¥åé¦ˆå†…å®¹"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="è¯·ç•™ä¸‹è”ç³»æ–¹å¼ï¼ˆç”µè¯ã€QQã€é‚®ç®±ï¼‰" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>å†…å®¹ä¸èƒ½ä¸ºç©ºï¼</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>å‘é€æ„è§</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>å– æ¶ˆ</i></a></div></div>');
    bo.bbP = NEJ.C();
    bc = bo.bbP.bU(bo.fz);
    bO = bo.bbP.dr;
    bc.cz = function(bf) {
        bf.title = "æ„è§åé¦ˆ";
        this.cB(bf)
    };
    bc.dx = function() {
        this.dy = iq
    };
    bc.dm = function() {
        this.dw();
        this.hz = {};
        var DH = bb.bP;
        var CI = bj.bt;
        this.hz.submit_btn = DH(this.bs, "u-btn2")[0];
        this.hz.cancle_btn = DH(this.bs, "u-btn2")[1];
        this.hz.prompt_msg = DH(this.bs, "u-err")[0];
        this.hz.zs = DH(this.bs, "zs")[0];
        bb.ch(this.hz.zs, "display", "none");
        this.hz.fb_txt = DH(this.bs, "u-txt")[0];
        this.hz.contact = DH(this.bs, "u-txt")[1];
        bb.gj(this.hz.fb_txt, "holder");
        bb.gj(this.hz.contact, "holder");
        if (bb.cU(this.hz.fb_txt.parentNode, "holder-parent")) {
            bb.ch(this.hz.fb_txt.parentNode, "display", "block")
        }
        if (bb.cU(this.hz.contact.parentNode, "holder-parent")) {
            bb.ch(this.hz.contact.parentNode, "display", "block")
        }
        CI(this.hz.submit_btn, "click", this.bIO.bi(this));
        CI(this.hz.cancle_btn, "click", this.bIL.bi(this));
        CI(this.hz.prompt_msg, "msgShow", this.bIJ.bi(this));
        CI(this.hz.fb_txt, "keyup", this.sE.bi(this));
        CI(this.hz.fb_txt, "input", this.iy.bi(this));
        CI(this.hz.contact, "keyup", this.bIH.bi(this));
        CI(this.hz.contact, "input", this.byn.bi(this));
        this.kt = bq.kQ.bF()
    };
    bc.bIO = function(be) {
        bj.cu(be);
        if (this.dF()) return;
        var cm = this.hz.fb_txt.value.trim();
        var cF = cm.length;
        var bf = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var byo = this.hz.contact.value.trim();
        var Th = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: bn.bcX(),
            contact: byo
        };
        var bl = {
                content: cm,
                client: "web",
                xInfo: JSON.stringify(Th)
            },
            nO = this.kt.bQG();
        if (nO && nO.length) {
            bl.log = nO.join("\n")
        }
        if (cF == 0) {
            this.hz.prompt_msg.innerHTML = "åé¦ˆå†…å®¹ä¸èƒ½ä¸ºç©º";
            bb.ch(this.hz.prompt_msg, "display", "block");
            return
        }
        if (byo.length > 100) {
            this.hz.prompt_msg.innerHTML = "è”ç³»æ–¹å¼æœ€å¤šåªèƒ½è¾“å…¥100ä¸ªå­—ç¬¦";
            bb.ch(this.hz.prompt_msg, "display", "block");
            return
        }
        this.dF(true);
        bf.data = bm.eX(bl);
        bf.onload = this.bIC.bi(this);
        bf.onerror = this.jv.bi(this);
        bA.cG("/api/feedback/web", bf)
    };
    bc.iy = function(be) {
        var cF = this.hz.fb_txt.value.trim().length;
        if (cF > 0) bb.ch(this.hz.prompt_msg, "display", "none");
        ej.ek.browser == "ie" && ej.ek.version < "7.0" ? setTimeout(this.gv.bi(this), 0) : this.gv()
    };
    bc.sE = function(be) {
        if (be.keyCode === 8) this.gv()
    };
    bc.gv = function() {
        var cF = this.hz.fb_txt.value.trim().length;
        this.hz.zs.innerHTML = !cF ? "0/140" : cF + "/140"
    };
    bc.byn = function(be) {
        var cF = this.hz.contact.value.trim().length;
        if (cF > 0) bb.ch(this.hz.prompt_msg, "display", "none")
    };
    bc.bIH = function(be) {
        if (be.keyCode === 8) this.byn()
    };
    bc.bIL = function(be) {
        bj.dp(be);
        this.cw()
    };
    bc.bIJ = function(be) {
        var bh = bj.bY(be);
        bh.innerHTML = "è¯·è¾“å…¥åé¦ˆå†…å®¹"
    };
    bc.cgc = function(cgf) {
        var bh = bj.bY(be);
        bh.innerHTML = ""
    };
    bc.bIC = function(bp) {
        this.dF(false);
        this.cw();
        bo.ci.bR({
            tip: "æ„è§å‘é€æˆåŠŸ",
            autoclose: true
        })
    };
    bc.jv = function(bp) {
        this.dF(false);
        bo.ci.bR({
            tip: "æ„è§å‘é€å¤±è´¥",
            autoclose: true
        })
    };
    bc.dF = function(dI) {
        return this.eU(this.hz.submit_btn, dI, "å‘é€æ„è§", "å‘é€ä¸­...")
    };
    bc.bR = function() {
        bO.bR.call(this);
        this.dF(false);
        this.hz.fb_txt.value = "";
        this.hz.contact.value = "";
        bb.ch(this.hz.prompt_msg, "display", "none");
        this.gv()
    };
    bn.bIx = function(bf) {
        bf = bf || {};
        if (bf.title === undefined) bf.title = "æ„è§åé¦ˆ";
        bo.bbP.bR(bf)
    };
    hY.feedback = bn.feedback = bn.bIx
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bM = bd("nej.ui"),
        bc;
    if (!!bM.vc) return;
    bM.vc = NEJ.C();
    bc = bM.vc.bU(bM.gh);
    bc.dv = function() {
        this.kx = this.byu();
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.dR = bf.index;
        this.ig = bf.total;
        this.hL = bf.range;
        this.hP(bf.data)
    };
    bc.cR = function() {
        this.cV();
        delete this.ck;
        delete this.dR;
        delete this.ig;
        delete this.hL
    };
    bc.ih = cC;
    bc.byu = function() {
        var gJ = +(new Date);
        return function() {
            return "itm-" + ++gJ
        }
    }();
    bc.zR = function() {
        return this.kx
    };
    bc.lu = function() {
        return this.ck
    };
    bc.hP = function(bl) {
        this.ck = bl || {};
        this.ih(this.ck)
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bM = bd("nej.ui"),
        bc, bO;
    if (!!bM.sx) return;
    bM.sx = NEJ.C();
    bc = bM.sx.bU(bM.vc);
    bO = bM.sx.dr;
    bc.cz = function(bf) {
        this.bIt = bf.pkey || "id";
        this.cB(bf)
    };
    bc.bcI = function(bl) {
        this.bK("ondelete", {
            ext: bl,
            id: this.zR(),
            data: this.lu(),
            body: this.mL()
        })
    };
    bc.IL = function(bl) {
        this.bK("onupdate", {
            ext: bl,
            id: this.zR(),
            data: this.lu(),
            body: this.mL()
        })
    };
    bc.hP = function(bl) {
        bO.hP.apply(this, arguments);
        this.kx = this.ck[this.bIt] || this.byu()
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        gm = NEJ.R,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bM = bd("nej.ui"),
        bc, iP, bcK;
    if (!!bM.bcL) return;
    bM.bcL = NEJ.C();
    bc = bM.bcL.bU(bM.gh);
    bc.cz = function(bf) {
        this.Tw = NEJ.X({}, bf);
        this.hc = NEJ.X({}, bf);
        delete this.Tw.onchange;
        this.hc.onchange = this.xm.bi(this);
        this.cB(bf);
        this.bIs({
            number: bf.number,
            label: bf.label || cg
        })
    };
    bc.cR = function() {
        this.cV();
        if (!!this.kO) {
            this.kO.bW();
            delete this.kO
        }
        delete this.Tw;
        delete this.hc;
        this.bIr();
        this.bs.innerHTML = "&nbsp;"
    };
    bc.dx = function() {
        this.lz = iP
    };
    bc.bIs = function(bl) {
        bb.fR(this.bs, bcK, bl);
        var gJ = bb.Fq();
        this.hc.list = bb.bP(this.bs, "js-i-" + gJ);
        this.hc.pbtn = (bb.bP(this.bs, "js-p-" + gJ) || gm)[0];
        this.hc.nbtn = (bb.bP(this.bs, "js-n-" + gJ) || gm)[0]
    };
    bc.dm = function() {
        this.dw()
    };
    bc.cgg = function(bl) {
        return bb.dg(bcK, bl)
    };
    bc.xm = function(be) {
        if (this.ID) return;
        var bv = be.index,
            dL = be.total;
        this.ID = !0;
        this.IA(bv, dL);
        bm.cv(this.TE, function(rB) {
            rB.IA(bv, dL)
        });
        this.ID = !1;
        this.bK("onchange", be)
    };
    bc.bi = function(cQ) {
        cQ = bb.bG(cQ);
        if (!cQ) return this;
        var dG = NEJ.X({}, this.Tw);
        dG.parent = cQ;
        dG.index = this.sp();
        dG.total = this.kW();
        var rB = this.constructor.bF(dG);
        rB.Ch("onchange", this.hc.onchange);
        if (!this.TE) this.TE = [];
        this.TE.push(rB);
        return this
    };
    bc.bIr = function() {
        var bbF = function(rB, bv, bk) {
            rB.bW();
            bk.splice(bv, 1)
        };
        return function() {
            bm.nt(this.TE, bbF)
        }
    }();
    bc.kM = function(bv) {
        if (!this.kO) return;
        this.kO.kM(bv)
    };
    bc.sp = function() {
        if (!this.kO) return 1;
        return this.kO.sp()
    };
    bc.kW = function() {
        if (!this.kO) return 1;
        return this.kO.kW()
    };
    bc.IA = function(bv, dL) {
        if (!this.kO) return;
        this.kO.IA(bv, dL)
    };
    bc.bdl = function(dL) {
        if (!this.kO) return;
        this.kO.bdl(dL)
    };
    iP = bb.rA(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcK = bb.gs('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"ä¸Šä¸€é¡µ"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"ä¸‹ä¸€é¡µ"}</a>{/if}{/trim}')
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bM = bd("nej.ut"),
        bc;
    if (!!bM.bdn) return;
    bM.bdn = NEJ.C();
    bc = bM.bdn.bU(bM.dZ);
    bc.cz = function(bf) {
        this.cB(bf);
        this.TF = bf.pbtn;
        this.du = bf.nbtn;
        this.TJ = bf.sbtn;
        this.TN = bf.ebtn;
        this.oJ = bf.event || "click";
        this.kj = bf.selected || "js-selected";
        this.nx = bf.disabled || "js-disabled";
        this.bIo(bf.list);
        this.IA(bf.index || 1, bf.total || 1)
    };
    bc.cR = function() {
        this.cV();
        delete this.dK;
        delete this.oJ;
        delete this.TF;
        delete this.du;
        delete this.TJ;
        delete this.TN;
        delete this.byx;
        delete this.ig;
        delete this.dR;
        delete this.kj;
        delete this.nx
    };
    bc.bIo = function() {
        var bdz = function(bh) {
            this.dK.push(bh);
            this.dq([
                [bh, this.oJ, this.gB.gY(this, 0)]
            ])
        };
        return function(bk) {
            this.dK = [];
            this.dq([
                [this.TF, "click", this.gB.gY(this, -1)],
                [this.du, "click", this.gB.gY(this, 1)],
                [this.TJ, "click", this.gB.gY(this, -2)],
                [this.TN, "click", this.gB.gY(this, 2)]
            ]);
            bm.cv(bk, bdz, this)
        }
    }();
    bc.Dy = function(bh, bv) {
        if (bv == null) {
            bh.innerText = "";
            bb.ch(bh, "display", "none");
            bb.bH(bh, this.kj)
        } else {
            bh.innerText = bv;
            bb.ch(bh, "display", "");
            bv == this.dR ? bb.bJ(bh, this.kj) : bb.bH(bh, this.kj)
        }
    };
    bc.byy = function() {
        if (this.dR <= 1) {
            bb.bJ(this.TF, this.nx);
            bb.bJ(this.TJ, this.nx)
        } else {
            bb.bH(this.TF, this.nx);
            bb.bH(this.TJ, this.nx)
        }
        if (this.dR >= this.ig) {
            bb.bJ(this.du, this.nx);
            bb.bJ(this.TN, this.nx)
        } else {
            bb.bH(this.du, this.nx);
            bb.bH(this.TN, this.nx)
        }
    };
    bc.bdK = cC;
    bc.bdL = function() {
        this.bdK();
        this.byy();
        this.bK("onchange", {
            last: this.byx,
            total: this.ig,
            index: this.dR,
            ext: this.bdN
        })
    };
    bc.byA = function(bv) {
        bv = parseInt(bv);
        if (isNaN(bv) || this.ig == null) return !1;
        bv = Math.max(1, Math.min(bv, this.ig));
        this.byx = this.dR;
        this.dR = bv;
        return !0
    };
    bc.bdQ = function(dL) {
        dL = parseInt(dL);
        if (isNaN(dL) || dL < 1) return !1;
        this.ig = dL;
        return !0
    };
    bc.gB = function(be, fI) {
        bj.dp(be);
        var bC = bj.bY(be);
        if (!bC || bb.cU(bC, this.kj) || bb.cU(bC, this.nx)) return;
        var bv = bC.innerText;
        switch (fI) {
            case 1:
            case -1:
                bv = this.dR + fI;
                break;
            case 2:
                bv = this.ig;
                break;
            case -2:
                bv = 1;
                break
        }
        this.kM(bv)
    };
    bc.sp = function() {
        return this.dR
    };
    bc.kM = function(bv) {
        var bIk = this.dR;
        this.byA(bv);
        if (bIk != this.dR) this.bdL();
        return this
    };
    bc.kW = function() {
        return this.ig
    };
    bc.Mh = function(dL) {
        if (this.bdQ(dL) && this.dR != null) {
            this.dR = 1;
            this.bdL()
        }
        return this
    };
    bc.bdl = function(dL) {
        if (this.bdQ(dL)) {
            this.bdK();
            this.byy()
        }
        return this
    };
    bc.IA = function(bv, dL) {
        if (!this.bdQ(dL) || !this.byA(bv)) return this;
        this.bdL();
        return this
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        dY = bd("nej.x"),
        bM = bd("nej.ut"),
        bc;
    if (!!bM.HY) return;
    bM.HY = NEJ.C();
    bc = bM.HY.bU(bM.bdn);
    bc.dv = function() {
        this.dC();
        var bh = bb.ef("span", "zdot");
        bh.innerText = "...";
        this.TR = [bh.cloneNode(true), bh]
    };
    bc.cR = function() {
        this.cV();
        this.byC()
    };
    bc.byC = function() {
        bb.mB(this.TR[0]);
        bb.mB(this.TR[1])
    };
    bc.bdK = function() {
        this.bdN = {
            last: !1,
            first: !1,
            list: this.dK
        };
        this.byC();
        this.Dy(this.dK[0], 1);
        var cK = 1,
            cF = this.dK.length;
        if (this.ig < cF) {
            for (var pS; cK < cF; cK++) {
                pS = cK + 1;
                this.Dy(this.dK[cK], pS > this.ig ? null : pS)
            }
            return
        }
        if (this.dR > 1) {
            var dE = Math.floor((cF - 2) / 2),
                bId = this.ig - cF + 2,
                mO = Math.max(2, this.dR - dE);
            if (this.ig >= cF) {
                mO = Math.min(mO, bId)
            }
            if (mO > 2) {
                this.dK[0].insertAdjacentElement("afterEnd", this.TR[0]);
                this.bdN.first = !0
            }
            for (var bv;; cK++) {
                bv = mO + cK - 1;
                if (bv > this.dR) break;
                this.Dy(this.dK[cK], bv)
            }
        }
        if (this.dR < this.ig) {
            var bv, mO = this.dR + 1;
            for (var i = 0, l = cF - 2;; i++, cK++) {
                bv = mO + i;
                if (cK > l || bv > this.ig) break;
                this.Dy(this.dK[cK], bv)
            }
            if (bv < this.ig) {
                this.dK[cK].insertAdjacentElement("beforeBegin", this.TR[1]);
                this.bdN.last = !0
            }
            if (bv <= this.ig) {
                this.Dy(this.dK[cK++], this.ig)
            }
        }
        for (; cK < cF; cK++) {
            this.Dy(this.dK[cK])
        }
    };
    bb.bIa = dY.bIa = function(cQ, bf) {
        var bB = bb.lr(cQ);
        if (!bB) return null;
        if (!bM.Rd(bB, bM.HY)) {
            bf = bf || {};
            var bk = !bf.clazz ? bb.eu(bB) : bb.bP(bB, bf.clazz);
            bf.pbtn = bk.shift();
            bf.nbtn = bk.pop();
            bf.list = bk;
            delete bf.clazz
        }
        return bM.Rd(bB, bM.HY, bf || cg)
    };
    dY.isChange = !0
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        gm = NEJ.R,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bM = bd("nej.ui"),
        bc, bO, iq;
    if (!!bM.HD) return;
    bM.HD = NEJ.C();
    bc = bM.HD.bU(bM.bcL);
    bO = bM.HD.dr;
    bc.cz = function(bf) {
        bf.number = parseInt(bf.number) || 9;
        this.cB(bf);
        this.kO = bI.HY.bF(this.hc)
    };
    bc.xm = function(be) {
        if (!!this.Tw.noend) {
            var byD = be.ext || cg,
                bk = byD.list || gm;
            if (byD.last) {
                bb.ch(bk[bk.length - 1], "display", "none")
            }
        }
        bO.xm.apply(this, arguments)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        cA = bd("nej.ui"),
        bM = bd("nej.ut"),
        bc;
    if (!!bM.TV) return;
    bM.TV = NEJ.C();
    bc = bM.TV.bU(bM.dZ);
    bc.cz = function(bf) {
        this.jz = {};
        this.cB(bf);
        this.jK = bb.bG(bf.parent);
        this.fT = {
            parent: this.jK
        };
        this.qF = parseInt(bf.limit) || 10;
        this.wr = parseInt(bf.first) || this.qF;
        this.bHY(bf.item);
        this.bHX(bf.cache || cg);
        this.bHW(bf.pager || cg);
        this.hP()
    };
    bc.cR = function() {
        this.bK("onbeforerecycle");
        this.Hu();
        this.cV();
        if (this.jz.clear) {
            this.bS.wy(this.jz.key)
        }
        this.bS.bW();
        if (!!this.kw) {
            this.kw.bW();
            delete this.kw
        }
        delete this.byF;
        delete this.hc;
        delete this.TY;
        delete this.bS;
        delete this.jK;
        delete this.GW;
        delete this.fT;
        delete this.jz
    };
    bc.byZ = function(bB) {
        return bB + "" + bb.Fq()
    };
    bc.xU = function(cK, cq, gM, cF) {
        var bp = {
            index: 1,
            total: 1
        };
        if (cq >= cK) {
            bp.index = Math.floor((cq - cK) / gM) + 2
        }
        if (cF > cK) {
            bp.total = Math.ceil((cF - cK) / gM) + 1
        }
        return bp
    };
    bc.bzc = function(bN) {
        delete this.GW;
        this.Dr = bN;
        this.dq([
            [this.jK, "click", this.bHz.bi(this)]
        ])
    };
    bc.bHY = function(bw) {
        if (bm.gH(bw)) {
            this.bzc(bw);
            return
        }
        NEJ.X(this.fT, bw);
        var eG = this.fT.klass;
        delete this.fT.klass;
        if (bm.gH(eG)) {
            this.bzc(eG);
            return
        }
        delete this.Dr;
        this.GW = eG;
        this.fT.ondelete = this.bK.bi(this, "ondelete");
        this.fT.onupdate = this.bK.bi(this, "onupdate")
    };
    bc.bHX = function(ce) {
        var eG = ce.klass,
            kd = NEJ.X({}, ce);
        this.jz.key = kd.lkey;
        this.jz.data = kd.data || {};
        this.jz.clear = !!kd.clear;
        this.fT.pkey = kd.key || "id";
        kd.onlistload = this.beY.bi(this);
        kd.onpullrefresh = this.bHy.bi(this);
        if (!!eG && "onlistchange" in eG) {
            this.dq([
                [eG, "listchange", this.bfb.bi(this)]
            ])
        } else {
            kd.onitemadd = this.Ue.bi(this);
            kd.onitemdelete = this.Ug.bi(this);
            kd.onitemupdate = this.bzo.bi(this)
        }
        this.bS = (eG || bM.Mo).bF(kd);
        if (ce.total != null) {
            this.bS.Mh(this.jz.key, ce.total)
        }
        if (!!ce.list) {
            this.bS.rq(this.jz.key, ce.list)
        }
    };
    bc.bHW = function(rB) {
        this.byF = rB.klass || cA.HD;
        this.hc = NEJ.X({}, rB);
        if (bm.hh(rB.parent)) {
            this.hc.parent = rB.parent[0];
            this.MY = rB.parent.slice(1);
            if (!this.MY || !this.MY.length) {
                delete this.MY
            }
        }
        delete this.hc.klass
    };
    bc.Hu = function() {
        var gK = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.bK("onbeforelistclear", {
                parent: this.jK
            });
            if (!!this.gG && this.gG.length > 0) {
                this.gG = this.GW.bW(this.gG);
                delete this.gG
            }
            if (gK.test(this.jK.tagName)) {
                bb.bms(this.jK)
            } else {
                this.jK.innerHTML = ""
            }
        }
    }();
    bc.bfp = function(Ui) {
        if (!!this.hc.fixed) return;
        bb.ch(this.hc.parent, "display", Ui);
        bm.cv(this.MY, function(cQ) {
            bb.ch(cQ, "display", Ui)
        }, this)
    };
    bc.bfu = function() {
        var bv = this.hc.index || 1;
        delete this.hc.index;
        if (!!this.kw) {
            bv = this.kw.sp()
        }
        this.yc({
            last: bv,
            index: bv
        })
    };
    bc.yc = function(be) {
        this.bK("onpagechange", be)
    };
    bc.bzp = function(cq) {
        this.jz.offset = cq;
        this.Vf()
    };
    bc.bzt = function(bf) {
        return bf
    };
    bc.Vf = function() {
        this.Mu();
        var bl = this.jz.data;
        bl.offset = this.jz.offset;
        var xp = bl.offset == 0;
        bl.total = xp;
        this.jz.limit = xp ? this.wr : this.qF;
        bl.limit = this.jz.limit;
        this.bS.qb(this.bzt(NEJ.X({}, this.jz)))
    };
    bc.beY = function(bf) {
        if (bf.key != this.jz.key || bf.offset != this.jz.offset) return;
        this.Ul();
        var bk = this.bS.hT(bf.key);
        if (!bk || !bk.length) {
            this.bfE();
            return
        }
        var gM = bf.limit,
            cq = bf.offset;
        if (this.bfG(bk, cq, gM)) return;
        this.bK("onbeforelistrender", {
            list: bk,
            offset: cq,
            parent: this.jK
        });
        if (!!this.Dr) {
            this.fT.xlist = bk;
            this.fT.beg = cq;
            this.fT.end = Math.min(bk.length, cq + gM) - 1;
            this.fT.act = "list";
            var eN = bb.dg(this.Dr, this.fT);
            this.Um(eN)
        } else {
            this.fT.limit = gM;
            this.fT.offset = cq;
            var iR = bb.yb(bk, this.GW, this.fT);
            this.Up(iR)
        }
        this.bK("onafterlistrender", {
            list: bk,
            offset: cq,
            parent: this.jK
        })
    };
    bc.bHy = function(bf) {
        if (!this.TY) return;
        delete this.TY;
        this.Ul("onafterpullrefresh");
        this.hP()
    };
    bc.bzv = function(bv, dL) {
        if (!!this.kw) {
            var yn = this.kw.sp(),
                bHo = this.kw.kW();
            if (yn > dL || dL != bHo) {
                this.kw.bW();
                delete this.kw;
                this.yc({
                    last: yn,
                    index: Math.min(bv, dL)
                });
                return !0
            }
        } else {
            this.hc.index = bv;
            this.hc.total = dL;
            this.kw = this.byF.bF(this.hc);
            this.kw.Ch("onchange", this.yc.bi(this));
            bm.cv(this.MY, function(cQ) {
                this.kw.bi(cQ)
            }, this)
        }
    };
    bc.bzx = function() {
        var gJ = +(new Date);
        return function(bl) {
            var bB = bl[this.fT.pkey];
            if (!bB) {
                bl["dirty-data"] = !0;
                bl[this.fT.pkey] = "dirty-" + gJ++
            }
            return bl
        }
    }();
    bc.bzB = function(bl) {
        var bB = bl[this.fT.pkey];
        if (!!bl["dirty-data"]) {
            delete bl["dirty-data"];
            delete bl[this.fT.pkey]
        }
        return bB
    };
    bc.bzI = function() {
        var bHc = function(ll, qe) {
            this.jK.insertAdjacentElement(ll, qe)
        };
        return function(ll, bl) {
            var Fv = [bl];
            if (!!this.Dr) {
                this.fT.xlist = Fv;
                this.fT.beg = 0;
                this.fT.end = 0;
                this.fT.act = "add";
                this.Um(bb.dg(this.Dr, this.fT), ll)
            } else {
                this.fT.limit = 1;
                this.fT.offset = 0;
                this.fT.parent = bHc.bi(this, ll);
                var iR = bb.yb(Fv, this.GW, this.fT);
                this.fT.parent = this.jK;
                this.Up(iR)
            }
        }
    }();
    bc.Mu = cC;
    bc.Ul = function(bX) {
        var be = {
            parent: this.jK
        };
        this.bK(bX || "onafterlistload", be);
        if (!be.stopped) {
            bb.mB(this.dA)
        }
    };
    bc.bfG = cC;
    bc.bfX = function(cZ, ll) {
        if (bm.gH(cZ)) {
            if (!this.dA) this.dA = bb.ef("div");
            this.dA.innerHTML = cZ
        } else {
            this.dA = cZ
        }
        this.jK.insertAdjacentElement(ll || "beforeEnd", this.dA)
    };
    bc.vR = function(bX, oI, ll) {
        var be = {
            parent: this.jK
        };
        this.bK(bX, be);
        if (!be.stopped) {
            this.bfX(be.value || oI, ll)
        }
    };
    bc.bfE = cC;
    bc.Um = cC;
    bc.Up = cC;
    bc.bHz = function() {
        var gK = /^(?:delete|update)$/;
        return function(be) {
            var bh = bj.bY(be, "d:action");
            if (!bh) return;
            var cl = bb.bz(bh, "action");
            if (!gK.test(cl)) return;
            var bB = bb.bz(bh, "id");
            if (!bB) return;
            var bw = this.bS.fw(bB);
            if (!bw) return;
            bj.cu(be);
            this.bK("on" + cl, {
                data: bw,
                id: bw[this.fT.pkey],
                body: bb.bG(this.byZ(bB))
            })
        }
    }();
    bc.Ue = cC;
    bc.OI = function(be) {
        var bl = be.data || {},
            bf = {
                data: bl,
                key: this.jz.key,
                id: bl[this.fT.pkey]
            };
        this.bK("onbeforedelete", bf);
        this.bS.Mb(bf)
    };
    bc.Ug = cC;
    bc.OJ = function(be) {
        var bl = be.data || {},
            bf = {
                data: bl,
                key: this.jz.key
            };
        this.bK("onbeforeupdate", bf);
        this.bS.OH(bf)
    };
    bc.bzo = function(be) {
        this.LM(be, "onafterupdate");
        if (be.stopped) return;
        var bB = be.data[this.fT.pkey];
        if (!!this.gG) {
            var bw = bb.bqa(bB);
            if (!!bw) bw.hP(be.data)
        } else {
            var bh = bb.bG(bB + "" + bb.Fq());
            if (!bh) return;
            var bk = this.bS.hT(be.key),
                bv = bm.eg(bk, be.data);
            if (bv < 0) return;
            this.fT.list = bk;
            this.fT.beg = bv;
            this.fT.end = bv;
            this.fT.act = "update";
            var eN = bb.dg(this.Dr, this.fT);
            bh.insertAdjacentHTML("afterEnd", eN);
            bb.dW(bh)
        }
    };
    bc.LM = function(be, bX) {
        var bw = be.data;
        if (!bw || bw[this.fT.pkey] == null) {
            this.bK("onerror", be);
            be.stopped = !0
        }
        if (!be.stopped) {
            this.bK(bX, be)
        }
    };
    bc.bga = cC;
    bc.bgb = cC;
    bc.bfb = function(be) {
        if (be.key != this.jz.key) return;
        switch (be.action) {
            case "add":
                this.Ue(be);
                break;
            case "delete":
                this.Ug(be);
                break;
            case "update":
                this.bzo(be);
                break;
            case "refresh":
                this.hP();
                break;
            case "unshift":
                this.bgb(be.offset, be.limit);
                break;
            case "append":
                this.bga(be.offset, be.limit);
                break
        }
    };
    bc.os = function(bw) {
        this.OJ({
            data: bw
        })
    };
    bc.mw = function(bw) {
        this.OI({
            data: bw
        })
    };
    bc.LK = function(bw) {
        this.bS.kV({
            data: bw,
            key: this.jz.key
        })
    };
    bc.te = function() {
        return this.bS
    };
    bc.bzJ = function(bl) {
        this.bzI("afterBegin", this.bzx(bl));
        return this.bzB(bl)
    };
    bc.bHa = function(bl) {
        this.bzI("beforeEnd", this.bzx(bl));
        return this.bzB(bl)
    };
    bc.hP = function() {
        this.Hu();
        this.bfu()
    };
    bc.cjJ = function() {
        this.bS.wy(this.jz.key);
        this.hP()
    };
    bc.bff = function() {
        if (!!this.TY) return;
        this.TY = !0;
        this.vR("onbeforepullrefresh", "åˆ—è¡¨åˆ·æ–°ä¸­...", "afterBegin");
        this.bS.bff({
            key: this.jz.key,
            data: this.jz.data
        })
    };
    bc.kW = function() {
        return this.bS.kW(this.jz.key)
    };
    bc.bGY = function() {
        return this.kw
    };
    bc.OB = function() {
        return this.bS.OB(this.jz.key)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        gm = NEJ.R,
        bm = bd("nej.u"),
        bb = bd("nej.e"),
        bM = bd("nej.ut"),
        bc, bO;
    if (!!bM.ju) return;
    bM.ju = NEJ.C();
    bc = bM.ju.bU(bM.TV);
    bO = bM.ju.dr;
    bc.xU = function(cq, cF) {
        return bO.xU.call(this, this.wr, cq, this.qF, cF)
    };
    bc.bgy = function(bv) {
        var cq = 0;
        if (bv > 1) cq = this.wr + (bv - 2) * this.qF;
        return cq
    };
    bc.yc = function(be) {
        bO.yc.apply(this, arguments);
        if (!be.stopped) {
            this.bzp(this.bgy(be.index))
        }
    };
    bc.Mu = function() {
        this.Hu();
        this.vR("onbeforelistload", "åˆ—è¡¨åŠ è½½ä¸­...")
    };
    bc.Ul = function() {
        bO.Ul.apply(this, arguments);
        this.Hu()
    };
    bc.bfG = function(bk, cq, gM) {
        var cP = this.xU(cq, bk.length);
        if (this.bzv(cP.index, cP.total)) return !0;
        this.bfp(cP.total > 1 ? "" : "none")
    };
    bc.bfE = function() {
        this.vR("onemptylist", "æ²¡æœ‰åˆ—è¡¨æ•°æ®ï¼")
    };
    bc.bfX = function(cZ, ll) {
        if (!ll && bm.gH(cZ)) {
            this.jK.innerHTML = cZ;
            return
        }
        bO.bfX.apply(this, arguments)
    };
    bc.Um = function(eN) {
        this.jK.innerHTML = eN
    };
    bc.Up = function(iR) {
        this.gG = iR
    };
    bc.Ue = function(be) {
        this.LM(be, "onafteradd");
        if (!be.stopped) this.hP()
    };
    bc.Ug = function(be) {
        this.LM(be, "onafterdelete");
        if (!be.stopped) this.hP()
    };
    bc.bga = function(cq, gM) {
        var bv = 1;
        if (!!this.kw) {
            bv = this.kw.sp()
        }
        var kr = this.bgy(bv),
            kp = kr + (bv > 1 ? this.qF : this.wr);
        if (cq >= kp && !!this.kw) {
            var cP = this.xU(0, this.kW());
            this.kw.bdl(cP.total);
            this.bfp(cP.total > 1 ? "" : "none")
        } else {
            this.hP()
        }
    };
    bc.bgb = function(cq, gM) {
        var bv = 1;
        if (!!this.kw) {
            bv = this.kw.sp()
        }
        var kr = this.bgy(bv),
            cP = this.xU(kr, this.kW());
        this.yc({
            last: bv,
            index: cP.index
        })
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        bT = bd("nm.w"),
        hM = 40,
        bc, bO;
    bT.Ut = NEJ.C();
    bc = bT.Ut.bU(bI.dZ);
    bO = bT.Ut.dr;
    bc.dv = function() {
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.Lk = bf.inputer;
        this.bgC = bf.tipper;
        this.dq([
            [this.Lk, "input", this.iy.bi(this)]
        ])
    };
    bc.cR = function() {
        this.cV();
        this.Dj(null, null)
    };
    bc.iy = function(be) {
        if (be && be.type == "keyup" && (be.keyCode != 8 || be.keyCode != 68)) return;
        var bX = this.Lk.value,
            cgi;
        if (bn.Fp(bX) > hM) {
            this.Lk.value = bn.AW(bX, hM);
            this.Dj("æ­Œå•åä¸èƒ½è¶…è¿‡20ä¸ªæ±‰å­—æˆ–40ä¸ªè‹±æ–‡å­—ç¬¦ï¼", arguments.callee.bi(this))
        } else if (bX.indexOf("#") >= 0 || bX.indexOf("@") >= 0) {
            this.Dj("æ­Œå•åä¸èƒ½åŒ…å«å­—ç¬¦â€œ@â€å’Œâ€œ#â€ï¼")
        } else {
            this.Dj(null, null);
            this.bK("onchange", {
                value: bX
            })
        }
    };
    bc.bGS = function() {
        this.iy()
    };
    bc.Dj = function() {
        var bB = 0;
        return function(hO, bzQ) {
            if (!!bB) window.clearTimeout(bB);
            if (!hO) {
                bb.bJ(this.bgC, "f-vhide");
                this.bzW = !1;
                return
            }
            this.bgC.innerHTML = '<i class="u-icn u-icn-25"></i>' + hO;
            bb.bH(this.bgC, "f-vhide");
            this.bzW = !0;
            if (bm.hC(bzQ)) bB = window.setTimeout(function() {
                this.Dj(null, null);
                bzQ()
            }.bi(this), 1e3)
        }
    }();
    bc.bzZ = function() {
        if (this.bzW) return !1;
        if (bn.jG(this.Lk.value)) {
            this.Dj("æ­Œå•åä¸èƒ½ä¸ºç©º");
            return !1
        }
        return !0
    };
    bc.gn = function() {
        return this.Lk.value
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bj = bd("nej.v"),
        bb = bd("nej.e"),
        bA = bd("nej.j"),
        bo = bd("nm.l"),
        bT = bd("nm.w"),
        di = bd("nej.ui"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bc, bO;
    bo.Uv = NEJ.C();
    bc = bo.Uv.bU(bo.fz);
    bO = bo.Uv.dr;
    bc.dv = function() {
        this.dC()
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.Ux = {
            inputer: bk[0],
            tipper: bk[1]
        };
        this.hD = {
            onerror: this.bAd.bi(this),
            onitemadd: this.bAd.bi(this)
        };
        this.pC = bk[2];
        bj.bt(bk[2], "click", this.Bx.bi(this));
        bj.bt(bk[3], "click", this.BR.bi(this));
        bj.bt(this.bs, "keypress", this.bAi.bi(this))
    };
    bc.dx = function() {
        this.dy = "m-wgt-create"
    };
    bc.cz = function(bf) {
        bf.clazz = " m-layer-w2";
        bf.parent = bf.parent || document.body;
        bf.title = "æ–°å»ºæ­Œå•";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cB(bf);
        this.Ux.inputer.value = bf.name || "";
        this.sH = bT.Ut.bF(this.Ux);
        this.sH.bGS();
        this.bS = bq.hW.bF(this.hD);
        setTimeout(function() {
            this.Ux.inputer.focus()
        }.bi(this), 0)
    };
    bc.cR = function() {
        this.cV();
        if (this.sH) {
            this.sH.bW();
            delete this.sH
        }
        this.rm(!1);
        this.Ux.inputer.value = ""
    };
    bc.rm = function(Ke) {
        this.qm = Ke;
        if (Ke) {
            this.pC.innerHTML = "<i>æ–°å»ºä¸­...</i>";
            bb.bJ(this.pC, "u-btn2-dis")
        } else {
            this.pC.innerHTML = "<i>æ–° å»º</i>";
            bb.bH(this.pC, "u-btn2-dis")
        }
    };
    bc.Bx = function() {
        if (this.qm || !this.sH.bzZ()) return;
        var dG = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.sH.gn()
            },
            offset: 1
        };
        this.bS.kV(dG);
        this.rm(!0)
    };
    bc.bAd = function(be) {
        var dX = (be.result || cg).code;
        if (!dX) {
            this.bK("onsuccess", be.data)
        } else {
            this.bK("onerror", be)
        }
        this.cw()
    };
    bc.BR = function() {
        this.cw()
    };
    bc.bAi = function(be) {
        if (be.keyCode == 13) this.Bx()
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bA = bd("nej.j"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        bo = bd("nm.l"),
        bc, bO;
    bo.bho = NEJ.C();
    bc = bo.bho.bU(bo.fz);
    bO = bo.bho.dr;
    bc.dv = function() {
        this.dC()
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.iG = {
            limit: 301,
            parent: bk[1],
            cache: {
                klass: bq.hW,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bhs.bi(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: bn.AX,
                escape: bm.fd
            }
        };
        this.hD = {
            onsuccess: this.Uy.bi(this),
            onerror: this.hi.bi(this)
        };
        bj.bt(bk[0], "click", this.Bx.bi(this));
        bj.bt(bk[1], "click", this.mc.bi(this))
    };
    bc.dx = function() {
        this.dy = "m-wgt-subscribe"
    };
    bc.cz = function(bf) {
        bf.parent = bf.parent || document.body;
        bf.clazz = " m-layer-w2";
        bf.title = "æ·»åŠ åˆ°æ­Œå•";
        bf.draggable = !0;
        bf.mask = !0;
        this.cB(bf);
        this.Uz = (bf.tracks || []).reverse();
        this.iG.item.size = this.Uz.length;
        this.hD.name = bf.name || "";
        this.bAj = bq.uH.bF({
            onaddsuccess: this.bhA.bi(this)
        });
        this.cmF = bq.hW.bF({
            onlistload: this.bGB.bi(this)
        });
        this.cmF.btu();
        bm.cv(this.Uz, function(bw, bv, bk) {
            if (!bm.qj(bw)) {
                bk[bv] = this.bAj.fw(bw) || bw
            }
        }, this)
    };
    bc.bGB = function() {
        if (this.eI) this.eI.bW();
        this.eI = bI.ju.bF(this.iG)
    };
    bc.Bx = function() {
        this.cw();
        if (this.BI) this.BI.bW();
        this.BI = bo.Uv.bF(this.hD);
        this.BI.bR()
    };
    bc.mc = function() {
        var bGA = function(bh) {
            while (bh && bh != document) {
                if (bh.tagName.toLowerCase() == "li") {
                    return bh
                }
                bh = bh.parentNode
            }
        };
        return function(be) {
            bj.dp(be);
            var bC = bj.bY(be),
                bhK = bGA(bC);
            if (!!bhK && !bb.cU(bhK, "dis")) {
                this.Uy({
                    id: bb.bz(bhK, "id")
                })
            }
        }
    }();
    bc.Uy = function(be) {
        var bB = be.id;
        if (!bB || !this.Uz.length) return;
        this.bAj.kV({
            key: "track_playlist-" + bB,
            data: {
                tracks: this.Uz,
                pid: bB
            }
        });
        this.cw()
    };
    bc.bhA = function() {
        this.bK("onsuccess");
        bo.ci.bR({
            tip: "æ”¶è—æˆåŠŸ"
        })
    };
    bc.hi = function(be) {
        this.cw();
        this.bK("onerror", be);
        var dS = "æ”¶è—å¤±è´¥";
        switch (be.code) {
            case 405:
                dS = "æ“ä½œè¿‡äºŽé¢‘ç¹ï¼Œå…ˆä¼‘æ¯ä¸€ä¸‹å†è¯•å§";
                break;
            case 507:
                dS = "æ­Œå•æ•°é‡è¶…è¿‡é™åˆ¶";
                break;
            case 502:
                dS = "æ­Œæ›²å·²ç»å­˜åœ¨"
        }
        bo.ci.bR({
            tip: dS,
            type: 2
        })
    };
    bc.bhs = function() {
        this.cw();
        bo.ci.bR({
            tip: "åˆ—è¡¨ä¸‹è½½å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•",
            type: 2
        })
    };
    bn.lP = function(bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        bo.bho.bR(bf)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        ej = bd("nej.p"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bm = bd("nej.u"),
        bn = bd("nm.x");
    var bhL, qV, bZ = decodeURIComponent(location.href),
        jH = /.+(http:\/\/.+\/proxy.html)/.test(bZ) ? RegExp.$1 : "";
    if (!!jH) {
        bA.wl("mail_proxy_url", jH)
    } else {
        jH = bA.sj("mail_proxy_url") || "about:blank"
    }
    bhL = bb.Tp({
        src: jH,
        onload: function() {
            qV = true
        }
    });
    var bAo = function() {
        bA.hI("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var bGq = function() {
        if (ej.ek.browser == "ie" && parseInt(ej.ek.version) < 9) {
            bn.gz({
                clazz: "m-layer-w2",
                message: "å½“å‰æµè§ˆå™¨ç‰ˆæœ¬è¿‡ä½Žï¼Œæš‚æ—¶æ— æ³•ä½¿ç”¨ï¼Œè¯·å‡çº§åŽå†è¯•ã€‚"
            });
            return false
        }
        return true
    };
    bn.bhR = function(bu, bB, cl) {
        if (!bGq()) return;
        bAo();
        if (cl == "stop") {
            if (!qV) throw "proxy not loaded";
            bAo();
            bhL.contentWindow.location.replace(jH + "#" + bm.eX({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bhL.contentWindow.location.replace(jH + "#" + bm.eX({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: bu,
                    id: bB,
                    s: +(new Date),
                    action: cl
                })
            }))
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bm = bd("nej.u"),
        bn = bd("nm.x"),
        bo = bd("nm.l"),
        bq = bd("nm.d");
    var kt = bq.kQ.bF();
    var nZ = bq.uH.bF({
        onlistload: bGp,
        onitemload: bGh,
        onerror: hi
    });
    var BO = bq.pL.bF({
        onlistload: bGg,
        onitemload: bGf,
        onerror: hi
    });
    var bAF = {};

    function ud(be) {
        var bh = bj.bY(be, "d:resAction"),
            cl = bb.bz(bh, "resAction");
        if (bh && (cl == "play" || cl == "addto")) {
            bAG({
                action: cl,
                type: parseInt(bb.bz(bh, "resType")),
                id: bb.bz(bh, "resId"),
                from: bb.bz(bh, "resFrom"),
                data: bb.bz(bh, "resData"),
                order: bb.bz(bh, "resOrder")
            });
            bFZ(bh)
        }
    }

    function bAG(cX) {
        var cl = cX.action,
            bu = cX.type,
            bB = cX.id,
            eO = cX.from,
            bl = cX.data,
            tk = cX.order,
            bf = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: bB
                },
                ext: {
                    id: bB,
                    action: cl,
                    type: bu,
                    from: eO,
                    data: bl
                }
            };
        if (cl != "play" && cl != "addto" || !bu) return;
        if (window.GRef && GRef == "mail") {
            bn.bhR(bu, bB, cl);
            return
        }
        switch (bu) {
            case 13:
                bf.key = "track_playlist-" + bB;
                nZ.qb(bf);
                if (cl == "play") {
                    bA.cG("/api/playlist/update/playcount", {
                        query: {
                            id: bB
                        }
                    })
                }
                break;
            case 17:
                bf.key = "program";
                bf.id = bB;
                BO.bfZ(bf);
                if (cl == "play") {
                    bA.cG("/api/dj/program/listen", {
                        query: {
                            id: bB
                        }
                    })
                }
                break;
            case 18:
                bf.key = "track";
                bf.id = bB;
                nZ.bfZ(bf);
                break;
            case 19:
                bf.key = "track_album-" + bB;
                nZ.qb(bf);
                break;
            case 24:
                bf.key = "track_day";
                nZ.qb(bf);
                break;
            case 2:
                bf.key = "track_artist_top-" + bB;
                nZ.qb(bf);
                break;
            case 70:
                bf.key = "program_djradio-" + bB + "-" + tk;
                bf.data.radioId = bB;
                bf.data.asc = tk == 2;
                BO.qb(bf);
                break
        }
    }

    function bAX(bk) {
        var bp = [];
        bm.cv(bk, function(bw) {
            if (bw.mainSong) {
                bw.mainSong.program = bw;
                bp.push(bw.mainSong);
                bw.localupdatetime = +(new Date);
                nZ.bRg(bw.mainSong);
                bw.mainTrackId = bw.mainSong.id;
                delete bw.mainSong
            } else {
                var bAY = nZ.fw(bw.mainTrackId);
                bAY && bp.push(bAY)
            }
        });
        return bp
    }

    function UF(bk, bf) {
        var qO = bf.action == "play" && bf.type != 17 && bf.type != 18,
            fQ = bf.action == "play";
        if (!bk.length) return;
        if (bf.type == 19) {
            bk = bn.FW(bk, true, {
                play: true
            }, {
                source: "album",
                sourceid: bf.id
            })
        } else {
            bk = bn.FW(bk, true, {
                play: true
            })
        }
        bm.cv(bk, function(bw) {
            bw.source = bn.bcp({
                fid: bf.from,
                fdata: bf.data,
                type: bf.type,
                rid: bf.id
            }, bw.id)
        });
        top.player.addTo(bk, qO, fQ);
        kt.Lx({
            rid: bf.id,
            type: bf.type,
            hash: bn.Ft(),
            play: fQ,
            source: bf.from,
            sourceid: bf.data
        })
    }

    function bGp(be) {
        var bk = nZ.hT(be.key);
        UF(bk, be.ext)
    }

    function bGh(be) {
        var bk = [nZ.fw(be.id)],
            co = bk[0],
            ps = bn.oP(co),
            wR = co.privilege || {};
        if (ps == 10) {
            bn.sK(wR.fee || co.fee, co.id, "song", null, wR)
        } else if (ps == 100) {
            bn.kK(null, null, null, true, co)
        } else if (ps == 11) {
            bn.bsT(co.id, 18)
        } else {
            UF(bk, be.ext)
        }
    }

    function bGg(be) {
        var bk = bAX(BO.hT(be.key));
        UF(bk, be.ext)
    }

    function bGf(be) {
        var bk = bAX([BO.fw(be.id)]);
        UF(bk, be.ext)
    }

    function hi() {
        top.player.tipPlay("æ— æ³•æ’­æ”¾ï¼ŒéŸ³ä¹å·²ä¸‹çº¿")
    }

    function bFZ(bh) {
        var bu = bb.bz(bh, "resType"),
            bB = bb.bz(bh, "resId"),
            bN = bu + "-" + bB;
        if (bAF[bN]) return;
        var bAZ = bb.bG("play-count"),
            bis = bb.bP(bh.parentNode, "nb"),
            If = null;
        if (bAZ) {
            If = bAZ
        } else {
            If = !!bis && !!bis[0] ? bis[0] : null
        }
        if (If) {
            var dE = If.innerHTML;
            if (/^\d+$/.test(dE)) {
                If.innerText = +dE + 1
            }
            bAF[bN] = true
        }
    }
    bn.bFR = function(bh) {
        bj.bt(bh || document.body, "click", ud.bi(this))
    };
    bn.bFQ = function(cl, bu, bB) {
        bAG({
            action: cl,
            type: bu,
            id: bB
        })
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bq = bd("nm.d"),
        bc, bO;
    bq.fX({
        "share-all": {
            url: "/api/share/friends/resource/",
            format: function(bp, bf) {
                this.bFP(bp, bf)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(bp, bf) {
                this.bK("onshareall", bf.result)
            },
            onerror: function(bp, bf) {
                this.bK("onshareall", bf.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(bp, bf) {
                bf.options.picUrl = bp.picUrl;
                this.bBb(bf.options, bf.result)
            },
            onerror: function(bp, bf) {
                this.bK("onshareall", bf.result)
            }
        }
    });
    bq.bBe = NEJ.C();
    bc = bq.bBe.bU(bq.ik);
    bc.bFP = function(bp, ne) {
        if (bp.event && ne.snsTypes) {
            if (ne.pics) {
                var bBi = [];
                for (var i = 0, len = ne.pics.length; i < len; i++) {
                    bBi[i] = ne.pics[i].originId
                }
                this.dJ("share_img_compound", {
                    data: {
                        picIds: bBi.join(",")
                    },
                    options: ne,
                    result: bp
                })
            } else {
                ne.picUrl = ne.picUrl;
                this.bBb(ne, bp)
            }
        } else {
            this.bK("onshareall", bp)
        }
        var Ll = bq.kQ.bF();
        Ll.mW(ne.isPub ? "pubevent" : "shareevent", {
            id: bp.id
        })
    };
    bc.bBb = function(ne, bp) {
        var dG = {};
        dG.eventid = bp.event.id;
        dG.eventtype = bp.event.type;
        ne.picUrl && (dG.picUrl = ne.picUrl);
        dG.snsTypes = ne.snsTypes;
        dG.msg = ne.data.msg || "";
        dG.type = ne.data.type;
        ne.data.id && (dG.id = ne.data.id);
        this.dJ("share-sns", {
            data: dG,
            result: bp
        })
    };
    bc.bFG = function(bf) {
        var bl = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + bm.nY(5)
        };
        bl = NEJ.EX(bl, bf);
        if (!(bl.id > 0)) {
            delete bl.id;
            bl.type = "noresource"
        }
        if (!bl.threadId) {
            delete bl.threadId
        }
        if (!bl.actId) {
            delete bl.actId
        }
        if (!bl.pics) {
            delete bl.pics
        } else {
            bl.pics = JSON.stringify(bl.pics)
        }
        this.dJ("share-all", {
            data: bl,
            snsTypes: bf.snsTypes,
            picUrl: bf.picUrl,
            pics: bf.pics,
            isPub: bf.isPub
        })
    };
    bc.bFE = function(bf) {
        this.dJ("share-private", bf)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bq = bd("nm.d"),
        bc, bO;
    bq.fX({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(bf) {
                bf.data.getcounts = true;
                bf.data.pagesize = bf.data.limit;
                if (bf.data.offset == 0) {
                    bf.data.lasttime = -1
                }
                delete bf.data.offset
            },
            format: function(bV, bf) {
                this.bFD(bV.event);
                bf.data.lasttime = bV.lasttime;
                if (bV.event.length) {
                    bV.event.length = bf.limit
                }
                return {
                    list: bV.event,
                    total: bV.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(bV, bf) {
                return {
                    list: bV.events,
                    total: bV.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(bf) {
                bf.data.pagesize = 20
            },
            format: function(bV, bf) {
                return bV.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(bf) {
                bf.data.time = -1;
                bf.data.getcounts = true
            },
            format: function(bV, bf) {
                bV.events.length = bf.limit;
                return {
                    list: bV.events,
                    total: bV.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status/",
            format: function(bp, bf) {
                bp.conf = bf.conf;
                return bp
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(bf, cj) {
                if (bf.like) {
                    if (bf.comment) {
                        cj.url = "/api/v1/comment/like"
                    } else {
                        cj.url = "/api/resource/like"
                    }
                    cj.onload = "oneventlike";
                    cj.onerror = "oneventlikeerr"
                } else {
                    if (bf.comment) {
                        cj.url = "/api/v1/comment/unlike"
                    } else {
                        cj.url = "/api/resource/unlike"
                    }
                    cj.onload = "oneventunlike";
                    cj.onerror = "oneventunlikeerr"
                }
            },
            format: function(bp, bf) {
                bp.eid = bf.eid;
                bp.origin = bf.origin;
                bp.ext = bf.ext;
                return bp
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(bp, bf) {
                bp.id = bf.data.id;
                return bp
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(bf, cj) {
                if (bf.data.type == "nointer") {
                    cj.url = "/api/event/rcmd/reject"
                } else {
                    cj.url = "/api/event/delete"
                }
            },
            format: function(bp, bf) {
                bp.id = bf.data.id;
                return bp
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(bp, bf) {
                bp.id = bf.data.id;
                return bp
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(bf) {
                bf.data.lasttime = bf.data.lasttime || -1;
                bf.data.pagesize = bf.data.limit;
                bf.data.getcounts = true;
                delete bf.data.offset
            },
            format: function(bV, bf) {
                bf.data.lasttime = bV.lasttime;
                var bk = bV.events;
                if (bV.more || bf.offset + bf.limit < bV.size) {
                    bk = this.bFA(bk, bf.data.pagesize)
                }
                return {
                    list: bk,
                    total: bV.size
                }
            },
            onerror: "onlisterror"
        }
    });
    bq.Nl = NEJ.C();
    bc = bq.Nl.bU(bq.ik);
    bc.dv = function() {
        this.dC();
        this.kt = bq.kQ.bF()
    };
    bc.biS = function(bu, dO) {
        return bu + "-" + dO
    };
    bc.cgn = function(bf) {
        this.dJ("ievent-get", bf)
    };
    bc.cgo = function(bf) {
        this.dJ("ievent-new-get", bf)
    };
    bc.cgp = function(bf) {
        this.dJ("ievent-user-get", bf)
    };
    bc.cgq = function(bu, dO) {
        return this.qA(this.biS(bu, dO))
    };
    bc.cgs = function(cmR, bf) {
        if (!cmR || !cmR.length) return;
        bf = bf || {};
        var cE = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Cn = [], bBn = [], bl; i < cmR.length; ++i) {
            bl = cmR[i];
            bl = this.qA(this.biS(bl.type, bl.id));
            if (!bl) {
                Cn.push(cmR[i].id);
                bBn.push(cE[cmR[i].type] || 0)
            }
        }
        if (!Cn.length) {
            this.bK("oneventresload", bf.conf);
            return
        }
        bf.data = {
            ids: JSON.stringify(Cn),
            types: JSON.stringify(bBn)
        };
        bf.onload = this.bFq.bi(this);
        this.dJ("ievent-res-get", bf)
    };
    bc.bFq = function(bp) {
        if (bp.code != 200) {
            this.bK("oneventreserror", bp.code);
            return
        }
        var cE = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, bk = bp.results; i < bk.length; ++i) {
            this.pn(this.biS(cE[bk[i].type], bk[i].id), bk[i])
        }
        this.bK("oneventresload", bp.conf)
    };
    bc.bBo = function(bl) {
        var bN = "event-list";
        this.beo(bN, bl);
        this.bK("onitemadd", {
            key: bN,
            action: "add",
            data: bl,
            flag: -1
        })
    };
    bc.xq = function(bf) {
        this.dJ("ievent-like", bf)
    };
    bc.mw = function(bf) {
        this.dJ("ievent-delete", bf)
    };
    bc.bFA = function(bk, gM) {
        for (var i = bk.length; i < gM; i++) bk.push(null);
        return bk
    };
    bc.bFD = function(bk) {
        var bp = [];
        if (!bk || !bk.length) return;
        bm.cv(bk, function(be) {
            bp.push({
                action: "eventimpress",
                json: this.bBq(be)
            })
        }, this);
        this.kt.OX(bp)
    };
    bc.bBq = function() {
        var Xs = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            bFm = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(be) {
            var bV = {
                id: be.id,
                sourceid: be.user.userId,
                alg: be.rcmdInfo ? be.rcmdInfo.alg : null,
                contentType: Xs[be.type] || (bm.eg(bFm, be.type) != -1 ? "user_event" : "other")
            };
            return bV
        }
    }();
    bc.Cl = function(bFk, be) {
        var bV = this.bBq(be);
        bV.actionType = bFk;
        if (window.log) log("eventclick", bV)
    };
    bc.clq = function(bf) {
        this.dJ("event_latest-list", bf)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        di = bd("nej.ui"),
        bn = bd("nm.x"),
        bL = bd("nm.w"),
        bc, bO;
    bL.UR = NEJ.C();
    bc = bL.UR.bU(di.gh);
    bO = bL.UR.dr;
    bc.cz = function(bf) {
        this.cB(bf);
        var hA = bf.box || cg;
        bb.fp(this.bs, {
            position: "absolute",
            width: hA.width + "px",
            height: hA.height + "px",
            top: hA.top + "px",
            left: hA.left + "px"
        });
        window.uploader = this
    };
    bc.cR = function() {
        this.cV()
    };
    bc.mc = function(be) {
        this.bK("onselect", be);
        console.log("select", be)
    };
    bc.tU = function(be) {
        this.bK("onprogress", be);
        console.log("progress", be)
    };
    bc.sB = function(be) {
        if (be.code == 200) {
            this.bK("oncomplete", be)
        } else {
            this.hi(be)
        }
        console.log("complete", be)
    };
    bc.hi = function(be) {
        this.bK("onerror", be);
        console.log("error", be)
    };
    bc.jT = cC;
    bc.bFh = cC
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        di = bd("nej.ui"),
        bn = bd("nm.x"),
        bL = bd("nm.w"),
        lI = bd("cb"),
        bc, bO;
    bL.bjw = NEJ.C();
    bc = bL.bjw.bU(bL.UR);
    bO = bL.bjw.dr;
    bc.dv = function() {
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        var bN = bm.nY(8),
            ke = "onselect" + bN,
            bBs = "onprogress" + bN,
            bBt = "oncomplete" + bN,
            dc = "onerror" + bN;
        lI[ke] = this.mc.bi(this);
        lI[bBs] = this.tU.bi(this);
        lI[bBt] = this.sB.bi(this);
        lI[dc] = this.hi.bi(this);
        var bFe = "/style/swf/MusicUpload.swf?v=20150202",
            cE = {
                music: "éŸ³é¢‘(*.mp3,*.m4a,*.x-m4a)",
                image: "*.jpg;*.jpeg;*.png;*.gif;"
            },
            qI = {
                url: bf.api,
                token: bf.token,
                filter: cE[bf.accept] || bf.accept || bf.flashAccept || "",
                multiple: bf.multiple,
                error: "cb." + dc,
                select: "cb." + ke,
                progress: "cb." + bBs,
                complete: "cb." + bBt
            };
        this.or = bb.rW({
            src: bFe,
            hidden: false,
            parent: this.bs,
            onready: this.Cs.bi(this),
            width: bf.box.width,
            height: bf.box.height,
            params: {
                flashvars: bm.BW(qI, "&", false),
                allowscriptaccess: "always",
                wmode: "transparent"
            }
        })
    };
    bc.cR = function() {
        this.cV();
        this.bs.innerHTML = ""
    };
    bc.Cs = function(hQ) {
        this.or = hQ
    };
    bc.jT = function(jg) {
        this.or.upload(jg)
    };
    bc.bFh = function() {
        this.or.cancle()
    };
    bc.qM = function(JB) {
        this.or.disable(JB)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        fm = bd("nej.g"),
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        di = bd("nej.ui"),
        bn = bd("nm.x"),
        bL = bd("nm.w"),
        bc, bO;
    var iP = bb.rA(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var iq = bb.kg('<div class="' + iP + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    bL.Vl = NEJ.C();
    bc = bL.Vl.bU(bL.UR);
    bO = bL.Vl.dr;
    bc.dx = function() {
        this.lz = iP;
        this.dy = iq
    };
    bc.dm = function() {
        this.dw();
        var cs = bb.eu(this.bs);
        this.cL = cs[0];
        bj.bt(this.cL.uploadfile, "change", this.Vp.bi(this))
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.bFd = bf.api || "";
        this.UU = bf.multiple;
        this.cL.multiple = this.UU ? "coverImgUrl" : "";
        this.cL.reset();
        this.UW = [];
        this.UY = {};
        var cE = {
            music: "audio/mp3,audio/x-m4a,audio/m4a",
            image: "image/*"
        };
        if (bf.accept || bf.htmlAccept) {
            this.cL.uploadfile.accept = cE[bf.accept] || bf.accept || bf.htmlAccept
        }
        if (bf.tipTitle) {
            this.cL.uploadfile.title = bf.tipTitle
        }
    };
    bc.cR = function() {
        this.cV();
        this.Vw();
        this.cL.reset();
        delete this.UW;
        delete this.UY;
        this.cL.uploadfile.accept = "*"
    };
    bc.Vp = function(be) {
        var bBw = this.cL.uploadfile.files,
            bBA = [];
        if (!this.UU) {
            this.UW = [];
            this.UY = {}
        }
        for (var i = 0, ii = bBw.length; i < ii; i++) {
            var Vb = this.bEX(bBw[i]);
            this.UW.push(Vb);
            this.UY[Vb.uuid] = Vb;
            bBA.push(Vb);
            if (!this.UU) break
        }
        this.mc(bBA);
        this.cL.reset()
    };
    bc.Vw = function() {
        if (this.bBF) {
            this.bBM = true;
            bA.rV(this.CV);
            this.bBM = false;
            delete this.bBF;
            delete this.CV
        }
    };
    bc.bEX = function(ff) {
        return {
            uuid: "file-" + +(new Date) + bm.nY(5),
            name: ff.name,
            size: ff.size,
            refernce: ff
        }
    };
    bc.jT = function(jg) {
        this.Vw();
        var ff = this.UU ? this.UY[jg] : this.UW[0],
            bl = new FormData,
            vf = {};
        if (ff) {
            vf[fm.yY] = fm.cmN;
            bl.append("fileupload", ff.refernce);
            this.bBF = ff;
            this.CV = bA.cG(this.bFd, {
                type: "json",
                method: "post",
                headers: vf,
                data: bl,
                timeout: 0,
                onload: this.zD.bi(this, jg),
                onerror: this.zD.bi(this, jg),
                onuploading: this.bEP.bi(this, jg)
            })
        }
    };
    bc.zD = function(jg, be) {
        be.uuid = jg;
        if (be.code == 200) {
            this.sB(be)
        } else {
            if (!this.bBM) {
                this.hi(be)
            }
        }
    };
    bc.bEP = function(jg, be) {
        be.uuid = jg;
        this.tU(be)
    };
    bc.bEO = function() {
        this.Vw()
    };
    bc.qM = function(JB) {
        if (JB) {
            this.cw()
        } else {
            this.bR()
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bL = bd("nm.w"),
        bEN = typeof FormData != "undefined";
    bL.CN = NEJ.C();
    bL.CN.bU(bEN ? bL.Vl : bL.bjw)
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        fm = bd("nej.g"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        iW = bd("nej.n"),
        bI = bd("nej.ut"),
        cA = bd("nej.ui"),
        bT = bd("nm.w"),
        bo = bd("nm.l"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bL = bd("nm.x.f"),
        bc, bO, VL = {
            0: "",
            "-1": "ä¸èƒ½æ·»åŠ é‡å¤å›¾ç‰‡",
            "-10": "æœ€å¤šåªèƒ½æ·»åŠ 4å¼ ",
            "-3": "è¯·é€‰æ‹©ä¸è¶…è¿‡5Mçš„å›¾ç‰‡"
        },
        VM = 5 * 1024 * 1024,
        bEM = /\.(bmp|jpg|jpeg|png|gif)$/i;
    bT.VO = NEJ.C();
    bc = bT.VO.bU(cA.gh);
    bc.dx = function() {
        this.dy = "m-xwgt-share-upload"
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.VP = bk.shift();
        this.Gk = bk.shift();
        this.MF = bk.shift();
        this.bEJ = {
            onselect: this.bBO.gY(this, 0),
            onerror: this.hi.bi(this),
            oncomplete: this.sB.bi(this),
            multiple: true,
            parent: this.Gk,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "å›¾ç‰‡(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 60,
                height: 60,
                top: 0,
                left: 0
            },
            tipTitle: "ä¸Šä¼ å›¾ç‰‡"
        };
        this.bBP = {
            onselect: this.bBO.gY(this, 1),
            onerror: this.hi.bi(this),
            oncomplete: this.sB.bi(this),
            multiple: true,
            parent: this.Gk,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "å›¾ç‰‡(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 20,
                height: 20,
                top: 0,
                left: 0
            },
            tipTitle: "ä¸Šä¼ å›¾ç‰‡"
        };
        this.bEF = bT.CN.bF(this.bEJ)
    };
    bc.cR = function() {
        bj.ky(this.rE, "click");
        if (!!this.fV) {
            for (var i = this.fV.length - 1; i >= 0; i--) {
                bb.dW(this.fV[i].element, false);
                if (this.fV[i].dragger) this.fV[i].dragger.bW()
            }
        }
        this.fV = [];
        this.Vd = {};
        if (this.zE) {
            clearTimeout(this.zE)
        }
        this.zE = 0;
        this.CU && this.CU.bW();
        delete this.CU;
        this.cV()
    };
    bc.bBO = function(bk, bv) {
        if (!bk) return;
        for (var i = 0, len = bk.length; i < len; i++) {
            if (!bEM.test(bk[i].name)) {
                this.Wh({
                    path: bk[i].name,
                    index: bv,
                    uuid: bk[i].uuid,
                    status: -4,
                    fail: "è¿™ä¸æ˜¯<br>å›¾ç‰‡"
                })
            } else if (bk[i].size > VM) {
                this.Wj(-3);
                this.Wh({
                    path: bk[i].name,
                    index: bv,
                    uuid: bk[i].uuid,
                    status: -3,
                    fail: "ä¸Šä¼ <br>å¤±è´¥"
                })
            } else {
                this.Wh({
                    path: bk[i].name,
                    index: bv,
                    uuid: bk[i].uuid,
                    status: 0
                })
            }
        }
    };
    bc.hi = function(be) {
        var ff = this.Vd[be.uuid];
        ff.status = -4;
        ff.fail = "ä¸Šä¼ <br>å¤±è´¥";
        this.bBQ(ff);
        this.zz()
    };
    bc.sB = function(be) {
        var ff = this.Vd[be.uuid];
        ff.status = 2;
        var cP = NEJ.X({}, be.picInfo);
        cP.originId = cP.originIdStr;
        cP.squareId = cP.squareIdStr;
        cP.rectangleId = cP.rectangleIdStr;
        cP.pcSquareId = cP.pcSquareIdStr;
        cP.pcRectangleId = cP.pcRectangleIdStr;
        cP.originJpgId = cP.originJpgIdStr || cP.originJpgId;
        ff.picInfo = cP;
        ff.picUrl = be.picInfo.pcSquareUrl;
        this.bBQ(ff);
        this.zz()
    };
    bc.Wh = function(ff) {
        if (this.fV.length >= 4) {
            this.Wj(-10, 3e3, this.bBR.bi(this));
            return
        }
        this.bEw(ff);
        this.fV.push(ff);
        this.Vd[ff.uuid] = ff;
        if (!!this.fV.length) {
            this.bs.style.display = ""
        }
        if (this.fV.length >= 4) {
            this.Gk.style.display = "none"
        } else {
            this.Gk.style.display = ""
        }
        this.zz()
    };
    bc.zz = function() {
        var Wp = -1,
            bBT = 0;
        for (var i = 0, l = this.fV.length; i < l; i++) {
            if (this.fV[i].status == 1) {
                return
            }
            if (this.fV[i].status == 0 && Wp < 0) {
                Wp = i
            }
            if (this.fV[i].status == 2 || this.fV[i].status < 0) {
                bBT++
            }
        }
        var bw = this.fV[Wp];
        if (bw) {
            (bw.index == 0 ? this.bEF : this.CU).jT(bw.uuid);
            bw.status = 1;
            this.bK("onstartupload", {})
        } else if (bBT == this.fV.length) {
            this.bK("onfinishupload", {})
        }
    };
    bc.Wj = function(bv, rR, lI) {
        if (this.HT < bv) {
            return
        }
        if (this.zE) {
            clearTimeout(this.zE);
            this.zE = 0
        }
        if (rR) {
            this.MF.innerText = VL[bv * 1];
            this.HT = bv;
            this.zE = setTimeout(this.US.bi(this, bv, lI), rR)
        } else {
            this.MF.innerText = VL[bv];
            this.HT = bv
        }
        this.MF.style.display = ""
    };
    bc.US = function(bv, lI) {
        if (bv && this.HT !== bv) {
            return
        }
        this.HT = 0;
        this.MF.innerText = VL[0];
        this.MF.style.display = "none";
        lI && lI()
    };
    bc.bEw = function(ff) {
        var bl = {};
        if (ff.fail) {
            bl.fail = ff.fail
        }
        var eN = bb.dg("m-xwgt-share-upload-preview", bl);
        ff.element = bb.oZ(eN);
        bj.bt(bb.bP(ff.element, "del")[0], "mousedown", this.bEt.bi(this, ff), false);
        this.VP.appendChild(ff.element);
        ff.dragger = bI.zm.bF({
            view: this.VP,
            body: ff.element,
            overflow: false,
            direction: 1,
            isRelative: 1,
            ondragstart: this.Mn.bi(this, ff),
            onchange: this.bEs.bi(this, ff),
            ondragend: this.bcv.bi(this, ff)
        })
    };
    bc.bBQ = function(ff) {
        if (!ff || !ff.element) {
            return false
        }
        var bl = {};
        if (ff.fail) {
            bl.fail = ff.fail
        } else {
            bl.url = ff.picUrl
        }
        bb.bJ(ff.element, "z-fail");
        ff.element.firstChild.outerHTML = bb.dg("m-xwgt-share-upload-preview-img", bl)
    };
    bc.Mn = function(bw, ll) {
        bb.bJ(bw.element, "z-sel")
    };
    bc.bEs = function(bw, ll) {
        var zt, ij = this.fV.length - 1,
            rd;
        for (var i = ij; i >= 0; i--) {
            bb.bH(this.fV[i].element, "z-jump");
            if (this.fV[i] == bw) {
                rd = i
            } else {
                this.fV[i].element.style.left = ""
            }
        }
        if (ll.left > 0) {
            zt = (ll.left + 40) / 70 >> 0;
            for (var i = 1; i <= zt && i + rd <= ij; i++) {
                this.fV[rd + i].element.style.left = -70 + "px";
                bb.bJ(this.fV[rd + i].element, "z-jump")
            }
        } else {
            zt = (ll.left - 40) / 70 >> 0;
            for (var i = -1; i >= zt && i + rd >= 0; i--) {
                this.fV[rd + i].element.style.left = 70 + "px";
                bb.bJ(this.fV[rd + i].element, "z-jump")
            }
        }
    };
    bc.bcv = function(bw, ll) {
        var cgx, ij = this.fV.length - 1,
            rd;
        for (var i = ij; i >= 0; i--) {
            this.fV[i].element.style.left = "";
            bb.bH(this.fV[i].element, "z-jump");
            if (this.fV[i] == bw) {
                rd = i
            }
        }
        bb.bH(bw.element, "z-sel");
        if (ll.left > 0) {
            zt = (ll.left + 40) / 70 >> 0;
            var dU = Math.min(rd + zt, ij)
        } else {
            zt = (ll.left - 40) / 70 >> 0;
            var dU = Math.max(rd + zt, 0)
        }
        this.fV.splice(rd, 1);
        this.fV.splice(dU, 0, bw);
        for (var i = 0, len = this.fV.length; i < len; i++) {
            this.VP.appendChild(this.fV[i].element)
        }
    };
    bc.bEt = function(bw, be) {
        bb.dW(bw.element, false);
        if (bw.dragger) bw.dragger.bW();
        delete bw.dragger;
        var bv = -1;
        for (var i = this.fV.length - 1; i >= 0; i--) {
            if (this.fV[i] == bw) {
                bv = i;
                break
            }
        }
        this.fV.splice(bv, bv >= 0 ? 1 : 0);
        delete bw;
        if (this.fV.length >= 4) {
            this.Gk.style.display = "none"
        } else {
            this.Gk.style.display = ""
        }
        if (!this.fV.length) {
            this.bs.style.display = "none";
            this.US(0)
        } else {
            this.bBR()
        }
        this.zz()
    };
    bc.bBR = function() {
        var bBU = false;
        for (var i = 0, len = this.fV.length; i < len; i++) {
            if (this.fV[i].status == -3) {
                bBU = true
            }
        }
        if (bBU) {
            this.Wj(-3)
        } else {
            this.US(-3)
        }
    };
    bc.Mf = function() {
        var kb = [];
        for (var i = this.fV.length - 1; i >= 0; i--) {
            if (this.fV[i].status == 2) {
                kb.unshift(this.fV[i].picInfo)
            }
        }
        return kb
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.bBP.parent = bf.button;
        this.CU && this.CU.bW();
        this.CU = bT.CN.bF(this.bBP);
        this.bs.style.display = "none";
        if (!!this.fV) {
            for (var i = this.fV.length - 1; i >= 0; i--) {
                bb.dW(this.fV[i].element, false);
                if (this.fV[i].dragger) this.fV[i].dragger.bW()
            }
        }
        this.fV = [];
        this.Vd = {};
        if (this.zE) {
            clearTimeout(this.zE)
        }
        this.US(0);
        this.HT = 0
    };
    bI.gN.bF({
        element: bT.VO,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        gm = NEJ.R,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        cA = bd("nej.ui"),
        bM = bd("nej.ut"),
        bc, bO;
    if (!!bM.oS) return;
    bM.oS = NEJ.C();
    bc = bM.oS.bU(bM.TV);
    bO = bM.oS.dr;
    bc.cz = function(bf) {
        this.bEp(bf.more);
        this.UN = bb.bG(bf.sbody);
        this.dq([
            [this.UN, "scroll", this.bEo.bi(this)]
        ]);
        var cjL = bf.delta;
        if (cjL == null) cjL = 30;
        this.WI = Math.max(0, cjL);
        var dE = parseInt(bf.count) || 0;
        this.jC = Math.max(0, dE);
        var gk = parseInt(bf.number) || 0;
        if (gk > 1 && gk <= dE) {
            this.xk = gk
        }
        this.cB(bf)
    };
    bc.cR = function() {
        this.cV();
        delete this.zc;
        delete this.UN;
        delete this.tB;
        delete this.UK
    };
    bc.xU = function(cq, cF) {
        var cK = this.wr + (this.jC - 1) * this.qF,
            gM = this.jC * this.qF;
        return bO.xU.call(this, cK, cq, gM, cF)
    };
    bc.bEp = function(UH) {
        this.zc = bb.bG(UH);
        this.dq([
            [this.zc, "click", this.qC.bi(this)]
        ])
    };
    bc.bBW = function(bC) {
        bC = bC || {};
        if (this.tB || !bC) return;
        if (!bC.scrollHeight) bC = bb.qr();
        var cq = bb.jX(this.jK),
            cjL = cq.y + this.jK.offsetHeight - bC.scrollTop - bC.clientHeight,
            bEm = bC.scrollHeight <= bC.clientHeight;
        if (cjL <= this.WI || bEm && !this.tB) {
            this.qC()
        }
    };
    bc.bEo = function(be) {
        if (this.tB) return;
        this.bBW(bj.bY(be))
    };
    bc.yc = function(be) {
        bO.yc.apply(this, arguments);
        if (!be.stopped) {
            this.Hu();
            var cq = 0;
            if (be.index > 1) {
                cq = this.wr + ((be.index - 1) * this.jC - 1) * this.qF
            }
            this.iL = cq;
            this.qC()
        }
    };
    bc.bzt = function(bf) {
        if (!!this.xk) {
            var cjL = bf.offset > 0 ? this.qF : this.wr,
                gM = cjL + this.qF * (this.xk - 1);
            this.iL = bf.offset + gM;
            bf.data.limit = gM;
            bf.limit = gM;
            delete this.xk
        }
        return bf
    };
    bc.beY = function(bf) {
        delete this.UK;
        bO.beY.apply(this, arguments);
        this.bBX()
    };
    bc.bfb = function(be) {
        if (be.key != this.jz.key) return;
        switch (be.action) {
            case "refresh":
            case "append":
                delete this.UK;
                break
        }
        bO.bfb.apply(this, arguments)
    };
    bc.Mu = function() {
        this.vR("onbeforelistload", "åˆ—è¡¨åŠ è½½ä¸­...");
        bb.ch(this.zc, "display", "none")
    };
    bc.bfG = function(bk, cq, gM) {
        var cF = bk.length,
            WW = bk.loaded ? cq + gM >= cF : cq + gM > cF;
        this.iL = Math.min(this.iL, cF);
        bb.ch(this.zc, "display", WW ? "none" : "");
        if (WW) this.tB = !0;
        if (this.jC > 0) {
            var cP = this.xU(cq, bk.length);
            if (this.bzv(cP.index, cP.total)) return !0;
            var cjL = this.wr - this.qF,
                gk = this.jC * this.qF;
            this.tB = (cq + gM - cjL) % gk == 0 || WW;
            bb.ch(this.zc, "display", this.tB ? "none" : "");
            this.bfp(this.tB && cP.total > 1 ? "" : "none")
        }
    };
    bc.bfE = function() {
        this.iL = 0;
        this.tB = !0;
        this.vR("onemptylist", "æ²¡æœ‰åˆ—è¡¨æ•°æ®ï¼")
    };
    bc.Um = function(eN, ll) {
        this.jK.insertAdjacentHTML(ll || "beforeEnd", eN)
    };
    bc.Up = function(iR) {
        this.gG = this.gG || [];
        if (bm.hh(iR)) {
            gm.push.apply(this.gG, iR)
        } else {
            this.gG.push(iR)
        }
    };
    bc.Ue = function(be) {
        bb.mB(this.dA);
        this.LM(be, "onafteradd");
        var fI = be.flag;
        if (be.stopped || !fI) return;
        if (this.jC > 0) {
            this.bfu();
            return
        }
        this.iL += 1;
        fI == -1 ? this.bzJ(be.data) : this.bHa(be.data)
    };
    bc.Ug = function(be) {
        this.LM(be, "onafterdelete");
        if (be.stopped) return;
        if (this.jC > 0) {
            this.bfu();
            return
        }
        var bB = be.data[this.fT.pkey];
        if (!!this.gG) {
            var bw = bb.bqa(bB),
                bv = bm.eg(this.gG, bw);
            if (bv >= 0) {
                this.gG.splice(bv, 1);
                this.iL -= 1
            }
            if (!!bw) bw.bW()
        } else {
            var bh = bb.bG(this.byZ(bB));
            if (!!bh) this.iL -= 1;
            bb.dW(bh)
        }
        if (this.iL <= 0) this.qC()
    };
    bc.bga = function(cq, gM) {
        if (cq != this.iL) return;
        if (this.OB()) {
            this.tB = !1;
            this.bBX()
        }
    };
    bc.bgb = function(cq, gM) {
        if (cq != 0) return;
        var Fv = this.bS.hT(this.jz.key);
        for (var i = gM - 1; i >= 0; i--) {
            this.bzJ(Fv[i])
        }
    };
    bc.bBX = function() {
        var bC = this.UN;
        if (!bC || this.tB) return;
        this.bBW(this.UN)
    };
    bc.hP = function() {
        delete this.tB;
        bO.hP.apply(this, arguments)
    };
    bc.qC = function() {
        if (!!this.UK) return;
        this.UK = !0;
        var cq = this.iL;
        this.iL += cq == 0 ? this.wr : this.qF;
        this.bzp(cq)
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        dY = bd("nej.x"),
        bM = bd("nej.ut"),
        bc;
    if (!!bM.BS) return;
    bM.BS = NEJ.C();
    bc = bM.BS.bU(bM.dZ);
    bc.cz = function(bf) {
        this.cB(bf);
        this.oJ = bf.event || "click";
        this.kj = bf.selected || "js-selected";
        this.nx = bf.disabled || "js-disabled";
        this.bBY = !!bf.inverse;
        this.bEj(bf.list);
        this.Xb(bf.index || 0)
    };
    bc.cR = function() {
        var bEe = function(bh) {
            this.Xf(bh, !1)
        };
        return function() {
            this.cV();
            bm.cv(this.dK, bEe, this);
            delete this.dK;
            delete this.oJ;
            delete this.dR;
            delete this.nx;
            delete this.kj;
            delete this.bBY
        }
    }();
    bc.bEj = function() {
        var bdz = function(bw) {
            if (!bw) return;
            this.dK.push(bw);
            var bv = this.dK.length - 1,
                fr = this.Xh[bv];
            if (!fr) {
                fr = this.Xb.bi(this, bv);
                this.Xh[bv] = fr
            }
            this.dq([
                [bw, this.oJ, fr]
            ])
        };
        return function(bk) {
            this.dK = [];
            if (!this.Xh) this.Xh = [];
            bm.cv(bk, bdz, this)
        }
    }();
    bc.Xf = function(bC, bDY) {
        !!bDY && !this.bBY ? bb.bJ(bC, this.kj) : bb.bH(bC, this.kj)
    };
    bc.Xb = function(bv, Ju, bl) {
        var bC = this.dK[bv];
        if (Ju != !0 && (bv == this.dR || !bC || bb.cU(bC, this.nx))) {
            bj.dp(arguments[1]);
            return this
        }
        var be = {
            index: bv,
            last: this.dR,
            list: this.qb(),
            data: bl || bb.bz(bC, "value")
        };
        this.dR = bv;
        bC = this.dK[be.last];
        if (!!bC) this.Xf(bC, !1);
        bC = this.dK[this.dR];
        this.Xf(bC, !0);
        this.bK("onchange", be);
        if (!be.nostop) bj.dp(arguments[1]);
        return this
    };
    bc.sp = function() {
        return this.dR
    };
    bc.qb = function() {
        return this.dK
    };
    bb.bDW = dY.bDW = function(cQ, bf) {
        var bB = bb.lr(cQ);
        if (!bB) return null;
        if (!bM.Rd(bB, bM.BS)) {
            bf = bf || {};
            bf.list = !bf.clazz ? bb.eu(bB) : bb.bP(bB, bf.clazz);
            delete bf.clazz
        }
        return bM.Rd(bB, bM.BS, bf || cg)
    };
    dY.isChange = !0
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bn = bd("nm.x");
    var SETTING_KEY = "player-setting";
    var mn = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mn = bA.sj(SETTING_KEY) || mn;
    bn.Xo = function() {
        return mn
    };
    bn.Dh = function(BG) {
        if (BG) {
            mn = BG;
            bA.wl(SETTING_KEY, BG)
        }
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bn = bd("nm.x"),
        bq = bd("nm.d"),
        hZ = bd("nm.w.player.log");
    var kt = bq.kQ.bF();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var sy = function(bu, cZ, ps) {
        var ew = bn.fX("{0} {1} {2}", bm.nc(new Date, "yyyy-MM-dd HH:mm:ss"), bu, cZ);
        if (ps == LogLevel.ERROR) {
            kt.mW("playerror", {
                message: cZ
            })
        }
        if (ps >= LogLevel.INFO) {
            kt.bQH(ew)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(ew)
        }
    };
    hZ.dh = function() {
        sy("PLAY_ERROR", bn.fX.apply(null, arguments), LogLevel.ERROR)
    };
    hZ.ou = function() {
        sy("PLAY_INFO", bn.fX.apply(null, arguments), LogLevel.INFO)
    };
    hZ.cgz = function() {
        sy("PLAY_DEBUG", bn.fX.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bm = bd("nej.u"),
        bT = bd("nm.w"),
        lI = bd("flash.cb");
    var fs = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Bt, Uw, sP;
    bT.bDD = function(bu, gP) {
        if (bu != "flash") {
            if (!Bt) {
                Bt = bb.ef("audio");
                bm.cv(fs, function(bu) {
                    bj.bt(Bt, bu, onMediaCallBack)
                })
            }
            if (Bt && Bt.canPlayType && Bt.canPlayType("audio/mpeg")) {
                gP(new MediaWrap("audio"));
                return
            }
        }
        if (!Uw) {
            bb.rW({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hQ) {
                    Uw = hQ;
                    bm.cv(fs, function(bu) {
                        lI[bu] = onMediaCallBack;
                        Uw.addCallback(bu, "flash.cb." + bu)
                    });
                    gP(new MediaWrap("flash"))
                }.bi(this)
            })
        } else {
            gP(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Bq) {
        var lj;
        bI.gN.bF({
            element: this,
            event: fs.concat(["interrupt", "recover"])
        });
        lj = Bq == "audio" ? Bt : Uw;
        this.type = Bq;
        this.destroy = function() {};
        this.setSrc = function(bZ) {
            if (sP != this) {
                var ij = sP;
                if (ij) {
                    ij.interrupt()
                }
                sP = this
            }
            if (Bq == "flash") {
                lj.setSrc(bZ)
            } else {
                lj.src = bZ
            }
        };
        this.play = function() {
            if (sP != this) {
                var ij = sP;
                if (ij) {
                    ij.interrupt();
                    sP = this;
                    this.recover()
                } else {
                    sP = this
                }
            }
            if (Bq == "flash") {
                lj.as_play()
            } else {
                lj.play()
            }
        };
        this.pause = function() {
            if (sP != this) return;
            if (Bq == "flash") {
                lj.as_pause()
            } else {
                lj.pause()
            }
        };
        this.load = function() {
            if (sP != this) return;
            if (Bq == "flash") {
                lj.as_load()
            } else {
                lj.load()
            }
        };
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function() {
            return lj
        };
        var ol = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        bm.cv(ol, function(bX) {
            var Lo = "get" + bX,
                Ls = "set" + bX;
            if (Bq == "flash") {
                if (!this[Lo]) {
                    this[Lo] = function() {
                        return lj[Lo]()
                    }
                }
                if (!this[Ls]) {
                    this[Ls] = function(value) {
                        lj[Ls](value)
                    }
                }
            } else {
                var bCl = bX.slice(0, 1).toLowerCase() + bX.slice(1);
                if (!this[Lo]) {
                    this[Lo] = function() {
                        return lj[bCl]
                    }
                }
                if (!this[Ls]) {
                    this[Ls] = function(value) {
                        lj[bCl] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(be) {
        if (sP) {
            bj.bK(sP, be.type, be)
        }
    }
})();
(function() {
    var bd = NEJ.P,
        bj = bd("nej.v"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        ej = bd("nej.p"),
        bT = bd("nm.w"),
        bn = bd("nm.x"),
        hZ = bd("nm.w.player.log"),
        bc;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bCm = false;
    bT.hB = NEJ.C();
    bc = bT.hB.bU(bI.dZ);
    bc.cz = function(bf) {
        this.cB(bf);
        this.dz = {};
        this.Uq(bf.media);
        bA.cG("/api/cdns", {
            type: "json",
            onload: function(be) {
                if (be.code) {
                    this.px = be.data
                }
            }.bi(this)
        })
    };
    bc.cR = function() {
        this.cV();
        delete this.dz
    };
    bc.Un = function(co) {
        if (!co) return;
        var yf = this.dz.volume;
        if (this.ep) {
            this.ep.pause()
        }
        this.dz = {
            time: 0,
            id: co.id,
            duration: co.duration / 1e3,
            play: this.dz.play,
            stalledRetryCount: 0
        };
        if (yf != null) {
            this.dz.volume = yf
        }
        this.dz.loadState = LoadState.LOAD_START;
        this.bCo(co.id);
        hZ.ou("play song id: {0}", co.id)
    };
    bc.hj = function() {
        if (this.dz.error) {
            this.dz.error = null;
            if (this.dz.error == ErrorType.INFO_GET_ERR || this.bCA()) {
                this.bCE()
            } else {
                this.MG()
            }
        } else {
            if (this.ep) {
                this.ep.play()
            }
        }
        this.dz.play = true;
        this.oC("play")
    };
    bc.iC = function() {
        if (this.ep) {
            this.ep.pause()
        }
        this.dz.play = false;
        this.oC("pause")
    };
    bc.qH = function(cT) {
        if (this.ep) {
            this.ep.setCurrentTime(cT)
        }
        this.dz.time = cT;
        hZ.ou("seek to: {0}", cT)
    };
    bc.Yd = function() {
        return this.dz.duration || 0
    };
    bc.uv = function() {
        return !!this.dz.play
    };
    bc.oF = function(NA) {
        this.dz.volume = NA;
        if (this.ep) {
            this.ep.setVolume(NA)
        }
    };
    bc.Yk = function() {
        return this.dz.time
    };
    bc.Uq = function(bu) {
        bT.bDD(bu, function(lj) {
            this.ep = lj;
            hZ.ou("media loaded: {0}", lj.type);
            this.dq([
                [this.ep, "loadedmetadata", this.bDo.bi(this)],
                [this.ep, "ended", this.bDn.bi(this)],
                [this.ep, "waiting", this.AL.bi(this)],
                [this.ep, "play", this.GX.bi(this)],
                [this.ep, "pause", this.bDh.bi(this)],
                [this.ep, "playing", this.Yv.bi(this)],
                [this.ep, "timeupdate", this.bDg.bi(this)],
                [this.ep, "progress", this.tU.bi(this)],
                [this.ep, "stalled", this.bDf.bi(this)],
                [this.ep, "interrupt", this.iC.bi(this)],
                [this.ep, "recover", this.bDb.bi(this)],
                [this.ep, "error", this.hi.bi(this)]
            ]);
            if (this.dz) {
                if (this.dz.loadState == LoadState.LOAD_START || this.dz.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.YA();
                    if (this.dz.volume != null) {
                        this.ep.setVolume(this.dz.volume)
                    }
                }
            }
        }.bi(this))
    };
    bc.bDa = function(bu) {
        this.XI();
        this.ep.destroy();
        this.dz.loadState = LoadState.IN_SWITCH_MEDIA;
        this.AL();
        this.Uq(bu);
        hZ.ou("switch media")
    };
    bc.cgK = function() {
        return this.ep
    };
    bc.bCo = function() {
        this.AL();
        bA.cG("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.dz.id]),
                br: DEFAULT_BR
            },
            onload: this.bCI.bi(this),
            onerror: this.bCI.bi(this)
        })
    };
    bc.bCI = function(be) {
        if (be.code == 200 && be.data && be.data.length) {
            var cP = be.data[0];
            if (!cP.url) {
                this.dz.error = ErrorType.INFO_GET_ERR;
                this.oC("error", {
                    code: this.dz.error
                });
                return
            }
            this.dz.mp3url = cP.url;
            this.dz.expireTime = (new Date).getTime() + cP.expi * 1e3;
            this.YA()
        } else {
            this.dz.error = ErrorType.INFO_GET_ERR;
            this.oC("error", {
                code: this.dz.error
            });
            hZ.dh("info load error")
        }
    };
    bc.YA = function() {
        if (this.ep) {
            var bZ = this.dz.mp3url;
            if (this.dz.time > 0 && (this.dz.loadState == LoadState.IN_RE_GET_URL || this.dz.loadState == LoadState.IN_RE_GET_URL)) {
                bZ += "#t=" + this.dz.time
            }
            this.ep.setSrc(bZ);
            hZ.ou("load mp3: {0},loadState: {1}.", bZ, this.dz.loadState)
        }
    };
    bc.bCJ = function() {
        if (/#t=(\d+)$/.test(this.ep.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    bc.MG = function() {
        var cT = parseInt(this.dz.time) || 0,
            bCT = this.bCJ();
        if (cT === bCT) {
            this.ep.load()
        } else {
            this.ep.setSrc(this.dz.mp3url + "#t=" + cT)
        }
        this.dz.loadState = LoadState.IN_RELOAD;
        this.AL();
        hZ.ou("reload from: {0}", cT)
    };
    bc.bCE = function() {
        this.dz.loadState = LoadState.IN_RE_GET_URL;
        this.bCo()
    };
    bc.bCM = function() {
        var tW = getHost(this.dz.mp3url);
        if (tW) {
            for (var i = 0; i < this.px.length; i++) {
                var ku = this.px[i] || [],
                    bv = ku.indexOf(tW);
                if (bv >= 0 && ku.length > 1) {
                    return ku[(bv + 1) % ku.length]
                }
            }
        }

        function getHost(bZ) {
            if (CDN_HOST_REG.test(bZ)) return RegExp.$1
        }
    };
    bc.bCO = function() {
        this.dz.mp3url = this.dz.mp3url.replace(CDN_HOST_REG, this.bCM());
        this.dz.loadState = LoadState.IN_SWITCH_CDN;
        this.YA();
        this.AL()
    };
    bc.bDo = function() {
        if (this.dz.loadState == LoadState.LOAD_START) {
            this.dz.loadState = LoadState.LOADED_META;
            if (this.ep.type == "audio") {
                this.dz.duration = this.ep.getDuration()
            }
            this.oC("loadedmeta", {
                duration: this.dz.duration
            })
        } else {
            this.dz.loadState = LoadState.LOADED_META
        }
        if (this.dz.play) {
            this.ep.play()
        } else {
            this.ep.pause()
        }
        if (this.dz.time && parseInt(this.dz.time) != this.bCJ()) {
            this.ep.setCurrentTime(this.dz.time)
        }
        this.YL();
        this.Yv();
        bCm = true;
        hZ.ou("loaded meta")
    };
    bc.bDn = function() {
        this.dz.ended = true;
        this.oC("ended")
    };
    bc.AL = function() {
        if (!this.dz.waiting) {
            this.dz.waiting = true;
            this.dz.waitTimestamp = +(new Date);
            this.oC("waiting")
        }
    };
    bc.Yv = function() {
        this.dz.waiting = false;
        this.dz.waitTimestamp = 0;
        this.oC("playing")
    };
    bc.GX = function() {
        this.oC("play")
    };
    bc.bDh = function() {
        this.oC("pause")
    };
    bc.bDg = function() {
        if (this.dz.loadState != LoadState.LOADED_META) return;
        var cT = this.ep.getCurrentTime();
        if (this.dz.waiting && cT > this.dz.time) {
            this.Yv()
        }
        this.dz.time = cT;
        this.oC("timeupdate", {
            time: this.dz.time,
            duration: this.dz.duration
        })
    };
    bc.tU = function(be) {
        if (this.dz.loadState != LoadState.LOADED_META) return;
        var bp = {};
        if (be.data) {
            bp.total = be.data.total;
            bp.loaded = be.data.loaded
        } else {
            var TX = this.ep.getBuffered(),
                cT = this.ep.getCurrentTime(),
                qV = 0;
            for (var i = 0; i < TX.length; i++) {
                if (cT > TX.start(i) && cT < TX.end(i)) {
                    qV = TX.end(i);
                    break
                }
            }
            bp.total = this.dz.duration;
            bp.loaded = Math.min(qV, bp.total)
        }
        this.oC("progress", bp)
    };
    bc.YL = function() {
        if (this.dz.retry) {
            clearTimeout(this.dz.retry.tid);
            this.dz.retry = null
        }
    };
    bc.hi = function() {
        var dc = this.ep.getError();
        hZ.dh("media error code: {0}, netState: {1}", dc.code, this.ep.getNetworkState());
        if (dc.code == MediaError.MEDIA_ERR_NETWORK || dc.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var BG = bn.Xo();
            if (!this.dz.retry) {
                this.dz.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.dz.retry.tid)
            }
            if (this.dz.retry.level == RetryLevel.NONE) {
                if (this.bCA()) {
                    this.dz.retry.level = RetryLevel.GET_URL;
                    this.bCE();
                    hZ.ou("Url expired, get url.")
                } else {
                    this.dz.retry.level = RetryLevel.RELOAD;
                    this.dz.retry.tid = setTimeout(this.MG.bi(this), 3e3);
                    hZ.ou("Reload mp3 3s later.")
                }
            } else if (this.dz.retry.level == RetryLevel.GET_URL) {
                this.dz.retry.level = RetryLevel.RELOAD;
                this.dz.retry.tid = setTimeout(this.MG.bi(this), 3e3);
                hZ.ou("Reload mp3 3s later.")
            } else if (this.dz.retry.level == RetryLevel.RELOAD) {
                this.dz.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCM()) {
                    this.dz.retry.tid = setTimeout(this.bCO.bi(this), 5e3);
                    hZ.ou("Switch CDN 5s later.")
                } else {
                    this.dz.retry.tid = setTimeout(this.MG.bi(this), 5e3);
                    hZ.ou("Reload mp3 5s later.")
                }
            } else if (!bCm && this.ep.type == "audio" && !BG.useFlash && !ej.Hj.mac && bn.bcX().supported) {
                BG.useFlash = true;
                bn.Dh(BG);
                this.bDa("flash")
            } else {
                this.YL();
                this.iC();
                this.dz.error = ErrorType.NET_ERR;
                this.oC("error", {
                    code: this.dz.error
                });
                hZ.dh("error can not retry.")
            }
        } else {
            this.YL();
            this.iC();
            this.dz.error = ErrorType.UNKNOWN_ERR;
            this.oC("error", {
                code: this.dz.error
            });
            hZ.dh("error can not retry.")
        }
    };
    bc.bDf = function() {
        var kZ = 0,
            bCK = 5e3;
        return function() {
            this.AL();
            clearTimeout(kZ);
            setTimeout(function() {
                var jm = +(new Date);
                if (this.dz.waiting && jm - this.dz.waitTimestamp >= bCK && this.dz.stalledRetryCount < MAX_STALLED_RETRY) {
                    hZ.ou("stalled too long retry.");
                    this.dz.stalledRetryCount++;
                    this.MG()
                }
            }.bi(this), bCK);
            hZ.ou("stalled")
        }
    }();
    bc.bCA = function() {
        var jm = +(new Date);
        return jm > this.dz.expireTime
    };
    bc.bDb = function() {
        var cT = parseInt(this.dz.time) || 0;
        this.ep.setSrc(this.dz.mp3url + "#t=" + cT);
        this.dz.loadState = LoadState.IN_RELOAD;
        this.AL();
        hZ.ou("recover from: {0}", cT)
    };
    bc.oC = function(cl, bl) {
        bj.bK(bT.hB, "playaction", {
            action: cl,
            data: bl || {}
        })
    };
    bI.gN.bF({
        element: bT.hB,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var bd = NEJ.P,
        bj = bd("nej.v"),
        bI = bd("nej.ut"),
        bT = bd("nm.w"),
        bc;
    bT.Ax = NEJ.C();
    bc = bT.Ax.bU(bT.hB);
    bO = bT.Ax.dr;
    bc.dv = function() {
        this.dC()
    };
    bc.bCV = function(cJ) {
        this.Un(cJ);
        this.hj()
    };
    bc.YQ = function() {
        this.iC()
    };
    bc.ud = function(be) {
        if (be.action == "play") {
            this.iC()
        }
    };
    bc.oC = function(cl, bl) {
        bj.bK(bT.Ax, "tmpplayaction", {
            action: cl,
            data: bl || {},
            tmp: true
        })
    };
    bc.ry = function() {
        return this.dz
    };
    bI.gN.bF({
        element: bT.Ax,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        iW = bd("nej.n"),
        bA = bd("nej.j"),
        bI = bd("nej.ut"),
        cA = bd("nej.ui"),
        bT = bd("nm.w"),
        bo = bd("nm.l"),
        lM = bd("nm.c"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bc, bO, TS = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var YV = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    bT.YW = NEJ.C();
    bc = bT.YW.bU(cA.gh);
    bc.dv = function(bf) {
        this.dC(bf);
        var bk = bb.bP(this.bs, "j-flag");
        this.cgL = bk.shift();
        this.bDe = bk.shift();
        this.Dw = bk.shift();
        this.bCG = bk.shift();
        this.Zc = [bk.shift(), bk.shift(), bk.shift(), bk.shift(), bk.shift(), bk.shift()];
        this.Ze = bk.shift();
        this.bCy = bk.shift();
        this.qp = {
            list: this.Zc,
            selected: "z-curr",
            onchange: this.bCx.bi(this)
        };
        bj.bt(this.Dw, "input", this.TQ.bi(this));
        bj.bt(this.Dw, "propertychange", this.TQ.bi(this));
        bj.bt(this.Dw, "keyup", this.TQ.bi(this));
        bj.bt(this.bDe, "click", this.TQ.bi(this));
        bj.bt(this.Ze, "click", this.dM.bi(this));
        bj.bt(this.bCy, "click", function() {
            this.bK("oncancel", {})
        }.bi(this));
        this.bS = bq.Af.iE();
        this.Ib = top.nm.w.Ax.iE();
        bI.gN.bF({
            element: top.nm.w.Ax,
            event: ["tmpplayaction"]
        });
        this.tK = {
            limit: 100,
            offset: 0,
            parent: this.Ze,
            onbeforelistload: this.pF.bi(this)
        };
        bj.bt(top.nm.w.Ax, "tmpplayaction", this.ud.bi(this))
    };
    bc.dx = function() {
        this.dy = "m-xwgt-publish-search"
    };
    bc.cz = function(bf) {
        this.cB(bf);
        if (!!this.xA) {
            this.xA.bW();
            delete this.xA
        }
        this.qp.index = YV[bf.type || "song"];
        this.xA = bI.BS.bF(this.qp);
        this.Dw.value = "";
        this.Dw.focus();
        this.si = "";
        this.cgD = 0;
        if (bf.showMV == true) {
            this.Zc[YV["mv"]].parentNode.style.display = "";
            bb.bJ(this.bCG, "srchtab-1")
        } else {
            this.Zc[YV["mv"]].parentNode.style.display = "none";
            bb.bH(this.bCG, "srchtab-1")
        }
        if (!!this.eI) {
            this.eI = this.eI.bW()
        }
        if (bf.hideBack) {
            bb.bJ(this.bCy.parentNode, "f-hide")
        }
    };
    bc.cR = function() {
        this.Ib.YQ();
        this.cV()
    };
    bc.TQ = function() {
        var value = this.Dw.value.trim();
        if (value && value.length) {
            if (value != this.si) {
                this.si = value;
                this.bCx({
                    index: this.xA.sp()
                })
            }
        } else {
            if (this.eI) {
                this.eI = this.eI.bW()
            }
        }
        this.si = value
    };
    bc.dM = function() {
        var bDC = function(bC) {
                return bb.cU(bC, "sitm") || bb.cU(bC, "itm") || bb.cU(bC, "mv-item")
            },
            bDE = function(bC) {
                return bb.cU(bC, "ply")
            },
            bCj = function() {
                bo.ci.bR({
                    type: 2,
                    tip: "å› åˆä½œæ–¹è¦æ±‚ï¼Œè¯¥èµ„æºéœ€ä»˜è´¹ä½¿ç”¨"
                })
            },
            bDF = function() {
                bo.ci.bR({
                    type: 2,
                    tip: "å› åˆä½œæ–¹è¦æ±‚ï¼Œè¯¥èµ„æºéœ€ä¸‹è½½åŽæ’­æ”¾"
                })
            },
            Zv = function(co) {
                if (co && co.privilege && co.privilege.toast) {
                    bA.cG("/api/song/toast", {
                        query: {
                            id: co.id
                        },
                        type: "json",
                        onload: vd.bi(this),
                        onerror: vd.bi(this)
                    })
                } else {
                    uL()
                }
            },
            vd = function(bV) {
                uL((bV || cg).toast)
            },
            uL = function(cZ) {
                bo.ci.bR({
                    type: 2,
                    tip: cZ || "å› åˆä½œæ–¹è¦æ±‚ï¼Œè¯¥èµ„æºæš‚æ—¶ä¸‹æž¶>_<"
                })
            };
        return function(be) {
            var Al = bj.bY(be, bDE),
                bk = bj.bY(be, bDC),
                gf = this.Ib.ry();
            if (!!bk) {
                bj.cu(be);
                this.Is = bb.bz(bk, "id");
                this.It = bb.bz(bk, "type");
                if (this.It == 18) {
                    var cJ = this.bS.fw(this.Is),
                        ps = bn.oP(cJ);
                    if (!Al) {
                        if (ps == 10) {
                            bCj();
                            return
                        } else if (ps == 100) {
                            Zv(cJ);
                            return
                        }
                    } else {
                        if (ps == 10) {
                            bCj();
                            return
                        } else if (ps == 100) {
                            Zv(cJ);
                            return
                        } else if (ps == 11) {
                            bDF();
                            return
                        } else {
                            bb.bH(this.xv, "z-pause z-loading");
                            if (Al == this.xv && gf.play && !gf.ended) {
                                this.Ib.YQ()
                            } else {
                                this.xv = Al;
                                this.Ib.bCV(cJ)
                            }
                            return
                        }
                    }
                } else if (this.It == 70) {
                    if (bb.cU(bk, "z-noprogram")) {
                        bo.ci.bR({
                            type: 2,
                            tip: "ä¸èƒ½åˆ†äº«æ²¡æœ‰èŠ‚ç›®çš„ç”µå°"
                        });
                        return
                    }
                }
                this.bDL()
            }
        }
    }();
    bc.bDL = function() {
        var hU = this.bS.fw(this.Is),
            rC = bn.bvi(this.It, hU);
        rC.title = rC.title || "";
        rC.author = rC.author || "";
        rC.picUrl = rC.picUrl || "";
        rC.authors = rC.authors || "";
        if (this.It == 70) {
            this.Is = this.Is.slice(0, -4)
        }
        this.bK("onfinish", {
            id: this.Is,
            type: this.It,
            data: rC
        })
    };
    bc.ud = function(be) {
        var bl = be.data;
        if (!this.xv) {
            return
        }
        switch (be.action) {
            case "play":
                bb.gL(this.xv, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                bb.bH(this.xv, "z-pause z-loading");
                break;
            case "error":
                bo.ci.bR({
                    type: 2,
                    tip: "è¯•å¬é‡åˆ°é—®é¢˜ï¼Œæ’­æ”¾å¤±è´¥"
                });
                bb.bH(this.xv, "z-pause z-loading");
                break;
            case "playing":
                bb.gL(this.xv, "z-loading", "z-pause");
                break;
            case "waiting":
                bb.gL(this.xv, "z-pause", "z-loading");
                break
        }
    };
    bc.bEb = function(be) {
        if (be.result.code == 407) {
            this.Ze.innerHTML = '<div class="n-norlt s-fc1">æ ¹æ®ç›¸å…³æ³•å¾‹æ³•è§„å’Œæ”¿ç­–ï¼Œæœç´¢ç»“æžœæœªäºˆæ˜¾ç¤º</div>';
            return
        }
        this.Ze.innerHTML = '<div class="n-norlt s-fc1">é¡µé¢å‡ºé”™ï¼Œè¯·ç¨åŽå†è¯•ï¼</div>'
    };
    bc.bCx = function(be) {
        if (!this.si || be.index < 0 || be.index > 5) {
            return
        }
        this.Ib.YQ();
        var cj = TS[be.index],
            bf = NEJ.X({}, this.tK);
        bf.cache = {
            klass: bq.Af,
            clear: true,
            onerror: this.bEb.bi(this)
        };
        bf.cache.lkey = "search-publish-" + cj.type + "-" + this.si;
        bf.item = {
            klass: cj.item,
            getRestrictLevel: bn.oP,
            dur2time: bn.nJ
        };
        if (!bf.cache.data) {
            bf.cache.data = {}
        }
        bf.cache.data.s = this.si;
        bf.cache.data.type = cj.type;
        bf.cache.data.isPub = true;
        if (cj.type == 1) {
            bf.cache.data.hlpretag = '<span class="s-fc7">';
            bf.cache.data.hlposttag = "</span>"
        }
        bf.onemptylist = this.bEc.bi(this, this.si);
        if (!!this.Ae) this.bS.wy(this.Ae);
        if (!!this.eI) {
            this.eI = this.eI.bW()
        }
        this.eI = bI.oS.bF(bf);
        this.Ae = bf.cache.lkey
    };
    bc.pF = function(be) {
        be.value = bb.jZ("m-publish-search-loading")
    };
    bc.bEc = function(bN, be) {
        bb.fR(be.parent, "m-publish-emtpy-message", {
            key: bN
        });
        be.stopped = true
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        ej = bd("nej.p"),
        bA = bd("nej.j"),
        fc = bd("nej.ut"),
        di = bd("nej.ui"),
        bT = bd("nm.w"),
        bc, bO;
    var bEf = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    bT.zY = NEJ.C();
    bc = bT.zY.bU(di.gh);
    var iq = bb.gs("m-wgt-receiverInput");
    var bEk = bb.gs("m-wgt-receiverList");
    var iP = bb.rA(bEf);
    var bEq = bb.gs('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="åˆ é™¤">&times;</a></div>');
    bc.dv = function(bf) {
        this.ck = [];
        this.uG = bf.receiver || null;
        this.bEu = bf.unique || false;
        this.uI = bf.err;
        this.bBS(this.bBG, bf.uid);
        this.dC(bf)
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.cmW();
        this.Jb();
        this.Tj();
        if (bf.receiver) this.bab(bf.receiver.nickname, bf.receiver.userId);
        bb.ch(this.xR, "display", "block");
        bb.ch(this.bad, "cursor", "text");
        bb.ch(this.xR, "cursor", "text")
    };
    bc.dx = function() {
        var bl = this.bBE();
        this.dy = bb.kg(bb.dg(iq, {
            receiver: this.uG,
            users: bl
        }));
        this.lz = iP
    };
    bc.dm = function() {
        this.dw();
        var cI = bb.bP(this.bs, "j-flag");
        var iR = bb.bP(this.bs, "j-item");
        this.bad = cI[0];
        this.bBD = cI[1];
        this.eP = cI[2];
        this.xR = cI[3];
        this.Td = cI[4];
        this.ban = cI[5];
        this.gG = iR;
        bb.bJ(this.gG[0], "j-selected");
        bj.bt(this.eP, "keyup", this.bao.bi(this));
        bj.bt(this.eP, "keydown", this.Jp.bi(this));
        bj.bt(this.eP, "focus", this.kU.bi(this));
        bj.bt(this.Td, "click", this.bEY.bi(this));
        bj.bt(this.bad, "click", this.bEZ.bi(this));
        bj.bt(document.body, "click", this.og.bi(this));
        bj.bt(this.eP, "input", this.iy.bi(this));
        bj.bt(this.eP, "blur", this.ot.bi(this))
    };
    bc.cR = function(bf) {
        bj.oz(document.body, "click", this.og.bi(this));
        this.cV();
        this.Tj();
        this.bFb();
        this.og()
    };
    bc.bao = function(be) {
        bj.cu(be);
        var jE = be.keyCode || be.which;
        var cm = this.eP.value;
        var cF = this.gG.length;
        var qN = bb.bP(this.bs, "j-selected")[0];
        switch (jE) {
            case 13:
                var lX = bb.ix(qN, "data-username");
                var je = bb.ix(qN, "data-userId");
                this.bab(lX, je);
                this.og();
                this.eP.value = "";
                break;
            case 38:
                var bv = bb.ix(qN, "data-index") - 1 < 0 ? cF - 1 : bb.ix(qN, "data-index") - 1;
                bb.bH(qN, "j-selected");
                bb.bJ(this.gG[bv], "j-selected");
                break;
            case 40:
                var bv = parseInt(bb.ix(qN, "data-index")) + 1 >= cF ? 0 : parseInt(bb.ix(qN, "data-index")) + 1;
                bb.bH(qN, "j-selected");
                bb.bJ(this.gG[bv], "j-selected");
                break;
            default:
                this.tQ()
        }
    };
    bc.Jp = function(be) {
        var jE = be.keyCode || be.which;
        var cm = this.eP.value;
        var bv = bb.bP(this.bs, "j-receiver").length - 1;
        if (jE === 8 && cm === "") this.bFf(bv)
    };
    bc.iy = function(be) {
        var cm = this.eP.value;
        if (cm.length > 10) {
            this.eP.value = cm.substring(0, 10);
            return
        }
        ej.ek.browser == "ie" && ej.ek.version < "7.0" ? setTimeout(this.baI.bi(this), 0) : this.baI();
        this.Jb()
    };
    bc.kU = function() {
        if (this.ck[0]) this.tQ();
        else this.bBS(this.bFg);
        bb.ch(this.xR, "display", "none")
    };
    bc.ot = function() {
        var cF = bb.bP(this.bs, "j-receiver").length;
        if (this.eP.value.trim() == "" && cF <= 0) bb.ch(this.xR, "display", "block")
    };
    bc.bab = function(lX, je) {
        var DM = this.Kg();
        if (DM.length >= 10) {
            this.eH();
            return
        }
        var cA;
        for (cA = 0; cA < DM.length; cA++) {
            if (DM[cA] == je) {
                this.og();
                return
            }
        }
        if (!lX || !je) return;
        var bh = bb.fg(bb.kg(bb.dg(bEq, {
            username: lX,
            userId: je
        })));
        var cQ = this.bBD.parentNode;
        if (this.bEu) {
            this.Tj()
        }
        cQ.insertBefore(bh, this.bBD);
        this.eP.value = "";
        var cF = bb.bP(this.bs, "j-receiver").length;
        if (cF > 1) bb.ch(this.xR, "display", "none");
        this.baI();
        this.Jb()
    };
    bc.Tj = function() {
        var Kh = bb.bP(this.bs, "j-receiver");
        var cA;
        if (Kh.length > 0) {
            for (cA = 0; cA < Kh.length; cA++) {
                bb.dW(Kh[cA], false)
            }
        }
    };
    bc.bFb = function() {
        this.eP.value = ""
    };
    bc.bFf = function(bv) {
        this.eH(!0);
        var Kh = bb.bP(this.bs, "j-receiver");
        bb.dW(Kh[bv], false);
        this.Jb()
    };
    bc.tQ = function() {
        var cm = this.eP.value;
        var cN = cm.trim().toLowerCase();
        var bl;
        cN = cN.replace(/\[/g, "\\[");
        cN = cN.replace(/\]/g, "\\]");
        bl = this.bBE(cN);
        this.bFj(bl)
    };
    bc.og = function(be) {
        bb.ch(this.Td, "display", "none")
    };
    bc.eH = function(hl) {
        if (hl && this.uI) {
            bb.ch(this.uI, "display", "none");
            return
        }
        if (this.uI) bb.ch(this.uI, "display", "block")
    };
    bc.bEY = function(be) {
        bj.dp(be);
        var eB = be.target || be.srcElement;
        if (bb.cU(eB, "j-flag")) return;
        var cQ = eB.nodeName.toLowerCase() == "a" ? eB.parentNode : eB.parentNode.parentNode;
        var lX = bb.ix(cQ, "data-username");
        var je = bb.ix(cQ, "data-userId");
        this.bab(lX, je);
        this.og();
        bb.ch(this.xR, "display", "none")
    };
    bc.bEZ = function(be) {
        bj.cu(be);
        var eB = be.target || be.srcElement;
        if (bb.cU(eB.parentNode, "j-receiver")) {
            bb.dW(eB.parentNode, false);
            this.eH(!0);
            this.Jb()
        } else this.eP.focus()
    };
    bc.baI = function() {
        this.ban.innerHTML = this.eP.value;
        var eZ = this.ban.offsetWidth + 2;
        bb.ch(this.eP, "width", eZ + "px")
    };
    bc.Jb = function() {
        var SU = bb.jX(this.eP, this.bs).y;
        var bBl = Math.floor((SU - 8) / 27);
        if (bBl < 0) return;
        bb.ch(this.bad, "height", 19 + bBl * 29 + "px")
    };
    bc.cmW = function() {
        var po = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < po.length; i++) {
            bb.ch(this.ban, po[i], bb.ey(this.eP, po[i]))
        }
    };
    bc.bBS = function(gP, bB) {
        var fh = bB ? bB : window.GUser.userId;
        var bZ = "/api/user/getfollows/" + fh;
        var gy = bA.cG(bZ, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: gP.bi(this),
            onerror: function(bl) {
                this.ck = []
            },
            onbeforerequest: function(bl) {}
        })
    };
    bc.bBG = function(bl) {
        this.ck = JSON.parse(bl).follow || [];
        var bB = GUser.userId;
        for (var i = 0; i < this.ck.length; i++) {
            if (this.ck[i].userId == bB) {
                this.ck.splice(i, 1);
                continue
            }
            this.ck[i].avatarUrl = this.ck[i].avatarUrl + "?param=30y30"
        }
    };
    bc.bFg = function(bl) {
        if (this.ck[0]) return;
        this.bBG(bl);
        this.tQ()
    };
    bc.bBE = function(cN) {
        var cN = cN ? cN : "";
        this.ck = this.ck[0] ? this.ck : [];
        var cF = this.ck.length;
        var KD = this.Kg();
        var rL = [];
        var KI, KJ, bbb;
        if (!this.ck[0]) return rL;
        for (var cA = 0; cA < cF; cA++) {
            bbb = false;
            for (var bA = 0; bA < KD.length; bA++) {
                if (this.ck[cA].userId == KD[bA]) {
                    bbb = true;
                    break
                }
            }
            if (bbb) continue;
            KI = this.ck[cA].nickname.toLowerCase().search(cN);
            KJ = this.ck[cA].py ? this.ck[cA].py.toLowerCase().search(cN) : -1;
            if (KI !== -1 || KJ != -1) rL.push(this.ck[cA])
        }
        return rL
    };
    bc.bFj = function(bl) {
        bb.fR(this.Td, bEk, {
            users: bl
        });
        bb.bJ(bb.bP(this.bs, "j-item")[0], "j-selected");
        this.gG = bb.bP(this.bs, "j-item");
        bb.ch(this.Td, "display", "block")
    };
    bc.Kg = function() {
        var rL = bb.bP(this.bs, "j-receiver") || [];
        var je = [];
        for (var i = 0; i < rL.length; i++) {
            je.push(bb.ix(rL[i], "data-id"))
        }
        return je
    };
    bc.cgm = function() {
        var je = this.Kg();
        var rL = [];
        for (var i = 0; i < je.length; i++) {
            for (var j = 0; j < this.ck.length; j++) {
                if (je[i] == this.ck[j].userId) rL.push(this.ck[j])
            }
        }
        return rL
    };
    bc.bFK = function() {
        this.Tj()
    };
    bT.zY.bR = function(bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            bo.oj.bR({
                title: "ç™»å½•"
            });
            return
        }
        bf = bf || {};
        if (bf.parent === undefined) bf.parent = document.body;
        !!this.fJ && this.fJ.bW();
        this.fJ = this.bF(bf)
    };
    bT.zY.cw = function() {
        !!this.fJ && this.fJ.bW()
    };
    bT.zY.DP = function() {
        return this.og()
    };
    bT.zY.cgl = function() {
        return this.tQ()
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bm = bd("nej.u"),
        bj = bd("nej.v"),
        bn = bd("nm.x"),
        bo = bd("nm.l"),
        bc, bO;
    bo.DQ = NEJ.C();
    bc = bo.DQ.bU(bo.YI);
    bO = bo.DQ.dr;
    bc.cz = function() {
        var Cd;
        var bFO = function(bD, bN) {
            Cd = Cd || [];
            if (bN != "18") Cd.push({
                key: bN,
                value: bD
            })
        };
        return function(bf) {
            this.cB(bf);
            if (!Cd) {
                var cE = bn.bOD();
                bm.fo(cE, bFO)
            }
            var cF = Cd.length;
            Cd.splice(cF - 2, 0, {
                key: "18",
                value: "186"
            });
            this.ST = Cd
        }
    }();
    bc.dx = function() {
        this.dy = "ntp-portrait"
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.cW = bk[0];
        this.bFT = bk[1];
        this.bFU = bk[2];
        this.bFX = bk[3];
        bj.bt(this.cW, "click", this.vG.bi(this));
        bj.bt(this.bFT, "click", this.BZ.bi(this, 1));
        bj.bt(this.bFX, "click", this.BZ.bi(this, 2))
    };
    bc.bbt = function(bv) {
        this.SF = bv;
        var cq = (bv - 1) * 50;
        var bk = this.ST.slice(cq, Math.min(cq + 50, this.ST.length));
        this.cW.innerHTML = bb.dg("jst-portrait", {
            plist: bk
        }, {
            purl: bn.bum
        });
        this.bFU.innerText = bv + "/" + Math.ceil(this.ST.length / 50)
    };
    bc.BZ = function(bv) {
        var bFY = Math.ceil(this.ST.length / 50);
        if (bv == 1 && this.SF == 1 || bv == 2 && this.SF == bFY) return;
        bv == 1 ? this.bbt(this.SF - 1) : this.bbt(this.SF + 1)
    };
    bc.vG = function(be) {
        var bC = bj.bY(be, "d:text");
        if (!bC) return;
        var be = {
            url: bb.bz(bC, "url"),
            text: bb.bz(bC, "text")
        };
        this.bK("onselect", be);
        if (!be.stopped) this.cw()
    };
    bc.bR = function() {
        bO.bR.call(this);
        this.bbt(1)
    }
})();
(function() {
    var bd = NEJ.P,
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        ej = bd("nej.p"),
        cf = bd("nej.h"),
        bI = bd("nej.ut"),
        jY = /^[#?]+/,
        HF = /#(.*?)$/,
        vF = window,
        bbz = !history.pushState || ej.Hj.android || !history.auto;
    var SC = function(bZ, bbE) {
        vF.history[!bbE ? "pushState" : "replaceState"](null, document.title, bZ)
    };
    var SB = function() {
        return location.parse(vF.location.href)
    };
    SC = SC.fj(function(be) {
        if (!bbz) return;
        var cn = be.args;
        be.stopped = !0;
        bZ = cn[0].replace(jY, "");
        !cn[1] ? vF.location.hash = bZ : vF.location.replace("#" + bZ)
    });
    SB = SB.fj(function(be) {
        if (!bbz) return;
        be.stopped = !0;
        var fA = HF.test(vF.location.href) ? RegExp.$1 : "";
        be.value = location.parse(fA.replace(jY, ""))
    });
    location.redirect = function(bZ, bbE) {
        SC(bZ, bbE);
        return this
    };
    location.active = function() {
        var hd, bZ, jq, dI, IX;
        var bbJ = function(jJ) {
            if (!!dI) {
                dI = !1;
                return
            }
            var be = {
                oldValue: jq,
                newValue: SB()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                bj.bK(location, "beforeurlchange", be);
                if (be.stopped) {
                    if (!!jq) {
                        dI = !0;
                        SC(jq.href, !0)
                    }
                    return
                }
            }
            bZ = vF.location.href;
            jq = be.newValue;
            bj.bK(location, "urlchange", jq);
            cf.Wt(jq.href)
        };
        var bAR = function() {
            if (bZ != vF.location.href) bbJ();
            hd = requestAnimationFrame(bAR)
        };
        return function(dB) {
            if (!!IX) return this;
            IX = !0;
            vF = dB || window;
            if (bbz && "onhashchange" in window && ej.ns.trident2) {
                bj.bt(vF, "hashchange", bbJ);
                bbJ()
            } else if (!hd) {
                hd = requestAnimationFrame(bAR)
            }
            return this
        }
    }();
    location.parse = function() {
        var gK = /^https?:\/\/.*?\//i,
            jY = /[?#]/;
        return function(bZ) {
            var bp = {
                href: bZ
            };
            bZ = (bZ || "").replace(gK, "/").split(jY);
            var dE = 1;
            if (bZ[0] == "/" && (bZ[1] || "").indexOf("/") == 0) dE = 2;
            bp.path = bZ.splice(0, dE).join("?");
            bp.query = bm.iO(bZ.join("&"));
            return bp
        }
    }();
    location.same = function(bZ) {
        return SB().href == bZ
    };
    bI.gN.bF({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        gA = bd("nm.ut");
    gA.sT = function(fx) {
        var hg = {
            text: "",
            start: 0,
            end: 0
        };
        if (fx.setSelectionRange) {
            hg.start = fx.selectionStart;
            hg.end = fx.selectionEnd;
            hg.text = hg.start != hg.end ? fx.value.substring(hg.start, hg.end) : ""
        } else if (document.selection) {
            var i, Sy = document.selection.createRange(),
                vC = document.body.createTextRange();
            vC.moveToElementText(fx);
            hg.text = Sy.text;
            hg.bookmark = Sy.getBookmark();
            for (i = 0; vC.compareEndPoints("StartToStart", Sy) < 0 && Sy.moveStart("character", -1) !== 0; i++) {
                if (fx.value.charAt(i) == "\n") {
                    i++
                }
            }
            hg.start = i;
            hg.end = hg.text.length + hg.start
        }
        return hg
    };
    gA.Sx = function(fx, hg) {
        var vC;
        if (!hg) {
            hg = {
                text: "",
                start: 0,
                end: 0
            }
        }
        fx.focus();
        if (fx.setSelectionRange) {
            fx.setSelectionRange(hg.start, hg.end)
        } else if (fx.createTextRange) {
            vC = fx.createTextRange();
            if (fx.value.length === hg.start) {
                vC.collapse(false);
                vC.select()
            } else {
                vC.moveToBookmark(hg.bookmark);
                vC.select()
            }
        }
    };
    gA.cmS = function(fx, hg, ew) {
        var hg = hg || {
            text: "",
            start: 0,
            end: 0
        };
        var bbX, bAP, vC, Mg, bAO, bAM, BH;
        this.Sx(fx, hg);
        if (fx.setSelectionRange) {
            bbX = fx.value;
            bAP = bbX.substring(0, hg.start) + ew + bbX.substring(hg.end);
            bAO = bAM = hg.start + ew.length;
            BH = fx.scrollTop;
            fx.value = bAP;
            if (fx.scrollTop != BH) {
                fx.scrollTop = BH
            }
            fx.setSelectionRange(bAO, bAM)
        } else if (fx.createTextRange) {
            Mg = document.selection.createRange();
            Mg.text = ew;
            Mg.setEndPoint("StartToEnd", Mg);
            Mg.select()
        }
        bj.bK(fx, "keyup")
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        ej = bd("nej.p"),
        bm = bd("nej.u"),
        fc = bd("nej.ut"),
        bT = bd("nm.w"),
        gA = bd("nm.ut"),
        bc;
    bT.bAJ = NEJ.C();
    bc = bT.bAJ.bU(fc.dZ);
    bc.dv = function(bf) {
        this.dC(bf)
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.gE = bf.txt;
        this.BD = bf.sgtsContainer;
        this.bAE = bf.sgtsList[0];
        this.Ss = bf.sgtsItem;
        this.oh = bf.rangeData;
        this.Ef = bf.atIndex;
        bb.bJ(this.Ss[0], "selected-item");
        this.ME()
    };
    bc.cR = function() {
        this.cV();
        bj.oz(document.body, "keyup", this.bAC.bi(this));
        bj.oz(document.body, "click", this.bAA.bi(this))
    };
    bc.ME = function() {
        this.dq([
            [document.body, "keyup", this.bAC.bi(this)],
            [document.body, "click", this.bAA.bi(this)],
            [this.gE, "keydown", this.bAz.bi(this)],
            [this.gE, "keypress", this.bAz.bi(this)],
            [this.bAE, "click", this.bAv.bi(this)],
            [this.bAE, "mouseover", this.Bz.bi(this)]
        ])
    };
    bc.Bz = function(be) {
        var eB = bj.bY(be);
        var bw = bb.bP(this.BD, "selected-item");
        if (bb.cU(eB, "j-sgt")) {
            bb.bH(bw[0], "selected-item");
            bb.bJ(eB, "selected-item")
        }
    };
    bc.bAC = function(be) {
        var bw = bb.bP(this.BD, "selected-item");
        var cF = this.Ss.length;
        var jE = be.keyCode || be.which;
        var bv, bl;
        switch (jE) {
            case 38:
                bv = bb.ix(bw[0], "data-index") - 1 < 0 ? cF - 1 : bb.ix(bw[0], "data-index") - 1;
                bb.bH(bw[0], "selected-item");
                bb.bJ(this.Ss[bv], "selected-item");
                break;
            case 40:
                bv = parseInt(bb.ix(bw[0], "data-index")) + 1 >= cF ? 0 : parseInt(bb.ix(bw[0], "data-index")) + 1;
                bb.bH(bw[0], "selected-item");
                bb.bJ(this.Ss[bv], "selected-item");
                break;
            case 13:
                this.bAv(be);
                break;
            case 27:
                this.og();
                break;
            case 32:
                var cm = this.gE.value;
                var bv = gA.sT(this.gE);
                if (cm.charAt(bv.start - 1) !== " ") return;
                this.og();
                break
        }
    };
    bc.bAz = function(be) {
        var jE = be.keyCode || be.which;
        if (jE === 13 || jE === 38 || jE === 40) {
            bj.dp(be);
            be.keyCode = 0;
            be.which = 0;
            be.returnvalue = false
        }
    };
    bc.bAA = function(be) {
        var eB = be.target || be.srcElement;
        if (eB === this.gE) return;
        this.og()
    };
    bc.bAv = function(be) {
        bj.cu(be);
        var bw = bb.bP(this.BD, "selected-item")[0];
        var qN = be.target || be.srcElement;
        var bu = be.type;
        if (bb.cU(qN, "lst")) return;
        if (bu == "click") {
            bb.bH(bw, "selected-item");
            bb.bJ(qN, "selected-item")
        } else qN = bw;
        var bl = qN.innerHTML + " ";
        this.og();
        var hg = this.oh;
        hg.start = this.Ef + 1;
        if (ej.ek.browser == "ie" && ej.ek.version < "9.0") {
            this.gE.value = this.gE.value.substring(0, hg.start) + this.gE.value.substring(hg.end, this.gE.value.length);
            hg.end = hg.start
        }
        gA.cmS(this.gE, hg, bl);
        bj.bK(this.gE, "keyup")
    };
    bc.og = function(be) {
        if (!!this.BD) bb.ch(this.BD, "display", "none");
        this.bW()
    };
    bc.tQ = function(be) {
        if (!!this.BD) bb.ch(this.BD, "display", "block")
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bT = bd("nm.w"),
        fc = bd("nej.ut"),
        di = bd("nej.ui"),
        bc;
    var bGr = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bGv = bb.gs("m-wgt-atlist");
    var iP = bb.rA(bGr);
    bT.bAp = NEJ.C();
    bc = bT.bAp.bU(di.gh);
    bc.dv = function(bf) {
        this.hc = {};
        this.dC()
    };
    bc.cz = function(bf) {
        this.hc.txt = bb.bG(bf.target);
        this.hc.data = bf.data;
        this.hc.offset = bf.offset;
        this.hc.rangeData = bf.rangeData;
        this.hc.atIndex = bf.atIndex;
        this.bGz(bf);
        this.cB(bf);
        this.hc.sgtsContainer = this.bs;
        this.hc.sgtsList = bb.bP(this.bs, "lst");
        this.hc.sgtsItem = bb.bP(this.bs, "f-thide");
        this.NE(bf);
        this.bGF = bT.bAJ.bF(this.hc)
    };
    bc.cR = function(bf) {
        this.cV();
        this.bGF.bW()
    };
    bc.dx = function() {
        this.lz = iP
    };
    bc.dm = function() {
        this.dw()
    };
    bc.bGz = function(bf) {
        this.bs = bb.fg(bb.kg(bb.dg(bGv, bf.data)))
    };
    bc.NE = function(bf) {
        var bAh = bb.bP(this.bs, "selected-item")[0];
        if (bAh) bb.bH(bAh, "selected-item");
        var dY = bf.offset.x + "px";
        var hv = bf.offset.y + "px";
        bb.ch(this.bs, "left", dY);
        bb.ch(this.bs, "top", hv)
    }
})();
(function() {
    var bd = NEJ.P,
        bA = bd("nej.j"),
        gA = bd("nm.ut");
    gA.bAg = function(cm) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var eh = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Ek = cm.match(eh) || [];
        for (var cA = 0; cA < Ek.length; cA++) {
            Ek[cA] = Ek[cA].split("@")[1]
        }
        Ek = Ek.reverse();
        var je = GUser.userId;
        var bGG = bA.sj("mentioners" + je) || [];
        var kl = Ek.concat(bGG);
        if (kl.length > 10) kl = kl.slice(0, 10);
        bA.wl("mentioners" + je, kl)
    };
    gA.bGM = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var je = GUser.userId;
        return bA.sj("mentioners" + je) || []
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        ej = bd("nej.p"),
        bA = bd("nej.j"),
        bm = bd("nej.u"),
        fc = bd("nej.ut"),
        bT = bd("nm.w"),
        gA = bd("nm.ut"),
        bc;
    bT.bzU = NEJ.C();
    bc = bT.bzU.bU(fc.dZ);
    bc.dv = function(bf) {
        this.dC(bf);
        this.bzT()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.gE = bf.txt;
        this.bs = bf.body;
        this.bzP = bf.before;
        this.ID = bf.flag;
        this.bGR = bf.after;
        this.pf = [];
        if (ej.ek.browser != "ie") {
            setTimeout(function() {
                this.lF()
            }.bi(this), 0)
        }
        this.ME()
    };
    bc.cR = function() {
        this.cV();
        if (this.tj) this.tj.bW();
        delete this.tj
    };
    bc.ME = function() {
        this.dq([
            [this.gE, "keyup", this.bzM.bi(this, this.gE)],
            [this.gE, "click", this.bzM.bi(this, this.gE)],
            [this.gE, "focus", this.lF.bi(this)]
        ])
    };
    bc.lF = function(be) {
        this.oh = gA.sT(this.gE)
    };
    bc.bzT = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var fh = window.GUser.userId;
        var bZ = "/api/user/getfollows/" + fh;
        var gy = bA.cG(bZ, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(bl) {
                window.GFollowers = JSON.parse(bl).follow
            }.bi(this),
            onerror: function(bl) {},
            onbeforerequest: function(bl) {}
        })
    };
    bc.bzL = function(index) {
        var bD = this.gE.value,
            cq, bcU, bcV, GQ;
        this.bzP.innerHTML = bm.fd(bD.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var pM = bb.bP(this.bzP, "j-test");
        for (var cA = 0; cA < pM.length; cA++) {
            pM[cA].innerText = " "
        }
        this.ID.innerHTML = bD.charAt(index);
        this.bGR.innerHTML = bm.fd(bD.substr(index + 1, bD.length));
        GQ = parseInt(bb.ey(this.gE, "lineHeight"));
        bb.ch(this.bs, "display", "block");
        bcU = bb.jX(this.ID, this.bs);
        bcV = bb.jX(this.gE);
        bb.ch(this.bs, "display", "none");
        var dY = bcU.x + bcV.x;
        var hv = bcU.y + bcV.y + GQ;
        cq = {
            x: dY,
            y: hv
        };
        this.bHb(cq)
    };
    bc.bzM = function(fx, be) {
        bj.dp(be);
        var fx = fx;
        var bD = fx.value;
        var cF = bD.length;
        var bv = gA.sT(fx).start;
        var bzF = 0;
        var jE = be.keyCode || be.which;
        var kl;
        this.oh = gA.sT(fx);
        var bzD = false;
        for (var i = 1; i < 20; i++) {
            kl = bv - i;
            if (bD.charAt(kl) === " ") break;
            if (bD.charAt(kl) === "@") {
                bzD = true;
                this.Ef = bzF = kl;
                break
            }
        }
        if (bzD && be.shiftKey === false && jE !== 38 && jE !== 40) {
            if (jE !== 27 && jE !== 13) {
                this.tj ? this.tj.bW() : null;
                this.bzL(bzF)
            }
        } else if (jE !== 38 && jE !== 40 && be.keyCode !== 32) {
            this.tj ? this.tj.bW() : null
        }
    };
    bc.bHb = function(cq) {
        var cq = cq;
        var bl = this.bHh();
        var bf = {
            parent: document.body,
            offset: cq,
            data: bl,
            target: this.gE,
            rangeData: this.oh,
            atIndex: this.Ef
        };
        this.tj ? this.tj.bW() : null;
        this.tj = bT.bAp.bF(bf)
    };
    bc.bHh = function() {
        var bHi = gA.sT(this.gE).start;
        var bHj = this.Ef + 1;
        var bzu = gA.bGM() || [];
        var bzr = [];
        var cN = this.gE.value.substring(bHj, bHi).toLowerCase();
        cN = cN.replace(/\[/g, "\\[");
        cN = cN.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pf = window.GFollowers[0] ? window.GFollowers : []
        } else this.pf = [];
        if (!this.pf[0]) this.bzT();
        for (var cA = 0; cA < bzu.length; cA++) {
            for (var bA = 0; bA < this.pf.length; bA++) {
                if (this.pf[bA].nickname == bzu[cA]) bzr.push(this.pf[bA])
            }
        }
        this.pf = bm.cbL(this.pf, bzr, {
            union: true,
            begin: true
        });
        var bHw = this.pf.length;
        var Sb = [];
        var KI, KJ;
        if (!this.pf[0]) return {
            suggests: Sb
        };
        for (var i = 0; i < bHw; i++) {
            KI = this.pf[i].nickname.toLowerCase().search(cN);
            KJ = this.pf[i].py ? this.pf[i].py.toLowerCase().search(cN) : -1;
            if (KI !== -1 || KJ != -1) Sb.push(this.pf[i]);
            if (Sb.length === 10) break
        }
        return {
            suggests: Sb
        }
    };
    bc.GY = function() {
        var hg = this.oh || {
            text: "",
            start: 0,
            end: 0
        };
        bj.bK(this.gE, "focus");
        gA.cmS(this.gE, hg, "@");
        this.oh = gA.sT(this.gE);
        this.Ef = hg.start;
        this.bzL(this.Ef)
    };
    bc.DP = function() {
        if (this.tj) this.tj.bW()
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bA = bd("nej.j"),
        bT = bd("nm.w"),
        fc = bd("nej.ut"),
        di = bd("nej.ui"),
        bc;
    var bHx = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bHA = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var iq = bb.kg(bHA);
    var iP = bb.rA(bHx);
    bT.cmY = NEJ.C();
    bc = bT.cmY.bU(di.gh);
    bc.dv = function(bf) {
        this.hc = {};
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf);
        this.hc.txt = bb.bG(bf.target);
        this.cmW();
        this.Hb = bT.bzU.bF(this.hc)
    };
    bc.cR = function(bf) {
        this.cV();
        this.Hb.bW()
    };
    bc.dx = function() {
        this.dy = iq;
        this.lz = iP
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.eu(bb.bG(this.bs));
        this.hc.body = this.bs;
        this.hc.before = bk[0];
        this.hc.flag = bk[1];
        this.hc.after = bk[2]
    };
    bc.cmW = function() {
        var po = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < po.length; i++) {
            if (po[i] === "width" && bb.ey(this.hc.txt, po[i]) == "100%") {
                bb.ch(this.bs, po[i], this.hc.txt.offsetWidth + "px");
                continue
            }
            bb.ch(this.bs, po[i], bb.ey(this.hc.txt, po[i]))
        }
    };
    bc.GY = function() {
        this.Hb.GY()
    };
    bc.DP = function() {
        this.Hb.DP()
    }
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        gm = NEJ.R,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        lM = bd("nm.c"),
        ce = {},
        bc;
    if (!!lM.bdp) return;
    lM.bdp = NEJ.C();
    bc = lM.bdp.bU(bI.dZ);
    bc.dv = function() {
        this.dC()
    };
    bc.cz = function(bf) {
        this.cB(bf)
    };
    bc.cR = function() {
        this.cV()
    };
    bc.RZ = function(fB, gP) {
        if (ce[fB]) {
            this.Et("register commonJST[" + fB + "] duplicate");
            return
        }
        if (!bm.hC(gP)) {
            gP = ctl.comJST.bHB(fB, gP)
        }
        ce[fB] = gP
    };
    bc.clU = function(clA) {
        if (bm.hh(clA)) {
            bm.cv(clA, function(bw) {
                ctl.comJST.RZ.apply(this, bw)
            }, this)
        } else if (bm.qj(clA)) {
            bm.fo(clA, function(gu, bN) {
                ctl.comJST.RZ(bN, gu)
            })
        }
    };
    bc.bHB = function(fB, tr, bzl) {
        tr = tr || {};
        NEJ.X(tr, {
            comJST: this.vi
        });
        if (tr.resetDataName && !bm.hh(tr.resetDataName)) {
            tr.resetDataName = [tr.resetDataName]
        }
        return function() {
            var bl = arguments[0],
                lE = arguments[1];
            if (tr.resetDataName) {
                var kl = {};
                for (var i = 0, ii = tr.resetDataName.length; i < ii; i++) {
                    kl[tr.resetDataName[i]] = arguments[i]
                }
                bl = kl;
                lE = arguments[ii]
            }
            NEJ.X(bl, tr, eV);
            if (bzl) {
                lE = lE || {};
                NEJ.X(lE, bzl)
            }
            return bb.dg(fB, bl, lE)
        }
    };
    bc.vi = function(fB) {
        if (!ce[fB]) {
            this.Et("commonJST[" + fB + "] is unregister");
            return ""
        } else {
            return ce[fB].apply(null, gm.slice.call(arguments, 1))
        }
    };
    bc.dump = function() {
        return ce
    };
    bc.Et = function(bHF) {
        if (console && console.log) {
            console.log(bHF)
        }
    };
    var eV = function(gu, bN) {
        return bN == "resetDataName"
    };
    bd("ctl").comJST = lM.bdp.iE()
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        cC = NEJ.F,
        gm = NEJ.R,
        bb = bd("nej.e"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        lM = bd("nm.c"),
        ce = {},
        bc;
    if (!!lM.bdA) return;
    lM.bdA = NEJ.C();
    bc = lM.bdA.bU(bI.dZ);
    bc.dv = function() {
        this.dC();
        var bf = {
            "com-mv-artists": function(gD, eL, AN, bdB) {
                return bb.dg("com-mv-artists", {
                    artists: gD,
                    clazz: eL,
                    boxClazz: bdB,
                    mark: AN || function(dT) {
                        return dT
                    },
                    escape: bm.fd,
                    comJST: ctl.comJST.vi
                })
            },
            "com-album-artists": function(gD, eL, AN, bdB) {
                return bb.dg("com-album-artists", {
                    artists: gD,
                    clazz: eL,
                    boxClazz: bdB,
                    mark: AN || function(dT) {
                        return dT
                    },
                    escape: bm.fd,
                    comJST: ctl.comJST.vi
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: bm.fd
            }
        };
        for (var bB in bf) {
            ctl.comJST.RZ(bB, bf[bB])
        }
    };
    bc.cz = function(bf) {
        this.cB(bf)
    };
    bc.cR = function() {
        this.cV()
    };
    bd("ctl").comJSTUtil = lM.bdA.iE()
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bb = bd("nej.e"),
        ej = bd("nej.p"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bA = bd("nej.j"),
        bT = bd("nm.w"),
        gA = bd("nm.ut"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bo = bd("nm.l"),
        bdC = [2, 3],
        eG = ["sn", "db"],
        bc, bO, bHG = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert"
        },
        RT = {
            djprogram: "èŠ‚ç›®",
            album: "ä¸“è¾‘",
            playlist: "æ­Œå•",
            song: "å•æ›²",
            yunsong: "å•æ›²",
            artist: "æ­Œæ‰‹",
            mv: "MV",
            topic: "éŸ³ä¹ä¸“æ ",
            djradio: "ç”µå°",
            concert: "æ¼”å‡º"
        },
        bzf = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        },
        bHJ = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        Aq = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "ç­‰çº§è¾¾åˆ°Lv.4ï¼Œå³å¯æ·»åŠ å›¾ç‰‡"
        };
    bo.ve = NEJ.C();
    bc = bo.ve.bU(bo.fz);
    bO = bo.ve.dr;
    bc.cz = function(bf) {
        if (bf.onclose === undefined) {
            bf.onclose = this.bzb.bi(this)
        }
        this.cB(bf);
        this.xt = bf.isPub;
        this.kc = bf.rid || -1;
        this.fL = bf.type || -1;
        this.byT = bf.purl;
        this.RO = bf.name || "";
        this.Hq = bf.author || "";
        this.bdT = bf.authors || "";
        this.byN = bf.actId;
        this.ciW = bf.actName;
        this.byK = bf.title;
        this.RK = {};
        this.bHS = bf.mesg || "";
        this.bHT = bf.placeholder || "è¯´ç‚¹ä»€ä¹ˆå§";
        this.bHZ = bf.hideTip;
        var bk, jm = +(new Date);
        try {
            bk = top.localCache.bG("user") || {}
        } catch (e) {
            bk = {}
        }
        for (var i = 0, bk = bk.bindings || [], ki; i < bk.length; ++i) {
            ki = !bk[i].tokenJsonStr ? null : JSON.parse(bk[i].tokenJsonStr);
            if (!ki || ki.expires_in === undefined) continue;
            var RH = parseInt(ki.expires_in),
                RG = parseInt(bk[i].refreshTime),
                bIe = (RH + RG) * 1e3 - 5 * 60 * 1e3;
            if (bIe > jm) this.RK[bk[i].type] = !0
        }
        this.uG = bT.zY.bF({
            parent: this.RD,
            err: this.byz
        });
        this.iI = bT.cmY.bF({
            parent: document.body,
            target: this.hK
        });
        if (this.fL == 24 || this.fL == 21) {
            this.yj.style.display = "none"
        } else {
            this.oo = bT.VO.bF({
                parent: this.bIn,
                button: this.yj,
                onstartupload: this.byw.bi(this, true),
                onfinishupload: this.byw.bi(this, false)
            })
        }
    };
    bc.cR = function() {
        this.cV();
        if (this.uG) {
            this.uG.bW();
            delete this.uG
        }
        if (this.iI) {
            this.iI.bW();
            delete this.iI
        }
        if (this.oo) {
            this.oo.bW();
            delete this.oo
        }
        if (this.lK) {
            this.lK.bW();
            delete this.lK
        }
    };
    bc.dx = function() {
        this.dy = "m-wgt-sharewin"
    };
    bc.dm = function() {
        this.dw();
        this.bys = bb.eu(this.bs)[0];
        var cs = bb.bP(this.bs, "j-flag");
        this.pU = cs.shift();
        this.byz = cs.shift();
        this.RD = cs.shift();
        this.hK = cs.shift();
        this.vO = cs.shift();
        this.beJ = cs.shift();
        this.bIB = cs.shift();
        this.yj = cs.shift();
        this.dA = cs.shift();
        this.bIn = cs.shift();
        this.zh = cs.shift();
        this.cgb = cs.shift();
        this.bIF = cs.shift();
        this.fO = cs.shift();
        this.Rp = bb.bP(this.bIF, "j-t");
        this.xA = bI.BS.bF({
            list: bb.eu(this.pU),
            selected: "z-slt",
            onchange: this.beS.bi(this)
        });
        if (ej.ek.browser == "ie" && ej.ek.version < "8.0") {
            bb.ch(this.RD, "position", "relative");
            bb.ch(this.RD, "zIndex", "10")
        }
        bj.bt(window, "snsbind", this.HR.bi(this));
        bj.bt(this.hK, "input", this.iy.bi(this));
        bj.bt(this.hK, "keyup", this.sE.bi(this));
        bj.bt(this.bs, "click", this.dM.bi(this));
        this.bS = bq.bBe.bF();
        this.bS.bt("onshareall", this.Rl.bi(this, 0));
        this.bS.bt("onshareerror", this.jv.bi(this));
        this.bS.bt("onshareprivate", this.Rl.bi(this, 1));
        this.cfY = bq.Nl.bF();
        try {
            this.zK = top.api.sharePermission
        } catch (e) {}
        if (!this.zK) {
            this.zK = Aq;
            bA.cG("/api/event/user/permission", {
                type: "json",
                onload: function(be) {
                    if (be.code == 200) {
                        this.zK = NEJ.EX(Aq, be)
                    }
                }.bi(this)
            })
        }
    };
    bc.beS = function(be) {
        be.index == 0 ? bb.bH(this.bys, "m-plshare") : bb.bJ(this.bys, "m-plshare");
        this.RD.style.display = be.index == 0 ? "none" : "";
        this.bIB.style.display = be.index == 0 ? "" : "none";
        this.yj.style.display = be.index == 0 ? "" : "none";
        if (this.fL == 24 || this.fL == 21) {
            this.yj.style.display = "none"
        }
        this.byz.style.display = "none";
        this.hK.value = "";
        this.dh();
        this.CP();
        if (be.index == 0) {
            var eZ = bb.ey(this.hK, "width");
            if (eZ == "auto" || !eZ) return;
            else this.iI = bT.cmY.bF({
                parent: document.body,
                target: this.hK
            });
            this.bIn.style.display = ""
        } else {
            if (this.iI) {
                this.iI.bW();
                delete this.iI
            }
            this.bIn.style.display = "none"
        }
    };
    bc.dM = function(be) {
        var bh = bj.bY(be, "d:action");
        if (!bh) return;
        if (bb.bz(bh, "default") === undefined) {
            bj.dp(be)
        }
        switch (bb.bz(bh, "action")) {
            case "txt":
                this.lF();
                break;
            case "search":
                if (this.xt && this.fL != 24) {
                    if (this.lK) {
                        this.lK.bW()
                    }
                    this.lK = bT.YW.bF({
                        parent: this.bs.parentNode,
                        onfinish: this.bfa.bi(this),
                        oncancel: this.bIK.bi(this)
                    });
                    this.bfd = true;
                    this.bs.style.display = "none";
                    this.CO(this.kc > 0 ? "æ›´æ¢éŸ³ä¹" : "æ·»åŠ éŸ³ä¹")
                }
                break;
            case "at":
                bj.ru(be);
                !!this.hG && this.hG.cw();
                this.iI.GY();
                this.gv();
                break;
            case "emot":
                bj.ru(be);
                !!this.iI && this.iI.DP();
                if (!this.hG) {
                    this.hG = bo.DQ.bF({
                        parent: this.beJ
                    });
                    this.hG.bt("onselect", this.vG.bi(this))
                }
                this.hG.bR();
                break;
            case "upload":
                break;
            case "sns":
                bj.cu(be);
                var bfg, cN, bu = bb.bz(bh, "type");
                if (!this.RK[bu]) {
                    bfg = bh.href.split("?");
                    cN = bm.iO(bfg[1]);
                    cN["csrf_token"] = bA.hI("__csrf");
                    top.open(bfg[0] + "?" + bm.eX(cN));
                    return
                }
                var cE = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                bn.xE(bh, "u-slg-" + cE[bu] + "-gray");
                break;
            case "close":
                !!this.hG && this.hG.cw();
                this.bzb();
                break;
            case "share":
                bj.cu(be);
                if (bb.cU(bh, "u-btn2-2-dis")) {
                    if (!this.zK.pubEventWithoutResource && !(this.kc > 0)) {
                        this.bIU()
                    } else {}
                } else if (!(this.kc > 0) && !this.hK.value && this.oo && this.oo.Mf().length == 0) {
                    bo.ci.bR({
                        type: 2,
                        tip: "è¯·è¾“å…¥å†…å®¹"
                    })
                } else {
                    this.bJb()
                }
                break
        }
    };
    bc.bIU = function() {
        var tG = 0,
            bfo = function() {
                if (tG % 2) {
                    bb.bH(this.vO, "z-show")
                } else {
                    bb.bJ(this.vO, "z-show")
                }
                tG++;
                if (tG > 5) {
                    clearInterval(hd)
                }
            },
            hd;
        return function() {
            tG = 0;
            clearInterval(hd);
            hd = setInterval(bfo.bi(this), 200)
        }
    }();
    bc.HR = function(bp) {
        bp = bp.result;
        this.RK[bp.type] = !0;
        var bv = bm.eg(bdC, bp.type),
            ds = "u-slg-" + eG[bv] + "-gray";
        bb.bH(this.Rp[bv], ds)
    };
    bc.bfa = function(cP) {
        var bl = cP.data;
        this.kc = cP.id;
        this.fL = cP.type;
        this.bs.style.display = "";
        this.CO(this.byK);
        this.lK && this.lK.bW();
        this.bfd = false;
        this.byT = bl.picUrl;
        this.RO = bl.title || "";
        this.Hq = bl.author || "";
        this.bdT = bl.authors || "";
        this.bJc();
        this.cnf()
    };
    bc.bIK = function() {
        this.lK && this.lK.bW();
        this.bs.style.display = "";
        this.CO(this.byK);
        this.bfd = false;
        this.cnf()
    };
    bc.vG = function(be) {
        var cm = "[" + be.text + "]";
        gA.cmS(this.hK, this.oh, cm);
        this.gv()
    };
    bc.iy = function(be) {
        ej.ek.browser == "ie" && ej.ek.version < "7.0" ? setTimeout(this.gv.bi(this), 0) : this.gv()
    };
    bc.sE = function(be) {
        this.lF();
        if (be.keyCode == 8) this.gv()
    };
    bc.gv = function() {
        this.lF();
        this.CP()
    };
    bc.CP = function() {
        var cF = Math.ceil(bm.hk(this.hK.value.trim()) / 2);
        this.dA.innerText = 140 - cF;
        cF > 140 ? bb.gL(this.dA, "s-fc4", "s-fc6") : bb.gL(this.dA, "s-fc6", "s-fc4")
    };
    bc.bJb = function() {
        if (this.dF()) return;
        if (bm.hk(this.hK.value.trim()) > 280) {
            this.dh("å­—æ•°è¶…è¿‡140ä¸ªå­—ç¬¦");
            return
        }
        var bu = this.xA.sp(),
            bl;
        if (bu == 0) {
            for (var i = 0, EM = []; i < this.Rp.length; ++i) {
                if (!bb.cU(this.Rp[i], "u-slg-" + eG[i] + "-gray")) EM.push(bdC[i])
            }
            this.dF(!0);
            bl = {
                id: this.kc,
                msg: this.hK.value.trim(),
                type: this.QZ(this.fL),
                picUrl: this.byT,
                snsTypes: EM.join(","),
                isPub: this.xt
            };
            if (this.byN > 0) {
                bl.actId = this.byN;
                if (this.ciW) {
                    bl.msg = "#" + this.ciW + "#" + bl.msg
                }
            }
            var bfx = this.oo && this.oo.Mf();
            if (bfx && bfx.length) {
                bl.pics = bfx
            }
            this.bS.bFG(bl)
        } else {
            var rL = this.uG.Kg();
            if (rL.length <= 0) {
                this.dh("è¯·è‡³å°‘é€‰æ‹©ä¸€ä½å¥½å‹");
                return
            }
            this.bS.bFE({
                data: {
                    id: this.kc,
                    msg: this.hK.value.trim(),
                    type: this.QZ(this.fL),
                    userIds: "[" + rL.join(",") + "]"
                }
            })
        }
    };
    bc.Rl = function(bu, bp) {
        this.dF(!1);
        this.cw();
        if (!this.bHZ) {
            bo.ci.bR({
                tip: "åˆ†äº«æˆåŠŸ" + (bp.point > 0 ? ' èŽ·å¾—<em class="s-fc6">' + bp.point + "ç§¯åˆ†</em>" : ""),
                autoclose: true
            })
        }
        bj.bK(bo.ve, "sharesuccess", {
            isPrivate: bu,
            rid: this.kc,
            rtype: this.fL,
            data: bp.event
        });
        this.bK("onshare")
    };
    bc.jv = function(bp) {
        this.dF(!1);
        var cZ = "åˆ†äº«å¤±è´¥";
        if (bp.code) {
            switch (bp.code) {
                case 404:
                    cZ = "åˆ†äº«çš„èµ„æºä¸å­˜åœ¨";
                    break;
                case 407:
                    cZ = "è¾“å…¥å†…å®¹åŒ…å«æœ‰å…³é”®å­—";
                    break;
                case 408:
                    cZ = "åˆ†äº«å¤ªå¿«äº†ï¼Œè¿‡ä¼šå†åˆ†äº«å§";
                    break;
                case 315:
                    cZ = bp.message || "æ ¹æ®å¯¹æ–¹è®¾ç½®ï¼Œä½ æ²¡æœ‰è¯¥æ“ä½œæƒé™";
                    break
            }
        }
        this.dh(cZ)
    };
    bc.lF = function() {
        this.oh = gA.sT(this.hK)
    };
    bc.dh = function(cZ) {
        this.eH(this.fO, cZ)
    };
    bc.dF = function(dI) {
        return this.eU(this.zh, dI, "åˆ†äº«", "åˆ†äº«ä¸­...")
    };
    bc.QZ = function(jR) {
        return bHG[jR] || ""
    };
    bc.bJl = function() {
        var fx, tH = this.QZ(this.fL);
        this.vO.style.display = "";
        if (this.kc <= 0) {
            this.vO.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">ç»™åŠ¨æ€é…ä¸ŠéŸ³ä¹</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.RO) {
                this.vO.style.display = "none";
                return
            }
            var QW = this.xt && this.fL != 24;
            fx = (RT[tH] ? RT[tH] + "ï¼š" : "") + this.RO + (bzf[tH] || " ") + (tH == "mv" || tH == "album" ? this.bdT || this.Hq : this.Hq);
            bb.fR(this.vO, "m-xwgt-share-infobar", {
                canChange: QW,
                info: fx
            });
            if (QW) {
                bb.bH(this.vO, "z-dis")
            } else {
                bb.bJ(this.vO, "z-dis")
            }
        }
    };
    bc.bJc = function() {
        var tH = this.QZ(this.fL),
            fx = (RT[tH] ? RT[tH] + "ï¼š" : "") + this.RO + (bzf[tH] || " ") + (tH == "mv" || tH == "album" ? this.bdT || this.Hq : this.Hq);
        QW = this.xt && this.fL != 24;
        bb.fR(this.vO, "m-xwgt-share-infobar", {
            canChange: QW,
            isPub: this.xt,
            info: fx
        })
    };
    bc.bJp = function() {
        var EQ = this.hK.value;
        if (this.xt) {
            if (!!this.bfd) {
                return !!EQ && !!EQ.length || !!this.oo && this.oo.Mf().length > 0
            } else {
                return this.kc > 0 || !!EQ && !!EQ.length || !!this.oo && this.oo.Mf().length > 0
            }
        } else {
            return !!EQ && !!EQ.length || !!this.oo && this.oo.Mf().length > 0
        }
    };
    bc.cnf = function() {
        if (!this.xt || this.zK.pubEventWithoutResource || this.kc > 0) {
            bb.bH(this.zh, "u-btn2-2-dis")
        } else {
            bb.bJ(this.zh, "u-btn2-2-dis")
        }
    };
    bc.byw = function(bfF) {
        if (bfF) {
            bb.bJ(this.zh, "u-btn2-2-dis")
        } else {
            this.cnf()
        }
    };
    bc.bzb = function(be) {
        be = be || {};
        be.stopped = true;
        if (this.bJp()) {
            bn.iu({
                title: "æç¤º",
                message: "æ˜¯å¦é€€å‡ºæœ¬æ¬¡ç¼–è¾‘ï¼Ÿ",
                btnok: "é€€å‡º",
                action: function(cl) {
                    if (cl == "ok") {
                        this.cw()
                    }
                }.bi(this)
            })
        } else {
            this.cw()
        }
    };
    bc.CO = function(hJ, eN) {
        this.nX.xl(hJ, eN)
    };
    bc.bR = function() {
        var bJw = function(bw, bv) {
            var ds = "u-slg-" + eG[bv] + "-gray";
            !this.RK[bdC[bv]] ? bb.bJ(bw, ds) : bb.bH(bw, ds)
        };
        return function() {
            bO.bR.call(this);
            this.dh();
            this.dF(!1);
            this.xA.Xb(0);
            this.bs.style.display = "";
            this.hK.focus();
            this.hK.value = this.bHS || "";
            this.hK.placeholder = this.bHT || "";
            this.bJl();
            this.gv();
            this.uG.bFK();
            bm.cv(this.Rp, bJw, this);
            this.lF();
            if (this.xt) {
                this.pU.style.display = "none"
            } else {
                this.pU.style.display = ""
            }
            this.cnf()
        }
    }();
    bc.cw = function(be) {
        bO.cw.call(this);
        !!this.hG && this.hG.cw();
        if (this.uG) {
            this.uG.bW();
            delete this.uG
        }
        if (this.iI) {
            this.iI.bW();
            delete this.iI
        }
        if (this.oo) {
            this.oo.bW();
            delete this.oo
        }
        if (this.lK) {
            this.lK.bW();
            delete this.lK
        }
    };
    bn.sd = function(bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (bf.title === undefined) {
            bf.title = "åˆ†äº«"
        }
        if (bf.actId) {
            var bu = bHJ[bf.resourceType],
                eK = bf.resourceJson,
                hU;
            if (bm.gH(eK)) {
                try {
                    eK = JSON.parse(eK)
                } catch (e) {}
            }
            if (bu) {
                hU = bn.bvi(bu, eK);
                bf.name = hU.title;
                bf.author = hU.author;
                bf.picUrl = hU.picUrl;
                bf.type = bu;
                bf.rid = (eK || []).id
            }
        }
        bo.ve.bR(bf)
    };
    bI.gN.bF({
        element: bo.ve,
        event: ["sharesuccess"]
    })
})();
(function() {
    var bd = NEJ.P,
        cg = NEJ.O,
        bj = bd("nej.v"),
        bb = bd("nej.e"),
        bA = bd("nej.j"),
        bo = bd("nm.l"),
        bT = bd("nm.w"),
        di = bd("nej.ui"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bc, bO;
    bo.QU = NEJ.C();
    bc = bo.QU.bU(bo.fz);
    bO = bo.QU.dr;
    bc.dv = function() {
        this.dC()
    };
    bc.dm = function() {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        bj.bt(bk[0], "click", this.GG.bi(this))
    };
    bc.dx = function() {
        this.dy = "m-import-ok"
    };
    bc.cz = function(bf) {
        bf.parent = bf.parent || document.body;
        bf.title = "æ­Œæ›²åŒæ­¥å®Œæˆ";
        this.cB(bf)
    };
    bc.cR = function() {
        this.cV()
    };
    bc.GG = function(be) {
        this.cw();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    bc.BR = function() {
        this.cw()
    };
    bc.bAi = function(be) {
        if (be.keyCode == 13) this.Bx()
    }
})();
(function() {
    var bd = NEJ.P,
        bb = bd("nej.e"),
        ej = bd("nej.p"),
        bj = bd("nej.v"),
        bm = bd("nej.u"),
        bI = bd("nej.ut"),
        bA = bd("nej.j"),
        bq = bd("nm.d"),
        bn = bd("nm.x"),
        bQ = bd("nm.m"),
        bo = bd("nm.l"),
        bL = bd("nm.m.f"),
        bc, bO;
    bQ.ei = NEJ.C();
    bc = bQ.ei.bU(bI.fb);
    bc.cY = function() {
        var pT = !1;
        return function() {
            if (pT) return;
            pT = !0;
            this.df();
            if (top == self) {
                return
            }
            this.xz = bb.bG("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bxR()
            }
            bI.gN.bF({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.dq([
                [window, "scroll", this.ER.bi(this)],
                [document, "keyup", this.bJz.bi(this)],
                [document.body, "click", this.rf.bi(this)],
                [document, "mouseup", this.bJC.bi(this)],
                [this.xz, "click", this.bfT.bi(this)],
                [bq.xM, "message", this.sW.bi(this)]
            ]);
            bn.bFR(document.body);
            this.ER();
            if (this.ET !== false && typeof GUser !== "undefined" && GUser.userId > 0) bq.xM.iE().xP();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (ej.ek.browser == "ie" && parseInt(ej.ek.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "ç½‘æ˜“äº‘éŸ³ä¹"
                } else {
                    var hb = top.player.getPlaying();
                    if (hb && hb.track && hb.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hb.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.wu.bi(this);
            this.kF = bq.kQ.bF();
            window.log = this.sy.bi(this);
            var rS = location.search;
            if (rS) {
                var cN = rS.substr(rS.indexOf("?") + 1),
                    gR = bm.iO(cN);
                if (gR && gR["_hash"]) location.hash = gR["_hash"]
            }
        }
    }();
    bc.bJz = function(be) {
        var bh = bj.bY(be);
        try {
            if (be.keyCode == 80 && bn.buB() || ["textarea", "input"].indexOf(bh.tagName.toLowerCase()) >= 0) return;
            bj.bK(top.document, "keyup", {
                ctrlKey: be.ctrlKey,
                keyCode: be.keyCode
            })
        } catch (e) {}
    };
    bc.rf = function(be) {
        var bh = bj.bY(be);
        if (bh && bh.tagName == "INPUT") return;
        var bh = bj.bY(be, "d:pid");
        if (bh) {
            bj.dp(be);
            var oy = bb.bz(bh, "pid"),
                xX = bb.bz(bh, "ptype"),
                cl = bb.bz(bh, "action") || "play";
            switch (cl) {
                case "subscribe":
                    bn.lP({
                        tracks: [oy]
                    });
                    break
            }
        }
        bh = bj.bY(be, "d:resAction");
        if (bh && bh.className.indexOf("-dis") == -1) {
            var dO = bb.bz(bh, "resId"),
                bu = bb.bz(bh, "resType"),
                eO = bb.bz(bh, "resFrom"),
                bl = bb.bz(bh, "resData"),
                cl = bb.bz(bh, "resAction"),
                Zv = bb.bz(bh, "resCopyright");
            if (cl != "log" && cl != "bilog") bj.dp(be);
            switch (cl) {
                case "log":
                    bl = (bl || "").split("|");
                    if (!!bl[0]) {
                        var cj = {
                            id: dO,
                            alg: bl[2] || "itembased",
                            scene: bl[3],
                            position: bl[1] || 0
                        };
                        if (!!bl[4]) cj.srcid = bl[4];
                        window.log(bl[0], cj)
                    }
                    break;
                case "bilog":
                    var bJG = bb.bz(bh, "logAction"),
                        bJH = bb.bz(bh, "logJson");
                    window.log(bJG, bJH);
                    break;
                case "share":
                    share(dO, bu, bb.bz(bh, "resPic"), bb.bz(bh, "resName"), bb.bz(bh, "resAuthor"), bb.bz(bh, "resAuthors"));
                    break;
                case "fav":
                case "subscribe":
                    if (bu == 18) {
                        var ps = bb.bz(bh, "resLevel"),
                            qX = bb.bz(bh, "resFee");
                        if (ps == 10) {
                            bn.sK(qX, dO, "song");
                            break
                        }
                        bn.lP({
                            tracks: [dO]
                        })
                    }
                    break;
                case "download":
                    bn.NW({
                        id: dO,
                        type: bu
                    });
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(be)
        } catch (e) {}
    };
    bc.bJC = function(be) {
        try {
            bj.bK(top.document, "mouseup")
        } catch (e) {}
    };
    bc.ER = function() {
        var bJK = function() {
            var en = window.innerHeight;
            if (!bm.uu(en)) en = (document.documentElement || document.body).clientHeight;
            return en
        };
        return function(be) {
            if (!this.xz) return;
            var QK = bJK(),
                jB = document.documentElement.scrollTop || document.body.scrollTop;
            bb.ch(this.xz, "display", jB > 0 ? "" : "none");
            if (ej.ek.browser == "ie" && ej.ek.version < "7.0") {
                var hs = Math.min(document.body.clientHeight, QK + jB) - 204;
                bb.ch(this.xz, "top", hs + "px")
            }
        }
    }();
    bc.bfT = function(be) {
        bj.dp(be);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    bc.wu = function() {
        var bJL = function(be) {
            bj.bK(window, "share", be)
        };
        return function(dO, bu, IC, bX, bgm, bgn) {
            bn.sd({
                rid: dO,
                type: bu,
                purl: IC,
                name: bX,
                author: bgm,
                authors: bgn,
                onshare: bJL.bi(this)
            })
        }
    }();
    bc.sy = function(cl, cj) {
        try {
            top.log(cl, cj)
        } catch (e) {
            switch (cl) {
                case "play":
                    this.kF.hj(cj);
                    break;
                case "search":
                    this.kF.bsH(cj);
                    break;
                default:
                    this.kF.mW(cl, cj)
            }
        }
    };
    bc.bxR = function() {
        var QJ, bgq = false,
            cH = [45, 60];
        var bJR = function(cZ) {
            if (cZ.title != "MailBoxImport") return;
            var bV = JSON.parse(cZ.content || "null") || cg;
            if (bV.status == 10) {
                bo.QU.bF().bR();
                window.clearTimeout(QJ)
            }
        };
        var su = function(be) {
            if (be.code == 200) {
                if (be.status == 1) {
                    bj.bt(bq.yH, "message", bJR.bi(this));
                    bq.yH.bF().bbL();
                    bgq = true
                } else {
                    if (bgq) {
                        if (be.status == 10) {
                            bo.QU.bF().bR();
                            bj.ky(bq.yH, "message");
                            window.clearTimeout(QJ);
                            bgq = false
                        }
                    } else {
                        window.clearTimeout(QJ)
                    }
                }
            }
        };
        return function() {
            var wz = cH.shift() * 1e3;
            bA.cG("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: su.bi(this)
            });
            if (wz) {
                QJ = window.setTimeout(arguments.callee, wz)
            }
        }
    }();
    bc.sW = function(be) {
        try {
            top.polling(be)
        } catch (e) {}
    }
})()
