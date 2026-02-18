var mc = Object.defineProperty;
var Oa = (n) => {
  throw TypeError(n);
};
var vc = (n, e, t) => e in n ? mc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => vc(n, typeof e != "symbol" ? e + "" : e, t), ps = (n, e, t) => e.has(n) || Oa("Cannot " + t);
var f = (n, e, t) => (ps(n, e, "read from private field"), t ? t.call(n) : e.get(n)), M = (n, e, t) => e.has(n) ? Oa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), E = (n, e, t, i) => (ps(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), ce = (n, e, t) => (ps(n, e, "access private method"), t);
var vo = Array.isArray, bc = Array.prototype.indexOf, Zr = Array.from, zr = Object.keys, qr = Object.defineProperty, Cn = Object.getOwnPropertyDescriptor, wc = Object.getOwnPropertyDescriptors, yc = Object.prototype, _c = Array.prototype, bo = Object.getPrototypeOf, Na = Object.isExtensible;
function kc(n) {
  return typeof n == "function";
}
const Ui = () => {
};
function xc(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function wo() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const Ce = 2, js = 4, Gs = 8, Tc = 1 << 24, $t = 16, sn = 32, mn = 64, Kr = 128, bt = 512, Le = 1024, Je = 2048, Nt = 4096, Ke = 8192, rn = 16384, pr = 32768, Rn = 65536, Da = 1 << 17, yo = 1 << 18, qn = 1 << 19, Sc = 1 << 20, tn = 1 << 25, On = 32768, Ss = 1 << 21, Vs = 1 << 22, fn = 1 << 23, Zi = Symbol("$state"), _o = Symbol("legacy props"), Ec = Symbol(""), Jn = new class extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "StaleReactionError");
    D(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Ys = 3, Un = 8;
function ko(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Cc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ac(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ic() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Mc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Lc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rc() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Oc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Dc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $c() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const zc = 1, qc = 2, xo = 4, Uc = 8, Fc = 16, Hc = 1, Wc = 4, Bc = 8, jc = 16, Gc = 4, Vc = 1, Yc = 2, To = "[", Jr = "[!", Qs = "]", Nn = {}, Me = Symbol(), Qc = "http://www.w3.org/1999/xhtml";
function mr(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Xc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let W = !1;
function nn(n) {
  W = n;
}
let U;
function De(n) {
  if (n === null)
    throw mr(), Nn;
  return U = n;
}
function Ii() {
  return De(/* @__PURE__ */ wt(U));
}
function de(n) {
  if (W) {
    if (/* @__PURE__ */ wt(U) !== null)
      throw mr(), Nn;
    U = n;
  }
}
function Xs(n = 1) {
  if (W) {
    for (var e = n, t = U; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ wt(t);
    U = t;
  }
}
function Ur(n = !0) {
  for (var e = 0, t = U; ; ) {
    if (t.nodeType === Un) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === Qs) {
        if (e === 0) return t;
        e -= 1;
      } else (i === To || i === Jr) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wt(t)
    );
    n && t.remove(), t = r;
  }
}
function So(n) {
  if (!n || n.nodeType !== Un)
    throw mr(), Nn;
  return (
    /** @type {Comment} */
    n.data
  );
}
function Eo(n) {
  return n === this.v;
}
function Zc(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Co(n) {
  return !Zc(n, this.v);
}
let Ge = null;
function Mi(n) {
  Ge = n;
}
function zt(n, e = !1, t) {
  Ge = {
    p: Ge,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: null
  };
}
function qt(n) {
  var e = (
    /** @type {ComponentContext} */
    Ge
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Qo(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, Ge = e.p, n ?? /** @type {T} */
  {};
}
function Ao() {
  return !0;
}
let yn = [];
function Io() {
  var n = yn;
  yn = [], xc(n);
}
function Fn(n) {
  if (yn.length === 0 && !Ki) {
    var e = yn;
    queueMicrotask(() => {
      e === yn && Io();
    });
  }
  yn.push(n);
}
function Kc() {
  for (; yn.length > 0; )
    Io();
}
function Mo(n) {
  var e = X;
  if (e === null)
    return B.f |= fn, n;
  if (e.f & pr)
    Li(n, e);
  else {
    if (!(e.f & Kr))
      throw n;
    e.b.error(n);
  }
}
function Li(n, e) {
  for (; e !== null; ) {
    if (e.f & Kr)
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
const Er = /* @__PURE__ */ new Set();
let F = null, Or = null, pe = null, st = [], es = null, Es = !1, Ki = !1;
var ii, ri, _n, kn, ur, si, ai, Ee, Cs, Vi, As, Lo, Ro;
const Yr = class Yr {
  constructor() {
    M(this, Ee);
    D(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    D(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    D(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    M(this, ii, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    M(this, ri, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    M(this, _n, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    M(this, kn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    M(this, ur, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    M(this, si, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    M(this, ai, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    D(this, "skipped_effects", /* @__PURE__ */ new Set());
    D(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || f(this, kn) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    st = [], Or = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      ce(this, Ee, Cs).call(this, r, t);
    this.is_fork || ce(this, Ee, Lo).call(this), this.is_deferred() ? (ce(this, Ee, Vi).call(this, t.effects), ce(this, Ee, Vi).call(this, t.render_effects)) : (Or = this, F = null, Pa(t.render_effects), Pa(t.effects), Or = null, (i = f(this, ur)) == null || i.resolve()), pe = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & fn || (this.current.set(e, e.v), pe == null || pe.set(e, e.v));
  }
  activate() {
    F = this, this.apply();
  }
  deactivate() {
    F === this && (F = null, pe = null);
  }
  flush() {
    if (this.activate(), st.length > 0) {
      if (Oo(), F !== null && F !== this)
        return;
    } else f(this, _n) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of f(this, ri)) e(this);
    f(this, ri).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    E(this, _n, f(this, _n) + 1), e && E(this, kn, f(this, kn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    E(this, _n, f(this, _n) - 1), e && E(this, kn, f(this, kn) - 1), this.revive();
  }
  revive() {
    for (const e of f(this, si))
      f(this, ai).delete(e), Re(e, Je), Dn(e);
    for (const e of f(this, ai))
      Re(e, Nt), Dn(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    f(this, ii).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    f(this, ri).add(e);
  }
  settled() {
    return (f(this, ur) ?? E(this, ur, wo())).promise;
  }
  static ensure() {
    if (F === null) {
      const e = F = new Yr();
      Er.add(F), Ki || Yr.enqueue(() => {
        F === e && e.flush();
      });
    }
    return F;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Fn(e);
  }
  apply() {
  }
};
ii = new WeakMap(), ri = new WeakMap(), _n = new WeakMap(), kn = new WeakMap(), ur = new WeakMap(), si = new WeakMap(), ai = new WeakMap(), Ee = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Cs = function(e, t) {
  var d;
  e.f ^= Le;
  for (var i = e.first; i !== null; ) {
    var r = i.f, s = (r & (sn | mn)) !== 0, a = s && (r & Le) !== 0, o = a || (r & Ke) !== 0 || this.skipped_effects.has(i);
    if (i.f & Kr && ((d = i.b) != null && d.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      s ? i.f ^= Le : r & js ? t.effects.push(i) : vr(i) && (i.f & $t && f(this, si).add(i), or(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (ce(this, Ee, Vi).call(this, t.effects), ce(this, Ee, Vi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Vi = function(e) {
  for (const t of e)
    t.f & Je ? f(this, si).add(t) : t.f & Nt && f(this, ai).add(t), ce(this, Ee, As).call(this, t.deps), Re(t, Le);
}, /**
 * @param {Value[] | null} deps
 */
As = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & Ce) || !(t.f & On) || (t.f ^= On, ce(this, Ee, As).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, Lo = function() {
  if (f(this, kn) === 0) {
    for (const e of f(this, ii)) e();
    f(this, ii).clear();
  }
  f(this, _n) === 0 && ce(this, Ee, Ro).call(this);
}, Ro = function() {
  var s;
  if (Er.size > 1) {
    this.previous.clear();
    var e = pe, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Er) {
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
        var r = st;
        st = [];
        const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const u of o)
          No(u, l, c, d);
        if (st.length > 0) {
          F = a, a.apply();
          for (const u of st)
            ce(s = a, Ee, Cs).call(s, u, i);
          a.deactivate();
        }
        st = r;
      }
    }
    F = null, pe = e;
  }
  this.committed = !0, Er.delete(this);
};
let It = Yr;
function Q(n) {
  var e = Ki;
  Ki = !0;
  try {
    for (var t; ; ) {
      if (Kc(), st.length === 0 && (F == null || F.flush(), st.length === 0))
        return es = null, /** @type {T} */
        t;
      Oo();
    }
  } finally {
    Ki = e;
  }
}
function Oo() {
  var n = Mn;
  Es = !0;
  var e = null;
  try {
    var t = 0;
    for (Hr(!0); st.length > 0; ) {
      var i = It.ensure();
      if (t++ > 1e3) {
        var r, s;
        Jc();
      }
      i.process(st), hn.clear();
    }
  } finally {
    Es = !1, Hr(n), es = null;
  }
}
function Jc() {
  try {
    Lc();
  } catch (n) {
    Li(n, es);
  }
}
let ft = null;
function Pa(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (rn | Ke)) && vr(i) && (ft = /* @__PURE__ */ new Set(), or(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Jo(i) : i.fn = null), (ft == null ? void 0 : ft.size) > 0)) {
        hn.clear();
        for (const r of ft) {
          if (r.f & (rn | Ke)) continue;
          const s = [r];
          let a = r.parent;
          for (; a !== null; )
            ft.has(a) && (ft.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            l.f & (rn | Ke) || or(l);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
function No(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const s = r.f;
      s & Ce ? No(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : s & (Vs | $t) && !(s & Je) && Do(r, e, i) && (Re(r, Je), Dn(
        /** @type {Effect} */
        r
      ));
    }
}
function Do(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (e.includes(r))
        return !0;
      if (r.f & Ce && Do(
        /** @type {Derived} */
        r,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function Dn(n) {
  for (var e = es = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (Es && e === X && t & $t && !(t & yo))
      return;
    if (t & (mn | sn)) {
      if (!(t & Le)) return;
      e.f ^= Le;
    }
  }
  st.push(e);
}
function ed(n) {
  let e = 0, t = Pn(0), i;
  return () => {
    sr() && (b(t), ns(() => (e === 0 && (i = Wn(() => n(() => Ji(t)))), e += 1, () => {
      Fn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, Ji(t));
      });
    })));
  };
}
var td = Rn | qn | Kr;
function nd(n, e, t) {
  new id(n, e, t);
}
var nt, Qe, gr, St, xn, Et, it, We, Ct, Kt, dn, Tn, un, Sn, gn, Qr, ve, Po, $o, Is, Nr, Dr, Ms;
class id {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    M(this, ve);
    /** @type {Boundary | null} */
    D(this, "parent");
    M(this, nt, !1);
    /** @type {TemplateNode} */
    M(this, Qe);
    /** @type {TemplateNode | null} */
    M(this, gr, W ? U : null);
    /** @type {BoundaryProps} */
    M(this, St);
    /** @type {((anchor: Node) => void)} */
    M(this, xn);
    /** @type {Effect} */
    M(this, Et);
    /** @type {Effect | null} */
    M(this, it, null);
    /** @type {Effect | null} */
    M(this, We, null);
    /** @type {Effect | null} */
    M(this, Ct, null);
    /** @type {DocumentFragment | null} */
    M(this, Kt, null);
    /** @type {TemplateNode | null} */
    M(this, dn, null);
    M(this, Tn, 0);
    M(this, un, 0);
    M(this, Sn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    M(this, gn, null);
    M(this, Qr, ed(() => (E(this, gn, Pn(f(this, Tn))), () => {
      E(this, gn, null);
    })));
    E(this, Qe, e), E(this, St, t), E(this, xn, i), this.parent = /** @type {Effect} */
    X.b, E(this, nt, !!f(this, St).pending), E(this, Et, ea(() => {
      if (X.b = this, W) {
        const s = f(this, gr);
        Ii(), /** @type {Comment} */
        s.nodeType === Un && /** @type {Comment} */
        s.data === Jr ? ce(this, ve, $o).call(this) : ce(this, ve, Po).call(this);
      } else {
        var r = ce(this, ve, Is).call(this);
        try {
          E(this, it, at(() => i(r)));
        } catch (s) {
          this.error(s);
        }
        f(this, un) > 0 ? ce(this, ve, Dr).call(this) : E(this, nt, !1);
      }
      return () => {
        var s;
        (s = f(this, dn)) == null || s.remove();
      };
    }, td)), W && E(this, Qe, U);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, nt) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, St).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    ce(this, ve, Ms).call(this, e), E(this, Tn, f(this, Tn) + e), f(this, gn) && Ri(f(this, gn), f(this, Tn));
  }
  get_effect_pending() {
    return f(this, Qr).call(this), b(
      /** @type {Source<number>} */
      f(this, gn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = f(this, St).onerror;
    let i = f(this, St).failed;
    if (f(this, Sn) || !t && !i)
      throw e;
    f(this, it) && (Pe(f(this, it)), E(this, it, null)), f(this, We) && (Pe(f(this, We)), E(this, We, null)), f(this, Ct) && (Pe(f(this, Ct)), E(this, Ct, null)), W && (De(
      /** @type {TemplateNode} */
      f(this, gr)
    ), Xs(), De(Ur()));
    var r = !1, s = !1;
    const a = () => {
      if (r) {
        Xc();
        return;
      }
      r = !0, s && $c(), It.ensure(), E(this, Tn, 0), f(this, Ct) !== null && In(f(this, Ct), () => {
        E(this, Ct, null);
      }), E(this, nt, this.has_pending_snippet()), E(this, it, ce(this, ve, Nr).call(this, () => (E(this, Sn, !1), at(() => f(this, xn).call(this, f(this, Qe)))))), f(this, un) > 0 ? ce(this, ve, Dr).call(this) : E(this, nt, !1);
    };
    var o = B;
    try {
      je(null), s = !0, t == null || t(e, a), s = !1;
    } catch (l) {
      Li(l, f(this, Et) && f(this, Et).parent);
    } finally {
      je(o);
    }
    i && Fn(() => {
      E(this, Ct, ce(this, ve, Nr).call(this, () => {
        It.ensure(), E(this, Sn, !0);
        try {
          return at(() => {
            i(
              f(this, Qe),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Li(
            l,
            /** @type {Effect} */
            f(this, Et).parent
          ), null;
        } finally {
          E(this, Sn, !1);
        }
      }));
    });
  }
}
nt = new WeakMap(), Qe = new WeakMap(), gr = new WeakMap(), St = new WeakMap(), xn = new WeakMap(), Et = new WeakMap(), it = new WeakMap(), We = new WeakMap(), Ct = new WeakMap(), Kt = new WeakMap(), dn = new WeakMap(), Tn = new WeakMap(), un = new WeakMap(), Sn = new WeakMap(), gn = new WeakMap(), Qr = new WeakMap(), ve = new WeakSet(), Po = function() {
  try {
    E(this, it, at(() => f(this, xn).call(this, f(this, Qe))));
  } catch (e) {
    this.error(e);
  }
  E(this, nt, !1);
}, $o = function() {
  const e = f(this, St).pending;
  e && (E(this, We, at(() => e(f(this, Qe)))), It.enqueue(() => {
    var t = ce(this, ve, Is).call(this);
    E(this, it, ce(this, ve, Nr).call(this, () => (It.ensure(), at(() => f(this, xn).call(this, t))))), f(this, un) > 0 ? ce(this, ve, Dr).call(this) : (In(
      /** @type {Effect} */
      f(this, We),
      () => {
        E(this, We, null);
      }
    ), E(this, nt, !1));
  }));
}, Is = function() {
  var e = f(this, Qe);
  return f(this, nt) && (E(this, dn, ot()), f(this, Qe).before(f(this, dn)), e = f(this, dn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Nr = function(e) {
  var t = X, i = B, r = Ge;
  Dt(f(this, Et)), je(f(this, Et)), Mi(f(this, Et).ctx);
  try {
    return e();
  } catch (s) {
    return Mo(s), null;
  } finally {
    Dt(t), je(i), Mi(r);
  }
}, Dr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, St).pending
  );
  f(this, it) !== null && (E(this, Kt, document.createDocumentFragment()), f(this, Kt).append(
    /** @type {TemplateNode} */
    f(this, dn)
  ), nl(f(this, it), f(this, Kt))), f(this, We) === null && E(this, We, at(() => e(f(this, Qe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Ms = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && ce(t = this.parent, ve, Ms).call(t, e);
    return;
  }
  E(this, un, f(this, un) + e), f(this, un) === 0 && (E(this, nt, !1), f(this, We) && In(f(this, We), () => {
    E(this, We, null);
  }), f(this, Kt) && (f(this, Qe).before(f(this, Kt)), E(this, Kt, null)));
};
function rd(n, e, t, i) {
  const r = ts;
  if (t.length === 0 && n.length === 0) {
    i(e.map(r));
    return;
  }
  var s = F, a = (
    /** @type {Effect} */
    X
  ), o = sd();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ ad(c))).then((c) => {
      o();
      try {
        i([...e.map(r), ...c]);
      } catch (d) {
        a.f & rn || Li(d, a);
      }
      s == null || s.deactivate(), Fr();
    }).catch((c) => {
      Li(c, a);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    o();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), Fr();
    }
  }) : l();
}
function sd() {
  var n = X, e = B, t = Ge, i = F;
  return function(s = !0) {
    Dt(n), je(e), Mi(t), s && (i == null || i.activate());
  };
}
function Fr() {
  Dt(null), je(null), Mi(null);
}
// @__NO_SIDE_EFFECTS__
function ts(n) {
  var e = Ce | Je, t = B !== null && B.f & Ce ? (
    /** @type {Derived} */
    B
  ) : null;
  return X !== null && (X.f |= qn), {
    ctx: Ge,
    deps: null,
    effects: null,
    equals: Eo,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Me
    ),
    wv: 0,
    parent: t ?? X,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ad(n, e) {
  let t = (
    /** @type {Effect | null} */
    X
  );
  t === null && Cc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Pn(
    /** @type {V} */
    Me
  ), a = !B, o = /* @__PURE__ */ new Map();
  return md(() => {
    var p;
    var l = wo();
    r = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === F && c.committed && c.deactivate(), Fr();
      });
    } catch (h) {
      l.reject(h), Fr();
    }
    var c = (
      /** @type {Batch} */
      F
    );
    if (a) {
      var d = !i.is_pending();
      i.update_pending_count(1), c.increment(d), (p = o.get(c)) == null || p.reject(Jn), o.delete(c), o.set(c, l);
    }
    const u = (h, x = void 0) => {
      if (c.activate(), x)
        x !== Jn && (s.f |= fn, Ri(s, x));
      else {
        s.f & fn && (s.f ^= fn), Ri(s, h);
        for (const [v, m] of o) {
          if (o.delete(v), v === c) break;
          m.reject(Jn);
        }
      }
      a && (i.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(u, (h) => u(null, h || "unknown"));
  }), Yo(() => {
    for (const l of o.values())
      l.reject(Jn);
  }), new Promise((l) => {
    function c(d) {
      function u() {
        d === r ? l(s) : c(r);
      }
      d.then(u, u);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function me(n) {
  const e = /* @__PURE__ */ ts(n);
  return il(e), e;
}
// @__NO_SIDE_EFFECTS__
function zo(n) {
  const e = /* @__PURE__ */ ts(n);
  return e.equals = Co, e;
}
function qo(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Pe(
        /** @type {Effect} */
        e[t]
      );
  }
}
function od(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & Ce))
      return e.f & rn ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Zs(n) {
  var e, t = X;
  Dt(od(n));
  try {
    n.f &= ~On, qo(n), e = ol(n);
  } finally {
    Dt(t);
  }
  return e;
}
function Uo(n) {
  var e = Zs(n);
  if (n.equals(e) || (F != null && F.is_fork || (n.v = e), n.wv = sl()), !Hn)
    if (pe !== null)
      (sr() || F != null && F.is_fork) && pe.set(n, e);
    else {
      var t = n.f & bt ? Le : Nt;
      Re(n, t);
    }
}
let Ls = /* @__PURE__ */ new Set();
const hn = /* @__PURE__ */ new Map();
let Fo = !1;
function Pn(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Eo,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function H(n, e) {
  const t = Pn(n);
  return il(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ho(n, e = !1, t = !0) {
  const i = Pn(n);
  return e || (i.equals = Co), i;
}
function $(n, e, t = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mt || B.f & Da) && Ao() && B.f & (Ce | $t | Vs | Da) && !($e != null && $e.includes(n)) && Pc();
  let i = t ? ye(e) : e;
  return Ri(n, i);
}
function Ri(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Hn ? hn.set(n, e) : hn.set(n, t), n.v = e;
    var i = It.ensure();
    i.capture(n, t), n.f & Ce && (n.f & Je && Zs(
      /** @type {Derived} */
      n
    ), Re(n, n.f & bt ? Le : Nt)), n.wv = sl(), Wo(n, Je), X !== null && X.f & Le && !(X.f & (sn | mn)) && (tt === null ? bd([n]) : tt.push(n)), !i.is_fork && Ls.size > 0 && !Fo && ld();
  }
  return e;
}
function ld() {
  Fo = !1;
  var n = Mn;
  Hr(!0);
  const e = Array.from(Ls);
  try {
    for (const t of e)
      t.f & Le && Re(t, Nt), vr(t) && or(t);
  } finally {
    Hr(n);
  }
  Ls.clear();
}
function Ji(n) {
  $(n, n.v + 1);
}
function Wo(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = t.length, r = 0; r < i; r++) {
      var s = t[r], a = s.f, o = (a & Je) === 0;
      if (o && Re(s, e), a & Ce) {
        var l = (
          /** @type {Derived} */
          s
        );
        pe == null || pe.delete(l), a & On || (a & bt && (s.f |= On), Wo(l, Nt));
      } else o && (a & $t && ft !== null && ft.add(
        /** @type {Effect} */
        s
      ), Dn(
        /** @type {Effect} */
        s
      ));
    }
}
function ye(n) {
  if (typeof n != "object" || n === null || Zi in n)
    return n;
  const e = bo(n);
  if (e !== yc && e !== _c)
    return n;
  var t = /* @__PURE__ */ new Map(), i = vo(n), r = /* @__PURE__ */ H(0), s = Ln, a = (o) => {
    if (Ln === s)
      return o();
    var l = B, c = Ln;
    je(null), Ua(s);
    var d = o();
    return je(l), Ua(c), d;
  };
  return i && t.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Nc();
        var d = t.get(l);
        return d === void 0 ? d = a(() => {
          var u = /* @__PURE__ */ H(c.value);
          return t.set(l, u), u;
        }) : $(d, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const d = a(() => /* @__PURE__ */ H(Me));
            t.set(l, d), Ji(r);
          }
        } else
          $(c, Me), Ji(r);
        return !0;
      },
      get(o, l, c) {
        var h;
        if (l === Zi)
          return n;
        var d = t.get(l), u = l in o;
        if (d === void 0 && (!u || (h = Cn(o, l)) != null && h.writable) && (d = a(() => {
          var x = ye(u ? o[l] : Me), v = /* @__PURE__ */ H(x);
          return v;
        }), t.set(l, d)), d !== void 0) {
          var p = b(d);
          return p === Me ? void 0 : p;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var d = t.get(l);
          d && (c.value = b(d));
        } else if (c === void 0) {
          var u = t.get(l), p = u == null ? void 0 : u.v;
          if (u !== void 0 && p !== Me)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var p;
        if (l === Zi)
          return !0;
        var c = t.get(l), d = c !== void 0 && c.v !== Me || Reflect.has(o, l);
        if (c !== void 0 || X !== null && (!d || (p = Cn(o, l)) != null && p.writable)) {
          c === void 0 && (c = a(() => {
            var h = d ? ye(o[l]) : Me, x = /* @__PURE__ */ H(h);
            return x;
          }), t.set(l, c));
          var u = b(c);
          if (u === Me)
            return !1;
        }
        return d;
      },
      set(o, l, c, d) {
        var w;
        var u = t.get(l), p = l in o;
        if (i && l === "length")
          for (var h = c; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var x = t.get(h + "");
            x !== void 0 ? $(x, Me) : h in o && (x = a(() => /* @__PURE__ */ H(Me)), t.set(h + "", x));
          }
        if (u === void 0)
          (!p || (w = Cn(o, l)) != null && w.writable) && (u = a(() => /* @__PURE__ */ H(void 0)), $(u, ye(c)), t.set(l, u));
        else {
          p = u.v !== Me;
          var v = a(() => ye(c));
          $(u, v);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(d, c), !p) {
          if (i && typeof l == "string") {
            var S = (
              /** @type {Source<number>} */
              t.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= S.v && $(S, P + 1);
          }
          Ji(r);
        }
        return !0;
      },
      ownKeys(o) {
        b(r);
        var l = Reflect.ownKeys(o).filter((u) => {
          var p = t.get(u);
          return p === void 0 || p.v !== Me;
        });
        for (var [c, d] of t)
          d.v !== Me && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Dc();
      }
    }
  );
}
var $a, Bo, jo, Go;
function Rs() {
  if ($a === void 0) {
    $a = window, Bo = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    jo = Cn(e, "firstChild").get, Go = Cn(e, "nextSibling").get, Na(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Na(t) && (t.__t = void 0);
  }
}
function ot(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Be(n) {
  return (
    /** @type {TemplateNode | null} */
    jo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function wt(n) {
  return (
    /** @type {TemplateNode | null} */
    Go.call(n)
  );
}
function ue(n, e) {
  if (!W)
    return /* @__PURE__ */ Be(n);
  var t = /* @__PURE__ */ Be(U);
  if (t === null)
    t = U.appendChild(ot());
  else if (e && t.nodeType !== Ys) {
    var i = ot();
    return t == null || t.before(i), De(i), i;
  }
  return De(t), t;
}
function An(n, e = !1) {
  if (!W) {
    var t = /* @__PURE__ */ Be(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ wt(t) : t;
  }
  if (e && (U == null ? void 0 : U.nodeType) !== Ys) {
    var i = ot();
    return U == null || U.before(i), De(i), i;
  }
  return U;
}
function ae(n, e = 1, t = !1) {
  let i = W ? U : n;
  for (var r; e--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ wt(i);
  if (!W)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Ys) {
    var s = ot();
    return i === null ? r == null || r.after(s) : i.before(s), De(s), s;
  }
  return De(i), i;
}
function Ks(n) {
  n.textContent = "";
}
function Vo() {
  return !1;
}
function cd(n) {
  W && /* @__PURE__ */ Be(n) !== null && Ks(n);
}
let za = !1;
function dd() {
  za || (za = !0, document.addEventListener(
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
function Di(n) {
  var e = B, t = X;
  je(null), Dt(null);
  try {
    return n();
  } finally {
    je(e), Dt(t);
  }
}
function ud(n, e, t, i = t) {
  n.addEventListener(e, () => Di(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), dd();
}
function gd(n) {
  X === null && (B === null && Mc(), Ic()), Hn && Ac();
}
function fd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Ut(n, e, t) {
  var i = X;
  i !== null && i.f & Ke && (n |= Ke);
  var r = {
    ctx: Ge,
    deps: null,
    nodes: null,
    f: n | Je | bt,
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
      or(r), r.f |= pr;
    } catch (o) {
      throw Pe(r), o;
    }
  else e !== null && Dn(r);
  var s = r;
  if (t && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  !(s.f & qn) && (s = s.first, n & $t && n & Rn && s !== null && (s.f |= Rn)), s !== null && (s.parent = i, i !== null && fd(s, i), B !== null && B.f & Ce && !(n & mn))) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return r;
}
function sr() {
  return B !== null && !Mt;
}
function Yo(n) {
  const e = Ut(Gs, null, !1);
  return Re(e, Le), e.teardown = n, e;
}
function er(n) {
  gd();
  var e = (
    /** @type {Effect} */
    X.f
  ), t = !B && (e & sn) !== 0 && (e & pr) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      Ge
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Qo(n);
}
function Qo(n) {
  return Ut(js | Sc, n, !1);
}
function hd(n) {
  It.ensure();
  const e = Ut(mn | qn, n, !0);
  return () => {
    Pe(e);
  };
}
function pd(n) {
  It.ensure();
  const e = Ut(mn | qn, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? In(e, () => {
      Pe(e), i(void 0);
    }) : (Pe(e), i(void 0));
  });
}
function Js(n) {
  return Ut(js, n, !1);
}
function md(n) {
  return Ut(Vs | qn, n, !0);
}
function ns(n, e = 0) {
  return Ut(Gs | e, n, !0);
}
function lt(n, e = [], t = [], i = []) {
  rd(i, e, t, (r) => {
    Ut(Gs, () => n(...r.map(b)), !0);
  });
}
function ea(n, e = 0) {
  var t = Ut($t | e, n, !0);
  return t;
}
function at(n) {
  return Ut(sn | qn, n, !0);
}
function Xo(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Hn, i = B;
    qa(!0), je(null);
    try {
      e.call(null);
    } finally {
      qa(t), je(i);
    }
  }
}
function Zo(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && Di(() => {
      r.abort(Jn);
    });
    var i = t.next;
    t.f & mn ? t.parent = null : Pe(t, e), t = i;
  }
}
function vd(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & sn || Pe(e), e = t;
  }
}
function Pe(n, e = !0) {
  var t = !1;
  (e || n.f & yo) && n.nodes !== null && n.nodes.end !== null && (Ko(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), Zo(n, e && !t), Wr(n, 0), Re(n, rn);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const s of i)
      s.stop();
  Xo(n);
  var r = n.parent;
  r !== null && r.first !== null && Jo(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function Ko(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ wt(n);
    n.remove(), n = t;
  }
}
function Jo(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function In(n, e, t = !0) {
  var i = [];
  el(n, i, !0);
  var r = () => {
    t && Pe(n), e && e();
  }, s = i.length;
  if (s > 0) {
    var a = () => --s || r();
    for (var o of i)
      o.out(a);
  } else
    r();
}
function el(n, e, t) {
  if (!(n.f & Ke)) {
    n.f ^= Ke;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && e.push(o);
    for (var r = n.first; r !== null; ) {
      var s = r.next, a = (r.f & Rn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & sn) !== 0 && (n.f & $t) !== 0;
      el(r, e, a ? t : !1), r = s;
    }
  }
}
function ta(n) {
  tl(n, !0);
}
function tl(n, e) {
  if (n.f & Ke) {
    n.f ^= Ke, n.f & Le || (Re(n, Je), Dn(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Rn) !== 0 || (t.f & sn) !== 0;
      tl(t, r ? e : !1), t = i;
    }
    var s = n.nodes && n.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function nl(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ wt(t);
      e.append(t), t = r;
    }
}
let Mn = !1;
function Hr(n) {
  Mn = n;
}
let Hn = !1;
function qa(n) {
  Hn = n;
}
let B = null, Mt = !1;
function je(n) {
  B = n;
}
let X = null;
function Dt(n) {
  X = n;
}
let $e = null;
function il(n) {
  B !== null && ($e === null ? $e = [n] : $e.push(n));
}
let Ne = null, Ye = 0, tt = null;
function bd(n) {
  tt = n;
}
let rl = 1, ar = 0, Ln = ar;
function Ua(n) {
  Ln = n;
}
function sl() {
  return ++rl;
}
function vr(n) {
  var e = n.f;
  if (e & Je)
    return !0;
  if (e & Ce && (n.f &= ~On), e & Nt) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, r = 0; r < i; r++) {
        var s = t[r];
        if (vr(
          /** @type {Derived} */
          s
        ) && Uo(
          /** @type {Derived} */
          s
        ), s.wv > n.wv)
          return !0;
      }
    e & bt && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    pe === null && Re(n, Le);
  }
  return !1;
}
function al(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !($e != null && $e.includes(n)))
    for (var r = 0; r < i.length; r++) {
      var s = i[r];
      s.f & Ce ? al(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? Re(s, Je) : s.f & Le && Re(s, Nt), Dn(
        /** @type {Effect} */
        s
      ));
    }
}
function ol(n) {
  var x;
  var e = Ne, t = Ye, i = tt, r = B, s = $e, a = Ge, o = Mt, l = Ln, c = n.f;
  Ne = /** @type {null | Value[]} */
  null, Ye = 0, tt = null, B = c & (sn | mn) ? null : n, $e = null, Mi(n.ctx), Mt = !1, Ln = ++ar, n.ac !== null && (Di(() => {
    n.ac.abort(Jn);
  }), n.ac = null);
  try {
    n.f |= Ss;
    var d = (
      /** @type {Function} */
      n.fn
    ), u = d(), p = n.deps;
    if (Ne !== null) {
      var h;
      if (Wr(n, Ye), p !== null && Ye > 0)
        for (p.length = Ye + Ne.length, h = 0; h < Ne.length; h++)
          p[Ye + h] = Ne[h];
      else
        n.deps = p = Ne;
      if (sr() && n.f & bt)
        for (h = Ye; h < p.length; h++)
          ((x = p[h]).reactions ?? (x.reactions = [])).push(n);
    } else p !== null && Ye < p.length && (Wr(n, Ye), p.length = Ye);
    if (Ao() && tt !== null && !Mt && p !== null && !(n.f & (Ce | Nt | Je)))
      for (h = 0; h < /** @type {Source[]} */
      tt.length; h++)
        al(
          tt[h],
          /** @type {Effect} */
          n
        );
    return r !== null && r !== n && (ar++, tt !== null && (i === null ? i = tt : i.push(.../** @type {Source[]} */
    tt))), n.f & fn && (n.f ^= fn), u;
  } catch (v) {
    return Mo(v);
  } finally {
    n.f ^= Ss, Ne = e, Ye = t, tt = i, B = r, $e = s, Mi(a), Mt = o, Ln = l;
  }
}
function wd(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = bc.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  t === null && e.f & Ce && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Ne.includes(e)) && (Re(e, Nt), e.f & bt && (e.f ^= bt, e.f &= ~On), qo(
    /** @type {Derived} **/
    e
  ), Wr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Wr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      wd(n, t[i]);
}
function or(n) {
  var e = n.f;
  if (!(e & rn)) {
    Re(n, Le);
    var t = X, i = Mn;
    X = n, Mn = !0;
    try {
      e & ($t | Tc) ? vd(n) : Zo(n), Xo(n);
      var r = ol(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = rl;
      var s;
    } finally {
      Mn = i, X = t;
    }
  }
}
async function ll() {
  await Promise.resolve(), Q();
}
function b(n) {
  var e = n.f, t = (e & Ce) !== 0;
  if (B !== null && !Mt) {
    var i = X !== null && (X.f & rn) !== 0;
    if (!i && !($e != null && $e.includes(n))) {
      var r = B.deps;
      if (B.f & Ss)
        n.rv < ar && (n.rv = ar, Ne === null && r !== null && r[Ye] === n ? Ye++ : Ne === null ? Ne = [n] : Ne.includes(n) || Ne.push(n));
      else {
        (B.deps ?? (B.deps = [])).push(n);
        var s = n.reactions;
        s === null ? n.reactions = [B] : s.includes(B) || s.push(B);
      }
    }
  }
  if (Hn) {
    if (hn.has(n))
      return hn.get(n);
    if (t) {
      var a = (
        /** @type {Derived} */
        n
      ), o = a.v;
      return (!(a.f & Le) && a.reactions !== null || dl(a)) && (o = Zs(a)), hn.set(a, o), o;
    }
  } else t && (!(pe != null && pe.has(n)) || F != null && F.is_fork && !sr()) && (a = /** @type {Derived} */
  n, vr(a) && Uo(a), Mn && sr() && !(a.f & bt) && cl(a));
  if (pe != null && pe.has(n))
    return pe.get(n);
  if (n.f & fn)
    throw n.v;
  return n.v;
}
function cl(n) {
  if (n.deps !== null) {
    n.f ^= bt;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & Ce && !(e.f & bt) && cl(
        /** @type {Derived} */
        e
      );
  }
}
function dl(n) {
  if (n.v === Me) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (hn.has(e) || e.f & Ce && dl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Wn(n) {
  var e = Mt;
  try {
    return Mt = !0, n();
  } finally {
    Mt = e;
  }
}
const yd = -7169;
function Re(n, e) {
  n.f = n.f & yd | e;
}
const _d = ["touchstart", "touchmove"];
function kd(n) {
  return _d.includes(n);
}
const ul = /* @__PURE__ */ new Set(), Os = /* @__PURE__ */ new Set();
function xd(n, e, t, i = {}) {
  function r(s) {
    if (i.capture || Yi.call(e, s), !s.cancelBubble)
      return Di(() => t == null ? void 0 : t.call(this, s));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Fn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function Td(n, e, t, i, r) {
  var s = { capture: i, passive: r }, a = xd(n, e, t, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Yo(() => {
    e.removeEventListener(n, a, s);
  });
}
function Pi(n) {
  for (var e = 0; e < n.length; e++)
    ul.add(n[e]);
  for (var t of Os)
    t(n);
}
let Fa = null;
function Yi(n) {
  var m;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((m = n.composedPath) == null ? void 0 : m.call(n)) || [], s = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  Fa = n;
  var a = 0, o = Fa === n && n.__root;
  if (o) {
    var l = r.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = r.indexOf(e);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (s = /** @type {Element} */
  r[a] || n.target, s !== e) {
    qr(n, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var d = B, u = X;
    je(null), Dt(null);
    try {
      for (var p, h = []; s !== null; ) {
        var x = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var v = s["__" + i];
          v != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === s) && v.call(s, n);
        } catch (S) {
          p ? h.push(S) : p = S;
        }
        if (n.cancelBubble || x === e || x === null)
          break;
        s = x;
      }
      if (p) {
        for (let S of h)
          queueMicrotask(() => {
            throw S;
          });
        throw p;
      }
    } finally {
      n.__root = e, delete n.currentTarget, je(d), Dt(u);
    }
  }
}
function na(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function Ot(n, e) {
  var t = (
    /** @type {Effect} */
    X
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function J(n, e) {
  var t = (e & Vc) !== 0, i = (e & Yc) !== 0, r, s = !n.startsWith("<!>");
  return () => {
    if (W)
      return Ot(U, null), U;
    r === void 0 && (r = na(s ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(r)));
    var a = (
      /** @type {TemplateNode} */
      i || Bo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ot(o, l);
    } else
      Ot(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Sd(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = `<${t}>${i ? n : "<!>" + n}</${t}>`, s;
  return () => {
    if (W)
      return Ot(U, null), U;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        na(r)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Be(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ Be(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Ot(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ed(n, e) {
  return /* @__PURE__ */ Sd(n, e, "svg");
}
function gl() {
  if (W)
    return Ot(U, null), U;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = ot();
  return n.append(e, t), Ot(e, t), n;
}
function j(n, e) {
  if (W) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      X
    );
    (!(t.f & pr) || t.nodes.end === null) && (t.nodes.end = U), Ii();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let Ns = !0;
function Oi(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function is(n, e) {
  return fl(n, e);
}
function Cd(n, e) {
  Rs(), e.intro = e.intro ?? !1;
  const t = e.target, i = W, r = U;
  try {
    for (var s = /* @__PURE__ */ Be(t); s && (s.nodeType !== Un || /** @type {Comment} */
    s.data !== To); )
      s = /* @__PURE__ */ wt(s);
    if (!s)
      throw Nn;
    nn(!0), De(
      /** @type {Comment} */
      s
    );
    const a = fl(n, { ...e, anchor: s });
    return nn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== Nn && console.warn("Failed to hydrate: ", a), e.recover === !1 && Rc(), Rs(), Ks(t), nn(!1), is(n, e);
  } finally {
    nn(i), De(r);
  }
}
const Zn = /* @__PURE__ */ new Map();
function fl(n, { target: e, anchor: t, props: i = {}, events: r, context: s, intro: a = !0 }) {
  Rs();
  var o = /* @__PURE__ */ new Set(), l = (u) => {
    for (var p = 0; p < u.length; p++) {
      var h = u[p];
      if (!o.has(h)) {
        o.add(h);
        var x = kd(h);
        e.addEventListener(h, Yi, { passive: x });
        var v = Zn.get(h);
        v === void 0 ? (document.addEventListener(h, Yi, { passive: x }), Zn.set(h, 1)) : Zn.set(h, v + 1);
      }
    }
  };
  l(Zr(ul)), Os.add(l);
  var c = void 0, d = pd(() => {
    var u = t ?? e.appendChild(ot());
    return nd(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (p) => {
        if (s) {
          zt({});
          var h = (
            /** @type {ComponentContext} */
            Ge
          );
          h.c = s;
        }
        if (r && (i.$$events = r), W && Ot(
          /** @type {TemplateNode} */
          p,
          null
        ), Ns = a, c = n(p, i) || {}, Ns = !0, W && (X.nodes.end = U, U === null || U.nodeType !== Un || /** @type {Comment} */
        U.data !== Qs))
          throw mr(), Nn;
        s && qt();
      }
    ), () => {
      var x;
      for (var p of o) {
        e.removeEventListener(p, Yi);
        var h = (
          /** @type {number} */
          Zn.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, Yi), Zn.delete(p)) : Zn.set(p, h);
      }
      Os.delete(l), u !== t && ((x = u.parentNode) == null || x.removeChild(u));
    };
  });
  return Ds.set(c, d), c;
}
let Ds = /* @__PURE__ */ new WeakMap();
function lr(n, e) {
  const t = Ds.get(n);
  return t ? (Ds.delete(n), t(e)) : Promise.resolve();
}
var mt, At, Xe, En, fr, hr, Xr;
class Ad {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    D(this, "anchor");
    /** @type {Map<Batch, Key>} */
    M(this, mt, /* @__PURE__ */ new Map());
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
    M(this, At, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    M(this, Xe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    M(this, En, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    M(this, fr, !0);
    M(this, hr, () => {
      var e = (
        /** @type {Batch} */
        F
      );
      if (f(this, mt).has(e)) {
        var t = (
          /** @type {Key} */
          f(this, mt).get(e)
        ), i = f(this, At).get(t);
        if (i)
          ta(i), f(this, En).delete(t);
        else {
          var r = f(this, Xe).get(t);
          r && (f(this, At).set(t, r.effect), f(this, Xe).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [s, a] of f(this, mt)) {
          if (f(this, mt).delete(s), s === e)
            break;
          const o = f(this, Xe).get(a);
          o && (Pe(o.effect), f(this, Xe).delete(a));
        }
        for (const [s, a] of f(this, At)) {
          if (s === t || f(this, En).has(s)) continue;
          const o = () => {
            if (Array.from(f(this, mt).values()).includes(s)) {
              var c = document.createDocumentFragment();
              nl(a, c), c.append(ot()), f(this, Xe).set(s, { effect: a, fragment: c });
            } else
              Pe(a);
            f(this, En).delete(s), f(this, At).delete(s);
          };
          f(this, fr) || !i ? (f(this, En).add(s), In(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    M(this, Xr, (e) => {
      f(this, mt).delete(e);
      const t = Array.from(f(this, mt).values());
      for (const [i, r] of f(this, Xe))
        t.includes(i) || (Pe(r.effect), f(this, Xe).delete(i));
    });
    this.anchor = e, E(this, fr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      F
    ), r = Vo();
    if (t && !f(this, At).has(e) && !f(this, Xe).has(e))
      if (r) {
        var s = document.createDocumentFragment(), a = ot();
        s.append(a), f(this, Xe).set(e, {
          effect: at(() => t(a)),
          fragment: s
        });
      } else
        f(this, At).set(
          e,
          at(() => t(this.anchor))
        );
    if (f(this, mt).set(i, e), r) {
      for (const [o, l] of f(this, At))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of f(this, Xe))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, hr)), i.ondiscard(f(this, Xr));
    } else
      W && (this.anchor = U), f(this, hr).call(this);
  }
}
mt = new WeakMap(), At = new WeakMap(), Xe = new WeakMap(), En = new WeakMap(), fr = new WeakMap(), hr = new WeakMap(), Xr = new WeakMap();
function _e(n, e, t = !1) {
  W && Ii();
  var i = new Ad(n), r = t ? Rn : 0;
  function s(a, o) {
    if (W) {
      const c = So(n) === Jr;
      if (a === c) {
        var l = Ur();
        De(l), i.anchor = l, nn(!1), i.ensure(a, o), nn(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  ea(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, r);
}
function Id(n, e, t) {
  for (var i = [], r = e.length, s, a = e.length, o = 0; o < r; o++) {
    let u = e[o];
    In(
      u,
      () => {
        if (s) {
          if (s.pending.delete(u), s.done.add(u), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Ps(Zr(s.done)), p.delete(s), p.size === 0 && (n.outrogroups = null);
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
      Ks(d), d.append(c), n.items.clear();
    }
    Ps(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Ps(n, e = !0) {
  for (var t = 0; t < n.length; t++)
    Pe(n[t], e);
}
var Ha;
function hl(n, e, t, i, r, s = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & xo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = W ? De(/* @__PURE__ */ Be(c)) : c.appendChild(ot());
  }
  W && Ii();
  var d = null, u = /* @__PURE__ */ zo(() => {
    var S = t();
    return vo(S) ? S : S == null ? [] : Zr(S);
  }), p, h = !0;
  function x() {
    m.fallback = d, Md(m, p, a, e, i), d !== null && (p.length === 0 ? d.f & tn ? (d.f ^= tn, Qi(d, null, a)) : ta(d) : In(d, () => {
      d = null;
    }));
  }
  var v = ea(() => {
    p = /** @type {V[]} */
    b(u);
    var S = p.length;
    let P = !1;
    if (W) {
      var w = So(a) === Jr;
      w !== (S === 0) && (a = Ur(), De(a), nn(!1), P = !0);
    }
    for (var y = /* @__PURE__ */ new Set(), L = (
      /** @type {Batch} */
      F
    ), ne = Vo(), A = 0; A < S; A += 1) {
      W && U.nodeType === Un && /** @type {Comment} */
      U.data === Qs && (a = /** @type {Comment} */
      U, P = !0, nn(!1));
      var z = p[A], oe = i(z, A), re = h ? null : o.get(oe);
      re ? (re.v && Ri(re.v, z), re.i && Ri(re.i, A), ne && L.skipped_effects.delete(re.e)) : (re = Ld(
        o,
        h ? a : Ha ?? (Ha = ot()),
        z,
        oe,
        A,
        r,
        e,
        t
      ), h || (re.e.f |= tn), o.set(oe, re)), y.add(oe);
    }
    if (S === 0 && s && !d && (h ? d = at(() => s(a)) : (d = at(() => s(Ha ?? (Ha = ot()))), d.f |= tn)), W && S > 0 && De(Ur()), !h)
      if (ne) {
        for (const [V, le] of o)
          y.has(V) || L.skipped_effects.add(le.e);
        L.oncommit(x), L.ondiscard(() => {
        });
      } else
        x();
    P && nn(!0), b(u);
  }), m = { effect: v, items: o, outrogroups: null, fallback: d };
  h = !1, W && (a = U);
}
function Md(n, e, t, i, r) {
  var re, V, le, Ae, Ue, yt, Ft, Ht, Wt;
  var s = (i & Uc) !== 0, a = e.length, o = n.items, l = n.effect.first, c, d = null, u, p = [], h = [], x, v, m, S;
  if (s)
    for (S = 0; S < a; S += 1)
      x = e[S], v = r(x, S), m = /** @type {EachItem} */
      o.get(v).e, m.f & tn || ((V = (re = m.nodes) == null ? void 0 : re.a) == null || V.measure(), (u ?? (u = /* @__PURE__ */ new Set())).add(m));
  for (S = 0; S < a; S += 1) {
    if (x = e[S], v = r(x, S), m = /** @type {EachItem} */
    o.get(v).e, n.outrogroups !== null)
      for (const Te of n.outrogroups)
        Te.pending.delete(m), Te.done.delete(m);
    if (m.f & tn)
      if (m.f ^= tn, m === l)
        Qi(m, null, t);
      else {
        var P = d ? d.next : l;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), cn(n, d, m), cn(n, m, P), Qi(m, P, t), d = m, p = [], h = [], l = d.next;
        continue;
      }
    if (m.f & Ke && (ta(m), s && ((Ae = (le = m.nodes) == null ? void 0 : le.a) == null || Ae.unfix(), (u ?? (u = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (p.length < h.length) {
          var w = h[0], y;
          d = w.prev;
          var L = p[0], ne = p[p.length - 1];
          for (y = 0; y < p.length; y += 1)
            Qi(p[y], w, t);
          for (y = 0; y < h.length; y += 1)
            c.delete(h[y]);
          cn(n, L.prev, ne.next), cn(n, d, L), cn(n, ne, w), l = w, d = ne, S -= 1, p = [], h = [];
        } else
          c.delete(m), Qi(m, l, t), cn(n, m.prev, m.next), cn(n, m, d === null ? n.effect.first : d.next), cn(n, d, m), d = m;
        continue;
      }
      for (p = [], h = []; l !== null && l !== m; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
    }
    m.f & tn || p.push(m), d = m, l = m.next;
  }
  if (n.outrogroups !== null) {
    for (const Te of n.outrogroups)
      Te.pending.size === 0 && (Ps(Zr(Te.done)), (Ue = n.outrogroups) == null || Ue.delete(Te));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var A = [];
    if (c !== void 0)
      for (m of c)
        m.f & Ke || A.push(m);
    for (; l !== null; )
      !(l.f & Ke) && l !== n.fallback && A.push(l), l = l.next;
    var z = A.length;
    if (z > 0) {
      var oe = i & xo && a === 0 ? t : null;
      if (s) {
        for (S = 0; S < z; S += 1)
          (Ft = (yt = A[S].nodes) == null ? void 0 : yt.a) == null || Ft.measure();
        for (S = 0; S < z; S += 1)
          (Wt = (Ht = A[S].nodes) == null ? void 0 : Ht.a) == null || Wt.fix();
      }
      Id(n, A, oe);
    }
  }
  s && Fn(() => {
    var Te, T;
    if (u !== void 0)
      for (m of u)
        (T = (Te = m.nodes) == null ? void 0 : Te.a) == null || T.apply();
  });
}
function Ld(n, e, t, i, r, s, a, o) {
  var l = a & zc ? a & Fc ? Pn(t) : /* @__PURE__ */ Ho(t, !1, !1) : null, c = a & qc ? Pn(r) : null;
  return {
    v: l,
    i: c,
    e: at(() => (s(e, l ?? t, c ?? r, o), () => {
      n.delete(i);
    }))
  };
}
function Qi(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, s = e && !(e.f & tn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wt(i)
      );
      if (s.before(i), i === r)
        return;
      i = a;
    }
}
function cn(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Rd(n, e, t = !1, i = !1, r = !1) {
  var s = n, a = "";
  lt(() => {
    var o = (
      /** @type {Effect} */
      X
    );
    if (a === (a = e() ?? "")) {
      W && Ii();
      return;
    }
    if (o.nodes !== null && (Ko(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (W) {
        U.data;
        for (var l = Ii(), c = l; l !== null && (l.nodeType !== Un || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ wt(l);
        if (l === null)
          throw mr(), Nn;
        Ot(U, c), s = De(l);
        return;
      }
      var d = a + "";
      t ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var u = na(d);
      if ((t || i) && (u = /** @type {Element} */
      /* @__PURE__ */ Be(u)), Ot(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), t || i)
        for (; /* @__PURE__ */ Be(u); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Be(u)
          );
      else
        s.before(u);
    }
  });
}
const Od = () => performance.now(), en = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Od(),
  tasks: /* @__PURE__ */ new Set()
};
function pl() {
  const n = en.now();
  en.tasks.forEach((e) => {
    e.c(n) || (en.tasks.delete(e), e.f());
  }), en.tasks.size !== 0 && en.tick(pl);
}
function Nd(n) {
  let e;
  return en.tasks.size === 0 && en.tick(pl), {
    promise: new Promise((t) => {
      en.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      en.tasks.delete(e);
    }
  };
}
function Cr(n, e) {
  Di(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function Dd(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Wa(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [r, s] = i.split(":");
    if (!r || s === void 0) break;
    const a = Dd(r.trim());
    e[a] = s.trim();
  }
  return e;
}
const Pd = (n) => n;
function Ba(n, e, t, i) {
  var m;
  var r = (n & Gc) !== 0, s = "both", a, o = e.inert, l = e.style.overflow, c, d;
  function u() {
    return Di(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: s
    })));
  }
  var p = {
    is_global: r,
    in() {
      e.inert = o, Cr(e, "introstart"), c = $s(e, u(), d, 1, () => {
        Cr(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(S) {
      e.inert = !0, Cr(e, "outrostart"), d = $s(e, u(), c, 0, () => {
        Cr(e, "outroend"), S == null || S();
      });
    },
    stop: () => {
      c == null || c.abort(), d == null || d.abort();
    }
  }, h = (
    /** @type {Effect & { nodes: EffectNodes }} */
    X
  );
  if (((m = h.nodes).t ?? (m.t = [])).push(p), Ns) {
    var x = r;
    if (!x) {
      for (var v = (
        /** @type {Effect | null} */
        h.parent
      ); v && v.f & Rn; )
        for (; (v = v.parent) && !(v.f & $t); )
          ;
      x = !v || (v.f & pr) !== 0;
    }
    x && Js(() => {
      Wn(() => p.in());
    });
  }
}
function $s(n, e, t, i, r) {
  var s = i === 1;
  if (kc(e)) {
    var a, o = !1;
    return Fn(() => {
      if (!o) {
        var m = e({ direction: s ? "in" : "out" });
        a = $s(n, m, t, i, r);
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
    return r(), {
      abort: Ui,
      deactivate: Ui,
      reset: Ui,
      t: () => i
    };
  const { delay: l = 0, css: c, tick: d, easing: u = Pd } = e;
  var p = [];
  if (s && t === void 0 && (d && d(0, 1), c)) {
    var h = Wa(c(0, 1));
    p.push(h, h);
  }
  var x = () => 1 - i, v = n.animate(p, { duration: l, fill: "forwards" });
  return v.onfinish = () => {
    v.cancel();
    var m = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var S = i - m, P = (
      /** @type {number} */
      e.duration * Math.abs(S)
    ), w = [];
    if (P > 0) {
      var y = !1;
      if (c)
        for (var L = Math.ceil(P / 16.666666666666668), ne = 0; ne <= L; ne += 1) {
          var A = m + S * u(ne / L), z = Wa(c(A, 1 - A));
          w.push(z), y || (y = z.overflow === "hidden");
        }
      y && (n.style.overflow = "hidden"), x = () => {
        var oe = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return m + S * u(oe / P);
      }, d && Nd(() => {
        if (v.playState !== "running") return !1;
        var oe = x();
        return d(oe, 1 - oe), !0;
      });
    }
    v = n.animate(w, { duration: P, fill: "forwards" }), v.onfinish = () => {
      x = () => i, d == null || d(i, 1 - i), r();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = Ui);
    },
    deactivate: () => {
      r = Ui;
    },
    reset: () => {
      i === 0 && (d == null || d(1, 0));
    },
    t: () => x()
  };
}
function an(n, e) {
  Js(() => {
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
      const r = document.createElement("style");
      r.id = e.hash, r.textContent = e.code, i.appendChild(r);
    }
  });
}
const ja = [...` 	
\r\f \v\uFEFF`];
function $d(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r in t)
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var s = r.length, a = 0; (a = i.indexOf(r, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || ja.includes(i[a - 1])) && (o === i.length || ja.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function zd(n, e) {
  return n == null ? null : String(n);
}
function ia(n, e, t, i, r, s) {
  var a = n.__className;
  if (W || a !== t || a === void 0) {
    var o = $d(t, i, s);
    (!W || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (s && r !== s)
    for (var l in s) {
      var c = !!s[l];
      (r == null || c !== !!r[l]) && n.classList.toggle(l, c);
    }
  return s;
}
function ml(n, e, t, i) {
  var r = n.__style;
  if (W || r !== e) {
    var s = zd(e);
    (!W || s !== n.getAttribute("style")) && (s == null ? n.removeAttribute("style") : n.style.cssText = s), n.__style = e;
  }
  return i;
}
const qd = Symbol("is custom element"), Ud = Symbol("is html");
function ct(n, e, t, i) {
  var r = Fd(n);
  W && (r[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || r[e] !== (r[e] = t) && (e === "loading" && (n[Ec] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Hd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Fd(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [qd]: n.nodeName.includes("-"),
      [Ud]: n.namespaceURI === Qc
    })
  );
}
var Ga = /* @__PURE__ */ new Map();
function Hd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ga.get(e);
  if (t) return t;
  Ga.set(e, t = []);
  for (var i, r = n, s = Element.prototype; s !== r; ) {
    i = wc(r);
    for (var a in i)
      i[a].set && t.push(a);
    r = bo(r);
  }
  return t;
}
function Wd(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  ud(n, "input", async (r) => {
    var s = r ? n.defaultValue : n.value;
    if (s = ms(n) ? vs(s) : s, t(s), F !== null && i.add(F), await ll(), s !== (s = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = s ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (W && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Wn(e) == null && n.value) && (t(ms(n) ? vs(n.value) : n.value), F !== null && i.add(F)), ns(() => {
    var r = e();
    if (n === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Or ?? F
      );
      if (i.has(s))
        return;
    }
    ms(n) && r === vs(n.value) || n.type === "date" && !r && !n.value || r !== n.value && (n.value = r ?? "");
  });
}
function ms(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function vs(n) {
  return n === "" ? null : +n;
}
function Va(n, e) {
  return n === e || (n == null ? void 0 : n[Zi]) === e;
}
function rs(n = {}, e, t, i) {
  return Js(() => {
    var r, s;
    return ns(() => {
      r = s, s = [], Wn(() => {
        n !== t(...s) && (e(n, ...s), r && Va(t(...r), n) && e(null, ...r));
      });
    }), () => {
      Fn(() => {
        s && Va(t(...s), n) && e(null, ...s);
      });
    };
  }), n;
}
let Ar = !1;
function Bd(n) {
  var e = Ar;
  try {
    return Ar = !1, [n(), Ar];
  } finally {
    Ar = e;
  }
}
function K(n, e, t, i) {
  var P;
  var r = (t & Bc) !== 0, s = (t & jc) !== 0, a = (
    /** @type {V} */
    i
  ), o = !0, l = () => (o && (o = !1, a = s ? Wn(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), a), c;
  if (r) {
    var d = Zi in n || _o in n;
    c = ((P = Cn(n, e)) == null ? void 0 : P.set) ?? (d && e in n ? (w) => n[e] = w : void 0);
  }
  var u, p = !1;
  r ? [u, p] = Bd(() => (
    /** @type {V} */
    n[e]
  )) : u = /** @type {V} */
  n[e], u === void 0 && i !== void 0 && (u = l(), c && (Oc(), c(u)));
  var h;
  if (h = () => {
    var w = (
      /** @type {V} */
      n[e]
    );
    return w === void 0 ? l() : (o = !0, w);
  }, !(t & Wc))
    return h;
  if (c) {
    var x = n.$$legacy;
    return (
      /** @type {() => V} */
      function(w, y) {
        return arguments.length > 0 ? ((!y || x || p) && c(y ? h() : w), w) : h();
      }
    );
  }
  var v = !1, m = (t & Hc ? ts : zo)(() => (v = !1, h()));
  r && b(m);
  var S = (
    /** @type {Effect} */
    X
  );
  return (
    /** @type {() => V} */
    function(w, y) {
      if (arguments.length > 0) {
        const L = y ? b(m) : r ? ye(w) : w;
        return $(m, L), v = !0, a !== void 0 && (a = L), w;
      }
      return Hn && v || S.f & rn ? m.v : b(m);
    }
  );
}
function jd(n) {
  return new Gd(n);
}
var Jt, rt;
class Gd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    M(this, Jt);
    /** @type {Record<string, any>} */
    M(this, rt);
    var s;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Ho(o, !1, !1);
      return t.set(a, l), l;
    };
    const r = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return b(t.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === _o ? !0 : (b(t.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return $(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    E(this, rt, (e.hydrate ? Cd : is)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: r,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Q(), E(this, Jt, r.$$events);
    for (const a of Object.keys(f(this, rt)))
      a === "$set" || a === "$destroy" || a === "$on" || qr(this, a, {
        get() {
          return f(this, rt)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, rt)[a] = o;
        },
        enumerable: !0
      });
    f(this, rt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, f(this, rt).$destroy = () => {
      lr(f(this, rt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    f(this, rt).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    f(this, Jt)[e] = f(this, Jt)[e] || [];
    const i = (...r) => t.call(this, ...r);
    return f(this, Jt)[e].push(i), () => {
      f(this, Jt)[e] = f(this, Jt)[e].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    f(this, rt).$destroy();
  }
}
Jt = new WeakMap(), rt = new WeakMap();
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
    D(this, "$$ctor");
    /** Slots */
    D(this, "$$s");
    /** @type {any} The Svelte component instance */
    D(this, "$$c");
    /** Whether or not the custom element is connected */
    D(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    D(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    D(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    D(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    D(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    D(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    D(this, "$$me");
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
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
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (s) => {
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), j(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Vd(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Pr(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = jd({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = hd(() => {
        ns(() => {
          var r;
          this.$$r = !0;
          for (const s of zr(this.$$c)) {
            if (!((r = this.$$p_d[s]) != null && r.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = Pr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const a = this.$$c.$on(r, s);
          this.$$l_u.set(s, a);
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
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Pr(e, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return zr(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Pr(n, e, t, i) {
  var s;
  const r = (s = t[n]) == null ? void 0 : s.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function Vd(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function on(n, e, t, i, r, s) {
  let a = class extends vl {
    constructor() {
      super(n, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return zr(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return zr(e).forEach((o) => {
    qr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var u;
        l = Pr(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Cn(c, o)) == null ? void 0 : u.get;
          d ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    qr(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
function ss(n) {
  Ge === null && ko(), er(() => {
    const e = Wn(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function bl(n) {
  Ge === null && ko(), ss(() => () => Wn(n));
}
const Yd = "5";
var mo;
typeof window < "u" && ((mo = window.__svelte ?? (window.__svelte = {})).v ?? (mo.v = /* @__PURE__ */ new Set())).add(Yd);
const Qd = (n) => n;
function Xd(n) {
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
function Zd(n, { delay: e = 0, duration: t = 400, easing: i = Qd } = {}) {
  const r = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (s) => `opacity: ${s * r}`
  };
}
function Kd(n, { delay: e = 0, duration: t = 400, easing: i = Xd, x: r = 0, y: s = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, d = l * (1 - a), [u, p] = Ya(r), [h, x] = Ya(s);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (v, m) => `
			transform: ${c} translate(${(1 - v) * u}${p}, ${(1 - v) * h}${x});
			opacity: ${l - d * m}`
  };
}
var oi, li, ci, di;
class wl {
  constructor() {
    M(this, oi);
    M(this, li);
    M(this, ci);
    M(this, di);
    E(this, oi, /* @__PURE__ */ H(!1)), E(this, li, /* @__PURE__ */ H(!1)), E(this, ci, /* @__PURE__ */ H(!1)), E(this, di, /* @__PURE__ */ H(!1));
  }
  get isOpen() {
    return b(f(this, oi));
  }
  set isOpen(e) {
    $(f(this, oi), e, !0);
  }
  get isMinimized() {
    return b(f(this, li));
  }
  set isMinimized(e) {
    $(f(this, li), e, !0);
  }
  get isLoading() {
    return b(f(this, ci));
  }
  set isLoading(e) {
    $(f(this, ci), e, !0);
  }
  get hasUnreadMessages() {
    return b(f(this, di));
  }
  set hasUnreadMessages(e) {
    $(f(this, di), e, !0);
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
oi = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), di = new WeakMap();
function yl() {
  return new wl();
}
const pn = new wl(), ke = {
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
}, wn = {
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
}, Kn = {
  /** Maximum number of quick questions */
  MAX_COUNT: 6,
  /** Maximum character length per question */
  MAX_LENGTH: 100
};
var ui, gi, fi, hi, pi, mi;
class _l {
  constructor() {
    M(this, ui);
    M(this, gi);
    M(this, fi);
    M(this, hi);
    M(this, pi);
    M(this, mi);
    E(this, ui, /* @__PURE__ */ H(ye([]))), E(this, gi, /* @__PURE__ */ H(null)), E(this, fi, /* @__PURE__ */ H(!1)), E(this, hi, /* @__PURE__ */ H(null)), E(this, pi, /* @__PURE__ */ H(null)), this.streamingBuffer = "", this.streamingTimeout = null, E(this, mi, /* @__PURE__ */ H(0));
  }
  get messages() {
    return b(f(this, ui));
  }
  set messages(e) {
    $(f(this, ui), e, !0);
  }
  get currentSession() {
    return b(f(this, gi));
  }
  set currentSession(e) {
    $(f(this, gi), e, !0);
  }
  get isTyping() {
    return b(f(this, fi));
  }
  set isTyping(e) {
    $(f(this, fi), e, !0);
  }
  get error() {
    return b(f(this, hi));
  }
  set error(e) {
    $(f(this, hi), e, !0);
  }
  get streamingMessageId() {
    return b(f(this, pi));
  }
  set streamingMessageId(e) {
    $(f(this, pi), e, !0);
  }
  get streamingUpdateSignal() {
    return b(f(this, mi));
  }
  set streamingUpdateSignal(e) {
    $(f(this, mi), e, !0);
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
        ke.STREAMING_BATCH_DELAY
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
ui = new WeakMap(), gi = new WeakMap(), fi = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap();
function kl() {
  return new _l();
}
const Pt = new _l(), Xa = {
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
}, gt = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  quickQuestions: void 0,
  debug: !1,
  autoInit: !0
}, xl = {
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
}, Jd = [
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
function Tl(n) {
  return Jd.includes(n);
}
function ra(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function cr(n, e = "#6b46c1") {
  return ra(n) ? n : e;
}
function eu(n) {
  if (!ra(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function tu(n) {
  const e = eu(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, r = parseInt(e.slice(5, 7), 16) / 255, s = Math.max(t, i, r), a = Math.min(t, i, r);
  let o = 0, l = 0;
  const c = (s + a) / 2;
  if (s !== a) {
    const d = s - a;
    switch (l = c > 0.5 ? d / (2 - s - a) : d / (s + a), s) {
      case t:
        o = ((i - r) / d + (i < r ? 6 : 0)) / 6;
        break;
      case i:
        o = ((r - t) / d + 2) / 6;
        break;
      case r:
        o = ((t - i) / d + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: c * 100 };
}
function nu(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), r = (s) => {
    const a = (s + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${r(0)}${r(8)}${r(4)}`.toUpperCase();
}
function fe(n, e) {
  if (!ra(n)) return n;
  const t = tu(n), i = Math.max(0, Math.min(100, t.l + e));
  return nu(t.h, t.s, i);
}
class iu {
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
function as(n) {
  return new iu(n);
}
function bs() {
  var n;
  try {
    return typeof process < "u" && ((n = process.env) == null ? void 0 : n.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const G = {
  isDebugEnabled: bs,
  log: (n, e, t) => {
    bs() && (t !== void 0 ? console.log(`[${n}] ${e}:`, t) : console.log(`[${n}] ${e}`));
  },
  warn: (n, e, t) => {
    bs() && (t !== void 0 ? console.warn(`[${n}] ${e}:`, t) : console.warn(`[${n}] ${e}`));
  },
  error: (n, e, t) => {
    t !== void 0 ? console.error(`[${n}] ${e}:`, t) : console.error(`[${n}] ${e}`);
  }
};
class ei {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return ei.instance || (ei.instance = new ei()), ei.instance;
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
      const r = i.match(/(\d+)/);
      if (r) {
        const s = parseInt(r[1], 10);
        t - s > e && this.messageMap.delete(i);
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
function vt() {
  return ei.getInstance();
}
class ru {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const t = vt().getCurrent();
    if (G.log("MessageValidator", "validate() called", {
      correlationId: t,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const a = "Message is required and must be a string";
      return G.log("MessageValidator", "Validation failed - invalid type", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    if (e.length === 0) {
      const a = "Message is too short";
      return G.log("MessageValidator", "Validation failed - empty string", { correlationId: t, message: e, error: a }), {
        isValid: !1,
        error: a
      };
    }
    const i = e.trim();
    if (G.log("MessageValidator", "After trimming", {
      correlationId: t,
      original: e,
      trimmed: i,
      originalLength: e.length,
      trimmedLength: i.length,
      wasWhitespaceOnly: e.length > 0 && i.length === 0
    }), i.length < wn.MIN_LENGTH) {
      const a = "Message is too short";
      return G.log("MessageValidator", "Validation failed - too short", {
        correlationId: t,
        trimmedLength: i.length,
        minLength: wn.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (i.length > wn.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${wn.MAX_LENGTH} characters`;
      return G.log("MessageValidator", "Validation failed - too long", {
        correlationId: t,
        trimmedLength: i.length,
        maxLength: wn.MAX_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    G.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: t,
      inputContent: i,
      inputLength: i.length
    });
    const r = this.sanitizeHTML(i);
    G.log("MessageValidator", "HTML sanitization complete", {
      correlationId: t,
      original: i,
      sanitized: r,
      originalLength: i.length,
      sanitizedLength: r.length,
      contentRemoved: i.length !== r.length,
      contentChanged: i !== r,
      removedContent: i.length !== r.length ? {
        removed: i.replace(r, ""),
        difference: i.length - r.length
      } : null
    });
    const s = {
      isValid: !0,
      sanitizedValue: r
    };
    return G.log("MessageValidator", "Final validation result", { correlationId: t, result: s }), s;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const t = vt().getCurrent();
    G.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: t,
      input: e,
      inputLength: e.length
    });
    let i = e, r = 0;
    const s = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== s && G.log("MessageValidator", `Step ${++r} - Removed script tags`, {
      correlationId: t,
      before: s,
      after: i,
      removed: s.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && G.log("MessageValidator", `Step ${++r} - Removed javascript: protocol`, {
      correlationId: t,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && G.log("MessageValidator", `Step ${++r} - Removed event handlers:`, {
      correlationId: t,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && G.log("MessageValidator", `Step ${++r} - Removed data: URLs:`, {
      correlationId: t,
      before: l,
      after: i,
      removed: l.length - i.length
    }), G.log("MessageValidator", "sanitizeHTML() result", {
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
class sa {
  static validate(e, t) {
    const i = [];
    for (const r of e) {
      if (typeof r != "string") {
        G.warn(t, `quick-questions: item skipped (type: ${typeof r})`);
        continue;
      }
      if (r.trim().length === 0) {
        G.warn(t, "quick-questions: item skipped (empty or whitespace-only)");
        continue;
      }
      r.length > Kn.MAX_LENGTH ? (G.warn(t, `quick-questions: item truncated to ${Kn.MAX_LENGTH} chars`), i.push(r.slice(0, Kn.MAX_LENGTH))) : i.push(r);
    }
    return i.length > Kn.MAX_COUNT ? (G.warn(t, `quick-questions: array capped at ${Kn.MAX_COUNT} items (${i.length} provided)`), i.slice(0, Kn.MAX_COUNT)) : i;
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
var vi, bi, wi, yi, _i, ki, xi, Ti, Si, Ei, Ci, Ai;
class El {
  constructor() {
    M(this, vi);
    M(this, bi);
    M(this, wi);
    M(this, yi);
    M(this, _i);
    M(this, ki);
    M(this, xi);
    M(this, Ti);
    M(this, Si);
    M(this, Ei);
    M(this, Ci);
    M(this, Ai);
    E(this, vi, /* @__PURE__ */ H("")), E(this, bi, /* @__PURE__ */ H(ye(gt.theme))), E(this, wi, /* @__PURE__ */ H(ye(gt.position))), E(this, yi, /* @__PURE__ */ H(ye(gt.title))), E(this, _i, /* @__PURE__ */ H(ye(gt.logoUrl))), E(this, ki, /* @__PURE__ */ H(ye(gt.placeholder))), E(this, xi, /* @__PURE__ */ H(ye(gt.accentColor))), E(this, Ti, /* @__PURE__ */ H(ye(gt.avatarEmoji))), E(this, Si, /* @__PURE__ */ H(ye(gt.companyName))), E(this, Ei, /* @__PURE__ */ H(ye(gt.initialMessage))), E(this, Ci, /* @__PURE__ */ H(ye(gt.quickQuestions))), E(this, Ai, /* @__PURE__ */ H("default"));
  }
  get clientId() {
    return b(f(this, vi));
  }
  set clientId(e) {
    $(f(this, vi), e, !0);
  }
  get theme() {
    return b(f(this, bi));
  }
  set theme(e) {
    $(f(this, bi), e, !0);
  }
  get position() {
    return b(f(this, wi));
  }
  set position(e) {
    $(f(this, wi), e, !0);
  }
  get title() {
    return b(f(this, yi));
  }
  set title(e) {
    $(f(this, yi), e, !0);
  }
  get logoUrl() {
    return b(f(this, _i));
  }
  set logoUrl(e) {
    $(f(this, _i), e, !0);
  }
  get placeholder() {
    return b(f(this, ki));
  }
  set placeholder(e) {
    $(f(this, ki), e, !0);
  }
  get accentColor() {
    return b(f(this, xi));
  }
  set accentColor(e) {
    $(f(this, xi), e, !0);
  }
  get avatarEmoji() {
    return b(f(this, Ti));
  }
  set avatarEmoji(e) {
    $(f(this, Ti), e, !0);
  }
  get companyName() {
    return b(f(this, Si));
  }
  set companyName(e) {
    $(f(this, Si), e, !0);
  }
  get initialMessage() {
    return b(f(this, Ei));
  }
  set initialMessage(e) {
    $(f(this, Ei), e, !0);
  }
  get quickQuestions() {
    return b(f(this, Ci));
  }
  set quickQuestions(e) {
    $(f(this, Ci), e, !0);
  }
  get titleSource() {
    return b(f(this, Ai));
  }
  set titleSource(e) {
    $(f(this, Ai), e, !0);
  }
  updateConfig(e, t = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, t);
      const { title: i, ...r } = e;
      Object.assign(this, r);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, t) {
    const i = ["user", "backend", "default"], r = i.indexOf(this.titleSource);
    i.indexOf(t) <= r && (this.title = e, this.titleSource = t);
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
    for (const r of i) {
      const s = xl.attributeToProperty(r);
      if (!s) continue;
      const a = e.getAttribute(r);
      if (s === "initialMessage") {
        t.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            t[s] = a;
            break;
          case "accentColor":
            t.accentColor = cr(a, this.accentColor);
            break;
          case "theme":
            Tl(a) && (t.theme = a);
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
              Array.isArray(o) && (t.quickQuestions = sa.validate(o, "ConfigStore"));
            } catch {
            }
            break;
        }
    }
    return t;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = fe(this.accentColor, -20), e["--widget-primary-light"] = fe(this.accentColor, 20), e["--widget-primary-dark"] = fe(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${fe(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${fe(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const t = this.cssVariables;
    for (const [i, r] of Object.entries(t))
      e.style.setProperty(i, r);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
vi = new WeakMap(), bi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), _i = new WeakMap(), ki = new WeakMap(), xi = new WeakMap(), Ti = new WeakMap(), Si = new WeakMap(), Ei = new WeakMap(), Ci = new WeakMap(), Ai = new WeakMap();
function Cl() {
  return new El();
}
const dt = new El(), Al = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", su = Al, au = Al;
var ou = /* @__PURE__ */ J('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), lu = /* @__PURE__ */ Ed('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), cu = /* @__PURE__ */ J('<span class="unread-indicator svelte-bkcus6"></span>'), du = /* @__PURE__ */ J("<button><!> <!></button>");
const uu = {
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
function Il(n, e) {
  zt(e, !0), an(n, uu);
  let t = K(e, "onclick", 7), i = K(e, "ui", 7, pn);
  const r = /* @__PURE__ */ me(() => i().isOpen), s = /* @__PURE__ */ me(() => i().hasUnreadMessages);
  function a() {
    var v;
    (v = t()) == null || v();
  }
  var o = {
    get onclick() {
      return t();
    },
    set onclick(v) {
      t(v), Q();
    },
    get ui() {
      return i();
    },
    set ui(v = pn) {
      i(v), Q();
    }
  }, l = du();
  let c;
  l.__click = a;
  var d = ue(l);
  {
    var u = (v) => {
      var m = ou();
      lt(() => ct(m, "src", su)), j(v, m);
    }, p = (v) => {
      var m = lu();
      j(v, m);
    };
    _e(d, (v) => {
      b(r) ? v(p, !1) : v(u);
    });
  }
  var h = ae(d, 2);
  {
    var x = (v) => {
      var m = cu();
      j(v, m);
    };
    _e(h, (v) => {
      b(s) && !b(r) && v(x);
    });
  }
  return de(l), lt(() => {
    c = ia(l, 1, "floating-button svelte-bkcus6", null, c, { open: b(r) }), ct(l, "aria-label", b(r) ? "Close chat" : "Open chat");
  }), j(n, l), qt(o);
}
Pi(["click"]);
on(Il, { onclick: {}, ui: {} }, [], [], !0);
class et extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, et);
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
class ti extends et {
  constructor(e, t, i, r) {
    super(e, { ...r, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class Ml extends et {
  constructor(e, t, i, r, s) {
    super(e, { ...s, wsUrl: t, closeCode: i, closeReason: r }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = r;
  }
}
class tr extends et {
  constructor(e, t, i, r, s) {
    super(e, { ...s, field: t, value: i, expectedType: r }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = r;
  }
}
class Ll extends et {
  constructor(e, t, i, r) {
    super(e, { ...r, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class Rl extends et {
  constructor(e, t, i, r) {
    super(e, { ...r, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class ni extends et {
  constructor(e, t, i, r) {
    super(e, { ...r, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class Ol extends et {
  constructor(e, t, i, r) {
    super(e, { ...r, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class Nl extends et {
  constructor(e, t, i, r) {
    super(e, { ...r, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function Za(n) {
  return n instanceof et ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function gu(n) {
  return n instanceof et ? {
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
  return n instanceof ti ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof ni ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof Ml ? "Connection lost. Attempting to reconnect..." : n instanceof Rl ? "Access denied. Please check your configuration." : n instanceof tr ? n.message : n instanceof Ll ? "Widget configuration error. Please contact support." : n instanceof Nl ? "Request timed out. Please try again." : n instanceof Ol ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class nr {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = gu(e);
    let r;
    return e instanceof ti ? r = "NETWORK_ERROR" : e instanceof Ml ? r = "WEBSOCKET_ERROR" : e instanceof tr ? r = "VALIDATION_ERROR" : e instanceof Ll ? r = "CONFIGURATION_ERROR" : e instanceof Rl ? r = "AUTHENTICATION_ERROR" : e instanceof ni ? r = "RATE_LIMIT_ERROR" : e instanceof Ol ? r = "STORAGE_ERROR" : e instanceof Nl ? r = "TIMEOUT_ERROR" : e instanceof et ? r = "WIDGET_ERROR" : r = "UNKNOWN_ERROR", {
      message: fu(e),
      code: r,
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
const hu = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class zs {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, t = {}) {
    const i = Sl.validate(e);
    if (!i.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${i.error}`);
    const r = i.sanitizedValue;
    return this.isDevelopmentEnvironment(t.environment) ? this.resolveDevelopmentUrls(r) : this.resolveProductionUrls(r);
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
    const t = hu, i = this.isLocalhostUrl(t) ? t : this.ensureHttps(t);
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
      const r = e.endsWith("/") ? "" : "/";
      return e + r + t.substring(1);
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
class Dl {
  constructor(e) {
    try {
      const t = window, i = t.AIChat || t.ChatWidget || {}, r = e ? this.parseElementAttributes(e) : {}, s = {
        ...gt,
        ...i,
        ...r
      };
      if ((i.apiUrl || i.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !s.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = Sl.validate(s.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = zs.resolveUrls(a.sanitizedValue);
      this.config = {
        ...s,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (t) {
      const i = nr.handle(t, {
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
    for (const r of i) {
      const s = xl.attributeToProperty(r);
      if (!s) continue;
      const a = e.getAttribute(r);
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "accentColor":
          case "avatarEmoji":
            t[s] = a;
            break;
          case "theme":
            Tl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "debug":
          case "autoInit":
            t[s] = a === "true" || a === "";
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
const Ni = /* @__PURE__ */ new Map();
let dr = !1;
function pu() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
dr = !pu();
function mu(n) {
  try {
    return dr ? Ni.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return Ni.get(n) ?? null;
  }
}
function vu(n, e) {
  try {
    return dr ? (Ni.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return Ni.set(n, e), dr = !0, !1;
  }
}
function bu(n) {
  try {
    if (dr) {
      Ni.delete(n);
      return;
    }
    localStorage.removeItem(n);
  } catch {
    Ni.delete(n);
  }
}
const pt = class pt {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var t;
    let e = this.getItem(pt.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(pt.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && G.log("ChatWidget", "Created new visitor", e)), e;
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
      pt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(pt.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const t = this.getSessionHistory().filter(
      (i) => i.active && Date.now() - i.timestamp < ke.SESSION_TIMEOUT
    );
    return t.length > 0 ? t[t.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const i = this.getSessionHistory().map(
      (r) => r.id === e ? { ...r, active: !1 } : r
    );
    this.setItem(
      pt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(pt.VISITOR_ID_KEY), this.removeItem(pt.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
pt.VISITOR_ID_KEY = Qa.VISITOR_ID, pt.SESSION_HISTORY_KEY = Qa.SESSIONS;
let Br = pt;
class Xi {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, t) {
    const { apiUrl: i } = zs.resolveUrls(t.clientId, t.options);
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
    const { wsUrl: t } = zs.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${t}?${i}`;
  }
}
var se = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(se || {});
class Pl {
  constructor(e, t) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = ke.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = ke.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = as(e.getAll()), this.setupVisibilityChangeListener();
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
        const t = Xi.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(t), this.setupEventHandlers();
      } catch (t) {
        const i = nr.handle(t, {
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
      var t, i, r, s, a, o, l, c, d;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((t = e.data) == null ? void 0 : t.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId
      });
      try {
        const u = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: u,
          messageType: u.type,
          content: (r = u.data) == null ? void 0 : r.content,
          hasContent: !!((s = u.data) != null && s.content),
          contentLength: ((o = (a = u.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: u.type === "error",
          metadata: (l = u.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((c = this.listeners.get("message")) == null ? void 0 : c.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", u), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (u) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: u instanceof Error ? u.message : String(u),
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
    }, ke.VISIBILITY_PING_TIMEOUT);
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
    var r, s, a;
    const t = vt().getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: t,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (r = this.ws) == null ? void 0 : r.readyState,
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
    }), this.state === "connected" && ((s = this.ws) == null ? void 0 : s.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: t }), this.ws.send(i);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: t,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= wn.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: wn.MAX_QUEUE_SIZE
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = e ? ke.MOBILE_HEARTBEAT_INTERVAL : ke.HEARTBEAT_INTERVAL;
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
    (i = this.listeners.get(e)) == null || i.forEach((r) => r(t));
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
var wu = /* @__PURE__ */ J('<button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button>'), yu = /* @__PURE__ */ J('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <!></header>');
const _u = {
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
function aa(n, e) {
  zt(e, !0), an(n, _u);
  let t = K(e, "onclose", 7), i = K(e, "connectionState", 23, () => se.DISCONNECTED), r = K(e, "connectionFailed", 7, !1), s = K(e, "showCloseButton", 7, !0), a = K(e, "ui", 7, pn), o = K(e, "config", 7, dt);
  const l = /* @__PURE__ */ me(() => {
    if (r()) return "var(--widget-error)";
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
  }), c = /* @__PURE__ */ me(() => {
    if (r()) return "Connection lost";
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
  }), d = /* @__PURE__ */ me(() => i() === se.CONNECTING ? "pulse-slow" : i() === se.ERROR ? "blink-slow" : "");
  function u() {
    var y;
    a().close(), (y = t()) == null || y();
  }
  var p = {
    get onclose() {
      return t();
    },
    set onclose(y) {
      t(y), Q();
    },
    get connectionState() {
      return i();
    },
    set connectionState(y = se.DISCONNECTED) {
      i(y), Q();
    },
    get connectionFailed() {
      return r();
    },
    set connectionFailed(y = !1) {
      r(y), Q();
    },
    get showCloseButton() {
      return s();
    },
    set showCloseButton(y = !0) {
      s(y), Q();
    },
    get ui() {
      return a();
    },
    set ui(y = pn) {
      a(y), Q();
    },
    get config() {
      return o();
    },
    set config(y = dt) {
      o(y), Q();
    }
  }, h = yu(), x = ue(h), v = ue(x), m = ae(v, 2), S = ue(m, !0);
  de(m), de(x);
  var P = ae(x, 2);
  {
    var w = (y) => {
      var L = wu();
      L.__click = u, j(y, L);
    };
    _e(P, (y) => {
      s() && y(w);
    });
  }
  return de(h), lt(() => {
    ia(v, 1, `status-dot ${b(d) ?? ""}`, "svelte-g5m62x"), ml(v, `--status-color: ${b(l) ?? ""}`), ct(v, "aria-label", b(c)), ct(v, "title", b(c)), Oi(S, o().title);
  }), j(n, h), qt(p);
}
Pi(["click"]);
on(
  aa,
  {
    onclose: {},
    connectionState: {},
    connectionFailed: {},
    showCloseButton: {},
    ui: {},
    config: {}
  },
  [],
  [],
  !0
);
function oa() {
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
let Bn = oa();
function $l(n) {
  Bn = n;
}
const zl = /[&<>"']/, ku = new RegExp(zl.source, "g"), ql = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, xu = new RegExp(ql.source, "g"), Tu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ka = (n) => Tu[n];
function Ze(n, e) {
  if (e) {
    if (zl.test(n))
      return n.replace(ku, Ka);
  } else if (ql.test(n))
    return n.replace(xu, Ka);
  return n;
}
const Su = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Eu(n) {
  return n.replace(Su, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Cu = /(^|[^\[])\^/g;
function ie(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const i = {
    replace: (r, s) => {
      let a = typeof s == "string" ? s : s.source;
      return a = a.replace(Cu, "$1"), t = t.replace(r, a), i;
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
const ir = { exec: () => null };
function eo(n, e) {
  const t = n.replace(/\|/g, (s, a, o) => {
    let l = !1, c = a;
    for (; --c >= 0 && o[c] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), i = t.split(/ \|/);
  let r = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; )
        i.push("");
  for (; r < i.length; r++)
    i[r] = i[r].trim().replace(/\\\|/g, "|");
  return i;
}
function Ir(n, e, t) {
  const i = n.length;
  if (i === 0)
    return "";
  let r = 0;
  for (; r < i && n.charAt(i - r - 1) === e; )
    r++;
  return n.slice(0, i - r);
}
function Au(n, e) {
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
  const r = e.href, s = e.title ? Ze(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: r,
      title: s,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: r,
    title: s,
    text: Ze(a)
  };
}
function Iu(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const i = t[1];
  return e.split(`
`).map((r) => {
    const s = r.match(/^\s+/);
    if (s === null)
      return r;
    const [a] = s;
    return a.length >= i.length ? r.slice(i.length) : r;
  }).join(`
`);
}
class jr {
  // set by the lexer
  constructor(e) {
    D(this, "options");
    D(this, "rules");
    // set by the lexer
    D(this, "lexer");
    this.options = e || Bn;
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
        text: this.options.pedantic ? i : Ir(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], r = Iu(i, t[3] || "");
      return {
        type: "code",
        raw: i,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: r
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const r = Ir(i, "#");
        (this.options.pedantic || !r || / $/.test(r)) && (i = r.trim());
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
      i = Ir(i.replace(/^ *>[ \t]?/gm, ""), `
`);
      const r = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(i);
      return this.lexer.state.top = r, {
        type: "blockquote",
        raw: t[0],
        tokens: s,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i = t[1].trim();
      const r = i.length > 1, s = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = r ? i : "[*+-]");
      const a = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", l = "", c = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let u = t[2].split(`
`, 1)[0].replace(/^\t+/, (S) => " ".repeat(3 * S.length)), p = e.split(`
`, 1)[0], h = 0;
        this.options.pedantic ? (h = 2, l = u.trimStart()) : (h = t[2].search(/[^ ]/), h = h > 4 ? 1 : h, l = u.slice(h), h += t[1].length);
        let x = !1;
        if (!u && /^ *$/.test(p) && (o += p + `
`, e = e.substring(p.length + 1), d = !0), !d) {
          const S = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), P = new RegExp(`^ {0,${Math.min(3, h - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), w = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:\`\`\`|~~~)`), y = new RegExp(`^ {0,${Math.min(3, h - 1)}}#`);
          for (; e; ) {
            const L = e.split(`
`, 1)[0];
            if (p = L, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), w.test(p) || y.test(p) || S.test(p) || P.test(e))
              break;
            if (p.search(/[^ ]/) >= h || !p.trim())
              l += `
` + p.slice(h);
            else {
              if (x || u.search(/[^ ]/) >= 4 || w.test(u) || y.test(u) || P.test(u))
                break;
              l += `
` + p;
            }
            !x && !p.trim() && (x = !0), o += L + `
`, e = e.substring(L.length + 1), u = p.slice(h);
          }
        }
        s.loose || (c ? s.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let v = null, m;
        this.options.gfm && (v = /^\[[ xX]\] /.exec(l), v && (m = v[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), s.items.push({
          type: "list_item",
          raw: o,
          task: !!v,
          checked: m,
          loose: !1,
          text: l,
          tokens: []
        }), s.raw += o;
      }
      s.items[s.items.length - 1].raw = o.trimEnd(), s.items[s.items.length - 1].text = l.trimEnd(), s.raw = s.raw.trimEnd();
      for (let d = 0; d < s.items.length; d++)
        if (this.lexer.state.top = !1, s.items[d].tokens = this.lexer.blockTokens(s.items[d].text, []), !s.loose) {
          const u = s.items[d].tokens.filter((h) => h.type === "space"), p = u.length > 0 && u.some((h) => /\n.*\n/.test(h.raw));
          s.loose = p;
        }
      if (s.loose)
        for (let d = 0; d < s.items.length; d++)
          s.items[d].loose = !0;
      return s;
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
      const i = t[1].toLowerCase().replace(/\s+/g, " "), r = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: i,
        raw: t[0],
        href: r,
        title: s
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const i = eo(t[1]), r = t[2].replace(/^\||\| *$/g, "").split("|"), s = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === r.length) {
      for (const o of r)
        /^ *-+: *$/.test(o) ? a.align.push("right") : /^ *:-+: *$/.test(o) ? a.align.push("center") : /^ *:-+ *$/.test(o) ? a.align.push("left") : a.align.push(null);
      for (const o of i)
        a.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of s)
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
        text: Ze(t[1])
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
        const a = Ir(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = Au(t[2], "()");
        if (a > -1) {
          const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let r = t[2], s = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
        a && (r = a[1], s = a[3]);
      } else
        s = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), /^</.test(r) && (this.options.pedantic && !/>$/.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), to(t, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      const r = (i[2] || i[1]).replace(/\s+/g, " "), s = t[r.toLowerCase()];
      if (!s) {
        const a = i[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return to(i, s, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(r[1] || r[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const a = [...r[0]].length - 1;
      let o, l, c = a, d = 0;
      const u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + a); (r = u.exec(t)) != null; ) {
        if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o)
          continue;
        if (l = [...o].length, r[3] || r[4]) {
          c += l;
          continue;
        } else if ((r[5] || r[6]) && a % 3 && !((a + l) % 3)) {
          d += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        l = Math.min(l, l + c + d);
        const p = [...r[0]][0].length, h = e.slice(0, a + r.index + p + l);
        if (Math.min(a, l) % 2) {
          const v = h.slice(1, -1);
          return {
            type: "em",
            raw: h,
            text: v,
            tokens: this.lexer.inlineTokens(v)
          };
        }
        const x = h.slice(2, -2);
        return {
          type: "strong",
          raw: h,
          text: x,
          tokens: this.lexer.inlineTokens(x)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const r = /[^ ]/.test(i), s = /^ /.test(i) && / $/.test(i);
      return r && s && (i = i.substring(1, i.length - 1)), i = Ze(i, !0), {
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
      let i, r;
      return t[2] === "@" ? (i = Ze(t[1]), r = "mailto:" + i) : (i = Ze(t[1]), r = i), {
        type: "link",
        raw: t[0],
        text: i,
        href: r,
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
      let r, s;
      if (t[2] === "@")
        r = Ze(t[0]), s = "mailto:" + r;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        r = Ze(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: s,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let i;
      return this.lexer.state.inRawBlock ? i = t[0] : i = Ze(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const Mu = /^(?: *(?:\n|$))+/, Lu = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Ru = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, br = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ou = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ul = /(?:[*+-]|\d{1,9}[.)])/, Fl = ie(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Ul).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), la = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Nu = /^[^\n]+/, ca = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Du = ie(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ca).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Pu = ie(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ul).getRegex(), os = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", da = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, $u = ie("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", da).replace("tag", os).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Hl = ie(la).replace("hr", br).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", os).getRegex(), zu = ie(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Hl).getRegex(), ua = {
  blockquote: zu,
  code: Lu,
  def: Du,
  fences: Ru,
  heading: Ou,
  hr: br,
  html: $u,
  lheading: Fl,
  list: Pu,
  newline: Mu,
  paragraph: Hl,
  table: ir,
  text: Nu
}, no = ie("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", br).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", os).getRegex(), qu = {
  ...ua,
  table: no,
  paragraph: ie(la).replace("hr", br).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", no).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", os).getRegex()
}, Uu = {
  ...ua,
  html: ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", da).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: ir,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ie(la).replace("hr", br).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Fl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Wl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Bl = /^( {2,}|\\)\n(?!\s*$)/, Hu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, wr = "\\p{P}\\p{S}", Wu = ie(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, wr).getRegex(), Bu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, ju = ie(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, wr).getRegex(), Gu = ie("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, wr).getRegex(), Vu = ie("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, wr).getRegex(), Yu = ie(/\\([punct])/, "gu").replace(/punct/g, wr).getRegex(), Qu = ie(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xu = ie(da).replace("(?:-->|$)", "-->").getRegex(), Zu = ie("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Gr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ku = ie(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Gr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), jl = ie(/^!?\[(label)\]\[(ref)\]/).replace("label", Gr).replace("ref", ca).getRegex(), Gl = ie(/^!?\[(ref)\](?:\[\])?/).replace("ref", ca).getRegex(), Ju = ie("reflink|nolink(?!\\()", "g").replace("reflink", jl).replace("nolink", Gl).getRegex(), ga = {
  _backpedal: ir,
  // only used for GFM url
  anyPunctuation: Yu,
  autolink: Qu,
  blockSkip: Bu,
  br: Bl,
  code: Fu,
  del: ir,
  emStrongLDelim: ju,
  emStrongRDelimAst: Gu,
  emStrongRDelimUnd: Vu,
  escape: Wl,
  link: Ku,
  nolink: Gl,
  punctuation: Wu,
  reflink: jl,
  reflinkSearch: Ju,
  tag: Zu,
  text: Hu,
  url: ir
}, eg = {
  ...ga,
  link: ie(/^!?\[(label)\]\((.*?)\)/).replace("label", Gr).getRegex(),
  reflink: ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Gr).getRegex()
}, qs = {
  ...ga,
  escape: ie(Wl).replace("])", "~|])").getRegex(),
  url: ie(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, tg = {
  ...qs,
  br: ie(Bl).replace("{2,}", "*").getRegex(),
  text: ie(qs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Mr = {
  normal: ua,
  gfm: qu,
  pedantic: Uu
}, Fi = {
  normal: ga,
  gfm: qs,
  breaks: tg,
  pedantic: eg
};
class Lt {
  constructor(e) {
    D(this, "tokens");
    D(this, "options");
    D(this, "state");
    D(this, "tokenizer");
    D(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Bn, this.options.tokenizer = this.options.tokenizer || new jr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: Mr.normal,
      inline: Fi.normal
    };
    this.options.pedantic ? (t.block = Mr.pedantic, t.inline = Fi.pedantic) : this.options.gfm && (t.block = Mr.gfm, this.options.breaks ? t.inline = Fi.breaks : t.inline = Fi.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Mr,
      inline: Fi
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new Lt(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new Lt(t).inlineTokens(e);
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
    let i, r, s, a;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (i = o.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length), i.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(i);
          continue;
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i);
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
          e = e.substring(i.raw.length), r = t[t.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + i.raw, r.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
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
        if (s = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const l = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((d) => {
            c = d.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
          }), o < 1 / 0 && o >= 0 && (s = e.substring(0, o + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(s))) {
          r = t[t.length - 1], a && r.type === "paragraph" ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i), a = s.length !== e.length, e = e.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && r.type === "text" ? (r.raw += `
` + i.raw, r.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(i);
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
    let i, r, s, a = e, o, l, c;
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
          e = e.substring(i.raw.length), r = t[t.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.link(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(i.raw.length), r = t[t.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
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
        if (s = e, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const u = e.slice(1);
          let p;
          this.options.extensions.startInline.forEach((h) => {
            p = h.call({ lexer: this }, u), typeof p == "number" && p >= 0 && (d = Math.min(d, p));
          }), d < 1 / 0 && d >= 0 && (s = e.substring(0, d + 1));
        }
        if (i = this.tokenizer.inlineText(s)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (c = i.raw.slice(-1)), l = !0, r = t[t.length - 1], r && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : t.push(i);
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
class Vr {
  constructor(e) {
    D(this, "options");
    this.options = e || Bn;
  }
  code(e, t, i) {
    var s;
    const r = (s = (t || "").match(/^\S*/)) == null ? void 0 : s[0];
    return e = e.replace(/\n$/, "") + `
`, r ? '<pre><code class="language-' + Ze(r) + '">' + (i ? e : Ze(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : Ze(e, !0)) + `</code></pre>
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
    const r = t ? "ol" : "ul", s = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + r + s + `>
` + e + "</" + r + `>
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
    const r = Ja(e);
    if (r === null)
      return i;
    e = r;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), s += ">" + i + "</a>", s;
  }
  image(e, t, i) {
    const r = Ja(e);
    if (r === null)
      return i;
    e = r;
    let s = `<img src="${e}" alt="${i}"`;
    return t && (s += ` title="${t}"`), s += ">", s;
  }
  text(e) {
    return e;
  }
}
class fa {
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
class Rt {
  constructor(e) {
    D(this, "options");
    D(this, "renderer");
    D(this, "textRenderer");
    this.options = e || Bn, this.options.renderer = this.options.renderer || new Vr(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new fa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Rt(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Rt(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const a = s, o = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += o || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const a = s;
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, Eu(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = s;
          i += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = s;
          let o = "", l = "";
          for (let d = 0; d < a.header.length; d++)
            l += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          o += this.renderer.tablerow(l);
          let c = "";
          for (let d = 0; d < a.rows.length; d++) {
            const u = a.rows[d];
            l = "";
            for (let p = 0; p < u.length; p++)
              l += this.renderer.tablecell(this.parseInline(u[p].tokens), { header: !1, align: a.align[p] });
            c += this.renderer.tablerow(l);
          }
          i += this.renderer.table(o, c);
          continue;
        }
        case "blockquote": {
          const a = s, o = this.parse(a.tokens);
          i += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const a = s, o = a.ordered, l = a.start, c = a.loose;
          let d = "";
          for (let u = 0; u < a.items.length; u++) {
            const p = a.items[u], h = p.checked, x = p.task;
            let v = "";
            if (p.task) {
              const m = this.renderer.checkbox(!!h);
              c ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = m + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = m + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({
                type: "text",
                text: m + " "
              }) : v += m + " ";
            }
            v += this.parse(p.tokens, c), d += this.renderer.listitem(v, x, !!h);
          }
          i += this.renderer.list(d, o, l);
          continue;
        }
        case "html": {
          const a = s;
          i += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = s;
          i += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = s, o = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; r + 1 < e.length && e[r + 1].type === "text"; )
            a = e[++r], o += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          i += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const a = 'Token with "' + s.type + '" type was not found.';
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
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += a || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          const a = s;
          i += t.text(a.text);
          break;
        }
        case "html": {
          const a = s;
          i += t.html(a.text);
          break;
        }
        case "link": {
          const a = s;
          i += t.link(a.href, a.title, this.parseInline(a.tokens, t));
          break;
        }
        case "image": {
          const a = s;
          i += t.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = s;
          i += t.strong(this.parseInline(a.tokens, t));
          break;
        }
        case "em": {
          const a = s;
          i += t.em(this.parseInline(a.tokens, t));
          break;
        }
        case "codespan": {
          const a = s;
          i += t.codespan(a.text);
          break;
        }
        case "br": {
          i += t.br();
          break;
        }
        case "del": {
          const a = s;
          i += t.del(this.parseInline(a.tokens, t));
          break;
        }
        case "text": {
          const a = s;
          i += t.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}
class rr {
  constructor(e) {
    D(this, "options");
    this.options = e || Bn;
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
D(rr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var zn, Us, Vl;
class ng {
  constructor(...e) {
    M(this, zn);
    D(this, "defaults", oa());
    D(this, "options", this.setOptions);
    D(this, "parse", ce(this, zn, Us).call(this, Lt.lex, Rt.parse));
    D(this, "parseInline", ce(this, zn, Us).call(this, Lt.lexInline, Rt.parseInline));
    D(this, "Parser", Rt);
    D(this, "Renderer", Vr);
    D(this, "TextRenderer", fa);
    D(this, "Lexer", Lt);
    D(this, "Tokenizer", jr);
    D(this, "Hooks", rr);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var r, s;
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
          (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((l) => {
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
      const r = { ...i };
      if (r.async = this.defaults.async || r.async || !1, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const a = t.renderers[s.name];
          a ? t.renderers[s.name] = function(...o) {
            let l = s.renderer.apply(this, o);
            return l === !1 && (l = a.apply(this, o)), l;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = t[s.level];
          a ? a.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), r.extensions = t), i.renderer) {
        const s = this.defaults.renderer || new Vr(this.defaults);
        for (const a in i.renderer) {
          if (!(a in s))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.renderer[o], c = s[o];
          s[o] = (...d) => {
            let u = l.apply(s, d);
            return u === !1 && (u = c.apply(s, d)), u || "";
          };
        }
        r.renderer = s;
      }
      if (i.tokenizer) {
        const s = this.defaults.tokenizer || new jr(this.defaults);
        for (const a in i.tokenizer) {
          if (!(a in s))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const o = a, l = i.tokenizer[o], c = s[o];
          s[o] = (...d) => {
            let u = l.apply(s, d);
            return u === !1 && (u = c.apply(s, d)), u;
          };
        }
        r.tokenizer = s;
      }
      if (i.hooks) {
        const s = this.defaults.hooks || new rr();
        for (const a in i.hooks) {
          if (!(a in s))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.hooks[o], c = s[o];
          rr.passThroughHooks.has(a) ? s[o] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(s, d)).then((p) => c.call(s, p));
            const u = l.call(s, d);
            return c.call(s, u);
          } : s[o] = (...d) => {
            let u = l.apply(s, d);
            return u === !1 && (u = c.apply(s, d)), u;
          };
        }
        r.hooks = s;
      }
      if (i.walkTokens) {
        const s = this.defaults.walkTokens, a = i.walkTokens;
        r.walkTokens = function(o) {
          let l = [];
          return l.push(a.call(this, o)), s && (l = l.concat(s.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return Lt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Rt.parse(e, t ?? this.defaults);
  }
}
zn = new WeakSet(), Us = function(e, t) {
  return (i, r) => {
    const s = { ...r }, a = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = ce(this, zn, Vl).call(this, !!a.silent, !!a.async);
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
}, Vl = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const r = "<p>An error occurred:</p><pre>" + Ze(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(r) : r;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const $n = new ng();
function te(n, e) {
  return $n.parse(n, e);
}
te.options = te.setOptions = function(n) {
  return $n.setOptions(n), te.defaults = $n.defaults, $l(te.defaults), te;
};
te.getDefaults = oa;
te.defaults = Bn;
te.use = function(...n) {
  return $n.use(...n), te.defaults = $n.defaults, $l(te.defaults), te;
};
te.walkTokens = function(n, e) {
  return $n.walkTokens(n, e);
};
te.parseInline = $n.parseInline;
te.Parser = Rt;
te.parser = Rt.parse;
te.Renderer = Vr;
te.TextRenderer = fa;
te.Lexer = Lt;
te.lexer = Lt.lex;
te.Tokenizer = jr;
te.Hooks = rr;
te.parse = te;
te.options;
te.setOptions;
te.use;
te.walkTokens;
te.parseInline;
Rt.parse;
Lt.lex;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: Yl,
  setPrototypeOf: io,
  isFrozen: ig,
  getPrototypeOf: rg,
  getOwnPropertyDescriptor: sg
} = Object;
let {
  freeze: ze,
  seal: ut,
  create: Fs
} = Object, {
  apply: Hs,
  construct: Ws
} = typeof Reflect < "u" && Reflect;
ze || (ze = function(e) {
  return e;
});
ut || (ut = function(e) {
  return e;
});
Hs || (Hs = function(e, t) {
  for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
    r[s - 2] = arguments[s];
  return e.apply(t, r);
});
Ws || (Ws = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    i[r - 1] = arguments[r];
  return new e(...i);
});
const Lr = qe(Array.prototype.forEach), ag = qe(Array.prototype.lastIndexOf), ro = qe(Array.prototype.pop), Hi = qe(Array.prototype.push), og = qe(Array.prototype.splice), $r = qe(String.prototype.toLowerCase), ws = qe(String.prototype.toString), ys = qe(String.prototype.match), Wi = qe(String.prototype.replace), lg = qe(String.prototype.indexOf), cg = qe(String.prototype.trim), ht = qe(Object.prototype.hasOwnProperty), Oe = qe(RegExp.prototype.test), Bi = dg(TypeError);
function qe(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      i[r - 1] = arguments[r];
    return Hs(n, e, i);
  };
}
function dg(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return Ws(n, t);
  };
}
function q(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $r;
  io && io(n, null);
  let i = e.length;
  for (; i--; ) {
    let r = e[i];
    if (typeof r == "string") {
      const s = t(r);
      s !== r && (ig(e) || (e[i] = s), r = s);
    }
    n[r] = !0;
  }
  return n;
}
function ug(n) {
  for (let e = 0; e < n.length; e++)
    ht(n, e) || (n[e] = null);
  return n;
}
function Tt(n) {
  const e = Fs(null);
  for (const [t, i] of Yl(n))
    ht(n, t) && (Array.isArray(i) ? e[t] = ug(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = Tt(i) : e[t] = i);
  return e;
}
function ji(n, e) {
  for (; n !== null; ) {
    const i = sg(n, e);
    if (i) {
      if (i.get)
        return qe(i.get);
      if (typeof i.value == "function")
        return qe(i.value);
    }
    n = rg(n);
  }
  function t() {
    return null;
  }
  return t;
}
const so = ze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _s = ze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ks = ze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gg = ze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xs = ze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), fg = ze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ao = ze(["#text"]), oo = ze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ts = ze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), lo = ze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Rr = ze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hg = ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), pg = ut(/<%[\w\W]*|[\w\W]*%>/gm), mg = ut(/\$\{[\w\W]*/gm), vg = ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), bg = ut(/^aria-[\-\w]+$/), Ql = ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wg = ut(/^(?:\w+script|data):/i), yg = ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xl = ut(/^html$/i), _g = ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var co = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: bg,
  ATTR_WHITESPACE: yg,
  CUSTOM_ELEMENT: _g,
  DATA_ATTR: vg,
  DOCTYPE_NAME: Xl,
  ERB_EXPR: pg,
  IS_ALLOWED_URI: Ql,
  IS_SCRIPT_OR_DATA: wg,
  MUSTACHE_EXPR: hg,
  TMPLIT_EXPR: mg
});
const Gi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, kg = function() {
  return typeof window > "u" ? null : window;
}, xg = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const r = "data-tt-policy-suffix";
  t && t.hasAttribute(r) && (i = t.getAttribute(r));
  const s = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(s, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
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
function Zl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kg();
  const e = (R) => Zl(R);
  if (e.version = "3.3.1", e.removed = [], !n || !n.document || n.document.nodeType !== Gi.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, r = i.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: a,
    Node: o,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: d = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: p,
    trustedTypes: h
  } = n, x = l.prototype, v = ji(x, "cloneNode"), m = ji(x, "remove"), S = ji(x, "nextSibling"), P = ji(x, "childNodes"), w = ji(x, "parentNode");
  if (typeof a == "function") {
    const R = t.createElement("template");
    R.content && R.content.ownerDocument && (t = R.content.ownerDocument);
  }
  let y, L = "";
  const {
    implementation: ne,
    createNodeIterator: A,
    createDocumentFragment: z,
    getElementsByTagName: oe
  } = t, {
    importNode: re
  } = i;
  let V = uo();
  e.isSupported = typeof Yl == "function" && typeof w == "function" && ne && ne.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: le,
    ERB_EXPR: Ae,
    TMPLIT_EXPR: Ue,
    DATA_ATTR: yt,
    ARIA_ATTR: Ft,
    IS_SCRIPT_OR_DATA: Ht,
    ATTR_WHITESPACE: Wt,
    CUSTOM_ELEMENT: Te
  } = co;
  let {
    IS_ALLOWED_URI: T
  } = co, I = null;
  const Z = q({}, [...so, ..._s, ...ks, ...xs, ...ao]);
  let Y = null;
  const vn = q({}, [...oo, ...Ts, ...lo, ...Rr]);
  let ee = Object.seal(Fs(null, {
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
  })), Ve = null, Bt = null;
  const _ = Object.seal(Fs(null, {
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
  let N = !0, O = !0, be = !1, _t = !0, jt = !1, jn = !0, Gt = !1, $i = !1, zi = !1, xe = !1, Fe = !1, Gn = !1, yr = !0, _r = !1;
  const ln = "user-content-";
  let Vt = !0, Yt = !1, Vn = {}, kt = null;
  const ls = q({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ba = null;
  const wa = q({}, ["audio", "video", "img", "source", "image", "track"]);
  let cs = null;
  const ya = q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), kr = "http://www.w3.org/1998/Math/MathML", xr = "http://www.w3.org/2000/svg", Qt = "http://www.w3.org/1999/xhtml";
  let Yn = Qt, ds = !1, us = null;
  const cc = q({}, [kr, xr, Qt], ws);
  let Tr = q({}, ["mi", "mo", "mn", "ms", "mtext"]), Sr = q({}, ["annotation-xml"]);
  const dc = q({}, ["title", "style", "font", "a", "script"]);
  let qi = null;
  const uc = ["application/xhtml+xml", "text/html"], gc = "text/html";
  let we = null, Qn = null;
  const fc = t.createElement("form"), _a = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, gs = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Qn && Qn === g)) {
      if ((!g || typeof g != "object") && (g = {}), g = Tt(g), qi = // eslint-disable-next-line unicorn/prefer-includes
      uc.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? gc : g.PARSER_MEDIA_TYPE, we = qi === "application/xhtml+xml" ? ws : $r, I = ht(g, "ALLOWED_TAGS") ? q({}, g.ALLOWED_TAGS, we) : Z, Y = ht(g, "ALLOWED_ATTR") ? q({}, g.ALLOWED_ATTR, we) : vn, us = ht(g, "ALLOWED_NAMESPACES") ? q({}, g.ALLOWED_NAMESPACES, ws) : cc, cs = ht(g, "ADD_URI_SAFE_ATTR") ? q(Tt(ya), g.ADD_URI_SAFE_ATTR, we) : ya, ba = ht(g, "ADD_DATA_URI_TAGS") ? q(Tt(wa), g.ADD_DATA_URI_TAGS, we) : wa, kt = ht(g, "FORBID_CONTENTS") ? q({}, g.FORBID_CONTENTS, we) : ls, Ve = ht(g, "FORBID_TAGS") ? q({}, g.FORBID_TAGS, we) : Tt({}), Bt = ht(g, "FORBID_ATTR") ? q({}, g.FORBID_ATTR, we) : Tt({}), Vn = ht(g, "USE_PROFILES") ? g.USE_PROFILES : !1, N = g.ALLOW_ARIA_ATTR !== !1, O = g.ALLOW_DATA_ATTR !== !1, be = g.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, jt = g.SAFE_FOR_TEMPLATES || !1, jn = g.SAFE_FOR_XML !== !1, Gt = g.WHOLE_DOCUMENT || !1, xe = g.RETURN_DOM || !1, Fe = g.RETURN_DOM_FRAGMENT || !1, Gn = g.RETURN_TRUSTED_TYPE || !1, zi = g.FORCE_BODY || !1, yr = g.SANITIZE_DOM !== !1, _r = g.SANITIZE_NAMED_PROPS || !1, Vt = g.KEEP_CONTENT !== !1, Yt = g.IN_PLACE || !1, T = g.ALLOWED_URI_REGEXP || Ql, Yn = g.NAMESPACE || Qt, Tr = g.MATHML_TEXT_INTEGRATION_POINTS || Tr, Sr = g.HTML_INTEGRATION_POINTS || Sr, ee = g.CUSTOM_ELEMENT_HANDLING || {}, g.CUSTOM_ELEMENT_HANDLING && _a(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ee.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && _a(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ee.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), jt && (O = !1), Fe && (xe = !0), Vn && (I = q({}, ao), Y = [], Vn.html === !0 && (q(I, so), q(Y, oo)), Vn.svg === !0 && (q(I, _s), q(Y, Ts), q(Y, Rr)), Vn.svgFilters === !0 && (q(I, ks), q(Y, Ts), q(Y, Rr)), Vn.mathMl === !0 && (q(I, xs), q(Y, lo), q(Y, Rr))), g.ADD_TAGS && (typeof g.ADD_TAGS == "function" ? _.tagCheck = g.ADD_TAGS : (I === Z && (I = Tt(I)), q(I, g.ADD_TAGS, we))), g.ADD_ATTR && (typeof g.ADD_ATTR == "function" ? _.attributeCheck = g.ADD_ATTR : (Y === vn && (Y = Tt(Y)), q(Y, g.ADD_ATTR, we))), g.ADD_URI_SAFE_ATTR && q(cs, g.ADD_URI_SAFE_ATTR, we), g.FORBID_CONTENTS && (kt === ls && (kt = Tt(kt)), q(kt, g.FORBID_CONTENTS, we)), g.ADD_FORBID_CONTENTS && (kt === ls && (kt = Tt(kt)), q(kt, g.ADD_FORBID_CONTENTS, we)), Vt && (I["#text"] = !0), Gt && q(I, ["html", "head", "body"]), I.table && (q(I, ["tbody"]), delete Ve.tbody), g.TRUSTED_TYPES_POLICY) {
        if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Bi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Bi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = g.TRUSTED_TYPES_POLICY, L = y.createHTML("");
      } else
        y === void 0 && (y = xg(h, r)), y !== null && typeof L == "string" && (L = y.createHTML(""));
      ze && ze(g), Qn = g;
    }
  }, ka = q({}, [..._s, ...ks, ...gg]), xa = q({}, [...xs, ...fg]), hc = function(g) {
    let k = w(g);
    (!k || !k.tagName) && (k = {
      namespaceURI: Yn,
      tagName: "template"
    });
    const C = $r(g.tagName), ge = $r(k.tagName);
    return us[g.namespaceURI] ? g.namespaceURI === xr ? k.namespaceURI === Qt ? C === "svg" : k.namespaceURI === kr ? C === "svg" && (ge === "annotation-xml" || Tr[ge]) : !!ka[C] : g.namespaceURI === kr ? k.namespaceURI === Qt ? C === "math" : k.namespaceURI === xr ? C === "math" && Sr[ge] : !!xa[C] : g.namespaceURI === Qt ? k.namespaceURI === xr && !Sr[ge] || k.namespaceURI === kr && !Tr[ge] ? !1 : !xa[C] && (dc[C] || !ka[C]) : !!(qi === "application/xhtml+xml" && us[g.namespaceURI]) : !1;
  }, xt = function(g) {
    Hi(e.removed, {
      element: g
    });
    try {
      w(g).removeChild(g);
    } catch {
      m(g);
    }
  }, bn = function(g, k) {
    try {
      Hi(e.removed, {
        attribute: k.getAttributeNode(g),
        from: k
      });
    } catch {
      Hi(e.removed, {
        attribute: null,
        from: k
      });
    }
    if (k.removeAttribute(g), g === "is")
      if (xe || Fe)
        try {
          xt(k);
        } catch {
        }
      else
        try {
          k.setAttribute(g, "");
        } catch {
        }
  }, Ta = function(g) {
    let k = null, C = null;
    if (zi)
      g = "<remove></remove>" + g;
    else {
      const he = ys(g, /^[\r\n\t ]+/);
      C = he && he[0];
    }
    qi === "application/xhtml+xml" && Yn === Qt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const ge = y ? y.createHTML(g) : g;
    if (Yn === Qt)
      try {
        k = new p().parseFromString(ge, qi);
      } catch {
      }
    if (!k || !k.documentElement) {
      k = ne.createDocument(Yn, "template", null);
      try {
        k.documentElement.innerHTML = ds ? L : ge;
      } catch {
      }
    }
    const Ie = k.body || k.documentElement;
    return g && C && Ie.insertBefore(t.createTextNode(C), Ie.childNodes[0] || null), Yn === Qt ? oe.call(k, Gt ? "html" : "body")[0] : Gt ? k.documentElement : Ie;
  }, Sa = function(g) {
    return A.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, fs = function(g) {
    return g instanceof u && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof d) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, Ea = function(g) {
    return typeof o == "function" && g instanceof o;
  };
  function Xt(R, g, k) {
    Lr(R, (C) => {
      C.call(e, g, k, Qn);
    });
  }
  const Ca = function(g) {
    let k = null;
    if (Xt(V.beforeSanitizeElements, g, null), fs(g))
      return xt(g), !0;
    const C = we(g.nodeName);
    if (Xt(V.uponSanitizeElement, g, {
      tagName: C,
      allowedTags: I
    }), jn && g.hasChildNodes() && !Ea(g.firstElementChild) && Oe(/<[/\w!]/g, g.innerHTML) && Oe(/<[/\w!]/g, g.textContent) || g.nodeType === Gi.progressingInstruction || jn && g.nodeType === Gi.comment && Oe(/<[/\w]/g, g.data))
      return xt(g), !0;
    if (!(_.tagCheck instanceof Function && _.tagCheck(C)) && (!I[C] || Ve[C])) {
      if (!Ve[C] && Ia(C) && (ee.tagNameCheck instanceof RegExp && Oe(ee.tagNameCheck, C) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(C)))
        return !1;
      if (Vt && !kt[C]) {
        const ge = w(g) || g.parentNode, Ie = P(g) || g.childNodes;
        if (Ie && ge) {
          const he = Ie.length;
          for (let He = he - 1; He >= 0; --He) {
            const Zt = v(Ie[He], !0);
            Zt.__removalCount = (g.__removalCount || 0) + 1, ge.insertBefore(Zt, S(g));
          }
        }
      }
      return xt(g), !0;
    }
    return g instanceof l && !hc(g) || (C === "noscript" || C === "noembed" || C === "noframes") && Oe(/<\/no(script|embed|frames)/i, g.innerHTML) ? (xt(g), !0) : (jt && g.nodeType === Gi.text && (k = g.textContent, Lr([le, Ae, Ue], (ge) => {
      k = Wi(k, ge, " ");
    }), g.textContent !== k && (Hi(e.removed, {
      element: g.cloneNode()
    }), g.textContent = k)), Xt(V.afterSanitizeElements, g, null), !1);
  }, Aa = function(g, k, C) {
    if (yr && (k === "id" || k === "name") && (C in t || C in fc))
      return !1;
    if (!(O && !Bt[k] && Oe(yt, k))) {
      if (!(N && Oe(Ft, k))) {
        if (!(_.attributeCheck instanceof Function && _.attributeCheck(k, g))) {
          if (!Y[k] || Bt[k]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ia(g) && (ee.tagNameCheck instanceof RegExp && Oe(ee.tagNameCheck, g) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(g)) && (ee.attributeNameCheck instanceof RegExp && Oe(ee.attributeNameCheck, k) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(k, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              k === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && Oe(ee.tagNameCheck, C) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(C)))
            ) return !1;
          } else if (!cs[k]) {
            if (!Oe(T, Wi(C, Wt, ""))) {
              if (!((k === "src" || k === "xlink:href" || k === "href") && g !== "script" && lg(C, "data:") === 0 && ba[g])) {
                if (!(be && !Oe(Ht, Wi(C, Wt, "")))) {
                  if (C)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ia = function(g) {
    return g !== "annotation-xml" && ys(g, Te);
  }, Ma = function(g) {
    Xt(V.beforeSanitizeAttributes, g, null);
    const {
      attributes: k
    } = g;
    if (!k || fs(g))
      return;
    const C = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Y,
      forceKeepAttr: void 0
    };
    let ge = k.length;
    for (; ge--; ) {
      const Ie = k[ge], {
        name: he,
        namespaceURI: He,
        value: Zt
      } = Ie, Xn = we(he), hs = Zt;
      let Se = he === "value" ? hs : cg(hs);
      if (C.attrName = Xn, C.attrValue = Se, C.keepAttr = !0, C.forceKeepAttr = void 0, Xt(V.uponSanitizeAttribute, g, C), Se = C.attrValue, _r && (Xn === "id" || Xn === "name") && (bn(he, g), Se = ln + Se), jn && Oe(/((--!?|])>)|<\/(style|title|textarea)/i, Se)) {
        bn(he, g);
        continue;
      }
      if (Xn === "attributename" && ys(Se, "href")) {
        bn(he, g);
        continue;
      }
      if (C.forceKeepAttr)
        continue;
      if (!C.keepAttr) {
        bn(he, g);
        continue;
      }
      if (!_t && Oe(/\/>/i, Se)) {
        bn(he, g);
        continue;
      }
      jt && Lr([le, Ae, Ue], (Ra) => {
        Se = Wi(Se, Ra, " ");
      });
      const La = we(g.nodeName);
      if (!Aa(La, Xn, Se)) {
        bn(he, g);
        continue;
      }
      if (y && typeof h == "object" && typeof h.getAttributeType == "function" && !He)
        switch (h.getAttributeType(La, Xn)) {
          case "TrustedHTML": {
            Se = y.createHTML(Se);
            break;
          }
          case "TrustedScriptURL": {
            Se = y.createScriptURL(Se);
            break;
          }
        }
      if (Se !== hs)
        try {
          He ? g.setAttributeNS(He, he, Se) : g.setAttribute(he, Se), fs(g) ? xt(g) : ro(e.removed);
        } catch {
          bn(he, g);
        }
    }
    Xt(V.afterSanitizeAttributes, g, null);
  }, pc = function R(g) {
    let k = null;
    const C = Sa(g);
    for (Xt(V.beforeSanitizeShadowDOM, g, null); k = C.nextNode(); )
      Xt(V.uponSanitizeShadowNode, k, null), Ca(k), Ma(k), k.content instanceof s && R(k.content);
    Xt(V.afterSanitizeShadowDOM, g, null);
  };
  return e.sanitize = function(R) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = null, C = null, ge = null, Ie = null;
    if (ds = !R, ds && (R = "<!-->"), typeof R != "string" && !Ea(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw Bi("dirty is not a string, aborting");
      } else
        throw Bi("toString is not a function");
    if (!e.isSupported)
      return R;
    if ($i || gs(g), e.removed = [], typeof R == "string" && (Yt = !1), Yt) {
      if (R.nodeName) {
        const Zt = we(R.nodeName);
        if (!I[Zt] || Ve[Zt])
          throw Bi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof o)
      k = Ta("<!---->"), C = k.ownerDocument.importNode(R, !0), C.nodeType === Gi.element && C.nodeName === "BODY" || C.nodeName === "HTML" ? k = C : k.appendChild(C);
    else {
      if (!xe && !jt && !Gt && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return y && Gn ? y.createHTML(R) : R;
      if (k = Ta(R), !k)
        return xe ? null : Gn ? L : "";
    }
    k && zi && xt(k.firstChild);
    const he = Sa(Yt ? R : k);
    for (; ge = he.nextNode(); )
      Ca(ge), Ma(ge), ge.content instanceof s && pc(ge.content);
    if (Yt)
      return R;
    if (xe) {
      if (Fe)
        for (Ie = z.call(k.ownerDocument); k.firstChild; )
          Ie.appendChild(k.firstChild);
      else
        Ie = k;
      return (Y.shadowroot || Y.shadowrootmode) && (Ie = re.call(i, Ie, !0)), Ie;
    }
    let He = Gt ? k.outerHTML : k.innerHTML;
    return Gt && I["!doctype"] && k.ownerDocument && k.ownerDocument.doctype && k.ownerDocument.doctype.name && Oe(Xl, k.ownerDocument.doctype.name) && (He = "<!DOCTYPE " + k.ownerDocument.doctype.name + `>
` + He), jt && Lr([le, Ae, Ue], (Zt) => {
      He = Wi(He, Zt, " ");
    }), y && Gn ? y.createHTML(He) : He;
  }, e.setConfig = function() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gs(R), $i = !0;
  }, e.clearConfig = function() {
    Qn = null, $i = !1;
  }, e.isValidAttribute = function(R, g, k) {
    Qn || gs({});
    const C = we(R), ge = we(g);
    return Aa(C, ge, k);
  }, e.addHook = function(R, g) {
    typeof g == "function" && Hi(V[R], g);
  }, e.removeHook = function(R, g) {
    if (g !== void 0) {
      const k = ag(V[R], g);
      return k === -1 ? void 0 : og(V[R], k, 1)[0];
    }
    return ro(V[R]);
  }, e.removeHooks = function(R) {
    V[R] = [];
  }, e.removeAllHooks = function() {
    V = uo();
  }, e;
}
var Kl = Zl();
te.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
Kl.addHook("afterSanitizeAttributes", (n) => {
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
function Tg(n) {
  if (!n) return "";
  const e = te.parse(n);
  return Kl.sanitize(e, {
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
var Sg = /* @__PURE__ */ J('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Eg = /* @__PURE__ */ J('<span class="message-content"> </span>'), Cg = /* @__PURE__ */ J('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Ag = /* @__PURE__ */ J('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Ig = /* @__PURE__ */ J('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Mg = {
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
function Jl(n, e) {
  zt(e, !0), an(n, Mg);
  let t = K(e, "message", 7);
  function i(w) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(w);
  }
  const r = /* @__PURE__ */ me(() => t().role === "user"), s = /* @__PURE__ */ me(() => t().role === "assistant" ? Tg(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(w) {
      t(w), Q();
    }
  }, o = Ig();
  let l;
  var c = ue(o), d = ue(c);
  {
    var u = (w) => {
      var y = Sg(), L = ue(y);
      Rd(L, () => b(s)), de(y), j(w, y);
    }, p = (w) => {
      var y = Eg(), L = ue(y, !0);
      de(y), lt(() => Oi(L, t().content)), j(w, y);
    };
    _e(d, (w) => {
      t().role === "assistant" ? w(u) : w(p, !1);
    });
  }
  var h = ae(d, 2);
  {
    var x = (w) => {
      var y = Cg();
      j(w, y);
    };
    _e(h, (w) => {
      t().status === "sending" && w(x);
    });
  }
  var v = ae(h, 2);
  {
    var m = (w) => {
      var y = Ag();
      j(w, y);
    };
    _e(v, (w) => {
      t().status === "failed" && w(m);
    });
  }
  de(c);
  var S = ae(c, 2), P = ue(S, !0);
  return de(S), de(o), lt(
    (w, y) => {
      l = ia(o, 1, "message svelte-1uqoiy7", null, l, { user: b(r), assistant: !b(r) }), ct(o, "aria-label", b(r) ? "Your message" : "Assistant message"), ct(S, "aria-label", w), Oi(P, y);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), j(n, o), qt(a);
}
on(Jl, { message: {} }, [], [], !0);
var Lg = /* @__PURE__ */ J('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Rg = {
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
function ec(n, e) {
  zt(e, !0), an(n, Rg);
  let t = K(e, "chat", 7, Pt);
  var i = {
    get chat() {
      return t();
    },
    set chat(o = Pt) {
      t(o), Q();
    }
  }, r = gl(), s = An(r);
  {
    var a = (o) => {
      var l = Lg();
      j(o, l);
    };
    _e(s, (o) => {
      t().isTyping && o(a);
    });
  }
  return j(n, r), qt(i);
}
on(ec, { chat: {} }, [], [], !0);
var Og = /* @__PURE__ */ J('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Ng = /* @__PURE__ */ J('<div class="quick-questions svelte-otpvm8" role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const Dg = {
  hash: "svelte-otpvm8",
  code: `.quick-questions.svelte-otpvm8 {display:flex;flex-direction:column;align-items:center;align-self:center;gap:10px;padding:var(--widget-space-xs) 0;width:100%;max-width:280px;}.section-label.svelte-otpvm8 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);margin-bottom:var(--widget-space-xs);
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;animation-delay:2.7s;}.question-chip.svelte-otpvm8 {min-height:44px;padding:var(--widget-space-sm) var(--widget-space-lg);border:1.5px solid var(--widget-primary);border-radius:var(--widget-radius-full);background:transparent;color:var(--widget-primary);cursor:pointer;transition:background var(--widget-transition),
                color var(--widget-transition),
                transform var(--widget-transition),
                box-shadow var(--widget-transition);font-family:var(--widget-font-family);font-size:0.875rem;font-weight:var(--widget-font-weight-medium);text-align:center;
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}

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
function tc(n, e) {
  zt(e, !0), an(n, Dg);
  const t = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let i = K(e, "questions", 7, t), r = K(e, "onsend", 7), s = K(e, "disabled", 7, !1);
  function a(d) {
    var u;
    s() || (u = r()) == null || u(d);
  }
  var o = {
    get questions() {
      return i();
    },
    set questions(d = t) {
      i(d), Q();
    },
    get onsend() {
      return r();
    },
    set onsend(d) {
      r(d), Q();
    },
    get disabled() {
      return s();
    },
    set disabled(d = !1) {
      s(d), Q();
    }
  }, l = Ng(), c = ae(ue(l), 2);
  return hl(c, 18, i, (d) => d, (d, u, p) => {
    var h = Og();
    h.__click = () => a(u);
    var x = ue(h, !0);
    de(h), lt(() => {
      h.disabled = s(), ct(h, "title", u), ml(h, `animation-delay: ${2.8 + b(p) * 0.2}s`), ct(h, "aria-disabled", s() ? "true" : "false"), Oi(x, u);
    }), j(d, h);
  }), de(l), j(n, l), qt(o);
}
Pi(["click"]);
on(tc, { questions: {}, onsend: {}, disabled: {} }, [], [], !0);
var Pg = /* @__PURE__ */ J('<p class="initial-message svelte-qha2j"> </p>'), $g = /* @__PURE__ */ J('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), zg = /* @__PURE__ */ J('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), qg = /* @__PURE__ */ J('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Ug = /* @__PURE__ */ J('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Fg = {
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
function ha(n, e) {
  zt(e, !0), an(n, Fg);
  let t = K(e, "onsend", 7), i = K(e, "connectionState", 23, () => se.DISCONNECTED), r = K(e, "chat", 7, Pt), s = K(e, "config", 7, dt), a, o = !0;
  const l = /* @__PURE__ */ me(() => r().messages.length > 0), c = /* @__PURE__ */ me(() => i() !== se.CONNECTED);
  er(() => {
    r().messages, o && b(l) && d();
  }), er(() => {
    r().isTyping, o && b(l) && d();
  }), er(() => {
    r().streamingUpdateSignal, o && r().isStreaming && d();
  });
  async function d() {
    await ll(), a && (a.scrollTop = a.scrollHeight);
  }
  function u() {
    if (a) {
      const { scrollTop: w, scrollHeight: y, clientHeight: L } = a;
      o = y - w - L < 100;
    }
  }
  ss(() => {
    b(l) && d();
  });
  var p = {
    get onsend() {
      return t();
    },
    set onsend(w) {
      t(w), Q();
    },
    get connectionState() {
      return i();
    },
    set connectionState(w = se.DISCONNECTED) {
      i(w), Q();
    },
    get chat() {
      return r();
    },
    set chat(w = Pt) {
      r(w), Q();
    },
    get config() {
      return s();
    },
    set config(w = dt) {
      s(w), Q();
    }
  }, h = Ug(), x = ue(h);
  {
    var v = (w) => {
      var y = $g(), L = ue(y), ne = ue(L), A = ue(ne);
      de(ne), Xs(2), de(L);
      var z = ae(L, 2);
      {
        var oe = (V) => {
          var le = Pg(), Ae = ue(le, !0);
          de(le), lt(() => Oi(Ae, s().initialMessage)), j(V, le);
        };
        _e(z, (V) => {
          s().initialMessage && V(oe);
        });
      }
      var re = ae(z, 2);
      tc(re, {
        get questions() {
          return s().quickQuestions;
        },
        get onsend() {
          return t();
        },
        get disabled() {
          return b(c);
        }
      }), de(y), lt(() => ct(A, "src", au)), j(w, y);
    }, m = (w) => {
      var y = zg(), L = ue(y);
      hl(L, 17, () => r().messages, (A) => A.id, (A, z) => {
        Jl(A, {
          get message() {
            return b(z);
          }
        });
      });
      var ne = ae(L, 2);
      ec(ne, {
        get chat() {
          return r();
        }
      }), de(y), j(w, y);
    };
    _e(x, (w) => {
      r().messages.length === 0 ? w(v) : w(m, !1);
    });
  }
  var S = ae(x, 2);
  {
    var P = (w) => {
      var y = qg(), L = ae(ue(y), 2), ne = ue(L, !0);
      de(L), de(y), lt(() => Oi(ne, r().error)), j(w, y);
    };
    _e(S, (w) => {
      r().error && w(P);
    });
  }
  return de(h), rs(h, (w) => a = w, () => a), Td("scroll", h, u), j(n, h), qt(p);
}
on(ha, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
var Hg = /* @__PURE__ */ J('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), Wg = /* @__PURE__ */ J('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), Bg = /* @__PURE__ */ J('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const jg = {
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
function pa(n, e) {
  zt(e, !0), an(n, jg);
  let t = K(e, "onsend", 7), i = K(e, "disabled", 7, !1), r = K(e, "showBrandBanner", 7, !1), s = K(e, "connectionState", 23, () => se.DISCONNECTED), a = K(e, "chat", 7, Pt), o = K(e, "config", 7, dt), l = /* @__PURE__ */ H(""), c;
  function d() {
    var oe, re, V, le;
    const A = vt().generate();
    G.log("InputBar", "handleSend() called", {
      correlationId: A,
      rawInputValue: b(l),
      rawLength: ((oe = b(l)) == null ? void 0 : oe.length) || 0,
      rawType: typeof b(l),
      disabled: i(),
      isTyping: a().isTyping
    });
    const z = b(l).trim();
    G.log("InputBar", "After trimming", {
      correlationId: A,
      original: b(l),
      trimmed: z,
      originalLength: ((re = b(l)) == null ? void 0 : re.length) || 0,
      trimmedLength: (z == null ? void 0 : z.length) || 0,
      wasEmptyAfterTrim: !z,
      hadWhitespaceOnly: (((V = b(l)) == null ? void 0 : V.length) || 0) > 0 && !z
    }), z && !i() && !a().isTyping ? (G.log("InputBar", "Conditions met, calling onsend", {
      correlationId: A,
      trimmedValue: z,
      trimmedLength: z.length,
      willSend: !0
    }), vt().setCurrent(A), (le = t()) == null || le(z), $(l, ""), p()) : G.log("InputBar", "Send blocked", {
      correlationId: A,
      hasContent: !!z,
      disabled: i(),
      isTyping: a().isTyping,
      trimmedValue: z || "(empty)",
      reason: z ? i() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function u(A) {
    A.key === "Enter" && !A.shiftKey && (A.preventDefault(), d());
  }
  function p() {
    c && (c.style.height = "auto", c.style.height = Math.min(c.scrollHeight, 120) + "px");
  }
  const h = /* @__PURE__ */ me(() => i() || a().isTyping || a().error !== null), x = /* @__PURE__ */ me(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), v = /* @__PURE__ */ me(() => s() === se.CONNECTING || s() === se.DISCONNECTED);
  var m = {
    get onsend() {
      return t();
    },
    set onsend(A) {
      t(A), Q();
    },
    get disabled() {
      return i();
    },
    set disabled(A = !1) {
      i(A), Q();
    },
    get showBrandBanner() {
      return r();
    },
    set showBrandBanner(A = !1) {
      r(A), Q();
    },
    get connectionState() {
      return s();
    },
    set connectionState(A = se.DISCONNECTED) {
      s(A), Q();
    },
    get chat() {
      return a();
    },
    set chat(A = Pt) {
      a(A), Q();
    },
    get config() {
      return o();
    },
    set config(A = dt) {
      o(A), Q();
    }
  }, S = Bg(), P = ue(S);
  {
    var w = (A) => {
      var z = gl(), oe = An(z);
      {
        var re = (le) => {
          var Ae = Hg();
          j(le, Ae);
        }, V = (le) => {
          var Ae = Wg();
          j(le, Ae);
        };
        _e(oe, (le) => {
          b(v) ? le(re) : le(V, !1);
        });
      }
      j(A, z);
    };
    _e(P, (A) => {
      r() && A(w);
    });
  }
  var y = ae(P, 2), L = ue(y);
  cd(L), L.__keydown = u, L.__input = p, rs(L, (A) => c = A, () => c);
  var ne = ae(L, 2);
  return ne.__click = d, de(y), Xs(2), de(S), lt(
    (A) => {
      ct(L, "placeholder", b(x)), L.disabled = b(h), ne.disabled = A;
    },
    [() => b(h) || !b(l).trim()]
  ), Wd(L, () => b(l), (A) => $(l, A)), j(n, S), qt(m);
}
Pi(["keydown", "input", "click"]);
on(
  pa,
  {
    onsend: {},
    disabled: {},
    showBrandBanner: {},
    connectionState: {},
    chat: {},
    config: {}
  },
  [],
  [],
  !0
);
class nc {
  constructor(e, t) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = as(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), ke.API_TIMEOUT), i = Xi.getApiUrl("init", {
        clientId: this.config.clientId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: i,
        payload: r
      });
      const s = vt().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: r }),
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
          throw new ni(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new ti(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof tr || e instanceof ti || e instanceof ni)
        throw e;
      const t = nr.handle(e, {
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
    var i, r;
    const t = vt().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: t,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const s = ru.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: t,
        input: e,
        isValid: s.isValid,
        error: s.error,
        sanitizedValue: s.sanitizedValue,
        sanitizedLength: ((i = s.sanitizedValue) == null ? void 0 : i.length) || 0,
        contentChanged: e !== s.sanitizedValue
      }), !s.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: t, error: s.error }), new tr(s.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: t }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), ke.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: s.sanitizedValue
        }
      }, c = Xi.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: t,
        url: c,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((r = l.body.message) == null ? void 0 : r.length) || 0
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
          const p = d.headers.get("Retry-After"), h = p ? parseInt(p, 10) : 60;
          throw new ni(
            `Rate limit exceeded. Please try again in ${h} seconds.`,
            h
          );
        }
        throw new ti(
          `Failed to send message: ${d.statusText}`,
          d.status,
          c
        );
      }
      const u = await d.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: t, result: u }), u;
    } catch (s) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: s }), s instanceof tr || s instanceof ti || s instanceof ni)
        throw s;
      const a = nr.handle(s, {
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), ke.API_TIMEOUT), i = Xi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: i,
        payload: r
      });
      const s = vt().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: r }),
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), ke.API_TIMEOUT), i = Xi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), r = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, s = vt().getCurrent(), a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: r }),
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
      const t = nr.handle(e, {
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
class ic {
  constructor(e, t, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = ke.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = t, this.debugLogger = i;
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
    t && !this.chatStore.hasMessages && (dt.setBackendInitialMessage(t), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: dt.initialMessage === t ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, t = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && t > ke.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, ke.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = ke.TYPING_FALLBACK_TIMEOUT) {
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
var Gg = /* @__PURE__ */ J('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Vg = /* @__PURE__ */ J('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Try Again</button>', 1), Yg = /* @__PURE__ */ J('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Qg = /* @__PURE__ */ J('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Xg = /* @__PURE__ */ J('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Zg = /* @__PURE__ */ J('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Kg = {
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
function rc(n, e) {
  zt(e, !0), an(n, Kg);
  let t = K(e, "hostElement", 7), i = K(e, "ui", 7, pn), r = K(e, "chat", 7, Pt), s = K(e, "config", 7, dt), a, o, l, c, d, u;
  const p = vt();
  let h = !1, x = !1, v = null, m = /* @__PURE__ */ H(ye(se.DISCONNECTED)), S = /* @__PURE__ */ H(
    !1
    // Track if max reconnection attempts exhausted
  ), P = /* @__PURE__ */ H(null), w = null;
  function y() {
    var N;
    if ((N = t()) != null && N.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function L(_) {
    const N = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), O = _.querySelectorAll(N);
    if (O.length === 0) return;
    const be = O[0], _t = O[O.length - 1];
    return requestAnimationFrame(() => be.focus()), { firstFocusable: be, lastFocusable: _t };
  }
  function ne(_) {
    if (_.key === "Escape" && i().isOpen) {
      _.preventDefault(), i().close(), z();
      return;
    }
    if (_.key === "Tab" && b(P)) {
      const N = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), O = b(P).querySelectorAll(N);
      if (O.length === 0) return;
      const be = O[0], _t = O[O.length - 1];
      _.shiftKey && document.activeElement === be ? (_.preventDefault(), _t.focus()) : !_.shiftKey && document.activeElement === _t && (_.preventDefault(), be.focus());
    }
  }
  function A() {
    w = document.activeElement;
  }
  function z() {
    w && typeof w.focus == "function" && requestAnimationFrame(() => w == null ? void 0 : w.focus()), w = null;
  }
  function oe() {
    b(P) && L(b(P));
  }
  ss(async () => {
    try {
      a = new Dl(t()), u = as(a.getAll()), o = new Br(), l = new nc(a, o), c = new Pl(a, o), d = new ic(r(), i(), u), t() && s().loadFromAttributes(t()), V(), y(), u.log("ChatWidget", "Attaching WebSocket listeners"), c.on("message", Ae), c.on("stateChange", (N) => {
        u.log("ChatWidget", "WebSocket state changed", {
          oldState: b(m),
          newState: N,
          timestamp: Date.now()
        }), $(m, N, !0);
      }), c.on("error", (N) => {
        u.error("ChatWidget", "WebSocket error event", N), v = N.error, r().setError(N.error);
      }), c.on("connectionFailed", (N) => {
        u.error("ChatWidget", "WebSocket connection failed after max attempts", N), $(S, !0), v = N.error, r().setError(N.error);
      }), u.log("ChatWidget", "WebSocket listeners attached successfully"), i().isOpen && await re();
      const _ = t();
      _ != null && _.setOnOpenChangeCallback && _.setOnOpenChangeCallback((N) => {
        yt(N);
      }), u.log("ChatWidget", "Services initialized successfully");
    } catch (_) {
      u.error("ChatWidget", "Initialization failed", _), v = _ instanceof Error ? _.message : "Failed to initialize chat";
    }
  }), er(() => {
    const _ = i().isOpen;
    if (t()) {
      const N = t().hasAttribute("open");
      _ && !N ? t().setAttribute("open", "") : !_ && N && t().removeAttribute("open");
    }
  }), bl(() => {
    const _ = l == null ? void 0 : l.getSessionId();
    _ && o.markSessionInactive(_), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function re() {
    var _;
    if (!(h || x)) {
      x = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const O = l.getSessionId();
          O && (await c.connect(O), setTimeout(
            () => {
              u.log("ChatWidget", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            ke.CONNECTION_DELAY
          ));
        } else {
          const O = await l.initialize();
          (_ = O.assistant_info) != null && _.assistant_name && s().setBackendTitle(O.assistant_info.assistant_name), await c.connect(O.session_id), setTimeout(
            () => {
              u.log("ChatWidget", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            ke.CONNECTION_DELAY
          ), O.settings && le(O.settings);
        }
        h = !0;
      } catch (N) {
        v = N instanceof Error ? N.message : "Failed to initialize", r().setError(v);
      } finally {
        i().setLoading(!1), x = !1;
      }
    }
  }
  function V() {
    const _ = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", _.theme || "modern"), _.primary_color || _.accent_color)) {
        const N = _.accent_color || _.primary_color;
        if (N) {
          const O = cr(N, "#6b46c1");
          t().style.setProperty("--widget-primary", O), t().style.setProperty("--widget-primary-hover", fe(O, -20)), t().style.setProperty("--widget-primary-light", fe(O, 20)), t().style.setProperty("--widget-primary-dark", fe(O, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${O} 0%, ${fe(O, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${fe(O, -20)} 0%, ${O} 100%)`);
        }
      }
    });
  }
  function le(_) {
    requestAnimationFrame(() => {
      t() && (_.theme && typeof _.theme == "string" && t().setAttribute("data-theme", _.theme), _.primary_color && typeof _.primary_color == "string" && t().style.setProperty("--widget-primary", _.primary_color));
    });
  }
  function Ae(_) {
    d.handleMessage(_);
  }
  async function Ue(_) {
    const N = p.getCurrent();
    u.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: N,
      content: _,
      length: (_ == null ? void 0 : _.length) || 0,
      trimmed: (_ == null ? void 0 : _.trim()) || "",
      type: typeof _
    });
    const O = r().addMessage(_, "user");
    if (d.resetForNewMessage(), u.log("ChatWidget", "Message added to store", {
      correlationId: N,
      messageId: O.id,
      content: O.content,
      length: O.content.length
    }), h || (u.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: N }), await re()), u.log("ChatWidget", "Connection state", {
      correlationId: N,
      connectionState: b(m),
      isConnected: b(m) === se.CONNECTED,
      routingTo: b(m) === se.CONNECTED ? "WebSocket" : "HTTP API"
    }), b(m) === se.CONNECTED) {
      u.log("ChatWidget", "Sending via WebSocket", { correlationId: N, content: _ });
      try {
        d.setTypingWithTimeout(), c.send(_), r().updateMessageStatus(O.id, "sent"), u.log("ChatWidget", "User message marked as sent", { messageId: O.id });
      } catch (be) {
        u.error("ChatWidget", "WebSocket send error", be), r().updateMessageStatus(O.id, "failed"), r().setError("Failed to send message. Please try again."), r().setTyping(!1);
        return;
      }
    } else
      try {
        u.log("ChatWidget", "Sending via HTTP API", { correlationId: N, content: _ }), d.setTypingWithTimeout();
        const be = await l.sendMessage(_);
        u.log("ChatWidget", "HTTP API response received", {
          correlationId: N,
          response: be.response,
          sessionId: be.session_id
        }), r().addMessage(be.response, "assistant"), r().setTyping(!1), i().isOpen || i().markUnread();
      } catch (be) {
        u.error("ChatWidget", "HTTP API error", be), v = "Failed to send message. Please try again.", r().setError(v), r().updateMessageStatus(O.id, "failed"), r().setTyping(!1);
      }
  }
  async function yt(_) {
    const N = i().isOpen;
    N !== _ && (u.log("ChatWidget", "Setting open state", { from: N, to: _ }), _ && !N && !w && A(), _ ? i().open() : i().close(), await new Promise((O) => setTimeout(O, 0)), _ && !h && s() && await re(), _ ? requestAnimationFrame(() => oe()) : z());
  }
  async function Ft() {
    await yt(!i().isOpen);
  }
  function Ht() {
    r().clearMessages(), r().setError(null), v = null;
  }
  function Wt() {
    u.log("ChatWidget", "Manual retry connection requested"), $(S, !1), v = null, r().setError(null), c == null || c.retryConnection();
  }
  const Te = /* @__PURE__ */ me(() => i().isOpen), T = /* @__PURE__ */ me(() => i().isLoading), I = /* @__PURE__ */ me(() => {
    var _;
    return ((_ = s()) == null ? void 0 : _.position) || "bottom-right";
  });
  var Z = {
    get hostElement() {
      return t();
    },
    set hostElement(_) {
      t(_), Q();
    },
    get ui() {
      return i();
    },
    set ui(_ = pn) {
      i(_), Q();
    },
    get chat() {
      return r();
    },
    set chat(_ = Pt) {
      r(_), Q();
    },
    get config() {
      return s();
    },
    set config(_ = dt) {
      s(_), Q();
    }
  }, Y = Zg(), vn = ue(Y);
  {
    var ee = (_) => {
      Il(_, {
        onclick: Ft,
        get ui() {
          return i();
        }
      });
    };
    _e(vn, (_) => {
      b(Te) || _(ee);
    });
  }
  var Ve = ae(vn, 2);
  {
    var Bt = (_) => {
      var N = Xg(), O = ae(An(N), 2);
      O.__keydown = ne;
      var be = ue(O);
      aa(be, {
        onclose: () => {
          i().close(), z();
        },
        get connectionState() {
          return b(m);
        },
        get connectionFailed() {
          return b(S);
        },
        get ui() {
          return i();
        },
        get config() {
          return s();
        }
      });
      var _t = ae(be, 2);
      ha(_t, {
        onsend: Ue,
        get connectionState() {
          return b(m);
        },
        get chat() {
          return r();
        },
        get config() {
          return s();
        }
      });
      var jt = ae(_t, 2);
      {
        let xe = /* @__PURE__ */ me(() => r().error !== null || b(T)), Fe = /* @__PURE__ */ me(() => r().messages.length === 0);
        pa(jt, {
          onsend: Ue,
          get disabled() {
            return b(xe);
          },
          get showBrandBanner() {
            return b(Fe);
          },
          get connectionState() {
            return b(m);
          },
          get chat() {
            return r();
          },
          get config() {
            return s();
          }
        });
      }
      var jn = ae(jt, 2);
      {
        var Gt = (xe) => {
          var Fe = Yg(), Gn = ue(Fe);
          {
            var yr = (ln) => {
              var Vt = Gg(), Yt = ae(An(Vt), 2);
              Yt.__click = Wt, j(ln, Vt);
            }, _r = (ln) => {
              var Vt = Vg(), Yt = ae(An(Vt), 2);
              Yt.__click = Ht, j(ln, Vt);
            };
            _e(Gn, (ln) => {
              b(S) ? ln(yr) : ln(_r, !1);
            });
          }
          de(Fe), j(xe, Fe);
        };
        _e(jn, (xe) => {
          r().error && xe(Gt);
        });
      }
      de(O), rs(O, (xe) => $(P, xe), () => b(P));
      var $i = ae(O, 2);
      {
        var zi = (xe) => {
          var Fe = Qg();
          Fe.__click = () => i().close(), Ba(3, Fe, () => Zd, () => ({ duration: 200 })), j(xe, Fe);
        };
        _e($i, (xe) => {
          b(Te) && xe(zi);
        });
      }
      Ba(3, O, () => Kd, () => ({ y: 20, duration: 300 })), j(_, N);
    };
    _e(Ve, (_) => {
      b(Te) && _(Bt);
    });
  }
  return de(Y), lt(() => {
    ct(Y, "data-position", b(I)), ct(Y, "data-theme", s().theme);
  }), j(n, Y), qt(Z);
}
Pi(["keydown", "click"]);
on(rc, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
var Jg = /* @__PURE__ */ J('<span class="error-message svelte-12a99c7" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Retry Connection</button>', 1), ef = /* @__PURE__ */ J('<span class="error-message svelte-12a99c7" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Try Again</button>', 1), tf = /* @__PURE__ */ J('<div class="error-banner svelte-12a99c7" role="alert" aria-live="polite"><!></div>'), nf = /* @__PURE__ */ J('<div class="chat-page svelte-12a99c7" role="region" aria-label="Chat assistant"><!> <!> <!> <!></div>');
const rf = {
  hash: "svelte-12a99c7",
  code: `.chat-page.svelte-12a99c7 {width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--widget-background);border-radius:0;border:none;min-height:400px;}.error-banner.svelte-12a99c7 {position:sticky;bottom:var(--widget-space-md);left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  @media (max-width: 480px) {.error-banner.svelte-12a99c7 {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-12a99c7 {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-12a99c7 {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-12a99c7:hover {background:var(--widget-primary-hover);}.restart-button.svelte-12a99c7:active {background:var(--widget-primary-dark);}.restart-button.svelte-12a99c7:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .chat-page.svelte-12a99c7 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-12a99c7 {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function sc(n, e) {
  zt(e, !0), an(n, rf);
  let t = K(e, "hostElement", 7), i = K(e, "ui", 7, pn), r = K(e, "chat", 7, Pt), s = K(e, "config", 7, dt), a, o, l, c, d, u;
  const p = vt();
  let h = !1, x = !1, v = null, m = /* @__PURE__ */ H(ye(se.DISCONNECTED)), S = /* @__PURE__ */ H(!1), P = /* @__PURE__ */ H(null);
  const w = (T) => {
    const I = T.detail;
    I != null && I.text && typeof I.text == "string" && oe(I.text);
  };
  function y() {
    var I;
    if ((I = t()) != null && I.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  ss(async () => {
    try {
      i().open(), a = new Dl(t()), u = as(a.getAll()), o = new Br(), l = new nc(a, o), c = new Pl(a, o), d = new ic(r(), i(), u), t() && s().loadFromAttributes(t()), ne(), y(), u.log("ChatPage", "Attaching WebSocket listeners"), c.on("message", z), c.on("stateChange", (T) => {
        u.log("ChatPage", "WebSocket state changed", {
          oldState: b(m),
          newState: T,
          timestamp: Date.now()
        }), $(m, T, !0);
      }), c.on("error", (T) => {
        u.error("ChatPage", "WebSocket error event", T), v = T.error, r().setError(T.error);
      }), c.on("connectionFailed", (T) => {
        u.error("ChatPage", "WebSocket connection failed after max attempts", T), $(S, !0), v = T.error, r().setError(T.error);
      }), u.log("ChatPage", "WebSocket listeners attached successfully"), t() && t().addEventListener("send-message", w), await L(), u.log("ChatPage", "Services initialized successfully");
    } catch (T) {
      u.error("ChatPage", "Initialization failed", T), v = T instanceof Error ? T.message : "Failed to initialize chat";
    }
  }), bl(() => {
    t() && t().removeEventListener("send-message", w);
    const T = l == null ? void 0 : l.getSessionId();
    T && o.markSessionInactive(T), c == null || c.disconnect(), d == null || d.cleanup();
  });
  async function L() {
    var T;
    if (!(h || x)) {
      x = !0;
      try {
        if (i().setLoading(!0), await l.resumeSession()) {
          const Z = l.getSessionId();
          Z && (await c.connect(Z), setTimeout(
            () => {
              u.log("ChatPage", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            ke.CONNECTION_DELAY
          ));
        } else {
          const Z = await l.initialize();
          (T = Z.assistant_info) != null && T.assistant_name && s().setBackendTitle(Z.assistant_info.assistant_name), await c.connect(Z.session_id), setTimeout(
            () => {
              u.log("ChatPage", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            ke.CONNECTION_DELAY
          ), Z.settings && A(Z.settings);
        }
        h = !0;
      } catch (I) {
        v = I instanceof Error ? I.message : "Failed to initialize", r().setError(v);
      } finally {
        i().setLoading(!1), x = !1;
      }
    }
  }
  function ne() {
    const T = a.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", T.theme || "modern"), T.primary_color || T.accent_color)) {
        const I = T.accent_color || T.primary_color;
        if (I) {
          const Z = cr(I, "#6b46c1");
          t().style.setProperty("--widget-primary", Z), t().style.setProperty("--widget-primary-hover", fe(Z, -20)), t().style.setProperty("--widget-primary-light", fe(Z, 20)), t().style.setProperty("--widget-primary-dark", fe(Z, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${Z} 0%, ${fe(Z, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${fe(Z, -20)} 0%, ${Z} 100%)`);
        }
      }
    });
  }
  function A(T) {
    requestAnimationFrame(() => {
      if (t() && (T.theme && typeof T.theme == "string" && t().setAttribute("data-theme", T.theme), T.primary_color && typeof T.primary_color == "string")) {
        const I = cr(T.primary_color, "#6b46c1");
        t().style.setProperty("--widget-primary", I), t().style.setProperty("--widget-primary-hover", fe(I, -20)), t().style.setProperty("--widget-primary-light", fe(I, 20)), t().style.setProperty("--widget-primary-dark", fe(I, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${I} 0%, ${fe(I, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${fe(I, -20)} 0%, ${I} 100%)`);
      }
    });
  }
  function z(T) {
    d.handleMessage(T);
  }
  async function oe(T) {
    const I = p.getCurrent();
    u.log("ChatPage", "handleSendMessage called with content", {
      correlationId: I,
      content: T,
      length: (T == null ? void 0 : T.length) || 0,
      trimmed: (T == null ? void 0 : T.trim()) || "",
      type: typeof T
    });
    const Z = r().addMessage(T, "user");
    if (d.resetForNewMessage(), u.log("ChatPage", "Message added to store", {
      correlationId: I,
      messageId: Z.id,
      content: Z.content,
      length: Z.content.length
    }), h || (u.log("ChatPage", "Widget not initialized, initializing...", { correlationId: I }), await L()), u.log("ChatPage", "Connection state", {
      correlationId: I,
      connectionState: b(m),
      isConnected: b(m) === se.CONNECTED,
      routingTo: b(m) === se.CONNECTED ? "WebSocket" : "HTTP API"
    }), b(m) === se.CONNECTED) {
      u.log("ChatPage", "Sending via WebSocket", { correlationId: I, content: T });
      try {
        d.setTypingWithTimeout(), c.send(T), r().updateMessageStatus(Z.id, "sent"), u.log("ChatPage", "User message marked as sent", { messageId: Z.id });
      } catch (Y) {
        u.error("ChatPage", "WebSocket send error", Y), r().updateMessageStatus(Z.id, "failed"), r().setError("Failed to send message. Please try again."), r().setTyping(!1);
        return;
      }
    } else
      try {
        u.log("ChatPage", "Sending via HTTP API", { correlationId: I, content: T }), d.setTypingWithTimeout();
        const Y = await l.sendMessage(T);
        u.log("ChatPage", "HTTP API response received", {
          correlationId: I,
          response: Y.response,
          sessionId: Y.session_id
        }), r().addMessage(Y.response, "assistant"), r().setTyping(!1);
      } catch (Y) {
        u.error("ChatPage", "HTTP API error", Y), v = "Failed to send message. Please try again.", r().setError(v), r().updateMessageStatus(Z.id, "failed"), r().setTyping(!1);
      }
  }
  function re() {
    r().clearMessages(), r().setError(null), v = null;
  }
  function V() {
    u.log("ChatPage", "Manual retry connection requested"), $(S, !1), v = null, r().setError(null), c == null || c.retryConnection();
  }
  const le = /* @__PURE__ */ me(() => i().isLoading);
  var Ae = {
    get hostElement() {
      return t();
    },
    set hostElement(T) {
      t(T), Q();
    },
    get ui() {
      return i();
    },
    set ui(T = pn) {
      i(T), Q();
    },
    get chat() {
      return r();
    },
    set chat(T = Pt) {
      r(T), Q();
    },
    get config() {
      return s();
    },
    set config(T = dt) {
      s(T), Q();
    }
  }, Ue = nf(), yt = ue(Ue);
  aa(yt, {
    get connectionState() {
      return b(m);
    },
    get connectionFailed() {
      return b(S);
    },
    showCloseButton: !1,
    get ui() {
      return i();
    },
    get config() {
      return s();
    }
  });
  var Ft = ae(yt, 2);
  ha(Ft, {
    onsend: oe,
    get connectionState() {
      return b(m);
    },
    get chat() {
      return r();
    },
    get config() {
      return s();
    }
  });
  var Ht = ae(Ft, 2);
  {
    let T = /* @__PURE__ */ me(() => r().error !== null || b(le)), I = /* @__PURE__ */ me(() => r().messages.length === 0);
    pa(Ht, {
      onsend: oe,
      get disabled() {
        return b(T);
      },
      get showBrandBanner() {
        return b(I);
      },
      get connectionState() {
        return b(m);
      },
      get chat() {
        return r();
      },
      get config() {
        return s();
      }
    });
  }
  var Wt = ae(Ht, 2);
  {
    var Te = (T) => {
      var I = tf(), Z = ue(I);
      {
        var Y = (ee) => {
          var Ve = Jg(), Bt = ae(An(Ve), 2);
          Bt.__click = V, j(ee, Ve);
        }, vn = (ee) => {
          var Ve = ef(), Bt = ae(An(Ve), 2);
          Bt.__click = re, j(ee, Ve);
        };
        _e(Z, (ee) => {
          b(S) ? ee(Y) : ee(vn, !1);
        });
      }
      de(I), j(T, I);
    };
    _e(Wt, (T) => {
      r().error && T(Te);
    });
  }
  return de(Ue), rs(Ue, (T) => $(P, T), () => b(P)), j(n, Ue), qt(Ae);
}
Pi(["click"]);
on(sc, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
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
}, Bs = {
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
function sf(n = ma) {
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
function af(n = ma) {
  return sf(n);
}
const ac = {
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
}, go = ac, fo = {
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
}, of = {
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
}, lf = {
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
}, cf = {
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
}, df = {
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
function uf(n) {
  return {
    "bot-brewers": Bs,
    modern: ac,
    professional: go,
    corporate: go,
    // Alias for backward compatibility
    friendly: fo,
    playful: fo,
    // Alias
    minimal: of,
    dark: lf,
    elegant: cf,
    bold: df,
    generic: ma,
    default: Bs
  }[n.toLowerCase()] || null;
}
function gf(n) {
  const e = uf(n) || Bs;
  return af(e);
}
function va(n, e) {
  const t = n.getAttribute("theme") || n.getAttribute("data-theme") || e;
  return gf(t);
}
function oc(n, e, t) {
  const i = n.querySelector('style[data-role="theme"]');
  i && (i.textContent = va(e, t));
}
function lc(n, e, t) {
  const i = n.querySelector(`.${e}`);
  if (i) {
    const r = cr(t, "#6b46c1");
    i.style.setProperty("--widget-primary", r), i.style.setProperty("--widget-primary-hover", fe(r, -20)), i.style.setProperty("--widget-primary-light", fe(r, 20)), i.style.setProperty("--widget-primary-dark", fe(r, -30));
  }
}
class ho extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = yl(), this._chatStore = kl(), this._configStore = Cl();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open"];
  }
  async connectedCallback() {
    var r, s;
    const e = this.getAttribute("client-id"), t = window, i = ((r = t.AIChat) == null ? void 0 : r.clientId) || ((s = t.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !i) {
      G.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (lr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i) {
      if ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), oc(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && i && lc(this._shadowRoot, "widget-root", i), e === "client-id" && i && this._app && (G.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), lr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions")
        if (i)
          try {
            const r = JSON.parse(i);
            Array.isArray(r) ? this._configStore.setQuickQuestions(sa.validate(r, "ChatWidget")) : G.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            G.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          this._configStore.setQuickQuestions(void 0);
      if (e === "open") {
        const r = i !== null;
        this._onOpenChangeCallback ? this._onOpenChangeCallback(r) : this._pendingOpenState = r;
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
    i.setAttribute("data-role", "theme"), i.textContent = va(this, this._currentTheme), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = is(rc, {
      target: t,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
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
class ff extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = yl(), this._chatStore = kl(), this._configStore = Cl();
  }
  // Observed attributes (no 'open' or 'position' — always visible, no floating button)
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "title", "client-id", "initial-message", "quick-questions"];
  }
  async connectedCallback() {
    var r, s;
    const e = this.getAttribute("client-id"), t = window, i = ((r = t.AIChat) == null ? void 0 : r.clientId) || ((s = t.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !i) {
      G.error("ChatPage", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (lr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, this._configStore.updateConfig({ theme: i }, "user"), oc(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && i && lc(this._shadowRoot, "chat-page-root", i), e === "client-id" && i && this._app && (G.log("ChatPage", `Client ID changed from ${t} to ${i}, remounting`), lr(this._app), this._app = null, this.mountApp()), e === "title" && i && this._configStore.setUserTitle(i), e === "initial-message" && this._configStore.updateConfig({ initialMessage: i || void 0 }, "user"), e === "quick-questions"))
      if (i)
        try {
          const r = JSON.parse(i);
          Array.isArray(r) ? this._configStore.setQuickQuestions(sa.validate(r, "ChatPage")) : G.warn("ChatPage", "quick-questions must be an array, using defaults");
        } catch {
          G.warn("ChatPage", "Invalid quick-questions JSON, using defaults");
        }
      else
        this._configStore.setQuickQuestions(void 0);
  }
  sendMessage(e) {
    this._shadowRoot && e && this.dispatchEvent(new CustomEvent("send-message", {
      detail: { text: e },
      bubbles: !1,
      composed: !1
    }));
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const t = document.createElement("div");
    t.className = "chat-page-root", t.style.cssText = "width: 100%; height: 100%;";
    const i = document.createElement("style");
    i.setAttribute("data-role", "theme"), i.textContent = va(this, this._currentTheme);
    const r = document.createElement("style");
    r.textContent = ":host { display: block; width: 100%; height: 100%; box-sizing: border-box; }", this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(t), this._app = is(sc, {
      target: t,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", ho) : customElements.define("assistant-widget", ho);
customElements.get("assistant-chat-page") || customElements.define("assistant-chat-page", ff);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", po) : po();
function po() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const n = window, e = n.AIChat || n.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      G.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const t = document.createElement("assistant-widget");
    document.body.appendChild(t), G.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  ff as AssistantChatPage,
  ho as ChatWidgetElement
};
