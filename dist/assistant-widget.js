var cc = Object.defineProperty;
var La = (n) => {
  throw TypeError(n);
};
var dc = (n, e, t) => e in n ? cc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var L = (n, e, t) => dc(n, typeof e != "symbol" ? e + "" : e, t), dr = (n, e, t) => e.has(n) || La("Cannot " + t);
var f = (n, e, t) => (dr(n, e, "read from private field"), t ? t.call(n) : e.get(n)), I = (n, e, t) => e.has(n) ? La("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), E = (n, e, t, i) => (dr(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), X = (n, e, t) => (dr(n, e, "access private method"), t);
var vo = Array.isArray, uc = Array.prototype.indexOf, Ys = Array.from, $s = Object.keys, Ps = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, bo = Object.getOwnPropertyDescriptors, fc = Object.prototype, gc = Array.prototype, Br = Object.getPrototypeOf, Oa = Object.isExtensible;
function hc(n) {
  return typeof n == "function";
}
const $i = () => {
};
function pc(n) {
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
const ke = 2, jr = 4, Qs = 8, mc = 1 << 24, Dt = 16, Bt = 32, an = 64, Xs = 128, ht = 512, Ee = 1024, Ye = 2048, Lt = 4096, Ge = 8192, Wt = 16384, ls = 32768, En = 65536, Da = 1 << 17, yo = 1 << 18, On = 1 << 19, xo = 1 << 20, Ft = 1 << 25, An = 32768, xr = 1 << 21, Vr = 1 << 22, sn = 1 << 23, xn = Symbol("$state"), ko = Symbol("legacy props"), vc = Symbol(""), Qn = new class extends Error {
  constructor() {
    super(...arguments);
    L(this, "name", "StaleReactionError");
    L(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Gr = 3, Dn = 8;
function _o(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function bc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function wc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function yc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _c() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ec() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ac() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ic() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Cc = 1, Mc = 2, To = 4, Rc = 8, Lc = 16, Oc = 1, Dc = 2, Nc = 4, $c = 8, Pc = 16, zc = 4, qc = 1, Uc = 2, So = "[", Zs = "[!", Yr = "]", In = {}, Te = Symbol(), Fc = "http://www.w3.org/1999/xhtml";
function cs(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Hc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let U = !1;
function Ht(n) {
  U = n;
}
let P;
function Le(n) {
  if (n === null)
    throw cs(), In;
  return P = n;
}
function Si() {
  return Le(/* @__PURE__ */ mt(P));
}
function te(n) {
  if (U) {
    if (/* @__PURE__ */ mt(P) !== null)
      throw cs(), In;
    P = n;
  }
}
function Qr(n = 1) {
  if (U) {
    for (var e = n, t = P; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ mt(t);
    P = t;
  }
}
function zs(n = !0) {
  for (var e = 0, t = P; ; ) {
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
      /* @__PURE__ */ mt(t)
    );
    n && t.remove(), t = s;
  }
}
function Eo(n) {
  if (!n || n.nodeType !== Dn)
    throw cs(), In;
  return (
    /** @type {Comment} */
    n.data
  );
}
function Ao(n) {
  return n === this.v;
}
function Wc(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Io(n) {
  return !Wc(n, this.v);
}
let Ri = !1;
function Bc() {
  Ri = !0;
}
let ae = null;
function Ei(n) {
  ae = n;
}
function jt(n, e = !1, t) {
  ae = {
    p: ae,
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
    ae
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Qo(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ae = e.p, n ?? /** @type {T} */
  {};
}
function ds() {
  return !Ri || ae !== null && ae.l === null;
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
function jc() {
  for (; gn.length > 0; )
    Co();
}
function Mo(n) {
  var e = W;
  if (e === null)
    return F.f |= sn, n;
  if (e.f & ls)
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
const Ts = /* @__PURE__ */ new Set();
let z = null, Rs = null, ue = null, et = [], Ks = null, kr = !1, Gi = !1;
var Jn, ei, hn, pn, ss, ti, ni, xe, _r, Wi, Tr, Ro, Lo;
const js = class js {
  constructor() {
    I(this, xe);
    L(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    L(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    L(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    I(this, Jn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, ei, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, hn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, pn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, ss, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, ti, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, ni, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    L(this, "skipped_effects", /* @__PURE__ */ new Set());
    L(this, "is_fork", !1);
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
    et = [], Rs = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const s of e)
      X(this, xe, _r).call(this, s, t);
    this.is_fork || X(this, xe, Ro).call(this), this.is_deferred() ? (X(this, xe, Wi).call(this, t.effects), X(this, xe, Wi).call(this, t.render_effects)) : (Rs = this, z = null, Na(t.render_effects), Na(t.effects), Rs = null, (i = f(this, ss)) == null || i.resolve()), ue = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & sn || (this.current.set(e, e.v), ue == null || ue.set(e, e.v));
  }
  activate() {
    z = this, this.apply();
  }
  deactivate() {
    z === this && (z = null, ue = null);
  }
  flush() {
    if (this.activate(), et.length > 0) {
      if (Oo(), z !== null && z !== this)
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
    E(this, hn, f(this, hn) + 1), e && E(this, pn, f(this, pn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    E(this, hn, f(this, hn) - 1), e && E(this, pn, f(this, pn) - 1), this.revive();
  }
  revive() {
    for (const e of f(this, ti))
      f(this, ni).delete(e), Ae(e, Ye), Cn(e);
    for (const e of f(this, ni))
      Ae(e, Lt), Cn(e);
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
    return (f(this, ss) ?? E(this, ss, wo())).promise;
  }
  static ensure() {
    if (z === null) {
      const e = z = new js();
      Ts.add(z), Gi || js.enqueue(() => {
        z === e && e.flush();
      });
    }
    return z;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Nn(e);
  }
  apply() {
  }
};
Jn = new WeakMap(), ei = new WeakMap(), hn = new WeakMap(), pn = new WeakMap(), ss = new WeakMap(), ti = new WeakMap(), ni = new WeakMap(), xe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
_r = function(e, t) {
  var d;
  e.f ^= Ee;
  for (var i = e.first; i !== null; ) {
    var s = i.f, r = (s & (Bt | an)) !== 0, a = r && (s & Ee) !== 0, o = a || (s & Ge) !== 0 || this.skipped_effects.has(i);
    if (i.f & Xs && ((d = i.b) != null && d.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      r ? i.f ^= Ee : s & jr ? t.effects.push(i) : fs(i) && (i.f & Dt && f(this, ti).add(i), ns(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (X(this, xe, Wi).call(this, t.effects), X(this, xe, Wi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Wi = function(e) {
  for (const t of e)
    t.f & Ye ? f(this, ti).add(t) : t.f & Lt && f(this, ni).add(t), X(this, xe, Tr).call(this, t.deps), Ae(t, Ee);
}, /**
 * @param {Value[] | null} deps
 */
Tr = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & ke) || !(t.f & An) || (t.f ^= An, X(this, xe, Tr).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, Ro = function() {
  if (f(this, pn) === 0) {
    for (const e of f(this, Jn)) e();
    f(this, Jn).clear();
  }
  f(this, hn) === 0 && X(this, xe, Lo).call(this);
}, Lo = function() {
  var r;
  if (Ts.size > 1) {
    this.previous.clear();
    var e = ue, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Ts) {
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
        var s = et;
        et = [];
        const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const h of o)
          Do(h, l, c, d);
        if (et.length > 0) {
          z = a, a.apply();
          for (const h of et)
            X(r = a, xe, _r).call(r, h, i);
          a.deactivate();
        }
        et = s;
      }
    }
    z = null, ue = e;
  }
  this.committed = !0, Ts.delete(this);
};
let Et = js;
function ye(n) {
  var e = Gi;
  Gi = !0;
  try {
    for (var t; ; ) {
      if (jc(), et.length === 0 && (z == null || z.flush(), et.length === 0))
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
  kr = !0;
  var e = null;
  try {
    var t = 0;
    for (Us(!0); et.length > 0; ) {
      var i = Et.ensure();
      if (t++ > 1e3) {
        var s, r;
        Vc();
      }
      i.process(et), rn.clear();
    }
  } finally {
    kr = !1, Us(n), Ks = null;
  }
}
function Vc() {
  try {
    kc();
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
      if (!(i.f & (Wt | Ge)) && fs(i) && (ct = /* @__PURE__ */ new Set(), ns(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Jo(i) : i.fn = null), (ct == null ? void 0 : ct.size) > 0)) {
        rn.clear();
        for (const s of ct) {
          if (s.f & (Wt | Ge)) continue;
          const r = [s];
          let a = s.parent;
          for (; a !== null; )
            ct.has(a) && (ct.delete(a), r.push(a)), a = a.parent;
          for (let o = r.length - 1; o >= 0; o--) {
            const l = r[o];
            l.f & (Wt | Ge) || ns(l);
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
      r & ke ? Do(
        /** @type {Derived} */
        s,
        e,
        t,
        i
      ) : r & (Vr | Dt) && !(r & Ye) && No(s, e, i) && (Ae(s, Ye), Cn(
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
      if (s.f & ke && No(
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
    if (kr && e === W && t & Dt && !(t & yo))
      return;
    if (t & (an | Bt)) {
      if (!(t & Ee)) return;
      e.f ^= Ee;
    }
  }
  et.push(e);
}
function Gc(n) {
  let e = 0, t = Mn(0), i;
  return () => {
    es() && (w(t), Js(() => (e === 0 && (i = on(() => n(() => Yi(t)))), e += 1, () => {
      Nn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, Yi(t));
      });
    })));
  };
}
var Yc = En | On | Xs;
function Qc(n, e, t) {
  new Xc(n, e, t);
}
var Ze, Be, rs, kt, mn, _t, Ke, ze, Tt, zt, en, vn, tn, bn, nn, Vs, fe, $o, Po, Sr, Ls, Os, Er;
class Xc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    I(this, fe);
    /** @type {Boundary | null} */
    L(this, "parent");
    I(this, Ze, !1);
    /** @type {TemplateNode} */
    I(this, Be);
    /** @type {TemplateNode | null} */
    I(this, rs, U ? P : null);
    /** @type {BoundaryProps} */
    I(this, kt);
    /** @type {((anchor: Node) => void)} */
    I(this, mn);
    /** @type {Effect} */
    I(this, _t);
    /** @type {Effect | null} */
    I(this, Ke, null);
    /** @type {Effect | null} */
    I(this, ze, null);
    /** @type {Effect | null} */
    I(this, Tt, null);
    /** @type {DocumentFragment | null} */
    I(this, zt, null);
    /** @type {TemplateNode | null} */
    I(this, en, null);
    I(this, vn, 0);
    I(this, tn, 0);
    I(this, bn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, nn, null);
    I(this, Vs, Gc(() => (E(this, nn, Mn(f(this, vn))), () => {
      E(this, nn, null);
    })));
    E(this, Be, e), E(this, kt, t), E(this, mn, i), this.parent = /** @type {Effect} */
    W.b, E(this, Ze, !!f(this, kt).pending), E(this, _t, ea(() => {
      if (W.b = this, U) {
        const r = f(this, rs);
        Si(), /** @type {Comment} */
        r.nodeType === Dn && /** @type {Comment} */
        r.data === Zs ? X(this, fe, Po).call(this) : X(this, fe, $o).call(this);
      } else {
        var s = X(this, fe, Sr).call(this);
        try {
          E(this, Ke, tt(() => i(s)));
        } catch (r) {
          this.error(r);
        }
        f(this, tn) > 0 ? X(this, fe, Os).call(this) : E(this, Ze, !1);
      }
      return () => {
        var r;
        (r = f(this, en)) == null || r.remove();
      };
    }, Yc)), U && E(this, Be, P);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, Ze) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, kt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    X(this, fe, Er).call(this, e), E(this, vn, f(this, vn) + e), f(this, nn) && Ii(f(this, nn), f(this, vn));
  }
  get_effect_pending() {
    return f(this, Vs).call(this), w(
      /** @type {Source<number>} */
      f(this, nn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = f(this, kt).onerror;
    let i = f(this, kt).failed;
    if (f(this, bn) || !t && !i)
      throw e;
    f(this, Ke) && (Oe(f(this, Ke)), E(this, Ke, null)), f(this, ze) && (Oe(f(this, ze)), E(this, ze, null)), f(this, Tt) && (Oe(f(this, Tt)), E(this, Tt, null)), U && (Le(
      /** @type {TemplateNode} */
      f(this, rs)
    ), Qr(), Le(zs()));
    var s = !1, r = !1;
    const a = () => {
      if (s) {
        Hc();
        return;
      }
      s = !0, r && Ic(), Et.ensure(), E(this, vn, 0), f(this, Tt) !== null && _n(f(this, Tt), () => {
        E(this, Tt, null);
      }), E(this, Ze, this.has_pending_snippet()), E(this, Ke, X(this, fe, Ls).call(this, () => (E(this, bn, !1), tt(() => f(this, mn).call(this, f(this, Be)))))), f(this, tn) > 0 ? X(this, fe, Os).call(this) : E(this, Ze, !1);
    };
    var o = F;
    try {
      Ue(null), r = !0, t == null || t(e, a), r = !1;
    } catch (l) {
      Ai(l, f(this, _t) && f(this, _t).parent);
    } finally {
      Ue(o);
    }
    i && Nn(() => {
      E(this, Tt, X(this, fe, Ls).call(this, () => {
        Et.ensure(), E(this, bn, !0);
        try {
          return tt(() => {
            i(
              f(this, Be),
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
          E(this, bn, !1);
        }
      }));
    });
  }
}
Ze = new WeakMap(), Be = new WeakMap(), rs = new WeakMap(), kt = new WeakMap(), mn = new WeakMap(), _t = new WeakMap(), Ke = new WeakMap(), ze = new WeakMap(), Tt = new WeakMap(), zt = new WeakMap(), en = new WeakMap(), vn = new WeakMap(), tn = new WeakMap(), bn = new WeakMap(), nn = new WeakMap(), Vs = new WeakMap(), fe = new WeakSet(), $o = function() {
  try {
    E(this, Ke, tt(() => f(this, mn).call(this, f(this, Be))));
  } catch (e) {
    this.error(e);
  }
  E(this, Ze, !1);
}, Po = function() {
  const e = f(this, kt).pending;
  e && (E(this, ze, tt(() => e(f(this, Be)))), Et.enqueue(() => {
    var t = X(this, fe, Sr).call(this);
    E(this, Ke, X(this, fe, Ls).call(this, () => (Et.ensure(), tt(() => f(this, mn).call(this, t))))), f(this, tn) > 0 ? X(this, fe, Os).call(this) : (_n(
      /** @type {Effect} */
      f(this, ze),
      () => {
        E(this, ze, null);
      }
    ), E(this, Ze, !1));
  }));
}, Sr = function() {
  var e = f(this, Be);
  return f(this, Ze) && (E(this, en, nt()), f(this, Be).before(f(this, en)), e = f(this, en)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Ls = function(e) {
  var t = W, i = F, s = ae;
  Ot(f(this, _t)), Ue(f(this, _t)), Ei(f(this, _t).ctx);
  try {
    return e();
  } catch (r) {
    return Mo(r), null;
  } finally {
    Ot(t), Ue(i), Ei(s);
  }
}, Os = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, kt).pending
  );
  f(this, Ke) !== null && (E(this, zt, document.createDocumentFragment()), f(this, zt).append(
    /** @type {TemplateNode} */
    f(this, en)
  ), nl(f(this, Ke), f(this, zt))), f(this, ze) === null && E(this, ze, tt(() => e(f(this, Be))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Er = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && X(t = this.parent, fe, Er).call(t, e);
    return;
  }
  E(this, tn, f(this, tn) + e), f(this, tn) === 0 && (E(this, Ze, !1), f(this, ze) && _n(f(this, ze), () => {
    E(this, ze, null);
  }), f(this, zt) && (f(this, Be).before(f(this, zt)), E(this, zt, null)));
};
function Zc(n, e, t, i) {
  const s = ds() ? us : Xr;
  if (t.length === 0 && n.length === 0) {
    i(e.map(s));
    return;
  }
  var r = z, a = (
    /** @type {Effect} */
    W
  ), o = Kc();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ Jc(c))).then((c) => {
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
function Kc() {
  var n = W, e = F, t = ae, i = z;
  return function(r = !0) {
    Ot(n), Ue(e), Ei(t), r && (i == null || i.activate());
  };
}
function qs() {
  Ot(null), Ue(null), Ei(null);
}
// @__NO_SIDE_EFFECTS__
function us(n) {
  var e = ke | Ye, t = F !== null && F.f & ke ? (
    /** @type {Derived} */
    F
  ) : null;
  return W !== null && (W.f |= On), {
    ctx: ae,
    deps: null,
    effects: null,
    equals: Ao,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Te
    ),
    wv: 0,
    parent: t ?? W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Jc(n, e) {
  let t = (
    /** @type {Effect | null} */
    W
  );
  t === null && bc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), r = Mn(
    /** @type {V} */
    Te
  ), a = !F, o = /* @__PURE__ */ new Map();
  return cd(() => {
    var g;
    var l = wo();
    s = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === z && c.committed && c.deactivate(), qs();
      });
    } catch (p) {
      l.reject(p), qs();
    }
    var c = (
      /** @type {Batch} */
      z
    );
    if (a) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), (g = o.get(c)) == null || g.reject(Qn), o.delete(c), o.set(c, l);
    }
    const h = (p, v = void 0) => {
      if (c.activate(), v)
        v !== Qn && (r.f |= sn, Ii(r, v));
      else {
        r.f & sn && (r.f ^= sn), Ii(r, p);
        for (const [k, m] of o) {
          if (o.delete(k), k === c) break;
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
function be(n) {
  const e = /* @__PURE__ */ us(n);
  return il(e), e;
}
// @__NO_SIDE_EFFECTS__
function Xr(n) {
  const e = /* @__PURE__ */ us(n);
  return e.equals = Io, e;
}
function zo(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Oe(
        /** @type {Effect} */
        e[t]
      );
  }
}
function ed(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & ke))
      return e.f & Wt ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Zr(n) {
  var e, t = W;
  Ot(ed(n));
  try {
    n.f &= ~An, zo(n), e = ol(n);
  } finally {
    Ot(t);
  }
  return e;
}
function qo(n) {
  var e = Zr(n);
  if (n.equals(e) || (z != null && z.is_fork || (n.v = e), n.wv = rl()), !$n)
    if (ue !== null)
      (es() || z != null && z.is_fork) && ue.set(n, e);
    else {
      var t = n.f & ht ? Ee : Lt;
      Ae(n, t);
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
function H(n, e) {
  const t = Mn(n);
  return il(t), t;
}
// @__NO_SIDE_EFFECTS__
function Fo(n, e = !1, t = !0) {
  var s;
  const i = Mn(n);
  return e || (i.equals = Io), Ri && t && ae !== null && ae.l !== null && ((s = ae.l).s ?? (s.s = [])).push(i), i;
}
function q(n, e, t = !1) {
  F !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!At || F.f & Da) && ds() && F.f & (ke | Dt | Vr | Da) && !(De != null && De.includes(n)) && Ac();
  let i = t ? me(e) : e;
  return Ii(n, i);
}
function Ii(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    $n ? rn.set(n, e) : rn.set(n, t), n.v = e;
    var i = Et.ensure();
    i.capture(n, t), n.f & ke && (n.f & Ye && Zr(
      /** @type {Derived} */
      n
    ), Ae(n, n.f & ht ? Ee : Lt)), n.wv = rl(), Ho(n, Ye), ds() && W !== null && W.f & Ee && !(W.f & (Bt | an)) && (Xe === null ? ud([n]) : Xe.push(n)), !i.is_fork && Ar.size > 0 && !Uo && td();
  }
  return e;
}
function td() {
  Uo = !1;
  var n = Tn;
  Us(!0);
  const e = Array.from(Ar);
  try {
    for (const t of e)
      t.f & Ee && Ae(t, Lt), fs(t) && ns(t);
  } finally {
    Us(n);
  }
  Ar.clear();
}
function Yi(n) {
  q(n, n.v + 1);
}
function Ho(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = ds(), s = t.length, r = 0; r < s; r++) {
      var a = t[r], o = a.f;
      if (!(!i && a === W)) {
        var l = (o & Ye) === 0;
        if (l && Ae(a, e), o & ke) {
          var c = (
            /** @type {Derived} */
            a
          );
          ue == null || ue.delete(c), o & An || (o & ht && (a.f |= An), Ho(c, Lt));
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
function me(n) {
  if (typeof n != "object" || n === null || xn in n)
    return n;
  const e = Br(n);
  if (e !== fc && e !== gc)
    return n;
  var t = /* @__PURE__ */ new Map(), i = vo(n), s = /* @__PURE__ */ H(0), r = Sn, a = (o) => {
    if (Sn === r)
      return o();
    var l = F, c = Sn;
    Ue(null), qa(r);
    var d = o();
    return Ue(l), qa(c), d;
  };
  return i && t.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Sc();
        var d = t.get(l);
        return d === void 0 ? d = a(() => {
          var h = /* @__PURE__ */ H(c.value);
          return t.set(l, h), h;
        }) : q(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ H(Te));
            t.set(l, d), Yi(s);
          }
        } else
          q(c, Te), Yi(s);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === xn)
          return n;
        var d = t.get(l), h = l in o;
        if (d === void 0 && (!h || (p = yn(o, l)) != null && p.writable) && (d = a(() => {
          var v = me(h ? o[l] : Te), k = /* @__PURE__ */ H(v);
          return k;
        }), t.set(l, d)), d !== void 0) {
          var g = w(d);
          return g === Te ? void 0 : g;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = w(d));
        } else if (c === void 0) {
          var h = t.get(l), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== Te)
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
        var c = t.get(l), d = c !== void 0 && c.v !== Te || Reflect.has(o, l);
        if (c !== void 0 || W !== null && (!d || (g = yn(o, l)) != null && g.writable)) {
          c === void 0 && (c = a(() => {
            var p = d ? me(o[l]) : Te, v = /* @__PURE__ */ H(p);
            return v;
          }), t.set(l, c));
          var h = w(c);
          if (h === Te)
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
            var v = t.get(p + "");
            v !== void 0 ? q(v, Te) : p in o && (v = a(() => /* @__PURE__ */ H(Te)), t.set(p + "", v));
          }
        if (h === void 0)
          (!g || (T = yn(o, l)) != null && T.writable) && (h = a(() => /* @__PURE__ */ H(void 0)), q(h, me(c)), t.set(l, h));
        else {
          g = h.v !== Te;
          var k = a(() => me(c));
          q(h, k);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(d, c), !g) {
          if (i && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              t.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= x.v && q(x, O + 1);
          }
          Yi(s);
        }
        return !0;
      },
      ownKeys(o) {
        w(s);
        var l = Reflect.ownKeys(o).filter((h) => {
          var g = t.get(h);
          return g === void 0 || g.v !== Te;
        });
        for (var [c, d] of t)
          d.v !== Te && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Ec();
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
function nt(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function qe(n) {
  return (
    /** @type {TemplateNode | null} */
    Bo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function mt(n) {
  return (
    /** @type {TemplateNode | null} */
    jo.call(n)
  );
}
function ne(n, e) {
  if (!U)
    return /* @__PURE__ */ qe(n);
  var t = /* @__PURE__ */ qe(P);
  if (t === null)
    t = P.appendChild(nt());
  else if (e && t.nodeType !== Gr) {
    var i = nt();
    return t == null || t.before(i), Le(i), i;
  }
  return Le(t), t;
}
function Qi(n, e = !1) {
  if (!U) {
    var t = /* @__PURE__ */ qe(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ mt(t) : t;
  }
  if (e && (P == null ? void 0 : P.nodeType) !== Gr) {
    var i = nt();
    return P == null || P.before(i), Le(i), i;
  }
  return P;
}
function re(n, e = 1, t = !1) {
  let i = U ? P : n;
  for (var s; e--; )
    s = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ mt(i);
  if (!U)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Gr) {
    var r = nt();
    return i === null ? s == null || s.after(r) : i.before(r), Le(r), r;
  }
  return Le(i), i;
}
function Kr(n) {
  n.textContent = "";
}
function Vo() {
  return !1;
}
function nd(n) {
  U && /* @__PURE__ */ qe(n) !== null && Kr(n);
}
let Pa = !1;
function id() {
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
  var e = F, t = W;
  Ue(null), Ot(null);
  try {
    return n();
  } finally {
    Ue(e), Ot(t);
  }
}
function sd(n, e, t, i = t) {
  n.addEventListener(e, () => Li(t));
  const s = n.__on_r;
  s ? n.__on_r = () => {
    s(), i(!0);
  } : n.__on_r = () => i(!0), id();
}
function Go(n) {
  W === null && (F === null && xc(), yc()), $n && wc();
}
function rd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function vt(n, e, t) {
  var i = W;
  i !== null && i.f & Ge && (n |= Ge);
  var s = {
    ctx: ae,
    deps: null,
    nodes: null,
    f: n | Ye | ht,
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
      ns(s), s.f |= ls;
    } catch (o) {
      throw Oe(s), o;
    }
  else e !== null && Cn(s);
  var r = s;
  if (t && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  !(r.f & On) && (r = r.first, n & Dt && n & En && r !== null && (r.f |= En)), r !== null && (r.parent = i, i !== null && rd(r, i), F !== null && F.f & ke && !(n & an))) {
    var a = (
      /** @type {Derived} */
      F
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return s;
}
function es() {
  return F !== null && !At;
}
function Yo(n) {
  const e = vt(Qs, null, !1);
  return Ae(e, Ee), e.teardown = n, e;
}
function kn(n) {
  Go();
  var e = (
    /** @type {Effect} */
    W.f
  ), t = !F && (e & Bt) !== 0 && (e & ls) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ae
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Qo(n);
}
function Qo(n) {
  return vt(jr | xo, n, !1);
}
function ad(n) {
  return Go(), vt(Qs | xo, n, !0);
}
function od(n) {
  Et.ensure();
  const e = vt(an | On, n, !0);
  return () => {
    Oe(e);
  };
}
function ld(n) {
  Et.ensure();
  const e = vt(an | On, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? _n(e, () => {
      Oe(e), i(void 0);
    }) : (Oe(e), i(void 0));
  });
}
function Jr(n) {
  return vt(jr, n, !1);
}
function cd(n) {
  return vt(Vr | On, n, !0);
}
function Js(n, e = 0) {
  return vt(Qs | e, n, !0);
}
function it(n, e = [], t = [], i = []) {
  Zc(i, e, t, (s) => {
    vt(Qs, () => n(...s.map(w)), !0);
  });
}
function ea(n, e = 0) {
  var t = vt(Dt | e, n, !0);
  return t;
}
function tt(n) {
  return vt(Bt | On, n, !0);
}
function Xo(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = $n, i = F;
    za(!0), Ue(null);
    try {
      e.call(null);
    } finally {
      za(t), Ue(i);
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
    t.f & an ? t.parent = null : Oe(t, e), t = i;
  }
}
function dd(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & Bt || Oe(e), e = t;
  }
}
function Oe(n, e = !0) {
  var t = !1;
  (e || n.f & yo) && n.nodes !== null && n.nodes.end !== null && (Ko(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), Zo(n, e && !t), Fs(n, 0), Ae(n, Wt);
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
    var t = n === e ? null : /* @__PURE__ */ mt(n);
    n.remove(), n = t;
  }
}
function Jo(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function _n(n, e, t = !0) {
  var i = [];
  el(n, i, !0);
  var s = () => {
    t && Oe(n), e && e();
  }, r = i.length;
  if (r > 0) {
    var a = () => --r || s();
    for (var o of i)
      o.out(a);
  } else
    s();
}
function el(n, e, t) {
  if (!(n.f & Ge)) {
    n.f ^= Ge;
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
  if (n.f & Ge) {
    n.f ^= Ge, n.f & Ee || (Ae(n, Ye), Cn(n));
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
      var s = t === i ? null : /* @__PURE__ */ mt(t);
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
let F = null, At = !1;
function Ue(n) {
  F = n;
}
let W = null;
function Ot(n) {
  W = n;
}
let De = null;
function il(n) {
  F !== null && (De === null ? De = [n] : De.push(n));
}
let Ce = null, We = 0, Xe = null;
function ud(n) {
  Xe = n;
}
let sl = 1, ts = 0, Sn = ts;
function qa(n) {
  Sn = n;
}
function rl() {
  return ++sl;
}
function fs(n) {
  var e = n.f;
  if (e & Ye)
    return !0;
  if (e & ke && (n.f &= ~An), e & Lt) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, s = 0; s < i; s++) {
        var r = t[s];
        if (fs(
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
    ue === null && Ae(n, Ee);
  }
  return !1;
}
function al(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(De != null && De.includes(n)))
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      r.f & ke ? al(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (t ? Ae(r, Ye) : r.f & Ee && Ae(r, Lt), Cn(
        /** @type {Effect} */
        r
      ));
    }
}
function ol(n) {
  var v;
  var e = Ce, t = We, i = Xe, s = F, r = De, a = ae, o = At, l = Sn, c = n.f;
  Ce = /** @type {null | Value[]} */
  null, We = 0, Xe = null, F = c & (Bt | an) ? null : n, De = null, Ei(n.ctx), At = !1, Sn = ++ts, n.ac !== null && (Li(() => {
    n.ac.abort(Qn);
  }), n.ac = null);
  try {
    n.f |= xr;
    var d = (
      /** @type {Function} */
      n.fn
    ), h = d(), g = n.deps;
    if (Ce !== null) {
      var p;
      if (Fs(n, We), g !== null && We > 0)
        for (g.length = We + Ce.length, p = 0; p < Ce.length; p++)
          g[We + p] = Ce[p];
      else
        n.deps = g = Ce;
      if (es() && n.f & ht)
        for (p = We; p < g.length; p++)
          ((v = g[p]).reactions ?? (v.reactions = [])).push(n);
    } else g !== null && We < g.length && (Fs(n, We), g.length = We);
    if (ds() && Xe !== null && !At && g !== null && !(n.f & (ke | Lt | Ye)))
      for (p = 0; p < /** @type {Source[]} */
      Xe.length; p++)
        al(
          Xe[p],
          /** @type {Effect} */
          n
        );
    return s !== null && s !== n && (ts++, Xe !== null && (i === null ? i = Xe : i.push(.../** @type {Source[]} */
    Xe))), n.f & sn && (n.f ^= sn), h;
  } catch (k) {
    return Mo(k);
  } finally {
    n.f ^= xr, Ce = e, We = t, Xe = i, F = s, De = r, Ei(a), At = o, Sn = l;
  }
}
function fd(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = uc.call(t, n);
    if (i !== -1) {
      var s = t.length - 1;
      s === 0 ? t = e.reactions = null : (t[i] = t[s], t.pop());
    }
  }
  t === null && e.f & ke && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ce === null || !Ce.includes(e)) && (Ae(e, Lt), e.f & ht && (e.f ^= ht, e.f &= ~An), zo(
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
      fd(n, t[i]);
}
function ns(n) {
  var e = n.f;
  if (!(e & Wt)) {
    Ae(n, Ee);
    var t = W, i = Tn;
    W = n, Tn = !0;
    try {
      e & (Dt | mc) ? dd(n) : Zo(n), Xo(n);
      var s = ol(n);
      n.teardown = typeof s == "function" ? s : null, n.wv = sl;
      var r;
    } finally {
      Tn = i, W = t;
    }
  }
}
async function ll() {
  await Promise.resolve(), ye();
}
function w(n) {
  var e = n.f, t = (e & ke) !== 0;
  if (F !== null && !At) {
    var i = W !== null && (W.f & Wt) !== 0;
    if (!i && !(De != null && De.includes(n))) {
      var s = F.deps;
      if (F.f & xr)
        n.rv < ts && (n.rv = ts, Ce === null && s !== null && s[We] === n ? We++ : Ce === null ? Ce = [n] : Ce.includes(n) || Ce.push(n));
      else {
        (F.deps ?? (F.deps = [])).push(n);
        var r = n.reactions;
        r === null ? n.reactions = [F] : r.includes(F) || r.push(F);
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
      return (!(a.f & Ee) && a.reactions !== null || dl(a)) && (o = Zr(a)), rn.set(a, o), o;
    }
  } else t && (!(ue != null && ue.has(n)) || z != null && z.is_fork && !es()) && (a = /** @type {Derived} */
  n, fs(a) && qo(a), Tn && es() && !(a.f & ht) && cl(a));
  if (ue != null && ue.has(n))
    return ue.get(n);
  if (n.f & sn)
    throw n.v;
  return n.v;
}
function cl(n) {
  if (n.deps !== null) {
    n.f ^= ht;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & ke && !(e.f & ht) && cl(
        /** @type {Derived} */
        e
      );
  }
}
function dl(n) {
  if (n.v === Te) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (rn.has(e) || e.f & ke && dl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function on(n) {
  var e = At;
  try {
    return At = !0, n();
  } finally {
    At = e;
  }
}
const gd = -7169;
function Ae(n, e) {
  n.f = n.f & gd | e;
}
function hd(n) {
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
const pd = ["touchstart", "touchmove"];
function md(n) {
  return pd.includes(n);
}
const ul = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Set();
function vd(n, e, t, i = {}) {
  function s(r) {
    if (i.capture || Bi.call(e, r), !r.cancelBubble)
      return Li(() => t == null ? void 0 : t.call(this, r));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Nn(() => {
    e.addEventListener(n, s, i);
  }) : e.addEventListener(n, s, i), s;
}
function bd(n, e, t, i, s) {
  var r = { capture: i, passive: s }, a = vd(n, e, t, r);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Yo(() => {
    e.removeEventListener(n, a, r);
  });
}
function gs(n) {
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
    var d = F, h = W;
    Ue(null), Ot(null);
    try {
      for (var g, p = []; r !== null; ) {
        var v = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var k = r["__" + i];
          k != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === r) && k.call(r, n);
        } catch (x) {
          g ? p.push(x) : g = x;
        }
        if (n.cancelBubble || v === e || v === null)
          break;
        r = v;
      }
      if (g) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw g;
      }
    } finally {
      n.__root = e, delete n.currentTarget, Ue(d), Ot(h);
    }
  }
}
function na(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function Rt(n, e) {
  var t = (
    /** @type {Effect} */
    W
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function K(n, e) {
  var t = (e & qc) !== 0, i = (e & Uc) !== 0, s, r = !n.startsWith("<!>");
  return () => {
    if (U)
      return Rt(P, null), P;
    s === void 0 && (s = na(r ? n : "<!>" + n), t || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(s)));
    var a = (
      /** @type {TemplateNode} */
      i || Wo ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Rt(o, l);
    } else
      Rt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function wd(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), s = `<${t}>${i ? n : "<!>" + n}</${t}>`, r;
  return () => {
    if (U)
      return Rt(P, null), P;
    if (!r) {
      var a = (
        /** @type {DocumentFragment} */
        na(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ qe(a)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ qe(o);
    }
    var l = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return Rt(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function yd(n, e) {
  return /* @__PURE__ */ wd(n, e, "svg");
}
function fl() {
  if (U)
    return Rt(P, null), P;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = nt();
  return n.append(e, t), Rt(e, t), n;
}
function j(n, e) {
  if (U) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      W
    );
    (!(t.f & ls) || t.nodes.end === null) && (t.nodes.end = P), Si();
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
  return gl(n, e);
}
function xd(n, e) {
  Ir(), e.intro = e.intro ?? !1;
  const t = e.target, i = U, s = P;
  try {
    for (var r = /* @__PURE__ */ qe(t); r && (r.nodeType !== Dn || /** @type {Comment} */
    r.data !== So); )
      r = /* @__PURE__ */ mt(r);
    if (!r)
      throw In;
    Ht(!0), Le(
      /** @type {Comment} */
      r
    );
    const a = gl(n, { ...e, anchor: r });
    return Ht(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== In && console.warn("Failed to hydrate: ", a), e.recover === !1 && _c(), Ir(), Kr(t), Ht(!1), ia(n, e);
  } finally {
    Ht(i), Le(s);
  }
}
const Yn = /* @__PURE__ */ new Map();
function gl(n, { target: e, anchor: t, props: i = {}, events: s, context: r, intro: a = !0 }) {
  Ir();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!o.has(p)) {
        o.add(p);
        var v = md(p);
        e.addEventListener(p, Bi, { passive: v });
        var k = Yn.get(p);
        k === void 0 ? (document.addEventListener(p, Bi, { passive: v }), Yn.set(p, 1)) : Yn.set(p, k + 1);
      }
    }
  };
  l(Ys(ul)), Mr.add(l);
  var c = void 0, d = ld(() => {
    var h = t ?? e.appendChild(nt());
    return Qc(
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
            ae
          );
          p.c = r;
        }
        if (s && (i.$$events = s), U && Rt(
          /** @type {TemplateNode} */
          g,
          null
        ), Rr = a, c = n(g, i) || {}, Rr = !0, U && (W.nodes.end = P, P === null || P.nodeType !== Dn || /** @type {Comment} */
        P.data !== Yr))
          throw cs(), In;
        r && Vt();
      }
    ), () => {
      var v;
      for (var g of o) {
        e.removeEventListener(g, Bi);
        var p = (
          /** @type {number} */
          Yn.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, Bi), Yn.delete(g)) : Yn.set(g, p);
      }
      Mr.delete(l), h !== t && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Lr.set(c, d), c;
}
let Lr = /* @__PURE__ */ new WeakMap();
function Or(n, e) {
  const t = Lr.get(n);
  return t ? (Lr.delete(n), t(e)) : Promise.resolve();
}
var ft, St, je, wn, as, os, Gs;
class kd {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    L(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, ft, /* @__PURE__ */ new Map());
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
    I(this, St, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, je, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, wn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, as, !0);
    I(this, os, () => {
      var e = (
        /** @type {Batch} */
        z
      );
      if (f(this, ft).has(e)) {
        var t = (
          /** @type {Key} */
          f(this, ft).get(e)
        ), i = f(this, St).get(t);
        if (i)
          ta(i), f(this, wn).delete(t);
        else {
          var s = f(this, je).get(t);
          s && (f(this, St).set(t, s.effect), f(this, je).delete(t), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), i = s.effect);
        }
        for (const [r, a] of f(this, ft)) {
          if (f(this, ft).delete(r), r === e)
            break;
          const o = f(this, je).get(a);
          o && (Oe(o.effect), f(this, je).delete(a));
        }
        for (const [r, a] of f(this, St)) {
          if (r === t || f(this, wn).has(r)) continue;
          const o = () => {
            if (Array.from(f(this, ft).values()).includes(r)) {
              var c = document.createDocumentFragment();
              nl(a, c), c.append(nt()), f(this, je).set(r, { effect: a, fragment: c });
            } else
              Oe(a);
            f(this, wn).delete(r), f(this, St).delete(r);
          };
          f(this, as) || !i ? (f(this, wn).add(r), _n(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Gs, (e) => {
      f(this, ft).delete(e);
      const t = Array.from(f(this, ft).values());
      for (const [i, s] of f(this, je))
        t.includes(i) || (Oe(s.effect), f(this, je).delete(i));
    });
    this.anchor = e, E(this, as, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      z
    ), s = Vo();
    if (t && !f(this, St).has(e) && !f(this, je).has(e))
      if (s) {
        var r = document.createDocumentFragment(), a = nt();
        r.append(a), f(this, je).set(e, {
          effect: tt(() => t(a)),
          fragment: r
        });
      } else
        f(this, St).set(
          e,
          tt(() => t(this.anchor))
        );
    if (f(this, ft).set(i, e), s) {
      for (const [o, l] of f(this, St))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of f(this, je))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, os)), i.ondiscard(f(this, Gs));
    } else
      U && (this.anchor = P), f(this, os).call(this);
  }
}
ft = new WeakMap(), St = new WeakMap(), je = new WeakMap(), wn = new WeakMap(), as = new WeakMap(), os = new WeakMap(), Gs = new WeakMap();
function Se(n, e, t = !1) {
  U && Si();
  var i = new kd(n), s = t ? En : 0;
  function r(a, o) {
    if (U) {
      const c = Eo(n) === Zs;
      if (a === c) {
        var l = zs();
        Le(l), i.anchor = l, Ht(!1), i.ensure(a, o), Ht(!0);
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
function _d(n, e, t) {
  for (var i = [], s = e.length, r, a = e.length, o = 0; o < s; o++) {
    let h = e[o];
    _n(
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
    Oe(n[t], e);
}
var Fa;
function hl(n, e, t, i, s, r = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & To) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = U ? Le(/* @__PURE__ */ qe(c)) : c.appendChild(nt());
  }
  U && Si();
  var d = null, h = /* @__PURE__ */ Xr(() => {
    var x = t();
    return vo(x) ? x : x == null ? [] : Ys(x);
  }), g, p = !0;
  function v() {
    m.fallback = d, Td(m, g, a, e, i), d !== null && (g.length === 0 ? d.f & Ft ? (d.f ^= Ft, ji(d, null, a)) : ta(d) : _n(d, () => {
      d = null;
    }));
  }
  var k = ea(() => {
    g = /** @type {V[]} */
    w(h);
    var x = g.length;
    let O = !1;
    if (U) {
      var T = Eo(a) === Zs;
      T !== (x === 0) && (a = zs(), Le(a), Ht(!1), O = !0);
    }
    for (var _ = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      z
    ), D = Vo(), G = 0; G < x; G += 1) {
      U && P.nodeType === Dn && /** @type {Comment} */
      P.data === Yr && (a = /** @type {Comment} */
      P, O = !0, Ht(!1));
      var oe = g[G], J = i(oe, G), B = p ? null : o.get(J);
      B ? (B.v && Ii(B.v, oe), B.i && Ii(B.i, G), D && S.skipped_effects.delete(B.e)) : (B = Sd(
        o,
        p ? a : Fa ?? (Fa = nt()),
        oe,
        J,
        G,
        s,
        e,
        t
      ), p || (B.e.f |= Ft), o.set(J, B)), _.add(J);
    }
    if (x === 0 && r && !d && (p ? d = tt(() => r(a)) : (d = tt(() => r(Fa ?? (Fa = nt()))), d.f |= Ft)), U && x > 0 && Le(zs()), !p)
      if (D) {
        for (const [Y, rt] of o)
          _.has(Y) || S.skipped_effects.add(rt.e);
        S.oncommit(v), S.ondiscard(() => {
        });
      } else
        v();
    O && Ht(!0), w(h);
  }), m = { effect: k, items: o, outrogroups: null, fallback: d };
  p = !1, U && (a = P);
}
function Td(n, e, t, i, s) {
  var B, Y, rt, Gt, Yt, zn, Qt, qn, dn;
  var r = (i & Rc) !== 0, a = e.length, o = n.items, l = n.effect.first, c, d = null, h, g = [], p = [], v, k, m, x;
  if (r)
    for (x = 0; x < a; x += 1)
      v = e[x], k = s(v, x), m = /** @type {EachItem} */
      o.get(k).e, m.f & Ft || ((Y = (B = m.nodes) == null ? void 0 : B.a) == null || Y.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(m));
  for (x = 0; x < a; x += 1) {
    if (v = e[x], k = s(v, x), m = /** @type {EachItem} */
    o.get(k).e, n.outrogroups !== null)
      for (const Fe of n.outrogroups)
        Fe.pending.delete(m), Fe.done.delete(m);
    if (m.f & Ft)
      if (m.f ^= Ft, m === l)
        ji(m, null, t);
      else {
        var O = d ? d.next : l;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Jt(n, d, m), Jt(n, m, O), ji(m, O, t), d = m, g = [], p = [], l = d.next;
        continue;
      }
    if (m.f & Ge && (ta(m), r && ((Gt = (rt = m.nodes) == null ? void 0 : rt.a) == null || Gt.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (g.length < p.length) {
          var T = p[0], _;
          d = T.prev;
          var S = g[0], D = g[g.length - 1];
          for (_ = 0; _ < g.length; _ += 1)
            ji(g[_], T, t);
          for (_ = 0; _ < p.length; _ += 1)
            c.delete(p[_]);
          Jt(n, S.prev, D.next), Jt(n, d, S), Jt(n, D, T), l = T, d = D, x -= 1, g = [], p = [];
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
    for (const Fe of n.outrogroups)
      Fe.pending.size === 0 && (Dr(Ys(Fe.done)), (Yt = n.outrogroups) == null || Yt.delete(Fe));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var G = [];
    if (c !== void 0)
      for (m of c)
        m.f & Ge || G.push(m);
    for (; l !== null; )
      !(l.f & Ge) && l !== n.fallback && G.push(l), l = l.next;
    var oe = G.length;
    if (oe > 0) {
      var J = i & To && a === 0 ? t : null;
      if (r) {
        for (x = 0; x < oe; x += 1)
          (Qt = (zn = G[x].nodes) == null ? void 0 : zn.a) == null || Qt.measure();
        for (x = 0; x < oe; x += 1)
          (dn = (qn = G[x].nodes) == null ? void 0 : qn.a) == null || dn.fix();
      }
      _d(n, G, J);
    }
  }
  r && Nn(() => {
    var Fe, at;
    if (h !== void 0)
      for (m of h)
        (at = (Fe = m.nodes) == null ? void 0 : Fe.a) == null || at.apply();
  });
}
function Sd(n, e, t, i, s, r, a, o) {
  var l = a & Cc ? a & Lc ? Mn(t) : /* @__PURE__ */ Fo(t, !1, !1) : null, c = a & Mc ? Mn(s) : null;
  return {
    v: l,
    i: c,
    e: tt(() => (r(e, l ?? t, c ?? s, o), () => {
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
        /* @__PURE__ */ mt(i)
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
  it(() => {
    var o = (
      /** @type {Effect} */
      W
    );
    if (a === (a = e() ?? "")) {
      U && Si();
      return;
    }
    if (o.nodes !== null && (Ko(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (U) {
        P.data;
        for (var l = Si(), c = l; l !== null && (l.nodeType !== Dn || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ mt(l);
        if (l === null)
          throw cs(), In;
        Rt(P, c), r = Le(l);
        return;
      }
      var d = a + "";
      t ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var h = na(d);
      if ((t || i) && (h = /** @type {Element} */
      /* @__PURE__ */ qe(h)), Rt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), t || i)
        for (; /* @__PURE__ */ qe(h); )
          r.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ qe(h)
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
function pl() {
  const n = Ut.now();
  Ut.tasks.forEach((e) => {
    e.c(n) || (Ut.tasks.delete(e), e.f());
  }), Ut.tasks.size !== 0 && Ut.tick(pl);
}
function Id(n) {
  let e;
  return Ut.tasks.size === 0 && Ut.tick(pl), {
    promise: new Promise((t) => {
      Ut.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      Ut.tasks.delete(e);
    }
  };
}
function Ss(n, e) {
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
  var s = (n & zc) !== 0, r = "both", a, o = e.inert, l = e.style.overflow, c, d;
  function h() {
    return Li(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: r
    })));
  }
  var g = {
    is_global: s,
    in() {
      e.inert = o, Ss(e, "introstart"), c = Nr(e, h(), d, 1, () => {
        Ss(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(x) {
      e.inert = !0, Ss(e, "outrostart"), d = Nr(e, h(), c, 0, () => {
        Ss(e, "outroend"), x == null || x();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    W
  );
  if (((m = p.nodes).t ?? (m.t = [])).push(g), Rr) {
    var v = s;
    if (!v) {
      for (var k = (
        /** @type {Effect | null} */
        p.parent
      ); k && k.f & En; )
        for (; (k = k.parent) && !(k.f & Dt); )
          ;
      v = !k || (k.f & ls) !== 0;
    }
    v && Jr(() => {
      on(() => g.in());
    });
  }
}
function Nr(n, e, t, i, s) {
  var r = i === 1;
  if (hc(e)) {
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
  var v = () => 1 - i, k = n.animate(g, { duration: l, fill: "forwards" });
  return k.onfinish = () => {
    k.cancel();
    var m = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var x = i - m, O = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), T = [];
    if (O > 0) {
      var _ = !1;
      if (c)
        for (var S = Math.ceil(O / 16.666666666666668), D = 0; D <= S; D += 1) {
          var G = m + x * h(D / S), oe = Ha(c(G, 1 - G));
          T.push(oe), _ || (_ = oe.overflow === "hidden");
        }
      _ && (n.style.overflow = "hidden"), v = () => {
        var J = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          k.currentTime
        );
        return m + x * h(J / O);
      }, d && Id(() => {
        if (k.playState !== "running") return !1;
        var J = v();
        return d(J, 1 - J), !0;
      });
    }
    k = n.animate(T, { duration: O, fill: "forwards" }), k.onfinish = () => {
      v = () => i, d == null || d(i, 1 - i), s();
    };
  }, {
    abort: () => {
      k && (k.cancel(), k.effect = null, k.onfinish = $i);
    },
    deactivate: () => {
      s = $i;
    },
    reset: () => {
      i === 0 && (d == null || d(1, 0));
    },
    t: () => v()
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
  if (U || a !== t || a === void 0) {
    var o = Rd(t, i, r);
    (!U || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (r && s !== r)
    for (var l in r) {
      var c = !!r[l];
      (s == null || c !== !!s[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function ml(n, e, t, i) {
  var s = n.__style;
  if (U || s !== e) {
    var r = Ld(e);
    (!U || r !== n.getAttribute("style")) && (r == null ? n.removeAttribute("style") : n.style.cssText = r), n.__style = e;
  }
  return i;
}
const Od = Symbol("is custom element"), Dd = Symbol("is html");
function pt(n, e, t, i) {
  var s = Nd(n);
  U && (s[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || s[e] !== (s[e] = t) && (e === "loading" && (n[vc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && $d(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Nd(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Od]: n.nodeName.includes("-"),
      [Dd]: n.namespaceURI === Fc
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
  sd(n, "input", async (s) => {
    var r = s ? n.defaultValue : n.value;
    if (r = ur(n) ? fr(r) : r, t(r), z !== null && i.add(z), await ll(), r !== (r = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = r ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (U && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  on(e) == null && n.value) && (t(ur(n) ? fr(n.value) : n.value), z !== null && i.add(z)), Js(() => {
    var s = e();
    if (n === document.activeElement) {
      var r = (
        /** @type {Batch} */
        Rs ?? z
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
    ae
  ), t = e.l.u;
  if (!t) return;
  let i = () => hd(e.s);
  if (n) {
    let s = 0, r = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ us(() => {
      let o = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== r[c] && (r[c] = l[c], o = !0);
      return o && s++, s;
    });
    i = () => w(a);
  }
  t.b.length && ad(() => {
    Ga(e, i), yr(t.b);
  }), kn(() => {
    const s = on(() => t.m.map(pc));
    return () => {
      for (const r of s)
        typeof r == "function" && r();
    };
  }), t.a.length && kn(() => {
    Ga(e, i), yr(t.a);
  });
}
function Ga(n, e) {
  if (n.l.s)
    for (const t of n.l.s) w(t);
  e();
}
let Es = !1;
function qd(n) {
  var e = Es;
  try {
    return Es = !1, [n(), Es];
  } finally {
    Es = e;
  }
}
function Re(n, e, t, i) {
  var T;
  var s = !Ri || (t & Dc) !== 0, r = (t & $c) !== 0, a = (t & Pc) !== 0, o = (
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
    var h = xn in n || ko in n;
    d = ((T = yn(n, e)) == null ? void 0 : T.set) ?? (h && e in n ? (_) => n[e] = _ : void 0);
  }
  var g, p = !1;
  r ? [g, p] = qd(() => (
    /** @type {V} */
    n[e]
  )) : g = /** @type {V} */
  n[e], g === void 0 && i !== void 0 && (g = c(), d && (s && Tc(), d(g)));
  var v;
  if (s ? v = () => {
    var _ = (
      /** @type {V} */
      n[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      n[e]
    );
    return _ !== void 0 && (o = /** @type {V} */
    void 0), _ === void 0 ? o : _;
  }, s && !(t & Nc))
    return v;
  if (d) {
    var k = n.$$legacy;
    return (
      /** @type {() => V} */
      function(_, S) {
        return arguments.length > 0 ? ((!s || !S || k || p) && d(S ? v() : _), _) : v();
      }
    );
  }
  var m = !1, x = (t & Oc ? us : Xr)(() => (m = !1, v()));
  r && w(x);
  var O = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const D = S ? w(x) : s && r ? me(_) : _;
        return q(x, D), m = !0, o !== void 0 && (o = D), _;
      }
      return $n && m || O.f & Wt ? x.v : w(x);
    }
  );
}
function Ud(n) {
  return new Fd(n);
}
var qt, Je;
class Fd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    I(this, qt);
    /** @type {Record<string, any>} */
    I(this, Je);
    var r;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Fo(o, !1, !1);
      return t.set(a, l), l;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return w(t.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === ko ? !0 : (w(t.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return q(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    E(this, Je, (e.hydrate ? xd : ia)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((r = e == null ? void 0 : e.props) != null && r.$$host) || e.sync === !1) && ye(), E(this, qt, s.$$events);
    for (const a of Object.keys(f(this, Je)))
      a === "$set" || a === "$destroy" || a === "$on" || Ps(this, a, {
        get() {
          return f(this, Je)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, Je)[a] = o;
        },
        enumerable: !0
      });
    f(this, Je).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, f(this, Je).$destroy = () => {
      Or(f(this, Je));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    f(this, Je).$set(e);
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
    f(this, Je).$destroy();
  }
}
qt = new WeakMap(), Je = new WeakMap();
let vl;
typeof HTMLElement == "function" && (vl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    L(this, "$$ctor");
    /** Slots */
    L(this, "$$s");
    /** @type {any} The Svelte component instance */
    L(this, "$$c");
    /** Whether or not the custom element is connected */
    L(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    L(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    L(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    L(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    L(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    L(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    L(this, "$$me");
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
      }), this.$$me = od(() => {
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
  let a = class extends vl {
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
  ae === null && _o(), Ri && ae.l !== null ? Bd(ae).m.push(n) : kn(() => {
    const e = on(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Wd(n) {
  ae === null && _o(), aa(() => () => on(n));
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
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, d = l * (1 - a), [h, g] = Ya(s), [p, v] = Ya(r);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (k, m) => `
			transform: ${c} translate(${(1 - k) * h}${g}, ${(1 - k) * p}${v});
			opacity: ${l - d * m}`
  };
}
var ii, si, ri, ai;
class Xd {
  constructor() {
    I(this, ii);
    I(this, si);
    I(this, ri);
    I(this, ai);
    E(this, ii, /* @__PURE__ */ H(!1)), E(this, si, /* @__PURE__ */ H(!1)), E(this, ri, /* @__PURE__ */ H(!1)), E(this, ai, /* @__PURE__ */ H(!1));
  }
  get isOpen() {
    return w(f(this, ii));
  }
  set isOpen(e) {
    q(f(this, ii), e, !0);
  }
  get isMinimized() {
    return w(f(this, si));
  }
  set isMinimized(e) {
    q(f(this, si), e, !0);
  }
  get isLoading() {
    return w(f(this, ri));
  }
  set isLoading(e) {
    q(f(this, ri), e, !0);
  }
  get hasUnreadMessages() {
    return w(f(this, ai));
  }
  set hasUnreadMessages(e) {
    q(f(this, ai), e, !0);
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
const de = new Xd(), we = {
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
    I(this, oi);
    I(this, li);
    I(this, ci);
    I(this, di);
    I(this, ui);
    I(this, fi);
    E(this, oi, /* @__PURE__ */ H(me([]))), E(this, li, /* @__PURE__ */ H(null)), E(this, ci, /* @__PURE__ */ H(!1)), E(this, di, /* @__PURE__ */ H(null)), E(this, ui, /* @__PURE__ */ H(null)), this.streamingBuffer = "", this.streamingTimeout = null, E(this, fi, /* @__PURE__ */ H(0));
  }
  get messages() {
    return w(f(this, oi));
  }
  set messages(e) {
    q(f(this, oi), e, !0);
  }
  get currentSession() {
    return w(f(this, li));
  }
  set currentSession(e) {
    q(f(this, li), e, !0);
  }
  get isTyping() {
    return w(f(this, ci));
  }
  set isTyping(e) {
    q(f(this, ci), e, !0);
  }
  get error() {
    return w(f(this, di));
  }
  set error(e) {
    q(f(this, di), e, !0);
  }
  get streamingMessageId() {
    return w(f(this, ui));
  }
  set streamingMessageId(e) {
    q(f(this, ui), e, !0);
  }
  get streamingUpdateSignal() {
    return w(f(this, fi));
  }
  set streamingUpdateSignal(e) {
    q(f(this, fi), e, !0);
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
        we.STREAMING_BATCH_DELAY
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
const $ = new Zd(), Xa = {
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
}, bl = {
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
function wl(n) {
  return Kd.includes(n);
}
function er(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function oa(n, e = "#6b46c1") {
  return er(n) ? n : e;
}
function yl(n) {
  if (!er(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function xl(n) {
  const e = yl(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, s = parseInt(e.slice(5, 7), 16) / 255, r = Math.max(t, i, s), a = Math.min(t, i, s);
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
function kl(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), s = (r) => {
    const a = (r + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${s(0)}${s(8)}${s(4)}`.toUpperCase();
}
function gt(n, e) {
  if (!er(n)) return n;
  const t = xl(n), i = Math.max(0, Math.min(100, t.l + e));
  return kl(t.h, t.s, i);
}
const Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: gt,
  expandHexColor: yl,
  hexToHsl: xl,
  hslToHex: kl,
  isValidHexColor: er,
  sanitizeHexColor: oa
}, Symbol.toStringTag, { value: "Module" }));
var gi, hi, pi, mi, vi, bi, wi, yi, xi, ki, _i, Ti;
class eu {
  constructor() {
    I(this, gi);
    I(this, hi);
    I(this, pi);
    I(this, mi);
    I(this, vi);
    I(this, bi);
    I(this, wi);
    I(this, yi);
    I(this, xi);
    I(this, ki);
    I(this, _i);
    I(this, Ti);
    E(this, gi, /* @__PURE__ */ H("")), E(this, hi, /* @__PURE__ */ H(me(lt.theme))), E(this, pi, /* @__PURE__ */ H(me(lt.position))), E(this, mi, /* @__PURE__ */ H(me(lt.title))), E(this, vi, /* @__PURE__ */ H(me(lt.logoUrl))), E(this, bi, /* @__PURE__ */ H(me(lt.placeholder))), E(this, wi, /* @__PURE__ */ H(me(lt.accentColor))), E(this, yi, /* @__PURE__ */ H(me(lt.avatarEmoji))), E(this, xi, /* @__PURE__ */ H(me(lt.companyName))), E(this, ki, /* @__PURE__ */ H(me(lt.initialMessage))), E(this, _i, /* @__PURE__ */ H(me(lt.quickQuestions))), E(this, Ti, /* @__PURE__ */ H("default"));
  }
  get clientId() {
    return w(f(this, gi));
  }
  set clientId(e) {
    q(f(this, gi), e, !0);
  }
  get theme() {
    return w(f(this, hi));
  }
  set theme(e) {
    q(f(this, hi), e, !0);
  }
  get position() {
    return w(f(this, pi));
  }
  set position(e) {
    q(f(this, pi), e, !0);
  }
  get title() {
    return w(f(this, mi));
  }
  set title(e) {
    q(f(this, mi), e, !0);
  }
  get logoUrl() {
    return w(f(this, vi));
  }
  set logoUrl(e) {
    q(f(this, vi), e, !0);
  }
  get placeholder() {
    return w(f(this, bi));
  }
  set placeholder(e) {
    q(f(this, bi), e, !0);
  }
  get accentColor() {
    return w(f(this, wi));
  }
  set accentColor(e) {
    q(f(this, wi), e, !0);
  }
  get avatarEmoji() {
    return w(f(this, yi));
  }
  set avatarEmoji(e) {
    q(f(this, yi), e, !0);
  }
  get companyName() {
    return w(f(this, xi));
  }
  set companyName(e) {
    q(f(this, xi), e, !0);
  }
  get initialMessage() {
    return w(f(this, ki));
  }
  set initialMessage(e) {
    q(f(this, ki), e, !0);
  }
  get quickQuestions() {
    return w(f(this, _i));
  }
  set quickQuestions(e) {
    q(f(this, _i), e, !0);
  }
  get titleSource() {
    return w(f(this, Ti));
  }
  set titleSource(e) {
    q(f(this, Ti), e, !0);
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
      const r = bl.attributeToProperty(s);
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
            wl(a) && (t.theme = a);
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
gi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), xi = new WeakMap(), ki = new WeakMap(), _i = new WeakMap(), Ti = new WeakMap();
const Me = new eu(), tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: Me
}, Symbol.toStringTag, { value: "Module" })), _l = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", nu = _l, iu = _l;
var su = /* @__PURE__ */ K('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), ru = /* @__PURE__ */ yd('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), au = /* @__PURE__ */ K('<span class="unread-indicator svelte-bkcus6"></span>'), ou = /* @__PURE__ */ K("<button><!> <!></button>");
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
function Tl(n, e) {
  jt(e, !0), ln(n, lu);
  let t = Re(e, "onclick", 7);
  const i = /* @__PURE__ */ be(() => de.isOpen), s = /* @__PURE__ */ be(() => de.hasUnreadMessages);
  function r() {
    var v;
    (v = t()) == null || v();
  }
  var a = {
    get onclick() {
      return t();
    },
    set onclick(v) {
      t(v), ye();
    }
  }, o = ou();
  let l;
  o.__click = r;
  var c = ne(o);
  {
    var d = (v) => {
      var k = su();
      it(() => pt(k, "src", nu)), j(v, k);
    }, h = (v) => {
      var k = ru();
      j(v, k);
    };
    Se(c, (v) => {
      w(i) ? v(h, !1) : v(d);
    });
  }
  var g = re(c, 2);
  {
    var p = (v) => {
      var k = au();
      j(v, k);
    };
    Se(g, (v) => {
      w(s) && !w(i) && v(p);
    });
  }
  return te(o), it(() => {
    l = sa(o, 1, "floating-button svelte-bkcus6", null, l, { open: w(i) }), pt(o, "aria-label", w(i) ? "Close chat" : "Open chat");
  }), j(n, o), Vt(a);
}
gs(["click"]);
cn(Tl, { onclick: {} }, [], [], !0);
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
const Z = {
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
function It() {
  return Xn.getInstance();
}
class du {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const t = It().getCurrent();
    if (Z.log("MessageValidator", "validate() called", {
      correlationId: t,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return Z.log("MessageValidator", "Validation failed - invalid type", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return Z.log("MessageValidator", "Validation failed - empty string", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const i = e.trim();
    if (Z.log("MessageValidator", "After trimming", {
      correlationId: t,
      original: e,
      trimmed: i,
      originalLength: e.length,
      trimmedLength: i.length,
      wasWhitespaceOnly: e.length > 0 && i.length === 0
    }), i.length < fn.MIN_LENGTH) {
      const a = "Message is too short";
      return Z.log("MessageValidator", "Validation failed - too short", {
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
      return Z.log("MessageValidator", "Validation failed - too long", {
        correlationId: t,
        trimmedLength: i.length,
        maxLength: fn.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    Z.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: t,
      inputContent: i,
      inputLength: i.length
    });
    const s = this.sanitizeHTML(i);
    Z.log("MessageValidator", "HTML sanitization complete", {
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
    return Z.log("MessageValidator", "Final validation result", { correlationId: t, result: r }), r;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const t = It().getCurrent();
    Z.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: t,
      input: e,
      inputLength: e.length
    });
    let i = e, s = 0;
    const r = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== r && Z.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: t,
      before: r,
      after: i,
      removed: r.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && Z.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: t,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && Z.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: t,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && Z.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: t,
      before: l,
      after: i,
      removed: l.length - i.length
    }), Z.log("MessageValidator", "sanitizeHTML() result", {
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
class Sl {
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
class Qe extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, Qe);
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
class Zn extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class El extends Qe {
  constructor(e, t, i, s, r) {
    super(e, { ...r, wsUrl: t, closeCode: i, closeReason: s }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = s;
  }
}
class Xi extends Qe {
  constructor(e, t, i, s, r) {
    super(e, { ...r, field: t, value: i, expectedType: s }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = s;
  }
}
class Al extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class Il extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class Kn extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class Cl extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class Ml extends Qe {
  constructor(e, t, i, s) {
    super(e, { ...s, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function Za(n) {
  return n instanceof Qe ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function uu(n) {
  return n instanceof Qe ? {
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
  return n instanceof Zn ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof Kn ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof El ? "Connection lost. Attempting to reconnect..." : n instanceof Il ? "Access denied. Please check your configuration." : n instanceof Xi ? n.message : n instanceof Al ? "Widget configuration error. Please contact support." : n instanceof Ml ? "Request timed out. Please try again." : n instanceof Cl ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Zi {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = uu(e);
    let s;
    return e instanceof Zn ? s = "NETWORK_ERROR" : e instanceof El ? s = "WEBSOCKET_ERROR" : e instanceof Xi ? s = "VALIDATION_ERROR" : e instanceof Al ? s = "CONFIGURATION_ERROR" : e instanceof Il ? s = "AUTHENTICATION_ERROR" : e instanceof Kn ? s = "RATE_LIMIT_ERROR" : e instanceof Cl ? s = "STORAGE_ERROR" : e instanceof Ml ? s = "TIMEOUT_ERROR" : e instanceof Qe ? s = "WIDGET_ERROR" : s = "UNKNOWN_ERROR", {
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
    const i = Sl.validate(e);
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
      const a = Sl.validate(r.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = $r.resolveUrls(a.sanitizedValue);
      this.config = {
        ...r,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (t) {
      const i = Zi.handle(t, {
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
      const r = bl.attributeToProperty(s);
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
            wl(a) && (t.theme = a);
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
let is = !1;
function pu() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
is = !pu();
function mu(n) {
  try {
    return is ? Mi.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return Mi.get(n) ?? null;
  }
}
function vu(n, e) {
  try {
    return is ? (Mi.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return Mi.set(n, e), is = !0, !1;
  }
}
function bu(n) {
  try {
    if (is) {
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
    return e || (e = this.generateVisitorId(), this.setItem(ut.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && Z.log("ChatWidget", "Created new visitor", e)), e;
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
      (i) => i.active && Date.now() - i.timestamp < we.SESSION_TIMEOUT
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
var se = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(se || {});
class wu {
  constructor(e, t) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = we.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = we.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = la(e.getAll()), this.setupVisibilityChangeListener();
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
        const i = Zi.handle(t, {
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
    }, we.VISIBILITY_PING_TIMEOUT);
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
    const t = It().getCurrent();
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = e ? we.MOBILE_HEARTBEAT_INTERVAL : we.HEARTBEAT_INTERVAL;
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
var yu = /* @__PURE__ */ K('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></header>');
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
function Rl(n, e) {
  jt(e, !0), ln(n, xu);
  let t = Re(e, "onclose", 7), i = Re(e, "connectionState", 23, () => se.DISCONNECTED), s = Re(e, "connectionFailed", 7, !1);
  const r = /* @__PURE__ */ be(() => {
    if (s()) return "var(--widget-error)";
    switch (i()) {
      case se.CONNECTED:
        return "var(--widget-success)";
      case se.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      se.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), a = /* @__PURE__ */ be(() => {
    if (s()) return "Connection lost";
    switch (i()) {
      case se.CONNECTED:
        return "Connected";
      case se.CONNECTING:
        return "Connecting";
      case se.ERROR:
        return "Connection error";
      case se.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), o = /* @__PURE__ */ be(() => i() === se.CONNECTING ? "pulse-slow" : i() === se.ERROR ? "blink-slow" : "");
  function l() {
    var m;
    de.close(), (m = t()) == null || m();
  }
  var c = {
    get onclose() {
      return t();
    },
    set onclose(m) {
      t(m), ye();
    },
    get connectionState() {
      return i();
    },
    set connectionState(m = se.DISCONNECTED) {
      i(m), ye();
    },
    get connectionFailed() {
      return s();
    },
    set connectionFailed(m = !1) {
      s(m), ye();
    }
  }, d = yu(), h = ne(d), g = ne(h), p = re(g, 2), v = ne(p, !0);
  te(p), te(h);
  var k = re(h, 2);
  return k.__click = l, te(d), it(() => {
    sa(g, 1, `status-dot ${w(o) ?? ""}`, "svelte-g5m62x"), ml(g, `--status-color: ${w(r) ?? ""}`), pt(g, "aria-label", w(a)), pt(g, "title", w(a)), Ci(v, Me.title);
  }), j(n, d), Vt(c);
}
gs(["click"]);
cn(Rl, { onclose: {}, connectionState: {}, connectionFailed: {} }, [], [], !0);
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
function Ll(n) {
  Pn = n;
}
const Ol = /[&<>"']/, ku = new RegExp(Ol.source, "g"), Dl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, _u = new RegExp(Dl.source, "g"), Tu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ka = (n) => Tu[n];
function Ve(n, e) {
  if (e) {
    if (Ol.test(n))
      return n.replace(ku, Ka);
  } else if (Dl.test(n))
    return n.replace(_u, Ka);
  return n;
}
const Su = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Eu(n) {
  return n.replace(Su, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Au = /(^|[^\[])\^/g;
function Q(n, e) {
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
const Ki = { exec: () => null };
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
function As(n, e, t) {
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
  const s = e.href, r = e.title ? Ve(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: Ve(a)
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
    L(this, "options");
    L(this, "rules");
    // set by the lexer
    L(this, "lexer");
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
        text: this.options.pedantic ? i : As(i, `
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
        const s = As(i, "#");
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
      i = As(i.replace(/^ *>[ \t]?/gm, ""), `
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
`, 1)[0].replace(/^\t+/, (x) => " ".repeat(3 * x.length)), g = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, l = h.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, l = h.slice(p), p += t[1].length);
        let v = !1;
        if (!h && /^ *$/.test(g) && (o += g + `
`, e = e.substring(g.length + 1), d = !0), !d) {
          const x = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), O = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), T = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), _ = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const S = e.split(`
`, 1)[0];
            if (g = S, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), T.test(g) || _.test(g) || x.test(g) || O.test(e))
              break;
            if (g.search(/[^ ]/) >= p || !g.trim())
              l += `
` + g.slice(p);
            else {
              if (v || h.search(/[^ ]/) >= 4 || T.test(h) || _.test(h) || O.test(h))
                break;
              l += `
` + g;
            }
            !v && !g.trim() && (v = !0), o += S + `
`, e = e.substring(S.length + 1), h = g.slice(p);
          }
        }
        r.loose || (c ? r.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let k = null, m;
        this.options.gfm && (k = /^\[[ xX]\] /.exec(l), k && (m = k[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), r.items.push({
          type: "list_item",
          raw: o,
          task: !!k,
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
        text: Ve(t[1])
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
        const a = As(i.slice(0, -1), "\\");
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
          const k = p.slice(1, -1);
          return {
            type: "em",
            raw: p,
            text: k,
            tokens: this.lexer.inlineTokens(k)
          };
        }
        const v = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: v,
          tokens: this.lexer.inlineTokens(v)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(i), r = /^ /.test(i) && / $/.test(i);
      return s && r && (i = i.substring(1, i.length - 1)), i = Ve(i, !0), {
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
      return t[2] === "@" ? (i = Ve(t[1]), s = "mailto:" + i) : (i = Ve(t[1]), s = i), {
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
        s = Ve(t[0]), r = "mailto:" + s;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        s = Ve(t[0]), t[1] === "www." ? r = "http://" + t[0] : r = t[0];
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
      return this.lexer.state.inRawBlock ? i = t[0] : i = Ve(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const Mu = /^(?: *(?:\n|$))+/, Ru = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Lu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ou = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Nl = /(?:[*+-]|\d{1,9}[.)])/, $l = Q(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Nl).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), da = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Du = /^[^\n]+/, ua = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Nu = Q(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ua).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $u = Q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Nl).getRegex(), tr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", fa = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Pu = Q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", fa).replace("tag", tr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Pl = Q(da).replace("hr", hs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tr).getRegex(), zu = Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Pl).getRegex(), ga = {
  blockquote: zu,
  code: Ru,
  def: Nu,
  fences: Lu,
  heading: Ou,
  hr: hs,
  html: Pu,
  lheading: $l,
  list: $u,
  newline: Mu,
  paragraph: Pl,
  table: Ki,
  text: Du
}, no = Q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tr).getRegex(), qu = {
  ...ga,
  table: no,
  paragraph: Q(da).replace("hr", hs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", no).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tr).getRegex()
}, Uu = {
  ...ga,
  html: Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", fa).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ki,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Q(da).replace("hr", hs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", $l).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, zl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ql = /^( {2,}|\\)\n(?!\s*$)/, Hu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ps = "\\p{P}\\p{S}", Wu = Q(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ps).getRegex(), Bu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, ju = Q(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ps).getRegex(), Vu = Q("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ps).getRegex(), Gu = Q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ps).getRegex(), Yu = Q(/\\([punct])/, "gu").replace(/punct/g, ps).getRegex(), Qu = Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xu = Q(fa).replace("(?:-->|$)", "-->").getRegex(), Zu = Q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ws = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ku = Q(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Ws).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ul = Q(/^!?\[(label)\]\[(ref)\]/).replace("label", Ws).replace("ref", ua).getRegex(), Fl = Q(/^!?\[(ref)\](?:\[\])?/).replace("ref", ua).getRegex(), Ju = Q("reflink|nolink(?!\\()", "g").replace("reflink", Ul).replace("nolink", Fl).getRegex(), ha = {
  _backpedal: Ki,
  // only used for GFM url
  anyPunctuation: Yu,
  autolink: Qu,
  blockSkip: Bu,
  br: ql,
  code: Fu,
  del: Ki,
  emStrongLDelim: ju,
  emStrongRDelimAst: Vu,
  emStrongRDelimUnd: Gu,
  escape: zl,
  link: Ku,
  nolink: Fl,
  punctuation: Wu,
  reflink: Ul,
  reflinkSearch: Ju,
  tag: Zu,
  text: Hu,
  url: Ki
}, ef = {
  ...ha,
  link: Q(/^!?\[(label)\]\((.*?)\)/).replace("label", Ws).getRegex(),
  reflink: Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ws).getRegex()
}, zr = {
  ...ha,
  escape: Q(zl).replace("])", "~|])").getRegex(),
  url: Q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, tf = {
  ...zr,
  br: Q(ql).replace("{2,}", "*").getRegex(),
  text: Q(zr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Is = {
  normal: ga,
  gfm: qu,
  pedantic: Uu
}, Pi = {
  normal: ha,
  gfm: zr,
  breaks: tf,
  pedantic: ef
};
class Ct {
  constructor(e) {
    L(this, "tokens");
    L(this, "options");
    L(this, "state");
    L(this, "tokenizer");
    L(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Pn, this.options.tokenizer = this.options.tokenizer || new Hs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Is.normal,
      inline: Pi.normal
    };
    this.options.pedantic ? (t.block = Is.pedantic, t.inline = Pi.pedantic) : this.options.gfm && (t.block = Is.gfm, this.options.breaks ? t.inline = Pi.breaks : t.inline = Pi.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Is,
      inline: Pi
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new Ct(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new Ct(t).inlineTokens(e);
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
    L(this, "options");
    this.options = e || Pn;
  }
  code(e, t, i) {
    var r;
    const s = (r = (t || "").match(/^\S*/)) == null ? void 0 : r[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Ve(s) + '">' + (i ? e : Ve(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : Ve(e, !0)) + `</code></pre>
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
class Mt {
  constructor(e) {
    L(this, "options");
    L(this, "renderer");
    L(this, "textRenderer");
    this.options = e || Pn, this.options.renderer = this.options.renderer || new Bs(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new pa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Mt(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Mt(t).parseInline(e);
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
            const g = a.items[h], p = g.checked, v = g.task;
            let k = "";
            if (g.task) {
              const m = this.renderer.checkbox(!!p);
              c ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = m + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = m + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: m + " "
              }) : k += m + " ";
            }
            k += this.parse(g.tokens, c), d += this.renderer.listitem(k, v, !!p);
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
class Ji {
  constructor(e) {
    L(this, "options");
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
L(Ji, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Ln, qr, Hl;
class nf {
  constructor(...e) {
    I(this, Ln);
    L(this, "defaults", ca());
    L(this, "options", this.setOptions);
    L(this, "parse", X(this, Ln, qr).call(this, Ct.lex, Mt.parse));
    L(this, "parseInline", X(this, Ln, qr).call(this, Ct.lexInline, Mt.parseInline));
    L(this, "Parser", Mt);
    L(this, "Renderer", Bs);
    L(this, "TextRenderer", pa);
    L(this, "Lexer", Ct);
    L(this, "Tokenizer", Hs);
    L(this, "Hooks", Ji);
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
        const r = this.defaults.hooks || new Ji();
        for (const a in i.hooks) {
          if (!(a in r))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.hooks[o], c = r[o];
          Ji.passThroughHooks.has(a) ? r[o] = (d) => {
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
    return Ct.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Mt.parse(e, t ?? this.defaults);
  }
}
Ln = new WeakSet(), qr = function(e, t) {
  return (i, s) => {
    const r = { ...s }, a = { ...this.defaults, ...r };
    this.defaults.async === !0 && r.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = X(this, Ln, Hl).call(this, !!a.silent, !!a.async);
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
}, Hl = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const s = "<p>An error occurred:</p><pre>" + Ve(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(s) : s;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const Rn = new nf();
function V(n, e) {
  return Rn.parse(n, e);
}
V.options = V.setOptions = function(n) {
  return Rn.setOptions(n), V.defaults = Rn.defaults, Ll(V.defaults), V;
};
V.getDefaults = ca;
V.defaults = Pn;
V.use = function(...n) {
  return Rn.use(...n), V.defaults = Rn.defaults, Ll(V.defaults), V;
};
V.walkTokens = function(n, e) {
  return Rn.walkTokens(n, e);
};
V.parseInline = Rn.parseInline;
V.Parser = Mt;
V.parser = Mt.parse;
V.Renderer = Bs;
V.TextRenderer = pa;
V.Lexer = Ct;
V.lexer = Ct.lex;
V.Tokenizer = Hs;
V.Hooks = Ji;
V.parse = V;
V.options;
V.setOptions;
V.use;
V.walkTokens;
V.parseInline;
Mt.parse;
Ct.lex;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Wl,
  setPrototypeOf: io,
  isFrozen: sf,
  getPrototypeOf: rf,
  getOwnPropertyDescriptor: af
} = Object;
let {
  freeze: Ne,
  seal: st,
  create: Ur
} = Object, {
  apply: Fr,
  construct: Hr
} = typeof Reflect < "u" && Reflect;
Ne || (Ne = function(e) {
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
const Cs = $e(Array.prototype.forEach), of = $e(Array.prototype.lastIndexOf), so = $e(Array.prototype.pop), zi = $e(Array.prototype.push), lf = $e(Array.prototype.splice), Ns = $e(String.prototype.toLowerCase), hr = $e(String.prototype.toString), pr = $e(String.prototype.match), qi = $e(String.prototype.replace), cf = $e(String.prototype.indexOf), df = $e(String.prototype.trim), dt = $e(Object.prototype.hasOwnProperty), Ie = $e(RegExp.prototype.test), Ui = uf(TypeError);
function $e(n) {
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
function N(n, e) {
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
function xt(n) {
  const e = Ur(null);
  for (const [t, i] of Wl(n))
    dt(n, t) && (Array.isArray(i) ? e[t] = ff(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = xt(i) : e[t] = i);
  return e;
}
function Fi(n, e) {
  for (; n !== null; ) {
    const i = af(n, e);
    if (i) {
      if (i.get)
        return $e(i.get);
      if (typeof i.value == "function")
        return $e(i.value);
    }
    n = rf(n);
  }
  function t() {
    return null;
  }
  return t;
}
const ro = Ne(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), mr = Ne(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vr = Ne(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gf = Ne(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), br = Ne(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), hf = Ne(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ao = Ne(["#text"]), oo = Ne(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), wr = Ne(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), lo = Ne(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ms = Ne(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pf = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), mf = st(/<%[\w\W]*|[\w\W]*%>/gm), vf = st(/\$\{[\w\W]*/gm), bf = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), wf = st(/^aria-[\-\w]+$/), Bl = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yf = st(/^(?:\w+script|data):/i), xf = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), jl = st(/^html$/i), kf = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var co = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: wf,
  ATTR_WHITESPACE: xf,
  CUSTOM_ELEMENT: kf,
  DATA_ATTR: bf,
  DOCTYPE_NAME: jl,
  ERB_EXPR: mf,
  IS_ALLOWED_URI: Bl,
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
}, _f = function() {
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
function Vl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _f();
  const e = (C) => Vl(C);
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
  } = n, v = l.prototype, k = Fi(v, "cloneNode"), m = Fi(v, "remove"), x = Fi(v, "nextSibling"), O = Fi(v, "childNodes"), T = Fi(v, "parentNode");
  if (typeof a == "function") {
    const C = t.createElement("template");
    C.content && C.content.ownerDocument && (t = C.content.ownerDocument);
  }
  let _, S = "";
  const {
    implementation: D,
    createNodeIterator: G,
    createDocumentFragment: oe,
    getElementsByTagName: J
  } = t, {
    importNode: B
  } = i;
  let Y = uo();
  e.isSupported = typeof Wl == "function" && typeof T == "function" && D && D.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: rt,
    ERB_EXPR: Gt,
    TMPLIT_EXPR: Yt,
    DATA_ATTR: zn,
    ARIA_ATTR: Qt,
    IS_SCRIPT_OR_DATA: qn,
    ATTR_WHITESPACE: dn,
    CUSTOM_ELEMENT: Fe
  } = co;
  let {
    IS_ALLOWED_URI: at
  } = co, le = null;
  const ms = N({}, [...ro, ...mr, ...vr, ...br, ...ao]);
  let ge = null;
  const vs = N({}, [...oo, ...wr, ...lo, ...Ms]);
  let b = Object.seal(Ur(null, {
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
  })), M = null, R = null;
  const ie = Object.seal(Ur(null, {
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
  let bt = !0, Un = !0, bs = !1, ws = !0, Xt = !1, Fn = !0, he = !1, He = !1, Oi = !1, Zt = !1, Hn = !1, ot = !1, Kt = !0, Wn = !1;
  const tc = "user-content-";
  let nr = !0, Di = !1, Bn = {}, wt = null;
  const ir = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let va = null;
  const ba = N({}, ["audio", "video", "img", "source", "image", "track"]);
  let sr = null;
  const wa = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ys = "http://www.w3.org/1998/Math/MathML", xs = "http://www.w3.org/2000/svg", Nt = "http://www.w3.org/1999/xhtml";
  let jn = Nt, rr = !1, ar = null;
  const nc = N({}, [ys, xs, Nt], hr);
  let ks = N({}, ["mi", "mo", "mn", "ms", "mtext"]), _s = N({}, ["annotation-xml"]);
  const ic = N({}, ["title", "style", "font", "a", "script"]);
  let Ni = null;
  const sc = ["application/xhtml+xml", "text/html"], rc = "text/html";
  let pe = null, Vn = null;
  const ac = t.createElement("form"), ya = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, or = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Vn && Vn === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = xt(u), Ni = // eslint-disable-next-line unicorn/prefer-includes
      sc.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? rc : u.PARSER_MEDIA_TYPE, pe = Ni === "application/xhtml+xml" ? hr : Ns, le = dt(u, "ALLOWED_TAGS") ? N({}, u.ALLOWED_TAGS, pe) : ms, ge = dt(u, "ALLOWED_ATTR") ? N({}, u.ALLOWED_ATTR, pe) : vs, ar = dt(u, "ALLOWED_NAMESPACES") ? N({}, u.ALLOWED_NAMESPACES, hr) : nc, sr = dt(u, "ADD_URI_SAFE_ATTR") ? N(xt(wa), u.ADD_URI_SAFE_ATTR, pe) : wa, va = dt(u, "ADD_DATA_URI_TAGS") ? N(xt(ba), u.ADD_DATA_URI_TAGS, pe) : ba, wt = dt(u, "FORBID_CONTENTS") ? N({}, u.FORBID_CONTENTS, pe) : ir, M = dt(u, "FORBID_TAGS") ? N({}, u.FORBID_TAGS, pe) : xt({}), R = dt(u, "FORBID_ATTR") ? N({}, u.FORBID_ATTR, pe) : xt({}), Bn = dt(u, "USE_PROFILES") ? u.USE_PROFILES : !1, bt = u.ALLOW_ARIA_ATTR !== !1, Un = u.ALLOW_DATA_ATTR !== !1, bs = u.ALLOW_UNKNOWN_PROTOCOLS || !1, ws = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Xt = u.SAFE_FOR_TEMPLATES || !1, Fn = u.SAFE_FOR_XML !== !1, he = u.WHOLE_DOCUMENT || !1, Zt = u.RETURN_DOM || !1, Hn = u.RETURN_DOM_FRAGMENT || !1, ot = u.RETURN_TRUSTED_TYPE || !1, Oi = u.FORCE_BODY || !1, Kt = u.SANITIZE_DOM !== !1, Wn = u.SANITIZE_NAMED_PROPS || !1, nr = u.KEEP_CONTENT !== !1, Di = u.IN_PLACE || !1, at = u.ALLOWED_URI_REGEXP || Bl, jn = u.NAMESPACE || Nt, ks = u.MATHML_TEXT_INTEGRATION_POINTS || ks, _s = u.HTML_INTEGRATION_POINTS || _s, b = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && ya(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (b.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && ya(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (b.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (b.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Xt && (Un = !1), Hn && (Zt = !0), Bn && (le = N({}, ao), ge = [], Bn.html === !0 && (N(le, ro), N(ge, oo)), Bn.svg === !0 && (N(le, mr), N(ge, wr), N(ge, Ms)), Bn.svgFilters === !0 && (N(le, vr), N(ge, wr), N(ge, Ms)), Bn.mathMl === !0 && (N(le, br), N(ge, lo), N(ge, Ms))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? ie.tagCheck = u.ADD_TAGS : (le === ms && (le = xt(le)), N(le, u.ADD_TAGS, pe))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? ie.attributeCheck = u.ADD_ATTR : (ge === vs && (ge = xt(ge)), N(ge, u.ADD_ATTR, pe))), u.ADD_URI_SAFE_ATTR && N(sr, u.ADD_URI_SAFE_ATTR, pe), u.FORBID_CONTENTS && (wt === ir && (wt = xt(wt)), N(wt, u.FORBID_CONTENTS, pe)), u.ADD_FORBID_CONTENTS && (wt === ir && (wt = xt(wt)), N(wt, u.ADD_FORBID_CONTENTS, pe)), nr && (le["#text"] = !0), he && N(le, ["html", "head", "body"]), le.table && (N(le, ["tbody"]), delete M.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        _ = u.TRUSTED_TYPES_POLICY, S = _.createHTML("");
      } else
        _ === void 0 && (_ = Tf(p, s)), _ !== null && typeof S == "string" && (S = _.createHTML(""));
      Ne && Ne(u), Vn = u;
    }
  }, xa = N({}, [...mr, ...vr, ...gf]), ka = N({}, [...br, ...hf]), oc = function(u) {
    let y = T(u);
    (!y || !y.tagName) && (y = {
      namespaceURI: jn,
      tagName: "template"
    });
    const A = Ns(u.tagName), ee = Ns(y.tagName);
    return ar[u.namespaceURI] ? u.namespaceURI === xs ? y.namespaceURI === Nt ? A === "svg" : y.namespaceURI === ys ? A === "svg" && (ee === "annotation-xml" || ks[ee]) : !!xa[A] : u.namespaceURI === ys ? y.namespaceURI === Nt ? A === "math" : y.namespaceURI === xs ? A === "math" && _s[ee] : !!ka[A] : u.namespaceURI === Nt ? y.namespaceURI === xs && !_s[ee] || y.namespaceURI === ys && !ks[ee] ? !1 : !ka[A] && (ic[A] || !xa[A]) : !!(Ni === "application/xhtml+xml" && ar[u.namespaceURI]) : !1;
  }, yt = function(u) {
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
          yt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(u, "");
        } catch {
        }
  }, _a = function(u) {
    let y = null, A = null;
    if (Oi)
      u = "<remove></remove>" + u;
    else {
      const ce = pr(u, /^[\r\n\t ]+/);
      A = ce && ce[0];
    }
    Ni === "application/xhtml+xml" && jn === Nt && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const ee = _ ? _.createHTML(u) : u;
    if (jn === Nt)
      try {
        y = new g().parseFromString(ee, Ni);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = D.createDocument(jn, "template", null);
      try {
        y.documentElement.innerHTML = rr ? S : ee;
      } catch {
      }
    }
    const _e = y.body || y.documentElement;
    return u && A && _e.insertBefore(t.createTextNode(A), _e.childNodes[0] || null), jn === Nt ? J.call(y, he ? "html" : "body")[0] : he ? y.documentElement : _e;
  }, Ta = function(u) {
    return G.call(
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
  function $t(C, u, y) {
    Cs(C, (A) => {
      A.call(e, u, y, Vn);
    });
  }
  const Ea = function(u) {
    let y = null;
    if ($t(Y.beforeSanitizeElements, u, null), lr(u))
      return yt(u), !0;
    const A = pe(u.nodeName);
    if ($t(Y.uponSanitizeElement, u, {
      tagName: A,
      allowedTags: le
    }), Fn && u.hasChildNodes() && !Sa(u.firstElementChild) && Ie(/<[/\w!]/g, u.innerHTML) && Ie(/<[/\w!]/g, u.textContent) || u.nodeType === Hi.progressingInstruction || Fn && u.nodeType === Hi.comment && Ie(/<[/\w]/g, u.data))
      return yt(u), !0;
    if (!(ie.tagCheck instanceof Function && ie.tagCheck(A)) && (!le[A] || M[A])) {
      if (!M[A] && Ia(A) && (b.tagNameCheck instanceof RegExp && Ie(b.tagNameCheck, A) || b.tagNameCheck instanceof Function && b.tagNameCheck(A)))
        return !1;
      if (nr && !wt[A]) {
        const ee = T(u) || u.parentNode, _e = O(u) || u.childNodes;
        if (_e && ee) {
          const ce = _e.length;
          for (let Pe = ce - 1; Pe >= 0; --Pe) {
            const Pt = k(_e[Pe], !0);
            Pt.__removalCount = (u.__removalCount || 0) + 1, ee.insertBefore(Pt, x(u));
          }
        }
      }
      return yt(u), !0;
    }
    return u instanceof l && !oc(u) || (A === "noscript" || A === "noembed" || A === "noframes") && Ie(/<\/no(script|embed|frames)/i, u.innerHTML) ? (yt(u), !0) : (Xt && u.nodeType === Hi.text && (y = u.textContent, Cs([rt, Gt, Yt], (ee) => {
      y = qi(y, ee, " ");
    }), u.textContent !== y && (zi(e.removed, {
      element: u.cloneNode()
    }), u.textContent = y)), $t(Y.afterSanitizeElements, u, null), !1);
  }, Aa = function(u, y, A) {
    if (Kt && (y === "id" || y === "name") && (A in t || A in ac))
      return !1;
    if (!(Un && !R[y] && Ie(zn, y))) {
      if (!(bt && Ie(Qt, y))) {
        if (!(ie.attributeCheck instanceof Function && ie.attributeCheck(y, u))) {
          if (!ge[y] || R[y]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ia(u) && (b.tagNameCheck instanceof RegExp && Ie(b.tagNameCheck, u) || b.tagNameCheck instanceof Function && b.tagNameCheck(u)) && (b.attributeNameCheck instanceof RegExp && Ie(b.attributeNameCheck, y) || b.attributeNameCheck instanceof Function && b.attributeNameCheck(y, u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              y === "is" && b.allowCustomizedBuiltInElements && (b.tagNameCheck instanceof RegExp && Ie(b.tagNameCheck, A) || b.tagNameCheck instanceof Function && b.tagNameCheck(A)))
            ) return !1;
          } else if (!sr[y]) {
            if (!Ie(at, qi(A, dn, ""))) {
              if (!((y === "src" || y === "xlink:href" || y === "href") && u !== "script" && cf(A, "data:") === 0 && va[u])) {
                if (!(bs && !Ie(qn, qi(A, dn, "")))) {
                  if (A)
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
    return u !== "annotation-xml" && pr(u, Fe);
  }, Ca = function(u) {
    $t(Y.beforeSanitizeAttributes, u, null);
    const {
      attributes: y
    } = u;
    if (!y || lr(u))
      return;
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let ee = y.length;
    for (; ee--; ) {
      const _e = y[ee], {
        name: ce,
        namespaceURI: Pe,
        value: Pt
      } = _e, Gn = pe(ce), cr = Pt;
      let ve = ce === "value" ? cr : df(cr);
      if (A.attrName = Gn, A.attrValue = ve, A.keepAttr = !0, A.forceKeepAttr = void 0, $t(Y.uponSanitizeAttribute, u, A), ve = A.attrValue, Wn && (Gn === "id" || Gn === "name") && (un(ce, u), ve = tc + ve), Fn && Ie(/((--!?|])>)|<\/(style|title|textarea)/i, ve)) {
        un(ce, u);
        continue;
      }
      if (Gn === "attributename" && pr(ve, "href")) {
        un(ce, u);
        continue;
      }
      if (A.forceKeepAttr)
        continue;
      if (!A.keepAttr) {
        un(ce, u);
        continue;
      }
      if (!ws && Ie(/\/>/i, ve)) {
        un(ce, u);
        continue;
      }
      Xt && Cs([rt, Gt, Yt], (Ra) => {
        ve = qi(ve, Ra, " ");
      });
      const Ma = pe(u.nodeName);
      if (!Aa(Ma, Gn, ve)) {
        un(ce, u);
        continue;
      }
      if (_ && typeof p == "object" && typeof p.getAttributeType == "function" && !Pe)
        switch (p.getAttributeType(Ma, Gn)) {
          case "TrustedHTML": {
            ve = _.createHTML(ve);
            break;
          }
          case "TrustedScriptURL": {
            ve = _.createScriptURL(ve);
            break;
          }
        }
      if (ve !== cr)
        try {
          Pe ? u.setAttributeNS(Pe, ce, ve) : u.setAttribute(ce, ve), lr(u) ? yt(u) : so(e.removed);
        } catch {
          un(ce, u);
        }
    }
    $t(Y.afterSanitizeAttributes, u, null);
  }, lc = function C(u) {
    let y = null;
    const A = Ta(u);
    for ($t(Y.beforeSanitizeShadowDOM, u, null); y = A.nextNode(); )
      $t(Y.uponSanitizeShadowNode, y, null), Ea(y), Ca(y), y.content instanceof r && C(y.content);
    $t(Y.afterSanitizeShadowDOM, u, null);
  };
  return e.sanitize = function(C) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, A = null, ee = null, _e = null;
    if (rr = !C, rr && (C = "<!-->"), typeof C != "string" && !Sa(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw Ui("dirty is not a string, aborting");
      } else
        throw Ui("toString is not a function");
    if (!e.isSupported)
      return C;
    if (He || or(u), e.removed = [], typeof C == "string" && (Di = !1), Di) {
      if (C.nodeName) {
        const Pt = pe(C.nodeName);
        if (!le[Pt] || M[Pt])
          throw Ui("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof o)
      y = _a("<!---->"), A = y.ownerDocument.importNode(C, !0), A.nodeType === Hi.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? y = A : y.appendChild(A);
    else {
      if (!Zt && !Xt && !he && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return _ && ot ? _.createHTML(C) : C;
      if (y = _a(C), !y)
        return Zt ? null : ot ? S : "";
    }
    y && Oi && yt(y.firstChild);
    const ce = Ta(Di ? C : y);
    for (; ee = ce.nextNode(); )
      Ea(ee), Ca(ee), ee.content instanceof r && lc(ee.content);
    if (Di)
      return C;
    if (Zt) {
      if (Hn)
        for (_e = oe.call(y.ownerDocument); y.firstChild; )
          _e.appendChild(y.firstChild);
      else
        _e = y;
      return (ge.shadowroot || ge.shadowrootmode) && (_e = B.call(i, _e, !0)), _e;
    }
    let Pe = he ? y.outerHTML : y.innerHTML;
    return he && le["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && Ie(jl, y.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Pe), Xt && Cs([rt, Gt, Yt], (Pt) => {
      Pe = qi(Pe, Pt, " ");
    }), _ && ot ? _.createHTML(Pe) : Pe;
  }, e.setConfig = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    or(C), He = !0;
  }, e.clearConfig = function() {
    Vn = null, He = !1;
  }, e.isValidAttribute = function(C, u, y) {
    Vn || or({});
    const A = pe(C), ee = pe(u);
    return Aa(A, ee, y);
  }, e.addHook = function(C, u) {
    typeof u == "function" && zi(Y[C], u);
  }, e.removeHook = function(C, u) {
    if (u !== void 0) {
      const y = of(Y[C], u);
      return y === -1 ? void 0 : lf(Y[C], y, 1)[0];
    }
    return so(Y[C]);
  }, e.removeHooks = function(C) {
    Y[C] = [];
  }, e.removeAllHooks = function() {
    Y = uo();
  }, e;
}
var Gl = Vl();
V.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
Gl.addHook("afterSanitizeAttributes", (n) => {
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
  const e = V.parse(n);
  return Gl.sanitize(e, {
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
var Ef = /* @__PURE__ */ K('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Af = /* @__PURE__ */ K('<span class="message-content"> </span>'), If = /* @__PURE__ */ K('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Cf = /* @__PURE__ */ K('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Mf = /* @__PURE__ */ K('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
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
function Yl(n, e) {
  jt(e, !0), ln(n, Rf);
  let t = Re(e, "message", 7);
  function i(T) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(T);
  }
  const s = /* @__PURE__ */ be(() => t().role === "user"), r = /* @__PURE__ */ be(() => t().role === "assistant" ? Sf(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(T) {
      t(T), ye();
    }
  }, o = Mf();
  let l;
  var c = ne(o), d = ne(c);
  {
    var h = (T) => {
      var _ = Ef(), S = ne(_);
      Ed(S, () => w(r)), te(_), j(T, _);
    }, g = (T) => {
      var _ = Af(), S = ne(_, !0);
      te(_), it(() => Ci(S, t().content)), j(T, _);
    };
    Se(d, (T) => {
      t().role === "assistant" ? T(h) : T(g, !1);
    });
  }
  var p = re(d, 2);
  {
    var v = (T) => {
      var _ = If();
      j(T, _);
    };
    Se(p, (T) => {
      t().status === "sending" && T(v);
    });
  }
  var k = re(p, 2);
  {
    var m = (T) => {
      var _ = Cf();
      j(T, _);
    };
    Se(k, (T) => {
      t().status === "failed" && T(m);
    });
  }
  te(c);
  var x = re(c, 2), O = ne(x, !0);
  return te(x), te(o), it(
    (T, _) => {
      l = sa(o, 1, "message svelte-1uqoiy7", null, l, { user: w(s), assistant: !w(s) }), pt(o, "aria-label", w(s) ? "Your message" : "Assistant message"), pt(x, "aria-label", T), Ci(O, _);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), j(n, o), Vt(a);
}
cn(Yl, { message: {} }, [], [], !0);
Bc();
var Lf = /* @__PURE__ */ K('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
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
function Ql(n, e) {
  jt(e, !1), ln(n, Of), zd();
  var t = fl(), i = Qi(t);
  {
    var s = (r) => {
      var a = Lf();
      j(r, a);
    };
    Se(i, (r) => {
      $.isTyping && r(s);
    });
  }
  j(n, t), Vt();
}
cn(Ql, {}, [], [], !0);
var Df = /* @__PURE__ */ K('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Nf = /* @__PURE__ */ K('<div class="quick-questions svelte-otpvm8" role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
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
  }.question-chip.svelte-otpvm8:hover {background:var(--widget-primary);color:var(--widget-text-inverse);transform:translateY(-1px);box-shadow:var(--widget-shadow-md);}.question-chip.svelte-otpvm8:active {transform:translateY(0) scale(0.98);}.question-chip.svelte-otpvm8:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;box-shadow:var(--widget-shadow-focus);}.question-chip.svelte-otpvm8:disabled {opacity:0.7;cursor:not-allowed;border:1.5px solid var(--widget-text-muted);color:var(--widget-text-secondary);pointer-events:none;}.question-chip.svelte-otpvm8:disabled:hover,
  .question-chip.svelte-otpvm8:disabled:active {background:transparent;color:var(--widget-text-secondary);transform:none;box-shadow:none;}[data-theme="dark"] .question-chip.svelte-otpvm8:disabled {border:1.5px solid var(--widget-text-muted);color:var(--widget-text-muted);}[data-theme="dark"] .question-chip.svelte-otpvm8 {border-color:var(--widget-primary-light);color:var(--widget-primary-light);}[data-theme="dark"] .question-chip.svelte-otpvm8:hover {background:var(--widget-primary-light);color:var(--widget-text-inverse);}`
};
function Xl(n, e) {
  jt(e, !0), ln(n, $f);
  const t = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let i = Re(e, "questions", 7, t), s = Re(e, "onsend", 7), r = Re(e, "disabled", 7, !1);
  function a(d) {
    var h;
    r() || (h = s()) == null || h(d);
  }
  var o = {
    get questions() {
      return i();
    },
    set questions(d = t) {
      i(d), ye();
    },
    get onsend() {
      return s();
    },
    set onsend(d) {
      s(d), ye();
    },
    get disabled() {
      return r();
    },
    set disabled(d = !1) {
      r(d), ye();
    }
  }, l = Nf(), c = re(ne(l), 2);
  return hl(c, 18, i, (d) => d, (d, h, g) => {
    var p = Df();
    p.__click = () => a(h);
    var v = ne(p, !0);
    te(p), it(() => {
      p.disabled = r(), ml(p, `animation-delay: ${2.8 + w(g) * 0.2}s`), pt(p, "aria-disabled", r() ? "true" : "false"), Ci(v, h);
    }), j(d, p);
  }), te(l), j(n, l), Vt(o);
}
gs(["click"]);
cn(Xl, { questions: {}, onsend: {}, disabled: {} }, [], [], !0);
var Pf = /* @__PURE__ */ K('<p class="initial-message svelte-qha2j"> </p>'), zf = /* @__PURE__ */ K('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), qf = /* @__PURE__ */ K('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Uf = /* @__PURE__ */ K('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Ff = /* @__PURE__ */ K('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
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
function Zl(n, e) {
  jt(e, !0), ln(n, Hf);
  let t = Re(e, "onsend", 7), i = Re(e, "connectionState", 23, () => se.DISCONNECTED), s, r = !0;
  const a = /* @__PURE__ */ be(() => $.messages.length > 0), o = /* @__PURE__ */ be(() => i() !== se.CONNECTED);
  kn(() => {
    $.messages, r && w(a) && l();
  }), kn(() => {
    $.isTyping, r && w(a) && l();
  }), kn(() => {
    $.streamingUpdateSignal, r && $.isStreaming && l();
  });
  async function l() {
    await ll(), s && (s.scrollTop = s.scrollHeight);
  }
  function c() {
    if (s) {
      const { scrollTop: x, scrollHeight: O, clientHeight: T } = s;
      r = O - x - T < 100;
    }
  }
  aa(() => {
    w(a) && l();
  });
  var d = {
    get onsend() {
      return t();
    },
    set onsend(x) {
      t(x), ye();
    },
    get connectionState() {
      return i();
    },
    set connectionState(x = se.DISCONNECTED) {
      i(x), ye();
    }
  }, h = Ff(), g = ne(h);
  {
    var p = (x) => {
      var O = zf(), T = ne(O), _ = ne(T), S = ne(_);
      te(_), Qr(2), te(T);
      var D = re(T, 2);
      {
        var G = (J) => {
          var B = Pf(), Y = ne(B, !0);
          te(B), it(() => Ci(Y, Me.initialMessage)), j(J, B);
        };
        Se(D, (J) => {
          Me.initialMessage && J(G);
        });
      }
      var oe = re(D, 2);
      Xl(oe, {
        get questions() {
          return Me.quickQuestions;
        },
        get onsend() {
          return t();
        },
        get disabled() {
          return w(o);
        }
      }), te(O), it(() => pt(S, "src", iu)), j(x, O);
    }, v = (x) => {
      var O = qf(), T = ne(O);
      hl(T, 17, () => $.messages, (S) => S.id, (S, D) => {
        Yl(S, {
          get message() {
            return w(D);
          }
        });
      });
      var _ = re(T, 2);
      Ql(_, {}), te(O), j(x, O);
    };
    Se(g, (x) => {
      $.messages.length === 0 ? x(p) : x(v, !1);
    });
  }
  var k = re(g, 2);
  {
    var m = (x) => {
      var O = Uf(), T = re(ne(O), 2), _ = ne(T, !0);
      te(T), te(O), it(() => Ci(_, $.error)), j(x, O);
    };
    Se(k, (x) => {
      $.error && x(m);
    });
  }
  return te(h), ra(h, (x) => s = x, () => s), bd("scroll", h, c), j(n, h), Vt(d);
}
cn(Zl, { onsend: {}, connectionState: {} }, [], [], !0);
var Wf = /* @__PURE__ */ K('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), Bf = /* @__PURE__ */ K('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), jf = /* @__PURE__ */ K('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const Vf = {
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

  /* Connection status indicator */.connection-status.svelte-1a8gd73 {text-align:center;font-size:var(--widget-font-size-xs);padding:6px 0;line-height:1.4;letter-spacing:0.02em;color:var(--widget-text-muted);display:flex;align-items:center;justify-content:center;gap:8px;opacity:0;
    animation: svelte-1a8gd73-brandBannerIn 0.3s ease 3.5s forwards;}.connecting-text.svelte-1a8gd73 {font-weight:var(--widget-font-weight-medium);}

  /* Pulsing dot animation */.connecting-dot.svelte-1a8gd73 {width:6px;height:6px;border-radius:50%;background:var(--widget-primary);
    animation: svelte-1a8gd73-pulse 1.5s ease-in-out infinite;}

  @keyframes svelte-1a8gd73-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  /* Dark theme */[data-theme="dark"] .connection-status.svelte-1a8gd73 {color:var(--widget-text-subtle);}[data-theme="dark"] .connecting-dot.svelte-1a8gd73 {background:var(--widget-primary-light);}

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {.connection-status.svelte-1a8gd73 {
      animation: svelte-1a8gd73-brandBannerIn 0.2s ease forwards;}.connecting-dot.svelte-1a8gd73 {
      animation: none;}
  }

  /* Mobile: increase touch target */
  @media (max-width: 767px) {.connection-status.svelte-1a8gd73 {padding:6px 0;}
  }

  /* AI Disclaimer */.ai-disclaimer.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);text-align:center;font-size:var(--widget-font-size-xs);color:var(--widget-text-subtle);opacity:0.8;user-select:none;pointer-events:none;margin-top:var(--widget-space-sm);}[data-theme="dark"] .ai-disclaimer.svelte-1a8gd73 {color:var(--widget-text-muted);opacity:0.7;}

  @media (max-width: 767px) {.ai-disclaimer.svelte-1a8gd73 {font-size:0.6875rem; /* 11px */}
  }`
};
function Kl(n, e) {
  jt(e, !0), ln(n, Vf);
  let t = Re(e, "onsend", 7), i = Re(e, "disabled", 7, !1), s = Re(e, "showBrandBanner", 7, !1), r = Re(e, "connectionState", 23, () => se.DISCONNECTED), a = /* @__PURE__ */ H(""), o;
  function l() {
    var G, oe, J, B;
    const S = It().generate();
    Z.log("InputBar", "handleSend() called", {
      correlationId: S,
      rawInputValue: w(a),
      rawLength: ((G = w(a)) == null ? void 0 : G.length) || 0,
      rawType: typeof w(a),
      disabled: i(),
      isTyping: $.isTyping
    });
    const D = w(a).trim();
    Z.log("InputBar", "After trimming", {
      correlationId: S,
      original: w(a),
      trimmed: D,
      originalLength: ((oe = w(a)) == null ? void 0 : oe.length) || 0,
      trimmedLength: (D == null ? void 0 : D.length) || 0,
      wasEmptyAfterTrim: !D,
      hadWhitespaceOnly: (((J = w(a)) == null ? void 0 : J.length) || 0) > 0 && !D
    }), D && !i() && !$.isTyping ? (Z.log("InputBar", "Conditions met, calling onsend", {
      correlationId: S,
      trimmedValue: D,
      trimmedLength: D.length,
      willSend: !0
    }), It().setCurrent(S), (B = t()) == null || B(D), q(a, ""), d()) : Z.log("InputBar", "Send blocked", {
      correlationId: S,
      hasContent: !!D,
      disabled: i(),
      isTyping: $.isTyping,
      trimmedValue: D || "(empty)",
      reason: D ? i() ? "disabled" : $.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function c(S) {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), l());
  }
  function d() {
    o && (o.style.height = "auto", o.style.height = Math.min(o.scrollHeight, 120) + "px");
  }
  const h = /* @__PURE__ */ be(() => i() || $.isTyping || $.error !== null), g = /* @__PURE__ */ be(() => $.isTyping ? "Waiting for response..." : $.error ? "Error occurred" : Me.placeholder), p = /* @__PURE__ */ be(() => r() === se.CONNECTING || r() === se.DISCONNECTED);
  var v = {
    get onsend() {
      return t();
    },
    set onsend(S) {
      t(S), ye();
    },
    get disabled() {
      return i();
    },
    set disabled(S = !1) {
      i(S), ye();
    },
    get showBrandBanner() {
      return s();
    },
    set showBrandBanner(S = !1) {
      s(S), ye();
    },
    get connectionState() {
      return r();
    },
    set connectionState(S = se.DISCONNECTED) {
      r(S), ye();
    }
  }, k = jf(), m = ne(k);
  {
    var x = (S) => {
      var D = fl(), G = Qi(D);
      {
        var oe = (B) => {
          var Y = Wf();
          j(B, Y);
        }, J = (B) => {
          var Y = Bf();
          j(B, Y);
        };
        Se(G, (B) => {
          w(p) ? B(oe) : B(J, !1);
        });
      }
      j(S, D);
    };
    Se(m, (S) => {
      s() && S(x);
    });
  }
  var O = re(m, 2), T = ne(O);
  nd(T), T.__keydown = c, T.__input = d, ra(T, (S) => o = S, () => o);
  var _ = re(T, 2);
  return _.__click = l, te(O), Qr(2), te(k), it(
    (S) => {
      pt(T, "placeholder", w(g)), T.disabled = w(h), _.disabled = S;
    },
    [() => w(h) || !w(a).trim()]
  ), Pd(T, () => w(a), (S) => q(a, S)), j(n, k), Vt(v);
}
gs(["keydown", "input", "click"]);
cn(
  Kl,
  {
    onsend: {},
    disabled: {},
    showBrandBanner: {},
    connectionState: {}
  },
  [],
  [],
  !0
);
class Gf {
  constructor(e, t) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = la(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), we.API_TIMEOUT), i = Vi.getApiUrl("init", {
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
      const r = It().getCurrent(), a = await fetch(i, {
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
      if (e instanceof Xi || e instanceof Zn || e instanceof Kn)
        throw e;
      const t = Zi.handle(e, {
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
    const t = It().getCurrent();
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
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: t, error: r.error }), new Xi(r.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: t }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), we.API_TIMEOUT), l = {
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
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: r }), r instanceof Xi || r instanceof Zn || r instanceof Kn)
        throw r;
      const a = Zi.handle(r, {
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), we.API_TIMEOUT), i = Vi.getApiUrl("sessionHealth", {
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
      const r = It().getCurrent(), a = await fetch(i, {
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), we.API_TIMEOUT), i = Vi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, r = It().getCurrent(), a = await fetch(i, {
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
      const t = Zi.handle(e, {
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
class Yf {
  constructor(e, t, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = we.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = t, this.debugLogger = i;
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
    t && !this.chatStore.hasMessages && (Me.setBackendInitialMessage(t), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: Me.initialMessage === t ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, t = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && t > we.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, we.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = we.TYPING_FALLBACK_TIMEOUT) {
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
var Qf = /* @__PURE__ */ K('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Xf = /* @__PURE__ */ K('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Zf = /* @__PURE__ */ K('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Kf = /* @__PURE__ */ K('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Jf = /* @__PURE__ */ K('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), eg = /* @__PURE__ */ K('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const tg = {
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
function Jl(n, e) {
  jt(e, !0), ln(n, tg);
  let t = Re(e, "hostElement", 7), i, s, r, a, o, l;
  const c = It();
  let d = !1, h = !1, g = null, p = /* @__PURE__ */ H(me(se.DISCONNECTED)), v = /* @__PURE__ */ H(
    !1
    // Track if max reconnection attempts exhausted
  ), k = /* @__PURE__ */ H(null), m = null;
  function x() {
    var M;
    if ((M = t()) != null && M.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function O(b) {
    const M = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), R = b.querySelectorAll(M);
    if (R.length === 0) return;
    const ie = R[0], bt = R[R.length - 1];
    return requestAnimationFrame(() => ie.focus()), { firstFocusable: ie, lastFocusable: bt };
  }
  function T(b) {
    if (b.key === "Escape" && de.isOpen) {
      b.preventDefault(), de.close(), S();
      return;
    }
    if (b.key === "Tab" && w(k)) {
      const M = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), R = w(k).querySelectorAll(M);
      if (R.length === 0) return;
      const ie = R[0], bt = R[R.length - 1];
      b.shiftKey && document.activeElement === ie ? (b.preventDefault(), bt.focus()) : !b.shiftKey && document.activeElement === bt && (b.preventDefault(), ie.focus());
    }
  }
  function _() {
    m = document.activeElement;
  }
  function S() {
    m && typeof m.focus == "function" && requestAnimationFrame(() => m == null ? void 0 : m.focus()), m = null;
  }
  function D() {
    w(k) && O(w(k));
  }
  aa(async () => {
    try {
      if (i = new hu(t()), l = la(i.getAll()), s = new Pr(), r = new Gf(i, s), a = new wu(i, s), o = new Yf($, de, l), t()) {
        const { configStore: M } = await Promise.resolve().then(() => tu);
        M.loadFromAttributes(t());
      }
      oe(), x(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", B), a.on("stateChange", (M) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: w(p),
          newState: M,
          timestamp: Date.now()
        }), q(p, M, !0);
      }), a.on("error", (M) => {
        l.error("ChatWidget", "WebSocket error event", M), g = M.error, $.setError(M.error);
      }), a.on("connectionFailed", (M) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", M), q(v, !0), g = M.error, $.setError(M.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), de.isOpen && await G();
      const b = t();
      b != null && b.setOnOpenChangeCallback && b.setOnOpenChangeCallback((M) => {
        rt(M);
      }), l.log("ChatWidget", "Services initialized successfully");
    } catch (b) {
      l.error("ChatWidget", "Initialization failed", b), g = b instanceof Error ? b.message : "Failed to initialize chat";
    }
  }), kn(() => {
    const b = de.isOpen;
    if (t()) {
      const M = t().hasAttribute("open");
      b && !M ? t().setAttribute("open", "") : !b && M && t().removeAttribute("open");
    }
  }), Wd(() => {
    const b = r == null ? void 0 : r.getSessionId();
    b && s.markSessionInactive(b), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function G() {
    var b;
    if (!(d || h)) {
      h = !0;
      try {
        if (de.setLoading(!0), await r.resumeSession()) {
          const R = r.getSessionId();
          R && (await a.connect(R), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            we.CONNECTION_DELAY
          ));
        } else {
          const R = await r.initialize();
          (b = R.assistant_info) != null && b.assistant_name && Me.setBackendTitle(R.assistant_info.assistant_name), await a.connect(R.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            we.CONNECTION_DELAY
          ), R.settings && J(R.settings);
        }
        d = !0;
      } catch (M) {
        g = M instanceof Error ? M.message : "Failed to initialize", $.setError(g);
      } finally {
        de.setLoading(!1), h = !1;
      }
    }
  }
  function oe() {
    const b = i.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", b.theme || "modern"), b.primary_color || b.accent_color)) {
        const M = b.accent_color || b.primary_color;
        if (M) {
          const R = oa(M, "#6b46c1");
          t().style.setProperty("--widget-primary", R), t().style.setProperty("--widget-primary-hover", gt(R, -20)), t().style.setProperty("--widget-primary-light", gt(R, 20)), t().style.setProperty("--widget-primary-dark", gt(R, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${R} 0%, ${gt(R, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${gt(R, -20)} 0%, ${R} 100%)`);
        }
      }
    });
  }
  function J(b) {
    requestAnimationFrame(() => {
      t() && (b.theme && typeof b.theme == "string" && t().setAttribute("data-theme", b.theme), b.primary_color && typeof b.primary_color == "string" && t().style.setProperty("--widget-primary", b.primary_color));
    });
  }
  function B(b) {
    o.handleMessage(b);
  }
  async function Y(b) {
    const M = c.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: M,
      content: b,
      length: (b == null ? void 0 : b.length) || 0,
      trimmed: (b == null ? void 0 : b.trim()) || "",
      type: typeof b
    });
    const R = $.addMessage(b, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: M,
      messageId: R.id,
      content: R.content,
      length: R.content.length
    }), d || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: M }), await G()), l.log("ChatWidget", "Connection state", {
      correlationId: M,
      connectionState: w(p),
      isConnected: w(p) === se.CONNECTED,
      routingTo: w(p) === se.CONNECTED ? "WebSocket" : "HTTP API"
    }), w(p) === se.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: M, content: b });
      try {
        o.setTypingWithTimeout(), a.send(b), $.updateMessageStatus(R.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: R.id });
      } catch (ie) {
        l.error("ChatWidget", "WebSocket send error", ie), $.updateMessageStatus(R.id, "failed"), $.setError("Failed to send message. Please try again."), $.setTyping(!1);
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: M, content: b }), o.setTypingWithTimeout();
        const ie = await r.sendMessage(b);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: M,
          response: ie.response,
          sessionId: ie.session_id
        }), $.addMessage(ie.response, "assistant"), $.setTyping(!1), de.isOpen || de.markUnread();
      } catch (ie) {
        l.error("ChatWidget", "HTTP API error", ie), g = "Failed to send message. Please try again.", $.setError(g), $.updateMessageStatus(R.id, "failed"), $.setTyping(!1);
      }
  }
  async function rt(b) {
    const M = de.isOpen;
    M !== b && (l.log("ChatWidget", "Setting open state", { from: M, to: b }), b && !M && !m && _(), b ? de.open() : de.close(), await new Promise((R) => setTimeout(R, 0)), b && !d && i && await G(), b ? requestAnimationFrame(() => D()) : S());
  }
  async function Gt() {
    await rt(!de.isOpen);
  }
  function Yt() {
    $.clearMessages(), $.setError(null), g = null;
  }
  function zn() {
    l.log("ChatWidget", "Manual retry connection requested"), q(v, !1), g = null, $.setError(null), a == null || a.retryConnection();
  }
  const Qt = /* @__PURE__ */ be(() => de.isOpen), qn = /* @__PURE__ */ be(() => de.isLoading), dn = /* @__PURE__ */ be(() => (i == null ? void 0 : i.position) || "bottom-right");
  var Fe = {
    get hostElement() {
      return t();
    },
    set hostElement(b) {
      t(b), ye();
    }
  }, at = eg(), le = ne(at);
  {
    var ms = (b) => {
      Tl(b, { onclick: Gt });
    };
    Se(le, (b) => {
      w(Qt) || b(ms);
    });
  }
  var ge = re(le, 2);
  {
    var vs = (b) => {
      var M = Jf(), R = re(Qi(M), 2);
      R.__keydown = T;
      var ie = ne(R);
      Rl(ie, {
        onclose: () => {
          de.close(), S();
        },
        get connectionState() {
          return w(p);
        },
        get connectionFailed() {
          return w(v);
        }
      });
      var bt = re(ie, 2);
      Zl(bt, {
        onsend: Y,
        get connectionState() {
          return w(p);
        }
      });
      var Un = re(bt, 2);
      {
        let he = /* @__PURE__ */ be(() => $.error !== null || w(qn)), He = /* @__PURE__ */ be(() => $.messages.length === 0);
        Kl(Un, {
          onsend: Y,
          get disabled() {
            return w(he);
          },
          get showBrandBanner() {
            return w(He);
          },
          get connectionState() {
            return w(p);
          }
        });
      }
      var bs = re(Un, 2);
      {
        var ws = (he) => {
          var He = Zf(), Oi = ne(He);
          {
            var Zt = (ot) => {
              var Kt = Qf(), Wn = re(Qi(Kt), 2);
              Wn.__click = zn, j(ot, Kt);
            }, Hn = (ot) => {
              var Kt = Xf(), Wn = re(Qi(Kt), 2);
              Wn.__click = Yt, j(ot, Kt);
            };
            Se(Oi, (ot) => {
              w(v) ? ot(Zt) : ot(Hn, !1);
            });
          }
          te(He), j(he, He);
        };
        Se(bs, (he) => {
          $.error && he(ws);
        });
      }
      te(R), ra(R, (he) => q(k, he), () => w(k));
      var Xt = re(R, 2);
      {
        var Fn = (he) => {
          var He = Kf();
          He.__click = () => de.close(), Wa(3, He, () => Yd, () => ({ duration: 200 })), j(he, He);
        };
        Se(Xt, (he) => {
          w(Qt) && he(Fn);
        });
      }
      Wa(3, R, () => Qd, () => ({ y: 20, duration: 300 })), j(b, M);
    };
    Se(ge, (b) => {
      w(Qt) && b(vs);
    });
  }
  return te(at), it(() => {
    pt(at, "data-position", w(dn)), pt(at, "data-theme", Me.theme);
  }), j(n, at), Vt(Fe);
}
gs(["keydown", "click"]);
cn(Jl, { hostElement: {} }, [], [], !0);
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
function ng(n = ma) {
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
function ig(n = ma) {
  return ng(n);
}
const ec = {
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
}, fo = ec, go = {
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
}, sg = {
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
}, rg = {
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
}, ag = {
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
}, og = {
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
function lg(n) {
  return {
    "bot-brewers": Wr,
    modern: ec,
    professional: fo,
    corporate: fo,
    // Alias for backward compatibility
    friendly: go,
    playful: go,
    // Alias
    minimal: sg,
    dark: rg,
    elegant: ag,
    bold: og,
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
      Z.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Or(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i) {
      if ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, Me.updateConfig({ theme: i }, "user"), this.updateStyles()), e === "accent-color" && i && this.updateAccentColor(i), e === "client-id" && i && this._app && (Z.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), Or(this._app), this._app = null, this.mountApp()), e === "title" && i && Me.setUserTitle(i), e === "initial-message" && Me.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions")
        if (i)
          try {
            const s = JSON.parse(i);
            Array.isArray(s) ? Me.setQuickQuestions(s) : Z.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            Z.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          Me.setQuickQuestions(void 0);
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
    i.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = ia(Jl, {
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
    const t = lg(e) || Wr;
    return ig(t);
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
      Z.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const t = document.createElement("assistant-widget");
    document.body.appendChild(t), Z.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  ho as ChatWidgetElement
};
