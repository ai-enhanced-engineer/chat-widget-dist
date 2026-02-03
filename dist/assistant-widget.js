var ic = Object.defineProperty;
var Ra = (n) => {
  throw TypeError(n);
};
var sc = (n, e, t) => e in n ? ic(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => sc(n, typeof e != "symbol" ? e + "" : e, t), cr = (n, e, t) => e.has(n) || Ra("Cannot " + t);
var f = (n, e, t) => (cr(n, e, "read from private field"), t ? t.call(n) : e.get(n)), E = (n, e, t) => e.has(n) ? Ra("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), k = (n, e, t, i) => (cr(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), j = (n, e, t) => (cr(n, e, "access private method"), t);
var mo = Array.isArray, rc = Array.prototype.indexOf, Ws = Array.from, Ms = Object.keys, Rs = Object.defineProperty, fn = Object.getOwnPropertyDescriptor, vo = Object.getOwnPropertyDescriptors, ac = Object.prototype, oc = Array.prototype, Wr = Object.getPrototypeOf, La = Object.isExtensible;
function lc(n) {
  return typeof n == "function";
}
const Mi = () => {
};
function cc(n) {
  return n();
}
function wr(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function bo() {
  var n, e, t = new Promise((i, s) => {
    n = i, e = s;
  });
  return { promise: t, resolve: n, reject: e };
}
const ve = 2, Br = 4, Bs = 8, dc = 1 << 24, It = 16, Pt = 32, Qt = 64, js = 128, st = 512, _e = 1024, qe = 2048, Tt = 4096, He = 8192, $t = 16384, ts = 32768, vn = 65536, Oa = 1 << 17, wo = 1 << 18, Tn = 1 << 19, yo = 1 << 20, Vt = 1 << 25, bn = 32768, yr = 1 << 21, jr = 1 << 22, Gt = 1 << 23, gn = Symbol("$state"), _o = Symbol("legacy props"), uc = Symbol(""), Fn = new class extends Error {
  constructor() {
    super(...arguments);
    M(this, "name", "StaleReactionError");
    M(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Vr = 3, Sn = 8;
function ko(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function gc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function pc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function mc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vc() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function bc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function wc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function yc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _c() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function kc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const xc = 1, Tc = 2, Sc = 16, Ec = 1, Ac = 2, Ic = 4, Cc = 8, Mc = 16, Rc = 4, Lc = 1, Oc = 2, xo = "[", Vs = "[!", Gr = "]", wn = {}, we = Symbol(), Dc = "http://www.w3.org/1999/xhtml";
function ns(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Nc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let F = !1;
function Nt(n) {
  F = n;
}
let D;
function Oe(n) {
  if (n === null)
    throw ns(), wn;
  return D = n;
}
function pi() {
  return Oe(/* @__PURE__ */ at(D));
}
function ne(n) {
  if (F) {
    if (/* @__PURE__ */ at(D) !== null)
      throw ns(), wn;
    D = n;
  }
}
function Yr(n = 1) {
  if (F) {
    for (var e = n, t = D; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ at(t);
    D = t;
  }
}
function Ls(n = !0) {
  for (var e = 0, t = D; ; ) {
    if (t.nodeType === Sn) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === Gr) {
        if (e === 0) return t;
        e -= 1;
      } else (i === xo || i === Vs) && (e += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(t)
    );
    n && t.remove(), t = s;
  }
}
function To(n) {
  if (!n || n.nodeType !== Sn)
    throw ns(), wn;
  return (
    /** @type {Comment} */
    n.data
  );
}
function So(n) {
  return n === this.v;
}
function $c(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Eo(n) {
  return !$c(n, this.v);
}
let yi = !1;
function Pc() {
  yi = !0;
}
let Z = null;
function mi(n) {
  Z = n;
}
function Jt(n, e = !1, t) {
  Z = {
    p: Z,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: yi && !e ? { s: null, u: null, $: [] } : null
  };
}
function en(n) {
  var e = (
    /** @type {ComponentContext} */
    Z
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Go(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, Z = e.p, n ?? /** @type {T} */
  {};
}
function is() {
  return !yi || Z !== null && Z.l === null;
}
let rn = [];
function Ao() {
  var n = rn;
  rn = [], wr(n);
}
function _i(n) {
  if (rn.length === 0 && !Hi) {
    var e = rn;
    queueMicrotask(() => {
      e === rn && Ao();
    });
  }
  rn.push(n);
}
function zc() {
  for (; rn.length > 0; )
    Ao();
}
function Io(n) {
  var e = q;
  if (e === null)
    return U.f |= Gt, n;
  if (e.f & ts)
    vi(n, e);
  else {
    if (!(e.f & js))
      throw n;
    e.b.error(n);
  }
}
function vi(n, e) {
  for (; e !== null; ) {
    if (e.f & js)
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
const vs = /* @__PURE__ */ new Set();
let $ = null, Ts = null, te = null, Ye = [], Gs = null, _r = !1, Hi = !1;
var Bn, jn, an, on, Ki, Vn, Gn, me, kr, Pi, xr, Co, Mo;
const Fs = class Fs {
  constructor() {
    E(this, me);
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
    E(this, Bn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, jn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    E(this, an, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    E(this, on, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, Ki, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, Vn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, Gn, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    M(this, "skipped_effects", /* @__PURE__ */ new Set());
    M(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || f(this, on) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Ye = [], Ts = null, this.apply();
    var t = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const s of e)
      j(this, me, kr).call(this, s, t);
    this.is_fork || j(this, me, Co).call(this), this.is_deferred() ? (j(this, me, Pi).call(this, t.effects), j(this, me, Pi).call(this, t.render_effects)) : (Ts = this, $ = null, Da(t.render_effects), Da(t.effects), Ts = null, (i = f(this, Ki)) == null || i.resolve()), te = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    this.previous.has(e) || this.previous.set(e, t), e.f & Gt || (this.current.set(e, e.v), te == null || te.set(e, e.v));
  }
  activate() {
    $ = this, this.apply();
  }
  deactivate() {
    $ === this && ($ = null, te = null);
  }
  flush() {
    if (this.activate(), Ye.length > 0) {
      if (Ro(), $ !== null && $ !== this)
        return;
    } else f(this, an) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of f(this, jn)) e(this);
    f(this, jn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    k(this, an, f(this, an) + 1), e && k(this, on, f(this, on) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    k(this, an, f(this, an) - 1), e && k(this, on, f(this, on) - 1), this.revive();
  }
  revive() {
    for (const e of f(this, Vn))
      f(this, Gn).delete(e), ke(e, qe), yn(e);
    for (const e of f(this, Gn))
      ke(e, Tt), yn(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    f(this, Bn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    f(this, jn).add(e);
  }
  settled() {
    return (f(this, Ki) ?? k(this, Ki, bo())).promise;
  }
  static ensure() {
    if ($ === null) {
      const e = $ = new Fs();
      vs.add($), Hi || Fs.enqueue(() => {
        $ === e && e.flush();
      });
    }
    return $;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    _i(e);
  }
  apply() {
  }
};
Bn = new WeakMap(), jn = new WeakMap(), an = new WeakMap(), on = new WeakMap(), Ki = new WeakMap(), Vn = new WeakMap(), Gn = new WeakMap(), me = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
kr = function(e, t) {
  var u;
  e.f ^= _e;
  for (var i = e.first; i !== null; ) {
    var s = i.f, r = (s & (Pt | Qt)) !== 0, a = r && (s & _e) !== 0, o = a || (s & He) !== 0 || this.skipped_effects.has(i);
    if (i.f & js && ((u = i.b) != null && u.is_pending()) && (t = {
      parent: t,
      effect: i,
      effects: [],
      render_effects: []
    }), !o && i.fn !== null) {
      r ? i.f ^= _e : s & Br ? t.effects.push(i) : rs(i) && (i.f & It && f(this, Vn).add(i), Xi(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === t.effect && (j(this, me, Pi).call(this, t.effects), j(this, me, Pi).call(this, t.render_effects), t = /** @type {EffectTarget} */
      t.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Pi = function(e) {
  for (const t of e)
    t.f & qe ? f(this, Vn).add(t) : t.f & Tt && f(this, Gn).add(t), j(this, me, xr).call(this, t.deps), ke(t, _e);
}, /**
 * @param {Value[] | null} deps
 */
xr = function(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & ve) || !(t.f & bn) || (t.f ^= bn, j(this, me, xr).call(
        this,
        /** @type {Derived} */
        t.deps
      ));
}, Co = function() {
  if (f(this, on) === 0) {
    for (const e of f(this, Bn)) e();
    f(this, Bn).clear();
  }
  f(this, an) === 0 && j(this, me, Mo).call(this);
}, Mo = function() {
  var r;
  if (vs.size > 1) {
    this.previous.clear();
    var e = te, t = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of vs) {
      if (a === this) {
        t = !1;
        continue;
      }
      const o = [];
      for (const [c, u] of this.current) {
        if (a.current.has(c))
          if (t && u !== a.current.get(c))
            a.current.set(c, u);
          else
            continue;
        o.push(c);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var s = Ye;
        Ye = [];
        const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const h of o)
          Lo(h, l, c, u);
        if (Ye.length > 0) {
          $ = a, a.apply();
          for (const h of Ye)
            j(r = a, me, kr).call(r, h, i);
          a.deactivate();
        }
        Ye = s;
      }
    }
    $ = null, te = e;
  }
  this.committed = !0, vs.delete(this);
};
let vt = Fs;
function kt(n) {
  var e = Hi;
  Hi = !0;
  try {
    for (var t; ; ) {
      if (zc(), Ye.length === 0 && ($ == null || $.flush(), Ye.length === 0))
        return Gs = null, /** @type {T} */
        t;
      Ro();
    }
  } finally {
    Hi = e;
  }
}
function Ro() {
  var n = pn;
  _r = !0;
  var e = null;
  try {
    var t = 0;
    for (Ds(!0); Ye.length > 0; ) {
      var i = vt.ensure();
      if (t++ > 1e3) {
        var s, r;
        Uc();
      }
      i.process(Ye), Yt.clear();
    }
  } finally {
    _r = !1, Ds(n), Gs = null;
  }
}
function Uc() {
  try {
    mc();
  } catch (n) {
    vi(n, Gs);
  }
}
let Je = null;
function Da(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & ($t | He)) && rs(i) && (Je = /* @__PURE__ */ new Set(), Xi(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Ko(i) : i.fn = null), (Je == null ? void 0 : Je.size) > 0)) {
        Yt.clear();
        for (const s of Je) {
          if (s.f & ($t | He)) continue;
          const r = [s];
          let a = s.parent;
          for (; a !== null; )
            Je.has(a) && (Je.delete(a), r.push(a)), a = a.parent;
          for (let o = r.length - 1; o >= 0; o--) {
            const l = r[o];
            l.f & ($t | He) || Xi(l);
          }
        }
        Je.clear();
      }
    }
    Je = null;
  }
}
function Lo(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const s of n.reactions) {
      const r = s.f;
      r & ve ? Lo(
        /** @type {Derived} */
        s,
        e,
        t,
        i
      ) : r & (jr | It) && !(r & qe) && Oo(s, e, i) && (ke(s, qe), yn(
        /** @type {Effect} */
        s
      ));
    }
}
function Oo(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const s of n.deps) {
      if (e.includes(s))
        return !0;
      if (s.f & ve && Oo(
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
function yn(n) {
  for (var e = Gs = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (_r && e === q && t & It && !(t & wo))
      return;
    if (t & (Qt | Pt)) {
      if (!(t & _e)) return;
      e.f ^= _e;
    }
  }
  Ye.push(e);
}
function Fc(n) {
  let e = 0, t = _n(0), i;
  return () => {
    Gi() && (_(t), Ys(() => (e === 0 && (i = tn(() => n(() => qi(t)))), e += 1, () => {
      _i(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, qi(t));
      });
    })));
  };
}
var Hc = vn | Tn | js;
function qc(n, e, t) {
  new Wc(n, e, t);
}
var je, Ne, Qi, gt, ln, ht, Ve, Re, pt, Lt, Wt, cn, Bt, dn, jt, Hs, se, Do, No, Tr, Ss, Es, Sr;
class Wc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, i) {
    E(this, se);
    /** @type {Boundary | null} */
    M(this, "parent");
    E(this, je, !1);
    /** @type {TemplateNode} */
    E(this, Ne);
    /** @type {TemplateNode | null} */
    E(this, Qi, F ? D : null);
    /** @type {BoundaryProps} */
    E(this, gt);
    /** @type {((anchor: Node) => void)} */
    E(this, ln);
    /** @type {Effect} */
    E(this, ht);
    /** @type {Effect | null} */
    E(this, Ve, null);
    /** @type {Effect | null} */
    E(this, Re, null);
    /** @type {Effect | null} */
    E(this, pt, null);
    /** @type {DocumentFragment | null} */
    E(this, Lt, null);
    /** @type {TemplateNode | null} */
    E(this, Wt, null);
    E(this, cn, 0);
    E(this, Bt, 0);
    E(this, dn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, jt, null);
    E(this, Hs, Fc(() => (k(this, jt, _n(f(this, cn))), () => {
      k(this, jt, null);
    })));
    k(this, Ne, e), k(this, gt, t), k(this, ln, i), this.parent = /** @type {Effect} */
    q.b, k(this, je, !!f(this, gt).pending), k(this, ht, Jr(() => {
      if (q.b = this, F) {
        const r = f(this, Qi);
        pi(), /** @type {Comment} */
        r.nodeType === Sn && /** @type {Comment} */
        r.data === Vs ? j(this, se, No).call(this) : j(this, se, Do).call(this);
      } else {
        var s = j(this, se, Tr).call(this);
        try {
          k(this, Ve, Xe(() => i(s)));
        } catch (r) {
          this.error(r);
        }
        f(this, Bt) > 0 ? j(this, se, Es).call(this) : k(this, je, !1);
      }
      return () => {
        var r;
        (r = f(this, Wt)) == null || r.remove();
      };
    }, Hc)), F && k(this, Ne, D);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, je) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, gt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    j(this, se, Sr).call(this, e), k(this, cn, f(this, cn) + e), f(this, jt) && bi(f(this, jt), f(this, cn));
  }
  get_effect_pending() {
    return f(this, Hs).call(this), _(
      /** @type {Source<number>} */
      f(this, jt)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = f(this, gt).onerror;
    let i = f(this, gt).failed;
    if (f(this, dn) || !t && !i)
      throw e;
    f(this, Ve) && (Ee(f(this, Ve)), k(this, Ve, null)), f(this, Re) && (Ee(f(this, Re)), k(this, Re, null)), f(this, pt) && (Ee(f(this, pt)), k(this, pt, null)), F && (Oe(
      /** @type {TemplateNode} */
      f(this, Qi)
    ), Yr(), Oe(Ls()));
    var s = !1, r = !1;
    const a = () => {
      if (s) {
        Nc();
        return;
      }
      s = !0, r && kc(), vt.ensure(), k(this, cn, 0), f(this, pt) !== null && hn(f(this, pt), () => {
        k(this, pt, null);
      }), k(this, je, this.has_pending_snippet()), k(this, Ve, j(this, se, Ss).call(this, () => (k(this, dn, !1), Xe(() => f(this, ln).call(this, f(this, Ne)))))), f(this, Bt) > 0 ? j(this, se, Es).call(this) : k(this, je, !1);
    };
    var o = U;
    try {
      Le(null), r = !0, t == null || t(e, a), r = !1;
    } catch (l) {
      vi(l, f(this, ht) && f(this, ht).parent);
    } finally {
      Le(o);
    }
    i && _i(() => {
      k(this, pt, j(this, se, Ss).call(this, () => {
        vt.ensure(), k(this, dn, !0);
        try {
          return Xe(() => {
            i(
              f(this, Ne),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return vi(
            l,
            /** @type {Effect} */
            f(this, ht).parent
          ), null;
        } finally {
          k(this, dn, !1);
        }
      }));
    });
  }
}
je = new WeakMap(), Ne = new WeakMap(), Qi = new WeakMap(), gt = new WeakMap(), ln = new WeakMap(), ht = new WeakMap(), Ve = new WeakMap(), Re = new WeakMap(), pt = new WeakMap(), Lt = new WeakMap(), Wt = new WeakMap(), cn = new WeakMap(), Bt = new WeakMap(), dn = new WeakMap(), jt = new WeakMap(), Hs = new WeakMap(), se = new WeakSet(), Do = function() {
  try {
    k(this, Ve, Xe(() => f(this, ln).call(this, f(this, Ne))));
  } catch (e) {
    this.error(e);
  }
  k(this, je, !1);
}, No = function() {
  const e = f(this, gt).pending;
  e && (k(this, Re, Xe(() => e(f(this, Ne)))), vt.enqueue(() => {
    var t = j(this, se, Tr).call(this);
    k(this, Ve, j(this, se, Ss).call(this, () => (vt.ensure(), Xe(() => f(this, ln).call(this, t))))), f(this, Bt) > 0 ? j(this, se, Es).call(this) : (hn(
      /** @type {Effect} */
      f(this, Re),
      () => {
        k(this, Re, null);
      }
    ), k(this, je, !1));
  }));
}, Tr = function() {
  var e = f(this, Ne);
  return f(this, je) && (k(this, Wt, rt()), f(this, Ne).before(f(this, Wt)), e = f(this, Wt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Ss = function(e) {
  var t = q, i = U, s = Z;
  Et(f(this, ht)), Le(f(this, ht)), mi(f(this, ht).ctx);
  try {
    return e();
  } catch (r) {
    return Io(r), null;
  } finally {
    Et(t), Le(i), mi(s);
  }
}, Es = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, gt).pending
  );
  f(this, Ve) !== null && (k(this, Lt, document.createDocumentFragment()), f(this, Lt).append(
    /** @type {TemplateNode} */
    f(this, Wt)
  ), el(f(this, Ve), f(this, Lt))), f(this, Re) === null && k(this, Re, Xe(() => e(f(this, Ne))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Sr = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && j(t = this.parent, se, Sr).call(t, e);
    return;
  }
  k(this, Bt, f(this, Bt) + e), f(this, Bt) === 0 && (k(this, je, !1), f(this, Re) && hn(f(this, Re), () => {
    k(this, Re, null);
  }), f(this, Lt) && (f(this, Ne).before(f(this, Lt)), k(this, Lt, null)));
};
function Bc(n, e, t, i) {
  const s = is() ? ss : Xr;
  if (t.length === 0 && n.length === 0) {
    i(e.map(s));
    return;
  }
  var r = $, a = (
    /** @type {Effect} */
    q
  ), o = jc();
  function l() {
    Promise.all(t.map((c) => /* @__PURE__ */ Vc(c))).then((c) => {
      o();
      try {
        i([...e.map(s), ...c]);
      } catch (u) {
        a.f & $t || vi(u, a);
      }
      r == null || r.deactivate(), Os();
    }).catch((c) => {
      vi(c, a);
    });
  }
  n.length > 0 ? Promise.all(n).then(() => {
    o();
    try {
      return l();
    } finally {
      r == null || r.deactivate(), Os();
    }
  }) : l();
}
function jc() {
  var n = q, e = U, t = Z, i = $;
  return function(r = !0) {
    Et(n), Le(e), mi(t), r && (i == null || i.activate());
  };
}
function Os() {
  Et(null), Le(null), mi(null);
}
// @__NO_SIDE_EFFECTS__
function ss(n) {
  var e = ve | qe, t = U !== null && U.f & ve ? (
    /** @type {Derived} */
    U
  ) : null;
  return q !== null && (q.f |= Tn), {
    ctx: Z,
    deps: null,
    effects: null,
    equals: So,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      we
    ),
    wv: 0,
    parent: t ?? q,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Vc(n, e) {
  let t = (
    /** @type {Effect | null} */
    q
  );
  t === null && fc();
  var i = (
    /** @type {Boundary} */
    t.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), r = _n(
    /** @type {V} */
    we
  ), a = !U, o = /* @__PURE__ */ new Map();
  return nd(() => {
    var g;
    var l = bo();
    s = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(() => {
        c === $ && c.committed && c.deactivate(), Os();
      });
    } catch (p) {
      l.reject(p), Os();
    }
    var c = (
      /** @type {Batch} */
      $
    );
    if (a) {
      var u = !i.is_pending();
      i.update_pending_count(1), c.increment(u), (g = o.get(c)) == null || g.reject(Fn), o.delete(c), o.set(c, l);
    }
    const h = (p, m = void 0) => {
      if (c.activate(), m)
        m !== Fn && (r.f |= Gt, bi(r, m));
      else {
        r.f & Gt && (r.f ^= Gt), bi(r, p);
        for (const [w, b] of o) {
          if (o.delete(w), w === c) break;
          b.reject(Fn);
        }
      }
      a && (i.update_pending_count(-1), c.decrement(u));
    };
    l.promise.then(h, (p) => h(null, p || "unknown"));
  }), Vo(() => {
    for (const l of o.values())
      l.reject(Fn);
  }), new Promise((l) => {
    function c(u) {
      function h() {
        u === s ? l(r) : c(s);
      }
      u.then(h, h);
    }
    c(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ue(n) {
  const e = /* @__PURE__ */ ss(n);
  return tl(e), e;
}
// @__NO_SIDE_EFFECTS__
function Xr(n) {
  const e = /* @__PURE__ */ ss(n);
  return e.equals = Eo, e;
}
function $o(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Ee(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Gc(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & ve))
      return e.f & $t ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Zr(n) {
  var e, t = q;
  Et(Gc(n));
  try {
    n.f &= ~bn, $o(n), e = rl(n);
  } finally {
    Et(t);
  }
  return e;
}
function Po(n) {
  var e = Zr(n);
  if (n.equals(e) || ($ != null && $.is_fork || (n.v = e), n.wv = il()), !En)
    if (te !== null)
      (Gi() || $ != null && $.is_fork) && te.set(n, e);
    else {
      var t = n.f & st ? _e : Tt;
      ke(n, t);
    }
}
let Er = /* @__PURE__ */ new Set();
const Yt = /* @__PURE__ */ new Map();
let zo = !1;
function _n(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: So,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function z(n, e) {
  const t = _n(n);
  return tl(t), t;
}
// @__NO_SIDE_EFFECTS__
function Uo(n, e = !1, t = !0) {
  var s;
  const i = _n(n);
  return e || (i.equals = Eo), yi && t && Z !== null && Z.l !== null && ((s = Z.l).s ?? (s.s = [])).push(i), i;
}
function L(n, e, t = !1) {
  U !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!bt || U.f & Oa) && is() && U.f & (ve | It | jr | Oa) && !(Ae != null && Ae.includes(n)) && _c();
  let i = t ? he(e) : e;
  return bi(n, i);
}
function bi(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    En ? Yt.set(n, e) : Yt.set(n, t), n.v = e;
    var i = vt.ensure();
    i.capture(n, t), n.f & ve && (n.f & qe && Zr(
      /** @type {Derived} */
      n
    ), ke(n, n.f & st ? _e : Tt)), n.wv = il(), Fo(n, qe), is() && q !== null && q.f & _e && !(q.f & (Pt | Qt)) && (Be === null ? sd([n]) : Be.push(n)), !i.is_fork && Er.size > 0 && !zo && Yc();
  }
  return e;
}
function Yc() {
  zo = !1;
  var n = pn;
  Ds(!0);
  const e = Array.from(Er);
  try {
    for (const t of e)
      t.f & _e && ke(t, Tt), rs(t) && Xi(t);
  } finally {
    Ds(n);
  }
  Er.clear();
}
function qi(n) {
  L(n, n.v + 1);
}
function Fo(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = is(), s = t.length, r = 0; r < s; r++) {
      var a = t[r], o = a.f;
      if (!(!i && a === q)) {
        var l = (o & qe) === 0;
        if (l && ke(a, e), o & ve) {
          var c = (
            /** @type {Derived} */
            a
          );
          te == null || te.delete(c), o & bn || (o & st && (a.f |= bn), Fo(c, Tt));
        } else l && (o & It && Je !== null && Je.add(
          /** @type {Effect} */
          a
        ), yn(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function he(n) {
  if (typeof n != "object" || n === null || gn in n)
    return n;
  const e = Wr(n);
  if (e !== ac && e !== oc)
    return n;
  var t = /* @__PURE__ */ new Map(), i = mo(n), s = /* @__PURE__ */ z(0), r = mn, a = (o) => {
    if (mn === r)
      return o();
    var l = U, c = mn;
    Le(null), za(r);
    var u = o();
    return Le(l), za(c), u;
  };
  return i && t.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && wc();
        var u = t.get(l);
        return u === void 0 ? u = a(() => {
          var h = /* @__PURE__ */ z(c.value);
          return t.set(l, h), h;
        }) : L(u, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ z(we));
            t.set(l, u), qi(s);
          }
        } else
          L(c, we), qi(s);
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === gn)
          return n;
        var u = t.get(l), h = l in o;
        if (u === void 0 && (!h || (p = fn(o, l)) != null && p.writable) && (u = a(() => {
          var m = he(h ? o[l] : we), w = /* @__PURE__ */ z(m);
          return w;
        }), t.set(l, u)), u !== void 0) {
          var g = _(u);
          return g === we ? void 0 : g;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var u = t.get(l);
          u && (c.value = _(u));
        } else if (c === void 0) {
          var h = t.get(l), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== we)
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
        if (l === gn)
          return !0;
        var c = t.get(l), u = c !== void 0 && c.v !== we || Reflect.has(o, l);
        if (c !== void 0 || q !== null && (!u || (g = fn(o, l)) != null && g.writable)) {
          c === void 0 && (c = a(() => {
            var p = u ? he(o[l]) : we, m = /* @__PURE__ */ z(p);
            return m;
          }), t.set(l, c));
          var h = _(c);
          if (h === we)
            return !1;
        }
        return u;
      },
      set(o, l, c, u) {
        var I;
        var h = t.get(l), g = l in o;
        if (i && l === "length")
          for (var p = c; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var m = t.get(p + "");
            m !== void 0 ? L(m, we) : p in o && (m = a(() => /* @__PURE__ */ z(we)), t.set(p + "", m));
          }
        if (h === void 0)
          (!g || (I = fn(o, l)) != null && I.writable) && (h = a(() => /* @__PURE__ */ z(void 0)), L(h, he(c)), t.set(l, h));
        else {
          g = h.v !== we;
          var w = a(() => he(c));
          L(h, w);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, l);
        if (b != null && b.set && b.set.call(u, c), !g) {
          if (i && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              t.get("length")
            ), H = Number(l);
            Number.isInteger(H) && H >= x.v && L(x, H + 1);
          }
          qi(s);
        }
        return !0;
      },
      ownKeys(o) {
        _(s);
        var l = Reflect.ownKeys(o).filter((h) => {
          var g = t.get(h);
          return g === void 0 || g.v !== we;
        });
        for (var [c, u] of t)
          u.v !== we && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        yc();
      }
    }
  );
}
var Na, Ho, qo, Wo;
function Ar() {
  if (Na === void 0) {
    Na = window, Ho = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    qo = fn(e, "firstChild").get, Wo = fn(e, "nextSibling").get, La(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), La(t) && (t.__t = void 0);
  }
}
function rt(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Fe(n) {
  return (
    /** @type {TemplateNode | null} */
    qo.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function at(n) {
  return (
    /** @type {TemplateNode | null} */
    Wo.call(n)
  );
}
function ie(n, e) {
  if (!F)
    return /* @__PURE__ */ Fe(n);
  var t = /* @__PURE__ */ Fe(D);
  if (t === null)
    t = D.appendChild(rt());
  else if (e && t.nodeType !== Vr) {
    var i = rt();
    return t == null || t.before(i), Oe(i), i;
  }
  return Oe(t), t;
}
function As(n, e = !1) {
  if (!F) {
    var t = /* @__PURE__ */ Fe(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ at(t) : t;
  }
  if (e && (D == null ? void 0 : D.nodeType) !== Vr) {
    var i = rt();
    return D == null || D.before(i), Oe(i), i;
  }
  return D;
}
function de(n, e = 1, t = !1) {
  let i = F ? D : n;
  for (var s; e--; )
    s = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ at(i);
  if (!F)
    return i;
  if (t && (i == null ? void 0 : i.nodeType) !== Vr) {
    var r = rt();
    return i === null ? s == null || s.after(r) : i.before(r), Oe(r), r;
  }
  return Oe(i), i;
}
function Kr(n) {
  n.textContent = "";
}
function Bo() {
  return !1;
}
function Xc(n) {
  F && /* @__PURE__ */ Fe(n) !== null && Kr(n);
}
let $a = !1;
function Zc() {
  $a || ($a = !0, document.addEventListener(
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
function ki(n) {
  var e = U, t = q;
  Le(null), Et(null);
  try {
    return n();
  } finally {
    Le(e), Et(t);
  }
}
function Kc(n, e, t, i = t) {
  n.addEventListener(e, () => ki(t));
  const s = n.__on_r;
  s ? n.__on_r = () => {
    s(), i(!0);
  } : n.__on_r = () => i(!0), Zc();
}
function jo(n) {
  q === null && (U === null && pc(), hc()), En && gc();
}
function Qc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function ot(n, e, t) {
  var i = q;
  i !== null && i.f & He && (n |= He);
  var s = {
    ctx: Z,
    deps: null,
    nodes: null,
    f: n | qe | st,
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
      Xi(s), s.f |= ts;
    } catch (o) {
      throw Ee(s), o;
    }
  else e !== null && yn(s);
  var r = s;
  if (t && r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
  !(r.f & Tn) && (r = r.first, n & It && n & vn && r !== null && (r.f |= vn)), r !== null && (r.parent = i, i !== null && Qc(r, i), U !== null && U.f & ve && !(n & Qt))) {
    var a = (
      /** @type {Derived} */
      U
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return s;
}
function Gi() {
  return U !== null && !bt;
}
function Vo(n) {
  const e = ot(Bs, null, !1);
  return ke(e, _e), e.teardown = n, e;
}
function Xt(n) {
  jo();
  var e = (
    /** @type {Effect} */
    q.f
  ), t = !U && (e & Pt) !== 0 && (e & ts) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      Z
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Go(n);
}
function Go(n) {
  return ot(Br | yo, n, !1);
}
function Jc(n) {
  return jo(), ot(Bs | yo, n, !0);
}
function ed(n) {
  vt.ensure();
  const e = ot(Qt | Tn, n, !0);
  return () => {
    Ee(e);
  };
}
function td(n) {
  vt.ensure();
  const e = ot(Qt | Tn, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? hn(e, () => {
      Ee(e), i(void 0);
    }) : (Ee(e), i(void 0));
  });
}
function Qr(n) {
  return ot(Br, n, !1);
}
function nd(n) {
  return ot(jr | Tn, n, !0);
}
function Ys(n, e = 0) {
  return ot(Bs | e, n, !0);
}
function St(n, e = [], t = [], i = []) {
  Bc(i, e, t, (s) => {
    ot(Bs, () => n(...s.map(_)), !0);
  });
}
function Jr(n, e = 0) {
  var t = ot(It | e, n, !0);
  return t;
}
function Xe(n) {
  return ot(Pt | Tn, n, !0);
}
function Yo(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = En, i = U;
    Pa(!0), Le(null);
    try {
      e.call(null);
    } finally {
      Pa(t), Le(i);
    }
  }
}
function Xo(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const s = t.ac;
    s !== null && ki(() => {
      s.abort(Fn);
    });
    var i = t.next;
    t.f & Qt ? t.parent = null : Ee(t, e), t = i;
  }
}
function id(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & Pt || Ee(e), e = t;
  }
}
function Ee(n, e = !0) {
  var t = !1;
  (e || n.f & wo) && n.nodes !== null && n.nodes.end !== null && (Zo(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), Xo(n, e && !t), Ns(n, 0), ke(n, $t);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const r of i)
      r.stop();
  Yo(n);
  var s = n.parent;
  s !== null && s.first !== null && Ko(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function Zo(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ at(n);
    n.remove(), n = t;
  }
}
function Ko(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function hn(n, e, t = !0) {
  var i = [];
  Qo(n, i, !0);
  var s = () => {
    t && Ee(n), e && e();
  }, r = i.length;
  if (r > 0) {
    var a = () => --r || s();
    for (var o of i)
      o.out(a);
  } else
    s();
}
function Qo(n, e, t) {
  if (!(n.f & He)) {
    n.f ^= He;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && e.push(o);
    for (var s = n.first; s !== null; ) {
      var r = s.next, a = (s.f & vn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Pt) !== 0 && (n.f & It) !== 0;
      Qo(s, e, a ? t : !1), s = r;
    }
  }
}
function ea(n) {
  Jo(n, !0);
}
function Jo(n, e) {
  if (n.f & He) {
    n.f ^= He, n.f & _e || (ke(n, qe), yn(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, s = (t.f & vn) !== 0 || (t.f & Pt) !== 0;
      Jo(t, s ? e : !1), t = i;
    }
    var r = n.nodes && n.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || e) && a.in();
  }
}
function el(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var s = t === i ? null : /* @__PURE__ */ at(t);
      e.append(t), t = s;
    }
}
let pn = !1;
function Ds(n) {
  pn = n;
}
let En = !1;
function Pa(n) {
  En = n;
}
let U = null, bt = !1;
function Le(n) {
  U = n;
}
let q = null;
function Et(n) {
  q = n;
}
let Ae = null;
function tl(n) {
  U !== null && (Ae === null ? Ae = [n] : Ae.push(n));
}
let Se = null, De = 0, Be = null;
function sd(n) {
  Be = n;
}
let nl = 1, Yi = 0, mn = Yi;
function za(n) {
  mn = n;
}
function il() {
  return ++nl;
}
function rs(n) {
  var e = n.f;
  if (e & qe)
    return !0;
  if (e & ve && (n.f &= ~bn), e & Tt) {
    var t = n.deps;
    if (t !== null)
      for (var i = t.length, s = 0; s < i; s++) {
        var r = t[s];
        if (rs(
          /** @type {Derived} */
          r
        ) && Po(
          /** @type {Derived} */
          r
        ), r.wv > n.wv)
          return !0;
      }
    e & st && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    te === null && ke(n, _e);
  }
  return !1;
}
function sl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(Ae != null && Ae.includes(n)))
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      r.f & ve ? sl(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (t ? ke(r, qe) : r.f & _e && ke(r, Tt), yn(
        /** @type {Effect} */
        r
      ));
    }
}
function rl(n) {
  var m;
  var e = Se, t = De, i = Be, s = U, r = Ae, a = Z, o = bt, l = mn, c = n.f;
  Se = /** @type {null | Value[]} */
  null, De = 0, Be = null, U = c & (Pt | Qt) ? null : n, Ae = null, mi(n.ctx), bt = !1, mn = ++Yi, n.ac !== null && (ki(() => {
    n.ac.abort(Fn);
  }), n.ac = null);
  try {
    n.f |= yr;
    var u = (
      /** @type {Function} */
      n.fn
    ), h = u(), g = n.deps;
    if (Se !== null) {
      var p;
      if (Ns(n, De), g !== null && De > 0)
        for (g.length = De + Se.length, p = 0; p < Se.length; p++)
          g[De + p] = Se[p];
      else
        n.deps = g = Se;
      if (Gi() && n.f & st)
        for (p = De; p < g.length; p++)
          ((m = g[p]).reactions ?? (m.reactions = [])).push(n);
    } else g !== null && De < g.length && (Ns(n, De), g.length = De);
    if (is() && Be !== null && !bt && g !== null && !(n.f & (ve | Tt | qe)))
      for (p = 0; p < /** @type {Source[]} */
      Be.length; p++)
        sl(
          Be[p],
          /** @type {Effect} */
          n
        );
    return s !== null && s !== n && (Yi++, Be !== null && (i === null ? i = Be : i.push(.../** @type {Source[]} */
    Be))), n.f & Gt && (n.f ^= Gt), h;
  } catch (w) {
    return Io(w);
  } finally {
    n.f ^= yr, Se = e, De = t, Be = i, U = s, Ae = r, mi(a), bt = o, mn = l;
  }
}
function rd(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = rc.call(t, n);
    if (i !== -1) {
      var s = t.length - 1;
      s === 0 ? t = e.reactions = null : (t[i] = t[s], t.pop());
    }
  }
  t === null && e.f & ve && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Se === null || !Se.includes(e)) && (ke(e, Tt), e.f & st && (e.f ^= st, e.f &= ~bn), $o(
    /** @type {Derived} **/
    e
  ), Ns(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ns(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      rd(n, t[i]);
}
function Xi(n) {
  var e = n.f;
  if (!(e & $t)) {
    ke(n, _e);
    var t = q, i = pn;
    q = n, pn = !0;
    try {
      e & (It | dc) ? id(n) : Xo(n), Yo(n);
      var s = rl(n);
      n.teardown = typeof s == "function" ? s : null, n.wv = nl;
      var r;
    } finally {
      pn = i, q = t;
    }
  }
}
async function al() {
  await Promise.resolve(), kt();
}
function _(n) {
  var e = n.f, t = (e & ve) !== 0;
  if (U !== null && !bt) {
    var i = q !== null && (q.f & $t) !== 0;
    if (!i && !(Ae != null && Ae.includes(n))) {
      var s = U.deps;
      if (U.f & yr)
        n.rv < Yi && (n.rv = Yi, Se === null && s !== null && s[De] === n ? De++ : Se === null ? Se = [n] : Se.includes(n) || Se.push(n));
      else {
        (U.deps ?? (U.deps = [])).push(n);
        var r = n.reactions;
        r === null ? n.reactions = [U] : r.includes(U) || r.push(U);
      }
    }
  }
  if (En) {
    if (Yt.has(n))
      return Yt.get(n);
    if (t) {
      var a = (
        /** @type {Derived} */
        n
      ), o = a.v;
      return (!(a.f & _e) && a.reactions !== null || ll(a)) && (o = Zr(a)), Yt.set(a, o), o;
    }
  } else t && (!(te != null && te.has(n)) || $ != null && $.is_fork && !Gi()) && (a = /** @type {Derived} */
  n, rs(a) && Po(a), pn && Gi() && !(a.f & st) && ol(a));
  if (te != null && te.has(n))
    return te.get(n);
  if (n.f & Gt)
    throw n.v;
  return n.v;
}
function ol(n) {
  if (n.deps !== null) {
    n.f ^= st;
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & ve && !(e.f & st) && ol(
        /** @type {Derived} */
        e
      );
  }
}
function ll(n) {
  if (n.v === we) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Yt.has(e) || e.f & ve && ll(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function tn(n) {
  var e = bt;
  try {
    return bt = !0, n();
  } finally {
    bt = e;
  }
}
const ad = -7169;
function ke(n, e) {
  n.f = n.f & ad | e;
}
function od(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (gn in n)
      Ir(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && gn in t && Ir(t);
      }
  }
}
function Ir(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let i in n)
      try {
        Ir(n[i], e);
      } catch {
      }
    const t = Wr(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = vo(t);
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
const ld = ["touchstart", "touchmove"];
function cd(n) {
  return ld.includes(n);
}
const cl = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function dd(n, e, t, i = {}) {
  function s(r) {
    if (i.capture || zi.call(e, r), !r.cancelBubble)
      return ki(() => t == null ? void 0 : t.call(this, r));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? _i(() => {
    e.addEventListener(n, s, i);
  }) : e.addEventListener(n, s, i), s;
}
function ud(n, e, t, i, s) {
  var r = { capture: i, passive: s }, a = dd(n, e, t, r);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Vo(() => {
    e.removeEventListener(n, a, r);
  });
}
function Xs(n) {
  for (var e = 0; e < n.length; e++)
    cl.add(n[e]);
  for (var t of Cr)
    t(n);
}
let Ua = null;
function zi(n) {
  var b;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, s = ((b = n.composedPath) == null ? void 0 : b.call(n)) || [], r = (
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
    Rs(n, "currentTarget", {
      configurable: !0,
      get() {
        return r || t;
      }
    });
    var u = U, h = q;
    Le(null), Et(null);
    try {
      for (var g, p = []; r !== null; ) {
        var m = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var w = r["__" + i];
          w != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === r) && w.call(r, n);
        } catch (x) {
          g ? p.push(x) : g = x;
        }
        if (n.cancelBubble || m === e || m === null)
          break;
        r = m;
      }
      if (g) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw g;
      }
    } finally {
      n.__root = e, delete n.currentTarget, Le(u), Et(h);
    }
  }
}
function ta(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function xt(n, e) {
  var t = (
    /** @type {Effect} */
    q
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Q(n, e) {
  var t = (e & Lc) !== 0, i = (e & Oc) !== 0, s, r = !n.startsWith("<!>");
  return () => {
    if (F)
      return xt(D, null), D;
    s === void 0 && (s = ta(r ? n : "<!>" + n), t || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Fe(s)));
    var a = (
      /** @type {TemplateNode} */
      i || Ho ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      xt(o, l);
    } else
      xt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function fd(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), s = `<${t}>${i ? n : "<!>" + n}</${t}>`, r;
  return () => {
    if (F)
      return xt(D, null), D;
    if (!r) {
      var a = (
        /** @type {DocumentFragment} */
        ta(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Fe(a)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ Fe(o);
    }
    var l = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return xt(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function gd(n, e) {
  return /* @__PURE__ */ fd(n, e, "svg");
}
function hd() {
  if (F)
    return xt(D, null), D;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = rt();
  return n.append(e, t), xt(e, t), n;
}
function Y(n, e) {
  if (F) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      q
    );
    (!(t.f & ts) || t.nodes.end === null) && (t.nodes.end = D), pi();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let Mr = !0;
function $s(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function na(n, e) {
  return dl(n, e);
}
function pd(n, e) {
  Ar(), e.intro = e.intro ?? !1;
  const t = e.target, i = F, s = D;
  try {
    for (var r = /* @__PURE__ */ Fe(t); r && (r.nodeType !== Sn || /** @type {Comment} */
    r.data !== xo); )
      r = /* @__PURE__ */ at(r);
    if (!r)
      throw wn;
    Nt(!0), Oe(
      /** @type {Comment} */
      r
    );
    const a = dl(n, { ...e, anchor: r });
    return Nt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== wn && console.warn("Failed to hydrate: ", a), e.recover === !1 && vc(), Ar(), Kr(t), Nt(!1), na(n, e);
  } finally {
    Nt(i), Oe(s);
  }
}
const Un = /* @__PURE__ */ new Map();
function dl(n, { target: e, anchor: t, props: i = {}, events: s, context: r, intro: a = !0 }) {
  Ar();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!o.has(p)) {
        o.add(p);
        var m = cd(p);
        e.addEventListener(p, zi, { passive: m });
        var w = Un.get(p);
        w === void 0 ? (document.addEventListener(p, zi, { passive: m }), Un.set(p, 1)) : Un.set(p, w + 1);
      }
    }
  };
  l(Ws(cl)), Cr.add(l);
  var c = void 0, u = td(() => {
    var h = t ?? e.appendChild(rt());
    return qc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (g) => {
        if (r) {
          Jt({});
          var p = (
            /** @type {ComponentContext} */
            Z
          );
          p.c = r;
        }
        if (s && (i.$$events = s), F && xt(
          /** @type {TemplateNode} */
          g,
          null
        ), Mr = a, c = n(g, i) || {}, Mr = !0, F && (q.nodes.end = D, D === null || D.nodeType !== Sn || /** @type {Comment} */
        D.data !== Gr))
          throw ns(), wn;
        r && en();
      }
    ), () => {
      var m;
      for (var g of o) {
        e.removeEventListener(g, zi);
        var p = (
          /** @type {number} */
          Un.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, zi), Un.delete(g)) : Un.set(g, p);
      }
      Cr.delete(l), h !== t && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return Rr.set(c, u), c;
}
let Rr = /* @__PURE__ */ new WeakMap();
function Lr(n, e) {
  const t = Rr.get(n);
  return t ? (Rr.delete(n), t(e)) : Promise.resolve();
}
var nt, mt, $e, un, Ji, es, qs;
class md {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    M(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, nt, /* @__PURE__ */ new Map());
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
    E(this, mt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, $e, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, un, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Ji, !0);
    E(this, es, () => {
      var e = (
        /** @type {Batch} */
        $
      );
      if (f(this, nt).has(e)) {
        var t = (
          /** @type {Key} */
          f(this, nt).get(e)
        ), i = f(this, mt).get(t);
        if (i)
          ea(i), f(this, un).delete(t);
        else {
          var s = f(this, $e).get(t);
          s && (f(this, mt).set(t, s.effect), f(this, $e).delete(t), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), i = s.effect);
        }
        for (const [r, a] of f(this, nt)) {
          if (f(this, nt).delete(r), r === e)
            break;
          const o = f(this, $e).get(a);
          o && (Ee(o.effect), f(this, $e).delete(a));
        }
        for (const [r, a] of f(this, mt)) {
          if (r === t || f(this, un).has(r)) continue;
          const o = () => {
            if (Array.from(f(this, nt).values()).includes(r)) {
              var c = document.createDocumentFragment();
              el(a, c), c.append(rt()), f(this, $e).set(r, { effect: a, fragment: c });
            } else
              Ee(a);
            f(this, un).delete(r), f(this, mt).delete(r);
          };
          f(this, Ji) || !i ? (f(this, un).add(r), hn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, qs, (e) => {
      f(this, nt).delete(e);
      const t = Array.from(f(this, nt).values());
      for (const [i, s] of f(this, $e))
        t.includes(i) || (Ee(s.effect), f(this, $e).delete(i));
    });
    this.anchor = e, k(this, Ji, t);
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
    ), s = Bo();
    if (t && !f(this, mt).has(e) && !f(this, $e).has(e))
      if (s) {
        var r = document.createDocumentFragment(), a = rt();
        r.append(a), f(this, $e).set(e, {
          effect: Xe(() => t(a)),
          fragment: r
        });
      } else
        f(this, mt).set(
          e,
          Xe(() => t(this.anchor))
        );
    if (f(this, nt).set(i, e), s) {
      for (const [o, l] of f(this, mt))
        o === e ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [o, l] of f(this, $e))
        o === e ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, es)), i.ondiscard(f(this, qs));
    } else
      F && (this.anchor = D), f(this, es).call(this);
  }
}
nt = new WeakMap(), mt = new WeakMap(), $e = new WeakMap(), un = new WeakMap(), Ji = new WeakMap(), es = new WeakMap(), qs = new WeakMap();
function ze(n, e, t = !1) {
  F && pi();
  var i = new md(n), s = t ? vn : 0;
  function r(a, o) {
    if (F) {
      const c = To(n) === Vs;
      if (a === c) {
        var l = Ls();
        Oe(l), i.anchor = l, Nt(!1), i.ensure(a, o), Nt(!0);
        return;
      }
    }
    i.ensure(a, o);
  }
  Jr(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, r(l, o);
    }), a || r(!1, null);
  }, s);
}
function vd(n, e, t) {
  for (var i = [], s = e.length, r, a = e.length, o = 0; o < s; o++) {
    let h = e[o];
    hn(
      h,
      () => {
        if (r) {
          if (r.pending.delete(h), r.done.add(h), r.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Or(Ws(r.done)), g.delete(r), g.size === 0 && (n.outrogroups = null);
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
      ), u = (
        /** @type {Element} */
        c.parentNode
      );
      Kr(u), u.append(c), n.items.clear();
    }
    Or(e, !l);
  } else
    r = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(r);
}
function Or(n, e = !0) {
  for (var t = 0; t < n.length; t++)
    Ee(n[t], e);
}
var Fa;
function bd(n, e, t, i, s, r = null) {
  var a = n, o = /* @__PURE__ */ new Map();
  F && pi();
  var l = null, c = /* @__PURE__ */ Xr(() => {
    var w = t();
    return mo(w) ? w : w == null ? [] : Ws(w);
  }), u, h = !0;
  function g() {
    m.fallback = l, wd(m, u, a, e, i), l !== null && (u.length === 0 ? l.f & Vt ? (l.f ^= Vt, Ui(l, null, a)) : ea(l) : hn(l, () => {
      l = null;
    }));
  }
  var p = Jr(() => {
    u = /** @type {V[]} */
    _(c);
    var w = u.length;
    let b = !1;
    if (F) {
      var x = To(a) === Vs;
      x !== (w === 0) && (a = Ls(), Oe(a), Nt(!1), b = !0);
    }
    for (var H = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      $
    ), T = Bo(), R = 0; R < w; R += 1) {
      F && D.nodeType === Sn && /** @type {Comment} */
      D.data === Gr && (a = /** @type {Comment} */
      D, b = !0, Nt(!1));
      var ce = u[R], xe = i(ce, R), re = h ? null : o.get(xe);
      re ? (re.v && bi(re.v, ce), re.i && bi(re.i, R), T && I.skipped_effects.delete(re.e)) : (re = yd(
        o,
        h ? a : Fa ?? (Fa = rt()),
        ce,
        xe,
        R,
        s,
        e,
        t
      ), h || (re.e.f |= Vt), o.set(xe, re)), H.add(xe);
    }
    if (w === 0 && r && !l && (h ? l = Xe(() => r(a)) : (l = Xe(() => r(Fa ?? (Fa = rt()))), l.f |= Vt)), F && w > 0 && Oe(Ls()), !h)
      if (T) {
        for (const [ue, xi] of o)
          H.has(ue) || I.skipped_effects.add(xi.e);
        I.oncommit(g), I.ondiscard(() => {
        });
      } else
        g();
    b && Nt(!0), _(c);
  }), m = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, F && (a = D);
}
function wd(n, e, t, i, s) {
  var re;
  var r = e.length, a = n.items, o = n.effect.first, l, c = null, u = [], h = [], g, p, m, w;
  for (w = 0; w < r; w += 1) {
    if (g = e[w], p = s(g, w), m = /** @type {EachItem} */
    a.get(p).e, n.outrogroups !== null)
      for (const ue of n.outrogroups)
        ue.pending.delete(m), ue.done.delete(m);
    if (m.f & Vt)
      if (m.f ^= Vt, m === o)
        Ui(m, null, t);
      else {
        var b = c ? c.next : o;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), qt(n, c, m), qt(n, m, b), Ui(m, b, t), c = m, u = [], h = [], o = c.next;
        continue;
      }
    if (m.f & He && ea(m), m !== o) {
      if (l !== void 0 && l.has(m)) {
        if (u.length < h.length) {
          var x = h[0], H;
          c = x.prev;
          var I = u[0], T = u[u.length - 1];
          for (H = 0; H < u.length; H += 1)
            Ui(u[H], x, t);
          for (H = 0; H < h.length; H += 1)
            l.delete(h[H]);
          qt(n, I.prev, T.next), qt(n, c, I), qt(n, T, x), o = x, c = T, w -= 1, u = [], h = [];
        } else
          l.delete(m), Ui(m, o, t), qt(n, m.prev, m.next), qt(n, m, c === null ? n.effect.first : c.next), qt(n, c, m), c = m;
        continue;
      }
      for (u = [], h = []; o !== null && o !== m; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = o.next;
      if (o === null)
        continue;
    }
    m.f & Vt || u.push(m), c = m, o = m.next;
  }
  if (n.outrogroups !== null) {
    for (const ue of n.outrogroups)
      ue.pending.size === 0 && (Or(Ws(ue.done)), (re = n.outrogroups) == null || re.delete(ue));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var R = [];
    if (l !== void 0)
      for (m of l)
        m.f & He || R.push(m);
    for (; o !== null; )
      !(o.f & He) && o !== n.fallback && R.push(o), o = o.next;
    var ce = R.length;
    if (ce > 0) {
      var xe = null;
      vd(n, R, xe);
    }
  }
}
function yd(n, e, t, i, s, r, a, o) {
  var l = a & xc ? a & Sc ? _n(t) : /* @__PURE__ */ Uo(t, !1, !1) : null, c = a & Tc ? _n(s) : null;
  return {
    v: l,
    i: c,
    e: Xe(() => (r(e, l ?? t, c ?? s, o), () => {
      n.delete(i);
    }))
  };
}
function Ui(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, s = n.nodes.end, r = e && !(e.f & Vt) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(i)
      );
      if (r.before(i), i === s)
        return;
      i = a;
    }
}
function qt(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function _d(n, e, t = !1, i = !1, s = !1) {
  var r = n, a = "";
  St(() => {
    var o = (
      /** @type {Effect} */
      q
    );
    if (a === (a = e() ?? "")) {
      F && pi();
      return;
    }
    if (o.nodes !== null && (Zo(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (F) {
        D.data;
        for (var l = pi(), c = l; l !== null && (l.nodeType !== Sn || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ at(l);
        if (l === null)
          throw ns(), wn;
        xt(D, c), r = Oe(l);
        return;
      }
      var u = a + "";
      t ? u = `<svg>${u}</svg>` : i && (u = `<math>${u}</math>`);
      var h = ta(u);
      if ((t || i) && (h = /** @type {Element} */
      /* @__PURE__ */ Fe(h)), xt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), t || i)
        for (; /* @__PURE__ */ Fe(h); )
          r.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Fe(h)
          );
      else
        r.before(h);
    }
  });
}
const kd = () => performance.now(), Dt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => kd(),
  tasks: /* @__PURE__ */ new Set()
};
function ul() {
  const n = Dt.now();
  Dt.tasks.forEach((e) => {
    e.c(n) || (Dt.tasks.delete(e), e.f());
  }), Dt.tasks.size !== 0 && Dt.tick(ul);
}
function xd(n) {
  let e;
  return Dt.tasks.size === 0 && Dt.tick(ul), {
    promise: new Promise((t) => {
      Dt.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      Dt.tasks.delete(e);
    }
  };
}
function bs(n, e) {
  ki(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function Td(n) {
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
    const a = Td(s.trim());
    e[a] = r.trim();
  }
  return e;
}
const Sd = (n) => n;
function qa(n, e, t, i) {
  var b;
  var s = (n & Rc) !== 0, r = "both", a, o = e.inert, l = e.style.overflow, c, u;
  function h() {
    return ki(() => a ?? (a = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
    {}, {
      direction: r
    })));
  }
  var g = {
    is_global: s,
    in() {
      e.inert = o, bs(e, "introstart"), c = Dr(e, h(), u, 1, () => {
        bs(e, "introend"), c == null || c.abort(), c = a = void 0, e.style.overflow = l;
      });
    },
    out(x) {
      e.inert = !0, bs(e, "outrostart"), u = Dr(e, h(), c, 0, () => {
        bs(e, "outroend"), x == null || x();
      });
    },
    stop: () => {
      c == null || c.abort(), u == null || u.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    q
  );
  if (((b = p.nodes).t ?? (b.t = [])).push(g), Mr) {
    var m = s;
    if (!m) {
      for (var w = (
        /** @type {Effect | null} */
        p.parent
      ); w && w.f & vn; )
        for (; (w = w.parent) && !(w.f & It); )
          ;
      m = !w || (w.f & ts) !== 0;
    }
    m && Qr(() => {
      tn(() => g.in());
    });
  }
}
function Dr(n, e, t, i, s) {
  var r = i === 1;
  if (lc(e)) {
    var a, o = !1;
    return _i(() => {
      if (!o) {
        var b = e({ direction: r ? "in" : "out" });
        a = Dr(n, b, t, i, s);
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
      abort: Mi,
      deactivate: Mi,
      reset: Mi,
      t: () => i
    };
  const { delay: l = 0, css: c, tick: u, easing: h = Sd } = e;
  var g = [];
  if (r && t === void 0 && (u && u(0, 1), c)) {
    var p = Ha(c(0, 1));
    g.push(p, p);
  }
  var m = () => 1 - i, w = n.animate(g, { duration: l, fill: "forwards" });
  return w.onfinish = () => {
    w.cancel();
    var b = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var x = i - b, H = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), I = [];
    if (H > 0) {
      var T = !1;
      if (c)
        for (var R = Math.ceil(H / 16.666666666666668), ce = 0; ce <= R; ce += 1) {
          var xe = b + x * h(ce / R), re = Ha(c(xe, 1 - xe));
          I.push(re), T || (T = re.overflow === "hidden");
        }
      T && (n.style.overflow = "hidden"), m = () => {
        var ue = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          w.currentTime
        );
        return b + x * h(ue / H);
      }, u && xd(() => {
        if (w.playState !== "running") return !1;
        var ue = m();
        return u(ue, 1 - ue), !0;
      });
    }
    w = n.animate(I, { duration: H, fill: "forwards" }), w.onfinish = () => {
      m = () => i, u == null || u(i, 1 - i), s();
    };
  }, {
    abort: () => {
      w && (w.cancel(), w.effect = null, w.onfinish = Mi);
    },
    deactivate: () => {
      s = Mi;
    },
    reset: () => {
      i === 0 && (u == null || u(1, 0));
    },
    t: () => m()
  };
}
function An(n, e) {
  Qr(() => {
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
const Wa = [...` 	
\r\f \v\uFEFF`];
function Ed(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var s in t)
      if (t[s])
        i = i ? i + " " + s : s;
      else if (i.length)
        for (var r = s.length, a = 0; (a = i.indexOf(s, a)) >= 0; ) {
          var o = a + r;
          (a === 0 || Wa.includes(i[a - 1])) && (o === i.length || Wa.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Ad(n, e) {
  return n == null ? null : String(n);
}
function ia(n, e, t, i, s, r) {
  var a = n.__className;
  if (F || a !== t || a === void 0) {
    var o = Ed(t, i, r);
    (!F || o !== n.getAttribute("class")) && (o == null ? n.removeAttribute("class") : n.className = o), n.__className = t;
  } else if (r && s !== r)
    for (var l in r) {
      var c = !!r[l];
      (s == null || c !== !!s[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function Id(n, e, t, i) {
  var s = n.__style;
  if (F || s !== e) {
    var r = Ad(e);
    (!F || r !== n.getAttribute("style")) && (r == null ? n.removeAttribute("style") : n.style.cssText = r), n.__style = e;
  }
  return i;
}
const Cd = Symbol("is custom element"), Md = Symbol("is html");
function At(n, e, t, i) {
  var s = Rd(n);
  F && (s[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === "LINK") || s[e] !== (s[e] = t) && (e === "loading" && (n[uc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Ld(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Rd(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Cd]: n.nodeName.includes("-"),
      [Md]: n.namespaceURI === Dc
    })
  );
}
var Ba = /* @__PURE__ */ new Map();
function Ld(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ba.get(e);
  if (t) return t;
  Ba.set(e, t = []);
  for (var i, s = n, r = Element.prototype; r !== s; ) {
    i = vo(s);
    for (var a in i)
      i[a].set && t.push(a);
    s = Wr(s);
  }
  return t;
}
function Od(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  Kc(n, "input", async (s) => {
    var r = s ? n.defaultValue : n.value;
    if (r = dr(n) ? ur(r) : r, t(r), $ !== null && i.add($), await al(), r !== (r = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = r ?? "", o !== null) {
        var c = n.value.length;
        a === o && o === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = a, n.selectionEnd = Math.min(o, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (F && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  tn(e) == null && n.value) && (t(dr(n) ? ur(n.value) : n.value), $ !== null && i.add($)), Ys(() => {
    var s = e();
    if (n === document.activeElement) {
      var r = (
        /** @type {Batch} */
        Ts ?? $
      );
      if (i.has(r))
        return;
    }
    dr(n) && s === ur(n.value) || n.type === "date" && !s && !n.value || s !== n.value && (n.value = s ?? "");
  });
}
function dr(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function ur(n) {
  return n === "" ? null : +n;
}
function ja(n, e) {
  return n === e || (n == null ? void 0 : n[gn]) === e;
}
function sa(n = {}, e, t, i) {
  return Qr(() => {
    var s, r;
    return Ys(() => {
      s = r, r = [], tn(() => {
        n !== t(...r) && (e(n, ...r), s && ja(t(...s), n) && e(null, ...s));
      });
    }), () => {
      _i(() => {
        r && ja(t(...r), n) && e(null, ...r);
      });
    };
  }), n;
}
function Dd(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Z
  ), t = e.l.u;
  if (!t) return;
  let i = () => od(e.s);
  if (n) {
    let s = 0, r = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ ss(() => {
      let o = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== r[c] && (r[c] = l[c], o = !0);
      return o && s++, s;
    });
    i = () => _(a);
  }
  t.b.length && Jc(() => {
    Va(e, i), wr(t.b);
  }), Xt(() => {
    const s = tn(() => t.m.map(cc));
    return () => {
      for (const r of s)
        typeof r == "function" && r();
    };
  }), t.a.length && Xt(() => {
    Va(e, i), wr(t.a);
  });
}
function Va(n, e) {
  if (n.l.s)
    for (const t of n.l.s) _(t);
  e();
}
let ws = !1;
function Nd(n) {
  var e = ws;
  try {
    return ws = !1, [n(), ws];
  } finally {
    ws = e;
  }
}
function Zt(n, e, t, i) {
  var I;
  var s = !yi || (t & Ac) !== 0, r = (t & Cc) !== 0, a = (t & Mc) !== 0, o = (
    /** @type {V} */
    i
  ), l = !0, c = () => (l && (l = !1, o = a ? tn(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), o), u;
  if (r) {
    var h = gn in n || _o in n;
    u = ((I = fn(n, e)) == null ? void 0 : I.set) ?? (h && e in n ? (T) => n[e] = T : void 0);
  }
  var g, p = !1;
  r ? [g, p] = Nd(() => (
    /** @type {V} */
    n[e]
  )) : g = /** @type {V} */
  n[e], g === void 0 && i !== void 0 && (g = c(), u && (s && bc(), u(g)));
  var m;
  if (s ? m = () => {
    var T = (
      /** @type {V} */
      n[e]
    );
    return T === void 0 ? c() : (l = !0, T);
  } : m = () => {
    var T = (
      /** @type {V} */
      n[e]
    );
    return T !== void 0 && (o = /** @type {V} */
    void 0), T === void 0 ? o : T;
  }, s && !(t & Ic))
    return m;
  if (u) {
    var w = n.$$legacy;
    return (
      /** @type {() => V} */
      function(T, R) {
        return arguments.length > 0 ? ((!s || !R || w || p) && u(R ? m() : T), T) : m();
      }
    );
  }
  var b = !1, x = (t & Ec ? ss : Xr)(() => (b = !1, m()));
  r && _(x);
  var H = (
    /** @type {Effect} */
    q
  );
  return (
    /** @type {() => V} */
    function(T, R) {
      if (arguments.length > 0) {
        const ce = R ? _(x) : s && r ? he(T) : T;
        return L(x, ce), b = !0, o !== void 0 && (o = ce), T;
      }
      return En && b || H.f & $t ? x.v : _(x);
    }
  );
}
function $d(n) {
  return new Pd(n);
}
var Ot, Ge;
class Pd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    E(this, Ot);
    /** @type {Record<string, any>} */
    E(this, Ge);
    var r;
    var t = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ Uo(o, !1, !1);
      return t.set(a, l), l;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return _(t.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === _o ? !0 : (_(t.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return L(t.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    k(this, Ge, (e.hydrate ? pd : na)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((r = e == null ? void 0 : e.props) != null && r.$$host) || e.sync === !1) && kt(), k(this, Ot, s.$$events);
    for (const a of Object.keys(f(this, Ge)))
      a === "$set" || a === "$destroy" || a === "$on" || Rs(this, a, {
        get() {
          return f(this, Ge)[a];
        },
        /** @param {any} value */
        set(o) {
          f(this, Ge)[a] = o;
        },
        enumerable: !0
      });
    f(this, Ge).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, f(this, Ge).$destroy = () => {
      Lr(f(this, Ge));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    f(this, Ge).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    f(this, Ot)[e] = f(this, Ot)[e] || [];
    const i = (...s) => t.call(this, ...s);
    return f(this, Ot)[e].push(i), () => {
      f(this, Ot)[e] = f(this, Ot)[e].filter(
        /** @param {any} fn */
        (s) => s !== i
      );
    };
  }
  $destroy() {
    f(this, Ge).$destroy();
  }
}
Ot = new WeakMap(), Ge = new WeakMap();
let fl;
typeof HTMLElement == "function" && (fl = class extends HTMLElement {
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
          s !== "default" && (a.name = s), Y(r, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = zd(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), t.default = !0) : t[s] = e(s));
      for (const s of this.attributes) {
        const r = this.$$g_p(s.name);
        r in this.$$d || (this.$$d[r] = Is(r, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = $d({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ed(() => {
        Ys(() => {
          var s;
          this.$$r = !0;
          for (const r of Ms(this.$$c)) {
            if (!((s = this.$$p_d[r]) != null && s.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const a = Is(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Is(e, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
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
    return Ms(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Is(n, e, t, i) {
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
function zd(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function In(n, e, t, i, s, r) {
  let a = class extends fl {
    constructor() {
      super(n, t, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ms(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Ms(e).forEach((o) => {
    Rs(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = Is(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var u = (h = fn(c, o)) == null ? void 0 : h.get;
          u ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    Rs(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
function ra(n) {
  Z === null && ko(), yi && Z.l !== null ? Fd(Z).m.push(n) : Xt(() => {
    const e = tn(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ud(n) {
  Z === null && ko(), ra(() => () => tn(n));
}
function Fd(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const Hd = "5";
var po;
typeof window < "u" && ((po = window.__svelte ?? (window.__svelte = {})).v ?? (po.v = /* @__PURE__ */ new Set())).add(Hd);
const qd = (n) => n;
function Wd(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function Ga(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function Bd(n, { delay: e = 0, duration: t = 400, easing: i = qd } = {}) {
  const s = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (r) => `opacity: ${r * s}`
  };
}
function jd(n, { delay: e = 0, duration: t = 400, easing: i = Wd, x: s = 0, y: r = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(n), l = +o.opacity, c = o.transform === "none" ? "" : o.transform, u = l * (1 - a), [h, g] = Ga(s), [p, m] = Ga(r);
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (w, b) => `
			transform: ${c} translate(${(1 - w) * h}${g}, ${(1 - w) * p}${m});
			opacity: ${l - u * b}`
  };
}
var Yn, Xn, Zn, Kn;
class Vd {
  constructor() {
    E(this, Yn);
    E(this, Xn);
    E(this, Zn);
    E(this, Kn);
    k(this, Yn, /* @__PURE__ */ z(!1)), k(this, Xn, /* @__PURE__ */ z(!1)), k(this, Zn, /* @__PURE__ */ z(!1)), k(this, Kn, /* @__PURE__ */ z(!1));
  }
  get isOpen() {
    return _(f(this, Yn));
  }
  set isOpen(e) {
    L(f(this, Yn), e, !0);
  }
  get isMinimized() {
    return _(f(this, Xn));
  }
  set isMinimized(e) {
    L(f(this, Xn), e, !0);
  }
  get isLoading() {
    return _(f(this, Zn));
  }
  set isLoading(e) {
    L(f(this, Zn), e, !0);
  }
  get hasUnreadMessages() {
    return _(f(this, Kn));
  }
  set hasUnreadMessages(e) {
    L(f(this, Kn), e, !0);
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
Yn = new WeakMap(), Xn = new WeakMap(), Zn = new WeakMap(), Kn = new WeakMap();
const ee = new Vd(), pe = {
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
}, sn = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, Ya = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
};
var Qn, Jn, ei, ti, ni, ii;
class Gd {
  constructor() {
    E(this, Qn);
    E(this, Jn);
    E(this, ei);
    E(this, ti);
    E(this, ni);
    E(this, ii);
    k(this, Qn, /* @__PURE__ */ z(he([]))), k(this, Jn, /* @__PURE__ */ z(null)), k(this, ei, /* @__PURE__ */ z(!1)), k(this, ti, /* @__PURE__ */ z(null)), k(this, ni, /* @__PURE__ */ z(null)), this.streamingBuffer = "", this.streamingTimeout = null, k(this, ii, /* @__PURE__ */ z(0));
  }
  get messages() {
    return _(f(this, Qn));
  }
  set messages(e) {
    L(f(this, Qn), e, !0);
  }
  get currentSession() {
    return _(f(this, Jn));
  }
  set currentSession(e) {
    L(f(this, Jn), e, !0);
  }
  get isTyping() {
    return _(f(this, ei));
  }
  set isTyping(e) {
    L(f(this, ei), e, !0);
  }
  get error() {
    return _(f(this, ti));
  }
  set error(e) {
    L(f(this, ti), e, !0);
  }
  get streamingMessageId() {
    return _(f(this, ni));
  }
  set streamingMessageId(e) {
    L(f(this, ni), e, !0);
  }
  get streamingUpdateSignal() {
    return _(f(this, ii));
  }
  set streamingUpdateSignal(e) {
    L(f(this, ii), e, !0);
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
        pe.STREAMING_BATCH_DELAY
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
Qn = new WeakMap(), Jn = new WeakMap(), ei = new WeakMap(), ti = new WeakMap(), ni = new WeakMap(), ii = new WeakMap();
const P = new Gd(), Xa = {
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
  debug: "debug",
  "auto-init": "autoInit"
}, ut = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  debug: !1,
  autoInit: !0
}, gl = {
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
}, Yd = [
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
function hl(n) {
  return Yd.includes(n);
}
function Zs(n) {
  return !n || typeof n != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(n);
}
function aa(n, e = "#6b46c1") {
  return Zs(n) ? n : e;
}
function pl(n) {
  if (!Zs(n)) return n;
  if (n.length === 4) {
    const e = n.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return n;
}
function ml(n) {
  const e = pl(n), t = parseInt(e.slice(1, 3), 16) / 255, i = parseInt(e.slice(3, 5), 16) / 255, s = parseInt(e.slice(5, 7), 16) / 255, r = Math.max(t, i, s), a = Math.min(t, i, s);
  let o = 0, l = 0;
  const c = (r + a) / 2;
  if (r !== a) {
    const u = r - a;
    switch (l = c > 0.5 ? u / (2 - r - a) : u / (r + a), r) {
      case t:
        o = ((i - s) / u + (i < s ? 6 : 0)) / 6;
        break;
      case i:
        o = ((s - t) / u + 2) / 6;
        break;
      case s:
        o = ((t - i) / u + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: c * 100 };
}
function vl(n, e, t) {
  e /= 100, t /= 100;
  const i = e * Math.min(t, 1 - t), s = (r) => {
    const a = (r + n / 30) % 12, o = t - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${s(0)}${s(8)}${s(4)}`.toUpperCase();
}
function it(n, e) {
  if (!Zs(n)) return n;
  const t = ml(n), i = Math.max(0, Math.min(100, t.l + e));
  return vl(t.h, t.s, i);
}
const Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adjustColor: it,
  expandHexColor: pl,
  hexToHsl: ml,
  hslToHex: vl,
  isValidHexColor: Zs,
  sanitizeHexColor: aa
}, Symbol.toStringTag, { value: "Module" }));
var si, ri, ai, oi, li, ci, di, ui, fi, gi, hi;
class Zd {
  constructor() {
    E(this, si);
    E(this, ri);
    E(this, ai);
    E(this, oi);
    E(this, li);
    E(this, ci);
    E(this, di);
    E(this, ui);
    E(this, fi);
    E(this, gi);
    E(this, hi);
    k(this, si, /* @__PURE__ */ z("")), k(this, ri, /* @__PURE__ */ z(he(ut.theme))), k(this, ai, /* @__PURE__ */ z(he(ut.position))), k(this, oi, /* @__PURE__ */ z(he(ut.title))), k(this, li, /* @__PURE__ */ z(he(ut.logoUrl))), k(this, ci, /* @__PURE__ */ z(he(ut.placeholder))), k(this, di, /* @__PURE__ */ z(he(ut.accentColor))), k(this, ui, /* @__PURE__ */ z(he(ut.avatarEmoji))), k(this, fi, /* @__PURE__ */ z(he(ut.companyName))), k(this, gi, /* @__PURE__ */ z(he(ut.initialMessage))), k(this, hi, /* @__PURE__ */ z("default"));
  }
  get clientId() {
    return _(f(this, si));
  }
  set clientId(e) {
    L(f(this, si), e, !0);
  }
  get theme() {
    return _(f(this, ri));
  }
  set theme(e) {
    L(f(this, ri), e, !0);
  }
  get position() {
    return _(f(this, ai));
  }
  set position(e) {
    L(f(this, ai), e, !0);
  }
  get title() {
    return _(f(this, oi));
  }
  set title(e) {
    L(f(this, oi), e, !0);
  }
  get logoUrl() {
    return _(f(this, li));
  }
  set logoUrl(e) {
    L(f(this, li), e, !0);
  }
  get placeholder() {
    return _(f(this, ci));
  }
  set placeholder(e) {
    L(f(this, ci), e, !0);
  }
  get accentColor() {
    return _(f(this, di));
  }
  set accentColor(e) {
    L(f(this, di), e, !0);
  }
  get avatarEmoji() {
    return _(f(this, ui));
  }
  set avatarEmoji(e) {
    L(f(this, ui), e, !0);
  }
  get companyName() {
    return _(f(this, fi));
  }
  set companyName(e) {
    L(f(this, fi), e, !0);
  }
  get initialMessage() {
    return _(f(this, gi));
  }
  set initialMessage(e) {
    L(f(this, gi), e, !0);
  }
  get titleSource() {
    return _(f(this, hi));
  }
  set titleSource(e) {
    L(f(this, hi), e, !0);
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
      const r = gl.attributeToProperty(s);
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
            t.accentColor = aa(a, this.accentColor);
            break;
          case "theme":
            hl(a) && (t.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (t.position = a);
            break;
          case "companyName":
            t.companyName = a, e.hasAttribute("title") || (t.title = `${a} Assistant`);
            break;
        }
    }
    return t;
  }
  get cssVariables() {
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = it(this.accentColor, -20), e["--widget-primary-light"] = it(this.accentColor, 20), e["--widget-primary-dark"] = it(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${it(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${it(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const t = this.cssVariables;
    for (const [i, s] of Object.entries(t))
      e.style.setProperty(i, s);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
si = new WeakMap(), ri = new WeakMap(), ai = new WeakMap(), oi = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), di = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), gi = new WeakMap(), hi = new WeakMap();
const Kt = new Zd(), Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configStore: Kt
}, Symbol.toStringTag, { value: "Module" })), bl = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", Qd = bl, Jd = bl;
var eu = /* @__PURE__ */ Q('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), tu = /* @__PURE__ */ gd('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), nu = /* @__PURE__ */ Q('<span class="unread-indicator svelte-bkcus6"></span>'), iu = /* @__PURE__ */ Q("<button><!> <!></button>");
const su = {
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
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.open.svelte-bkcus6::after {box-shadow:0 0 20px rgba(var(--widget-primary-rgb), 0.5);}

  /* Enhancement 2: Delayed gentle bounce animation */
  @keyframes svelte-bkcus6-attentionBounce {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-8px); }
    50% { transform: translateY(-4px); }
    70% { transform: translateY(-6px); }
  }.attention-bounce.svelte-bkcus6 {
    animation: svelte-bkcus6-attentionBounce 0.5s var(--widget-ease-spring);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
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
      animation: none;}.attention-bounce.svelte-bkcus6 {
      animation: none;}.floating-button.svelte-bkcus6::after {transition:none;opacity:0.7;}.floating-button.svelte-bkcus6 {
      animation: none;}
  }`
};
function wl(n, e) {
  Jt(e, !0), An(n, su);
  let t = Zt(e, "onclick", 7);
  const i = /* @__PURE__ */ Ue(() => ee.isOpen), s = /* @__PURE__ */ Ue(() => ee.hasUnreadMessages);
  let r = /* @__PURE__ */ z(!1), a = /* @__PURE__ */ z("");
  Xt(() => {
    if (_(i) || _(r)) return;
    const b = setTimeout(
      () => {
        L(a, "attention-bounce"), L(r, !0), setTimeout(() => L(a, ""), 600);
      },
      1e4
    );
    return () => clearTimeout(b);
  });
  function o() {
    var b;
    (b = t()) == null || b();
  }
  var l = {
    get onclick() {
      return t();
    },
    set onclick(b) {
      t(b), kt();
    }
  }, c = iu();
  let u;
  c.__click = o;
  var h = ie(c);
  {
    var g = (b) => {
      var x = eu();
      St(() => At(x, "src", Qd)), Y(b, x);
    }, p = (b) => {
      var x = tu();
      Y(b, x);
    };
    ze(h, (b) => {
      _(i) ? b(p, !1) : b(g);
    });
  }
  var m = de(h, 2);
  {
    var w = (b) => {
      var x = nu();
      Y(b, x);
    };
    ze(m, (b) => {
      _(s) && !_(i) && b(w);
    });
  }
  return ne(c), St(() => {
    u = ia(c, 1, `floating-button ${_(a) ?? ""}`, "svelte-bkcus6", u, { open: _(i) }), At(c, "aria-label", _(i) ? "Close chat" : "Open chat");
  }), Y(n, c), en(l);
}
Xs(["click"]);
In(wl, { onclick: {} }, [], [], !0);
class ru {
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
function oa(n) {
  return new ru(n);
}
function fr() {
  var n;
  try {
    return typeof process < "u" && ((n = process.env) == null ? void 0 : n.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const G = {
  isDebugEnabled: fr,
  log: (n, e, t) => {
    fr() && (t !== void 0 ? console.log(`[${n}] ${e}:`, t) : console.log(`[${n}] ${e}`));
  },
  warn: (n, e, t) => {
    fr() && (t !== void 0 ? console.warn(`[${n}] ${e}:`, t) : console.warn(`[${n}] ${e}`));
  },
  error: (n, e, t) => {
    t !== void 0 ? console.error(`[${n}] ${e}:`, t) : console.error(`[${n}] ${e}`);
  }
};
class Hn {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get singleton instance
   */
  static getInstance() {
    return Hn.instance || (Hn.instance = new Hn()), Hn.instance;
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
function wt() {
  return Hn.getInstance();
}
class au {
  /**
   * Validate message content and length
   */
  static validate(e) {
    const t = wt().getCurrent();
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
    }), i.length < sn.MIN_LENGTH) {
      const a = "Message is too short";
      return G.log("MessageValidator", "Validation failed - too short", {
        correlationId: t,
        trimmedLength: i.length,
        minLength: sn.MIN_LENGTH,
        error: a
      }), {
        isValid: !1,
        error: a
      };
    }
    if (i.length > sn.MAX_LENGTH) {
      const a = `Message exceeds maximum length of ${sn.MAX_LENGTH} characters`;
      return G.log("MessageValidator", "Validation failed - too long", {
        correlationId: t,
        trimmedLength: i.length,
        maxLength: sn.MAX_LENGTH,
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
    const s = this.sanitizeHTML(i);
    G.log("MessageValidator", "HTML sanitization complete", {
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
    return G.log("MessageValidator", "Final validation result", { correlationId: t, result: r }), r;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e) {
    const t = wt().getCurrent();
    G.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: t,
      input: e,
      inputLength: e.length
    });
    let i = e, s = 0;
    const r = i;
    i = i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), i !== r && G.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: t,
      before: r,
      after: i,
      removed: r.length - i.length
    });
    const a = i;
    i = i.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), i !== a && G.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: t,
      before: a,
      after: i,
      removed: a.length - i.length
    });
    const o = i;
    i = i.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), i !== o && G.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: t,
      before: o,
      after: i,
      removed: o.length - i.length
    });
    const l = i;
    return i = i.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), i !== l && G.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
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
class yl {
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
class We extends Error {
  constructor(e, t, i = !1) {
    super(e), this.name = "ChatWidgetError", this.context = t, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = i, Error.captureStackTrace && Error.captureStackTrace(this, We);
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
class qn extends We {
  constructor(e, t, i, s) {
    super(e, { ...s, statusCode: t, endpoint: i }, !0), this.name = "NetworkError", this.statusCode = t, this.endpoint = i;
  }
}
class _l extends We {
  constructor(e, t, i, s, r) {
    super(e, { ...r, wsUrl: t, closeCode: i, closeReason: s }, !0), this.name = "WebSocketError", this.wsUrl = t, this.closeCode = i, this.closeReason = s;
  }
}
class Wi extends We {
  constructor(e, t, i, s, r) {
    super(e, { ...r, field: t, value: i, expectedType: s }, !1), this.name = "ValidationError", this.field = t, this.value = i, this.expectedType = s;
  }
}
class kl extends We {
  constructor(e, t, i, s) {
    super(e, { ...s, configKey: t, configValue: i }, !1), this.name = "ConfigurationError", this.configKey = t, this.configValue = i;
  }
}
class xl extends We {
  constructor(e, t, i, s) {
    super(e, { ...s, clientId: t, statusCode: i }, !1), this.name = "AuthenticationError", this.clientId = t, this.statusCode = i;
  }
}
class Wn extends We {
  constructor(e, t, i, s) {
    super(e, { ...s, retryAfter: t, limit: i }, !0), this.name = "RateLimitError", this.retryAfter = t, this.limit = i;
  }
}
class Tl extends We {
  constructor(e, t, i, s) {
    super(e, { ...s, storageType: t, operation: i }, !0), this.name = "StorageError", this.storageType = t, this.operation = i;
  }
}
class Sl extends We {
  constructor(e, t, i, s) {
    super(e, { ...s, timeout: t, operation: i }, !0), this.name = "TimeoutError", this.timeout = t, this.operation = i;
  }
}
function Za(n) {
  return n instanceof We ? n.isRetryable : !!(n instanceof TypeError && n.message.includes("fetch"));
}
function ou(n) {
  return n instanceof We ? {
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
function lu(n) {
  return n instanceof qn ? n.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : n.statusCode === 429 || n instanceof Wn ? "Too many requests. Please wait a moment and try again." : n.statusCode && n.statusCode >= 500 ? "Server error. Please try again in a few moments." : n.statusCode && (n.statusCode === 400 || n.statusCode === 401 || n.statusCode === 403) ? n.message : "Unable to connect to the server. Please check your internet connection." : n instanceof _l ? "Connection lost. Attempting to reconnect..." : n instanceof xl ? "Access denied. Please check your configuration." : n instanceof Wi ? n.message : n instanceof kl ? "Widget configuration error. Please contact support." : n instanceof Sl ? "Request timed out. Please try again." : n instanceof Tl ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class Bi {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, t) {
    const i = ou(e);
    let s;
    return e instanceof qn ? s = "NETWORK_ERROR" : e instanceof _l ? s = "WEBSOCKET_ERROR" : e instanceof Wi ? s = "VALIDATION_ERROR" : e instanceof kl ? s = "CONFIGURATION_ERROR" : e instanceof xl ? s = "AUTHENTICATION_ERROR" : e instanceof Wn ? s = "RATE_LIMIT_ERROR" : e instanceof Tl ? s = "STORAGE_ERROR" : e instanceof Sl ? s = "TIMEOUT_ERROR" : e instanceof We ? s = "WIDGET_ERROR" : s = "UNKNOWN_ERROR", {
      message: lu(e),
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
const cu = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Nr {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, t = {}) {
    const i = yl.validate(e);
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
    const t = cu, i = this.isLocalhostUrl(t) ? t : this.ensureHttps(t);
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
class du {
  constructor(e) {
    try {
      const t = window, i = t.AIChat || t.ChatWidget || {}, s = e ? this.parseElementAttributes(e) : {}, r = {
        ...ut,
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
      const a = yl.validate(r.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Nr.resolveUrls(a.sanitizedValue);
      this.config = {
        ...r,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (t) {
      const i = Bi.handle(t, {
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
      const r = gl.attributeToProperty(s);
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
            hl(a) && (t.theme = a);
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
const wi = /* @__PURE__ */ new Map();
let Zi = !1;
function uu() {
  try {
    const n = "__storage_test__";
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
Zi = !uu();
function fu(n) {
  try {
    return Zi ? wi.get(n) ?? null : localStorage.getItem(n);
  } catch {
    return wi.get(n) ?? null;
  }
}
function gu(n, e) {
  try {
    return Zi ? (wi.set(n, e), !0) : (localStorage.setItem(n, e), !0);
  } catch {
    return wi.set(n, e), Zi = !0, !1;
  }
}
function hu(n) {
  try {
    if (Zi) {
      wi.delete(n);
      return;
    }
    localStorage.removeItem(n);
  } catch {
    wi.delete(n);
  }
}
const tt = class tt {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var t;
    let e = this.getItem(tt.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(tt.VISITOR_ID_KEY, e), (t = window.AIChat) != null && t.debug && G.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : fu(e);
  }
  setItem(e, t) {
    this.storageAdapter ? this.storageAdapter.setItem(e, t) : gu(e, t);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : hu(e);
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
      tt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  getSessionHistory() {
    const e = this.getItem(tt.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const t = this.getSessionHistory().filter(
      (i) => i.active && Date.now() - i.timestamp < pe.SESSION_TIMEOUT
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
      tt.SESSION_HISTORY_KEY,
      JSON.stringify(i)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(tt.VISITOR_ID_KEY), this.removeItem(tt.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
tt.VISITOR_ID_KEY = Ya.VISITOR_ID, tt.SESSION_HISTORY_KEY = Ya.SESSIONS;
let $r = tt;
class Fi {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, t) {
    const { apiUrl: i } = Nr.resolveUrls(t.clientId, t.options);
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
    const { wsUrl: t } = Nr.resolveUrls(e.clientId, e.options), i = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && i.append("visitor_id", e.visitorId), `${t}?${i}`;
  }
}
var ye = /* @__PURE__ */ ((n) => (n.DISCONNECTED = "disconnected", n.CONNECTING = "connecting", n.CONNECTED = "connected", n.ERROR = "error", n))(ye || {});
class pu {
  constructor(e, t) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = pe.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = pe.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = t, this.debugLogger = oa(e.getAll()), this.setupVisibilityChangeListener();
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
        const t = Fi.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(t), this.setupEventHandlers();
      } catch (t) {
        const i = Bi.handle(t, {
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
      var t, i, s, r, a, o, l, c, u;
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
          rawDataLength: ((u = e.data) == null ? void 0 : u.length) || 0
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
    }, pe.VISIBILITY_PING_TIMEOUT);
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
    const t = wt().getCurrent();
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
      }), this.messageQueue.length >= sn.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: sn.MAX_QUEUE_SIZE
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = e ? pe.MOBILE_HEARTBEAT_INTERVAL : pe.HEARTBEAT_INTERVAL;
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
var mu = /* @__PURE__ */ Q('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button></header>');
const vu = {
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
function El(n, e) {
  Jt(e, !0), An(n, vu);
  let t = Zt(e, "onclose", 7), i = Zt(e, "connectionState", 23, () => ye.DISCONNECTED), s = Zt(e, "connectionFailed", 7, !1);
  const r = /* @__PURE__ */ Ue(() => {
    if (s()) return "var(--widget-error)";
    switch (i()) {
      case ye.CONNECTED:
        return "var(--widget-success)";
      case ye.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      ye.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), a = /* @__PURE__ */ Ue(() => {
    if (s()) return "Connection lost";
    switch (i()) {
      case ye.CONNECTED:
        return "Connected";
      case ye.CONNECTING:
        return "Connecting";
      case ye.ERROR:
        return "Connection error";
      case ye.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), o = /* @__PURE__ */ Ue(() => i() === ye.CONNECTING ? "pulse-slow" : i() === ye.ERROR ? "blink-slow" : "");
  function l() {
    var b;
    ee.close(), (b = t()) == null || b();
  }
  var c = {
    get onclose() {
      return t();
    },
    set onclose(b) {
      t(b), kt();
    },
    get connectionState() {
      return i();
    },
    set connectionState(b = ye.DISCONNECTED) {
      i(b), kt();
    },
    get connectionFailed() {
      return s();
    },
    set connectionFailed(b = !1) {
      s(b), kt();
    }
  }, u = mu(), h = ie(u), g = ie(h), p = de(g, 2), m = ie(p, !0);
  ne(p), ne(h);
  var w = de(h, 2);
  return w.__click = l, ne(u), St(() => {
    ia(g, 1, `status-dot ${_(o) ?? ""}`, "svelte-g5m62x"), Id(g, `--status-color: ${_(r) ?? ""}`), At(g, "aria-label", _(a)), At(g, "title", _(a)), $s(m, Kt.title);
  }), Y(n, u), en(c);
}
Xs(["click"]);
In(El, { onclose: {}, connectionState: {}, connectionFailed: {} }, [], [], !0);
function la() {
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
let Cn = la();
function Al(n) {
  Cn = n;
}
const Il = /[&<>"']/, bu = new RegExp(Il.source, "g"), Cl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, wu = new RegExp(Cl.source, "g"), yu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ka = (n) => yu[n];
function Pe(n, e) {
  if (e) {
    if (Il.test(n))
      return n.replace(bu, Ka);
  } else if (Cl.test(n))
    return n.replace(wu, Ka);
  return n;
}
const _u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function ku(n) {
  return n.replace(_u, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const xu = /(^|[^\[])\^/g;
function B(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const i = {
    replace: (s, r) => {
      let a = typeof r == "string" ? r : r.source;
      return a = a.replace(xu, "$1"), t = t.replace(s, a), i;
    },
    getRegex: () => new RegExp(t, e)
  };
  return i;
}
function Qa(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const ji = { exec: () => null };
function Ja(n, e) {
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
function ys(n, e, t) {
  const i = n.length;
  if (i === 0)
    return "";
  let s = 0;
  for (; s < i && n.charAt(i - s - 1) === e; )
    s++;
  return n.slice(0, i - s);
}
function Tu(n, e) {
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
function eo(n, e, t, i) {
  const s = e.href, r = e.title ? Pe(e.title) : null, a = n[1].replace(/\\([\[\]])/g, "$1");
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
    text: Pe(a)
  };
}
function Su(n, e) {
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
class Ps {
  // set by the lexer
  constructor(e) {
    M(this, "options");
    M(this, "rules");
    // set by the lexer
    M(this, "lexer");
    this.options = e || Cn;
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
        text: this.options.pedantic ? i : ys(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], s = Su(i, t[3] || "");
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
        const s = ys(i, "#");
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
      i = ys(i.replace(/^ *>[ \t]?/gm, ""), `
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
        let u = !1;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let h = t[2].split(`
`, 1)[0].replace(/^\t+/, (x) => " ".repeat(3 * x.length)), g = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, l = h.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, l = h.slice(p), p += t[1].length);
        let m = !1;
        if (!h && /^ *$/.test(g) && (o += g + `
`, e = e.substring(g.length + 1), u = !0), !u) {
          const x = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), H = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), I = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), T = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const R = e.split(`
`, 1)[0];
            if (g = R, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), I.test(g) || T.test(g) || x.test(g) || H.test(e))
              break;
            if (g.search(/[^ ]/) >= p || !g.trim())
              l += `
` + g.slice(p);
            else {
              if (m || h.search(/[^ ]/) >= 4 || I.test(h) || T.test(h) || H.test(h))
                break;
              l += `
` + g;
            }
            !m && !g.trim() && (m = !0), o += R + `
`, e = e.substring(R.length + 1), h = g.slice(p);
          }
        }
        r.loose || (c ? r.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let w = null, b;
        this.options.gfm && (w = /^\[[ xX]\] /.exec(l), w && (b = w[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), r.items.push({
          type: "list_item",
          raw: o,
          task: !!w,
          checked: b,
          loose: !1,
          text: l,
          tokens: []
        }), r.raw += o;
      }
      r.items[r.items.length - 1].raw = o.trimEnd(), r.items[r.items.length - 1].text = l.trimEnd(), r.raw = r.raw.trimEnd();
      for (let u = 0; u < r.items.length; u++)
        if (this.lexer.state.top = !1, r.items[u].tokens = this.lexer.blockTokens(r.items[u].text, []), !r.loose) {
          const h = r.items[u].tokens.filter((p) => p.type === "space"), g = h.length > 0 && h.some((p) => /\n.*\n/.test(p.raw));
          r.loose = g;
        }
      if (r.loose)
        for (let u = 0; u < r.items.length; u++)
          r.items[u].loose = !0;
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
    const i = Ja(t[1]), s = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
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
        a.rows.push(Ja(o, a.header.length).map((l) => ({
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
        text: Pe(t[1])
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
        const a = ys(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = Tu(t[2], "()");
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
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), eo(t, {
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
      return eo(i, r, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || s[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(s[1] || s[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const a = [...s[0]].length - 1;
      let o, l, c = a, u = 0;
      const h = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, t = t.slice(-1 * e.length + a); (s = h.exec(t)) != null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o)
          continue;
        if (l = [...o].length, s[3] || s[4]) {
          c += l;
          continue;
        } else if ((s[5] || s[6]) && a % 3 && !((a + l) % 3)) {
          u += l;
          continue;
        }
        if (c -= l, c > 0)
          continue;
        l = Math.min(l, l + c + u);
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
        const m = p.slice(2, -2);
        return {
          type: "strong",
          raw: p,
          text: m,
          tokens: this.lexer.inlineTokens(m)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(i), r = /^ /.test(i) && / $/.test(i);
      return s && r && (i = i.substring(1, i.length - 1)), i = Pe(i, !0), {
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
      return t[2] === "@" ? (i = Pe(t[1]), s = "mailto:" + i) : (i = Pe(t[1]), s = i), {
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
        s = Pe(t[0]), r = "mailto:" + s;
      else {
        let a;
        do
          a = t[0], t[0] = ((i = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== t[0]);
        s = Pe(t[0]), t[1] === "www." ? r = "http://" + t[0] : r = t[0];
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
      return this.lexer.state.inRawBlock ? i = t[0] : i = Pe(t[0]), {
        type: "text",
        raw: t[0],
        text: i
      };
    }
  }
}
const Eu = /^(?: *(?:\n|$))+/, Au = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Iu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, as = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Cu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ml = /(?:[*+-]|\d{1,9}[.)])/, Rl = B(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Ml).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), ca = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Mu = /^[^\n]+/, da = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ru = B(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", da).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Lu = B(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ml).getRegex(), Ks = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ua = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ou = B("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ua).replace("tag", Ks).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ll = B(ca).replace("hr", as).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ks).getRegex(), Du = B(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ll).getRegex(), fa = {
  blockquote: Du,
  code: Au,
  def: Ru,
  fences: Iu,
  heading: Cu,
  hr: as,
  html: Ou,
  lheading: Rl,
  list: Lu,
  newline: Eu,
  paragraph: Ll,
  table: ji,
  text: Mu
}, to = B("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", as).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ks).getRegex(), Nu = {
  ...fa,
  table: to,
  paragraph: B(ca).replace("hr", as).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", to).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ks).getRegex()
}, $u = {
  ...fa,
  html: B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ua).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: ji,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: B(ca).replace("hr", as).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Rl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ol = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Pu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Dl = /^( {2,}|\\)\n(?!\s*$)/, zu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, os = "\\p{P}\\p{S}", Uu = B(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, os).getRegex(), Fu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Hu = B(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, os).getRegex(), qu = B("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, os).getRegex(), Wu = B("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, os).getRegex(), Bu = B(/\\([punct])/, "gu").replace(/punct/g, os).getRegex(), ju = B(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vu = B(ua).replace("(?:-->|$)", "-->").getRegex(), Gu = B("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), zs = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Yu = B(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", zs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Nl = B(/^!?\[(label)\]\[(ref)\]/).replace("label", zs).replace("ref", da).getRegex(), $l = B(/^!?\[(ref)\](?:\[\])?/).replace("ref", da).getRegex(), Xu = B("reflink|nolink(?!\\()", "g").replace("reflink", Nl).replace("nolink", $l).getRegex(), ga = {
  _backpedal: ji,
  // only used for GFM url
  anyPunctuation: Bu,
  autolink: ju,
  blockSkip: Fu,
  br: Dl,
  code: Pu,
  del: ji,
  emStrongLDelim: Hu,
  emStrongRDelimAst: qu,
  emStrongRDelimUnd: Wu,
  escape: Ol,
  link: Yu,
  nolink: $l,
  punctuation: Uu,
  reflink: Nl,
  reflinkSearch: Xu,
  tag: Gu,
  text: zu,
  url: ji
}, Zu = {
  ...ga,
  link: B(/^!?\[(label)\]\((.*?)\)/).replace("label", zs).getRegex(),
  reflink: B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", zs).getRegex()
}, Pr = {
  ...ga,
  escape: B(Ol).replace("])", "~|])").getRegex(),
  url: B(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Ku = {
  ...Pr,
  br: B(Dl).replace("{2,}", "*").getRegex(),
  text: B(Pr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, _s = {
  normal: fa,
  gfm: Nu,
  pedantic: $u
}, Ri = {
  normal: ga,
  gfm: Pr,
  breaks: Ku,
  pedantic: Zu
};
class yt {
  constructor(e) {
    M(this, "tokens");
    M(this, "options");
    M(this, "state");
    M(this, "tokenizer");
    M(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Cn, this.options.tokenizer = this.options.tokenizer || new Ps(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: _s.normal,
      inline: Ri.normal
    };
    this.options.pedantic ? (t.block = _s.pedantic, t.inline = Ri.pedantic) : this.options.gfm && (t.block = _s.gfm, this.options.breaks ? t.inline = Ri.breaks : t.inline = Ri.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: _s,
      inline: Ri
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new yt(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new yt(t).inlineTokens(e);
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
          this.options.extensions.startBlock.forEach((u) => {
            c = u.call({ lexer: this }, l), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
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
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          u.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null; )
      a = a.slice(0, o.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (l || (c = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((u) => (i = u.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
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
          let u = 1 / 0;
          const h = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((p) => {
            g = p.call({ lexer: this }, h), typeof g == "number" && g >= 0 && (u = Math.min(u, g));
          }), u < 1 / 0 && u >= 0 && (r = e.substring(0, u + 1));
        }
        if (i = this.tokenizer.inlineText(r)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (c = i.raw.slice(-1)), l = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : t.push(i);
          continue;
        }
        if (e) {
          const u = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(u);
            break;
          } else
            throw new Error(u);
        }
      }
    return t;
  }
}
class Us {
  constructor(e) {
    M(this, "options");
    this.options = e || Cn;
  }
  code(e, t, i) {
    var r;
    const s = (r = (t || "").match(/^\S*/)) == null ? void 0 : r[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + Pe(s) + '">' + (i ? e : Pe(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : Pe(e, !0)) + `</code></pre>
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
    const s = Qa(e);
    if (s === null)
      return i;
    e = s;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), r += ">" + i + "</a>", r;
  }
  image(e, t, i) {
    const s = Qa(e);
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
class ha {
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
class _t {
  constructor(e) {
    M(this, "options");
    M(this, "renderer");
    M(this, "textRenderer");
    this.options = e || Cn, this.options.renderer = this.options.renderer || new Us(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ha();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new _t(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new _t(t).parseInline(e);
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
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, ku(this.parseInline(a.tokens, this.textRenderer)));
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
          for (let u = 0; u < a.header.length; u++)
            l += this.renderer.tablecell(this.parseInline(a.header[u].tokens), { header: !0, align: a.align[u] });
          o += this.renderer.tablerow(l);
          let c = "";
          for (let u = 0; u < a.rows.length; u++) {
            const h = a.rows[u];
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
          let u = "";
          for (let h = 0; h < a.items.length; h++) {
            const g = a.items[h], p = g.checked, m = g.task;
            let w = "";
            if (g.task) {
              const b = this.renderer.checkbox(!!p);
              c ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = b + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = b + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: b + " "
              }) : w += b + " ";
            }
            w += this.parse(g.tokens, c), u += this.renderer.listitem(w, m, !!p);
          }
          i += this.renderer.list(u, o, l);
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
class Vi {
  constructor(e) {
    M(this, "options");
    this.options = e || Cn;
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
M(Vi, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var xn, zr, Pl;
class Qu {
  constructor(...e) {
    E(this, xn);
    M(this, "defaults", la());
    M(this, "options", this.setOptions);
    M(this, "parse", j(this, xn, zr).call(this, yt.lex, _t.parse));
    M(this, "parseInline", j(this, xn, zr).call(this, yt.lexInline, _t.parseInline));
    M(this, "Parser", _t);
    M(this, "Renderer", Us);
    M(this, "TextRenderer", ha);
    M(this, "Lexer", yt);
    M(this, "Tokenizer", Ps);
    M(this, "Hooks", Vi);
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
        const r = this.defaults.renderer || new Us(this.defaults);
        for (const a in i.renderer) {
          if (!(a in r))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.renderer[o], c = r[o];
          r[o] = (...u) => {
            let h = l.apply(r, u);
            return h === !1 && (h = c.apply(r, u)), h || "";
          };
        }
        s.renderer = r;
      }
      if (i.tokenizer) {
        const r = this.defaults.tokenizer || new Ps(this.defaults);
        for (const a in i.tokenizer) {
          if (!(a in r))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const o = a, l = i.tokenizer[o], c = r[o];
          r[o] = (...u) => {
            let h = l.apply(r, u);
            return h === !1 && (h = c.apply(r, u)), h;
          };
        }
        s.tokenizer = r;
      }
      if (i.hooks) {
        const r = this.defaults.hooks || new Vi();
        for (const a in i.hooks) {
          if (!(a in r))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const o = a, l = i.hooks[o], c = r[o];
          Vi.passThroughHooks.has(a) ? r[o] = (u) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(r, u)).then((g) => c.call(r, g));
            const h = l.call(r, u);
            return c.call(r, h);
          } : r[o] = (...u) => {
            let h = l.apply(r, u);
            return h === !1 && (h = c.apply(r, u)), h;
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
    return yt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return _t.parse(e, t ?? this.defaults);
  }
}
xn = new WeakSet(), zr = function(e, t) {
  return (i, s) => {
    const r = { ...s }, a = { ...this.defaults, ...r };
    this.defaults.async === !0 && r.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const o = j(this, xn, Pl).call(this, !!a.silent, !!a.async);
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
}, Pl = function(e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const s = "<p>An error occurred:</p><pre>" + Pe(i.message + "", !0) + "</pre>";
      return t ? Promise.resolve(s) : s;
    }
    if (t)
      return Promise.reject(i);
    throw i;
  };
};
const kn = new Qu();
function W(n, e) {
  return kn.parse(n, e);
}
W.options = W.setOptions = function(n) {
  return kn.setOptions(n), W.defaults = kn.defaults, Al(W.defaults), W;
};
W.getDefaults = la;
W.defaults = Cn;
W.use = function(...n) {
  return kn.use(...n), W.defaults = kn.defaults, Al(W.defaults), W;
};
W.walkTokens = function(n, e) {
  return kn.walkTokens(n, e);
};
W.parseInline = kn.parseInline;
W.Parser = _t;
W.parser = _t.parse;
W.Renderer = Us;
W.TextRenderer = ha;
W.Lexer = yt;
W.lexer = yt.lex;
W.Tokenizer = Ps;
W.Hooks = Vi;
W.parse = W;
W.options;
W.setOptions;
W.use;
W.walkTokens;
W.parseInline;
_t.parse;
yt.lex;
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: zl,
  setPrototypeOf: no,
  isFrozen: Ju,
  getPrototypeOf: ef,
  getOwnPropertyDescriptor: tf
} = Object;
let {
  freeze: Ie,
  seal: Ze,
  create: Ur
} = Object, {
  apply: Fr,
  construct: Hr
} = typeof Reflect < "u" && Reflect;
Ie || (Ie = function(e) {
  return e;
});
Ze || (Ze = function(e) {
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
const ks = Ce(Array.prototype.forEach), nf = Ce(Array.prototype.lastIndexOf), io = Ce(Array.prototype.pop), Li = Ce(Array.prototype.push), sf = Ce(Array.prototype.splice), Cs = Ce(String.prototype.toLowerCase), gr = Ce(String.prototype.toString), hr = Ce(String.prototype.match), Oi = Ce(String.prototype.replace), rf = Ce(String.prototype.indexOf), af = Ce(String.prototype.trim), et = Ce(Object.prototype.hasOwnProperty), Te = Ce(RegExp.prototype.test), Di = of(TypeError);
function Ce(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    return Fr(n, e, i);
  };
}
function of(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return Hr(n, t);
  };
}
function O(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cs;
  no && no(n, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (Ju(e) || (e[i] = r), s = r);
    }
    n[s] = !0;
  }
  return n;
}
function lf(n) {
  for (let e = 0; e < n.length; e++)
    et(n, e) || (n[e] = null);
  return n;
}
function ft(n) {
  const e = Ur(null);
  for (const [t, i] of zl(n))
    et(n, t) && (Array.isArray(i) ? e[t] = lf(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = ft(i) : e[t] = i);
  return e;
}
function Ni(n, e) {
  for (; n !== null; ) {
    const i = tf(n, e);
    if (i) {
      if (i.get)
        return Ce(i.get);
      if (typeof i.value == "function")
        return Ce(i.value);
    }
    n = ef(n);
  }
  function t() {
    return null;
  }
  return t;
}
const so = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pr = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), mr = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cf = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), vr = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), df = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ro = Ie(["#text"]), ao = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), br = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oo = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), xs = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uf = Ze(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ff = Ze(/<%[\w\W]*|[\w\W]*%>/gm), gf = Ze(/\$\{[\w\W]*/gm), hf = Ze(/^data-[\-\w.\u00B7-\uFFFF]+$/), pf = Ze(/^aria-[\-\w]+$/), Ul = Ze(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mf = Ze(/^(?:\w+script|data):/i), vf = Ze(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fl = Ze(/^html$/i), bf = Ze(/^[a-z][.\w]*(-[.\w]+)+$/i);
var lo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: pf,
  ATTR_WHITESPACE: vf,
  CUSTOM_ELEMENT: bf,
  DATA_ATTR: hf,
  DOCTYPE_NAME: Fl,
  ERB_EXPR: ff,
  IS_ALLOWED_URI: Ul,
  IS_SCRIPT_OR_DATA: mf,
  MUSTACHE_EXPR: uf,
  TMPLIT_EXPR: gf
});
const $i = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, wf = function() {
  return typeof window > "u" ? null : window;
}, yf = function(e, t) {
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
}, co = function() {
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
function Hl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wf();
  const e = (A) => Hl(A);
  if (e.version = "3.3.1", e.removed = [], !n || !n.document || n.document.nodeType !== $i.document || !n.Element)
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
    NamedNodeMap: u = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: g,
    trustedTypes: p
  } = n, m = l.prototype, w = Ni(m, "cloneNode"), b = Ni(m, "remove"), x = Ni(m, "nextSibling"), H = Ni(m, "childNodes"), I = Ni(m, "parentNode");
  if (typeof a == "function") {
    const A = t.createElement("template");
    A.content && A.content.ownerDocument && (t = A.content.ownerDocument);
  }
  let T, R = "";
  const {
    implementation: ce,
    createNodeIterator: xe,
    createDocumentFragment: re,
    getElementsByTagName: ue
  } = t, {
    importNode: xi
  } = i;
  let fe = co();
  e.isSupported = typeof zl == "function" && typeof I == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Mn,
    ERB_EXPR: Ti,
    TMPLIT_EXPR: Si,
    DATA_ATTR: Qs,
    ARIA_ATTR: Ei,
    IS_SCRIPT_OR_DATA: Js,
    ATTR_WHITESPACE: ls,
    CUSTOM_ELEMENT: er
  } = lo;
  let {
    IS_ALLOWED_URI: zt
  } = lo, K = null;
  const cs = O({}, [...so, ...pr, ...mr, ...vr, ...ro]);
  let ae = null;
  const ds = O({}, [...ao, ...br, ...oo, ...xs]);
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
  const X = Object.seal(Ur(null, {
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
  let lt = !0, Rn = !0, us = !1, fs = !0, Ut = !1, Ln = !0, oe = !1, Ke = !1, Ai = !1, Ft = !1, On = !1, Qe = !1, Ht = !0, Dn = !1;
  const Xl = "user-content-";
  let tr = !0, Ii = !1, Nn = {}, ct = null;
  const nr = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ma = null;
  const va = O({}, ["audio", "video", "img", "source", "image", "track"]);
  let ir = null;
  const ba = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gs = "http://www.w3.org/1998/Math/MathML", hs = "http://www.w3.org/2000/svg", Ct = "http://www.w3.org/1999/xhtml";
  let $n = Ct, sr = !1, rr = null;
  const Zl = O({}, [gs, hs, Ct], gr);
  let ps = O({}, ["mi", "mo", "mn", "ms", "mtext"]), ms = O({}, ["annotation-xml"]);
  const Kl = O({}, ["title", "style", "font", "a", "script"]);
  let Ci = null;
  const Ql = ["application/xhtml+xml", "text/html"], Jl = "text/html";
  let le = null, Pn = null;
  const ec = t.createElement("form"), wa = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, ar = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Pn && Pn === d)) {
      if ((!d || typeof d != "object") && (d = {}), d = ft(d), Ci = // eslint-disable-next-line unicorn/prefer-includes
      Ql.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? Jl : d.PARSER_MEDIA_TYPE, le = Ci === "application/xhtml+xml" ? gr : Cs, K = et(d, "ALLOWED_TAGS") ? O({}, d.ALLOWED_TAGS, le) : cs, ae = et(d, "ALLOWED_ATTR") ? O({}, d.ALLOWED_ATTR, le) : ds, rr = et(d, "ALLOWED_NAMESPACES") ? O({}, d.ALLOWED_NAMESPACES, gr) : Zl, ir = et(d, "ADD_URI_SAFE_ATTR") ? O(ft(ba), d.ADD_URI_SAFE_ATTR, le) : ba, ma = et(d, "ADD_DATA_URI_TAGS") ? O(ft(va), d.ADD_DATA_URI_TAGS, le) : va, ct = et(d, "FORBID_CONTENTS") ? O({}, d.FORBID_CONTENTS, le) : nr, N = et(d, "FORBID_TAGS") ? O({}, d.FORBID_TAGS, le) : ft({}), C = et(d, "FORBID_ATTR") ? O({}, d.FORBID_ATTR, le) : ft({}), Nn = et(d, "USE_PROFILES") ? d.USE_PROFILES : !1, lt = d.ALLOW_ARIA_ATTR !== !1, Rn = d.ALLOW_DATA_ATTR !== !1, us = d.ALLOW_UNKNOWN_PROTOCOLS || !1, fs = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ut = d.SAFE_FOR_TEMPLATES || !1, Ln = d.SAFE_FOR_XML !== !1, oe = d.WHOLE_DOCUMENT || !1, Ft = d.RETURN_DOM || !1, On = d.RETURN_DOM_FRAGMENT || !1, Qe = d.RETURN_TRUSTED_TYPE || !1, Ai = d.FORCE_BODY || !1, Ht = d.SANITIZE_DOM !== !1, Dn = d.SANITIZE_NAMED_PROPS || !1, tr = d.KEEP_CONTENT !== !1, Ii = d.IN_PLACE || !1, zt = d.ALLOWED_URI_REGEXP || Ul, $n = d.NAMESPACE || Ct, ps = d.MATHML_TEXT_INTEGRATION_POINTS || ps, ms = d.HTML_INTEGRATION_POINTS || ms, v = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && wa(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && wa(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ut && (Rn = !1), On && (Ft = !0), Nn && (K = O({}, ro), ae = [], Nn.html === !0 && (O(K, so), O(ae, ao)), Nn.svg === !0 && (O(K, pr), O(ae, br), O(ae, xs)), Nn.svgFilters === !0 && (O(K, mr), O(ae, br), O(ae, xs)), Nn.mathMl === !0 && (O(K, vr), O(ae, oo), O(ae, xs))), d.ADD_TAGS && (typeof d.ADD_TAGS == "function" ? X.tagCheck = d.ADD_TAGS : (K === cs && (K = ft(K)), O(K, d.ADD_TAGS, le))), d.ADD_ATTR && (typeof d.ADD_ATTR == "function" ? X.attributeCheck = d.ADD_ATTR : (ae === ds && (ae = ft(ae)), O(ae, d.ADD_ATTR, le))), d.ADD_URI_SAFE_ATTR && O(ir, d.ADD_URI_SAFE_ATTR, le), d.FORBID_CONTENTS && (ct === nr && (ct = ft(ct)), O(ct, d.FORBID_CONTENTS, le)), d.ADD_FORBID_CONTENTS && (ct === nr && (ct = ft(ct)), O(ct, d.ADD_FORBID_CONTENTS, le)), tr && (K["#text"] = !0), oe && O(K, ["html", "head", "body"]), K.table && (O(K, ["tbody"]), delete N.tbody), d.TRUSTED_TYPES_POLICY) {
        if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Di('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Di('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        T = d.TRUSTED_TYPES_POLICY, R = T.createHTML("");
      } else
        T === void 0 && (T = yf(p, s)), T !== null && typeof R == "string" && (R = T.createHTML(""));
      Ie && Ie(d), Pn = d;
    }
  }, ya = O({}, [...pr, ...mr, ...cf]), _a = O({}, [...vr, ...df]), tc = function(d) {
    let y = I(d);
    (!y || !y.tagName) && (y = {
      namespaceURI: $n,
      tagName: "template"
    });
    const S = Cs(d.tagName), V = Cs(y.tagName);
    return rr[d.namespaceURI] ? d.namespaceURI === hs ? y.namespaceURI === Ct ? S === "svg" : y.namespaceURI === gs ? S === "svg" && (V === "annotation-xml" || ps[V]) : !!ya[S] : d.namespaceURI === gs ? y.namespaceURI === Ct ? S === "math" : y.namespaceURI === hs ? S === "math" && ms[V] : !!_a[S] : d.namespaceURI === Ct ? y.namespaceURI === hs && !ms[V] || y.namespaceURI === gs && !ps[V] ? !1 : !_a[S] && (Kl[S] || !ya[S]) : !!(Ci === "application/xhtml+xml" && rr[d.namespaceURI]) : !1;
  }, dt = function(d) {
    Li(e.removed, {
      element: d
    });
    try {
      I(d).removeChild(d);
    } catch {
      b(d);
    }
  }, nn = function(d, y) {
    try {
      Li(e.removed, {
        attribute: y.getAttributeNode(d),
        from: y
      });
    } catch {
      Li(e.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(d), d === "is")
      if (Ft || On)
        try {
          dt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(d, "");
        } catch {
        }
  }, ka = function(d) {
    let y = null, S = null;
    if (Ai)
      d = "<remove></remove>" + d;
    else {
      const J = hr(d, /^[\r\n\t ]+/);
      S = J && J[0];
    }
    Ci === "application/xhtml+xml" && $n === Ct && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const V = T ? T.createHTML(d) : d;
    if ($n === Ct)
      try {
        y = new g().parseFromString(V, Ci);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = ce.createDocument($n, "template", null);
      try {
        y.documentElement.innerHTML = sr ? R : V;
      } catch {
      }
    }
    const be = y.body || y.documentElement;
    return d && S && be.insertBefore(t.createTextNode(S), be.childNodes[0] || null), $n === Ct ? ue.call(y, oe ? "html" : "body")[0] : oe ? y.documentElement : be;
  }, xa = function(d) {
    return xe.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, or = function(d) {
    return d instanceof h && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof u) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, Ta = function(d) {
    return typeof o == "function" && d instanceof o;
  };
  function Mt(A, d, y) {
    ks(A, (S) => {
      S.call(e, d, y, Pn);
    });
  }
  const Sa = function(d) {
    let y = null;
    if (Mt(fe.beforeSanitizeElements, d, null), or(d))
      return dt(d), !0;
    const S = le(d.nodeName);
    if (Mt(fe.uponSanitizeElement, d, {
      tagName: S,
      allowedTags: K
    }), Ln && d.hasChildNodes() && !Ta(d.firstElementChild) && Te(/<[/\w!]/g, d.innerHTML) && Te(/<[/\w!]/g, d.textContent) || d.nodeType === $i.progressingInstruction || Ln && d.nodeType === $i.comment && Te(/<[/\w]/g, d.data))
      return dt(d), !0;
    if (!(X.tagCheck instanceof Function && X.tagCheck(S)) && (!K[S] || N[S])) {
      if (!N[S] && Aa(S) && (v.tagNameCheck instanceof RegExp && Te(v.tagNameCheck, S) || v.tagNameCheck instanceof Function && v.tagNameCheck(S)))
        return !1;
      if (tr && !ct[S]) {
        const V = I(d) || d.parentNode, be = H(d) || d.childNodes;
        if (be && V) {
          const J = be.length;
          for (let Me = J - 1; Me >= 0; --Me) {
            const Rt = w(be[Me], !0);
            Rt.__removalCount = (d.__removalCount || 0) + 1, V.insertBefore(Rt, x(d));
          }
        }
      }
      return dt(d), !0;
    }
    return d instanceof l && !tc(d) || (S === "noscript" || S === "noembed" || S === "noframes") && Te(/<\/no(script|embed|frames)/i, d.innerHTML) ? (dt(d), !0) : (Ut && d.nodeType === $i.text && (y = d.textContent, ks([Mn, Ti, Si], (V) => {
      y = Oi(y, V, " ");
    }), d.textContent !== y && (Li(e.removed, {
      element: d.cloneNode()
    }), d.textContent = y)), Mt(fe.afterSanitizeElements, d, null), !1);
  }, Ea = function(d, y, S) {
    if (Ht && (y === "id" || y === "name") && (S in t || S in ec))
      return !1;
    if (!(Rn && !C[y] && Te(Qs, y))) {
      if (!(lt && Te(Ei, y))) {
        if (!(X.attributeCheck instanceof Function && X.attributeCheck(y, d))) {
          if (!ae[y] || C[y]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Aa(d) && (v.tagNameCheck instanceof RegExp && Te(v.tagNameCheck, d) || v.tagNameCheck instanceof Function && v.tagNameCheck(d)) && (v.attributeNameCheck instanceof RegExp && Te(v.attributeNameCheck, y) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(y, d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              y === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && Te(v.tagNameCheck, S) || v.tagNameCheck instanceof Function && v.tagNameCheck(S)))
            ) return !1;
          } else if (!ir[y]) {
            if (!Te(zt, Oi(S, ls, ""))) {
              if (!((y === "src" || y === "xlink:href" || y === "href") && d !== "script" && rf(S, "data:") === 0 && ma[d])) {
                if (!(us && !Te(Js, Oi(S, ls, "")))) {
                  if (S)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Aa = function(d) {
    return d !== "annotation-xml" && hr(d, er);
  }, Ia = function(d) {
    Mt(fe.beforeSanitizeAttributes, d, null);
    const {
      attributes: y
    } = d;
    if (!y || or(d))
      return;
    const S = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ae,
      forceKeepAttr: void 0
    };
    let V = y.length;
    for (; V--; ) {
      const be = y[V], {
        name: J,
        namespaceURI: Me,
        value: Rt
      } = be, zn = le(J), lr = Rt;
      let ge = J === "value" ? lr : af(lr);
      if (S.attrName = zn, S.attrValue = ge, S.keepAttr = !0, S.forceKeepAttr = void 0, Mt(fe.uponSanitizeAttribute, d, S), ge = S.attrValue, Dn && (zn === "id" || zn === "name") && (nn(J, d), ge = Xl + ge), Ln && Te(/((--!?|])>)|<\/(style|title|textarea)/i, ge)) {
        nn(J, d);
        continue;
      }
      if (zn === "attributename" && hr(ge, "href")) {
        nn(J, d);
        continue;
      }
      if (S.forceKeepAttr)
        continue;
      if (!S.keepAttr) {
        nn(J, d);
        continue;
      }
      if (!fs && Te(/\/>/i, ge)) {
        nn(J, d);
        continue;
      }
      Ut && ks([Mn, Ti, Si], (Ma) => {
        ge = Oi(ge, Ma, " ");
      });
      const Ca = le(d.nodeName);
      if (!Ea(Ca, zn, ge)) {
        nn(J, d);
        continue;
      }
      if (T && typeof p == "object" && typeof p.getAttributeType == "function" && !Me)
        switch (p.getAttributeType(Ca, zn)) {
          case "TrustedHTML": {
            ge = T.createHTML(ge);
            break;
          }
          case "TrustedScriptURL": {
            ge = T.createScriptURL(ge);
            break;
          }
        }
      if (ge !== lr)
        try {
          Me ? d.setAttributeNS(Me, J, ge) : d.setAttribute(J, ge), or(d) ? dt(d) : io(e.removed);
        } catch {
          nn(J, d);
        }
    }
    Mt(fe.afterSanitizeAttributes, d, null);
  }, nc = function A(d) {
    let y = null;
    const S = xa(d);
    for (Mt(fe.beforeSanitizeShadowDOM, d, null); y = S.nextNode(); )
      Mt(fe.uponSanitizeShadowNode, y, null), Sa(y), Ia(y), y.content instanceof r && A(y.content);
    Mt(fe.afterSanitizeShadowDOM, d, null);
  };
  return e.sanitize = function(A) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, S = null, V = null, be = null;
    if (sr = !A, sr && (A = "<!-->"), typeof A != "string" && !Ta(A))
      if (typeof A.toString == "function") {
        if (A = A.toString(), typeof A != "string")
          throw Di("dirty is not a string, aborting");
      } else
        throw Di("toString is not a function");
    if (!e.isSupported)
      return A;
    if (Ke || ar(d), e.removed = [], typeof A == "string" && (Ii = !1), Ii) {
      if (A.nodeName) {
        const Rt = le(A.nodeName);
        if (!K[Rt] || N[Rt])
          throw Di("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (A instanceof o)
      y = ka("<!---->"), S = y.ownerDocument.importNode(A, !0), S.nodeType === $i.element && S.nodeName === "BODY" || S.nodeName === "HTML" ? y = S : y.appendChild(S);
    else {
      if (!Ft && !Ut && !oe && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return T && Qe ? T.createHTML(A) : A;
      if (y = ka(A), !y)
        return Ft ? null : Qe ? R : "";
    }
    y && Ai && dt(y.firstChild);
    const J = xa(Ii ? A : y);
    for (; V = J.nextNode(); )
      Sa(V), Ia(V), V.content instanceof r && nc(V.content);
    if (Ii)
      return A;
    if (Ft) {
      if (On)
        for (be = re.call(y.ownerDocument); y.firstChild; )
          be.appendChild(y.firstChild);
      else
        be = y;
      return (ae.shadowroot || ae.shadowrootmode) && (be = xi.call(i, be, !0)), be;
    }
    let Me = oe ? y.outerHTML : y.innerHTML;
    return oe && K["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && Te(Fl, y.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Me), Ut && ks([Mn, Ti, Si], (Rt) => {
      Me = Oi(Me, Rt, " ");
    }), T && Qe ? T.createHTML(Me) : Me;
  }, e.setConfig = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ar(A), Ke = !0;
  }, e.clearConfig = function() {
    Pn = null, Ke = !1;
  }, e.isValidAttribute = function(A, d, y) {
    Pn || ar({});
    const S = le(A), V = le(d);
    return Ea(S, V, y);
  }, e.addHook = function(A, d) {
    typeof d == "function" && Li(fe[A], d);
  }, e.removeHook = function(A, d) {
    if (d !== void 0) {
      const y = nf(fe[A], d);
      return y === -1 ? void 0 : sf(fe[A], y, 1)[0];
    }
    return io(fe[A]);
  }, e.removeHooks = function(A) {
    fe[A] = [];
  }, e.removeAllHooks = function() {
    fe = co();
  }, e;
}
var ql = Hl();
W.setOptions({
  breaks: !0,
  // Convert \n to <br>
  gfm: !0
  // GitHub Flavored Markdown (tables, strikethrough)
});
ql.addHook("afterSanitizeAttributes", (n) => {
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
function _f(n) {
  if (!n) return "";
  const e = W.parse(n);
  return ql.sanitize(e, {
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
var kf = /* @__PURE__ */ Q('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), xf = /* @__PURE__ */ Q('<span class="message-content"> </span>'), Tf = /* @__PURE__ */ Q('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Sf = /* @__PURE__ */ Q('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Ef = /* @__PURE__ */ Q('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Af = {
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
function Wl(n, e) {
  Jt(e, !0), An(n, Af);
  let t = Zt(e, "message", 7);
  function i(I) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(I);
  }
  const s = /* @__PURE__ */ Ue(() => t().role === "user"), r = /* @__PURE__ */ Ue(() => t().role === "assistant" ? _f(t().content) : t().content);
  var a = {
    get message() {
      return t();
    },
    set message(I) {
      t(I), kt();
    }
  }, o = Ef();
  let l;
  var c = ie(o), u = ie(c);
  {
    var h = (I) => {
      var T = kf(), R = ie(T);
      _d(R, () => _(r)), ne(T), Y(I, T);
    }, g = (I) => {
      var T = xf(), R = ie(T, !0);
      ne(T), St(() => $s(R, t().content)), Y(I, T);
    };
    ze(u, (I) => {
      t().role === "assistant" ? I(h) : I(g, !1);
    });
  }
  var p = de(u, 2);
  {
    var m = (I) => {
      var T = Tf();
      Y(I, T);
    };
    ze(p, (I) => {
      t().status === "sending" && I(m);
    });
  }
  var w = de(p, 2);
  {
    var b = (I) => {
      var T = Sf();
      Y(I, T);
    };
    ze(w, (I) => {
      t().status === "failed" && I(b);
    });
  }
  ne(c);
  var x = de(c, 2), H = ie(x, !0);
  return ne(x), ne(o), St(
    (I, T) => {
      l = ia(o, 1, "message svelte-1uqoiy7", null, l, { user: _(s), assistant: !_(s) }), At(o, "aria-label", _(s) ? "Your message" : "Assistant message"), At(x, "aria-label", I), $s(H, T);
    },
    [
      () => `Sent at ${i(t().timestamp)}`,
      () => i(t().timestamp)
    ]
  ), Y(n, o), en(a);
}
In(Wl, { message: {} }, [], [], !0);
Pc();
var If = /* @__PURE__ */ Q('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Cf = {
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
function Bl(n, e) {
  Jt(e, !1), An(n, Cf), Dd();
  var t = hd(), i = As(t);
  {
    var s = (r) => {
      var a = If();
      Y(r, a);
    };
    ze(i, (r) => {
      P.isTyping && r(s);
    });
  }
  Y(n, t), en();
}
In(Bl, {}, [], [], !0);
var Mf = /* @__PURE__ */ Q('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="empty-icon svelte-qha2j" aria-hidden="true"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div>'), Rf = /* @__PURE__ */ Q('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), Lf = /* @__PURE__ */ Q('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), Of = /* @__PURE__ */ Q('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const Df = {
  hash: "svelte-qha2j",
  code: `.message-list.svelte-qha2j {flex:1;overflow-y:auto;padding:var(--widget-space-lg);display:flex;flex-direction:column;background:var(--widget-gradient-subtle);position:relative;
    /* iOS momentum scrolling */-webkit-overflow-scrolling:touch;}.empty-state.svelte-qha2j {display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:var(--widget-space-3xl) var(--widget-space-lg);
    animation: fadeIn var(--widget-transition-slow);}.empty-icon.svelte-qha2j {width:96px;height:96px;margin-bottom:var(--widget-space-lg);background:#ffffff; /* Always white to match logo background */backdrop-filter:blur(var(--widget-blur));border-radius:var(--widget-radius-2xl);display:flex;align-items:center;justify-content:center;box-shadow:var(--widget-shadow-md);
    animation: svelte-qha2j-float 3s ease-in-out infinite;}

  /* Floating animation for robot logo - creates "hovering assistant" effect */
  @keyframes svelte-qha2j-float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-8px) scale(1.02);
    }
  }.brand-logo.svelte-qha2j {width:68px;height:68px;object-fit:contain;filter:var(--widget-logo-filter, brightness(1));}.brand-name.svelte-qha2j {font-size:var(--widget-font-size-sm);font-weight:var(--widget-font-weight-medium);color:var(--widget-text-secondary);letter-spacing:0.02em;position:relative;
    animation: svelte-qha2j-textPulse 3s ease-in-out infinite;}

  /* Gentle pulse animation synced with floating robot */
  @keyframes svelte-qha2j-textPulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }.messages-container.svelte-qha2j {display:flex;flex-direction:column;gap:var(--widget-space-md);padding-bottom:var(--widget-space-lg);}.error-message.svelte-qha2j {display:flex;align-items:center;gap:var(--widget-space);padding:var(--widget-space) var(--widget-space-md);background:var(--widget-glass);backdrop-filter:blur(var(--widget-blur));border:1px solid var(--widget-error-light);border-radius:var(--widget-radius-lg);color:var(--widget-error);margin-top:var(--widget-space);box-shadow:var(--widget-shadow);
    animation: slideUp var(--widget-transition-slow);}.error-message.svelte-qha2j svg:where(.svelte-qha2j) {width:20px;height:20px;flex-shrink:0;}.error-message.svelte-qha2j p:where(.svelte-qha2j) {margin:0;font-size:var(--widget-font-size-sm);font-weight:500;}
  
  /* Custom scrollbar */.message-list.svelte-qha2j::-webkit-scrollbar {width:6px;}.message-list.svelte-qha2j::-webkit-scrollbar-track {background:transparent;}.message-list.svelte-qha2j::-webkit-scrollbar-thumb {background:var(--widget-border);border-radius:var(--widget-radius-full);}.message-list.svelte-qha2j::-webkit-scrollbar-thumb:hover {background:var(--widget-text-muted);}

  /* Reduced motion support - respects user accessibility preferences */
  @media (prefers-reduced-motion: reduce) {.empty-icon.svelte-qha2j,
    .empty-state.svelte-qha2j,
    .brand-name.svelte-qha2j {
      animation: none;}
  }

  /* Dark theme adjustments - Use CSS variables for maintainability */
  /* Note: .empty-icon stays white in dark mode to match logo's baked-in white background.
     This creates a clean, intentional "logo badge" appearance. */[data-theme="dark"] .empty-icon.svelte-qha2j {box-shadow:var(--widget-shadow-md);}[data-theme="dark"] .brand-name.svelte-qha2j {color:var(--widget-text-muted);}`
};
function jl(n, e) {
  Jt(e, !0), An(n, Df);
  let t, i = !0;
  Xt(() => {
    P.messages, i && s();
  }), Xt(() => {
    P.isTyping, i && s();
  }), Xt(() => {
    P.streamingUpdateSignal, i && P.isStreaming && s();
  });
  async function s() {
    await al(), t && (t.scrollTop = t.scrollHeight);
  }
  function r() {
    if (t) {
      const { scrollTop: g, scrollHeight: p, clientHeight: m } = t;
      i = p - g - m < 100;
    }
  }
  ra(() => {
    s();
  });
  var a = Of(), o = ie(a);
  {
    var l = (g) => {
      var p = Mf(), m = ie(p), w = ie(m);
      ne(m), Yr(2), ne(p), St(() => At(w, "src", Jd)), Y(g, p);
    }, c = (g) => {
      var p = Rf(), m = ie(p);
      bd(m, 17, () => P.messages, (b) => b.id, (b, x) => {
        Wl(b, {
          get message() {
            return _(x);
          }
        });
      });
      var w = de(m, 2);
      Bl(w, {}), ne(p), Y(g, p);
    };
    ze(o, (g) => {
      P.messages.length === 0 ? g(l) : g(c, !1);
    });
  }
  var u = de(o, 2);
  {
    var h = (g) => {
      var p = Lf(), m = de(ie(p), 2), w = ie(m, !0);
      ne(m), ne(p), St(() => $s(w, P.error)), Y(g, p);
    };
    ze(u, (g) => {
      P.error && g(h);
    });
  }
  ne(a), sa(a, (g) => t = g, () => t), ud("scroll", a, r), Y(n, a), en();
}
In(jl, {}, [], [], !0);
var Nf = /* @__PURE__ */ Q('<div class="input-bar svelte-1a8gd73"><div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const $f = {
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

  /* AI Disclaimer */.ai-disclaimer.svelte-1a8gd73 {padding:var(--widget-space-xs) var(--widget-space-sm);text-align:center;font-size:var(--widget-font-size-xs);color:var(--widget-text-subtle);opacity:0.8;user-select:none;pointer-events:none;margin-top:var(--widget-space-xs);}[data-theme="dark"] .ai-disclaimer.svelte-1a8gd73 {color:var(--widget-text-muted);opacity:0.7;}

  @media (max-width: 767px) {.ai-disclaimer.svelte-1a8gd73 {font-size:0.6875rem; /* 11px */}
  }`
};
function Vl(n, e) {
  Jt(e, !0), An(n, $f);
  let t = Zt(e, "onsend", 7), i = Zt(e, "disabled", 7, !1), s = /* @__PURE__ */ z(""), r;
  function a() {
    var H, I, T, R;
    const b = wt().generate();
    G.log("InputBar", "handleSend() called", {
      correlationId: b,
      rawInputValue: _(s),
      rawLength: ((H = _(s)) == null ? void 0 : H.length) || 0,
      rawType: typeof _(s),
      disabled: i(),
      isTyping: P.isTyping
    });
    const x = _(s).trim();
    G.log("InputBar", "After trimming", {
      correlationId: b,
      original: _(s),
      trimmed: x,
      originalLength: ((I = _(s)) == null ? void 0 : I.length) || 0,
      trimmedLength: (x == null ? void 0 : x.length) || 0,
      wasEmptyAfterTrim: !x,
      hadWhitespaceOnly: (((T = _(s)) == null ? void 0 : T.length) || 0) > 0 && !x
    }), x && !i() && !P.isTyping ? (G.log("InputBar", "Conditions met, calling onsend", {
      correlationId: b,
      trimmedValue: x,
      trimmedLength: x.length,
      willSend: !0
    }), wt().setCurrent(b), (R = t()) == null || R(x), L(s, ""), l()) : G.log("InputBar", "Send blocked", {
      correlationId: b,
      hasContent: !!x,
      disabled: i(),
      isTyping: P.isTyping,
      trimmedValue: x || "(empty)",
      reason: x ? i() ? "disabled" : P.isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function o(b) {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), a());
  }
  function l() {
    r && (r.style.height = "auto", r.style.height = Math.min(r.scrollHeight, 120) + "px");
  }
  const c = /* @__PURE__ */ Ue(() => i() || P.isTyping || P.error !== null), u = /* @__PURE__ */ Ue(() => P.isTyping ? "Waiting for response..." : P.error ? "Error occurred" : Kt.placeholder);
  var h = {
    get onsend() {
      return t();
    },
    set onsend(b) {
      t(b), kt();
    },
    get disabled() {
      return i();
    },
    set disabled(b = !1) {
      i(b), kt();
    }
  }, g = Nf(), p = ie(g), m = ie(p);
  Xc(m), m.__keydown = o, m.__input = l, sa(m, (b) => r = b, () => r);
  var w = de(m, 2);
  return w.__click = a, ne(p), Yr(2), ne(g), St(
    (b) => {
      At(m, "placeholder", _(u)), m.disabled = _(c), w.disabled = b;
    },
    [() => _(c) || !_(s).trim()]
  ), Od(m, () => _(s), (b) => L(s, b)), Y(n, g), en(h);
}
Xs(["keydown", "input", "click"]);
In(Vl, { onsend: {}, disabled: {} }, [], [], !0);
class Pf {
  constructor(e, t) {
    this.sessionId = null, this.config = e, this.visitor = t, this.debugLogger = oa(e.getAll());
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), t = setTimeout(() => e.abort(), pe.API_TIMEOUT), i = Fi.getApiUrl("init", {
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
      const r = wt().getCurrent(), a = await fetch(i, {
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
          throw new Wn(
            `Rate limit exceeded. Please try again in ${c} seconds.`,
            c
          );
        }
        throw new qn(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          i
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof Wi || e instanceof qn || e instanceof Wn)
        throw e;
      const t = Bi.handle(e, {
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
    const t = wt().getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: t,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const r = au.validate(e);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: t,
        input: e,
        isValid: r.isValid,
        error: r.error,
        sanitizedValue: r.sanitizedValue,
        sanitizedLength: ((i = r.sanitizedValue) == null ? void 0 : i.length) || 0,
        contentChanged: e !== r.sanitizedValue
      }), !r.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: t, error: r.error }), new Wi(r.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: t }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), pe.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: r.sanitizedValue
        }
      }, c = Fi.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: t,
        url: c,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((s = l.body.message) == null ? void 0 : s.length) || 0
      });
      const u = await fetch(c, {
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
        ok: u.ok,
        status: u.status,
        statusText: u.statusText
      }), !u.ok) {
        if (u.status === 429) {
          const g = u.headers.get("Retry-After"), p = g ? parseInt(g, 10) : 60;
          throw new Wn(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new qn(
          `Failed to send message: ${u.statusText}`,
          u.status,
          c
        );
      }
      const h = await u.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: t, result: h }), h;
    } catch (r) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: t, error: r }), r instanceof Wi || r instanceof qn || r instanceof Wn)
        throw r;
      const a = Bi.handle(r, {
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), pe.API_TIMEOUT), i = Fi.getApiUrl("sessionHealth", {
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
      const r = wt().getCurrent(), a = await fetch(i, {
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
      const e = new AbortController(), t = setTimeout(() => e.abort(), pe.API_TIMEOUT), i = Fi.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), s = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, r = wt().getCurrent(), a = await fetch(i, {
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
      const t = Bi.handle(e, {
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
class zf {
  constructor(e, t, i) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = pe.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = t, this.debugLogger = i;
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
    const t = Kt.initialMessage, i = e.data.initial_message;
    let s;
    t !== void 0 ? s = t || void 0 : s = i, s && !this.chatStore.hasMessages && (this.chatStore.addMessage(s, "assistant"), this.debugLogger.log("ChatController", "Initial message added", {
      source: t !== void 0 ? "client" : "server"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, t = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && t > pe.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, pe.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = pe.TYPING_FALLBACK_TIMEOUT) {
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
var Uf = /* @__PURE__ */ Q('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Ff = /* @__PURE__ */ Q('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Hf = /* @__PURE__ */ Q('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), qf = /* @__PURE__ */ Q('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Wf = /* @__PURE__ */ Q('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div class="chat-container svelte-zsv8oa" role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Bf = /* @__PURE__ */ Q('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const jf = {
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
function Gl(n, e) {
  Jt(e, !0), An(n, jf);
  let t = Zt(e, "hostElement", 7), i, s, r, a, o, l;
  const c = wt();
  let u = !1, h = !1, g = null, p = /* @__PURE__ */ z(he(ye.DISCONNECTED)), m = /* @__PURE__ */ z(
    !1
    // Track if max reconnection attempts exhausted
  ), w = /* @__PURE__ */ z(null), b = null;
  function x() {
    var N;
    if ((N = t()) != null && N.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && t() && t().setAttribute("data-theme", "dark");
  }
  function H(v) {
    const N = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), C = v.querySelectorAll(N);
    if (C.length === 0) return;
    const X = C[0], lt = C[C.length - 1];
    return requestAnimationFrame(() => X.focus()), { firstFocusable: X, lastFocusable: lt };
  }
  function I(v) {
    if (v.key === "Escape" && ee.isOpen) {
      v.preventDefault(), ee.close(), R();
      return;
    }
    if (v.key === "Tab" && _(w)) {
      const N = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), C = _(w).querySelectorAll(N);
      if (C.length === 0) return;
      const X = C[0], lt = C[C.length - 1];
      v.shiftKey && document.activeElement === X ? (v.preventDefault(), lt.focus()) : !v.shiftKey && document.activeElement === lt && (v.preventDefault(), X.focus());
    }
  }
  function T() {
    b = document.activeElement;
  }
  function R() {
    b && typeof b.focus == "function" && requestAnimationFrame(() => b == null ? void 0 : b.focus()), b = null;
  }
  function ce() {
    _(w) && H(_(w));
  }
  ra(async () => {
    try {
      if (i = new du(t()), l = oa(i.getAll()), s = new $r(), r = new Pf(i, s), a = new pu(i, s), o = new zf(P, ee, l), t()) {
        const { configStore: v } = await Promise.resolve().then(() => Kd);
        v.loadFromAttributes(t());
      }
      re(), x(), l.log("ChatWidget", "Attaching WebSocket listeners"), a.on("message", xi), a.on("stateChange", (v) => {
        l.log("ChatWidget", "WebSocket state changed", {
          oldState: _(p),
          newState: v,
          timestamp: Date.now()
        }), L(p, v, !0);
      }), a.on("error", (v) => {
        l.error("ChatWidget", "WebSocket error event", v), g = v.error, P.setError(v.error);
      }), a.on("connectionFailed", (v) => {
        l.error("ChatWidget", "WebSocket connection failed after max attempts", v), L(m, !0), g = v.error, P.setError(v.error);
      }), l.log("ChatWidget", "WebSocket listeners attached successfully"), ee.isOpen && await xe(), t() && typeof t().setOnOpenChangeCallback == "function" && t().setOnOpenChangeCallback((v) => {
        Mn(v);
      }), l.log("ChatWidget", "Services initialized successfully");
    } catch (v) {
      l.error("ChatWidget", "Initialization failed", v), g = v instanceof Error ? v.message : "Failed to initialize chat";
    }
  }), Xt(() => {
    const v = ee.isOpen;
    if (t()) {
      const N = t().hasAttribute("open");
      v && !N ? t().setAttribute("open", "") : !v && N && t().removeAttribute("open");
    }
  }), Ud(() => {
    const v = r == null ? void 0 : r.getSessionId();
    v && s.markSessionInactive(v), a == null || a.disconnect(), o == null || o.cleanup();
  });
  async function xe() {
    var v;
    if (!(u || h)) {
      h = !0;
      try {
        if (ee.setLoading(!0), await r.resumeSession()) {
          const C = r.getSessionId();
          C && (await a.connect(C), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after session resumption..."), a.testConnection();
            },
            pe.CONNECTION_DELAY
          ));
        } else {
          const C = await r.initialize();
          (v = C.assistant_info) != null && v.assistant_name && Kt.setBackendTitle(C.assistant_info.assistant_name), await a.connect(C.session_id), setTimeout(
            () => {
              l.log("ChatWidget", "Testing WebSocket connection after initialization..."), a.testConnection();
            },
            pe.CONNECTION_DELAY
          ), C.settings && ue(C.settings);
        }
        u = !0;
      } catch (N) {
        g = N instanceof Error ? N.message : "Failed to initialize", P.setError(g);
      } finally {
        ee.setLoading(!1), h = !1;
      }
    }
  }
  function re() {
    const v = i.getAll();
    requestAnimationFrame(() => {
      if (t() && (t().setAttribute("data-theme", v.theme || "modern"), v.primary_color || v.accent_color)) {
        const N = v.accent_color || v.primary_color;
        if (N) {
          const C = aa(N, "#6b46c1");
          t().style.setProperty("--widget-primary", C), t().style.setProperty("--widget-primary-hover", it(C, -20)), t().style.setProperty("--widget-primary-light", it(C, 20)), t().style.setProperty("--widget-primary-dark", it(C, -30)), t().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${C} 0%, ${it(C, 20)} 100%)`), t().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${it(C, -20)} 0%, ${C} 100%)`);
        }
      }
    });
  }
  function ue(v) {
    requestAnimationFrame(() => {
      t() && (v.theme && typeof v.theme == "string" && t().setAttribute("data-theme", v.theme), v.primary_color && typeof v.primary_color == "string" && t().style.setProperty("--widget-primary", v.primary_color));
    });
  }
  function xi(v) {
    o.handleMessage(v);
  }
  async function fe(v) {
    const N = c.getCurrent();
    l.log("ChatWidget", "handleSendMessage called with content", {
      correlationId: N,
      content: v,
      length: (v == null ? void 0 : v.length) || 0,
      trimmed: (v == null ? void 0 : v.trim()) || "",
      type: typeof v
    });
    const C = P.addMessage(v, "user");
    if (o.resetForNewMessage(), l.log("ChatWidget", "Message added to store", {
      correlationId: N,
      messageId: C.id,
      content: C.content,
      length: C.content.length
    }), u || (l.log("ChatWidget", "Widget not initialized, initializing...", { correlationId: N }), await xe()), l.log("ChatWidget", "Connection state", {
      correlationId: N,
      connectionState: _(p),
      isConnected: _(p) === ye.CONNECTED,
      routingTo: _(p) === ye.CONNECTED ? "WebSocket" : "HTTP API"
    }), _(p) === ye.CONNECTED) {
      l.log("ChatWidget", "Sending via WebSocket", { correlationId: N, content: v });
      try {
        o.setTypingWithTimeout(), a.send(v), P.updateMessageStatus(C.id, "sent"), l.log("ChatWidget", "User message marked as sent", { messageId: C.id });
      } catch (X) {
        l.error("ChatWidget", "WebSocket send error", X), P.updateMessageStatus(C.id, "failed"), P.setError("Failed to send message. Please try again."), P.setTyping(!1);
        return;
      }
    } else
      try {
        l.log("ChatWidget", "Sending via HTTP API", { correlationId: N, content: v }), o.setTypingWithTimeout();
        const X = await r.sendMessage(v);
        l.log("ChatWidget", "HTTP API response received", {
          correlationId: N,
          response: X.response,
          sessionId: X.session_id
        }), P.addMessage(X.response, "assistant"), P.setTyping(!1), ee.isOpen || ee.markUnread();
      } catch (X) {
        l.error("ChatWidget", "HTTP API error", X), g = "Failed to send message. Please try again.", P.setError(g), P.updateMessageStatus(C.id, "failed"), P.setTyping(!1);
      }
  }
  async function Mn(v) {
    const N = ee.isOpen;
    N !== v && (l.log("ChatWidget", "Setting open state", { from: N, to: v }), v && !N && !b && T(), v ? ee.open() : ee.close(), await new Promise((C) => setTimeout(C, 0)), v && !u && i && await xe(), v ? requestAnimationFrame(() => ce()) : R());
  }
  async function Ti() {
    await Mn(!ee.isOpen);
  }
  function Si() {
    P.clearMessages(), P.setError(null), g = null;
  }
  function Qs() {
    l.log("ChatWidget", "Manual retry connection requested"), L(m, !1), g = null, P.setError(null), a == null || a.retryConnection();
  }
  const Ei = /* @__PURE__ */ Ue(() => ee.isOpen), Js = /* @__PURE__ */ Ue(() => ee.isLoading), ls = /* @__PURE__ */ Ue(() => (i == null ? void 0 : i.position) || "bottom-right");
  var er = {
    get hostElement() {
      return t();
    },
    set hostElement(v) {
      t(v), kt();
    }
  }, zt = Bf(), K = ie(zt);
  {
    var cs = (v) => {
      wl(v, { onclick: Ti });
    };
    ze(K, (v) => {
      _(Ei) || v(cs);
    });
  }
  var ae = de(K, 2);
  {
    var ds = (v) => {
      var N = Wf(), C = de(As(N), 2);
      C.__keydown = I;
      var X = ie(C);
      El(X, {
        onclose: () => {
          ee.close(), R();
        },
        get connectionState() {
          return _(p);
        },
        get connectionFailed() {
          return _(m);
        }
      });
      var lt = de(X, 2);
      jl(lt, {});
      var Rn = de(lt, 2);
      {
        let oe = /* @__PURE__ */ Ue(() => P.error !== null || _(Js));
        Vl(Rn, {
          onsend: fe,
          get disabled() {
            return _(oe);
          }
        });
      }
      var us = de(Rn, 2);
      {
        var fs = (oe) => {
          var Ke = Hf(), Ai = ie(Ke);
          {
            var Ft = (Qe) => {
              var Ht = Uf(), Dn = de(As(Ht), 2);
              Dn.__click = Qs, Y(Qe, Ht);
            }, On = (Qe) => {
              var Ht = Ff(), Dn = de(As(Ht), 2);
              Dn.__click = Si, Y(Qe, Ht);
            };
            ze(Ai, (Qe) => {
              _(m) ? Qe(Ft) : Qe(On, !1);
            });
          }
          ne(Ke), Y(oe, Ke);
        };
        ze(us, (oe) => {
          P.error && oe(fs);
        });
      }
      ne(C), sa(C, (oe) => L(w, oe), () => _(w));
      var Ut = de(C, 2);
      {
        var Ln = (oe) => {
          var Ke = qf();
          Ke.__click = () => ee.close(), qa(3, Ke, () => Bd, () => ({ duration: 200 })), Y(oe, Ke);
        };
        ze(Ut, (oe) => {
          _(Ei) && oe(Ln);
        });
      }
      qa(3, C, () => jd, () => ({ y: 20, duration: 300 })), Y(v, N);
    };
    ze(ae, (v) => {
      _(Ei) && v(ds);
    });
  }
  return ne(zt), St(() => {
    At(zt, "data-position", _(ls)), At(zt, "data-theme", Kt.theme);
  }), Y(n, zt), en(er);
}
Xs(["keydown", "click"]);
In(Gl, { hostElement: {} }, [], [], !0);
const pa = {
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
}, qr = {
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
function Vf(n = pa) {
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
function Gf(n = pa) {
  return Vf(n);
}
const Yl = {
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
}, uo = Yl, fo = {
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
}, Yf = {
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
}, Xf = {
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
}, Zf = {
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
}, Kf = {
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
function Qf(n) {
  return {
    "bot-brewers": qr,
    modern: Yl,
    professional: uo,
    corporate: uo,
    // Alias for backward compatibility
    friendly: fo,
    playful: fo,
    // Alias
    minimal: Yf,
    dark: Xf,
    elegant: Zf,
    bold: Kf,
    generic: pa,
    default: qr
  }[n.toLowerCase()] || null;
}
class go extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "open"];
  }
  async connectedCallback() {
    var s, r;
    const e = this.getAttribute("client-id"), t = window, i = ((s = t.AIChat) == null ? void 0 : s.clientId) || ((r = t.ChatWidget) == null ? void 0 : r.clientId);
    if (!e && !i) {
      G.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (Lr(this._app), this._app = null);
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && ((e === "theme" || e === "data-theme") && i && (this._currentTheme = i, Kt.updateConfig({ theme: i }, "user"), this.updateStyles()), e === "accent-color" && i && this.updateAccentColor(i), e === "client-id" && i && this._app && (G.log("ChatWidget", `Client ID changed from ${t} to ${i}, remounting widget`), Lr(this._app), this._app = null, this.mountApp()), e === "title" && i && Kt.setUserTitle(i), e === "open")) {
      const s = i !== null;
      this._onOpenChangeCallback ? this._onOpenChangeCallback(s) : this._pendingOpenState = s;
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
    i.textContent = this.getStyles(), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(i), this._shadowRoot.appendChild(t), this._app = na(Gl, {
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
    const t = Qf(e) || qr;
    return Gf(t);
  }
  updateStyles() {
    const e = this._shadowRoot.querySelector("style");
    e && (e.textContent = this.getStyles());
  }
  updateAccentColor(e) {
    const t = this._shadowRoot.querySelector(".widget-root");
    t && Promise.resolve().then(() => Xd).then(({ adjustColor: i }) => {
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
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", go) : customElements.define("assistant-widget", go);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ho) : ho();
function ho() {
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
  go as ChatWidgetElement
};
