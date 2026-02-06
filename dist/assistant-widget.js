var lc = Object.defineProperty;
var La = (n) => {
  throw TypeError(n);
};
var cc = (n, e, t) => e in n ? lc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => cc(n, typeof e != "symbol" ? e + "" : e, t), dr = (n, e, t) => e.has(n) || La("Cannot " + t);
var f = (n, e, t) => (dr(n, e, "read from private field"), t ? t.call(n) : e.get(n)), A = (n, e, t) => e.has(n) ? La("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), S = (n, e, t, i) => (dr(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), G = (n, e, t) => (dr(n, e, "access private method"), t);
var vo = Array.isArray, dc = Array.prototype.indexOf, Ys = Array.from, $s = Object.keys, Ps = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, bo = Object.getOwnPropertyDescriptors, uc = Object.prototype, fc = Array.prototype, Br = Object.getPrototypeOf, Oa = Object.isExtensible;
function gc(n) {
  return typeof n == "function";
}
const $i = () => {
};
function hc(n) {
  return n();
}
function yr(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function wo() {
  var n, e, t = new Promise((i, s) => {
    n = i, e = s;
  });
  return { promise: t, resolve: n, reject: e };
}
const be = 2, jr = 4, Qs = 8, pc = 1 << 24, Dt = 16, Bt = 32, an = 64, Xs = 128, ht = 512, ke = 1024, Ge = 2048, Rt = 4096, Ve = 8192, Wt = 16384, os = 32768, En = 65536, Da = 1 << 17, yo = 1 << 18, On = 1 << 19, xo = 1 << 20, Ft = 1 << 25, An = 32768, xr = 1 << 21, Vr = 1 << 22, sn = 1 << 23, xn = Symbol("$state"), _o = Symbol("legacy props"), mc = Symbol(""), Qn = new class extends Error {
  constructor() {
    super(...arguments);
    M(this, "name", "StaleReactionError");
    M(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Gr = 3, Dn = 8;
function ko(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function vc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function bc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function wc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function yc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _c() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function kc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Tc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ec() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ac() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ic = 1, Cc = 2, To = 4, Mc = 8, Rc = 16, Lc = 1, Oc = 2, Dc = 4, Nc = 8, $c = 16, Pc = 4, zc = 1, qc = 2, So = "[", Zs = "[!", Yr = "]", In = {}, xe = Symbol(), Uc = "http://www.w3.org/1999/xhtml";
function ls(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Fc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let q = !1;
function Ht(n) {
  q = n;
}
let D;
function Me(n) {
  if (n === null)
    throw ls(), In;
  return D = n;
}
function Si() {
  return Me(/* @__PURE__ */ pt(D));
}
function K(n) {
  if (q) {
    if (/* @__PURE__ */ pt(D) !== null)
      throw ls(), In;
    D = n;
  }
}
function Qr(n = 1) {
  if (q) {
    for (var e = n, t = D; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ pt(t);
    D = t;
  }
}
function zs(n = !0) {
  for (var e = 0, t = D; ; ) {
    if (t.nodeType === Dn) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === Yr) {
        if (e === 0) return t;
        e -= 1;
      } else (i === So || i === Zs) && (e += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pt(t)
    );
    n && t.remove(), t = s;
  }
}
function Eo(n) {
  if (!n || n.nodeType !== Dn)
    throw ls(), In;
  return (
    /** @type {Comment} */
    n.data
  );
}
function Ao(n) {
  return n === this.v;
}
function Hc(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Io(n) {
  return !Hc(n, this.v);
}
let Ri = !1;
function Wc() {
  Ri = !0;
}
let ie = null;
function Ei(n) {
  ie = n;
}
function jt(n, e = !1, t) {
  ie = {
    p: ie,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: Ri && !e ? { s: null, u: null, $: [] } : null
  };
}
function Vt(n) {
  var e = (
    /** @type {ComponentContext} */
    ie
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Qo(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ie = e.p, n ?? /** @type {T} */
  {};
}
function cs() {
  return !Ri || ie !== null && ie.l === null;
}
let gn = [];
function Co() {
  var n = gn;
  gn = [], yr(n);
}
function Nn(n) {
  if (gn.length === 0 && !Gi) {
    var e = gn;
    queueMicrotask(() => {
      e === gn && Co();
    });
  }
  gn.push(n);
}
function Bc() {
  for (; gn.length > 0; )
    Co();
}
function Mo(n) {
  var e = H;
  if (e === null)
    return U.f |= sn, n;
  if (e.f & os)
    Ai(n, e);
  else {
    if (!(e.f & Xs))
      throw n;
    e.b.error(n);
  }
}
function Ai(n, e) {
  for (; e !== null; ) {
    if (e.f & Xs)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n;
}
const ks = /* @__PURE__ */ new Set();
let $ = null, Ms = null, le = null, Je = [], Ks = null, _r = !1, Gi = !1;
var Jn, ei, hn, pn, is, ti, ni, ve, kr, Wi, Tr, Ro, Lo;
const js = class js {
  constructor() {
    A(this, ve);
    M(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    M(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    M(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    A(this, Jn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, ei, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    A(this, hn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    A(this, pn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, is, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, ti, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, ni, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    M(this, "skipped_effects", /* @__PURE__ */ new Set());
    M(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || f(this, pn) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Je = [], Ms = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const s of e)
      G(this, ve, kr).call(this, s, t);
    this.is_fork || G(this, ve, Ro).call(this), this.is_deferred() ? (G(this, ve, Wi).call(this, t.effects), G(this, ve, Wi).call(this, t.render_effects)) : (Ms = this, $ = null, Na(t.render_effects), Na(t.effects), Ms = null, (i = f(this, is)) == null || i.resolve()), le = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & sn || (this.current.set(e, e.v), le == null || le.set(e, e.v));
  }
  activate() {
    $ = this, this.apply();
  }
  deactivate() {
    $ === this && ($ = null, le = null);
  }
  flush() {
    if (this.activate(), Je.length > 0) {
      if (Oo(), $ !== null && $ !== this)
        return;
    } else f(this, hn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of f(this, ei)) e(this);
    f(this, ei).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    S(this, hn, f(this, hn) + 1), e && S(this, pn, f(this, pn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    S(this, hn, f(this, hn) - 1), e && S(this, pn, f(this, pn) - 1), this.revive();
  }
  revive() {
    for (const e of f(this, ti))
      f(this, ni).delete(e), Te(e, Ge), Cn(e);
    for (const e of f(this, ni))
      Te(e, Rt), Cn(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    f(this, Jn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    f(this, ei).add(e);
  }
  settled() {
    return (f(this, is) ?? S(this, is, wo())).promise;
  }
  static ensure() {
    if ($ === null) {
      const e = $ = new js();
      ks.add($), Gi || js.enqueue(() => {
        $ === e && e.flush();
      });
    }
    return $;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Nn(e);
  }
  apply() {
  }
};
Jn = new WeakMap(), ei = new WeakMap(), hn = new WeakMap(), pn = new WeakMap(), is = new WeakMap(), ti = new WeakMap(), ni = new WeakMap(), ve = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
kr = function(e, t) {
  var d;
  e.f ^= ke;
  for (var i = e.first; i !== null; ) {
    var s = i.f, r = (s & (Bt | an)) !== 0, a = r && (s & ke) !== 0, o = a || (s & Ve) !== 0 || this.skipped_effects.has(i);
    if (i.f & Xs && ((d = i.b) != null && d.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      r ? i.f ^= ke : s & jr ? t.effects.push(i) : us(i) && (i.f & Dt && f(this, ti).add(i), ts(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (G(this, ve, Wi).call(this, t.effects), G(this, ve, Wi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Wi = function(e) {
  for (const t of e)
    t.f & Ge ? f(this, ti).add(t) : t.f & Rt && f(this, ni).add(t), G(this, ve, Tr).call(this, t.deps), Te(t, ke);
}, /**
 * @param {Value[] | null} deps
 */
Tr = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & be) || !(t.f & An) || (t.f ^= An, G(this, ve, Tr).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, Ro = function() {
  if (f(this, pn) === 0) {
    for (const e of f(this, Jn)) e();
    f(this, Jn).clear();
  }
  f(this, hn) === 0 && G(this, ve, Lo).call(this);
}, Lo = function() {
  var r;
  if (ks.size > 1) {
    this.previous.clear();
    var e = le, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of ks) {
      if (a === this) {
        t = !1;
        continue;
      }
      const o = [];
      for (const [c, d] of this.current) {
        if (a.current.has(c))
          if (t && d !== a.current.get(c))
            a.current.set(c, d);
          else
            continue;
        o.push(c);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var s = Je;
        Je = [];
        const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const h of o)
          Do(h, l, c, d);
        if (Je.length > 0) {
          $ = a, a.apply();
          for (const h of Je)
            G(r = a, ve, kr).call(r, h, i);
          a.deactivate();
        }
        Je = s;
      }
    }
    $ = null, le = e;
  }
  this.committed = !0, ks.delete(this);
};
let St = js;
function qe(n) {
  var e = Gi;
  Gi = !0;
  try {
    for (var t; ; ) {
      if (Bc(), Je.length === 0 && ($ == null || $.flush(), Je.length === 0))
        return Ks = null, /** @type {T} */
        t;
      Oo();
    }
  } finally {
    Gi = e;
  }
}
function Oo() {
  var n = Tn;
  _r = !0;
  var e = null;
  try {
    var t = 0;
    for (Us(!0); Je.length > 0; ) {
      var i = St.ensure();
      if (t++ > 1e3) {
        var s, r;
        jc();
      }
      i.process(Je), rn.clear();
    }
  } finally {
    _r = !1, Us(n), Ks = null;
  }
}
function jc() {
  try {
    xc();
  } catch (n) {
    Ai(n, Ks);
  }
}
let ct = null;
function Na(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Wt | Ve)) && us(i) && (ct = /* @__PURE__ */ new Set(), ts(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Jo(i) : i.fn = null), (ct == null ? void 0 : ct.size) > 0)) {
        rn.clear();
        for (const s of ct) {
          if (s.f & (Wt | Ve)) continue;
          const r = [s];
          let a = s.parent;
          for (; a !== null; )
            ct.has(a) && (ct.delete(a), r.push(a)), a = a.parent;
          for (let o = r.length - 1; o >= 0; o--) {
            const l = r[o];
            l.f & (Wt | Ve) || ts(l);
          }
        }
        ct.clear();
      }
    }
    ct = null;
  }
}
function Do(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const s of n.reactions) {
      const r = s.f;
      r & be ? Do(
        /** @type {Derived} */
        s,
        e,
        t,
        i
      ) : r & (Vr | Dt) && !(r & Ge) && No(s, e, i) && (Te(s, Ge), Cn(
        /** @type {Effect} */
        s
      ));
    }
}
function No(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const s of n.deps) {
      if (e.includes(s))
        return !0;
      if (s.f & be && No(
        /** @type {Derived} */
        s,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function Cn(n) {
  for (var e = Ks = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (_r && e === H && t & Dt && !(t & yo))
      return;
    if (t & (an | Bt)) {
      if (!(t & ke)) return;
      e.f ^= ke;
    }
  }
  Je.push(e);
}
function Vc(n) {
  let e = 0, t = Mn(0), i;
  return () => {
    Ji() && (x(t), Js(() => (e === 0 && (i = on(() => n(() => Yi(t)))), e += 1, () => {
      Nn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, Yi(t));
      });
    })));
  };
}
var Gc = En | On | Xs;
function Yc(n, e, t) {
  new Qc(n, e, t);
}
var Xe, We, ss, xt, mn, _t, Ze, $e, kt, zt, en, vn, tn, bn, nn, Vs, ce, $o, Po, Sr, Rs, Ls, Er;
class Qc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    A(this, ce);
    /** @type {Boundary | null} */
    M(this, "parent");
    A(this, Xe, !1);
    /** @type {TemplateNode} */
    A(this, We);
    /** @type {TemplateNode | null} */
    A(this, ss, q ? D : null);
    /** @type {BoundaryProps} */
    A(this, xt);
    /** @type {((anchor: Node) => void)} */
    A(this, mn);
    /** @type {Effect} */
    A(this, _t);
    /** @type {Effect | null} */
    A(this, Ze, null);
    /** @type {Effect | null} */
    A(this, $e, null);
    /** @type {Effect | null} */
    A(this, kt, null);
    /** @type {DocumentFragment | null} */
    A(this, zt, null);
    /** @type {TemplateNode | null} */
    A(this, en, null);
    A(this, vn, 0);
    A(this, tn, 0);
    A(this, bn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, nn, null);
    A(this, Vs, Vc(() => (S(this, nn, Mn(f(this, vn))), () => {
      S(this, nn, null);
    })));
    S(this, We, e), S(this, xt, t), S(this, mn, i), this.parent = /** @type {Effect} */
    H.b, S(this, Xe, !!f(this, xt).pending), S(this, _t, ea(() => {
      if (H.b = this, q) {
        const r = f(this, ss);
        Si(), /** @type {Comment} */
        r.nodeType === Dn && /** @type {Comment} */
        r.data === Zs ? G(this, ce, Po).call(this) : G(this, ce, $o).call(this);
      } else {
        var s = G(this, ce, Sr).call(this);
        try {
          S(this, Ze, et(() => i(s)));
        } catch (r) {
          this.error(r);
        }
        f(this, tn) > 0 ? G(this, ce, Ls).call(this) : S(this, Xe, !1);
      }
      return () => {
        var r;
        (r = f(this, en)) == null || r.remove();
      };
    }, Gc)), q && S(this, We, D);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, Xe) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, xt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    G(this, ce, Er).call(this, e), S(this, vn, f(this, vn) + e), f(this, nn) && Ii(f(this, nn), f(this, vn));
  }
  get_effect_pending() {
    return f(this, Vs).call(this), x(
      /** @type {Source<number>} */
      f(this, nn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = f(this, xt).onerror;
    let i = f(this, xt).failed;
    if (f(this, bn) || !t && !i)
      throw e;
    f(this, Ze) && (Re(f(this, Ze)), S(this, Ze, null)), f(this, $e) && (Re(f(this, $e)), S(this, $e, null)), f(this, kt) && (Re(f(this, kt)), S(this, kt, null)), q && (Me(
      /** @type {TemplateNode} */
      f(this, ss)
    ), Qr(), Me(zs()));
    var s = !1, r = !1;
    const a = () => {
      if (s) {
        Fc();
        return;
      }
      s = !0, r && Ac(), St.ensure(), S(this, vn, 0), f(this, kt) !== null && kn(f(this, kt), () => {
        S(this, kt, null);
      }), S(this, Xe, this.has_pending_snippet()), S(this, Ze, G(this, ce, Rs).call(this, () => (S(this, bn, !1), et(() => f(this, mn).call(this, f(this, We)))))), f(this, tn) > 0 ? G(this, ce, Ls).call(this) : S(this, Xe, !1);
    };
    var o = U;
    try {
      ze(null), r = !0, t == null || t(e, a), r = !1;
    } catch (l) {
      Ai(l, f(this, _t) && f(this, _t).parent);
    } finally {
      ze(o);
    }
    i && Nn(() => {
      S(this, kt, G(this, ce, Rs).call(this, () => {
        St.ensure(), S(this, bn, !0);
        try {
          return et(() => {
            i(
              f(this, We),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Ai(
            l,
            /** @type {Effect} */
            f(this, _t).parent
          ), null;
        } finally {
          S(this, bn, !1);
        }
      }));
    });
  }
}
Xe = new WeakMap(), We = new WeakMap(), ss = new WeakMap(), xt = new WeakMap(), mn = new WeakMap(), _t = new WeakMap(), Ze = new WeakMap(), $e = new WeakMap(), kt = new WeakMap(), zt = new WeakMap(), en = new WeakMap(), vn = new WeakMap(), tn = new WeakMap(), bn = new WeakMap(), nn = new WeakMap(), Vs = new WeakMap(), ce = new WeakSet(), $o = function() {
  try {
    S(this, Ze, et(() => f(this, mn).call(this, f(this, We))));
  } catch (e) {
    this.error(e);
  }
  S(this, Xe, !1);
}, Po = function() {
  const e = f(this, xt).pending;
  e && (S(this, $e, et(() => e(f(this, We)))), St.enqueue(() => {
    var t = G(this, ce, Sr).call(this);
    S(this, Ze, G(this, ce, Rs).call(this, () => (St.ensure(), et(() => f(this, mn).call(this, t))))), f(this, tn) > 0 ? G(this, ce, Ls).call(this) : (kn(
      /** @type {Effect} */
      f(this, $e),
      () => {
        S(this, $e, null);
      }
    ), S(this, Xe, !1));
  }));
}, Sr = function() {
  var e = f(this, We);
  return f(this, Xe) && (S(this, en, tt()), f(this, We).before(f(this, en)), e = f(this, en)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Rs = function(e) {
  var t = H, i = U, s = ie;
  Lt(f(this, _t)), ze(f(this, _t)), Ei(f(this, _t).ctx);
  try {
    return e();
  } catch (r) {
    return Mo(r), null;
  } finally {
    Lt(t), ze(i), Ei(s);
  }
}, Ls = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, xt).pending
  );
  f(this, Ze) !== null && (S(this, zt, document.createDocumentFragment()), f(this, zt).append(
    /** @type {TemplateNode} */
    f(this, en)
  ), nl(f(this, Ze), f(this, zt))), f(this, $e) === null && S(this, $e, et(() => e(f(this, We))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Er = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && G(t = this.parent, ce, Er).call(t, e);
    return;
  }
  S(this, tn, f(this, tn) + e), f(this, tn) === 0 && (S(this, Xe, !1), f(this, $e) && kn(f(this, $e), () => {
    S(this, $e, null);
  }), f(this, zt) && (f(this, We).before(f(this, zt)), S(this, zt, null)));
};
function Xc(n, e, t, i) {
  const s = cs() ? ds : Xr;
  if (t.length === 0 && n.length === 0) {
    i(e.map(s));
    return;
  }
  var r = $, a = (
    /** @type {Effect} */
    H
  ), o = Zc();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ Kc(c))).then((c) => {
      o();
      try {
        i([...e.map(s), ...c]);
      } catch (d) {
        a.f & Wt || Ai(d, a);
      }
      r == null || r.deactivate(), qs();
    }).catch((c) => {
      Ai(c, a);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    o();
    try {
      return l();
    } finally {
      r == null || r.deactivate(), qs();
    }
  }) : l();
}
function Zc() {
  var n = H, e = U, t = ie, i = $;
  return function(r = !0) {
    Lt(n), ze(e), Ei(t), r && (i == null || i.activate());
  };
}
function qs() {
  Lt(null), ze(null), Ei(null);
}
// @__NO_SIDE_EFFECTS__
function ds(n) {
  var e = be | Ge, t = U !== null && U.f & be ? (
    /** @type {Derived} */
    U
  ) : null;
  return H !== null && (H.f |= On), {
    ctx: ie,
    deps: null,
    effects: null,
    equals: Ao,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: t ?? H,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Kc(n, e) {
  let t = (
    /** @type {Effect | null} */
    H
  );
  t === null && vc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), r = Mn(
    /** @type {V} */
    xe
  ), a = !U, o = /* @__PURE__ */ new Map();
  return ld(() => {
    var g;
    var l = wo();
    s = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === $ && c.committed && c.deactivate(), qs();
      });
    } catch (p) {
      l.reject(p), qs();
    }
    var c = (
      /** @type {Batch} */
      $
    );
    if (a) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), (g = o.get(c)) == null || g.reject(Qn), o.delete(c), o.set(c, l);
    }
    const h = (p, b = void 0) => {
      if (c.activate(), b)
        b !== Qn && (r.f |= sn, Ii(r, b));
      else {
        r.f & sn && (r.f ^= sn), Ii(r, p);
        for (const [w, m] of o) {
          if (o.delete(w), w === c) break;
          m.reject(Qn);
        }
      }
      a && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), Yo(() => {
    for (const l of o.values())
      l.reject(Qn);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === s ? l(r) : c(s);
      }
      d.then(h, h);
    }
    c(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ae(n) {
  const e = /* @__PURE__ */ ds(n);
  return il(e), e;
}
// @__NO_SIDE_EFFECTS__
function Xr(n) {
  const e = /* @__PURE__ */ ds(n);
  return e.equals = Io, e;
}
function zo(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Re(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Jc(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & be))
      return e.f & Wt ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Zr(n) {
  var e, t = H;
  Lt(Jc(n));
  try {
    n.f &= ~An, zo(n), e = ol(n);
  } finally {
    Lt(t);
  }
  return e;
}
function qo(n) {
  var e = Zr(n);
  if (n.equals(e) || ($ != null && $.is_fork || (n.v = e), n.wv = rl()), !$n)
    if (le !== null)
      (Ji() || $ != null && $.is_fork) && le.set(n, e);
    else {
      var t = n.f & ht ? ke : Rt;
      Te(n, t);
    }
}
let Ar = /* @__PURE__ */ new Set();
const rn = /* @__PURE__ */ new Map();
let Uo = !1;
function Mn(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Ao,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function F(n, e) {
  const t = Mn(n);
  return il(t), t;
}
// @__NO_SIDE_EFFECTS__
function Fo(n, e = !1, t = !0) {
  var s;
  const i = Mn(n);
  return e || (i.equals = Io), Ri && t && ie !== null && ie.l !== null && ((s = ie.l).s ?? (s.s = [])).push(i), i;
}
function P(n, e, t = !1) {
  U !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Et || U.f & Da) && cs() && U.f & (be | Dt | Vr | Da) && !(Le != null && Le.includes(n)) && Ec();
  let i = t ? ge(e) : e;
  return Ii(n, i);
}
function Ii(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    $n ? rn.set(n, e) : rn.set(n, t), n.v = e;
    var i = St.ensure();
    i.capture(n, t), n.f & be && (n.f & Ge && Zr(
      /** @type {Derived} */
      n
    ), Te(n, n.f & ht ? ke : Rt)), n.wv = rl(), Ho(n, Ge), cs() && H !== null && H.f & ke && !(H.f & (Bt | an)) && (Qe === null ? dd([n]) : Qe.push(n)), !i.is_fork && Ar.size > 0 && !Uo && ed();
  }
  return e;
}
function ed() {
  Uo = !1;
  var n = Tn;
  Us(!0);
  const e = Array.from(Ar);
  try {
    for (const t of e)
      t.f & ke && Te(t, Rt), us(t) && ts(t);
  } finally {
    Us(n);
  }
  Ar.clear();
}
function Yi(n) {
  P(n, n.v + 1);
}
function Ho(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = cs(), s = t.length, r = 0; r < s; r++) {
      var a = t[r], o = a.f;
      if (!(!i && a === H)) {
        var l = (o & Ge) === 0;
        if (l && Te(a, e), o & be) {
          var c = (
            /** @type {Derived} */
            a
          );
          le == null || le.delete(c), o & An || (o & ht && (a.f |= An), Ho(c, Rt));
        } else l && (o & Dt && ct !== null && ct.add(
          /** @type {Effect} */
          a
        ), Cn(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function ge(n) {
  if (typeof n != "object" || n === null || xn in n)
    return n;
  const e = Br(n);
  if (e !== uc && e !== fc)
    return n;
  var t = /* @__PURE__ */ new Map(), i = vo(n), s = /* @__PURE__ */ F(0), r = Sn, a = (o) => {
    if (Sn === r)
      return o();
    var l = U, c = Sn;
    ze(null), qa(r);
    var d = o();
    return ze(l), qa(c), d;
  };
  return i && t.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Tc();
        var d = t.get(l);
        return d === void 0 ? d = a(() => {
          var h = /* @__PURE__ */ F(c.value);
          return t.set(l, h), h;
        }) : P(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ F(xe));
            t.set(l, d), Yi(s);
          }
        } else
          P(c, xe), Yi(s);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === xn)
          return n;
        var d = t.get(l), h = l in o;
        if (d === void 0 && (!h || (p = yn(o, l)) != null && p.writable) && (d = a(() => {
          var b = ge(h ? o[l] : xe), w = /* @__PURE__ */ F(b);
          return w;
        }), t.set(l, d)), d !== void 0) {
          var g = x(d);
          return g === xe ? void 0 : g;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = x(d));
        } else if (c === void 0) {
          var h = t.get(l), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var g;
        if (l === xn)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== xe || Reflect.has(o, l);
        if (c !== void 0 || H !== null && (!d || (g = yn(o, l)) != null && g.writable)) {
          c === void 0 && (c = a(() => {
            var p = d ? ge(o[l]) : xe, b = /* @__PURE__ */ F(p);
            return b;
          }), t.set(l, c));
          var h = x(c);
          if (h === xe)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var T;
        var h = t.get(l), g = l in o;
        if (i && l === "length")
          for (var p = c; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var b = t.get(p + "");
            b !== void 0 ? P(b, xe) : p in o && (b = a(() => /* @__PURE__ */ F(xe)), t.set(p + "", b));
          }
        if (h === void 0)
          (!g || (T = yn(o, l)) != null && T.writable) && (h = a(() => /* @__PURE__ */ F(void 0)), P(h, ge(c)), t.set(l, h));
        else {
          g = h.v !== xe;
          var w = a(() => ge(c));
          P(h, w);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(d, c), !g) {
          if (i && typeof l == "string") {
            var k = (
              /** @type {Source<number>} */
              t.get("length")
            ), z = Number(l);
            Number.isInteger(z) && z >= k.v && P(k, z + 1);
          }
          Yi(s);
        }
        return !0;
      },
      ownKeys(o) {
        x(s);
        var l = Reflect.ownKeys(o).filter((h) => {
          var g = t.get(h);
          return g === void 0 || g.v !== xe;
        });
        for (var [c, d] of t)
          d.v !== xe && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Sc();
      }
    }
  );
}
var $a, Wo, Bo, jo;
function Ir() {
  if ($a === void 0) {
    $a = window, Wo = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Bo = yn(e, "firstChild").get, jo = yn(e, "nextSibling").get, Oa(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Oa(t) && (t.__t = void 0);
  }
}
function tt(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Pe(n) {
  return (
    /** @type {TemplateNode | null} */
    Bo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function pt(n) {
  return (
    /** @type {TemplateNode | null} */
    jo.call(n)
  );
}
function J(n, e) {
  if (!q)
    return /* @__PURE__ */ Pe(n);
  var t = /* @__PURE__ */ Pe(D);
  if (t === null)
    t = D.appendChild(tt());
  else if (e && t.nodeType !== Gr) {
    var i = tt();
    return t == null || t.before(i), Me(i), i;
  }
  return Me(t), t;
}
function Os(n, e = !1) {
  if (!q) {
    var t = /* @__PURE__ */ Pe(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ pt(t) : t;
  }
  if (e && (D == null ? void 0 : D.nodeType) !== Gr) {
    var i = tt();
    return D == null || D.before(i), Me(i), i;
  }
  return D;
}
function ne(n, e = 1, t = !1) {
  let i = q ? D : n;
  for (var s; e--; )
    s = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ pt(i);
  if (!q)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Gr) {
    var r = tt();
    return i === null ? s == null || s.after(r) : i.before(r), Me(r), r;
  }
  return Me(i), i;
}
function Kr(n) {
  n.textContent = "";
}
function Vo() {
  return !1;
}
function td(n) {
  q && /* @__PURE__ */ Pe(n) !== null && Kr(n);
}
let Pa = !1;
function nd() {
  Pa || (Pa = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Li(n) {
  var e = U, t = H;
  ze(null), Lt(null);
  try {
    return n();
  } finally {
    ze(e), Lt(t);
  }
}
function id(n, e, t, i = t) {
  n.addEventListener(e, () => Li(t));
  const s = n.__on_r;
  s ? n.__on_r = () => {
    s(), i(!0);
  } : n.__on_r = () => i(!0), nd();
}
function Go(n) {
  H === null && (U === null && yc(), wc()), $n && bc();
}
function sd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function mt(n, e, t) {
  var i = H;
  i !== null && i.f & Ve && (n |= Ve);
  var s = {
    ctx: ie,
    deps: null,
    nodes: null,
    f: n | Ge | ht,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (t)
    try {
      ts(s), s.f |= os;
    } catch (o) {
      throw Re(s), o;
    }
  else e !== null && Cn(s);
  var r = s;
  if (t && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  !(r.f & On) && (r = r.first, n & Dt && n & En && r !== null && (r.f |= En)), r !== null && (r.parent = i, i !== null && sd(r, i), U !== null && U.f & be && !(n & an))) {
    var a = (
      /** @type {Derived} */
      U
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return s;
}
function Ji() {
  return U !== null && !Et;
}
function Yo(n) {
  const e = mt(Qs, null, !1);
  return Te(e, ke), e.teardown = n, e;
}
function _n(n) {
  Go();
  var e = (
    /** @type {Effect} */
    H.f
  ), t = !U && (e & Bt) !== 0 && (e & os) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ie
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Qo(n);
}
function Qo(n) {
  return mt(jr | xo, n, !1);
}
function rd(n) {
  return Go(), mt(Qs | xo, n, !0);
}
function ad(n) {
  St.ensure();
  const e = mt(an | On, n, !0);
  return () => {
    Re(e);
  };
}
function od(n) {
  St.ensure();
  const e = mt(an | On, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? kn(e, () => {
      Re(e), i(void 0);
    }) : (Re(e), i(void 0));
  });
}
function Jr(n) {
  return mt(jr, n, !1);
}
function ld(n) {
  return mt(Vr | On, n, !0);
}
function Js(n, e = 0) {
  return mt(Qs | e, n, !0);
}
function nt(n, e = [], t = [], i = []) {
  Xc(i, e, t, (s) => {
    mt(Qs, () => n(...s.map(x)), !0);
  });
}
function ea(n, e = 0) {
  var t = mt(Dt | e, n, !0);
  return t;
}
function et(n) {
  return mt(Bt | On, n, !0);
}
function Xo(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = $n, i = U;
    za(!0), ze(null);
    try {
      e.call(null);
    } finally {
      za(t), ze(i);
    }
  }
}
function Zo(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const s = t.ac;
    s !== null && Li(() => {
      s.abort(Qn);
    });
    var i = t.next;
    t.f & an ? t.parent = null : Re(t, e), t = i;
  }
}
function cd(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & Bt || Re(e), e = t;
  }
}
function Re(n, e = !0) {
  var t = !1;
  (e || n.f & yo) && n.nodes !== null && n.nodes.end !== null && (Ko(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), Zo(n, e && !t), Fs(n, 0), Te(n, Wt);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const r of i)
      r.stop();
  Xo(n);
  var s = n.parent;
  s !== null && s.first !== null && Jo(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function Ko(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ pt(n);
    n.remove(), n = t;
  }
}
function Jo(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function kn(n, e, t = !0) {
  var i = [];
  el(n, i, !0);
  var s = () => {
    t && Re(n), e && e();
  }, r = i.length;
  if (r > 0) {
    var a = () => --r || s();
    for (var o of i)
      o.out(a);
  } else
    s();
}
function el(n, e, t) {
  if (!(n.f & Ve)) {
    n.f ^= Ve;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && e.push(o);
    for (var s = n.first; s !== null; ) {
      var r = s.next, a = (s.f & En) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Bt) !== 0 && (n.f & Dt) !== 0;
      el(s, e, a ? t : !1), s = r;
    }
  }
}
function ta(n) {
  tl(n, !0);
}
function tl(n, e) {
  if (n.f & Ve) {
    n.f ^= Ve, n.f & ke || (Te(n, Ge), Cn(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, s = (t.f & En) !== 0 || (t.f & Bt) !== 0;
      tl(t, s ? e : !1), t = i;
    }
    var r = n.nodes && n.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || e) && a.in();
  }
}
function nl(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var s = t === i ? null : /* @__PURE__ */ pt(t);
      e.append(t), t = s;
    }
}
let Tn = !1;
function Us(n) {
  Tn = n;
}
let $n = !1;
function za(n) {
  $n = n;
}
let U = null, Et = !1;
function ze(n) {
  U = n;
}
let H = null;
function Lt(n) {
  H = n;
}
let Le = null;
function il(n) {
  U !== null && (Le === null ? Le = [n] : Le.push(n));
}
let Ee = null, He = 0, Qe = null;
function dd(n) {
  Qe = n;
}
let sl = 1, es = 0, Sn = es;
function qa(n) {
  Sn = n;
}
function rl() {
  return ++sl;
}
function us(n) {
  var e = n.f;
  if (e & Ge)
    return !0;
  if (e & be && (n.f &= ~An), e & Rt) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, s = 0; s < i; s++) {
        var r = t[s];
        if (us(
          /** @type {Derived} */
          r
        ) && qo(
          /** @type {Derived} */
          r
        ), r.wv > n.wv)
          return !0;
      }
    e & ht && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    le === null && Te(n, ke);
  }
  return !1;
}
function al(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(Le != null && Le.includes(n)))
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      r.f & be ? al(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (t ? Te(r, Ge) : r.f & ke && Te(r, Rt), Cn(
        /** @type {Effect} */
        r
      ));
    }
}
function ol(n) {
  var b;
  var e = Ee, t = He, i = Qe, s = U, r = Le, a = ie, o = Et, l = Sn, c = n.f;
  Ee = /** @type {null | Value[]} */
  null, He = 0, Qe = null, U = c & (Bt | an) ? null : n, Le = null, Ei(n.ctx), Et = !1, Sn = ++es, n.ac !== null && (Li(() => {
    n.ac.abort(Qn);
  }), n.ac = null);
  try {
    n.f |= xr;
    var d = (
      /** @type {Function} */
      n.fn
    ), h = d(), g = n.deps;
    if (Ee !== null) {
      var p;
      if (Fs(n, He), g !== null && He > 0)
        for (g.length = He + Ee.length, p = 0; p < Ee.length; p++)
          g[He + p] = Ee[p];
      else
        n.deps = g = Ee;
      if (Ji() && n.f & ht)
        for (p = He; p < g.length; p++)
          ((b = g[p]).reactions ?? (b.reactions = [])).push(n);
    } else g !== null && He < g.length && (Fs(n, He), g.length = He);
    if (cs() && Qe !== null && !Et && g !== null && !(n.f & (be | Rt | Ge)))
      for (p = 0; p < /** @type {Source[]} */
      Qe.length; p++)
        al(
          Qe[p],
          /** @type {Effect} */
          n
        );
    return s !== null && s !== n && (es++, Qe !== null && (i === null ? i = Qe : i.push(.../** @type {Source[]} */
    Qe))), n.f & sn && (n.f ^= sn), h;
  } catch (w) {
    return Mo(w);
  } finally {
    n.f ^= xr, Ee = e, He = t, Qe = i, U = s, Le = r, Ei(a), Et = o, Sn = l;
  }
}
function ud(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = dc.call(t, n);
    if (i !== -1) {
      var s = t.length - 1;
      s === 0 ? t = e.reactions = null : (t[i] = t[s], t.pop());
    }
  }
  t === null && e.f & be && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ee === null || !Ee.includes(e)) && (Te(e, Rt), e.f & ht && (e.f ^= ht, e.f &= ~An), zo(
    /** @type {Derived} **/
    e
  ), Fs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Fs(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      ud(n, t[i]);
}
function ts(n) {
  var e = n.f;
  if (!(e & Wt)) {
    Te(n, ke);
    var t = H, i = Tn;
    H = n, Tn = !0;
    try {
      e & (Dt | pc) ? cd(n) : Zo(n), Xo(n);
      var s = ol(n);
      n.teardown = typeof s == "function" ? s : null, n.wv = sl;
      var r;
    } finally {
      Tn = i, H = t;
    }
  }
}
async function ll() {
  await Promise.resolve(), qe();
}
function x(n) {
  var e = n.f, t = (e & be) !== 0;
  if (U !== null && !Et) {
    var i = H !== null && (H.f & Wt) !== 0;
    if (!i && !(Le != null && Le.includes(n))) {
      var s = U.deps;
      if (U.f & xr)
        n.rv < es && (n.rv = es, Ee === null && s !== null && s[He] === n ? He++ : Ee === null ? Ee = [n] : Ee.includes(n) || Ee.push(n));
      else {
        (U.deps ?? (U.deps = [])).push(n);
        var r = n.reactions;
        r === null ? n.reactions = [U] : r.includes(U) || r.push(U);
      }
    }
  }
  if ($n) {
    if (rn.has(n))
      return rn.get(n);
    if (t) {
      var a = (
        /** @type {Derived} */
        n
      ), o = a.v;
      return (!(a.f & ke) && a.reactions !== null || dl(a)) && (o = Zr(a)), rn.set(a, o), o;
    }
  } else t && (!(le != null && le.has(n)) || $ != null && $.is_fork && !Ji()) && (a = /** @type {Derived} */
  n, us(a) && qo(a), Tn && Ji() && !(a.f & ht) && cl(a));
  if (le != null && le.has(n))
    return le.get(n);
  if (n.f & sn)
    throw n.v;
  return n.v;
}
function cl(n) {
  if (n.deps !== null) {
    n.f ^= ht;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & be && !(e.f & ht) && cl(
        /** @type {Derived} */
        e
      );
  }
}
function dl(n) {
  if (n.v === xe) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (rn.has(e) || e.f & be && dl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function on(n) {
  var e = Et;
  try {
    return Et = !0, n();
  } finally {
    Et = e;
  }
}
const fd = -7169;
function Te(n, e) {
  n.f = n.f & fd | e;
}
function gd(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (xn in n)
      Cr(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && xn in t && Cr(t);
      }
  }
}
function Cr(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let i in n)
      try {
        Cr(n[i], e);
      } catch {
      }
    const t = Br(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = bo(t);
      for (let s in i) {
        const r = i[s].get;
        if (r)
          try {
            r.call(n);
          } catch {
          }
      }
    }
  }
}
const hd = ["touchstart", "touchmove"];
function pd(n) {
  return hd.includes(n);
}
const ul = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Set();
function md(n, e, t, i = {}) {
  function s(r) {
    if (i.capture || Bi.call(e, r), !r.cancelBubble)
      return Li(() => t == null ? void 0 : t.call(this, r));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Nn(() => {
    e.addEventListener(n, s, i);
  }) : e.addEventListener(n, s, i), s;
}
function vd(n, e, t, i, s) {
  var r = { capture: i, passive: s }, a = md(n, e, t, r);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Yo(() => {
    e.removeEventListener(n, a, r);
  });
}
function fs(n) {
  for (var e = 0; e < n.length; e++)
    ul.add(n[e]);
  for (var t of Mr)
    t(n);
}
let Ua = null;
function Bi(n) {
  var m;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, s = ((m = n.composedPath) == null ? void 0 : m.call(n)) || [], r = (
    /** @type {null | Element} */
    s[0] || n.target
  );
  Ua = n;
  var a = 0, o = Ua === n && n.__root;
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = s.indexOf(e);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (r = /** @type {Element} */
  s[a] || n.target, r !== e) {
    Ps(n, "currentTarget", {
      configurable: !0,
      get() {
        return r || t;
      }
    });
    var d = U, h = H;
    ze(null), Lt(null);
    try {
      for (var g, p = []; r !== null; ) {
        var b = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var w = r["__" + i];
          w != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === r) && w.call(r, n);
        } catch (k) {
          g ? p.push(k) : g = k;
        }
        if (n.cancelBubble || b === e || b === null)
          break;
        r = b;
      }
      if (g) {
        for (let k of p)
          queueMicrotask(() => {
            throw k;
          });
        throw g;
      }
    } finally {
      n.__root = e, delete n.currentTarget, ze(d), Lt(h);
    }
  }
}
function na(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function Mt(n, e) {
  var t = (
    /** @type {Effect} */
    H
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Q(n, e) {
  var t = (e & zc) !== 0, i = (e & qc) !== 0, s, r = !n.startsWith("<!>");
  return () => {
    if (q)
      return Mt(D, null), D;
    s === void 0 && (s = na(r ? n : "<!>" + n), t || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Pe(s)));
    var a = (
      /** @type {TemplateNode} */
      i || Wo ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Mt(o, l);
    } else
      Mt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function bd(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), s = `<${t}>${i ? n : "<!>" + n}</${t}>`, r;
  return () => {
    if (q)
      return Mt(D, null), D;
    if (!r) {
      var a = (
        /** @type {DocumentFragment} */
        na(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Pe(a)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ Pe(o);
    }
    var l = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return Mt(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function wd(n, e) {
  return /* @__PURE__ */ bd(n, e, "svg");
}
function yd() {
  if (q)
    return Mt(D, null), D;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = tt();
  return n.append(e, t), Mt(e, t), n;
}
function j(n, e) {
  if (q) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      H
    );
    (!(t.f & os) || t.nodes.end === null) && (t.nodes.end = D), Si();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let Rr = !0;
function Ci(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function ia(n, e) {
  return fl(n, e);
}
function xd(n, e) {
  Ir(), e.intro = e.intro ?? !1;
  const t = e.target, i = q, s = D;
  try {
    for (var r = /* @__PURE__ */ Pe(t); r && (r.nodeType !== Dn || /** @type {Comment} */
    r.data !== So); )
      r = /* @__PURE__ */ pt(r);
    if (!r)
      throw In;
    Ht(!0), Me(
      /** @type {Comment} */
      r
    );
    const a = fl(n, { ...e, anchor: r });
    return Ht(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== In && console.warn("Failed to hydrate: ", a), e.recover === !1 && _c(), Ir(), Kr(t), Ht(!1), ia(n, e);
  } finally {
    Ht(i), Me(s);
  }
}
const Yn = /* @__PURE__ */ new Map();
function fl(n, { target: e, anchor: t, props: i = {}, events: s, context: r, intro: a = !0 }) {
  Ir();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!o.has(p)) {
        o.add(p);
        var b = pd(p);
        e.addEventListener(p, Bi, { passive: b });
        var w = Yn.get(p);
        w === void 0 ? (document.addEventListener(p, Bi, { passive: b }), Yn.set(p, 1)) : Yn.set(p, w + 1);
      }
    }
  };
  l(Ys(ul)), Mr.add(l);
  var c = void 0, d = od(() => {
    var h = t ?? e.appendChild(tt());
    return Yc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (g) => {
        if (r) {
          jt({});
          var p = (
            /** @type {ComponentContext} */
            ie
          );
          p.c = r;
        }
        if (s && (i.$$events = s), q && Mt(
          /** @type {TemplateNode} */
          g,
          null
        ), Rr = a, c = n(g, i) || {}, Rr = !0, q && (H.nodes.end = D, D === null || D.nodeType !== Dn || /** @type {Comment} */
        D.data !== Yr))
          throw ls(), In;
        r && Vt();
      }
    ), () => {
      var b;
      for (var g of o) {
        e.removeEventListener(g, Bi);
        var p = (
          /** @type {number} */
          Yn.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, Bi), Yn.delete(g)) : Yn.set(g, p);
      }
      Mr.delete(l), h !== t && ((b = h.parentNode) == null || b.removeChild(h));
    };
  });
  return Lr.set(c, d), c;
}
let Lr = /* @__PURE__ */ new WeakMap();
function Or(n, e) {
  const t = Lr.get(n);
  return t ? (Lr.delete(n), t(e)) : Promise.resolve();
}
var ft, Tt, Be, wn, rs, as, Gs;
class _d {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    M(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, ft, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    A(this, Tt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, Be, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, wn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, rs, !0);
    A(this, as, () => {
      var e = (
        /** @type {Batch} */
        $
      );
      if (f(this, ft).has(e)) {
        var t = (
          /** @type {Key} */
          f(this, ft).get(e)
        ), i = f(this, Tt).get(t);
        if (i)
          ta(i), f(this, wn).delete(t);
        else {
          var s = f(this, Be).get(t);
          s && (f(this, Tt).set(t, s.effect), f(this, Be).delete(t), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), i = s.effect);
        }
        for (const [r, a] of f(this, ft)) {
          if (f(this, ft).delete(r), r === e)
            break;
          const o = f(this, Be).get(a);
          o && (Re(o.effect), f(this, Be).delete(a));
        }
        for (const [r, a] of f(this, Tt)) {
          if (r === t || f(this, wn).has(r)) continue;
          const o = () => {
            if (Array.from(f(this, ft).values()).includes(r)) {
              var c = document.createDocumentFragment();
              nl(a, c), c.append(tt()), f(this, Be).set(r, { effect: a, fragment: c });
            } else
              Re(a);
            f(this, wn).delete(r), f(this, Tt).delete(r);
          };
          f(this, rs) || !i ? (f(this, wn).add(r), kn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, Gs, (e) => {
      f(this, ft).delete(e);
      const t = Array.from(f(this, ft).values());
      for (const [i, s] of f(this, Be))
        t.includes(i) || (Re(s.effect), f(this, Be).delete(i));
    });
    this.anchor = e, S(this, rs, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      $
    ), s = Vo();
    if (t && !f(this, Tt).has(e) && !f(this, Be).has(e))
      if (s) {
        var r = document.createDocumentFragment(), a = tt();
        r.append(a), f(this, Be).set(e, {
          effect: et(() => t(a)),
          fragment: r
        });
      } else
        f(this, Tt).set(
          e,
          et(() => t(this.anchor))
        );
    if (f(this, ft).set(i, e), s) {
      for (const [o, l] of f(this, Tt))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of f(this, Be))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, as)), i.ondiscard(f(this, Gs));
    } else
      q && (this.anchor = D), f(this, as).call(this);
  }
}
ft = new WeakMap(), Tt = new WeakMap(), Be = new WeakMap(), wn = new WeakMap(), rs = new WeakMap(), as = new WeakMap(), Gs = new WeakMap();
function Ie(n, e, t = !1) {
  q && Si();
  var i = new _d(n), s = t ? En : 0;
  function r(a, o) {
    if (q) {
      const c = Eo(n) === Zs;
      if (a === c) {
        var l = zs();
        Me(l), i.anchor = l, Ht(!1), i.ensure(a, o), Ht(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  ea(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, r(l, o);
    }), a || r(!1, null);
  }, s);
}
function kd(n, e, t) {
  for (var i = [], s = e.length, r, a = e.length, o = 0; o < s; o++) {
    let h = e[o];
    kn(
      h,
      () => {
        if (r) {
          if (r.pending.delete(h), r.done.add(h), r.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Dr(Ys(r.done)), g.delete(r), g.size === 0 && (n.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = i.length === 0 && t !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        t
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Kr(d), d.append(c), n.items.clear();
    }
    Dr(e, !l);
  } else
    r = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(r);
}
function Dr(n, e = !0) {
  for (var t = 0; t < n.length; t++)
    Re(n[t], e);
}
var Fa;
function gl(n, e, t, i, s, r = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & To) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = q ? Me(/* @__PURE__ */ Pe(c)) : c.appendChild(tt());
  }
  q && Si();
  var d = null, h = /* @__PURE__ */ Xr(() => {
    var k = t();
    return vo(k) ? k : k == null ? [] : Ys(k);
  }), g, p = !0;
  function b() {
    m.fallback = d, Td(m, g, a, e, i), d !== null && (g.length === 0 ? d.f & Ft ? (d.f ^= Ft, ji(d, null, a)) : ta(d) : kn(d, () => {
      d = null;
    }));
  }
  var w = ea(() => {
    g = /** @type {V[]} */
    x(h);
    var k = g.length;
    let z = !1;
    if (q) {
      var T = Eo(a) === Zs;
      T !== (k === 0) && (a = zs(), Me(a), Ht(!1), z = !0);
    }
    for (var _ = /* @__PURE__ */ new Set(), R = (
      /** @type {Batch} */
      $
    ), X = Vo(), B = 0; B < k; B += 1) {
      q && D.nodeType === Dn && /** @type {Comment} */
      D.data === Yr && (a = /** @type {Comment} */
      D, z = !0, Ht(!1));
      var se = g[B], he = i(se, B), we = p ? null : o.get(he);
      we ? (we.v && Ii(we.v, se), we.i && Ii(we.i, B), X && R.skipped_effects.delete(we.e)) : (we = Sd(
        o,
        p ? a : Fa ?? (Fa = tt()),
        se,
        he,
        B,
        s,
        e,
        t
      ), p || (we.e.f |= Ft), o.set(he, we)), _.add(he);
    }
    if (k === 0 && r && !d && (p ? d = et(() => r(a)) : (d = et(() => r(Fa ?? (Fa = tt()))), d.f |= Ft)), q && k > 0 && Me(zs()), !p)
      if (X) {
        for (const [ee, rt] of o)
          _.has(ee) || R.skipped_effects.add(rt.e);
        R.oncommit(b), R.ondiscard(() => {
        });
      } else
        b();
    z && Ht(!0), x(h);
  }), m = { effect: w, items: o, outrogroups: null, fallback: d };
  p = !1, q && (a = D);
}
function Td(n, e, t, i, s) {
  var we, ee, rt, Gt, Yt, zn, Qt, qn, dn;
  var r = (i & Mc) !== 0, a = e.length, o = n.items, l = n.effect.first, c, d = null, h, g = [], p = [], b, w, m, k;
  if (r)
    for (k = 0; k < a; k += 1)
      b = e[k], w = s(b, k), m = /** @type {EachItem} */
      o.get(w).e, m.f & Ft || ((ee = (we = m.nodes) == null ? void 0 : we.a) == null || ee.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(m));
  for (k = 0; k < a; k += 1) {
    if (b = e[k], w = s(b, k), m = /** @type {EachItem} */
    o.get(w).e, n.outrogroups !== null)
      for (const Ue of n.outrogroups)
        Ue.pending.delete(m), Ue.done.delete(m);
    if (m.f & Ft)
      if (m.f ^= Ft, m === l)
        ji(m, null, t);
      else {
        var z = d ? d.next : l;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Jt(n, d, m), Jt(n, m, z), ji(m, z, t), d = m, g = [], p = [], l = d.next;
        continue;
      }
    if (m.f & Ve && (ta(m), r && ((Gt = (rt = m.nodes) == null ? void 0 : rt.a) == null || Gt.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (g.length < p.length) {
          var T = p[0], _;
          d = T.prev;
          var R = g[0], X = g[g.length - 1];
          for (_ = 0; _ < g.length; _ += 1)
            ji(g[_], T, t);
          for (_ = 0; _ < p.length; _ += 1)
            c.delete(p[_]);
          Jt(n, R.prev, X.next), Jt(n, d, R), Jt(n, X, T), l = T, d = X, k -= 1, g = [], p = [];
        } else
          c.delete(m), ji(m, l, t), Jt(n, m.prev, m.next), Jt(n, m, d === null ? n.effect.first : d.next), Jt(n, d, m), d = m;
        continue;
      }
      for (g = [], p = []; l !== null && l !== m; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
    }
    m.f & Ft || g.push(m), d = m, l = m.next;
  }
  if (n.outrogroups !== null) {
    for (const Ue of n.outrogroups)
      Ue.pending.size === 0 && (Dr(Ys(Ue.done)), (Yt = n.outrogroups) == null || Yt.delete(Ue));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var B = [];
    if (c !== void 0)
      for (m of c)
        m.f & Ve || B.push(m);
    for (; l !== null; )
      !(l.f & Ve) && l !== n.fallback && B.push(l), l = l.next;
    var se = B.length;
    if (se > 0) {
      var he = i & To && a === 0 ? t : null;
      if (r) {
        for (k = 0; k < se; k += 1)
          (Qt = (zn = B[k].nodes) == null ? void 0 : zn.a) == null || Qt.measure();
        for (k = 0; k < se; k += 1)
          (dn = (qn = B[k].nodes) == null ? void 0 : qn.a) == null || dn.fix();
      }
      kd(n, B, he);
    }
  }
  r && Nn(() => {
    var Ue, at;
    if (h !== void 0)
      for (m of h)
        (at = (Ue = m.nodes) == null ? void 0 : Ue.a) == null || at.apply();
  });
}
function Sd(n, e, t, i, s, r, a, o) {
  var l = a & Ic ? a & Rc ? Mn(t) : /* @__PURE__ */ Fo(t, !1, !1) : null, c = a & Cc ? Mn(s) : null;
  return {
    v: l,
    i: c,
    e: et(() => (r(e, l ?? t, c ?? s, o), () => {
      n.delete(i);
    }))
  };
}
function ji(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, s = n.nodes.end, r = e && !(e.f & Ft) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pt(i)
      );
      if (r.before(i), i === s)
        return;
      i = a;
    }
}
function Jt(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Ed(n, e, t = !1, i = !1, s = !1) {
  var r = n, a = "";
  nt(() => {
    var o = (
      /** @type {Effect} */
      H
    );
    if (a === (a = e() ?? "")) {
      q && Si();
      return;
    }
    if (o.nodes !== null && (Ko(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (q) {
        D.data;
        for (var l = Si(), c = l; l !== null && (l.nodeType !== Dn || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ pt(l);
        if (l === null)
          throw ls(), In;
        Mt(D, c), r = Me(l);
        return;
      }
      var d = a + "";
      t ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var h = na(d);
      if ((t || i) && (h = /** @type {Element} */
      /* @__PURE__ */ Pe(h)), Mt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), t || i)
        for (; /* @__PURE__ */ Pe(h); )
          r.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Pe(h)
          );
      else
        r.before(h);
    }
  });
}
const Ad = () => performance.now(), Ut = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Ad(),
  tasks: /* @__PURE__ */ new Set()
};
function hl() {
  const n = Ut.now();
  Ut.tasks.forEach((e) => {
    e.c(n) || (Ut.tasks.delete(e), e.f());
  }), Ut.tasks.size !== 0 && Ut.tick(hl);
}
function Id(n) {
  let e;
  return Ut.tasks.size === 0 && Ut.tick(hl), {
    promise: new Promise((t) => {
      Ut.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      Ut.tasks.delete(e);
    }
  };
}
function Ts(n, e) {
  Li(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function Cd(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Ha(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [s, r] = i.split(":");
    if (!s || r === void 0) break;
    const a = Cd(s.trim());
    e[a] = r.trim();
  }
  return e;
}
const Md = (n) => n;
function Wa(n, e, t, i) {
  var m;
  var s = (n & Pc) !== 0, r = "both", a, o = e.inert, l = e.style.overflow, c, d;
  function h() {
    return Li(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: r
    })));
  }
  var g = {
    is_global: s,
    in() {
      e.inert = o, Ts(e, "introstart"), c = Nr(e, h(), d, 1, () => {
        Ts(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(k) {
      e.inert = !0, Ts(e, "outrostart"), d = Nr(e, h(), c, 0, () => {
        Ts(e, "outroend"), k == null || k();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    H
  );
  if (((m = p.nodes).t ?? (m.t = [])).push(g), Rr) {
    var b = s;
    if (!b) {
      for (var w = (
        /** @type {Effect | null} */
        p.parent
      ); w && w.f & En; )
        for (; (w = w.parent) && !(w.f & Dt); )
          ;
      b = !w || (w.f & os) !== 0;
    }
    b && Jr(() => {
      on(() => g.in());
    });
  }
}
function Nr(n, e, t, i, s) {
  var r = i === 1;
  if (gc(e)) {
    var a, o = !1;
    return Nn(() => {
      if (!o) {
        var m = e({ direction: r ? "in" : "out" });
        a = Nr(n, m, t, i, s);
      }
    }), {
      abort: () => {
        o = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (t == null || t.deactivate(), !(e != null && e.duration))
    return s(), {
      abort: $i,
      deactivate: $i,
      reset: $i,
      t: () => i
    };
  const { delay: l = 0, css: c, tick: d, easing: h = Md } = e;
  var g = [];
  if (r && t === void 0 && (d && d(0, 1), c)) {
    var p = Ha(c(0, 1));
    g.push(p, p);
  }
  var b = () => 1 - i, w = n.animate(g, { duration: l, fill: "forwards" });
  return w.onfinish = () => {
    w.cancel();
    var m = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var k = i - m, z = (
      /** @type {number} */
      e.duration * Math.abs(k)
    ), T = [];
    if (z > 0) {
      var _ = !1;
      if (c)
        for (var R = Math.ceil(z / 16.666666666666668), X = 0; X <= R; X += 1) {
          var B = m + k * h(X / R), se = Ha(c(B, 1 - B));
          T.push(se), _ || (_ = se.overflow === "hidden");
        }
      _ && (n.style.overflow = "hidden"), b = () => {
        var he = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          w.currentTime
        );
        return m + k * h(he / z);
      }, d && Id(() => {
        if (w.playState !== "running") return !1;
        var he = b();
        return d(he, 1 - he), !0;
      });
    }
    w = n.animate(T, { duration: z, fill: "forwards" }), w.onfinish = () => {
      b = () => i, d == null || d(i, 1 - i), s();
    };
  }, {
    abort: () => {
      w && (w.cancel(), w.effect = null, w.onfinish = $i);
    },
    deactivate: () => {
      s = $i;
    },
    reset: () => {
      i === 0 && (d == null || d(1, 0));
    },
    t: () => b()
  };
}
function ln(n, e) {
  Jr(() => {
    var t = n.getRootNode(), i = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + e.hash)) {
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, i.appendChild(s);
    }
  });
}
const Ba = [...` 	
\r\f \v\uFEFF`];
function Rd(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var s in t)
      if (t[s])
        i = i ? i + " " + s : s;
      else if (i.length)
        for (var r = s.length, a = 0; (a = i.indexOf(s, a)) >= 0; ) {
          var o = a + r;
          (a === 0 || Ba.includes(i[a - 1])) && (o === i.length || Ba.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Ld(n, e) {
  return n == null ? null : String(n);
}
function sa(n, e, t, i, s, r) {
  var a = n.__className;
  if (q || a !== t || a === void 0) {
    var o = Rd(t, i, r);
    (!q || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (r && s !== r)
    for (var l in r) {
      var c = !!r[l];
      (s == null || c !== !!s[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function pl(n, e, t, i) {
  var s = n.__style;
  if (q || s !== e) {
    var r = Ld(e);
    (!q || r !== n.getAttribute("style")) && (r == null ? n.removeAttribute("style") : n.style.cssText = r), n.__style = e;
  }
  return i;
}
const Od = Symbol("is custom element"), Dd = Symbol("is html");
function Ot(n, e, t, i) {
  var s = Nd(n);
  q && (s[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || s[e] !== (s[e] = t) && (e === "loading" && (n[mc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && $d(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Nd(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Od]: n.nodeName.includes("-"),
      [Dd]: n.namespaceURI === Uc
    })
  );
}
var ja = /* @__PURE__ */ new Map();
function $d(n) {
  var e = n.getAttribute("is") || n.nodeName, t = ja.get(e);
  if (t) return t;
  ja.set(e, t = []);
  for (var i, s = n, r = Element.prototype; r !== s; ) {
    i = bo(s);
    for (var a in i)
      i[a].set && t.push(a);
    s = Br(s);
  }
  return t;
}
function Pd(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  id(n, "input", async (s) => {
    var r = s ? n.defaultValue : n.value;
    if (r = ur(n) ? fr(r) : r, t(r), $ !== null && i.add($), await ll(), r !== (r = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = r ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (q && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  on(e) == null && n.value) && (t(ur(n) ? fr(n.value) : n.value), $ !== null && i.add($)), Js(() => {
    var s = e();
    if (n === document.activeElement) {
      var r = (
        /** @type {Batch} */
        Ms ?? $
      );
      if (i.has(r))
        return;
    }
    ur(n) && s === fr(n.value) || n.type === "date" && !s && !n.value || s !== n.value && (n.value = s ?? "");
  });
}
function ur(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function fr(n) {
  return n === "" ? null : +n;
}
function Va(n, e) {
  return n === e || (n == null ? void 0 : n[xn]) === e;
}
function ra(n = {}, e, t, i) {
  return Jr(() => {
    var s, r;
    return Js(() => {
      s = r, r = [], on(() => {
        n !== t(...r) && (e(n, ...r), s && Va(t(...s), n) && e(null, ...s));
      });
    }), () => {
      Nn(() => {
        r && Va(t(...r), n) && e(null, ...r);
      });
    };
  }), n;
}
function zd(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ie
  ), t = e.l.u;
  if (!t) return;
  let i = () => gd(e.s);
  if (n) {
    let s = 0, r = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ ds(() => {
      let o = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== r[c] && (r[c] = l[c], o = !0);
      return o && s++, s;
    });
    i = () => x(a);
  }
  t.b.length && rd(() => {
    Ga(e, i), yr(t.b);
  }), _n(() => {
    const s = on(() => t.m.map(hc));
    return () => {
      for (const r of s)
        typeof r == "function" && r();
    };
  }), t.a.length && _n(() => {
    Ga(e, i), yr(t.a);
  });
}
function Ga(n, e) {
  if (n.l.s)
    for (const t of n.l.s) x(t);
  e();
}
let Ss = !1;
function qd(n) {
  var e = Ss;
  try {
    return Ss = !1, [n(), Ss];
  } finally {
    Ss = e;
  }
}
function it(n, e, t, i) {
  var T;
  var s = !Ri || (t & Oc) !== 0, r = (t & Nc) !== 0, a = (t & $c) !== 0, o = (
    /** @type {V} */
    i
  ), l = !0, c = () => (l && (l = !1, o = a ? on(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), o), d;
  if (r) {
    var h = xn in n || _o in n;
    d = ((T = yn(n, e)) == null ? void 0 : T.set) ?? (h && e in n ? (_) => n[e] = _ : void 0);
  }
  var g, p = !1;
  r ? [g, p] = qd(() => (
    /** @type {V} */
    n[e]
  )) : g = /** @type {V} */
  n[e], g === void 0 && i !== void 0 && (g = c(), d && (s && kc(), d(g)));
  var b;
  if (s ? b = () => {
    var _ = (
      /** @type {V} */
      n[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : b = () => {
    var _ = (
      /** @type {V} */
      n[e]
    );
    return _ !== void 0 && (o = /** @type {V} */
    void 0), _ === void 0 ? o : _;
  }, s && !(t & Dc))
    return b;
  if (d) {
    var w = n.$$legacy;
    return (
      /** @type {() => V} */
      function(_, R) {
        return arguments.length > 0 ? ((!s || !R || w || p) && d(R ? b() : _), _) : b();
      }
    );
  }
  var m = !1, k = (t & Lc ? ds : Xr)(() => (m = !1, b()));
  r && x(k);
  var z = (
    /** @type {Effect} */
    H
  );
  return (
    /** @type {() => V} */
    function(_, R) {
      if (arguments.length > 0) {
        const X = R ? x(k) : s && r ? ge(_) : _;
        return P(k, X), m = !0, o !== void 0 && (o = X), _;
      }
      return $n && m || z.f & Wt ? k.v : x(k);
    }
  );
}
function Ud(n) {
  return new Fd(n);
}
var qt, Ke;
class Fd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    A(this, qt);
    /** @type {Record<string, any>} */
    A(this, Ke);
    var r;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Fo(o, !1, !1);
      return t.set(a, l), l;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(t.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === _o ? !0 : (x(t.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return P(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    S(this, Ke, (e.hydrate ? xd : ia)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((r = e == null ? void 0 : e.props) != null && r.$$host) || e.sync === !1) && qe(), S(this, qt, s.$$events);
    for (const a of Object.keys(f(this, Ke)))
      a === "$set" || a === "$destroy" || a === "$on" || Ps(this, a, {
        get() {
          return f(this, Ke)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, Ke)[a] = o;
        },
        enumerable: !0
      });
    f(this, Ke).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, f(this, Ke).$destroy = () => {
      Or(f(this, Ke));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    f(this, Ke).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    f(this, qt)[e] = f(this, qt)[e] || [];
    const i = (...s) => t.call(this, ...s);
    return f(this, qt)[e].push(i), () => {
      f(this, qt)[e] = f(this, qt)[e].filter(
        /** @param {any} fn */
        (s) => s !== i
      );
    };
  }
  $destroy() {
    f(this, Ke).$destroy();
  }
}
qt = new WeakMap(), Ke = new WeakMap();
let ml;
typeof HTMLElement == "function" && (ml = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    M(this, "$$ctor");
    /** Slots */
    M(this, "$$s");
    /** @type {any} The Svelte component instance */
    M(this, "$$c");
    /** Whether or not the custom element is connected */
    M(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    M(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    M(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    M(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    M(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    M(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    M(this, "$$me");
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const s = this.$$c.$on(e, t);
      this.$$l_u.set(t, s);
    }
    super.addEventListener(e, t, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const s = this.$$l_u.get(t);
      s && (s(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return (r) => {
          const a = document.createElement("slot");
          s !== "default" && (a.name = s), j(r, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Hd(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), t.default = !0) : t[s] = e(s));
      for (const s of this.attributes) {
        const r = this.$$g_p(s.name);
        r in this.$$d || (this.$$d[r] = Ds(r, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Ud({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ad(() => {
        Js(() => {
          var s;
          this.$$r = !0;
          for (const r of $s(this.$$c)) {
            if (!((s = this.$$p_d[r]) != null && s.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const a = Ds(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, a);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const r of this.$$l[s]) {
          const a = this.$$c.$on(s, r);
          this.$$l_u.set(r, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, i) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ds(e, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return $s(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ds(n, e, t, i) {
  var r;
  const s = (r = t[n]) == null ? void 0 : r.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Hd(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function cn(n, e, t, i, s, r) {
  let a = class extends ml {
    constructor() {
      super(n, t, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return $s(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return $s(e).forEach((o) => {
    Ps(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = Ds(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var d = (h = yn(c, o)) == null ? void 0 : h.get;
          d ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    Ps(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
function aa(n) {
  ie === null && ko(), Ri && ie.l !== null ? Bd(ie).m.push(n) : _n(() => {
    const e = on(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Wd(n) {
  ie === null && ko(), aa(() => () => on(n));
}
function Bd(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const jd = "5";
var mo;
typeof window < "u" && ((mo = window.__svelte ?? (window.__svelte = {})).v ?? (mo.v = /* @__PURE__ */ new Set())).add(jd);
const Vd = (n) => n;
function Gd(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ya(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function Yd(n, { delay: e = 0, duration: t = 400, easing: i = Vd } = {}) {
  const s = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (r) => `opacity: ${r * s}`
  };
}
function Qd(n, { delay: e = 0, duration: t = 400, easing: i = Gd, x: s = 0, y: r = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, d = l * (1 - a), [h, g] = Ya(s), [p, b] = Ya(r);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (w, m) => `
			transform: ${c} translate(${(1 - w) * h}${g}, ${(1 - w) * p}${b});
			opacity: ${l - d * m}`
  };
}
var ii, si, ri, ai;
class Xd {
  constructor() {
    A(this, ii);
    A(this, si);
    A(this, ri);
    A(this, ai);
    S(this, ii, /* @__PURE__ */ F(!1)), S(this, si, /* @__PURE__ */ F(!1)), S(this, ri, /* @__PURE__ */ F(!1)), S(this, ai, /* @__PURE__ */ F(!1));
  }
  get isOpen() {
    return x(f(this, ii));
  }
  set isOpen(e) {
    P(f(this, ii), e, !0);
  }
  get isMinimized() {
    return x(f(this, si));
  }
  set isMinimized(e) {
    P(f(this, si), e, !0);
  }
  get isLoading() {
    return x(f(this, ri));
  }
  set isLoading(e) {
    P(f(this, ri), e, !0);
  }
  get hasUnreadMessages() {
    return x(f(this, ai));
  }
  set hasUnreadMessages(e) {
    P(f(this, ai), e, !0);
  }
  toggle() {
    this.isOpen = !this.isOpen, this.isOpen && (this.hasUnreadMessages = !1);
  }
  open() {
    this.isOpen = !0, this.hasUnreadMessages = !1;
  }
  close() {
    this.isOpen = !1;
  }
  minimize() {
    this.isMinimized = !0;
  }
  restore() {
    this.isMinimized = !1;
  }
  setLoading(e) {
    this.isLoading = e;
  }
  markUnread() {
    this.isOpen || (this.hasUnreadMessages = !0);
  }
}
ii = new WeakMap(), si = new WeakMap(), ri = new WeakMap(), ai = new WeakMap();
const oe = new Xd(), me = {
  /** Session timeout: 1 hour in milliseconds */
  SESSION_TIMEOUT: 60 * 60 * 1e3,
  /** WebSocket reconnection delay: 1 second */
  RECONNECT_DELAY: 1e3,
  /** Maximum WebSocket reconnection delay: 30 seconds */
  MAX_RECONNECT_DELAY_MS: 3e4,
  /** WebSocket heartbeat interval: 30 seconds (desktop) */
  HEARTBEAT_INTERVAL: 30 * 1e3,
  /** WebSocket heartbeat interval for mobile: 10 seconds */
  MOBILE_HEARTBEAT_INTERVAL: 10 * 1e3,
  /** Maximum reconnection attempts */
  MAX_RECONNECT_ATTEMPTS: 5,
  /** API request timeout: 30 seconds */
  API_TIMEOUT: 30 * 1e3,
  /** Grace period after completion before ignoring typing indicators: 2 seconds */
  COMPLETION_GRACE_PERIOD: 2e3,
  /** WebSocket connection establishment delay: 1 second */
  CONNECTION_DELAY: 1e3,
  /** Server-controlled typing indicator timeout: 10 seconds */
  TYPING_INDICATOR_TIMEOUT: 1e4,
  /** General typing indicator timeout fallback: 30 seconds */
  TYPING_FALLBACK_TIMEOUT: 3e4,
  /** Streaming message batch delay for smooth updates: 16ms (~60fps) */
  STREAMING_BATCH_DELAY: 16,
  /** Connection verification timeout when page becomes visible: 5 seconds */
  VISIBILITY_PING_TIMEOUT: 5e3
}, fn = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Qa = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var oi, li, ci, di, ui, fi;
class Zd {
  constructor() {
    A(this, oi);
    A(this, li);
    A(this, ci);
    A(this, di);
    A(this, ui);
    A(this, fi);
    S(this, oi, /* @__PURE__ */ F(ge([]))), S(this, li, /* @__PURE__ */ F(null)), S(this, ci, /* @__PURE__ */ F(!1)), S(this, di, /* @__PURE__ */ F(null)), S(this, ui, /* @__PURE__ */ F(null)), this.streamingBuffer = "", this.streamingTimeout = null, S(this, fi, /* @__PURE__ */ F(0));
  }
  get messages() {
    return x(f(this, oi));
  }
  set messages(e) {
    P(f(this, oi), e, !0);
  }
  get currentSession() {
    return x(f(this, li));
  }
  set currentSession(e) {
    P(f(this, li), e, !0);
  }
  get isTyping() {
    return x(f(this, ci));
  }
  set isTyping(e) {
    P(f(this, ci), e, !0);
  }
  get error() {
    return x(f(this, di));
  }
  set error(e) {
    P(f(this, di), e, !0);
  }
  get streamingMessageId() {
    return x(f(this, ui));
  }
  set streamingMessageId(e) {
    P(f(this, ui), e, !0);
  }
  get streamingUpdateSignal() {
    return x(f(this, fi));
  }
  set streamingUpdateSignal(e) {
    P(f(this, fi), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, t = "user") {
    const i = {
      id: crypto.randomUUID(),
      role: t,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: t === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, i], i;
  }
  updateMessageStatus(e, t) {
    this.messages = this.messages.map((i) => i.id === e ? { ...i, status: t } : i);
  }
  setTyping(e) {
    this.isTyping = e;
  }
  clearMessages() {
    this.messages = [], this.error = null, this.streamingMessageId = null, this.streamingBuffer = "", this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null);
  }
  setError(e) {
    this.error = e, this.isTyping = !1;
  }
  // Streaming message methods for real-time accumulation
  startStreamingMessage() {
    const e = this.addMessage("", "assistant");
    return this.streamingMessageId = e.id, e.id;
  }
  appendToStreamingMessage(e) {
    var t;
    if (this.streamingMessageId) {
      if (this.streamingBuffer += e, this.streamingTimeout && clearTimeout(this.streamingTimeout), typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test") {
        this.flushStreamingBuffer();
        return;
      }
      this.streamingTimeout = window.setTimeout(
        () => {
          this.flushStreamingBuffer(), this.streamingTimeout = null;
        },
        me.STREAMING_BATCH_DELAY
      );
    }
  }
  flushStreamingBuffer() {
    if (this.streamingMessageId && this.streamingBuffer) {
      const e = this.messages.find((t) => t.id === this.streamingMessageId);
      e ? (e.content += this.streamingBuffer, this.streamingUpdateSignal++) : console.warn("ChatStore: Streaming message not found", { id: this.streamingMessageId }), this.streamingBuffer = "";
    }
  }
  finishStreamingMessage() {
    this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null), this.flushStreamingBuffer(), this.streamingMessageId = null;
  }
  updateMessageContent(e, t) {
    this.messages = this.messages.map((i) => i.id === e ? { ...i, content: t(i.content) } : i);
  }
  // Getters for streaming state (useful for debugging and testing)
  get isStreaming() {
    return this.streamingMessageId !== null;
  }
  get currentStreamingMessageId() {
    return this.streamingMessageId;
  }
  startSession(e) {
    this.currentSession = {
      id: crypto.randomUUID(),
      clientId: e,
      startedAt: /* @__PURE__ */ new Date(),
      messages: []
    }, this.clearMessages();
  }
  endSession() {
    this.currentSession && (this.currentSession.endedAt = /* @__PURE__ */ new Date(), this.currentSession.messages = [...this.messages]);
  }
  loadSession(e) {
    this.currentSession = e, this.messages = [...e.messages];
  }
}
oi = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), di = new WeakMap(), ui = new WeakMap(), fi = new WeakMap();
const O = new Zd(), Xa = {
  "client-id": "clientId",
  theme: "theme",
  position: "position",
  title: "title",
  "logo-url": "logoUrl",
  placeholder: "placeholder",
  "accent-color": "accentColor",
  "avatar-emoji": "avatarEmoji",
  "company-name": "companyName",
  "initial-message": "initialMessage",
  "quick-questions": "quickQuestions",
  debug: "debug",
  "auto-init": "autoInit"
}, lt = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  quickQuestions: void 0,
  debug: !1,
  autoInit: !0
}, vl = {
  /**
   * Convert camelCase config to snake_case for backend API
   */
  toBackendFormat(n) {
    return {
      client_id: n.clientId,
      theme: n.theme,
      position: n.position,
      title: n.title,
      logo_url: n.logoUrl,
      placeholder: n.placeholder,
      accent_color: n.accentColor,
      avatar_emoji: n.avatarEmoji,
      company_name: n.companyName,
      initial_message: n.initialMessage,
      quick_questions: n.quickQuestions,
      debug: n.debug,
      auto_init: n.autoInit
    };
  },
  /**
   * Convert snake_case backend response to camelCase config
   */
  fromBackendFormat(n) {
    return {
      clientId: n.client_id,
      theme: n.theme,
      position: n.position,
      title: n.title,
      logoUrl: n.logo_url,
      placeholder: n.placeholder,
      accentColor: n.accent_color,
      avatarEmoji: n.avatar_emoji,
      companyName: n.company_name,
      initialMessage: n.initial_message,
      quickQuestions: n.quick_questions,
      debug: n.debug,
      autoInit: n.auto_init
    };
  },
  /**
   * Convert HTML attribute name to property name
   */
  attributeToProperty(n) {
    return Xa[n] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(n) {
    const t = Object.entries(Xa).find(([, i]) => i === n);
    return t ? t[0] : null;
  }
}, Kd = [
  "bot-brewers",
  "modern",
  "dark",
  "friendly",
  "minimal",
  "elegant",
  "bold",
  "corporate",
  "light"
];
function bl(n) {
  return Kd.includes(n);
}
function er(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function oa(n, e = "#6b46c1") {
  return er(n) ? n : e;
}
function wl(n) {
  if (!er(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function yl(n) {
  const e = wl(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, s = parseInt(e.slice(5, 7), 16) / 255, r = Math.max(t, i, s), a = Math.min(t, i, s);
  let o = 0, l = 0;
  const c = (r + a) / 2;
  if (r !== a) {
    const d = r - a;
    switch (l = c > 0.5 ? d / (2 - r - a) : d / (r + a), r) {
      case t:
        o = ((i - s) / d + (i < s ? 6 : 0)) / 6;
        break;
      case i:
        o = ((s - t) / d + 2) / 6;
        break;
      case s:
        o = ((t - i) / d + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: c * 100 };
}
function xl(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), s = (r) => {
    const a = (r + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${s(0)}${s(8)}${s(4)}`.toUpperCase();
}
function gt(n, e) {
  if (!er(n)) return n;
  const t = yl(n), i = Math.max(0, Math.min(100, t.l + e));
  return xl(t.h, t.s, i);
}
const Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: gt,
  expandHexColor: wl,
  hexToHsl: yl,
  hslToHex: xl,
  isValidHexColor: er,
  sanitizeHexColor: oa
}, Symbol.toStringTag, { value: "Module" }));
var gi, hi, pi, mi, vi, bi, wi, yi, xi, _i, ki, Ti;
class eu {
  constructor() {
    A(this, gi);
    A(this, hi);
    A(this, pi);
    A(this, mi);
    A(this, vi);
    A(this, bi);
    A(this, wi);
    A(this, yi);
    A(this, xi);
    A(this, _i);
    A(this, ki);
    A(this, Ti);
    S(this, gi, /* @__PURE__ */ F("")), S(this, hi, /* @__PURE__ */ F(ge(lt.theme))), S(this, pi, /* @__PURE__ */ F(ge(lt.position))), S(this, mi, /* @__PURE__ */ F(ge(lt.title))), S(this, vi, /* @__PURE__ */ F(ge(lt.logoUrl))), S(this, bi, /* @__PURE__ */ F(ge(lt.placeholder))), S(this, wi, /* @__PURE__ */ F(ge(lt.accentColor))), S(this, yi, /* @__PURE__ */ F(ge(lt.avatarEmoji))), S(this, xi, /* @__PURE__ */ F(ge(lt.companyName))), S(this, _i, /* @__PURE__ */ F(ge(lt.initialMessage))), S(this, ki, /* @__PURE__ */ F(ge(lt.quickQuestions))), S(this, Ti, /* @__PURE__ */ F("default"));
  }
  get clientId() {
    return x(f(this, gi));
  }
  set clientId(e) {
    P(f(this, gi), e, !0);
  }
  get theme() {
    return x(f(this, hi));
  }
  set theme(e) {
    P(f(this, hi), e, !0);
  }
  get position() {
    return x(f(this, pi));
  }
  set position(e) {
    P(f(this, pi), e, !0);
  }
  get title() {
    return x(f(this, mi));
  }
  set title(e) {
    P(f(this, mi), e, !0);
  }
  get logoUrl() {
    return x(f(this, vi));
  }
  set logoUrl(e) {
    P(f(this, vi), e, !0);
  }
  get placeholder() {
    return x(f(this, bi));
  }
  set placeholder(e) {
    P(f(this, bi), e, !0);
  }
  get accentColor() {
    return x(f(this, wi));
  }
  set accentColor(e) {
    P(f(this, wi), e, !0);
  }
  get avatarEmoji() {
    return x(f(this, yi));
  }
  set avatarEmoji(e) {
    P(f(this, yi), e, !0);
  }
  get companyName() {
    return x(f(this, xi));
  }
  set companyName(e) {
    P(f(this, xi), e, !0);
  }
  get initialMessage() {
    return x(f(this, _i));
  }
  set initialMessage(e) {
    P(f(this, _i), e, !0);
  }
  get quickQuestions() {
    return x(f(this, ki));
  }
  set quickQuestions(e) {
    P(f(this, ki), e, !0);
  }
  get titleSource() {
    return x(f(this, Ti));
  }
  set titleSource(e) {
    P(f(this, Ti), e, !0);
  }
  updateConfig(e, t = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, t);
      const { title: i, ...s } = e;
      Object.assign(this, s);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, t) {
    const i = ["user", "backend", "default"], s = i.indexOf(this.titleSource);
    i.indexOf(t) <= s && (this.title = e, this.titleSource = t);
  }
  /**
   * Set user-configured title (highest priority)
   */
  setUserTitle(e) {
    this.setTitle(e, "user");
  }
  /**
   * Set backend-provided title (medium priority)
   */
  setBackendTitle(e) {
    this.setTitle(e, "backend");
  }
  /**
   * Legacy method for backwards compatibility - now uses backend priority
   */
  updateTitle(e) {
    this.setBackendTitle(e);
  }
  /**
   * Set custom quick questions
   */
  setQuickQuestions(e) {
    this.quickQuestions = e;
  }
  /**
   * Set backend-provided initial message (only if not user-configured).
   * Respects priority: client attribute > backend message > default.
   */
  setBackendInitialMessage(e) {
    this.initialMessage === void 0 && (this.initialMessage = e);
  }
  loadFromAttributes(e) {
    const t = this.parseElementAttributes(e);
    this.updateConfig(t, "user"), this.applyTheme(e);
  }
  /**
   * Parse HTML element attributes into configuration object
   * Reuses unified configuration attribute mapping logic
   */
  parseElementAttributes(e) {
    const t = {}, i = e.getAttributeNames();
    for (const s of i) {
      const r = vl.attributeToProperty(s);
      if (!r) continue;
      const a = e.getAttribute(s);
      if (r === "initialMessage") {
        t.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (r) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            t[r] = a;
            break;
          case "accentColor":
            t.accentColor = oa(a, this.accentColor);
            break;
          case "theme":
            bl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "companyName":
            t.companyName = a, e.hasAttribute("title") || (t.title = `${a} Assistant`);
            break;
          case "quickQuestions":
            try {
              const o = JSON.parse(a);
              Array.isArray(o) && (t.quickQuestions = o);
            } catch {
            }
            break;
        }
    }
    return t;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = gt(this.accentColor, -20), e["--widget-primary-light"] = gt(this.accentColor, 20), e["--widget-primary-dark"] = gt(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${gt(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${gt(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const t = this.cssVariables;
    for (const [i, s] of Object.entries(t))
      e.style.setProperty(i, s);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
gi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), xi = new WeakMap(), _i = new WeakMap(), ki = new WeakMap(), Ti = new WeakMap();
const Ce = new eu(), tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: Ce
}, Symbol.toStringTag, { value: "Module" })), _l = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", nu = _l, iu = _l;
var su = /* @__PURE__ */ Q('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), ru = /* @__PURE__ */ wd('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), au = /* @__PURE__ */ Q('<span class="unread-indicator svelte-bkcus6"></span>'), ou = /* @__PURE__ */ Q("<button><!> <!></button>");
const lu = {
  hash: "svelte-bkcus6",
  code: `.floating-button.svelte-bkcus6 {width:64px;height:64px;border-radius:var(--widget-radius-full);background:transparent;
    /* Bot Gold ring border */border:3px solid var(--widget-accent);color:var(--widget-text);cursor:pointer;display:flex;align-items:center;justify-content:center;
    /* Enhancement 3: Static shadow only (glow moved to ::after) */box-shadow:var(--widget-shadow-lg);
    /* Spring-based transition */transition:transform 0.2s var(--widget-ease-spring),
                border-color 0.2s ease;position:relative;
    animation: messageFadeIn 0.3s var(--widget-ease-out-expo);padding:0;overflow:visible; /* Allow pseudo-elements to show */}

  /* Enhancement 1: Entrance attention pulse */.floating-button.svelte-bkcus6::before {content:'';position:absolute;inset:0;border-radius:inherit;border:2px solid var(--widget-accent);
    animation: svelte-bkcus6-entrancePulse 0.8s var(--widget-ease-out-expo) forwards;pointer-events:none;}

  @keyframes svelte-bkcus6-entrancePulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  /* Enhancement 3: Gold glow as pseudo-element for GPU-accelerated transitions */.floating-button.svelte-bkcus6::after {content:'';position:absolute;inset:-4px;border-radius:inherit;background:transparent;box-shadow:0 0 20px rgba(244, 169, 50, 0.5);opacity:0.5;transition:opacity 0.2s var(--widget-ease-spring);pointer-events:none;z-index:-1;}.floating-button.svelte-bkcus6:hover::after {opacity:1;}.floating-button.svelte-bkcus6:hover {transform:translateY(-3px);border-color:var(--widget-accent-light);}.floating-button.svelte-bkcus6:active {transform:translateY(-1px) scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.floating-button.svelte-bkcus6:focus-visible {outline:2px solid var(--widget-accent);outline-offset:3px;}.floating-button.svelte-bkcus6:focus-visible::after {opacity:1;box-shadow:0 0 0 4px rgba(244, 169, 50, 0.25),
                0 0 20px rgba(244, 169, 50, 0.5);}.floating-button.open.svelte-bkcus6 {
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.open.svelte-bkcus6::after {box-shadow:0 0 20px rgba(var(--widget-primary-rgb), 0.5);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
    /* Subtle drop shadow on icon */filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {
    /* Logo fills most of the button */width:100%;height:100%;border-radius:var(--widget-radius-full);object-fit:cover;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;}.floating-button.open.svelte-bkcus6 svg:where(.svelte-bkcus6) {transform:rotate(90deg);}.unread-indicator.svelte-bkcus6 {position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:var(--widget-accent);border-radius:var(--widget-radius-full);border:2px solid var(--widget-background);
    /* Bot Gold glow effect */box-shadow:0 0 8px rgba(244, 169, 50, 0.5);
    animation: svelte-bkcus6-unreadPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;z-index:2;}

  @keyframes svelte-bkcus6-unreadPulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }

  /* Mobile: Fixed positioning for floating button */
  /* Enhancement 4: Reduced from 60px to 56px */
  @media (max-width: 767px) {.floating-button.svelte-bkcus6 {width:56px;height:56px;position:fixed;bottom:20px;right:20px;z-index:var(--widget-z-fixed);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {width:100%;height:100%;}
  }

  /* Accessibility: Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {.floating-button.svelte-bkcus6::before {
      animation: none;}.floating-button.svelte-bkcus6::after {transition:none;opacity:0.7;}.floating-button.svelte-bkcus6 {
      animation: none;}
  }`
};
function kl(n, e) {
  jt(e, !0), ln(n, lu);
  let t = it(e, "onclick", 7);
  const i = /* @__PURE__ */ Ae(() => oe.isOpen), s = /* @__PURE__ */ Ae(() => oe.hasUnreadMessages);
  function r() {
    var b;
    (b = t()) == null || b();
  }
  var a = {
    get onclick() {
      return t();
    },
    set onclick(b) {
      t(b), qe();
    }
  }, o = ou();
  let l;
  o.__click = r;
  var c = J(o);
  {
    var d = (b) => {
      var w = su();
      nt(() => Ot(w, "src", nu)), j(b, w);
    }, h = (b) => {
      var w = ru();
      j(b, w);
    };
    Ie(c, (b) => {
      x(i) ? b(h, !1) : b(d);
    });
  }
  var g = ne(c, 2);
  {
    var p = (b) => {
      var w = au();
      j(b, w);
    };
    Ie(g, (b) => {
      x(s) && !x(i) && b(p);
    });
  }
  return K(o), nt(() => {
    l = sa(o, 1, "floating-button svelte-bkcus6", null, l, { open: x(i) }), Ot(o, "aria-label", x(i) ? "Close chat" : "Open chat");
  }), j(n, o), Vt(a);
}
fs(["click"]);
cn(kl, { onclick: {} }, [], [], !0);
class cu {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, t, i) {
    this.isDebugMode && (i !== void 0 ? console.log(`[${e}] ${t}:`, i) : console.log(`[${e}] ${t}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, t, i) {
    this.isDebugMode && (i !== void 0 ? console.warn(`[${e}] ${t}:`, i) : console.warn(`[${e}] ${t}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, t, i) {
    i !== void 0 ? console.error(`[${e}] ${t}:`, i) : console.error(`[${e}] ${t}`);
  }
  /**
   * Update debug mode setting
   */
  setDebugMode(e) {
    this.isDebugMode = e;
  }
  /**
   * Check if debug mode is enabled
   */
  get isEnabled() {
    return this.isDebugMode;
  }
}
function la(n) {
  return new cu(n);
}
function gr() {
  var n;
  try {
    return typeof process < "u" && ((n = process.env) == null ? void 0 : n.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const Y = {
  isDebugEnabled: gr,
  log: (n, e, t) => {
    gr() && (t !== void 0 ? console.log(`[${n}] ${e}:`, t) : console.log(`[${n}] ${e}`));
  },
  warn: (n, e, t) => {
    gr() && (t !== void 0 ? console.warn(`[${n}] ${e}:`, t) : console.warn(`[${n}] ${e}`));
  },
  error: (n, e, t) => {
    t !== void 0 ? console.error(`[${n}] ${e}:`, t) : console.error(`[${n}] ${e}`);
  }
};
class Xn {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Xn.instance || (Xn.instance = new Xn()), Xn.instance;
  }
  /**
   * Generate a new correlation ID
   */
  generate() {
    const e = Date.now(), t = Math.random().toString(36).substr(2, 9), i = `msg_${e}_${t}`;
    return this.currentId = i, i;
  }
  /**
   * Get current correlation ID
   */
  getCurrent() {
    return this.currentId || this.generateFallback();
  }
  /**
   * Set current correlation ID
   */
  setCurrent(e) {
    this.currentId = e;
  }
  /**
   * Clear current correlation ID
   */
  clear() {
    this.currentId = null;
  }
  /**
   * Store data associated with a correlation ID
   */
  setData(e, t) {
    this.messageMap.set(e, t);
  }
  /**
   * Retrieve data associated with a correlation ID
   */
  getData(e) {
    return this.messageMap.get(e);
  }
  /**
   * Remove data associated with a correlation ID
   */
  removeData(e) {
    this.messageMap.delete(e);
  }
  /**
   * Generate fallback correlation ID when none exists
   */
  generateFallback() {
    const t = `api_${Date.now()}_fallback`;
    return this.currentId = t, t;
  }
  /**
   * Clean up old correlation data (call periodically to prevent memory leaks)
   */
  cleanup(e = 3e5) {
    const t = Date.now();
    for (const [i] of this.messageMap.entries()) {
      const s = i.match(/(\d+)/);
      if (s) {
        const r = parseInt(s[1], 10);
        t - r > e && this.messageMap.delete(i);
      }
    }
  }
  /**
   * Get current memory usage stats
   */
  getStats() {
    return {
      totalEntries: this.messageMap.size,
      currentId: this.currentId
    };
  }
}
function At() {
  return Xn.getInstance();
}
class du {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const t = At().getCurrent();
    if (Y.log("MessageValidator", "validate() called", {
      correlationId: t,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return Y.log("MessageValidator", "Validation failed - invalid type", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return Y.log("MessageValidator", "Validation failed - empty string", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const i = e.trim();
    if (Y.log("MessageValidator", "After trimming", {
      correlationId: t,
      original: e,
      trimmed: i,
      originalLength: e.length,
      trimmedLength: i.length,
      wasWhitespaceOnly: e.length > 0 && i.length === 0
    }), i.length < fn.MIN_LENGTH) {
      const a = "Message is too short";
      return Y.log("MessageValidator", "Validation failed - too short", {
        correlationId: t,
        trimmedLength: i.length,
        minLength: fn.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (i.length > fn.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${fn.MAX_LENGTH} characters`;
      return Y.log("MessageValidator", "Validation failed - too long", {
        correlationId: t,
        trimmedLength: i.length,
        maxLength: fn.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    Y.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: t,
      inputContent: i,
      inputLength: i.length
    });
    const s = this.sanitizeHTML(i);
    Y.log("MessageValidator", "HTML sanitization complete", {
      correlationId: t,
      original: i,
      sanitized: s,
      originalLength: i.length,
      sanitizedLength: s.length,
      contentRemoved: i.length !== s.length,
      contentChanged: i !== s,
      removedContent: i.length !== s.length ? {
        removed: i.replace(s, ""),
        difference: i.length - s.length
      } : null
    });
    const r = {
      isValid: !0,
      sanitizedValue: s
    };
    return Y.log("MessageValidator", "Final validation result", { correlationId: t, result: r }), r;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const t = At().getCurrent();
    Y.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: t,
      input: e,
      inputLength: e.length
    });
    let i = e, s = 0;
    const r = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== r && Y.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: t,
      before: r,
      after: i,
      removed: r.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && Y.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: t,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && Y.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: t,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && Y.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: t,
      before: l,
      after: i,
      removed: l.length - i.length
    }), Y.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: t,
      originalInput: e,
      finalResult: i,
      inputLength: e.length,
      resultLength: i.length,
      totalRemoved: e.length - i.length,
      wasModified: e !== i
    }), i;
  }
}
class Tl {
  /**
   * Validate client ID format
   */
  static validate(e) {
    return !e || typeof e != "string" ? {
      isValid: !1,
      error: "Client ID is required and must be a string"
    } : /^[a-zA-Z0-9_-]+$/.test(e) ? e.length < 3 || e.length > 50 ? {
      isValid: !1,
      error: "Client ID must be between 3 and 50 characters"
    } : {
      isValid: !0,
      sanitizedValue: e
    } : {
      isValid: !1,
      error: "Client ID can only contain letters, numbers, hyphens, and underscores"
    };
  }
}
class Ye extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, Ye);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context,
      timestamp: this.timestamp.toISOString(),
      isRetryable: this.isRetryable,
      stack: this.stack
    };
  }
}
class Zn extends Ye {
  constructor(e, t, i, s) {
    super(e, { ...s, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class Sl extends Ye {
  constructor(e, t, i, s, r) {
    super(e, { ...r, wsUrl: t, closeCode: i, closeReason: s }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = s;
  }
}
class Qi extends Ye {
  constructor(e, t, i, s, r) {
    super(e, { ...r, field: t, value: i, expectedType: s }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = s;
  }
}
class El extends Ye {
  constructor(e, t, i, s) {
    super(e, { ...s, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class Al extends Ye {
  constructor(e, t, i, s) {
    super(e, { ...s, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class Kn extends Ye {
  constructor(e, t, i, s) {
    super(e, { ...s, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class Il extends Ye {
  constructor(e, t, i, s) {
    super(e, { ...s, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class Cl extends Ye {
  constructor(e, t, i, s) {
    super(e, { ...s, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function Za(n) {
  return n instanceof Ye ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function uu(n) {
  return n instanceof Ye ? {
    name: n.name,
    message: n.message,
    context: n.context,
    timestamp: n.timestamp,
    isRetryable: n.isRetryable
  } : n instanceof Error ? {
    name: n.name,
    message: n.message,
    stack: n.stack
  } : {
    error: String(n),
    type: typeof n
  };
}
function fu(n) {
  return n instanceof Zn ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof Kn ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof Sl ? "Connection lost. Attempting to reconnect..." : n instanceof Al ? "Access denied. Please check your configuration." : n instanceof Qi ? n.message : n instanceof El ? "Widget configuration error. Please contact support." : n instanceof Cl ? "Request timed out. Please try again." : n instanceof Il ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Xi {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = uu(e);
    let s;
    return e instanceof Zn ? s = "NETWORK_ERROR" : e instanceof Sl ? s = "WEBSOCKET_ERROR" : e instanceof Qi ? s = "VALIDATION_ERROR" : e instanceof El ? s = "CONFIGURATION_ERROR" : e instanceof Al ? s = "AUTHENTICATION_ERROR" : e instanceof Kn ? s = "RATE_LIMIT_ERROR" : e instanceof Il ? s = "STORAGE_ERROR" : e instanceof Cl ? s = "TIMEOUT_ERROR" : e instanceof Ye ? s = "WIDGET_ERROR" : s = "UNKNOWN_ERROR", {
      message: fu(e),
      code: s,
      isUserFacing: !0,
      shouldRetry: Za(e),
      context: {
        ...t,
        metadata: {
          ...t.metadata,
          errorDetails: i
        }
      }
    };
  }
  /**
   * Sanitize error messages to prevent information leakage
   */
  static sanitizeErrorMessage(e) {
    return e.replace(/\/[^\s]+/g, "[path]").replace(/https?:\/\/[^\s]+/g, "[url]").replace(/[a-zA-Z0-9]{20,}/g, "[token]").substring(0, 200);
  }
  /**
   * Check if error should be retried
   */
  static shouldRetry(e) {
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : Za(e);
  }
  /**
   * Get user-friendly error message
   */
  static getUserMessage(e) {
    return e.isUserFacing ? e.message : "Something went wrong. Please try again.";
  }
  /**
   * Create error for logging/reporting
   */
  static createLogEntry(e) {
    return {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      code: e.code,
      message: e.message,
      context: e.context,
      userAgent: typeof navigator < "u" ? navigator.userAgent : "unknown",
      url: typeof window < "u" ? window.location.href : "unknown"
    };
  }
}
const gu = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class $r {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, t = {}) {
    const i = Tl.validate(e);
    if (!i.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${i.error}`);
    const s = i.sanitizedValue;
    return this.isDevelopmentEnvironment(t.environment) ? this.resolveDevelopmentUrls(s) : this.resolveProductionUrls(s);
  }
  /**
   * Resolve URLs for development environment
   */
  static resolveDevelopmentUrls(e) {
    return {
      apiUrl: `/api/v1/widget/${e}`,
      wsUrl: `ws://localhost:8000/api/v1/communication/${e}/ws`
    };
  }
  /**
   * Resolve URLs for production environment
   */
  static resolveProductionUrls(e) {
    const t = gu, i = this.isLocalhostUrl(t) ? t : this.ensureHttps(t);
    return {
      apiUrl: this.buildApiUrl(i, e),
      wsUrl: this.buildWsUrl(i, e)
    };
  }
  /**
   * Determine if we're in development environment
   */
  static isDevelopmentEnvironment(e) {
    return e ? e === "development" : !1;
  }
  /**
   * Ensure URL uses HTTPS protocol for production
   */
  static ensureHttps(e) {
    return this.isLocalhostUrl(e) ? e : e.startsWith("http://") ? e.replace("http://", "https://") : e.startsWith("https://") ? e : `https://${e}`;
  }
  /**
   * Build API URL by properly appending path to base URL
   */
  static buildApiUrl(e, t) {
    return this.buildUrlWithPath(e, `/api/v1/widget/${t}`);
  }
  /**
   * Build WebSocket URL by properly appending path to base URL and converting protocol
   */
  static buildWsUrl(e, t) {
    const i = this.buildUrlWithPath(e, `/api/v1/communication/${t}/ws`);
    return this.convertToWebSocket(i);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, t) {
    try {
      const i = new URL(e);
      return i.pathname = (i.pathname === "/" ? "" : i.pathname) + t, i.toString();
    } catch {
      const s = e.endsWith("/") ? "" : "/";
      return e + s + t.substring(1);
    }
  }
  /**
   * Convert HTTP/HTTPS URL to WS/WSS URL
   */
  static convertToWebSocket(e) {
    try {
      const t = new URL(e);
      return t.protocol === "https:" ? t.protocol = "wss:" : t.protocol === "http:" && (t.protocol = "ws:"), t.toString();
    } catch {
      return e.replace("https://", "wss://").replace("http://", "ws://");
    }
  }
  /**
   * Check if URL points to localhost
   */
  static isLocalhostUrl(e) {
    try {
      const t = new URL(e);
      return ["localhost", "127.0.0.1", "::1"].includes(t.hostname);
    } catch {
      return e.includes("localhost") || e.includes("127.0.0.1");
    }
  }
}
class hu {
  constructor(e) {
    try {
      const t = window, i = t.AIChat || t.ChatWidget || {}, s = e ? this.parseElementAttributes(e) : {}, r = {
        ...lt,
        ...i,
        ...s
      };
      if ((i.apiUrl || i.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !r.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Tl.validate(r.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = $r.resolveUrls(a.sanitizedValue);
      this.config = {
        ...r,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (t) {
      const i = Xi.handle(t, {
        component: "ConfigManager",
        action: "constructor"
      });
      throw new Error(i.message);
    }
  }
  /**
   * Parse HTML element attributes into configuration object
   * Uses unified configuration attribute mapping
   */
  parseElementAttributes(e) {
    const t = {}, i = e.getAttributeNames();
    for (const s of i) {
      const r = vl.attributeToProperty(s);
      if (!r) continue;
      const a = e.getAttribute(s);
      if (a)
        switch (r) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "accentColor":
          case "avatarEmoji":
            t[r] = a;
            break;
          case "theme":
            bl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "debug":
          case "autoInit":
            t[r] = a === "true" || a === "";
            break;
          case "companyName":
            t.companyName = a, e.hasAttribute("title") || (t.title = `${a} Assistant`);
            break;
        }
    }
    return t;
  }
  get clientId() {
    return this.config.clientId;
  }
  get apiUrl() {
    return this.config.apiUrl;
  }
  get wsUrl() {
    return this.config.wsUrl;
  }
  get debug() {
    return this.config.debug;
  }
  get position() {
    return this.config.position;
  }
  get theme() {
    return this.config.theme;
  }
  get title() {
    return this.config.title;
  }
  get logoUrl() {
    return this.config.logoUrl;
  }
  get autoInit() {
    return this.config.autoInit;
  }
  getAll() {
    return { ...this.config };
  }
}
const Mi = /* @__PURE__ */ new Map();
let ns = !1;
function pu() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
ns = !pu();
function mu(n) {
  try {
    return ns ? Mi.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return Mi.get(n) ?? null;
  }
}
function vu(n, e) {
  try {
    return ns ? (Mi.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return Mi.set(n, e), ns = !0, !1;
  }
}
function bu(n) {
  try {
    if (ns) {
      Mi.delete(n);
      return;
    }
    localStorage.removeItem(n);
  } catch {
    Mi.delete(n);
  }
}
const ut = class ut {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var t;
    let e = this.getItem(ut.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(ut.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && Y.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : mu(e);
  }
  setItem(e, t) {
    this.storageAdapter ? this.storageAdapter.setItem(e, t) : vu(e, t);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : bu(e);
  }
  /**
   * Generate RFC 4122 compliant UUID v4 for visitor identification
   */
  generateVisitorId() {
    return crypto.randomUUID();
  }
  getVisitorId() {
    return this.visitorId;
  }
  /**
   * Store session ID for conversation continuity
   */
  saveSessionId(e) {
    const t = this.getSessionHistory();
    t.push({
      id: e,
      timestamp: Date.now(),
      active: !0
    });
    const i = t.slice(-10);
    this.setItem(
      ut.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(ut.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const t = this.getSessionHistory().filter(
      (i) => i.active && Date.now() - i.timestamp < me.SESSION_TIMEOUT
    );
    return t.length > 0 ? t[t.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const i = this.getSessionHistory().map(
      (s) => s.id === e ? { ...s, active: !1 } : s
    );
    this.setItem(
      ut.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(ut.VISITOR_ID_KEY), this.removeItem(ut.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
ut.VISITOR_ID_KEY = Qa.VISITOR_ID, ut.SESSION_HISTORY_KEY = Qa.SESSIONS;
let Pr = ut;
class Vi {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, t) {
    const { apiUrl: i } = $r.resolveUrls(t.clientId, t.options);
    switch (e) {
      case "init":
        return `${i}/init`;
      case "chat":
        return `${i}/chat`;
      case "sessionHealth":
        if (!t.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${i}/session/${t.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: t } = $r.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${t}?${i}`;
  }
}
var _e = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(_e || {});
class wu {
  constructor(e, t) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = me.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = me.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = la(e.getAll()), this.setupVisibilityChangeListener();
  }
  /**
   * Connect to WebSocket server
   */
  async connect(e) {
    if (this.state !== "connected") {
      this.cleanup(), this.sessionId = e, this.setState(
        "connecting"
        /* CONNECTING */
      );
      try {
        this.abortController = new AbortController();
        const t = Vi.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(t), this.setupEventHandlers();
      } catch (t) {
        const i = Xi.handle(t, {
          component: "WebSocketManager",
          action: "connect",
          sessionId: e
        });
        this.debugLogger.error("WebSocketManager", "WebSocket connection failed", i.message), this.setState(
          "error"
          /* ERROR */
        ), this.scheduleReconnect();
      }
    }
  }
  setupEventHandlers() {
    this.ws && (this.ws.onopen = () => {
      var e, t, i;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (t = this.ws) == null ? void 0 : t.readyState,
        sessionId: this.sessionId,
        messageListeners: ((i = this.listeners.get("message")) == null ? void 0 : i.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var t, i, s, r, a, o, l, c, d;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((t = e.data) == null ? void 0 : t.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId
      });
      try {
        const h = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: h,
          messageType: h.type,
          content: (s = h.data) == null ? void 0 : s.content,
          hasContent: !!((r = h.data) != null && r.content),
          contentLength: ((o = (a = h.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: h.type === "error",
          metadata: (l = h.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((c = this.listeners.get("message")) == null ? void 0 : c.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", h), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (h) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: h instanceof Error ? h.message : String(h),
          rawData: e.data,
          rawDataType: typeof e.data,
          rawDataLength: ((d = e.data) == null ? void 0 : d.length) || 0
        });
      }
    }, this.ws.onerror = (e) => {
      var t, i;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (t = this.ws) == null ? void 0 : t.readyState,
        url: (i = this.ws) == null ? void 0 : i.url,
        sessionId: this.sessionId,
        connectionState: this.state,
        timestamp: Date.now()
      }), this.setState(
        "error"
        /* ERROR */
      );
    }, this.ws.onclose = (e) => {
      var t;
      this.debugLogger.log("WebSocketManager", "WebSocket closed details", {
        code: e.code,
        reason: e.reason,
        wasClean: e.wasClean,
        readyState: (t = this.ws) == null ? void 0 : t.readyState,
        sessionId: this.sessionId,
        connectionState: this.state,
        willReconnect: e.code !== 1e3,
        timestamp: Date.now()
      }), this.setState(
        "disconnected"
        /* DISCONNECTED */
      ), this.stopHeartbeat(), e.code !== 1e3 && this.scheduleReconnect();
    });
  }
  /**
   * Set up page visibility change detection to handle mobile connection suspension
   */
  setupVisibilityChangeListener() {
    this.visibilityChangeHandler = () => {
      document.visibilityState === "visible" ? (this.debugLogger.log("WebSocketManager", "Page became visible, verifying connection"), this.verifyConnection()) : this.debugLogger.log("WebSocketManager", "Page became hidden");
    }, document.addEventListener("visibilitychange", this.visibilityChangeHandler), this.cleanupFunctions.push(() => {
      this.visibilityChangeHandler && (document.removeEventListener("visibilitychange", this.visibilityChangeHandler), this.visibilityChangeHandler = null);
    });
  }
  /**
   * Verify WebSocket connection is still alive when page becomes visible
   * If connection appears open but doesn't respond to ping, trigger reconnection
   */
  verifyConnection() {
    if (this.state !== "connected" || !this.ws || this.ws.readyState !== WebSocket.OPEN)
      return;
    this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.debugLogger.log("WebSocketManager", "Sending verification ping");
    const e = (t) => {
      t.type === "pong" && (this.debugLogger.log("WebSocketManager", "Connection verified - pong received"), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.off("message", e));
    };
    this.on("message", e), this.pendingPongTimeout = window.setTimeout(() => {
      this.debugLogger.warn("WebSocketManager", "No pong received - connection appears stale, reconnecting"), this.off("message", e), this.pendingPongTimeout = null, this.cleanup(), this.reconnect();
    }, me.VISIBILITY_PING_TIMEOUT);
    try {
      this.ws.send(JSON.stringify({ type: "ping" }));
    } catch (t) {
      this.debugLogger.error("WebSocketManager", "Failed to send verification ping", t), this.off("message", e), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.reconnect();
    }
  }
  /**
   * Send message through WebSocket
   */
  send(e) {
    var s, r, a;
    const t = At().getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: t,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (s = this.ws) == null ? void 0 : s.readyState,
      sessionId: this.sessionId
    });
    const i = JSON.stringify({
      type: "message",
      message: e,
      correlation_id: t,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: t,
      data: i,
      dataLength: i.length,
      parsedBack: JSON.parse(i)
    }), this.state === "connected" && ((r = this.ws) == null ? void 0 : r.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: t }), this.ws.send(i);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: t,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= fn.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: fn.MAX_QUEUE_SIZE
        }), this.emit("error", {
          error: "Too many pending messages. Please wait for connection to restore."
        });
        return;
      }
      this.messageQueue.push(i), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: t }), this.reconnect());
    }
  }
  flushMessageQueue() {
    var e;
    for (; this.messageQueue.length > 0 && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN; ) {
      const t = this.messageQueue.shift();
      t && this.ws.send(t);
    }
  }
  scheduleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      this.debugLogger.error("WebSocketManager", "Max reconnection attempts reached"), this.emit("connectionFailed", { error: "Connection failed. Please try again." });
      return;
    }
    this.reconnectAttempts++;
    const e = Math.min(this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1), 3e4);
    this.debugLogger.log("WebSocketManager", `Reconnecting in ${e}ms (attempt ${this.reconnectAttempts})`), setTimeout(() => this.reconnect(), e);
  }
  async reconnect() {
    this.sessionId && await this.connect(this.sessionId);
  }
  startHeartbeat() {
    this.stopHeartbeat();
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = e ? me.MOBILE_HEARTBEAT_INTERVAL : me.HEARTBEAT_INTERVAL;
    this.debugLogger.log("WebSocketManager", "Starting heartbeat", {
      isMobile: e,
      interval: t,
      intervalSeconds: t / 1e3
    }), this.heartbeatInterval = window.setInterval(() => {
      var i;
      ((i = this.ws) == null ? void 0 : i.readyState) === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: "ping" }));
    }, t), this.cleanupFunctions.push(() => this.stopHeartbeat());
  }
  stopHeartbeat() {
    this.heartbeatInterval && (clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  /**
   * Event emitter functionality
   */
  on(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(t);
  }
  off(e, t) {
    var i;
    (i = this.listeners.get(e)) == null || i.delete(t);
  }
  emit(e, t) {
    var i;
    (i = this.listeners.get(e)) == null || i.forEach((s) => s(t));
  }
  setState(e) {
    this.state = e, this.emit("stateChange", e);
  }
  getState() {
    return this.state;
  }
  /**
   * Clean up all resources to prevent memory leaks
   */
  cleanup() {
    this.stopHeartbeat(), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.ws && (this.ws.onopen = null, this.ws.onmessage = null, this.ws.onerror = null, this.ws.onclose = null, (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) && this.ws.close(1e3, "Cleanup"), this.ws = null), this.abortController && (this.abortController.abort(), this.abortController = null), this.cleanupFunctions.forEach((e) => {
      try {
        e();
      } catch (t) {
        this.debugLogger.warn("WebSocketManager", "Cleanup function failed", t);
      }
    }), this.cleanupFunctions = [];
  }
  /**
   * Test WebSocket bidirectional communication
   * Sends a test message to verify the connection works both ways
   */
  testConnection() {
    var e, t;
    if (this.state === "connected" && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN) {
      this.debugLogger.log("WebSocketManager", "Testing bidirectional WebSocket communication...");
      const i = JSON.stringify({
        type: "ping",
        message: "connection-test",
        timestamp: Date.now()
      });
      this.debugLogger.log("WebSocketManager", "Sending test ping", i), this.ws.send(i);
    } else
      this.debugLogger.warn("WebSocketManager", "Cannot test connection - WebSocket not ready", {
        state: this.state,
        readyState: (t = this.ws) == null ? void 0 : t.readyState
      });
  }
  /**
   * Manually retry connection after max attempts exhausted
   * Resets reconnection counter and attempts to reconnect
   */
  retryConnection() {
    this.debugLogger.log("WebSocketManager", "Manual retry requested"), this.reconnectAttempts = 0, this.setState(
      "connecting"
      /* CONNECTING */
    ), this.sessionId && this.connect(this.sessionId);
  }
  /**
   * Disconnect and clean up resources
   */
  disconnect() {
    this.cleanup(), this.setState(
      "disconnected"
      /* DISCONNECTED */
    ), this.messageQueue = [], this.reconnectAttempts = 0, this.sessionId = null, this.listeners.clear();
  }
}
var yu = /* @__PURE__ */ Q('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></header>');
const xu = {
  hash: "svelte-g5m62x",
  code: `.chat-header.svelte-g5m62x {display:flex;align-items:center;justify-content:space-between;padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);color:var(--widget-text);border-radius:var(--widget-radius-xl) var(--widget-radius-xl) 0 0;border-bottom:1px solid var(--widget-border);position:relative;box-shadow:var(--widget-shadow-sm);min-height:48px;gap:var(--widget-space-md);}

  /* Subtle gradient overlay for premium feel */.chat-header.svelte-g5m62x::before {content:'';position:absolute;inset:0;background:linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%);border-radius:inherit;pointer-events:none;}.header-content.svelte-g5m62x {display:flex;align-items:center;gap:var(--widget-space-sm); /* 8px between dot and title */flex:1;min-width:0;position:relative;z-index:1;}.header-title.svelte-g5m62x {margin:0;font-size:var(--widget-font-size-lg);font-weight:var(--widget-font-weight-semibold);color:var(--widget-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0; /* Critical for ellipsis */}

  /* Status dot - positioned BEFORE title for Material Design compliance */.status-dot.svelte-g5m62x {width:7px;height:7px;border-radius:50%;background:var(--status-color);flex-shrink:0;transition:background-color 0.3s ease;cursor:help;}

  /* Animations */
  @keyframes svelte-g5m62x-pulse-slow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.85); }
  }

  @keyframes svelte-g5m62x-blink-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }.status-dot.pulse-slow.svelte-g5m62x { animation: svelte-g5m62x-pulse-slow 1.5s ease-in-out infinite;}.status-dot.blink-slow.svelte-g5m62x { animation: svelte-g5m62x-blink-slow 1.5s ease-in-out infinite;}.close-button.svelte-g5m62x {background:var(--widget-surface);border:1px solid var(--widget-border);color:var(--widget-text-secondary);cursor:pointer;padding:var(--widget-space-xs);display:flex;align-items:center;justify-content:center;border-radius:var(--widget-radius-md);transition:transform 0.15s var(--widget-ease-spring),
                background 0.15s ease,
                color 0.15s ease;box-shadow:var(--widget-shadow-sm);flex-shrink:0;position:relative;z-index:1;}.close-button.svelte-g5m62x:hover {background:var(--widget-surface-hover);color:var(--widget-text);transform:scale(1.08);}.close-button.svelte-g5m62x:active {transform:scale(0.95);transition-duration:0.1s;}.close-button.svelte-g5m62x:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:16px;height:16px;transition:transform 0.15s var(--widget-ease-spring);}.close-button.svelte-g5m62x:hover svg:where(.svelte-g5m62x) {transform:rotate(90deg);}

  /* Mobile: 44x44px touch targets */
  @media (max-width: 767px) {.chat-header.svelte-g5m62x {border-radius:0;min-height:56px;}.close-button.svelte-g5m62x {min-width:44px;min-height:44px;padding:var(--widget-space-sm);}.close-button.svelte-g5m62x svg:where(.svelte-g5m62x) {width:20px;height:20px;}
  }

  /* Very narrow screens */
  @media (max-width: 374px) {.header-title.svelte-g5m62x {font-size:var(--widget-font-size-base);}
  }

  /* Landscape: Compact */
  @media (max-width: 767px) and (orientation: landscape) {.chat-header.svelte-g5m62x {min-height:48px;}
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {.status-dot.pulse-slow.svelte-g5m62x,
    .status-dot.blink-slow.svelte-g5m62x {
      animation: none;}.status-dot.svelte-g5m62x {transition:none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .chat-header.svelte-g5m62x {background:var(--widget-surface);border-color:var(--widget-border);}`
};
function Ml(n, e) {
  jt(e, !0), ln(n, xu);
  let t = it(e, "onclose", 7), i = it(e, "connectionState", 23, () => _e.DISCONNECTED), s = it(e, "connectionFailed", 7, !1);
  const r = /* @__PURE__ */ Ae(() => {
    if (s()) return "var(--widget-error)";
    switch (i()) {
      case _e.CONNECTED:
        return "var(--widget-success)";
      case _e.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      _e.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), a = /* @__PURE__ */ Ae(() => {
    if (s()) return "Connection lost";
    switch (i()) {
      case _e.CONNECTED:
        return "Connected";
      case _e.CONNECTING:
        return "Connecting";
      case _e.ERROR:
        return "Connection error";
      case _e.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), o = /* @__PURE__ */ Ae(() => i() === _e.CONNECTING ? "pulse-slow" : i() === _e.ERROR ? "blink-slow" : "");
  function l() {
    var m;
    oe.close(), (m = t()) == null || m();
  }
  var c = {
    get onclose() {
      return t();
    },
    set onclose(m) {
      t(m), qe();
    },
    get connectionState() {
      return i();
    },
    set connectionState(m = _e.DISCONNECTED) {
      i(m), qe();
    },
    get connectionFailed() {
      return s();
    },
    set connectionFailed(m = !1) {
      s(m), qe();
    }
  }, d = yu(), h = J(d), g = J(h), p = ne(g, 2), b = J(p, !0);
  K(p), K(h);
  var w = ne(h, 2);
  return w.__click = l, K(d), nt(() => {
    sa(g, 1, `status-dot ${x(o) ?? ""}`, "svelte-g5m62x"), pl(g, `--status-color: ${x(r) ?? ""}`), Ot(g, "aria-label", x(a)), Ot(g, "title", x(a)), Ci(b, Ce.title);
  }), j(n, d), Vt(c);
}
fs(["click"]);
cn(Ml, { onclose: {}, connectionState: {}, connectionFailed: {} }, [], [], !0);
function ca() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Pn = ca();
function Rl(n) {
  Pn = n;
}
const Ll = /[&<>"']/, _u = new RegExp(Ll.source, "g"), Ol = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ku = new RegExp(Ol.source, "g"), Tu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ka = (n) => Tu[n];
function je(n, e) {
  if (e) {
    if (Ll.test(n))
      return n.replace(_u, Ka);
  } else if (Ol.test(n))
    return n.replace(ku, Ka);
  return n;
}
const Su = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Eu(n) {
  return n.replace(Su, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Au = /(^|[^\[])\^/g;
function V(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const i = {
    replace: (s, r) => {
      let a = typeof r == "string" ? r : r.source;
      return a = a.replace(Au, "$1"), t = t.replace(s, a), i;
    },
    getRegex: () => new RegExp(t, e)
  };
  return i;
}
function Ja(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Zi = { exec: () => null };
function eo(n, e) {
  const t = n.replace(/\|/g, (r, a, o) => {
    let l = !1, c = a;
    for (; --c >= 0 && o[c] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), i = t.split(/ \|/);
  let s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; )
        i.push("");
  for (; s < i.length; s++)
    i[s] = i[s].trim().replace(/\\\|/g, "|");
  return i;
}
function Es(n, e, t) {
  const i = n.length;
  if (i === 0)
    return "";
  let s = 0;
  for (; s < i && n.charAt(i - s - 1) === e; )
    s++;
  return n.slice(0, i - s);
}
function Iu(n, e) {
  if (n.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let i = 0; i < n.length; i++)
    if (n[i] === "\\")
      i++;
    else if (n[i] === e[0])
      t++;
    else if (n[i] === e[1] && (t--, t < 0))
      return i;
  return -1;
}
function to(n, e, t, i) {
  const s = e.href, r = e.title ? je(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: s,
      title: r,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: s,
    title: r,
    text: je(a)
  };
}
function Cu(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const i = t[1];
  return e.split(`
`).map((s) => {
    const r = s.match(/^\s+/);
    if (r === null)
      return s;
    const [a] = r;
    return a.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
class Hs {
  // set by the lexer
  constructor(e) {
    M(this, "options");
    M(this, "rules");
    // set by the lexer
    M(this, "lexer");
    this.options = e || Pn;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const i = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : Es(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], s = Cu(i, t[3] || "");
      return {
        type: "code",
        raw: i,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: s
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const s = Es(i, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (i = s.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let i = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      i = Es(i.replace(/^ *>[ \t]?/gm, ""), `
`);
      const s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const r = this.lexer.blockTokens(i);
      return this.lexer.state.top = s, {
        type: "blockquote",
        raw: t[0],
        tokens: r,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i = t[1].trim();
      const s = i.length > 1, r = {
        type: "list",
        raw: "",
        ordered: s,
        start: s ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      const a = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", l = "", c = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let h = t[2].split(`
`, 1)[0].replace(/^\t+/, (k) => " ".repeat(3 * k.length)), g = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, l = h.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, l = h.slice(p), p += t[1].length);
        let b = !1;
        if (!h && /^ *$/.test(g) && (o += g + `
`, e = e.substring(g.length + 1), d = !0), !d) {
          const k = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), z = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), T = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), _ = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const R = e.split(`
`, 1)[0];
            if (g = R, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), T.test(g) || _.test(g) || k.test(g) || z.test(e))
              break;
            if (g.search(/[^ ]/) >= p || !g.trim())
              l += `
` + g.slice(p);
            else {
              if (b || h.search(/[^ ]/) >= 4 || T.test(h) || _.test(h) || z.test(h))
                break;
              l += `
` + g;
            }
            !b && !g.trim() && (b = !0), o += R + `
`, e = e.substring(R.length + 1), h = g.slice(p);
          }
        }
        r.loose || (c ? r.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let w = null, m;
        this.options.gfm && (w = /^\[[ xX]\] /.exec(l), w && (m = w[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), r.items.push({
          type: "list_item",
          raw: o,
          task: !!w,
          checked: m,
          loose: !1,
          text: l,
          tokens: []
        }), r.raw += o;
      }
      r.items[r.items.length - 1].raw = o.trimEnd(), r.items[r.items.length - 1].text = l.trimEnd(), r.raw = r.raw.trimEnd();
      for (let d = 0; d < r.items.length; d++)
        if (this.lexer.state.top = !1, r.items[d].tokens = this.lexer.blockTokens(r.items[d].text, []), !r.loose) {
          const h = r.items[d].tokens.filter((p) => p.type === "space"), g = h.length > 0 && h.some((p) => /\n.*\n/.test(p.raw));
          r.loose = g;
        }
      if (r.loose)
        for (let d = 0; d < r.items.length; d++)
          r.items[d].loose = !0;
      return r;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const i = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: i,
        raw: t[0],
        href: s,
        title: r
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const i = eo(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === s.length) {
      for (const o of s)
        /^ *-+: *$/.test(o) ? a.align.push("right") : /^ *:-+: *$/.test(o) ? a.align.push("center") : /^ *:-+ *$/.test(o) ? a.align.push("left") : a.align.push(null);
      for (const o of i)
        a.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of r)
        a.rows.push(eo(o, a.header.length).map((l) => ({
          text: l,
          tokens: this.lexer.inline(l)
        })));
      return a;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: je(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const i = t[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const a = Es(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = Iu(t[2], "()");
        if (a > -1) {
          const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let s = t[2], r = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        a && (s = a[1], r = a[3]);
      } else
        r = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), to(t, {
        href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      const s = (i[2] || i[1]).replace(/\s+/g, " "), r = t[s.toLowerCase()];
      if (!r) {
        const a = i[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return to(i, r, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || s[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(s[1] || s[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const a = [...s[0]].length - 1;
      let o, l, c = a, d = 0;
      const h = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, t = t.slice(-1 * e.length + a); (s = h.exec(t)) != null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o)
          continue;
        if (l = [...o].length, s[3] || s[4]) {
          c += l;
          continue;
        } else if ((s[5] || s[6]) && a % 3 && !((a + l) % 3)) {
          d += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        l = Math.min(l, l + c + d);
        const g = [...s[0]][0].length, p = e.slice(0, a + s.index + g + l);
        if (Math.min(a, l) % 2) {
          const w = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: w,
            tokens: this.lexer.inlineTokens(w)
          };
        }
        const b = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: b,
          tokens: this.lexer.inlineTokens(b)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(i), r = /^ /.test(i) && / $/.test(i);
      return s && r && (i = i.substring(1, i.length - 1)), i = je(i, !0), {
        type: "codespan",
        raw: t[0],
        text: i
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let i, s;
      return t[2] === "@" ? (i = je(t[1]), s = "mailto:" + i) : (i = je(t[1]), s = i), {
        type: "link",
        raw: t[0],
        text: i,
        href: s,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(e) {
    var i;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, r;
      if (t[2] === "@")
        s = je(t[0]), r = "mailto:" + s;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        s = je(t[0]), t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: s,
        href: r,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let i;
      return this.lexer.state.inRawBlock ? i = t[0] : i = je(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const Mu = /^(?: *(?:\n|$))+/, Ru = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Lu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, gs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ou = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Dl = /(?:[*+-]|\d{1,9}[.)])/, Nl = V(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Dl).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), da = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Du = /^[^\n]+/, ua = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Nu = V(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ua).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $u = V(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Dl).getRegex(), tr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", fa = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Pu = V("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", fa).replace("tag", tr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $l = V(da).replace("hr", gs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tr).getRegex(), zu = V(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", $l).getRegex(), ga = {
  blockquote: zu,
  code: Ru,
  def: Nu,
  fences: Lu,
  heading: Ou,
  hr: gs,
  html: Pu,
  lheading: Nl,
  list: $u,
  newline: Mu,
  paragraph: $l,
  table: Zi,
  text: Du
}, no = V("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", gs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tr).getRegex(), qu = {
  ...ga,
  table: no,
  paragraph: V(da).replace("hr", gs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", no).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tr).getRegex()
}, Uu = {
  ...ga,
  html: V(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", fa).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Zi,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: V(da).replace("hr", gs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Nl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Pl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, zl = /^( {2,}|\\)\n(?!\s*$)/, Hu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, hs = "\\p{P}\\p{S}", Wu = V(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, hs).getRegex(), Bu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, ju = V(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, hs).getRegex(), Vu = V("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, hs).getRegex(), Gu = V("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, hs).getRegex(), Yu = V(/\\([punct])/, "gu").replace(/punct/g, hs).getRegex(), Qu = V(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xu = V(fa).replace("(?:-->|$)", "-->").getRegex(), Zu = V("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ws = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ku = V(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Ws).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ql = V(/^!?\[(label)\]\[(ref)\]/).replace("label", Ws).replace("ref", ua).getRegex(), Ul = V(/^!?\[(ref)\](?:\[\])?/).replace("ref", ua).getRegex(), Ju = V("reflink|nolink(?!\\()", "g").replace("reflink", ql).replace("nolink", Ul).getRegex(), ha = {
  _backpedal: Zi,
  // only used for GFM url
  anyPunctuation: Yu,
  autolink: Qu,
  blockSkip: Bu,
  br: zl,
  code: Fu,
  del: Zi,
  emStrongLDelim: ju,
  emStrongRDelimAst: Vu,
  emStrongRDelimUnd: Gu,
  escape: Pl,
  link: Ku,
  nolink: Ul,
  punctuation: Wu,
  reflink: ql,
  reflinkSearch: Ju,
  tag: Zu,
  text: Hu,
  url: Zi
}, ef = {
  ...ha,
  link: V(/^!?\[(label)\]\((.*?)\)/).replace("label", Ws).getRegex(),
  reflink: V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ws).getRegex()
}, zr = {
  ...ha,
  escape: V(Pl).replace("])", "~|])").getRegex(),
  url: V(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, tf = {
  ...zr,
  br: V(zl).replace("{2,}", "*").getRegex(),
  text: V(zr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, As = {
  normal: ga,
  gfm: qu,
  pedantic: Uu
}, Pi = {
  normal: ha,
  gfm: zr,
  breaks: tf,
  pedantic: ef
};
class It {
  constructor(e) {
    M(this, "tokens");
    M(this, "options");
    M(this, "state");
    M(this, "tokenizer");
    M(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Pn, this.options.tokenizer = this.options.tokenizer || new Hs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: As.normal,
      inline: Pi.normal
    };
    this.options.pedantic ? (t.block = As.pedantic, t.inline = Pi.pedantic) : this.options.gfm && (t.block = As.gfm, this.options.breaks ? t.inline = Pi.breaks : t.inline = Pi.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: As,
      inline: Pi
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new It(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new It(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const i = this.inlineQueue[t];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, l, c) => l + "    ".repeat(c.length));
    let i, s, r, a;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (i = o.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length), i.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(i);
          continue;
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.list(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.html(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.def(e)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + i.raw, s.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (r = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const l = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((d) => {
            c = d.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
          }), o < 1 / 0 && o >= 0 && (r = e.substring(0, o + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(r))) {
          s = t[t.length - 1], a && s.type === "paragraph" ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(i), a = r.length !== e.length, e = e.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(i);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let i, s, r, a = e, o, l, c;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          d.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null; )
      a = a.slice(0, o.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (l || (c = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (i = d.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(e)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && i.type === "text" && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.link(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(i.raw.length), s = t[t.length - 1], s && i.type === "text" && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(e, a, c)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.br(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.del(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(e))) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (r = e, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const h = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((p) => {
            g = p.call({ lexer: this }, h), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
          }), d < 1 / 0 && d >= 0 && (r = e.substring(0, d + 1));
        }
        if (i = this.tokenizer.inlineText(r)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (c = i.raw.slice(-1)), l = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
          continue;
        }
        if (e) {
          const d = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(d);
            break;
          } else
            throw new Error(d);
        }
      }
    return t;
  }
}
class Bs {
  constructor(e) {
    M(this, "options");
    this.options = e || Pn;
  }
  code(e, t, i) {
    var r;
    const s = (r = (t || "").match(/^\S*/)) == null ? void 0 : r[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + je(s) + '">' + (i ? e : je(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : je(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, i) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, i) {
    const s = t ? "ol" : "ul", r = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + r + `>
` + e + "</" + s + `>
`;
  }
  listitem(e, t, i) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + e + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, i) {
    const s = Ja(e);
    if (s === null)
      return i;
    e = s;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), r += ">" + i + "</a>", r;
  }
  image(e, t, i) {
    const s = Ja(e);
    if (s === null)
      return i;
    e = s;
    let r = `<img src="${e}" alt="${i}"`;
    return t && (r += ` title="${t}"`), r += ">", r;
  }
  text(e) {
    return e;
  }
}
class pa {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, i) {
    return "" + i;
  }
  image(e, t, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class Ct {
  constructor(e) {
    M(this, "options");
    M(this, "renderer");
    M(this, "textRenderer");
    this.options = e || Pn, this.options.renderer = this.options.renderer || new Bs(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new pa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Ct(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Ct(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const a = r, o = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += o || "";
          continue;
        }
      }
      switch (r.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const a = r;
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, Eu(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = r;
          i += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = r;
          let o = "", l = "";
          for (let d = 0; d < a.header.length; d++)
            l += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          o += this.renderer.tablerow(l);
          let c = "";
          for (let d = 0; d < a.rows.length; d++) {
            const h = a.rows[d];
            l = "";
            for (let g = 0; g < h.length; g++)
              l += this.renderer.tablecell(this.parseInline(h[g].tokens), { header: !1, align: a.align[g] });
            c += this.renderer.tablerow(l);
          }
          i += this.renderer.table(o, c);
          continue;
        }
        case "blockquote": {
          const a = r, o = this.parse(a.tokens);
          i += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const a = r, o = a.ordered, l = a.start, c = a.loose;
          let d = "";
          for (let h = 0; h < a.items.length; h++) {
            const g = a.items[h], p = g.checked, b = g.task;
            let w = "";
            if (g.task) {
              const m = this.renderer.checkbox(!!p);
              c ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = m + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = m + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: m + " "
              }) : w += m + " ";
            }
            w += this.parse(g.tokens, c), d += this.renderer.listitem(w, b, !!p);
          }
          i += this.renderer.list(d, o, l);
          continue;
        }
        case "html": {
          const a = r;
          i += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = r;
          i += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = r, o = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; )
            a = e[++s], o += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          i += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const a = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const a = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          i += a || "";
          continue;
        }
      }
      switch (r.type) {
        case "escape": {
          const a = r;
          i += t.text(a.text);
          break;
        }
        case "html": {
          const a = r;
          i += t.html(a.text);
          break;
        }
        case "link": {
          const a = r;
          i += t.link(a.href, a.title, this.parseInline(a.tokens, t));
          break;
        }
        case "image": {
          const a = r;
          i += t.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = r;
          i += t.strong(this.parseInline(a.tokens, t));
          break;
        }
        case "em": {
          const a = r;
          i += t.em(this.parseInline(a.tokens, t));
          break;
        }
        case "codespan": {
          const a = r;
          i += t.codespan(a.text);
          break;
        }
        case "br": {
          i += t.br();
          break;
        }
        case "del": {
          const a = r;
          i += t.del(this.parseInline(a.tokens, t));
          break;
        }
        case "text": {
          const a = r;
          i += t.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}
class Ki {
  constructor(e) {
    M(this, "options");
    this.options = e || Pn;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
M(Ki, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Ln, qr, Fl;
class nf {
  constructor(...e) {
    A(this, Ln);
    M(this, "defaults", ca());
    M(this, "options", this.setOptions);
    M(this, "parse", G(this, Ln, qr).call(this, It.lex, Ct.parse));
    M(this, "parseInline", G(this, Ln, qr).call(this, It.lexInline, Ct.parseInline));
    M(this, "Parser", Ct);
    M(this, "Renderer", Bs);
    M(this, "TextRenderer", pa);
    M(this, "Lexer", It);
    M(this, "Tokenizer", Hs);
    M(this, "Hooks", Ki);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var s, r;
    let i = [];
    for (const a of e)
      switch (i = i.concat(t.call(this, a)), a.type) {
        case "table": {
          const o = a;
          for (const l of o.header)
            i = i.concat(this.walkTokens(l.tokens, t));
          for (const l of o.rows)
            for (const c of l)
              i = i.concat(this.walkTokens(c.tokens, t));
          break;
        }
        case "list": {
          const o = a;
          i = i.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = a;
          (r = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && r[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((l) => {
            const c = o[l].flat(1 / 0);
            i = i.concat(this.walkTokens(c, t));
          }) : o.tokens && (i = i.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return i;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((i) => {
      const s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          const a = t.renderers[r.name];
          a ? t.renderers[r.name] = function(...o) {
            let l = r.renderer.apply(this, o);
            return l === !1 && (l = a.apply(this, o)), l;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = t[r.level];
          a ? a.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), i.renderer) {
        const r = this.defaults.renderer || new Bs(this.defaults);
        for (const a in i.renderer) {
          if (!(a in r))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.renderer[o], c = r[o];
          r[o] = (...d) => {
            let h = l.apply(r, d);
            return h === !1 && (h = c.apply(r, d)), h || "";
          };
        }
        s.renderer = r;
      }
      if (i.tokenizer) {
        const r = this.defaults.tokenizer || new Hs(this.defaults);
        for (const a in i.tokenizer) {
          if (!(a in r))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const o = a, l = i.tokenizer[o], c = r[o];
          r[o] = (...d) => {
            let h = l.apply(r, d);
            return h === !1 && (h = c.apply(r, d)), h;
          };
        }
        s.tokenizer = r;
      }
      if (i.hooks) {
        const r = this.defaults.hooks || new Ki();
        for (const a in i.hooks) {
          if (!(a in r))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.hooks[o], c = r[o];
          Ki.passThroughHooks.has(a) ? r[o] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(r, d)).then((g) => c.call(r, g));
            const h = l.call(r, d);
            return c.call(r, h);
          } : r[o] = (...d) => {
            let h = l.apply(r, d);
            return h === !1 && (h = c.apply(r, d)), h;
          };
        }
        s.hooks = r;
      }
      if (i.walkTokens) {
        const r = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(o) {
          let l = [];
          return l.push(a.call(this, o)), r && (l = l.concat(r.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return It.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Ct.parse(e, t ?? this.defaults);
  }
}
Ln = new WeakSet(), qr = function(e, t) {
  return (i, s) => {
    const r = { ...s }, a = { ...this.defaults, ...r };
    this.defaults.async === !0 && r.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = G(this, Ln, Fl).call(this, !!a.silent, !!a.async);
    if (typeof i > "u" || i === null)
      return o(new Error("marked(): input parameter is undefined or null"));
    if (typeof i != "string")
      return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
    if (a.hooks && (a.hooks.options = a), a.async)
      return Promise.resolve(a.hooks ? a.hooks.preprocess(i) : i).then((l) => e(l, a)).then((l) => a.hooks ? a.hooks.processAllTokens(l) : l).then((l) => a.walkTokens ? Promise.all(this.walkTokens(l, a.walkTokens)).then(() => l) : l).then((l) => t(l, a)).then((l) => a.hooks ? a.hooks.postprocess(l) : l).catch(o);
    try {
      a.hooks && (i = a.hooks.preprocess(i));
      let l = e(i, a);
      a.hooks && (l = a.hooks.processAllTokens(l)), a.walkTokens && this.walkTokens(l, a.walkTokens);
      let c = t(l, a);
      return a.hooks && (c = a.hooks.postprocess(c)), c;
    } catch (l) {
      return o(l);
    }
  };
}, Fl = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const s = "<p>An error occurred:</p><pre>" + je(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(s) : s;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const Rn = new nf();
function W(n, e) {
  return Rn.parse(n, e);
}
W.options = W.setOptions = function(n) {
  return Rn.setOptions(n), W.defaults = Rn.defaults, Rl(W.defaults), W;
};
W.getDefaults = ca;
W.defaults = Pn;
W.use = function(...n) {
  return Rn.use(...n), W.defaults = Rn.defaults, Rl(W.defaults), W;
};
W.walkTokens = function(n, e) {
  return Rn.walkTokens(n, e);
};
W.parseInline = Rn.parseInline;
W.Parser = Ct;
W.parser = Ct.parse;
W.Renderer = Bs;
W.TextRenderer = pa;
W.Lexer = It;
W.lexer = It.lex;
W.Tokenizer = Hs;
W.Hooks = Ki;
W.parse = W;
W.options;
W.setOptions;
W.use;
W.walkTokens;
W.parseInline;
Ct.parse;
It.lex;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Hl,
  setPrototypeOf: io,
  isFrozen: sf,
  getPrototypeOf: rf,
  getOwnPropertyDescriptor: af
} = Object;
let {
  freeze: Oe,
  seal: st,
  create: Ur
} = Object, {
  apply: Fr,
  construct: Hr
} = typeof Reflect < "u" && Reflect;
Oe || (Oe = function(e) {
  return e;
});
st || (st = function(e) {
  return e;
});
Fr || (Fr = function(e, t) {
  for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    s[r - 2] = arguments[r];
  return e.apply(t, s);
});
Hr || (Hr = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    i[s - 1] = arguments[s];
  return new e(...i);
});
const Is = De(Array.prototype.forEach), of = De(Array.prototype.lastIndexOf), so = De(Array.prototype.pop), zi = De(Array.prototype.push), lf = De(Array.prototype.splice), Ns = De(String.prototype.toLowerCase), hr = De(String.prototype.toString), pr = De(String.prototype.match), qi = De(String.prototype.replace), cf = De(String.prototype.indexOf), df = De(String.prototype.trim), dt = De(Object.prototype.hasOwnProperty), Se = De(RegExp.prototype.test), Ui = uf(TypeError);
function De(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    return Fr(n, e, i);
  };
}
function uf(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return Hr(n, t);
  };
}
function L(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ns;
  io && io(n, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (sf(e) || (e[i] = r), s = r);
    }
    n[s] = !0;
  }
  return n;
}
function ff(n) {
  for (let e = 0; e < n.length; e++)
    dt(n, e) || (n[e] = null);
  return n;
}
function yt(n) {
  const e = Ur(null);
  for (const [t, i] of Hl(n))
    dt(n, t) && (Array.isArray(i) ? e[t] = ff(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = yt(i) : e[t] = i);
  return e;
}
function Fi(n, e) {
  for (; n !== null; ) {
    const i = af(n, e);
    if (i) {
      if (i.get)
        return De(i.get);
      if (typeof i.value == "function")
        return De(i.value);
    }
    n = rf(n);
  }
  function t() {
    return null;
  }
  return t;
}
const ro = Oe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), mr = Oe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vr = Oe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gf = Oe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), br = Oe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), hf = Oe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ao = Oe(["#text"]), oo = Oe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), wr = Oe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), lo = Oe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Cs = Oe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pf = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mf = st(/<%[\w\W]*|[\w\W]*%>/gm), vf = st(/\$\{[\w\W]*/gm), bf = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), wf = st(/^aria-[\-\w]+$/), Wl = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yf = st(/^(?:\w+script|data):/i), xf = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bl = st(/^html$/i), _f = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var co = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: wf,
  ATTR_WHITESPACE: xf,
  CUSTOM_ELEMENT: _f,
  DATA_ATTR: bf,
  DOCTYPE_NAME: Bl,
  ERB_EXPR: mf,
  IS_ALLOWED_URI: Wl,
  IS_SCRIPT_OR_DATA: yf,
  MUSTACHE_EXPR: pf,
  TMPLIT_EXPR: vf
});
const Hi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, kf = function() {
  return typeof window > "u" ? null : window;
}, Tf = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (i = t.getAttribute(s));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(r, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, uo = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function jl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kf();
  const e = (I) => jl(I);
  if (e.version = "3.3.1", e.removed = [], !n || !n.document || n.document.nodeType !== Hi.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, s = i.currentScript, {
    DocumentFragment: r,
    HTMLTemplateElement: a,
    Node: o,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: d = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: g,
    trustedTypes: p
  } = n, b = l.prototype, w = Fi(b, "cloneNode"), m = Fi(b, "remove"), k = Fi(b, "nextSibling"), z = Fi(b, "childNodes"), T = Fi(b, "parentNode");
  if (typeof a == "function") {
    const I = t.createElement("template");
    I.content && I.content.ownerDocument && (t = I.content.ownerDocument);
  }
  let _, R = "";
  const {
    implementation: X,
    createNodeIterator: B,
    createDocumentFragment: se,
    getElementsByTagName: he
  } = t, {
    importNode: we
  } = i;
  let ee = uo();
  e.isSupported = typeof Hl == "function" && typeof T == "function" && X && X.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: rt,
    ERB_EXPR: Gt,
    TMPLIT_EXPR: Yt,
    DATA_ATTR: zn,
    ARIA_ATTR: Qt,
    IS_SCRIPT_OR_DATA: qn,
    ATTR_WHITESPACE: dn,
    CUSTOM_ELEMENT: Ue
  } = co;
  let {
    IS_ALLOWED_URI: at
  } = co, re = null;
  const ps = L({}, [...ro, ...mr, ...vr, ...br, ...ao]);
  let de = null;
  const ms = L({}, [...oo, ...wr, ...lo, ...Cs]);
  let v = Object.seal(Ur(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), N = null, C = null;
  const te = Object.seal(Ur(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let vt = !0, Un = !0, vs = !1, bs = !0, Xt = !1, Fn = !0, ue = !1, Fe = !1, Oi = !1, Zt = !1, Hn = !1, ot = !1, Kt = !0, Wn = !1;
  const ec = "user-content-";
  let nr = !0, Di = !1, Bn = {}, bt = null;
  const ir = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let va = null;
  const ba = L({}, ["audio", "video", "img", "source", "image", "track"]);
  let sr = null;
  const wa = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ws = "http://www.w3.org/1998/Math/MathML", ys = "http://www.w3.org/2000/svg", Nt = "http://www.w3.org/1999/xhtml";
  let jn = Nt, rr = !1, ar = null;
  const tc = L({}, [ws, ys, Nt], hr);
  let xs = L({}, ["mi", "mo", "mn", "ms", "mtext"]), _s = L({}, ["annotation-xml"]);
  const nc = L({}, ["title", "style", "font", "a", "script"]);
  let Ni = null;
  const ic = ["application/xhtml+xml", "text/html"], sc = "text/html";
  let fe = null, Vn = null;
  const rc = t.createElement("form"), ya = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, or = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Vn && Vn === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = yt(u), Ni = // eslint-disable-next-line unicorn/prefer-includes
      ic.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? sc : u.PARSER_MEDIA_TYPE, fe = Ni === "application/xhtml+xml" ? hr : Ns, re = dt(u, "ALLOWED_TAGS") ? L({}, u.ALLOWED_TAGS, fe) : ps, de = dt(u, "ALLOWED_ATTR") ? L({}, u.ALLOWED_ATTR, fe) : ms, ar = dt(u, "ALLOWED_NAMESPACES") ? L({}, u.ALLOWED_NAMESPACES, hr) : tc, sr = dt(u, "ADD_URI_SAFE_ATTR") ? L(yt(wa), u.ADD_URI_SAFE_ATTR, fe) : wa, va = dt(u, "ADD_DATA_URI_TAGS") ? L(yt(ba), u.ADD_DATA_URI_TAGS, fe) : ba, bt = dt(u, "FORBID_CONTENTS") ? L({}, u.FORBID_CONTENTS, fe) : ir, N = dt(u, "FORBID_TAGS") ? L({}, u.FORBID_TAGS, fe) : yt({}), C = dt(u, "FORBID_ATTR") ? L({}, u.FORBID_ATTR, fe) : yt({}), Bn = dt(u, "USE_PROFILES") ? u.USE_PROFILES : !1, vt = u.ALLOW_ARIA_ATTR !== !1, Un = u.ALLOW_DATA_ATTR !== !1, vs = u.ALLOW_UNKNOWN_PROTOCOLS || !1, bs = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Xt = u.SAFE_FOR_TEMPLATES || !1, Fn = u.SAFE_FOR_XML !== !1, ue = u.WHOLE_DOCUMENT || !1, Zt = u.RETURN_DOM || !1, Hn = u.RETURN_DOM_FRAGMENT || !1, ot = u.RETURN_TRUSTED_TYPE || !1, Oi = u.FORCE_BODY || !1, Kt = u.SANITIZE_DOM !== !1, Wn = u.SANITIZE_NAMED_PROPS || !1, nr = u.KEEP_CONTENT !== !1, Di = u.IN_PLACE || !1, at = u.ALLOWED_URI_REGEXP || Wl, jn = u.NAMESPACE || Nt, xs = u.MATHML_TEXT_INTEGRATION_POINTS || xs, _s = u.HTML_INTEGRATION_POINTS || _s, v = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && ya(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && ya(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Xt && (Un = !1), Hn && (Zt = !0), Bn && (re = L({}, ao), de = [], Bn.html === !0 && (L(re, ro), L(de, oo)), Bn.svg === !0 && (L(re, mr), L(de, wr), L(de, Cs)), Bn.svgFilters === !0 && (L(re, vr), L(de, wr), L(de, Cs)), Bn.mathMl === !0 && (L(re, br), L(de, lo), L(de, Cs))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? te.tagCheck = u.ADD_TAGS : (re === ps && (re = yt(re)), L(re, u.ADD_TAGS, fe))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? te.attributeCheck = u.ADD_ATTR : (de === ms && (de = yt(de)), L(de, u.ADD_ATTR, fe))), u.ADD_URI_SAFE_ATTR && L(sr, u.ADD_URI_SAFE_ATTR, fe), u.FORBID_CONTENTS && (bt === ir && (bt = yt(bt)), L(bt, u.FORBID_CONTENTS, fe)), u.ADD_FORBID_CONTENTS && (bt === ir && (bt = yt(bt)), L(bt, u.ADD_FORBID_CONTENTS, fe)), nr && (re["#text"] = !0), ue && L(re, ["html", "head", "body"]), re.table && (L(re, ["tbody"]), delete N.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        _ = u.TRUSTED_TYPES_POLICY, R = _.createHTML("");
      } else
        _ === void 0 && (_ = Tf(p, s)), _ !== null && typeof R == "string" && (R = _.createHTML(""));
      Oe && Oe(u), Vn = u;
    }
  }, xa = L({}, [...mr, ...vr, ...gf]), _a = L({}, [...br, ...hf]), ac = function(u) {
    let y = T(u);
    (!y || !y.tagName) && (y = {
      namespaceURI: jn,
      tagName: "template"
    });
    const E = Ns(u.tagName), Z = Ns(y.tagName);
    return ar[u.namespaceURI] ? u.namespaceURI === ys ? y.namespaceURI === Nt ? E === "svg" : y.namespaceURI === ws ? E === "svg" && (Z === "annotation-xml" || xs[Z]) : !!xa[E] : u.namespaceURI === ws ? y.namespaceURI === Nt ? E === "math" : y.namespaceURI === ys ? E === "math" && _s[Z] : !!_a[E] : u.namespaceURI === Nt ? y.namespaceURI === ys && !_s[Z] || y.namespaceURI === ws && !xs[Z] ? !1 : !_a[E] && (nc[E] || !xa[E]) : !!(Ni === "application/xhtml+xml" && ar[u.namespaceURI]) : !1;
  }, wt = function(u) {
    zi(e.removed, {
      element: u
    });
    try {
      T(u).removeChild(u);
    } catch {
      m(u);
    }
  }, un = function(u, y) {
    try {
      zi(e.removed, {
        attribute: y.getAttributeNode(u),
        from: y
      });
    } catch {
      zi(e.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(u), u === "is")
      if (Zt || Hn)
        try {
          wt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(u, "");
        } catch {
        }
  }, ka = function(u) {
    let y = null, E = null;
    if (Oi)
      u = "<remove></remove>" + u;
    else {
      const ae = pr(u, /^[\r\n\t ]+/);
      E = ae && ae[0];
    }
    Ni === "application/xhtml+xml" && jn === Nt && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const Z = _ ? _.createHTML(u) : u;
    if (jn === Nt)
      try {
        y = new g().parseFromString(Z, Ni);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = X.createDocument(jn, "template", null);
      try {
        y.documentElement.innerHTML = rr ? R : Z;
      } catch {
      }
    }
    const ye = y.body || y.documentElement;
    return u && E && ye.insertBefore(t.createTextNode(E), ye.childNodes[0] || null), jn === Nt ? he.call(y, ue ? "html" : "body")[0] : ue ? y.documentElement : ye;
  }, Ta = function(u) {
    return B.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, lr = function(u) {
    return u instanceof h && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof d) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Sa = function(u) {
    return typeof o == "function" && u instanceof o;
  };
  function $t(I, u, y) {
    Is(I, (E) => {
      E.call(e, u, y, Vn);
    });
  }
  const Ea = function(u) {
    let y = null;
    if ($t(ee.beforeSanitizeElements, u, null), lr(u))
      return wt(u), !0;
    const E = fe(u.nodeName);
    if ($t(ee.uponSanitizeElement, u, {
      tagName: E,
      allowedTags: re
    }), Fn && u.hasChildNodes() && !Sa(u.firstElementChild) && Se(/<[/\w!]/g, u.innerHTML) && Se(/<[/\w!]/g, u.textContent) || u.nodeType === Hi.progressingInstruction || Fn && u.nodeType === Hi.comment && Se(/<[/\w]/g, u.data))
      return wt(u), !0;
    if (!(te.tagCheck instanceof Function && te.tagCheck(E)) && (!re[E] || N[E])) {
      if (!N[E] && Ia(E) && (v.tagNameCheck instanceof RegExp && Se(v.tagNameCheck, E) || v.tagNameCheck instanceof Function && v.tagNameCheck(E)))
        return !1;
      if (nr && !bt[E]) {
        const Z = T(u) || u.parentNode, ye = z(u) || u.childNodes;
        if (ye && Z) {
          const ae = ye.length;
          for (let Ne = ae - 1; Ne >= 0; --Ne) {
            const Pt = w(ye[Ne], !0);
            Pt.__removalCount = (u.__removalCount || 0) + 1, Z.insertBefore(Pt, k(u));
          }
        }
      }
      return wt(u), !0;
    }
    return u instanceof l && !ac(u) || (E === "noscript" || E === "noembed" || E === "noframes") && Se(/<\/no(script|embed|frames)/i, u.innerHTML) ? (wt(u), !0) : (Xt && u.nodeType === Hi.text && (y = u.textContent, Is([rt, Gt, Yt], (Z) => {
      y = qi(y, Z, " ");
    }), u.textContent !== y && (zi(e.removed, {
      element: u.cloneNode()
    }), u.textContent = y)), $t(ee.afterSanitizeElements, u, null), !1);
  }, Aa = function(u, y, E) {
    if (Kt && (y === "id" || y === "name") && (E in t || E in rc))
      return !1;
    if (!(Un && !C[y] && Se(zn, y))) {
      if (!(vt && Se(Qt, y))) {
        if (!(te.attributeCheck instanceof Function && te.attributeCheck(y, u))) {
          if (!de[y] || C[y]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ia(u) && (v.tagNameCheck instanceof RegExp && Se(v.tagNameCheck, u) || v.tagNameCheck instanceof Function && v.tagNameCheck(u)) && (v.attributeNameCheck instanceof RegExp && Se(v.attributeNameCheck, y) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(y, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              y === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && Se(v.tagNameCheck, E) || v.tagNameCheck instanceof Function && v.tagNameCheck(E)))
            ) return !1;
          } else if (!sr[y]) {
            if (!Se(at, qi(E, dn, ""))) {
              if (!((y === "src" || y === "xlink:href" || y === "href") && u !== "script" && cf(E, "data:") === 0 && va[u])) {
                if (!(vs && !Se(qn, qi(E, dn, "")))) {
                  if (E)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ia = function(u) {
    return u !== "annotation-xml" && pr(u, Ue);
  }, Ca = function(u) {
    $t(ee.beforeSanitizeAttributes, u, null);
    const {
      attributes: y
    } = u;
    if (!y || lr(u))
      return;
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: de,
      forceKeepAttr: void 0
    };
    let Z = y.length;
    for (; Z--; ) {
      const ye = y[Z], {
        name: ae,
        namespaceURI: Ne,
        value: Pt
      } = ye, Gn = fe(ae), cr = Pt;
      let pe = ae === "value" ? cr : df(cr);
      if (E.attrName = Gn, E.attrValue = pe, E.keepAttr = !0, E.forceKeepAttr = void 0, $t(ee.uponSanitizeAttribute, u, E), pe = E.attrValue, Wn && (Gn === "id" || Gn === "name") && (un(ae, u), pe = ec + pe), Fn && Se(/((--!?|])>)|<\/(style|title|textarea)/i, pe)) {
        un(ae, u);
        continue;
      }
      if (Gn === "attributename" && pr(pe, "href")) {
        un(ae, u);
        continue;
      }
      if (E.forceKeepAttr)
        continue;
      if (!E.keepAttr) {
        un(ae, u);
        continue;
      }
      if (!bs && Se(/\/>/i, pe)) {
        un(ae, u);
        continue;
      }
      Xt && Is([rt, Gt, Yt], (Ra) => {
        pe = qi(pe, Ra, " ");
      });
      const Ma = fe(u.nodeName);
      if (!Aa(Ma, Gn, pe)) {
        un(ae, u);
        continue;
      }
      if (_ && typeof p == "object" && typeof p.getAttributeType == "function" && !Ne)
        switch (p.getAttributeType(Ma, Gn)) {
          case "TrustedHTML": {
            pe = _.createHTML(pe);
            break;
          }
          case "TrustedScriptURL": {
            pe = _.createScriptURL(pe);
            break;
          }
        }
      if (pe !== cr)
        try {
          Ne ? u.setAttributeNS(Ne, ae, pe) : u.setAttribute(ae, pe), lr(u) ? wt(u) : so(e.removed);
        } catch {
          un(ae, u);
        }
    }
    $t(ee.afterSanitizeAttributes, u, null);
  }, oc = function I(u) {
    let y = null;
    const E = Ta(u);
    for ($t(ee.beforeSanitizeShadowDOM, u, null); y = E.nextNode(); )
      $t(ee.uponSanitizeShadowNode, y, null), Ea(y), Ca(y), y.content instanceof r && I(y.content);
    $t(ee.afterSanitizeShadowDOM, u, null);
  };
  return e.sanitize = function(I) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, E = null, Z = null, ye = null;
    if (rr = !I, rr && (I = "<!-->"), typeof I != "string" && !Sa(I))
      if (typeof I.toString == "function") {
        if (I = I.toString(), typeof I != "string")
          throw Ui("dirty is not a string, aborting");
      } else
        throw Ui("toString is not a function");
    if (!e.isSupported)
      return I;
    if (Fe || or(u), e.removed = [], typeof I == "string" && (Di = !1), Di) {
      if (I.nodeName) {
        const Pt = fe(I.nodeName);
        if (!re[Pt] || N[Pt])
          throw Ui("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (I instanceof o)
      y = ka("<!---->"), E = y.ownerDocument.importNode(I, !0), E.nodeType === Hi.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? y = E : y.appendChild(E);
    else {
      if (!Zt && !Xt && !ue && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return _ && ot ? _.createHTML(I) : I;
      if (y = ka(I), !y)
        return Zt ? null : ot ? R : "";
    }
    y && Oi && wt(y.firstChild);
    const ae = Ta(Di ? I : y);
    for (; Z = ae.nextNode(); )
      Ea(Z), Ca(Z), Z.content instanceof r && oc(Z.content);
    if (Di)
      return I;
    if (Zt) {
      if (Hn)
        for (ye = se.call(y.ownerDocument); y.firstChild; )
          ye.appendChild(y.firstChild);
      else
        ye = y;
      return (de.shadowroot || de.shadowrootmode) && (ye = we.call(i, ye, !0)), ye;
    }
    let Ne = ue ? y.outerHTML : y.innerHTML;
    return ue && re["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && Se(Bl, y.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Ne), Xt && Is([rt, Gt, Yt], (Pt) => {
      Ne = qi(Ne, Pt, " ");
    }), _ && ot ? _.createHTML(Ne) : Ne;
  }, e.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    or(I), Fe = !0;
  }, e.clearConfig = function() {
    Vn = null, Fe = !1;
  }, e.isValidAttribute = function(I, u, y) {
    Vn || or({});
    const E = fe(I), Z = fe(u);
    return Aa(E, Z, y);
  }, e.addHook = function(I, u) {
    typeof u == "function" && zi(ee[I], u);
  }, e.removeHook = function(I, u) {
    if (u !== void 0) {
      const y = of(ee[I], u);
      return y === -1 ? void 0 : lf(ee[I], y, 1)[0];
    }
    return so(ee[I]);
  }, e.removeHooks = function(I) {
    ee[I] = [];
  }, e.removeAllHooks = function() {
    ee = uo();
  }, e;
}
var Vl = jl();
W.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
Vl.addHook("afterSanitizeAttributes", (n) => {
  var e;
  if (n.tagName === "A") {
    if (!n.getAttribute("href")) {
      const i = document.createTextNode(n.textContent || "");
      (e = n.parentNode) == null || e.replaceChild(i, n);
      return;
    }
    n.setAttribute("target", "_blank"), n.setAttribute("rel", "noopener noreferrer");
  }
  if (n.tagName === "IMG") {
    const t = n.getAttribute("src");
    t && t.startsWith("data:") && (/^data:image\/(png|jpeg|jpg|gif|webp);base64,/i.test(t) || n.removeAttribute("src"));
  }
});
function Sf(n) {
  if (!n) return "";
  const e = W.parse(n);
  return Vl.sanitize(e, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "del",
      "s",
      "div",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "a",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "hr",
      "img"
    ],
    // Explicitly block SVG and MathML namespaces which have XSS vectors
    FORBID_TAGS: ["svg", "math"],
    // Note: 'class' intentionally excluded to prevent CSS-based attacks
    ALLOWED_ATTR: ["href", "title", "alt", "src"],
    // Only allow http, https, and mailto schemes - blocks javascript:, data:, etc.
    ALLOWED_URI_REGEXP: /^(?:https?|mailto):/i
  });
}
var Ef = /* @__PURE__ */ Q('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Af = /* @__PURE__ */ Q('<span class="message-content"> </span>'), If = /* @__PURE__ */ Q('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Cf = /* @__PURE__ */ Q('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Mf = /* @__PURE__ */ Q('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Rf = {
  hash: "svelte-1uqoiy7",
  code: `.message.svelte-1uqoiy7 {max-width:85%;display:flex;flex-direction:column;gap:var(--widget-space-xs);
    /* Subtle entrance animation */
    animation: messageFadeIn 0.25s var(--widget-ease-out-expo) backwards;margin-bottom:var(--widget-space-md);}.message.user.svelte-1uqoiy7 {align-self:flex-end;align-items:flex-end;}.message.assistant.svelte-1uqoiy7 {align-self:flex-start;align-items:flex-start;}.message-bubble.svelte-1uqoiy7 {padding:var(--widget-space-sm) var(--widget-space-md);
    /* Asymmetric radius - creates "pointing" effect */border-radius:18px 18px 18px 18px;font-size:var(--widget-font-size-base);line-height:var(--widget-line-height-normal);font-weight:var(--widget-font-weight-normal);word-wrap:break-word;position:relative;display:inline-flex;align-items:flex-start;gap:var(--widget-space-sm);
    /* Multi-layer shadow for depth */box-shadow:var(--widget-shadow-card);
    /* Spring-based transition */transition:transform 0.15s var(--widget-ease-spring),
                box-shadow 0.2s ease;font-family:var(--widget-font-family);border:1px solid var(--widget-border-subtle);}

  /* User bubble - points right */.message.user.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-gradient);color:var(--widget-text-inverse);border-color:transparent;
    /* Asymmetric: rounded top, pointed bottom-right */border-radius:18px 18px 4px 18px;box-shadow:var(--widget-shadow-card),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);font-weight:var(--widget-font-weight-medium);}

  /* Assistant bubble - points left */.message.assistant.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-surface);color:var(--widget-text);border-color:var(--widget-border);
    /* Asymmetric: rounded top, pointed bottom-left */border-radius:18px 18px 18px 4px;box-shadow:var(--widget-shadow-card);}

  /* Subtle hover effect */.message-bubble.svelte-1uqoiy7:hover {box-shadow:var(--widget-shadow-md);transform:translateY(-1px);}.message-time.svelte-1uqoiy7 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);font-weight:var(--widget-font-weight-normal);padding:0 var(--widget-space-sm);margin-top:2px;letter-spacing:var(--widget-letter-spacing-wide);opacity:0.8;}.sending-indicator.svelte-1uqoiy7,
  .failed-indicator.svelte-1uqoiy7 {display:inline-flex;align-items:center;justify-content:center;margin-left:var(--widget-space-sm);padding:var(--widget-space-xs);border-radius:var(--widget-radius-full);background:rgba(255, 255, 255, 0.15);}.sending-indicator.svelte-1uqoiy7 svg:where(.svelte-1uqoiy7),
  .failed-indicator.svelte-1uqoiy7 svg:where(.svelte-1uqoiy7) {width:14px;height:14px;}.message.user.svelte-1uqoiy7 .sending-indicator:where(.svelte-1uqoiy7) svg:where(.svelte-1uqoiy7) {color:rgba(255, 255, 255, 0.8);}.failed-indicator.svelte-1uqoiy7 {background:rgba(239, 68, 68, 0.15);}

  /* Responsive adjustments */
  @media (max-width: 480px) {.message.svelte-1uqoiy7 {max-width:90%;}.message-bubble.svelte-1uqoiy7 {font-size:var(--widget-font-size-base);padding:var(--widget-space-sm) var(--widget-space);}.message-time.svelte-1uqoiy7 {padding:0 var(--widget-space);}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .message.assistant.svelte-1uqoiy7 .message-bubble:where(.svelte-1uqoiy7) {background:var(--widget-surface);border-color:var(--widget-border);}

  /* ============================================
     Markdown Rendering Styles
     ============================================ */.markdown-body.svelte-1uqoiy7 {font-size:var(--widget-font-size-base);line-height:var(--widget-line-height-relaxed);color:var(--widget-text);word-wrap:break-word;}

  /* Headers - use :global() for dynamically rendered content */.markdown-body.svelte-1uqoiy7 h1,
  .markdown-body.svelte-1uqoiy7 h2,
  .markdown-body.svelte-1uqoiy7 h3,
  .markdown-body.svelte-1uqoiy7 h4,
  .markdown-body.svelte-1uqoiy7 h5,
  .markdown-body.svelte-1uqoiy7 h6 {margin-top:var(--widget-space);margin-bottom:var(--widget-space-sm);font-weight:var(--widget-font-weight-semibold);line-height:var(--widget-line-height-tight);color:var(--widget-text);}.markdown-body.svelte-1uqoiy7 h1 {font-size:1.5em;}.markdown-body.svelte-1uqoiy7 h2 {font-size:1.35em;}.markdown-body.svelte-1uqoiy7 h3 {font-size:1.2em;}.markdown-body.svelte-1uqoiy7 h4 {font-size:1.1em;}.markdown-body.svelte-1uqoiy7 h5 {font-size:1.05em;}.markdown-body.svelte-1uqoiy7 h6 {font-size:1em;}

  /* Paragraphs */.markdown-body.svelte-1uqoiy7 p {margin-top:0;margin-bottom:var(--widget-space-sm);}.markdown-body.svelte-1uqoiy7 p:last-child {margin-bottom:0;}

  /* Code blocks */.markdown-body.svelte-1uqoiy7 pre {background:var(--widget-surface-hover);border:1px solid var(--widget-border);border-radius:var(--widget-radius);padding:var(--widget-space-sm);margin:var(--widget-space-sm) 0;overflow-x:auto;font-family:'Courier New', Courier, monospace;font-size:0.9em;line-height:var(--widget-line-height-normal);}.markdown-body.svelte-1uqoiy7 pre code {background:transparent;padding:0;border:none;font-size:inherit;}

  /* Inline code */.markdown-body.svelte-1uqoiy7 code {background:var(--widget-surface-hover);border:1px solid var(--widget-border-subtle);border-radius:3px;padding:2px 6px;font-family:'Courier New', Courier, monospace;font-size:0.9em;color:var(--widget-text);}

  /* Tables */.markdown-body.svelte-1uqoiy7 table {border-collapse:collapse;width:100%;margin:var(--widget-space-sm) 0;font-size:0.95em;}.markdown-body.svelte-1uqoiy7 table th,
  .markdown-body.svelte-1uqoiy7 table td {border:1px solid var(--widget-border);padding:var(--widget-space-xs) var(--widget-space-sm);text-align:left;}.markdown-body.svelte-1uqoiy7 table th {background:var(--widget-surface-hover);font-weight:var(--widget-font-weight-semibold);color:var(--widget-text);}.markdown-body.svelte-1uqoiy7 table tr:nth-child(even) {background:var(--widget-surface);}

  /* Blockquotes */.markdown-body.svelte-1uqoiy7 blockquote {margin:var(--widget-space-sm) 0;padding-left:var(--widget-space);border-left:4px solid var(--widget-primary);color:var(--widget-text-secondary);font-style:italic;}.markdown-body.svelte-1uqoiy7 blockquote p {margin:0;}

  /* Lists */.markdown-body.svelte-1uqoiy7 ul,
  .markdown-body.svelte-1uqoiy7 ol {margin:var(--widget-space-sm) 0;padding-left:var(--widget-space-lg);}.markdown-body.svelte-1uqoiy7 li {margin-bottom:var(--widget-space-xs);}.markdown-body.svelte-1uqoiy7 ul ul,
  .markdown-body.svelte-1uqoiy7 ol ol,
  .markdown-body.svelte-1uqoiy7 ul ol,
  .markdown-body.svelte-1uqoiy7 ol ul {margin-top:var(--widget-space-xs);margin-bottom:0;}

  /* Links */.markdown-body.svelte-1uqoiy7 a {color:var(--widget-primary);text-decoration:underline;transition:color 0.15s ease;}.markdown-body.svelte-1uqoiy7 a:hover {color:var(--widget-primary-hover);}

  /* Horizontal rules */.markdown-body.svelte-1uqoiy7 hr {border:none;border-top:1px solid var(--widget-border);margin:var(--widget-space) 0;}

  /* Strong and emphasis */.markdown-body.svelte-1uqoiy7 strong {font-weight:var(--widget-font-weight-semibold);}.markdown-body.svelte-1uqoiy7 em {font-style:italic;}

  /* Strikethrough */.markdown-body.svelte-1uqoiy7 del {text-decoration:line-through;opacity:0.7;}

  /* Images (if allowed) */.markdown-body.svelte-1uqoiy7 img {max-width:100%;height:auto;border-radius:var(--widget-radius);margin:var(--widget-space-sm) 0;}

  /* Dark theme markdown adjustments */[data-theme="dark"] .markdown-body.svelte-1uqoiy7 {color:var(--widget-text);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 pre {background:var(--widget-surface-hover);border-color:var(--widget-border);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 code {background:var(--widget-surface-hover);border-color:var(--widget-border-subtle);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 table th {background:var(--widget-surface-hover);}[data-theme="dark"] .markdown-body.svelte-1uqoiy7 table td {border-color:var(--widget-border);}`
};
function Gl(n, e) {
  jt(e, !0), ln(n, Rf);
  let t = it(e, "message", 7);
  function i(T) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(T);
  }
  const s = /* @__PURE__ */ Ae(() => t().role === "user"), r = /* @__PURE__ */ Ae(() => t().role === "assistant" ? Sf(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(T) {
      t(T), qe();
    }
  }, o = Mf();
  let l;
  var c = J(o), d = J(c);
  {
    var h = (T) => {
      var _ = Ef(), R = J(_);
      Ed(R, () => x(r)), K(_), j(T, _);
    }, g = (T) => {
      var _ = Af(), R = J(_, !0);
      K(_), nt(() => Ci(R, t().content)), j(T, _);
    };
    Ie(d, (T) => {
      t().role === "assistant" ? T(h) : T(g, !1);
    });
  }
  var p = ne(d, 2);
  {
    var b = (T) => {
      var _ = If();
      j(T, _);
    };
    Ie(p, (T) => {
      t().status === "sending" && T(b);
    });
  }
  var w = ne(p, 2);
  {
    var m = (T) => {
      var _ = Cf();
      j(T, _);
    };
    Ie(w, (T) => {
      t().status === "failed" && T(m);
    });
  }
  K(c);
  var k = ne(c, 2), z = J(k, !0);
  return K(k), K(o), nt(
    (T, _) => {
      l = sa(o, 1, "message svelte-1uqoiy7", null, l, { user: x(s), assistant: !x(s) }), Ot(o, "aria-label", x(s) ? "Your message" : "Assistant message"), Ot(k, "aria-label", T), Ci(z, _);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), j(n, o), Vt(a);
}
cn(Gl, { message: {} }, [], [], !0);
Wc();
var Lf = /* @__PURE__ */ Q('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Of = {
  hash: "svelte-ej4x60",
  code: `.typing-indicator.svelte-ej4x60 {display:inline-flex;align-items:center;justify-content:center;gap:var(--widget-space-xs);padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);border:1px solid var(--widget-border-subtle);border-radius:var(--widget-radius-2xl);box-shadow:var(--widget-shadow-card);margin-bottom:var(--widget-space-md);width:fit-content;
    animation: svelte-ej4x60-fadeInScale 0.3s ease-out;}
  
  @keyframes svelte-ej4x60-fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60) {width:6px;height:6px;background:var(--widget-primary);border-radius:var(--widget-radius-full);
    animation: modernTyping 1.4s ease-in-out infinite;animation-fill-mode:none; /* Prevent state persistence when hiding */opacity:0.8;}
  
  /* Staggered animation delays for sequential bouncing effect */.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60):nth-child(1) {animation-delay:0s;}.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60):nth-child(2) {animation-delay:0.2s;}.typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60):nth-child(3) {animation-delay:0.4s;}
  
  /* Screen reader only content */.sr-only.svelte-ej4x60 {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .typing-indicator.svelte-ej4x60 {background:var(--widget-surface);border-color:var(--widget-border);}[data-theme="dark"] .typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60) {background:var(--widget-accent-gold); /* Warm gold dots for brand consistency */}`
};
function Yl(n, e) {
  jt(e, !1), ln(n, Of), zd();
  var t = yd(), i = Os(t);
  {
    var s = (r) => {
      var a = Lf();
      j(r, a);
    };
    Ie(i, (r) => {
      O.isTyping && r(s);
    });
  }
  j(n, t), Vt();
}
cn(Yl, {}, [], [], !0);
var Df = /* @__PURE__ */ Q('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Nf = /* @__PURE__ */ Q('<div class="quick-questions svelte-otpvm8" role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const $f = {
  hash: "svelte-otpvm8",
  code: `.quick-questions.svelte-otpvm8 {display:flex;flex-direction:column;align-items:center;align-self:center;gap:10px;padding:var(--widget-space-xs) 0;width:100%;max-width:280px;}.section-label.svelte-otpvm8 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);margin-bottom:var(--widget-space-xs);
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;animation-delay:2.7s;}.question-chip.svelte-otpvm8 {min-height:44px;padding:var(--widget-space-sm) var(--widget-space-lg);border:1.5px solid var(--widget-primary);border-radius:var(--widget-radius-full);background:transparent;color:var(--widget-primary);cursor:pointer;transition:background var(--widget-transition),
                color var(--widget-transition),
                transform var(--widget-transition),
                box-shadow var(--widget-transition);font-family:var(--widget-font-family);font-size:0.875rem;font-weight:var(--widget-font-weight-medium);text-align:center;
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;}

  @keyframes svelte-otpvm8-fadeInUp {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {.section-label.svelte-otpvm8 {
      animation: none !important;}.question-chip.svelte-otpvm8 {
      animation: none !important;}
  }.question-chip.svelte-otpvm8:hover {background:var(--widget-primary);color:var(--widget-text-inverse);transform:translateY(-1px);box-shadow:var(--widget-shadow-md);}.question-chip.svelte-otpvm8:active {transform:translateY(0) scale(0.98);}.question-chip.svelte-otpvm8:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:var(--widget-shadow-focus);}[data-theme="dark"] .question-chip.svelte-otpvm8 {border-color:var(--widget-primary-light);color:var(--widget-primary-light);}[data-theme="dark"] .question-chip.svelte-otpvm8:hover {background:var(--widget-primary-light);color:var(--widget-text-inverse);}`
};
function Ql(n, e) {
  jt(e, !0), ln(n, $f);
  const t = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let i = it(e, "questions", 7, t), s = it(e, "onsend", 7);
  function r(c) {
    var d;
    (d = s()) == null || d(c);
  }
  var a = {
    get questions() {
      return i();
    },
    set questions(c = t) {
      i(c), qe();
    },
    get onsend() {
      return s();
    },
    set onsend(c) {
      s(c), qe();
    }
  }, o = Nf(), l = ne(J(o), 2);
  return gl(l, 18, i, (c) => c, (c, d, h) => {
    var g = Df();
    g.__click = () => r(d);
    var p = J(g, !0);
    K(g), nt(() => {
      pl(g, `animation-delay: ${2.8 + x(h) * 0.2}s`), Ci(p, d);
    }), j(c, g);
  }), K(o), j(n, o), Vt(a);
}
fs(["click"]);
cn(Ql, { questions: {}, onsend: {} }, [], [], !0);
var Pf = /* @__PURE__ */ Q('<p class="initial-message svelte-qha2j"> </p>'), zf = /* @__PURE__ */ Q('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), qf = /* @__PURE__ */ Q('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Uf = /* @__PURE__ */ Q('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Ff = /* @__PURE__ */ Q('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Hf = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-md);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:flex-start;flex:1;padding:var(--widget-space-md) var(--widget-space-lg);}

  /* Collapsible wrapper for logo + brand name — shrinks to 0 after fade-out */.branding-phase.svelte-qha2j {display:flex;flex-direction:column;align-items:center;align-self:center;overflow:hidden;padding-top:clamp(48px, 15vh, 120px);
    animation: svelte-qha2j-brandingCollapse 0.5s ease-in 2s forwards;}

  @keyframes svelte-qha2j-brandingCollapse {
    0%   { max-height: 400px; padding-top: clamp(48px, 15vh, 120px); }
    100% { max-height: 0; padding-top: 0; }
  }.empty-icon.svelte-qha2j {width:96px;height:96px;margin-bottom:var(--widget-space-lg);background:#ffffff; /* Always white to match logo background */backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: svelte-qha2j-logoSequence 2.4s ease-in-out forwards;}

  /* Combined float-then-fade animation — avoids stacking infinite + forwards on same property */
  @keyframes svelte-qha2j-logoSequence {
    0%      { opacity: 1; transform: translateY(0) scale(1); }
    31.25%  { transform: translateY(-8px) scale(1.02); }
    62.5%   { opacity: 1; transform: translateY(0) scale(1); }
    83.33%  { opacity: 1; transform: translateY(0) scale(1); }
    100%    { opacity: 0; transform: translateY(-8px) scale(0.95); }
  }.brand-logo.svelte-qha2j {width:68px;height:68px;object-fit:contain;filter:var(--widget-logo-filter, brightness(1));}.brand-name.svelte-qha2j {font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-medium);color:var(--widget-text-secondary);letter-spacing:0.02em;position:relative;
    animation: svelte-qha2j-brandSequence 2.4s ease-in-out forwards;}

  /* Combined pulse-then-fade animation — avoids stacking infinite + forwards on opacity */
  @keyframes svelte-qha2j-brandSequence {
    0%      { opacity: 0.6; }
    41.67%  { opacity: 1; }
    83.33%  { opacity: 0.6; }
    100%    { opacity: 0; }
  }.initial-message.svelte-qha2j {align-self:flex-start;max-width:280px;margin:var(--widget-space-sm) 0;padding:var(--widget-space-md) var(--widget-space-lg);background:var(--widget-surface);border:1px solid var(--widget-border);border-radius:18px 18px 18px 4px;font-size:var(--widget-font-size-sm);color:var(--widget-text);line-height:1.5;text-align:left;
    animation: svelte-qha2j-messageSlideIn 0.4s var(--widget-ease-out-expo) 2.5s backwards;}

  @keyframes svelte-qha2j-messageSlideIn {
    from {
      opacity: 0;
      transform: translateX(-12px) translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateX(0) translateY(0);
    }
  }.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}

  /* Reduced motion: keep opacity fades (safe), remove transforms and delays */
  @media (prefers-reduced-motion: reduce) {.branding-phase.svelte-qha2j {
      animation: svelte-qha2j-brandingCollapseReduced 0.3s ease-in forwards;}.empty-icon.svelte-qha2j {
      animation: svelte-qha2j-fadeOnly 0.3s ease-in forwards;}.brand-name.svelte-qha2j {
      animation: svelte-qha2j-fadeOnly 0.3s ease-in forwards;}.initial-message.svelte-qha2j {
      animation: fadeIn 0.2s ease backwards;}
  }

  @keyframes svelte-qha2j-brandingCollapseReduced {
    0%   { max-height: 400px; padding-top: clamp(48px, 15vh, 120px); opacity: 1; }
    100% { max-height: 0; padding-top: 0; opacity: 0; }
  }

  @keyframes svelte-qha2j-fadeOnly {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */
  /* Note: .empty-icon stays white in dark mode to match logo's baked-in white background.
     This creates a clean, intentional "logo badge" appearance. */[data-theme="dark"] .empty-icon.svelte-qha2j {box-shadow:var(--widget-shadow-md);}[data-theme="dark"] .brand-name.svelte-qha2j {color:var(--widget-text-muted);}`
};
function Xl(n, e) {
  jt(e, !0), ln(n, Hf);
  let t = it(e, "onsend", 7), i, s = !0;
  const r = /* @__PURE__ */ Ae(() => O.messages.length > 0);
  _n(() => {
    O.messages, s && x(r) && a();
  }), _n(() => {
    O.isTyping, s && x(r) && a();
  }), _n(() => {
    O.streamingUpdateSignal, s && O.isStreaming && a();
  });
  async function a() {
    await ll(), i && (i.scrollTop = i.scrollHeight);
  }
  function o() {
    if (i) {
      const { scrollTop: w, scrollHeight: m, clientHeight: k } = i;
      s = m - w - k < 100;
    }
  }
  aa(() => {
    x(r) && a();
  });
  var l = {
    get onsend() {
      return t();
    },
    set onsend(w) {
      t(w), qe();
    }
  }, c = Ff(), d = J(c);
  {
    var h = (w) => {
      var m = zf(), k = J(m), z = J(k), T = J(z);
      K(z), Qr(2), K(k);
      var _ = ne(k, 2);
      {
        var R = (B) => {
          var se = Pf(), he = J(se, !0);
          K(se), nt(() => Ci(he, Ce.initialMessage)), j(B, se);
        };
        Ie(_, (B) => {
          Ce.initialMessage && B(R);
        });
      }
      var X = ne(_, 2);
      Ql(X, {
        get questions() {
          return Ce.quickQuestions;
        },
        get onsend() {
          return t();
        }
      }), K(m), nt(() => Ot(T, "src", iu)), j(w, m);
    }, g = (w) => {
      var m = qf(), k = J(m);
      gl(k, 17, () => O.messages, (T) => T.id, (T, _) => {
        Gl(T, {
          get message() {
            return x(_);
          }
        });
      });
      var z = ne(k, 2);
      Yl(z, {}), K(m), j(w, m);
    };
    Ie(d, (w) => {
      O.messages.length === 0 ? w(h) : w(g, !1);
    });
  }
  var p = ne(d, 2);
  {
    var b = (w) => {
      var m = Uf(), k = ne(J(m), 2), z = J(k, !0);
      K(k), K(m), nt(() => Ci(z, O.error)), j(w, m);
    };
    Ie(p, (w) => {
      O.error && w(b);
    });
  }
  return K(c), ra(c, (w) => i = w, () => i), vd("scroll", c, o), j(n, c), Vt(l);
}
cn(Xl, { onsend: {} }, [], [], !0);
var Wf = /* @__PURE__ */ Q('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), Bf = /* @__PURE__ */ Q('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const jf = {
  hash: "svelte-1a8gd73",
  code: `.input-bar.svelte-1a8gd73 {padding:var(--widget-space-sm) var(--widget-space-md);background:var(--widget-surface-elevated);border-top:1px solid var(--widget-border);border-radius:0 0 var(--widget-radius-xl) var(--widget-radius-xl);position:relative;}

  /* Contained Input Container - Material Design Pattern */.input-container.svelte-1a8gd73 {display:flex;align-items:center;gap:var(--widget-space-sm);padding:var(--widget-space-xs) var(--widget-space-sm);border:1px solid var(--widget-border);border-radius:var(--widget-radius-xl);background:var(--widget-background);
    /* Spring-based transitions */transition:border-color 0.15s ease,
                box-shadow 0.2s var(--widget-ease-out-expo),
                background 0.15s ease;
    /* Inner shadow for depth */box-shadow:var(--widget-shadow-inner);min-height:48px;}

  /* Focus state on container (not input) */.input-container.svelte-1a8gd73:focus-within {border-color:var(--widget-primary);
    /* Glow ring on focus */box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-primary-rgb), 0.12);background:var(--widget-background);}

  /* Disabled state on container */.input-container.svelte-1a8gd73:has(.input-field:where(.svelte-1a8gd73):disabled) {background:var(--widget-surface);border-color:var(--widget-border-subtle);cursor:not-allowed;opacity:0.6;}.input-field.svelte-1a8gd73 {flex:1;padding:var(--widget-space-xs) var(--widget-space-sm);border:none;background:transparent;font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-normal);line-height:var(--widget-line-height-normal);letter-spacing:var(--widget-letter-spacing-normal);resize:none;outline:none;font-family:var(--widget-font-family);max-height:120px;min-height:36px;height:36px;overflow-y:auto;color:var(--widget-text);}.input-field.svelte-1a8gd73:disabled {cursor:not-allowed;color:var(--widget-text-muted);}.input-field.svelte-1a8gd73::placeholder {color:var(--widget-text-muted);font-weight:var(--widget-font-weight-normal);font-style:normal;opacity:0.7;}.send-button.svelte-1a8gd73 {width:36px;height:36px;border-radius:var(--widget-radius-full);background:var(--widget-gradient);border:1px solid rgba(255, 255, 255, 0.1);color:var(--widget-text-inverse);cursor:pointer;display:flex;align-items:center;justify-content:center;
    /* Spring-based transitions */transition:transform 0.2s var(--widget-ease-spring),
                box-shadow 0.2s var(--widget-ease-out-expo),
                background 0.15s ease;flex-shrink:0;box-shadow:var(--widget-shadow-button);position:relative;overflow:hidden;}.send-button.svelte-1a8gd73:hover:not(:disabled) {background:var(--widget-gradient-hover);box-shadow:var(--widget-shadow-glow);transform:scale(1.05);}.send-button.svelte-1a8gd73:active:not(:disabled) {background:var(--widget-primary-dark);box-shadow:var(--widget-shadow-sm);transform:scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility */.send-button.svelte-1a8gd73:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:var(--widget-shadow-glow);}.send-button.svelte-1a8gd73:disabled {opacity:0.4;cursor:not-allowed;background:var(--widget-surface);color:var(--widget-text-muted);border-color:var(--widget-border);box-shadow:none;transform:none;}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:16px;height:16px;
    /* Spring-based icon animation */transition:transform 0.2s var(--widget-ease-spring);filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));}.send-button.svelte-1a8gd73:hover:not(:disabled) svg:where(.svelte-1a8gd73) {
    /* Subtle rotation + scale on hover */transform:translateX(2px) rotate(12deg) scale(1.1);}
  
  /* Modern custom scrollbar for textarea */.input-field.svelte-1a8gd73::-webkit-scrollbar {width:6px;}.input-field.svelte-1a8gd73::-webkit-scrollbar-track {background:transparent;}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb {background:var(--widget-border-light);border-radius:var(--widget-radius-full);}.input-field.svelte-1a8gd73::-webkit-scrollbar-thumb:hover {background:var(--widget-border);}
  
  /* Mobile: Enhanced touch targets (WCAG 2.1 AA) */
  @media (max-width: 767px) {.input-bar.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);border-radius:0; /* Full-screen on mobile */}.input-container.svelte-1a8gd73 {min-height:56px;padding:var(--widget-space-xs) var(--widget-space-sm);}.input-field.svelte-1a8gd73 {font-size:16px; /* Prevent zoom on iOS */padding:var(--widget-space-xs) var(--widget-space-sm);min-height:var(--widget-touch-target-min);height:var(--widget-touch-target-min);}.send-button.svelte-1a8gd73 {width:var(--widget-touch-target-min);height:var(--widget-touch-target-min);}.send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {width:20px;height:20px;}
  }

  /* Landscape: Compact height for more content area */
  @media (max-width: 767px) and (orientation: landscape) {.input-container.svelte-1a8gd73 {min-height:52px;}
  }

  /* Respect reduced motion preference (WCAG 2.3.3) */
  @media (prefers-reduced-motion: reduce) {.input-container.svelte-1a8gd73,
    .send-button.svelte-1a8gd73,
    .send-button.svelte-1a8gd73 svg:where(.svelte-1a8gd73) {transition-duration:0.01ms !important;}.send-button.svelte-1a8gd73:hover:not(:disabled) svg:where(.svelte-1a8gd73) {transform:none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .input-container.svelte-1a8gd73 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .input-container.svelte-1a8gd73:focus-within {border-color:var(--widget-accent-gold);box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-accent-gold-rgb), 0.2); /* Gold accent glow */}

  /* Brand banner — fades in at 3.5s, after last quick question finishes (3.2s + 0.3s) */.brand-banner.svelte-1a8gd73 {text-align:center;font-size:var(--widget-font-size-xs);padding:6px 0;line-height:1.4;letter-spacing:0.02em;opacity:0;
    animation: svelte-1a8gd73-brandBannerIn 0.3s ease 3.5s forwards;}.brand-banner.svelte-1a8gd73 a:where(.svelte-1a8gd73) {color:var(--widget-text-muted);font-weight:var(--widget-font-weight-medium);text-decoration:none;transition:color var(--widget-transition);}.brand-banner.svelte-1a8gd73 a:where(.svelte-1a8gd73):hover {color:var(--widget-primary);text-decoration:underline;}.brand-banner.svelte-1a8gd73 a:where(.svelte-1a8gd73):focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;border-radius:2px;}

  /* Screen-reader-only utility for external link announcement */.sr-only.svelte-1a8gd73 {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}

  @keyframes svelte-1a8gd73-brandBannerIn {
    to { opacity: 0.85; }
  }

  @media (prefers-reduced-motion: reduce) {.brand-banner.svelte-1a8gd73 {
      animation: svelte-1a8gd73-brandBannerIn 0.2s ease forwards;}
  }

  /* Mobile: increase touch target for brand link */
  @media (max-width: 767px) {.brand-banner.svelte-1a8gd73 {padding:6px 0;}
  }

  /* AI Disclaimer */.ai-disclaimer.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);text-align:center;font-size:var(--widget-font-size-xs);color:var(--widget-text-subtle);opacity:0.8;user-select:none;pointer-events:none;margin-top:var(--widget-space-sm);}[data-theme="dark"] .ai-disclaimer.svelte-1a8gd73 {color:var(--widget-text-muted);opacity:0.7;}

  @media (max-width: 767px) {.ai-disclaimer.svelte-1a8gd73 {font-size:0.6875rem; /* 11px */}
  }`
};
function Zl(n, e) {
  jt(e, !0), ln(n, jf);
  let t = it(e, "onsend", 7), i = it(e, "disabled", 7, !1), s = it(e, "showBrandBanner", 7, !1), r = /* @__PURE__ */ F(""), a;
  function o() {
    var R, X, B, se;
    const T = At().generate();
    Y.log("InputBar", "handleSend() called", {
      correlationId: T,
      rawInputValue: x(r),
      rawLength: ((R = x(r)) == null ? void 0 : R.length) || 0,
      rawType: typeof x(r),
      disabled: i(),
      isTyping: O.isTyping
    });
    const _ = x(r).trim();
    Y.log("InputBar", "After trimming", {
      correlationId: T,
      original: x(r),
      trimmed: _,
      originalLength: ((X = x(r)) == null ? void 0 : X.length) || 0,
      trimmedLength: (_ == null ? void 0 : _.length) || 0,
      wasEmptyAfterTrim: !_,
      hadWhitespaceOnly: (((B = x(r)) == null ? void 0 : B.length) || 0) > 0 && !_
    }), _ && !i() && !O.isTyping ? (Y.log("InputBar", "Conditions met, calling onsend", {
      correlationId: T,
      trimmedValue: _,
      trimmedLength: _.length,
      willSend: !0
    }), At().setCurrent(T), (se = t()) == null || se(_), P(r, ""), c()) : Y.log("InputBar", "Send blocked", {
      correlationId: T,
      hasContent: !!_,
      disabled: i(),
      isTyping: O.isTyping,
      trimmedValue: _ || "(empty)",
      reason: _ ? i() ? "disabled" : O.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function l(T) {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), o());
  }
  function c() {
    a && (a.style.height = "auto", a.style.height = Math.min(a.scrollHeight, 120) + "px");
  }
  const d = /* @__PURE__ */ Ae(() => i() || O.isTyping || O.error !== null), h = /* @__PURE__ */ Ae(() => O.isTyping ? "Waiting for response..." : O.error ? "Error occurred" : Ce.placeholder);
  var g = {
    get onsend() {
      return t();
    },
    set onsend(T) {
      t(T), qe();
    },
    get disabled() {
      return i();
    },
    set disabled(T = !1) {
      i(T), qe();
    },
    get showBrandBanner() {
      return s();
    },
    set showBrandBanner(T = !1) {
      s(T), qe();
    }
  }, p = Bf(), b = J(p);
  {
    var w = (T) => {
      var _ = Wf();
      j(T, _);
    };
    Ie(b, (T) => {
      s() && T(w);
    });
  }
  var m = ne(b, 2), k = J(m);
  td(k), k.__keydown = l, k.__input = c, ra(k, (T) => a = T, () => a);
  var z = ne(k, 2);
  return z.__click = o, K(m), Qr(2), K(p), nt(
    (T) => {
      Ot(k, "placeholder", x(h)), k.disabled = x(d), z.disabled = T;
    },
    [() => x(d) || !x(r).trim()]
  ), Pd(k, () => x(r), (T) => P(r, T)), j(n, p), Vt(g);
}
fs(["keydown", "input", "click"]);
cn(Zl, { onsend: {}, disabled: {}, showBrandBanner: {} }, [], [], !0);
class Vf {
  constructor(e, t) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = la(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), me.API_TIMEOUT), i = Vi.getApiUrl("init", {
        clientId: this.config.clientId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: i,
        payload: s
      });
      const r = At().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": r
        },
        body: JSON.stringify({ body: s }),
        signal: e.signal
      });
      if (clearTimeout(t), !a.ok) {
        if (a.status === 403)
          throw new Error("Invalid client configuration. Please check your client ID.");
        if (a.status === 422)
          try {
            const l = await a.json();
            this.debugLogger.error("APIClient", "Validation error (422)", l);
            const c = l.detail || l.message || "Validation failed";
            throw new Error(`Validation error: ${typeof c == "string" ? c : JSON.stringify(c)}`);
          } catch (l) {
            throw l instanceof Error && l.message.startsWith("Validation error:") ? l : new Error("Invalid request data. Please check client ID and visitor ID format.");
          }
        if (a.status === 429) {
          const l = a.headers.get("Retry-After"), c = l ? parseInt(l, 10) : 60;
          throw new Kn(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new Zn(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof Qi || e instanceof Zn || e instanceof Kn)
        throw e;
      const t = Xi.handle(e, {
        component: "APIClient",
        action: "initialize"
      });
      throw new Error(t.message);
    }
  }
  /**
   * Send chat message (HTTP fallback)
   */
  async sendMessage(e) {
    var i, s;
    const t = At().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: t,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const r = du.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: t,
        input: e,
        isValid: r.isValid,
        error: r.error,
        sanitizedValue: r.sanitizedValue,
        sanitizedLength: ((i = r.sanitizedValue) == null ? void 0 : i.length) || 0,
        contentChanged: e !== r.sanitizedValue
      }), !r.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: t, error: r.error }), new Qi(r.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: t }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), me.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: r.sanitizedValue
        }
      }, c = Vi.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: t,
        url: c,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((s = l.body.message) == null ? void 0 : s.length) || 0
      });
      const d = await fetch(c, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": t
        },
        body: JSON.stringify(l),
        signal: a.signal
      });
      if (clearTimeout(o), this.debugLogger.log("APIClient", "HTTP response status", {
        correlationId: t,
        ok: d.ok,
        status: d.status,
        statusText: d.statusText
      }), !d.ok) {
        if (d.status === 429) {
          const g = d.headers.get("Retry-After"), p = g ? parseInt(g, 10) : 60;
          throw new Kn(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new Zn(
          `Failed to send message: ${d.statusText}`,
          d.status,
          c
        );
      }
      const h = await d.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: t, result: h }), h;
    } catch (r) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: r }), r instanceof Qi || r instanceof Zn || r instanceof Kn)
        throw r;
      const a = Xi.handle(r, {
        component: "APIClient",
        action: "sendMessage",
        sessionId: this.sessionId || void 0
      });
      throw new Error(a.message);
    }
  }
  /**
   * Resume previous session if available
   */
  async resumeSession() {
    const e = this.visitor.getLastActiveSession();
    if (!e)
      return !1;
    try {
      if (this.sessionId = e, await this.validateSessionHealth())
        return !0;
    } catch {
      this.sessionId = null;
    }
    return !1;
  }
  /**
   * Validate session using dedicated session health endpoint
   */
  async validateSessionHealth() {
    if (!this.sessionId)
      return !1;
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), me.API_TIMEOUT), i = Vi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: i,
        payload: s
      });
      const r = At().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": r
        },
        body: JSON.stringify({ body: s }),
        signal: e.signal
      });
      if (clearTimeout(t), a.ok) {
        const o = await a.json();
        return this.config.debug && this.debugLogger.log("APIClient", "Session health response", o), o.status === "healthy";
      }
      return a.status === 404 ? (this.config.debug && this.debugLogger.log("APIClient", "Session not found", this.sessionId), !1) : (a.status === 410 && this.config.debug && this.debugLogger.log("APIClient", "Session expired", this.sessionId), !1);
    } catch (e) {
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check failed", e), !1;
    }
  }
  /**
   * Check health of current session
   */
  async checkSessionHealth() {
    if (!this.sessionId)
      return null;
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), me.API_TIMEOUT), i = Vi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, r = At().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": r
        },
        body: JSON.stringify({ body: s }),
        signal: e.signal
      });
      return clearTimeout(t), a.ok ? await a.json() : a.status === 404 ? {
        status: "invalid",
        session_id: this.sessionId
      } : a.status === 410 ? {
        status: "expired",
        session_id: this.sessionId
      } : null;
    } catch (e) {
      const t = Xi.handle(e, {
        component: "APIClient",
        action: "checkSessionHealth",
        sessionId: this.sessionId
      });
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check error", t.message), null;
    }
  }
  getSessionId() {
    return this.sessionId;
  }
}
class Gf {
  constructor(e, t, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = me.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = t, this.debugLogger = i;
  }
  /**
   * Reset state for a new message stream
   */
  resetForNewMessage() {
    this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = Date.now(), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null);
  }
  /**
   * Handle incoming WebSocket messages
   */
  handleMessage(e) {
    switch (this.debugLogger.log("ChatController", "Processing WebSocket message", {
      type: e.type,
      hasContent: !!e.data.content
    }), e.type) {
      case "assistant_chunk":
        this.handleAssistantChunk(e);
        break;
      case "assistant_complete":
        this.handleAssistantComplete(e);
        break;
      case "connection_established":
        this.handleConnectionEstablished(e);
        break;
      case "typing_indicator":
        this.handleTypingIndicator();
        break;
      case "pong":
        this.debugLogger.log("ChatController", "Pong received");
        break;
      case "heartbeat":
        this.debugLogger.log("ChatController", "Heartbeat received");
        break;
      case "error":
        this.handleError(e);
        break;
      default:
        this.debugLogger.warn("ChatController", "Unknown message type", e.type);
    }
  }
  handleAssistantChunk(e) {
    const t = e.data.content;
    if (!t) {
      this.debugLogger.warn("ChatController", "Assistant chunk without content");
      return;
    }
    if (this.hasHiddenTypingForCurrentStream || (this.chatStore.setTyping(!1), this.hasHiddenTypingForCurrentStream = !0, this.debugLogger.log("ChatController", "Typing indicator hidden - first chunk arrived"), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null)), this.chatStore.isStreaming)
      this.chatStore.appendToStreamingMessage(t);
    else {
      const i = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(t), this.debugLogger.log("ChatController", "Started streaming message", { messageId: i });
    }
    this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleAssistantComplete(e) {
    this.debugLogger.log("ChatController", "Assistant complete", {
      isStreaming: this.chatStore.isStreaming
    }), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = Date.now(), this.chatStore.setTyping(!1), this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleConnectionEstablished(e) {
    const t = e.data.initial_message;
    t && !this.chatStore.hasMessages && (Ce.setBackendInitialMessage(t), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: Ce.initialMessage === t ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, t = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && t > me.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, me.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
  }
  handleError(e) {
    this.debugLogger.error("ChatController", "Error message received", e.data.message), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1;
    const t = e.data.message || "An error occurred";
    this.chatStore.setError(t);
  }
  /**
   * Set typing indicator with timeout fallback
   * Used when sending messages over HTTP (non-WebSocket)
   */
  setTypingWithTimeout(e = me.TYPING_FALLBACK_TIMEOUT) {
    this.chatStore.setTyping(!0), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.warn("ChatController", "Typing indicator timeout after HTTP send"), this.chatStore.setTyping(!1), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.typingTimeout = null;
    }, e);
  }
  /**
   * Cleanup - call when destroying the component
   */
  cleanup() {
    this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null);
  }
}
var Yf = /* @__PURE__ */ Q('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Qf = /* @__PURE__ */ Q('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Xf = /* @__PURE__ */ Q('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Zf = /* @__PURE__ */ Q('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Kf = /* @__PURE__ */ Q('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Jf = /* @__PURE__ */ Q('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const eg = {
  hash: "svelte-zsv8oa",
  code: `.sr-only.svelte-zsv8oa {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {
    /* Mobile-first: Full-screen takeover */position:fixed;top:0;left:0;width:100%;
    /* Dynamic viewport height - adjusts when mobile keyboard appears */height:100vh;  /* Fallback for older browsers */height:100dvh; /* Modern browsers: updates with keyboard */background:var(--widget-background);border-radius:0;box-shadow:none;border:none;display:flex;flex-direction:column;overflow:hidden;z-index:var(--widget-z-modal);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-modal) - 1);}.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;
    /* Stack text above button */display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);
    /* Prevent overflow on mobile */max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  /* Mobile: ensure banner fits */
  @media (max-width: 480px) {.error-banner.svelte-zsv8oa {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-zsv8oa {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-zsv8oa {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-zsv8oa:hover {background:var(--widget-primary-hover);}.restart-button.svelte-zsv8oa:active {background:var(--widget-primary-dark);}.restart-button.svelte-zsv8oa:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Desktop: Floating widget (≥768px) */
  @media (min-width: 768px) {.chat-container.svelte-zsv8oa {
      /* Floating widget mode */position:absolute;top:auto;left:auto;width:400px;height:600px;max-height:80vh;min-height:450px;bottom:20px;border-radius:var(--widget-radius-xl);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-border);}.widget-container[data-position="bottom-right"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {right:0;transform-origin:bottom right;}.widget-container[data-position="bottom-left"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {left:0;transform-origin:bottom left;}.backdrop.svelte-zsv8oa {display:none;}
  }

  /* Large desktop: Taller widget (≥1200px) */
  @media (min-width: 1200px) {.chat-container.svelte-zsv8oa {height:650px;max-height:85vh;}
  }

  /* Landscape mobile: Full-screen with optimizations */
  @media (max-width: 767px) and (orientation: landscape) {.chat-container.svelte-zsv8oa {
      /* Maintain full-screen but optimize for landscape */width:100%;height:100vh;  /* Fallback */height:100dvh; /* Dynamic viewport for keyboard */}
  }

  /* Portrait: Default full-screen (already handled by base mobile styles) */
  @media (max-width: 767px) and (orientation: portrait) {.chat-container.svelte-zsv8oa {
      /* Full-screen takeover - dynamic height for keyboard */width:100%;height:100vh;  /* Fallback */height:100dvh; /* Dynamic viewport for keyboard */}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .chat-container.svelte-zsv8oa {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-zsv8oa {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function Kl(n, e) {
  jt(e, !0), ln(n, eg);
  let t = it(e, "hostElement", 7), i, s, r, a, o, l;
  const c = At();
  let d = !1, h = !1, g = null, p = /* @__PURE__ */ F(ge(_e.DISCONNECTED)), b = /* @__PURE__ */ F(
    !1
    // Track if max reconnection attempts exhausted
  ), w = /* @__PURE__ */ F(null), m = null;
  function k() {
    var N;
    if ((N = t()) != null && N.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function z(v) {
    const N = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), C = v.querySelectorAll(N);
    if (C.length === 0) return;
    const te = C[0], vt = C[C.length - 1];
    return requestAnimationFrame(() => te.focus()), { firstFocusable: te, lastFocusable: vt };
  }
  function T(v) {
    if (v.key === "Escape" && oe.isOpen) {
      v.preventDefault(), oe.close(), R();
      return;
    }
    if (v.key === "Tab" && x(w)) {
      const N = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), C = x(w).querySelectorAll(N);
      if (C.length === 0) return;
      const te = C[0], vt = C[C.length - 1];
      v.shiftKey && document.activeElement === te ? (v.preventDefault(), vt.focus()) : !v.shiftKey && document.activeElement === vt && (v.preventDefault(), te.focus());
    }
  }
  function _() {
    m = document.activeElement;
  }
  function R() {
    m && typeof m.focus == "function" && requestAnimationFrame(() => m == null ? void 0 : m.focus()), m = null;
  }
  function X() {
    x(w) && z(x(w));
  }
  aa(async () => {
    try {
      if (i = new hu(t()), l = la(i.getAll()), s = new Pr(), r = new Vf(i, s), a = new wu(i, s), o = new Gf(O, oe, l), t()) {
        const { configStore: v } = await Promise.resolve().then(() => tu);
        v.loadFromAttributes(t());
      }
      se(), k(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", we), a.on("stateChange", (v) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: x(p),
          newState: v,
          timestamp: Date.now()
        }), P(p, v, !0);
      }), a.on("error", (v) => {
        l.error("ChatWidget", "WebSocket error event", v), g = v.error, O.setError(v.error);
      }), a.on("connectionFailed", (v) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", v), P(b, !0), g = v.error, O.setError(v.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), oe.isOpen && await B(), t() && typeof t().setOnOpenChangeCallback == "function" && t().setOnOpenChangeCallback((v) => {
        rt(v);
      }), l.log("ChatWidget", "Services initialized successfully");
    } catch (v) {
      l.error("ChatWidget", "Initialization failed", v), g = v instanceof Error ? v.message : "Failed to initialize chat";
    }
  }), _n(() => {
    const v = oe.isOpen;
    if (t()) {
      const N = t().hasAttribute("open");
      v && !N ? t().setAttribute("open", "") : !v && N && t().removeAttribute("open");
    }
  }), Wd(() => {
    const v = r == null ? void 0 : r.getSessionId();
    v && s.markSessionInactive(v), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function B() {
    var v;
    if (!(d || h)) {
      h = !0;
      try {
        if (oe.setLoading(!0), await r.resumeSession()) {
          const C = r.getSessionId();
          C && (await a.connect(C), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            me.CONNECTION_DELAY
          ));
        } else {
          const C = await r.initialize();
          (v = C.assistant_info) != null && v.assistant_name && Ce.setBackendTitle(C.assistant_info.assistant_name), await a.connect(C.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            me.CONNECTION_DELAY
          ), C.settings && he(C.settings);
        }
        d = !0;
      } catch (N) {
        g = N instanceof Error ? N.message : "Failed to initialize", O.setError(g);
      } finally {
        oe.setLoading(!1), h = !1;
      }
    }
  }
  function se() {
    const v = i.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", v.theme || "modern"), v.primary_color || v.accent_color)) {
        const N = v.accent_color || v.primary_color;
        if (N) {
          const C = oa(N, "#6b46c1");
          t().style.setProperty("--widget-primary", C), t().style.setProperty("--widget-primary-hover", gt(C, -20)), t().style.setProperty("--widget-primary-light", gt(C, 20)), t().style.setProperty("--widget-primary-dark", gt(C, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${C} 0%, ${gt(C, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${gt(C, -20)} 0%, ${C} 100%)`);
        }
      }
    });
  }
  function he(v) {
    requestAnimationFrame(() => {
      t() && (v.theme && typeof v.theme == "string" && t().setAttribute("data-theme", v.theme), v.primary_color && typeof v.primary_color == "string" && t().style.setProperty("--widget-primary", v.primary_color));
    });
  }
  function we(v) {
    o.handleMessage(v);
  }
  async function ee(v) {
    const N = c.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: N,
      content: v,
      length: (v == null ? void 0 : v.length) || 0,
      trimmed: (v == null ? void 0 : v.trim()) || "",
      type: typeof v
    });
    const C = O.addMessage(v, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: N,
      messageId: C.id,
      content: C.content,
      length: C.content.length
    }), d || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: N }), await B()), l.log("ChatWidget", "Connection state", {
      correlationId: N,
      connectionState: x(p),
      isConnected: x(p) === _e.CONNECTED,
      routingTo: x(p) === _e.CONNECTED ? "WebSocket" : "HTTP API"
    }), x(p) === _e.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: N, content: v });
      try {
        o.setTypingWithTimeout(), a.send(v), O.updateMessageStatus(C.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: C.id });
      } catch (te) {
        l.error("ChatWidget", "WebSocket send error", te), O.updateMessageStatus(C.id, "failed"), O.setError("Failed to send message. Please try again."), O.setTyping(!1);
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: N, content: v }), o.setTypingWithTimeout();
        const te = await r.sendMessage(v);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: N,
          response: te.response,
          sessionId: te.session_id
        }), O.addMessage(te.response, "assistant"), O.setTyping(!1), oe.isOpen || oe.markUnread();
      } catch (te) {
        l.error("ChatWidget", "HTTP API error", te), g = "Failed to send message. Please try again.", O.setError(g), O.updateMessageStatus(C.id, "failed"), O.setTyping(!1);
      }
  }
  async function rt(v) {
    const N = oe.isOpen;
    N !== v && (l.log("ChatWidget", "Setting open state", { from: N, to: v }), v && !N && !m && _(), v ? oe.open() : oe.close(), await new Promise((C) => setTimeout(C, 0)), v && !d && i && await B(), v ? requestAnimationFrame(() => X()) : R());
  }
  async function Gt() {
    await rt(!oe.isOpen);
  }
  function Yt() {
    O.clearMessages(), O.setError(null), g = null;
  }
  function zn() {
    l.log("ChatWidget", "Manual retry connection requested"), P(b, !1), g = null, O.setError(null), a == null || a.retryConnection();
  }
  const Qt = /* @__PURE__ */ Ae(() => oe.isOpen), qn = /* @__PURE__ */ Ae(() => oe.isLoading), dn = /* @__PURE__ */ Ae(() => (i == null ? void 0 : i.position) || "bottom-right");
  var Ue = {
    get hostElement() {
      return t();
    },
    set hostElement(v) {
      t(v), qe();
    }
  }, at = Jf(), re = J(at);
  {
    var ps = (v) => {
      kl(v, { onclick: Gt });
    };
    Ie(re, (v) => {
      x(Qt) || v(ps);
    });
  }
  var de = ne(re, 2);
  {
    var ms = (v) => {
      var N = Kf(), C = ne(Os(N), 2);
      C.__keydown = T;
      var te = J(C);
      Ml(te, {
        onclose: () => {
          oe.close(), R();
        },
        get connectionState() {
          return x(p);
        },
        get connectionFailed() {
          return x(b);
        }
      });
      var vt = ne(te, 2);
      Xl(vt, { onsend: ee });
      var Un = ne(vt, 2);
      {
        let ue = /* @__PURE__ */ Ae(() => O.error !== null || x(qn)), Fe = /* @__PURE__ */ Ae(() => O.messages.length === 0);
        Zl(Un, {
          onsend: ee,
          get disabled() {
            return x(ue);
          },
          get showBrandBanner() {
            return x(Fe);
          }
        });
      }
      var vs = ne(Un, 2);
      {
        var bs = (ue) => {
          var Fe = Xf(), Oi = J(Fe);
          {
            var Zt = (ot) => {
              var Kt = Yf(), Wn = ne(Os(Kt), 2);
              Wn.__click = zn, j(ot, Kt);
            }, Hn = (ot) => {
              var Kt = Qf(), Wn = ne(Os(Kt), 2);
              Wn.__click = Yt, j(ot, Kt);
            };
            Ie(Oi, (ot) => {
              x(b) ? ot(Zt) : ot(Hn, !1);
            });
          }
          K(Fe), j(ue, Fe);
        };
        Ie(vs, (ue) => {
          O.error && ue(bs);
        });
      }
      K(C), ra(C, (ue) => P(w, ue), () => x(w));
      var Xt = ne(C, 2);
      {
        var Fn = (ue) => {
          var Fe = Zf();
          Fe.__click = () => oe.close(), Wa(3, Fe, () => Yd, () => ({ duration: 200 })), j(ue, Fe);
        };
        Ie(Xt, (ue) => {
          x(Qt) && ue(Fn);
        });
      }
      Wa(3, C, () => Qd, () => ({ y: 20, duration: 300 })), j(v, N);
    };
    Ie(de, (v) => {
      x(Qt) && v(ms);
    });
  }
  return K(at), nt(() => {
    Ot(at, "data-position", x(dn)), Ot(at, "data-theme", Ce.theme);
  }), j(n, at), Vt(Ue);
}
fs(["keydown", "click"]);
cn(Kl, { hostElement: {} }, [], [], !0);
const ma = {
  brand: "generic",
  primary: "#6b46c1",
  primaryHover: "#5a3aa8",
  primaryLight: "#8b5cf6",
  primaryDark: "#4c1d95",
  background: "#ffffff",
  surface: "#f9fafb",
  surfaceHover: "#f3f4f6",
  glass: "rgba(255, 255, 255, 0.85)",
  glassDark: "rgba(249, 250, 251, 0.95)",
  text: "#1f2937",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
}, Wr = {
  brand: "bot-brewers",
  // Bot Brewers Brand Colors (from botbrewers.ca)
  primary: "#1e5ba8",
  // Bot Blue
  primaryHover: "#0f2d5a",
  // Bot Dark Blue
  primaryLight: "#4a7dc4",
  // Lighter blue variant
  primaryDark: "#0f2d5a",
  // Bot Dark Blue
  background: "#faf8f5",
  // Bot Beige
  surface: "#ffffff",
  surfaceHover: "#f7fafc",
  glass: "rgba(250, 248, 245, 0.85)",
  glassDark: "rgba(255, 255, 255, 0.95)",
  // Text colors matched to website
  text: "#0a0a0a",
  // Near black for readability
  textSecondary: "#4a5568",
  // Medium gray
  textMuted: "#718096",
  // Light gray
  textInverse: "#ffffff",
  // Border colors
  border: "#e2e8f0",
  borderLight: "#f1f5f9",
  borderSubtle: "#f8fafc"
};
function tg(n = ma) {
  var e;
  return `/* ============================================
   Premium Design System - ${n.brand === "bot-brewers" ? "Bot Brewers Brand" : "Generic"}
   ============================================ */

:host {
  /* Primary Colors */
  --widget-primary: ${n.primary};
  --widget-primary-hover: ${n.primaryHover};
  --widget-primary-light: ${n.primaryLight};
  --widget-primary-dark: ${n.primaryDark};
  
  /* Gradient System - Blue to Dark Blue for Bot Brewers brand */
  --widget-gradient: linear-gradient(135deg, ${n.primary} 0%, ${n.primaryDark} 100%);
  --widget-gradient-hover: linear-gradient(135deg, ${n.primaryDark} 0%, ${n.primary} 100%);
  --widget-gradient-subtle: linear-gradient(135deg, ${n.primary}1a 0%, ${n.primaryDark}0d 100%);
  
  /* Surface Colors */
  --widget-background: ${n.background};
  --widget-surface: ${n.surface};
  --widget-surface-hover: ${n.surfaceHover};
  --widget-surface-elevated: ${n.surfaceElevated || n.background};
  --widget-glass: ${n.glass};
  --widget-glass-dark: ${n.glassDark};
  --widget-glass-subtle: ${n.glass};
  
  /* Text Colors */
  --widget-text: ${n.text};
  --widget-text-secondary: ${n.textSecondary};
  --widget-text-muted: ${n.textMuted};
  --widget-text-subtle: ${n.textSubtle || n.textMuted};
  --widget-text-inverse: ${n.textInverse};
  
  /* Semantic Colors */
  --widget-success: #10b981;
  --widget-success-light: #34d399;
  --widget-error: #ef4444;
  --widget-error-light: #f87171;
  --widget-warning: #f59e0b;
  --widget-info: #3b82f6;

  /* Accent Colors - Bot Gold (from botbrewers.ca) */
  --widget-accent: #f4a932;
  --widget-accent-light: #fbbf24;
  --widget-accent-dark: #d97706;
  --widget-accent-gold: #d4a574;   /* Warm gold accent for dark mode focus states */
  --widget-accent-gold-rgb: 212, 165, 116;  /* RGB values for opacity control */

  /* Borders - Theme-aware for dark/light mode */
  --widget-border: ${n.border || (n.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${n.borderLight || (n.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${n.borderSubtle || (n.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  /* Primary RGB for glow effects */
  --widget-primary-rgb: ${((e = n.primary.replace("#", "").match(/.{2}/g)) == null ? void 0 : e.map((t) => parseInt(t, 16)).join(", ")) || "30, 91, 168"};

  /* Shadows - Multi-layer for realistic depth (2025 standard) */
  --widget-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04);
  --widget-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04);
  --widget-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.04);
  --widget-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 20px 25px -5px rgba(0, 0, 0, 0.08);
  --widget-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 40px 50px -12px rgba(0, 0, 0, 0.10);
  --widget-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.20);
  --widget-shadow-inner: inset 0 1px 3px rgba(0, 0, 0, 0.06);
  --widget-shadow-focus: 0 0 0 3px rgba(var(--widget-primary-rgb), 0.15);
  --widget-shadow-button: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
  --widget-shadow-card: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);

  /* Glow shadows for interactive elements */
  --widget-shadow-glow: 0 0 0 1px rgba(var(--widget-primary-rgb), 0.08), 0 4px 12px rgba(var(--widget-primary-rgb), 0.12);
  --widget-shadow-glow-lg: 0 0 0 1px rgba(var(--widget-primary-rgb), 0.10), 0 8px 24px rgba(var(--widget-primary-rgb), 0.18);
  
  /* Spacing */
  --widget-space-xs: 0.25rem;
  --widget-space-sm: 0.5rem;
  --widget-space: 0.75rem;
  --widget-space-md: 1rem;
  --widget-space-lg: 1.5rem;
  --widget-space-xl: 2rem;
  --widget-space-2xl: 3rem;
  --widget-space-3xl: 4rem;

  /* Widget Dimensions (2025 Best Practices) */
  --widget-width-mobile: 100%;
  --widget-height-mobile: 100%;
  --widget-width-desktop: 400px;
  --widget-height-desktop: 600px;
  --widget-height-desktop-lg: 650px;
  --widget-max-height-desktop: 80vh;
  --widget-max-height-desktop-lg: 85vh;
  --widget-min-height-desktop: 450px;

  /* Touch Targets (WCAG 2.1 AA) */
  --widget-touch-target-min: 44px;
  
  /* Border Radius */
  --widget-radius-sm: 0.375rem;
  --widget-radius: 0.5rem;
  --widget-radius-md: 0.75rem;
  --widget-radius-lg: 1rem;
  --widget-radius-xl: 1.5rem;
  --widget-radius-2xl: 2rem;
  --widget-radius-full: 9999px;
  
  /* Typography */
  --widget-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'SF Pro Display', 'Inter', sans-serif;
  --widget-font-size-xs: 0.75rem;
  --widget-font-size-sm: 0.875rem;
  --widget-font-size-base: 0.9375rem;
  --widget-font-size-md: 1rem;
  --widget-font-size-lg: 1.125rem;
  --widget-font-size-xl: 1.25rem;
  --widget-font-size-2xl: 1.5rem;
  --widget-font-size-3xl: 1.875rem;
  
  /* Font Weights */
  --widget-font-weight-light: 300;
  --widget-font-weight-normal: 400;
  --widget-font-weight-medium: 500;
  --widget-font-weight-semibold: 600;
  --widget-font-weight-bold: 700;
  
  /* Line Heights */
  --widget-line-height-none: 1;
  --widget-line-height-tight: 1.25;
  --widget-line-height-snug: 1.375;
  --widget-line-height-normal: 1.5;
  --widget-line-height-relaxed: 1.625;
  --widget-line-height-loose: 2;
  
  /* Letter Spacing */
  --widget-letter-spacing-tighter: -0.05em;
  --widget-letter-spacing-tight: -0.025em;
  --widget-letter-spacing-normal: 0em;
  --widget-letter-spacing-wide: 0.025em;
  
  /* Z-Index */
  --widget-z-dropdown: 1000;
  --widget-z-sticky: 1020;
  --widget-z-fixed: 1030;
  --widget-z-modal-backdrop: 1040;
  --widget-z-modal: 1050;
  --widget-z-popover: 1060;
  --widget-z-tooltip: 1070;
  --widget-z-base: 1060;
  
  /* Blur Effects - Enhanced for glassmorphism */
  --widget-blur-sm: 8px;
  --widget-blur: 12px;
  --widget-blur-md: 16px;
  --widget-blur-lg: 24px;
  --widget-blur-xl: 32px;

  /* Logo Filter - Theme-aware brightness adjustment */
  --widget-logo-filter: ${n.isDark ? "brightness(1.1)" : "brightness(1)"};

  /* Glassmorphism Enhancement */
  --widget-glass-border: 1px solid rgba(255, 255, 255, 0.18);
  --widget-glass-border-dark: 1px solid rgba(255, 255, 255, 0.08);
  --widget-glass-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.1);

  /* Transitions - Subtle and professional */
  --widget-transition-fast: 0.15s ease;
  --widget-transition: 0.2s ease;
  --widget-transition-slow: 0.3s ease;

  /* Spring Physics Easings - Subtle, not bouncy */
  --widget-ease-spring: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --widget-ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --widget-ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
}

/* Animation keyframes */
@keyframes widget-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes widget-slide-up {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes widget-bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes widget-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes widget-typing-dots {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

@keyframes modernTyping {
  0%, 60%, 100% {
    transform: translateY(0) scale(1);
  }
  30% {
    transform: translateY(-2px) scale(1.1);
  }
}

/* 2025 Subtle Message Animation - Fade + slight slide */
@keyframes messageFadeIn {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Refined Typing Indicator - Gentle pulse, not bouncy */
@keyframes typingPulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

/* Subtle button press feedback */
@keyframes buttonPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.97); }
  100% { transform: scale(1); }
}

/* Floating button subtle attention */
@keyframes floatPulse {
  0%, 100% {
    box-shadow: var(--widget-shadow-lg);
  }
  50% {
    box-shadow: var(--widget-shadow-glow-lg);
  }
}

/* Animation aliases for compatibility */
@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Base utility classes for consistent styling */
.widget-glass-morphism {
  background: var(--widget-glass);
  backdrop-filter: blur(var(--widget-blur-lg));
  -webkit-backdrop-filter: blur(var(--widget-blur-lg));
  border: var(--widget-glass-border);
  box-shadow: var(--widget-glass-highlight);
}

.widget-glass-morphism-subtle {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(var(--widget-blur));
  -webkit-backdrop-filter: blur(var(--widget-blur));
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.widget-premium-gradient {
  background: var(--widget-gradient);
}

.widget-premium-shadow {
  box-shadow: var(--widget-shadow-lg);
}

.widget-hover-lift {
  transition: transform var(--widget-transition) var(--widget-ease-spring),
              box-shadow var(--widget-transition) var(--widget-ease-spring);
}

.widget-hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--widget-shadow-xl);
}

.widget-hover-glow {
  transition: box-shadow var(--widget-transition) var(--widget-ease-spring);
}

.widget-hover-glow:hover {
  box-shadow: var(--widget-shadow-glow);
}

/* Enhanced focus-visible for accessibility */
.widget-focus-ring:focus-visible {
  outline: 2px solid var(--widget-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(var(--widget-primary-rgb), 0.15);
}

.widget-focus-ring:focus:not(:focus-visible) {
  outline: none;
}

.widget-text-gradient {
  background: var(--widget-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtle animation utilities */
.widget-animate-in {
  animation: messageFadeIn 0.25s var(--widget-ease-out-expo) forwards;
}

.widget-animate-pulse {
  animation: typingPulse 1.2s ease-in-out infinite;
}

/* Responsive design utilities */
@media (max-width: 768px) {
  :host {
    --widget-space-xs: 0.125rem;
    --widget-space-sm: 0.375rem;
    --widget-space-md: 0.75rem;
    --widget-space-lg: 1rem;
    --widget-space-xl: 1.25rem;
    --widget-space-2xl: 1.75rem;
  }
}

/* ============================================
   Progressive Enhancement for Performance
   ============================================

   backdrop-filter can be expensive on lower-end devices.
   These rules provide graceful degradation:
   1. Reduced motion preference: Disables blur effects
   2. Fallback: Solid backgrounds when blur not supported
   ============================================ */

/* Disable backdrop-filter for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .widget-glass-morphism,
  .widget-glass-morphism-subtle {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(1px)) {
  .widget-glass-morphism {
    background: var(--widget-glass-dark);
  }

  .widget-glass-morphism-subtle {
    background: rgba(255, 255, 255, 0.92);
  }
}`;
}
function ng(n = ma) {
  return tg(n);
}
const Jl = {
  brand: "bot-brewers",
  primary: "#1e5ba8",
  // Bot Blue
  primaryHover: "#0f2d5a",
  // Bot Dark Blue
  primaryLight: "#4a7dc4",
  // Lighter blue variant
  primaryDark: "#0f2d5a",
  // Bot Dark Blue
  background: "#ffffff",
  // Pure white background
  surface: "#fafafa",
  surfaceHover: "#f5f5f5",
  glass: "rgba(255, 255, 255, 0.98)",
  glassDark: "rgba(250, 250, 250, 0.95)",
  text: "#0f172a",
  textSecondary: "#475569",
  textMuted: "#64748b",
  textInverse: "#ffffff"
}, fo = Jl, go = {
  brand: "generic",
  primary: "#f97316",
  primaryHover: "#ea580c",
  primaryLight: "#fb923c",
  primaryDark: "#c2410c",
  background: "#fffbf5",
  surface: "#fff7ed",
  surfaceHover: "#fed7aa",
  glass: "rgba(255, 251, 245, 0.95)",
  glassDark: "rgba(255, 247, 237, 0.95)",
  text: "#1f2937",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
}, ig = {
  brand: "generic",
  primary: "#6b7280",
  primaryHover: "#4b5563",
  primaryLight: "#9ca3af",
  primaryDark: "#374151",
  background: "#ffffff",
  surface: "#f9fafb",
  surfaceHover: "#f3f4f6",
  glass: "rgba(255, 255, 255, 0.95)",
  glassDark: "rgba(249, 250, 251, 0.95)",
  text: "#111827",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
}, sg = {
  brand: "bot-brewers",
  primary: "#f4a932",
  // Bot Gold - warm primary for dark mode
  primaryHover: "#d4a574",
  // Warm gold on hover
  primaryLight: "#fbbf24",
  // Bright gold for highlights
  primaryDark: "#b8860b",
  // Dark gold for depth
  background: "#0a0e14",
  // Deep dark (unchanged)
  surface: "#13181f",
  // Base surface
  surfaceHover: "#1a2029",
  // Hover state
  glass: "rgba(19, 24, 31, 0.65)",
  // Was 0.85
  glassDark: "rgba(26, 32, 41, 0.70)",
  // Was 0.90
  text: "#e6e8eb",
  // Primary (~13:1) - unchanged
  textSecondary: "#b0b5bc",
  // IMPROVED (~9.5:1, was #9da2a9)
  textMuted: "#8b9199",
  // IMPROVED (~6:1, was #6b7280)
  textInverse: "#0a0e14",
  // Dark text on gold buttons for contrast
  isDark: !0,
  border: "#252b34",
  // Solid neutral (was gold rgba)
  borderLight: "#363d47",
  // Medium gray
  borderSubtle: "#1c2128"
  // Very subtle
}, rg = {
  brand: "generic",
  primary: "#14b8a6",
  primaryHover: "#0d9488",
  primaryLight: "#2dd4bf",
  primaryDark: "#0f766e",
  background: "#fafafa",
  surface: "#f0fdfa",
  surfaceHover: "#ccfbf1",
  glass: "rgba(250, 250, 250, 0.95)",
  glassDark: "rgba(240, 253, 250, 0.95)",
  text: "#134e4a",
  textSecondary: "#0f766e",
  textMuted: "#14b8a6",
  textInverse: "#ffffff"
}, ag = {
  brand: "generic",
  primary: "#dc2626",
  primaryHover: "#b91c1c",
  primaryLight: "#ef4444",
  primaryDark: "#991b1b",
  background: "#ffffff",
  surface: "#fef2f2",
  surfaceHover: "#fee2e2",
  glass: "rgba(255, 255, 255, 0.95)",
  glassDark: "rgba(254, 242, 242, 0.95)",
  text: "#1f2937",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  textInverse: "#ffffff"
};
function og(n) {
  return {
    "bot-brewers": Wr,
    modern: Jl,
    professional: fo,
    corporate: fo,
    // Alias for backward compatibility
    friendly: go,
    playful: go,
    // Alias
    minimal: ig,
    dark: sg,
    elegant: rg,
    bold: ag,
    generic: ma,
    default: Wr
  }[n.toLowerCase()] || null;
}
class ho extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open"];
  }
  async connectedCallback() {
    var s, r;
    const e = this.getAttribute("client-id"), t = window, i = ((s = t.AIChat) == null ? void 0 : s.clientId) || ((r = t.ChatWidget) == null ? void 0 : r.clientId);
    if (!e && !i) {
      Y.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Or(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i) {
      if ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, Ce.updateConfig({ theme: i }, "user"), this.updateStyles()), e === "accent-color" && i && this.updateAccentColor(i), e === "client-id" && i && this._app && (Y.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), Or(this._app), this._app = null, this.mountApp()), e === "title" && i && Ce.setUserTitle(i), e === "initial-message" && Ce.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions")
        if (i)
          try {
            const s = JSON.parse(i);
            Array.isArray(s) ? Ce.setQuickQuestions(s) : Y.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            Y.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          Ce.setQuickQuestions(void 0);
      if (e === "open") {
        const s = i !== null;
        this._onOpenChangeCallback ? this._onOpenChangeCallback(s) : this._pendingOpenState = s;
      }
    }
  }
  setOnOpenChangeCallback(e) {
    this._onOpenChangeCallback = e, this._pendingOpenState !== null && (e(this._pendingOpenState), this._pendingOpenState = null);
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const t = document.createElement("div");
    t.className = "widget-root";
    const i = document.createElement("style");
    i.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = ia(Kl, {
      target: t,
      props: {
        hostElement: this
      }
    });
  }
  getStyles() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || this._currentTheme;
    return this.getThemeStyles(e);
  }
  getThemeStyles(e) {
    const t = og(e) || Wr;
    return ng(t);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const t = this._shadowRoot.querySelector(".widget-root");
    t && Promise.resolve().then(() => Jd).then(({ adjustColor: i }) => {
      t.style.setProperty("--widget-primary", e), t.style.setProperty("--widget-primary-hover", i(e, -20)), t.style.setProperty("--widget-primary-light", i(e, 20)), t.style.setProperty("--widget-primary-dark", i(e, -30));
    });
  }
  // Public API methods for programmatic control
  open() {
    this.setAttribute("open", ""), queueMicrotask(() => {
      this.dispatchEvent(new CustomEvent("opening", { bubbles: !0, composed: !0 }));
    });
  }
  close() {
    this.removeAttribute("open"), queueMicrotask(() => {
      this.dispatchEvent(new CustomEvent("closing", { bubbles: !0, composed: !0 }));
    });
  }
  toggle() {
    this.hasAttribute("open") ? this.close() : this.open();
  }
  get isOpen() {
    return this.hasAttribute("open");
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", ho) : customElements.define("assistant-widget", ho);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", po) : po();
function po() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const n = window, e = n.AIChat || n.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      Y.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const t = document.createElement("assistant-widget");
    document.body.appendChild(t), Y.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  ho as ChatWidgetElement
};
