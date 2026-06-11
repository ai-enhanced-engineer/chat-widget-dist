var Lo = Object.defineProperty;
var es = (t) => {
  throw TypeError(t);
};
var Oo = (t, e, i) => e in t ? Lo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var oe = (t, e, i) => Oo(t, typeof e != "symbol" ? e + "" : e, i), dn = (t, e, i) => e.has(t) || es("Cannot " + i);
var u = (t, e, i) => (dn(t, e, "read from private field"), i ? i.call(t) : e.get(t)), I = (t, e, i) => e.has(t) ? es("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), C = (t, e, i, r) => (dn(t, e, "write to private field"), r ? r.call(t, i) : e.set(t, i), i), re = (t, e, i) => (dn(t, e, "access private method"), i);
var Ts = Array.isArray, Ro = Array.prototype.indexOf, Qr = Array.from, $r = Object.keys, Ur = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, No = Object.getOwnPropertyDescriptors, qo = Object.prototype, Do = Array.prototype, Es = Object.getPrototypeOf, ts = Object.isExtensible;
function Po(t) {
  return typeof t == "function";
}
const sr = () => {
};
function zo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Is() {
  var t, e, i = new Promise((r, n) => {
    t = r, e = n;
  });
  return { promise: i, resolve: t, reject: e };
}
const ve = 2, Mn = 4, Ln = 8, $o = 1 << 24, vt = 16, Et = 32, zt = 64, Xr = 128, it = 512, be = 1024, Pe = 2048, ht = 4096, qe = 8192, Ct = 16384, Tr = 32768, ti = 65536, is = 1 << 17, As = 1 << 18, ai = 1 << 19, Uo = 1 << 20, kt = 1 << 25, ii = 32768, hn = 1 << 21, On = 1 << 22, Nt = 1 << 23, ur = Symbol("$state"), Ms = Symbol("legacy props"), jo = Symbol(""), vi = new class extends Error {
  constructor() {
    super(...arguments);
    oe(this, "name", "StaleReactionError");
    oe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Kr = 3, oi = 8;
function Ls(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Wo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fo(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ho() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bo(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Go() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Yo(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ko() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Jo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Zo = 1, el = 2, Os = 4, tl = 8, il = 16, rl = 1, nl = 4, sl = 8, al = 16, ol = 4, Rs = 1, ll = 2, Ns = "[", Jr = "[!", Rn = "]", ri = {}, we = Symbol(), dl = "http://www.w3.org/1999/xhtml";
function Er(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function cl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let U = !1;
function St(t) {
  U = t;
}
let P;
function ye(t) {
  if (t === null)
    throw Er(), ri;
  return P = t;
}
function Yi() {
  return ye(/* @__PURE__ */ rt(P));
}
function V(t) {
  if (U) {
    if (/* @__PURE__ */ rt(P) !== null)
      throw Er(), ri;
    P = t;
  }
}
function vr(t = 1) {
  if (U) {
    for (var e = t, i = P; e--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ rt(i);
    P = i;
  }
}
function jr(t = !0) {
  for (var e = 0, i = P; ; ) {
    if (i.nodeType === oi) {
      var r = (
        /** @type {Comment} */
        i.data
      );
      if (r === Rn) {
        if (e === 0) return i;
        e -= 1;
      } else (r === Ns || r === Jr) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rt(i)
    );
    t && i.remove(), i = n;
  }
}
function qs(t) {
  if (!t || t.nodeType !== oi)
    throw Er(), ri;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Ds(t) {
  return t === this.v;
}
function ul(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ps(t) {
  return !ul(t, this.v);
}
let Ie = null;
function Qi(t) {
  Ie = t;
}
function Ye(t, e = !1, i) {
  Ie = {
    p: Ie,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Qe(t) {
  var e = (
    /** @type {ComponentContext} */
    Ie
  ), i = e.e;
  if (i !== null) {
    e.e = null;
    for (var r of i)
      aa(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Ie = e.p, t ?? /** @type {T} */
  {};
}
function zs() {
  return !0;
}
let Ht = [];
function $s() {
  var t = Ht;
  Ht = [], zo(t);
}
function $t(t) {
  if (Ht.length === 0 && !gr) {
    var e = Ht;
    queueMicrotask(() => {
      e === Ht && $s();
    });
  }
  Ht.push(t);
}
function gl() {
  for (; Ht.length > 0; )
    $s();
}
function Us(t) {
  var e = X;
  if (e === null)
    return B.f |= Nt, t;
  if (e.f & Tr)
    Xi(t, e);
  else {
    if (!(e.f & Xr))
      throw t;
    e.b.error(t);
  }
}
function Xi(t, e) {
  for (; e !== null; ) {
    if (e.f & Xr)
      try {
        e.b.error(t);
        return;
      } catch (i) {
        t = i;
      }
    e = e.parent;
  }
  throw t;
}
const Lr = /* @__PURE__ */ new Set();
let W = null, Nr = null, de = null, Be = [], Zr = null, fn = !1, gr = !1;
var yi, xi, Bt, Vt, _r, _i, ki, pe, pn, or, vn, js, Ws;
const Vr = class Vr {
  constructor() {
    I(this, pe);
    oe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    oe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    oe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    I(this, yi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, xi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, Bt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, Vt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, _r, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, _i, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, ki, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    oe(this, "skipped_effects", /* @__PURE__ */ new Set());
    oe(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || u(this, Vt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var r;
    Be = [], Nr = null, this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const n of e)
      re(this, pe, pn).call(this, n, i);
    this.is_fork || re(this, pe, js).call(this), this.is_deferred() ? (re(this, pe, or).call(this, i.effects), re(this, pe, or).call(this, i.render_effects)) : (Nr = this, W = null, rs(i.render_effects), rs(i.effects), Nr = null, (r = u(this, _r)) == null || r.resolve()), de = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, i) {
    this.previous.has(e) || this.previous.set(e, i), e.f & Nt || (this.current.set(e, e.v), de == null || de.set(e, e.v));
  }
  activate() {
    W = this, this.apply();
  }
  deactivate() {
    W === this && (W = null, de = null);
  }
  flush() {
    if (this.activate(), Be.length > 0) {
      if (Fs(), W !== null && W !== this)
        return;
    } else u(this, Bt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of u(this, xi)) e(this);
    u(this, xi).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    C(this, Bt, u(this, Bt) + 1), e && C(this, Vt, u(this, Vt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    C(this, Bt, u(this, Bt) - 1), e && C(this, Vt, u(this, Vt) - 1), this.revive();
  }
  revive() {
    for (const e of u(this, _i))
      u(this, ki).delete(e), xe(e, Pe), ni(e);
    for (const e of u(this, ki))
      xe(e, ht), ni(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    u(this, yi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    u(this, xi).add(e);
  }
  settled() {
    return (u(this, _r) ?? C(this, _r, Is())).promise;
  }
  static ensure() {
    if (W === null) {
      const e = W = new Vr();
      Lr.add(W), gr || Vr.enqueue(() => {
        W === e && e.flush();
      });
    }
    return W;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    $t(e);
  }
  apply() {
  }
};
yi = new WeakMap(), xi = new WeakMap(), Bt = new WeakMap(), Vt = new WeakMap(), _r = new WeakMap(), _i = new WeakMap(), ki = new WeakMap(), pe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
pn = function(e, i) {
  var c;
  e.f ^= be;
  for (var r = e.first; r !== null; ) {
    var n = r.f, s = (n & (Et | zt)) !== 0, a = s && (n & be) !== 0, o = a || (n & qe) !== 0 || this.skipped_effects.has(r);
    if (r.f & Xr && ((c = r.b) != null && c.is_pending()) && (i = {
      parent: i,
      effect: r,
      effects: [],
      render_effects: []
    }), !o && r.fn !== null) {
      s ? r.f ^= be : n & Mn ? i.effects.push(r) : Ir(r) && (r.f & vt && u(this, _i).add(r), br(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var d = r.parent;
    for (r = r.next; r === null && d !== null; )
      d === i.effect && (re(this, pe, or).call(this, i.effects), re(this, pe, or).call(this, i.render_effects), i = /** @type {EffectTarget} */
      i.parent), r = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
or = function(e) {
  for (const i of e)
    i.f & Pe ? u(this, _i).add(i) : i.f & ht && u(this, ki).add(i), re(this, pe, vn).call(this, i.deps), xe(i, be);
}, /**
 * @param {Value[] | null} deps
 */
vn = function(e) {
  if (e !== null)
    for (const i of e)
      !(i.f & ve) || !(i.f & ii) || (i.f ^= ii, re(this, pe, vn).call(
        this,
        /** @type {Derived} */
        i.deps
      ));
}, js = function() {
  if (u(this, Vt) === 0) {
    for (const e of u(this, yi)) e();
    u(this, yi).clear();
  }
  u(this, Bt) === 0 && re(this, pe, Ws).call(this);
}, Ws = function() {
  var s;
  if (Lr.size > 1) {
    this.previous.clear();
    var e = de, i = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Lr) {
      if (a === this) {
        i = !1;
        continue;
      }
      const o = [];
      for (const [d, c] of this.current) {
        if (a.current.has(d))
          if (i && c !== a.current.get(d))
            a.current.set(d, c);
          else
            continue;
        o.push(d);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((d) => !this.current.has(d));
      if (l.length > 0) {
        var n = Be;
        Be = [];
        const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
        for (const g of o)
          Hs(g, l, d, c);
        if (Be.length > 0) {
          W = a, a.apply();
          for (const g of Be)
            re(s = a, pe, pn).call(s, g, r);
          a.deactivate();
        }
        Be = n;
      }
    }
    W = null, de = e;
  }
  this.committed = !0, Lr.delete(this);
};
let ut = Vr;
function R(t) {
  var e = gr;
  gr = !0;
  try {
    for (var i; ; ) {
      if (gl(), Be.length === 0 && (W == null || W.flush(), Be.length === 0))
        return Zr = null, /** @type {T} */
        i;
      Fs();
    }
  } finally {
    gr = e;
  }
}
function Fs() {
  var t = Zt;
  fn = !0;
  var e = null;
  try {
    var i = 0;
    for (Fr(!0); Be.length > 0; ) {
      var r = ut.ensure();
      if (i++ > 1e3) {
        var n, s;
        hl();
      }
      r.process(Be), qt.clear();
    }
  } finally {
    fn = !1, Fr(t), Zr = null;
  }
}
function hl() {
  try {
    Vo();
  } catch (t) {
    Xi(t, Zr);
  }
}
let Ze = null;
function rs(t) {
  var e = t.length;
  if (e !== 0) {
    for (var i = 0; i < e; ) {
      var r = t[i++];
      if (!(r.f & (Ct | qe)) && Ir(r) && (Ze = /* @__PURE__ */ new Set(), br(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ca(r) : r.fn = null), (Ze == null ? void 0 : Ze.size) > 0)) {
        qt.clear();
        for (const n of Ze) {
          if (n.f & (Ct | qe)) continue;
          const s = [n];
          let a = n.parent;
          for (; a !== null; )
            Ze.has(a) && (Ze.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            l.f & (Ct | qe) || br(l);
          }
        }
        Ze.clear();
      }
    }
    Ze = null;
  }
}
function Hs(t, e, i, r) {
  if (!i.has(t) && (i.add(t), t.reactions !== null))
    for (const n of t.reactions) {
      const s = n.f;
      s & ve ? Hs(
        /** @type {Derived} */
        n,
        e,
        i,
        r
      ) : s & (On | vt) && !(s & Pe) && Bs(n, e, r) && (xe(n, Pe), ni(
        /** @type {Effect} */
        n
      ));
    }
}
function Bs(t, e, i) {
  const r = i.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const n of t.deps) {
      if (e.includes(n))
        return !0;
      if (n.f & ve && Bs(
        /** @type {Derived} */
        n,
        e,
        i
      ))
        return i.set(
          /** @type {Derived} */
          n,
          !0
        ), !0;
    }
  return i.set(t, !1), !1;
}
function ni(t) {
  for (var e = Zr = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if (fn && e === X && i & vt && !(i & As))
      return;
    if (i & (zt | Et)) {
      if (!(i & be)) return;
      e.f ^= be;
    }
  }
  Be.push(e);
}
function fl(t) {
  let e = 0, i = si(0), r;
  return () => {
    mr() && (f(i), tn(() => (e === 0 && (r = di(() => t(() => hr(i)))), e += 1, () => {
      $t(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, hr(i));
      });
    })));
  };
}
var pl = ti | ai | Xr;
function vl(t, e, i) {
  new ml(t, e, i);
}
var We, Re, kr, ot, Gt, lt, Fe, Ce, dt, yt, Lt, Yt, Ot, Qt, Rt, Gr, ue, Vs, Gs, mn, qr, Dr, wn;
class ml {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, i, r) {
    I(this, ue);
    /** @type {Boundary | null} */
    oe(this, "parent");
    I(this, We, !1);
    /** @type {TemplateNode} */
    I(this, Re);
    /** @type {TemplateNode | null} */
    I(this, kr, U ? P : null);
    /** @type {BoundaryProps} */
    I(this, ot);
    /** @type {((anchor: Node) => void)} */
    I(this, Gt);
    /** @type {Effect} */
    I(this, lt);
    /** @type {Effect | null} */
    I(this, Fe, null);
    /** @type {Effect | null} */
    I(this, Ce, null);
    /** @type {Effect | null} */
    I(this, dt, null);
    /** @type {DocumentFragment | null} */
    I(this, yt, null);
    /** @type {TemplateNode | null} */
    I(this, Lt, null);
    I(this, Yt, 0);
    I(this, Ot, 0);
    I(this, Qt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, Rt, null);
    I(this, Gr, fl(() => (C(this, Rt, si(u(this, Yt))), () => {
      C(this, Rt, null);
    })));
    C(this, Re, e), C(this, ot, i), C(this, Gt, r), this.parent = /** @type {Effect} */
    X.b, C(this, We, !!u(this, ot).pending), C(this, lt, Pn(() => {
      if (X.b = this, U) {
        const s = u(this, kr);
        Yi(), /** @type {Comment} */
        s.nodeType === oi && /** @type {Comment} */
        s.data === Jr ? re(this, ue, Gs).call(this) : re(this, ue, Vs).call(this);
      } else {
        var n = re(this, ue, mn).call(this);
        try {
          C(this, Fe, Ve(() => r(n)));
        } catch (s) {
          this.error(s);
        }
        u(this, Ot) > 0 ? re(this, ue, Dr).call(this) : C(this, We, !1);
      }
      return () => {
        var s;
        (s = u(this, Lt)) == null || s.remove();
      };
    }, pl)), U && C(this, Re, P);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return u(this, We) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!u(this, ot).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    re(this, ue, wn).call(this, e), C(this, Yt, u(this, Yt) + e), u(this, Rt) && Ki(u(this, Rt), u(this, Yt));
  }
  get_effect_pending() {
    return u(this, Gr).call(this), f(
      /** @type {Source<number>} */
      u(this, Rt)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var i = u(this, ot).onerror;
    let r = u(this, ot).failed;
    if (u(this, Qt) || !i && !r)
      throw e;
    u(this, Fe) && (ke(u(this, Fe)), C(this, Fe, null)), u(this, Ce) && (ke(u(this, Ce)), C(this, Ce, null)), u(this, dt) && (ke(u(this, dt)), C(this, dt, null)), U && (ye(
      /** @type {TemplateNode} */
      u(this, kr)
    ), vr(), ye(jr()));
    var n = !1, s = !1;
    const a = () => {
      if (n) {
        cl();
        return;
      }
      n = !0, s && Jo(), ut.ensure(), C(this, Yt, 0), u(this, dt) !== null && Jt(u(this, dt), () => {
        C(this, dt, null);
      }), C(this, We, this.has_pending_snippet()), C(this, Fe, re(this, ue, qr).call(this, () => (C(this, Qt, !1), Ve(() => u(this, Gt).call(this, u(this, Re)))))), u(this, Ot) > 0 ? re(this, ue, Dr).call(this) : C(this, We, !1);
    };
    var o = B;
    try {
      Te(null), s = !0, i == null || i(e, a), s = !1;
    } catch (l) {
      Xi(l, u(this, lt) && u(this, lt).parent);
    } finally {
      Te(o);
    }
    r && $t(() => {
      C(this, dt, re(this, ue, qr).call(this, () => {
        ut.ensure(), C(this, Qt, !0);
        try {
          return Ve(() => {
            r(
              u(this, Re),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return Xi(
            l,
            /** @type {Effect} */
            u(this, lt).parent
          ), null;
        } finally {
          C(this, Qt, !1);
        }
      }));
    });
  }
}
We = new WeakMap(), Re = new WeakMap(), kr = new WeakMap(), ot = new WeakMap(), Gt = new WeakMap(), lt = new WeakMap(), Fe = new WeakMap(), Ce = new WeakMap(), dt = new WeakMap(), yt = new WeakMap(), Lt = new WeakMap(), Yt = new WeakMap(), Ot = new WeakMap(), Qt = new WeakMap(), Rt = new WeakMap(), Gr = new WeakMap(), ue = new WeakSet(), Vs = function() {
  try {
    C(this, Fe, Ve(() => u(this, Gt).call(this, u(this, Re))));
  } catch (e) {
    this.error(e);
  }
  C(this, We, !1);
}, Gs = function() {
  const e = u(this, ot).pending;
  e && (C(this, Ce, Ve(() => e(u(this, Re)))), ut.enqueue(() => {
    var i = re(this, ue, mn).call(this);
    C(this, Fe, re(this, ue, qr).call(this, () => (ut.ensure(), Ve(() => u(this, Gt).call(this, i))))), u(this, Ot) > 0 ? re(this, ue, Dr).call(this) : (Jt(
      /** @type {Effect} */
      u(this, Ce),
      () => {
        C(this, Ce, null);
      }
    ), C(this, We, !1));
  }));
}, mn = function() {
  var e = u(this, Re);
  return u(this, We) && (C(this, Lt, Ee()), u(this, Re).before(u(this, Lt)), e = u(this, Lt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
qr = function(e) {
  var i = X, r = B, n = Ie;
  ft(u(this, lt)), Te(u(this, lt)), Qi(u(this, lt).ctx);
  try {
    return e();
  } catch (s) {
    return Us(s), null;
  } finally {
    ft(i), Te(r), Qi(n);
  }
}, Dr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    u(this, ot).pending
  );
  u(this, Fe) !== null && (C(this, yt, document.createDocumentFragment()), u(this, yt).append(
    /** @type {TemplateNode} */
    u(this, Lt)
  ), ha(u(this, Fe), u(this, yt))), u(this, Ce) === null && C(this, Ce, Ve(() => e(u(this, Re))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
wn = function(e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && re(i = this.parent, ue, wn).call(i, e);
    return;
  }
  C(this, Ot, u(this, Ot) + e), u(this, Ot) === 0 && (C(this, We, !1), u(this, Ce) && Jt(u(this, Ce), () => {
    C(this, Ce, null);
  }), u(this, yt) && (u(this, Re).before(u(this, yt)), C(this, yt, null)));
};
function wl(t, e, i, r) {
  const n = en;
  if (i.length === 0 && t.length === 0) {
    r(e.map(n));
    return;
  }
  var s = W, a = (
    /** @type {Effect} */
    X
  ), o = bl();
  function l() {
    Promise.all(i.map((d) => /* @__PURE__ */ yl(d))).then((d) => {
      o();
      try {
        r([...e.map(n), ...d]);
      } catch (c) {
        a.f & Ct || Xi(c, a);
      }
      s == null || s.deactivate(), Wr();
    }).catch((d) => {
      Xi(d, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), Wr();
    }
  }) : l();
}
function bl() {
  var t = X, e = B, i = Ie, r = W;
  return function(s = !0) {
    ft(t), Te(e), Qi(i), s && (r == null || r.activate());
  };
}
function Wr() {
  ft(null), Te(null), Qi(null);
}
// @__NO_SIDE_EFFECTS__
function en(t) {
  var e = ve | Pe, i = B !== null && B.f & ve ? (
    /** @type {Derived} */
    B
  ) : null;
  return X !== null && (X.f |= ai), {
    ctx: Ie,
    deps: null,
    effects: null,
    equals: Ds,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      we
    ),
    wv: 0,
    parent: i ?? X,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yl(t, e) {
  let i = (
    /** @type {Effect | null} */
    X
  );
  i === null && Wo();
  var r = (
    /** @type {Boundary} */
    i.b
  ), n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = si(
    /** @type {V} */
    we
  ), a = !B, o = /* @__PURE__ */ new Map();
  return Al(() => {
    var v;
    var l = Is();
    n = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === W && d.committed && d.deactivate(), Wr();
      });
    } catch (p) {
      l.reject(p), Wr();
    }
    var d = (
      /** @type {Batch} */
      W
    );
    if (a) {
      var c = !r.is_pending();
      r.update_pending_count(1), d.increment(c), (v = o.get(d)) == null || v.reject(vi), o.delete(d), o.set(d, l);
    }
    const g = (p, k = void 0) => {
      if (d.activate(), k)
        k !== vi && (s.f |= Nt, Ki(s, k));
      else {
        s.f & Nt && (s.f ^= Nt), Ki(s, p);
        for (const [x, h] of o) {
          if (o.delete(x), x === d) break;
          h.reject(vi);
        }
      }
      a && (r.update_pending_count(-1), d.decrement(c));
    };
    l.promise.then(g, (p) => g(null, p || "unknown"));
  }), sa(() => {
    for (const l of o.values())
      l.reject(vi);
  }), new Promise((l) => {
    function d(c) {
      function g() {
        c === n ? l(s) : d(n);
      }
      c.then(g, g);
    }
    d(n);
  });
}
// @__NO_SIDE_EFFECTS__
function ee(t) {
  const e = /* @__PURE__ */ en(t);
  return fa(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ys(t) {
  const e = /* @__PURE__ */ en(t);
  return e.equals = Ps, e;
}
function Qs(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      ke(
        /** @type {Effect} */
        e[i]
      );
  }
}
function xl(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & ve))
      return e.f & Ct ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Nn(t) {
  var e, i = X;
  ft(xl(t));
  try {
    t.f &= ~ii, Qs(t), e = wa(t);
  } finally {
    ft(i);
  }
  return e;
}
function Xs(t) {
  var e = Nn(t);
  if (t.equals(e) || (W != null && W.is_fork || (t.v = e), t.wv = va()), !li)
    if (de !== null)
      (mr() || W != null && W.is_fork) && de.set(t, e);
    else {
      var i = t.f & it ? be : ht;
      xe(t, i);
    }
}
let bn = /* @__PURE__ */ new Set();
const qt = /* @__PURE__ */ new Map();
let Ks = !1;
function si(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ds,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function D(t, e) {
  const i = si(t);
  return fa(i), i;
}
// @__NO_SIDE_EFFECTS__
function Js(t, e = !1, i = !0) {
  const r = si(t);
  return e || (r.equals = Ps), r;
}
function A(t, e, i = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!gt || B.f & is) && zs() && B.f & (ve | vt | On | is) && !(Se != null && Se.includes(t)) && Ko();
  let r = i ? le(e) : e;
  return Ki(t, r);
}
function Ki(t, e) {
  if (!t.equals(e)) {
    var i = t.v;
    li ? qt.set(t, e) : qt.set(t, i), t.v = e;
    var r = ut.ensure();
    r.capture(t, i), t.f & ve && (t.f & Pe && Nn(
      /** @type {Derived} */
      t
    ), xe(t, t.f & it ? be : ht)), t.wv = va(), Zs(t, Pe), X !== null && X.f & be && !(X.f & (Et | zt)) && (je === null ? Ll([t]) : je.push(t)), !r.is_fork && bn.size > 0 && !Ks && _l();
  }
  return e;
}
function _l() {
  Ks = !1;
  var t = Zt;
  Fr(!0);
  const e = Array.from(bn);
  try {
    for (const i of e)
      i.f & be && xe(i, ht), Ir(i) && br(i);
  } finally {
    Fr(t);
  }
  bn.clear();
}
function hr(t) {
  A(t, t.v + 1);
}
function Zs(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var r = i.length, n = 0; n < r; n++) {
      var s = i[n], a = s.f, o = (a & Pe) === 0;
      if (o && xe(s, e), a & ve) {
        var l = (
          /** @type {Derived} */
          s
        );
        de == null || de.delete(l), a & ii || (a & it && (s.f |= ii), Zs(l, ht));
      } else o && (a & vt && Ze !== null && Ze.add(
        /** @type {Effect} */
        s
      ), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function le(t) {
  if (typeof t != "object" || t === null || ur in t)
    return t;
  const e = Es(t);
  if (e !== qo && e !== Do)
    return t;
  var i = /* @__PURE__ */ new Map(), r = Ts(t), n = /* @__PURE__ */ D(0), s = ei, a = (o) => {
    if (ei === s)
      return o();
    var l = B, d = ei;
    Te(null), os(s);
    var c = o();
    return Te(l), os(d), c;
  };
  return r && i.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Qo();
        var c = i.get(l);
        return c === void 0 ? c = a(() => {
          var g = /* @__PURE__ */ D(d.value);
          return i.set(l, g), g;
        }) : A(c, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = i.get(l);
        if (d === void 0) {
          if (l in o) {
            const c = a(() => /* @__PURE__ */ D(we));
            i.set(l, c), hr(n);
          }
        } else
          A(d, we), hr(n);
        return !0;
      },
      get(o, l, d) {
        var p;
        if (l === ur)
          return t;
        var c = i.get(l), g = l in o;
        if (c === void 0 && (!g || (p = Kt(o, l)) != null && p.writable) && (c = a(() => {
          var k = le(g ? o[l] : we), x = /* @__PURE__ */ D(k);
          return x;
        }), i.set(l, c)), c !== void 0) {
          var v = f(c);
          return v === we ? void 0 : v;
        }
        return Reflect.get(o, l, d);
      },
      getOwnPropertyDescriptor(o, l) {
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d && "value" in d) {
          var c = i.get(l);
          c && (d.value = f(c));
        } else if (d === void 0) {
          var g = i.get(l), v = g == null ? void 0 : g.v;
          if (g !== void 0 && v !== we)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(o, l) {
        var v;
        if (l === ur)
          return !0;
        var d = i.get(l), c = d !== void 0 && d.v !== we || Reflect.has(o, l);
        if (d !== void 0 || X !== null && (!c || (v = Kt(o, l)) != null && v.writable)) {
          d === void 0 && (d = a(() => {
            var p = c ? le(o[l]) : we, k = /* @__PURE__ */ D(p);
            return k;
          }), i.set(l, d));
          var g = f(d);
          if (g === we)
            return !1;
        }
        return c;
      },
      set(o, l, d, c) {
        var m;
        var g = i.get(l), v = l in o;
        if (r && l === "length")
          for (var p = d; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var k = i.get(p + "");
            k !== void 0 ? A(k, we) : p in o && (k = a(() => /* @__PURE__ */ D(we)), i.set(p + "", k));
          }
        if (g === void 0)
          (!v || (m = Kt(o, l)) != null && m.writable) && (g = a(() => /* @__PURE__ */ D(void 0)), A(g, le(d)), i.set(l, g));
        else {
          v = g.v !== we;
          var x = a(() => le(d));
          A(g, x);
        }
        var h = Reflect.getOwnPropertyDescriptor(o, l);
        if (h != null && h.set && h.set.call(c, d), !v) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              i.get("length")
            ), L = Number(l);
            Number.isInteger(L) && L >= w.v && A(w, L + 1);
          }
          hr(n);
        }
        return !0;
      },
      ownKeys(o) {
        f(n);
        var l = Reflect.ownKeys(o).filter((g) => {
          var v = i.get(g);
          return v === void 0 || v.v !== we;
        });
        for (var [d, c] of i)
          c.v !== we && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Xo();
      }
    }
  );
}
var ns, ea, ta, ia;
function yn() {
  if (ns === void 0) {
    ns = window, ea = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, i = Text.prototype;
    ta = Kt(e, "firstChild").get, ia = Kt(e, "nextSibling").get, ts(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ts(i) && (i.__t = void 0);
  }
}
function Ee(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  return (
    /** @type {TemplateNode | null} */
    ta.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function rt(t) {
  return (
    /** @type {TemplateNode | null} */
    ia.call(t)
  );
}
function G(t, e) {
  if (!U)
    return /* @__PURE__ */ fe(t);
  var i = /* @__PURE__ */ fe(P);
  if (i === null)
    i = P.appendChild(Ee());
  else if (e && i.nodeType !== Kr) {
    var r = Ee();
    return i == null || i.before(r), ye(r), r;
  }
  return ye(i), i;
}
function Ge(t, e = !1) {
  if (!U) {
    var i = /* @__PURE__ */ fe(t);
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ rt(i) : i;
  }
  if (e && (P == null ? void 0 : P.nodeType) !== Kr) {
    var r = Ee();
    return P == null || P.before(r), ye(r), r;
  }
  return P;
}
function J(t, e = 1, i = !1) {
  let r = U ? P : t;
  for (var n; e--; )
    n = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ rt(r);
  if (!U)
    return r;
  if (i && (r == null ? void 0 : r.nodeType) !== Kr) {
    var s = Ee();
    return r === null ? n == null || n.after(s) : r.before(s), ye(s), s;
  }
  return ye(r), r;
}
function qn(t) {
  t.textContent = "";
}
function ra() {
  return !1;
}
function kl(t) {
  U && /* @__PURE__ */ fe(t) !== null && qn(t);
}
let ss = !1;
function na() {
  ss || (ss = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const i of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = i.__on_r) == null || e.call(i);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function er(t) {
  var e = B, i = X;
  Te(null), ft(null);
  try {
    return t();
  } finally {
    Te(e), ft(i);
  }
}
function Sl(t, e, i, r = i) {
  t.addEventListener(e, () => er(i));
  const n = t.__on_r;
  n ? t.__on_r = () => {
    n(), r(!0);
  } : t.__on_r = () => r(!0), na();
}
function Cl(t) {
  X === null && (B === null && Bo(), Ho()), li && Fo();
}
function Tl(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function mt(t, e, i) {
  var r = X;
  r !== null && r.f & qe && (t |= qe);
  var n = {
    ctx: Ie,
    deps: null,
    nodes: null,
    f: t | Pe | it,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (i)
    try {
      br(n), n.f |= Tr;
    } catch (o) {
      throw ke(n), o;
    }
  else e !== null && ni(n);
  var s = n;
  if (i && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  !(s.f & ai) && (s = s.first, t & vt && t & ti && s !== null && (s.f |= ti)), s !== null && (s.parent = r, r !== null && Tl(s, r), B !== null && B.f & ve && !(t & zt))) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function mr() {
  return B !== null && !gt;
}
function sa(t) {
  const e = mt(Ln, null, !1);
  return xe(e, be), e.teardown = t, e;
}
function Dt(t) {
  Cl();
  var e = (
    /** @type {Effect} */
    X.f
  ), i = !B && (e & Et) !== 0 && (e & Tr) === 0;
  if (i) {
    var r = (
      /** @type {ComponentContext} */
      Ie
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return aa(t);
}
function aa(t) {
  return mt(Mn | Uo, t, !1);
}
function El(t) {
  ut.ensure();
  const e = mt(zt | ai, t, !0);
  return () => {
    ke(e);
  };
}
function Il(t) {
  ut.ensure();
  const e = mt(zt | ai, t, !0);
  return (i = {}) => new Promise((r) => {
    i.outro ? Jt(e, () => {
      ke(e), r(void 0);
    }) : (ke(e), r(void 0));
  });
}
function Dn(t) {
  return mt(Mn, t, !1);
}
function Al(t) {
  return mt(On | ai, t, !0);
}
function tn(t, e = 0) {
  return mt(Ln | e, t, !0);
}
function he(t, e = [], i = [], r = []) {
  wl(r, e, i, (n) => {
    mt(Ln, () => t(...n.map(f)), !0);
  });
}
function Pn(t, e = 0) {
  var i = mt(vt | e, t, !0);
  return i;
}
function Ve(t) {
  return mt(Et | ai, t, !0);
}
function oa(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = li, r = B;
    as(!0), Te(null);
    try {
      e.call(null);
    } finally {
      as(i), Te(r);
    }
  }
}
function la(t, e = !1) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    const n = i.ac;
    n !== null && er(() => {
      n.abort(vi);
    });
    var r = i.next;
    i.f & zt ? i.parent = null : ke(i, e), i = r;
  }
}
function Ml(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    e.f & Et || ke(e), e = i;
  }
}
function ke(t, e = !0) {
  var i = !1;
  (e || t.f & As) && t.nodes !== null && t.nodes.end !== null && (da(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), i = !0), la(t, e && !i), Hr(t, 0), xe(t, Ct);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  oa(t);
  var n = t.parent;
  n !== null && n.first !== null && ca(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function da(t, e) {
  for (; t !== null; ) {
    var i = t === e ? null : /* @__PURE__ */ rt(t);
    t.remove(), t = i;
  }
}
function ca(t) {
  var e = t.parent, i = t.prev, r = t.next;
  i !== null && (i.next = r), r !== null && (r.prev = i), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = i));
}
function Jt(t, e, i = !0) {
  var r = [];
  ua(t, r, !0);
  var n = () => {
    i && ke(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || n();
    for (var o of r)
      o.out(a);
  } else
    n();
}
function ua(t, e, i) {
  if (!(t.f & qe)) {
    t.f ^= qe;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || i) && e.push(o);
    for (var n = t.first; n !== null; ) {
      var s = n.next, a = (n.f & ti) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & Et) !== 0 && (t.f & vt) !== 0;
      ua(n, e, a ? i : !1), n = s;
    }
  }
}
function zn(t) {
  ga(t, !0);
}
function ga(t, e) {
  if (t.f & qe) {
    t.f ^= qe, t.f & be || (xe(t, Pe), ni(t));
    for (var i = t.first; i !== null; ) {
      var r = i.next, n = (i.f & ti) !== 0 || (i.f & Et) !== 0;
      ga(i, n ? e : !1), i = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function ha(t, e) {
  if (t.nodes)
    for (var i = t.nodes.start, r = t.nodes.end; i !== null; ) {
      var n = i === r ? null : /* @__PURE__ */ rt(i);
      e.append(i), i = n;
    }
}
let Zt = !1;
function Fr(t) {
  Zt = t;
}
let li = !1;
function as(t) {
  li = t;
}
let B = null, gt = !1;
function Te(t) {
  B = t;
}
let X = null;
function ft(t) {
  X = t;
}
let Se = null;
function fa(t) {
  B !== null && (Se === null ? Se = [t] : Se.push(t));
}
let _e = null, Oe = 0, je = null;
function Ll(t) {
  je = t;
}
let pa = 1, wr = 0, ei = wr;
function os(t) {
  ei = t;
}
function va() {
  return ++pa;
}
function Ir(t) {
  var e = t.f;
  if (e & Pe)
    return !0;
  if (e & ve && (t.f &= ~ii), e & ht) {
    var i = t.deps;
    if (i !== null)
      for (var r = i.length, n = 0; n < r; n++) {
        var s = i[n];
        if (Ir(
          /** @type {Derived} */
          s
        ) && Xs(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
      }
    e & it && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    de === null && xe(t, be);
  }
  return !1;
}
function ma(t, e, i = !0) {
  var r = t.reactions;
  if (r !== null && !(Se != null && Se.includes(t)))
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      s.f & ve ? ma(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (i ? xe(s, Pe) : s.f & be && xe(s, ht), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function wa(t) {
  var k;
  var e = _e, i = Oe, r = je, n = B, s = Se, a = Ie, o = gt, l = ei, d = t.f;
  _e = /** @type {null | Value[]} */
  null, Oe = 0, je = null, B = d & (Et | zt) ? null : t, Se = null, Qi(t.ctx), gt = !1, ei = ++wr, t.ac !== null && (er(() => {
    t.ac.abort(vi);
  }), t.ac = null);
  try {
    t.f |= hn;
    var c = (
      /** @type {Function} */
      t.fn
    ), g = c(), v = t.deps;
    if (_e !== null) {
      var p;
      if (Hr(t, Oe), v !== null && Oe > 0)
        for (v.length = Oe + _e.length, p = 0; p < _e.length; p++)
          v[Oe + p] = _e[p];
      else
        t.deps = v = _e;
      if (mr() && t.f & it)
        for (p = Oe; p < v.length; p++)
          ((k = v[p]).reactions ?? (k.reactions = [])).push(t);
    } else v !== null && Oe < v.length && (Hr(t, Oe), v.length = Oe);
    if (zs() && je !== null && !gt && v !== null && !(t.f & (ve | ht | Pe)))
      for (p = 0; p < /** @type {Source[]} */
      je.length; p++)
        ma(
          je[p],
          /** @type {Effect} */
          t
        );
    return n !== null && n !== t && (wr++, je !== null && (r === null ? r = je : r.push(.../** @type {Source[]} */
    je))), t.f & Nt && (t.f ^= Nt), g;
  } catch (x) {
    return Us(x);
  } finally {
    t.f ^= hn, _e = e, Oe = i, je = r, B = n, Se = s, Qi(a), gt = o, ei = l;
  }
}
function Ol(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var r = Ro.call(i, t);
    if (r !== -1) {
      var n = i.length - 1;
      n === 0 ? i = e.reactions = null : (i[r] = i[n], i.pop());
    }
  }
  i === null && e.f & ve && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (_e === null || !_e.includes(e)) && (xe(e, ht), e.f & it && (e.f ^= it, e.f &= ~ii), Qs(
    /** @type {Derived} **/
    e
  ), Hr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Hr(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var r = e; r < i.length; r++)
      Ol(t, i[r]);
}
function br(t) {
  var e = t.f;
  if (!(e & Ct)) {
    xe(t, be);
    var i = X, r = Zt;
    X = t, Zt = !0;
    try {
      e & (vt | $o) ? Ml(t) : la(t), oa(t);
      var n = wa(t);
      t.teardown = typeof n == "function" ? n : null, t.wv = pa;
      var s;
    } finally {
      Zt = r, X = i;
    }
  }
}
async function ba() {
  await Promise.resolve(), R();
}
function f(t) {
  var e = t.f, i = (e & ve) !== 0;
  if (B !== null && !gt) {
    var r = X !== null && (X.f & Ct) !== 0;
    if (!r && !(Se != null && Se.includes(t))) {
      var n = B.deps;
      if (B.f & hn)
        t.rv < wr && (t.rv = wr, _e === null && n !== null && n[Oe] === t ? Oe++ : _e === null ? _e = [t] : _e.includes(t) || _e.push(t));
      else {
        (B.deps ?? (B.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [B] : s.includes(B) || s.push(B);
      }
    }
  }
  if (li) {
    if (qt.has(t))
      return qt.get(t);
    if (i) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return (!(a.f & be) && a.reactions !== null || xa(a)) && (o = Nn(a)), qt.set(a, o), o;
    }
  } else i && (!(de != null && de.has(t)) || W != null && W.is_fork && !mr()) && (a = /** @type {Derived} */
  t, Ir(a) && Xs(a), Zt && mr() && !(a.f & it) && ya(a));
  if (de != null && de.has(t))
    return de.get(t);
  if (t.f & Nt)
    throw t.v;
  return t.v;
}
function ya(t) {
  if (t.deps !== null) {
    t.f ^= it;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & ve && !(e.f & it) && ya(
        /** @type {Derived} */
        e
      );
  }
}
function xa(t) {
  if (t.v === we) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (qt.has(e) || e.f & ve && xa(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function di(t) {
  var e = gt;
  try {
    return gt = !0, t();
  } finally {
    gt = e;
  }
}
const Rl = -7169;
function xe(t, e) {
  t.f = t.f & Rl | e;
}
const Nl = ["touchstart", "touchmove"];
function ql(t) {
  return Nl.includes(t);
}
const _a = /* @__PURE__ */ new Set(), xn = /* @__PURE__ */ new Set();
function Dl(t, e, i, r = {}) {
  function n(s) {
    if (r.capture || lr.call(e, s), !s.cancelBubble)
      return er(() => i == null ? void 0 : i.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? $t(() => {
    e.addEventListener(t, n, r);
  }) : e.addEventListener(t, n, r), n;
}
function ka(t, e, i, r, n) {
  var s = { capture: r, passive: n }, a = Dl(t, e, i, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && sa(() => {
    e.removeEventListener(t, a, s);
  });
}
function Ut(t) {
  for (var e = 0; e < t.length; e++)
    _a.add(t[e]);
  for (var i of xn)
    i(t);
}
let ls = null;
function lr(t) {
  var h;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, n = ((h = t.composedPath) == null ? void 0 : h.call(t)) || [], s = (
    /** @type {null | Element} */
    n[0] || t.target
  );
  ls = t;
  var a = 0, o = ls === t && t.__root;
  if (o) {
    var l = n.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = n.indexOf(e);
    if (d === -1)
      return;
    l <= d && (a = l);
  }
  if (s = /** @type {Element} */
  n[a] || t.target, s !== e) {
    Ur(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || i;
      }
    });
    var c = B, g = X;
    Te(null), ft(null);
    try {
      for (var v, p = []; s !== null; ) {
        var k = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + r];
          x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && x.call(s, t);
        } catch (w) {
          v ? p.push(w) : v = w;
        }
        if (t.cancelBubble || k === e || k === null)
          break;
        s = k;
      }
      if (v) {
        for (let w of p)
          queueMicrotask(() => {
            throw w;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Te(c), ft(g);
    }
  }
}
function $n(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function De(t, e) {
  var i = (
    /** @type {Effect} */
    X
  );
  i.nodes === null && (i.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function F(t, e) {
  var i = (e & Rs) !== 0, r = (e & ll) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (U)
      return De(P, null), P;
    n === void 0 && (n = $n(s ? t : "<!>" + t), i || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ fe(n)));
    var a = (
      /** @type {TemplateNode} */
      r || ea ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (i) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      De(o, l);
    } else
      De(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Pl(t, e, i = "svg") {
  var r = !t.startsWith("<!>"), n = (e & Rs) !== 0, s = `<${i}>${r ? t : "<!>" + t}</${i}>`, a;
  return () => {
    if (U)
      return De(P, null), P;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        $n(s)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ fe(o)
      );
      if (n)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ fe(l); )
          a.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ fe(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ fe(l);
    }
    var d = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fe(d)
      ), g = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      De(c, g);
    } else
      De(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function Un(t, e) {
  return /* @__PURE__ */ Pl(t, e, "svg");
}
function zl(t = "") {
  if (!U) {
    var e = Ee(t + "");
    return De(e, e), e;
  }
  var i = P;
  return i.nodeType !== Kr && (i.before(i = Ee()), ye(i)), De(i, i), i;
}
function tr() {
  if (U)
    return De(P, null), P;
  var t = document.createDocumentFragment(), e = document.createComment(""), i = Ee();
  return t.append(e, i), De(e, i), t;
}
function N(t, e) {
  if (U) {
    var i = (
      /** @type {Effect & { nodes: EffectNodes }} */
      X
    );
    (!(i.f & Tr) || i.nodes.end === null) && (i.nodes.end = P), Yi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let _n = !0;
function Tt(t, e) {
  var i = e == null ? "" : typeof e == "object" ? e + "" : e;
  i !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = i, t.nodeValue = i + "");
}
function rn(t, e) {
  return Sa(t, e);
}
function $l(t, e) {
  yn(), e.intro = e.intro ?? !1;
  const i = e.target, r = U, n = P;
  try {
    for (var s = /* @__PURE__ */ fe(i); s && (s.nodeType !== oi || /** @type {Comment} */
    s.data !== Ns); )
      s = /* @__PURE__ */ rt(s);
    if (!s)
      throw ri;
    St(!0), ye(
      /** @type {Comment} */
      s
    );
    const a = Sa(t, { ...e, anchor: s });
    return St(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ri && console.warn("Failed to hydrate: ", a), e.recover === !1 && Go(), yn(), qn(i), St(!1), rn(t, e);
  } finally {
    St(r), ye(n);
  }
}
const fi = /* @__PURE__ */ new Map();
function Sa(t, { target: e, anchor: i, props: r = {}, events: n, context: s, intro: a = !0 }) {
  yn();
  var o = /* @__PURE__ */ new Set(), l = (g) => {
    for (var v = 0; v < g.length; v++) {
      var p = g[v];
      if (!o.has(p)) {
        o.add(p);
        var k = ql(p);
        e.addEventListener(p, lr, { passive: k });
        var x = fi.get(p);
        x === void 0 ? (document.addEventListener(p, lr, { passive: k }), fi.set(p, 1)) : fi.set(p, x + 1);
      }
    }
  };
  l(Qr(_a)), xn.add(l);
  var d = void 0, c = Il(() => {
    var g = i ?? e.appendChild(Ee());
    return vl(
      /** @type {TemplateNode} */
      g,
      {
        pending: () => {
        }
      },
      (v) => {
        if (s) {
          Ye({});
          var p = (
            /** @type {ComponentContext} */
            Ie
          );
          p.c = s;
        }
        if (n && (r.$$events = n), U && De(
          /** @type {TemplateNode} */
          v,
          null
        ), _n = a, d = t(v, r) || {}, _n = !0, U && (X.nodes.end = P, P === null || P.nodeType !== oi || /** @type {Comment} */
        P.data !== Rn))
          throw Er(), ri;
        s && Qe();
      }
    ), () => {
      var k;
      for (var v of o) {
        e.removeEventListener(v, lr);
        var p = (
          /** @type {number} */
          fi.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, lr), fi.delete(v)) : fi.set(v, p);
      }
      xn.delete(l), g !== i && ((k = g.parentNode) == null || k.removeChild(g));
    };
  });
  return kn.set(d, c), d;
}
let kn = /* @__PURE__ */ new WeakMap();
function bi(t, e) {
  const i = kn.get(t);
  return i ? (kn.delete(t), i(e)) : Promise.resolve();
}
var tt, ct, Ne, Xt, Sr, Cr, Yr;
class Ul {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, i = !0) {
    /** @type {TemplateNode} */
    oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, tt, /* @__PURE__ */ new Map());
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
    I(this, ct, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, Xt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, Sr, !0);
    I(this, Cr, () => {
      var e = (
        /** @type {Batch} */
        W
      );
      if (u(this, tt).has(e)) {
        var i = (
          /** @type {Key} */
          u(this, tt).get(e)
        ), r = u(this, ct).get(i);
        if (r)
          zn(r), u(this, Xt).delete(i);
        else {
          var n = u(this, Ne).get(i);
          n && (u(this, ct).set(i, n.effect), u(this, Ne).delete(i), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), r = n.effect);
        }
        for (const [s, a] of u(this, tt)) {
          if (u(this, tt).delete(s), s === e)
            break;
          const o = u(this, Ne).get(a);
          o && (ke(o.effect), u(this, Ne).delete(a));
        }
        for (const [s, a] of u(this, ct)) {
          if (s === i || u(this, Xt).has(s)) continue;
          const o = () => {
            if (Array.from(u(this, tt).values()).includes(s)) {
              var d = document.createDocumentFragment();
              ha(a, d), d.append(Ee()), u(this, Ne).set(s, { effect: a, fragment: d });
            } else
              ke(a);
            u(this, Xt).delete(s), u(this, ct).delete(s);
          };
          u(this, Sr) || !r ? (u(this, Xt).add(s), Jt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Yr, (e) => {
      u(this, tt).delete(e);
      const i = Array.from(u(this, tt).values());
      for (const [r, n] of u(this, Ne))
        i.includes(r) || (ke(n.effect), u(this, Ne).delete(r));
    });
    this.anchor = e, C(this, Sr, i);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, i) {
    var r = (
      /** @type {Batch} */
      W
    ), n = ra();
    if (i && !u(this, ct).has(e) && !u(this, Ne).has(e))
      if (n) {
        var s = document.createDocumentFragment(), a = Ee();
        s.append(a), u(this, Ne).set(e, {
          effect: Ve(() => i(a)),
          fragment: s
        });
      } else
        u(this, ct).set(
          e,
          Ve(() => i(this.anchor))
        );
    if (u(this, tt).set(r, e), n) {
      for (const [o, l] of u(this, ct))
        o === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [o, l] of u(this, Ne))
        o === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(u(this, Cr)), r.ondiscard(u(this, Yr));
    } else
      U && (this.anchor = P), u(this, Cr).call(this);
  }
}
tt = new WeakMap(), ct = new WeakMap(), Ne = new WeakMap(), Xt = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), Yr = new WeakMap();
function te(t, e, i = !1) {
  U && Yi();
  var r = new Ul(t), n = i ? ti : 0;
  function s(a, o) {
    if (U) {
      const d = qs(t) === Jr;
      if (a === d) {
        var l = jr();
        ye(l), r.anchor = l, St(!1), r.ensure(a, o), St(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Pn(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, n);
}
function jl(t, e, i) {
  for (var r = [], n = e.length, s, a = e.length, o = 0; o < n; o++) {
    let g = e[o];
    Jt(
      g,
      () => {
        if (s) {
          if (s.pending.delete(g), s.done.add(g), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Sn(Qr(s.done)), v.delete(s), v.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && i !== null;
    if (l) {
      var d = (
        /** @type {Element} */
        i
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      qn(c), c.append(d), t.items.clear();
    }
    Sn(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Sn(t, e = !0) {
  for (var i = 0; i < t.length; i++)
    ke(t[i], e);
}
var ds;
function Cn(t, e, i, r, n, s = null) {
  var a = t, o = /* @__PURE__ */ new Map(), l = (e & Os) !== 0;
  if (l) {
    var d = (
      /** @type {Element} */
      t
    );
    a = U ? ye(/* @__PURE__ */ fe(d)) : d.appendChild(Ee());
  }
  U && Yi();
  var c = null, g = /* @__PURE__ */ Ys(() => {
    var w = i();
    return Ts(w) ? w : w == null ? [] : Qr(w);
  }), v, p = !0;
  function k() {
    h.fallback = c, Wl(h, v, a, e, r), c !== null && (v.length === 0 ? c.f & kt ? (c.f ^= kt, dr(c, null, a)) : zn(c) : Jt(c, () => {
      c = null;
    }));
  }
  var x = Pn(() => {
    v = /** @type {V[]} */
    f(g);
    var w = v.length;
    let L = !1;
    if (U) {
      var m = qs(a) === Jr;
      m !== (w === 0) && (a = jr(), ye(a), St(!1), L = !0);
    }
    for (var y = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      W
    ), _ = ra(), M = 0; M < w; M += 1) {
      U && P.nodeType === oi && /** @type {Comment} */
      P.data === Rn && (a = /** @type {Comment} */
      P, L = !0, St(!1));
      var j = v[M], Y = r(j, M), E = p ? null : o.get(Y);
      E ? (E.v && Ki(E.v, j), E.i && Ki(E.i, M), _ && T.skipped_effects.delete(E.e)) : (E = Fl(
        o,
        p ? a : ds ?? (ds = Ee()),
        j,
        Y,
        M,
        n,
        e,
        i
      ), p || (E.e.f |= kt), o.set(Y, E)), y.add(Y);
    }
    if (w === 0 && s && !c && (p ? c = Ve(() => s(a)) : (c = Ve(() => s(ds ?? (ds = Ee()))), c.f |= kt)), U && w > 0 && ye(jr()), !p)
      if (_) {
        for (const [z, $] of o)
          y.has(z) || T.skipped_effects.add($.e);
        T.oncommit(k), T.ondiscard(() => {
        });
      } else
        k();
    L && St(!0), f(g);
  }), h = { effect: x, items: o, outrogroups: null, fallback: c };
  p = !1, U && (a = P);
}
function Wl(t, e, i, r, n) {
  var E, z, $, Z, ne, me, Xe, jt, ui;
  var s = (r & tl) !== 0, a = e.length, o = t.items, l = t.effect.first, d, c = null, g, v = [], p = [], k, x, h, w;
  if (s)
    for (w = 0; w < a; w += 1)
      k = e[w], x = n(k, w), h = /** @type {EachItem} */
      o.get(x).e, h.f & kt || ((z = (E = h.nodes) == null ? void 0 : E.a) == null || z.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(h));
  for (w = 0; w < a; w += 1) {
    if (k = e[w], x = n(k, w), h = /** @type {EachItem} */
    o.get(x).e, t.outrogroups !== null)
      for (const Me of t.outrogroups)
        Me.pending.delete(h), Me.done.delete(h);
    if (h.f & kt)
      if (h.f ^= kt, h === l)
        dr(h, null, i);
      else {
        var L = c ? c.next : l;
        h === t.effect.last && (t.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), At(t, c, h), At(t, h, L), dr(h, L, i), c = h, v = [], p = [], l = c.next;
        continue;
      }
    if (h.f & qe && (zn(h), s && ((Z = ($ = h.nodes) == null ? void 0 : $.a) == null || Z.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(h))), h !== l) {
      if (d !== void 0 && d.has(h)) {
        if (v.length < p.length) {
          var m = p[0], y;
          c = m.prev;
          var T = v[0], _ = v[v.length - 1];
          for (y = 0; y < v.length; y += 1)
            dr(v[y], m, i);
          for (y = 0; y < p.length; y += 1)
            d.delete(p[y]);
          At(t, T.prev, _.next), At(t, c, T), At(t, _, m), l = m, c = _, w -= 1, v = [], p = [];
        } else
          d.delete(h), dr(h, l, i), At(t, h.prev, h.next), At(t, h, c === null ? t.effect.first : c.next), At(t, c, h), c = h;
        continue;
      }
      for (v = [], p = []; l !== null && l !== h; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
    }
    h.f & kt || v.push(h), c = h, l = h.next;
  }
  if (t.outrogroups !== null) {
    for (const Me of t.outrogroups)
      Me.pending.size === 0 && (Sn(Qr(Me.done)), (ne = t.outrogroups) == null || ne.delete(Me));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || d !== void 0) {
    var M = [];
    if (d !== void 0)
      for (h of d)
        h.f & qe || M.push(h);
    for (; l !== null; )
      !(l.f & qe) && l !== t.fallback && M.push(l), l = l.next;
    var j = M.length;
    if (j > 0) {
      var Y = r & Os && a === 0 ? i : null;
      if (s) {
        for (w = 0; w < j; w += 1)
          (Xe = (me = M[w].nodes) == null ? void 0 : me.a) == null || Xe.measure();
        for (w = 0; w < j; w += 1)
          (ui = (jt = M[w].nodes) == null ? void 0 : jt.a) == null || ui.fix();
      }
      jl(t, M, Y);
    }
  }
  s && $t(() => {
    var Me, S;
    if (g !== void 0)
      for (h of g)
        (S = (Me = h.nodes) == null ? void 0 : Me.a) == null || S.apply();
  });
}
function Fl(t, e, i, r, n, s, a, o) {
  var l = a & Zo ? a & il ? si(i) : /* @__PURE__ */ Js(i, !1, !1) : null, d = a & el ? si(n) : null;
  return {
    v: l,
    i: d,
    e: Ve(() => (s(e, l ?? i, d ?? n, o), () => {
      t.delete(r);
    }))
  };
}
function dr(t, e, i) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end, s = e && !(e.f & kt) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : i; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rt(r)
      );
      if (s.before(r), r === n)
        return;
      r = a;
    }
}
function At(t, e, i) {
  e === null ? t.effect.first = i : e.next = i, i === null ? t.effect.last = e : i.prev = e;
}
function Hl(t, e, i = !1, r = !1, n = !1) {
  var s = t, a = "";
  he(() => {
    var o = (
      /** @type {Effect} */
      X
    );
    if (a === (a = e() ?? "")) {
      U && Yi();
      return;
    }
    if (o.nodes !== null && (da(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (U) {
        P.data;
        for (var l = Yi(), d = l; l !== null && (l.nodeType !== oi || /** @type {Comment} */
        l.data !== ""); )
          d = l, l = /* @__PURE__ */ rt(l);
        if (l === null)
          throw Er(), ri;
        De(P, d), s = ye(l);
        return;
      }
      var c = a + "";
      i ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var g = $n(c);
      if ((i || r) && (g = /** @type {Element} */
      /* @__PURE__ */ fe(g)), De(
        /** @type {TemplateNode} */
        /* @__PURE__ */ fe(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), i || r)
        for (; /* @__PURE__ */ fe(g); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ fe(g)
          );
      else
        s.before(g);
    }
  });
}
const Bl = () => performance.now(), _t = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Bl(),
  tasks: /* @__PURE__ */ new Set()
};
function Ca() {
  const t = _t.now();
  _t.tasks.forEach((e) => {
    e.c(t) || (_t.tasks.delete(e), e.f());
  }), _t.tasks.size !== 0 && _t.tick(Ca);
}
function Vl(t) {
  let e;
  return _t.tasks.size === 0 && _t.tick(Ca), {
    promise: new Promise((i) => {
      _t.tasks.add(e = { c: t, f: i });
    }),
    abort() {
      _t.tasks.delete(e);
    }
  };
}
function Or(t, e) {
  er(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Gl(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (i) => i[0].toUpperCase() + i.slice(1)
  ).join("");
}
function cs(t) {
  const e = {}, i = t.split(";");
  for (const r of i) {
    const [n, s] = r.split(":");
    if (!n || s === void 0) break;
    const a = Gl(n.trim());
    e[a] = s.trim();
  }
  return e;
}
const Yl = (t) => t;
function us(t, e, i, r) {
  var h;
  var n = (t & ol) !== 0, s = "both", a, o = e.inert, l = e.style.overflow, d, c;
  function g() {
    return er(() => a ?? (a = i()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: s
    })));
  }
  var v = {
    is_global: n,
    in() {
      e.inert = o, Or(e, "introstart"), d = Tn(e, g(), c, 1, () => {
        Or(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(w) {
      e.inert = !0, Or(e, "outrostart"), c = Tn(e, g(), d, 0, () => {
        Or(e, "outroend"), w == null || w();
      });
    },
    stop: () => {
      d == null || d.abort(), c == null || c.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    X
  );
  if (((h = p.nodes).t ?? (h.t = [])).push(v), _n) {
    var k = n;
    if (!k) {
      for (var x = (
        /** @type {Effect | null} */
        p.parent
      ); x && x.f & ti; )
        for (; (x = x.parent) && !(x.f & vt); )
          ;
      k = !x || (x.f & Tr) !== 0;
    }
    k && Dn(() => {
      di(() => v.in());
    });
  }
}
function Tn(t, e, i, r, n) {
  var s = r === 1;
  if (Po(e)) {
    var a, o = !1;
    return $t(() => {
      if (!o) {
        var h = e({ direction: s ? "in" : "out" });
        a = Tn(t, h, i, r, n);
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
  if (i == null || i.deactivate(), !(e != null && e.duration))
    return n(), {
      abort: sr,
      deactivate: sr,
      reset: sr,
      t: () => r
    };
  const { delay: l = 0, css: d, tick: c, easing: g = Yl } = e;
  var v = [];
  if (s && i === void 0 && (c && c(0, 1), d)) {
    var p = cs(d(0, 1));
    v.push(p, p);
  }
  var k = () => 1 - r, x = t.animate(v, { duration: l, fill: "forwards" });
  return x.onfinish = () => {
    x.cancel();
    var h = (i == null ? void 0 : i.t()) ?? 1 - r;
    i == null || i.abort();
    var w = r - h, L = (
      /** @type {number} */
      e.duration * Math.abs(w)
    ), m = [];
    if (L > 0) {
      var y = !1;
      if (d)
        for (var T = Math.ceil(L / 16.666666666666668), _ = 0; _ <= T; _ += 1) {
          var M = h + w * g(_ / T), j = cs(d(M, 1 - M));
          m.push(j), y || (y = j.overflow === "hidden");
        }
      y && (t.style.overflow = "hidden"), k = () => {
        var Y = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          x.currentTime
        );
        return h + w * g(Y / L);
      }, c && Vl(() => {
        if (x.playState !== "running") return !1;
        var Y = k();
        return c(Y, 1 - Y), !0;
      });
    }
    x = t.animate(m, { duration: L, fill: "forwards" }), x.onfinish = () => {
      k = () => r, c == null || c(r, 1 - r), n();
    };
  }, {
    abort: () => {
      x && (x.cancel(), x.effect = null, x.onfinish = sr);
    },
    deactivate: () => {
      n = sr;
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0));
    },
    t: () => k()
  };
}
function nt(t, e) {
  Dn(() => {
    var i = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      i.host ? (
        /** @type {ShadowRoot} */
        i
      ) : (
        /** @type {Document} */
        i.head ?? /** @type {Document} */
        i.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const n = document.createElement("style");
      n.id = e.hash, n.textContent = e.code, r.appendChild(n);
    }
  });
}
const gs = [...` 	
\r\f \v\uFEFF`];
function Ql(t, e, i) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), i) {
    for (var n in i)
      if (i[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var s = n.length, a = 0; (a = r.indexOf(n, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || gs.includes(r[a - 1])) && (o === r.length || gs.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function Xl(t, e) {
  return t == null ? null : String(t);
}
function ci(t, e, i, r, n, s) {
  var a = t.__className;
  if (U || a !== i || a === void 0) {
    var o = Ql(i, r, s);
    (!U || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = i;
  } else if (s && n !== s)
    for (var l in s) {
      var d = !!s[l];
      (n == null || d !== !!n[l]) && t.classList.toggle(l, d);
    }
  return s;
}
function Pr(t, e, i, r) {
  var n = t.__style;
  if (U || n !== e) {
    var s = Xl(e);
    (!U || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  }
  return r;
}
const Kl = Symbol("is custom element"), Jl = Symbol("is html");
function Zl(t) {
  if (U) {
    var e = !1, i = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          ce(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var n = t.checked;
          ce(t, "checked", null), t.checked = n;
        }
      }
    };
    t.__on_r = i, $t(i), na();
  }
}
function ce(t, e, i, r) {
  var n = ed(t);
  U && (n[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || n[e] !== (n[e] = i) && (e === "loading" && (t[jo] = i), i == null ? t.removeAttribute(e) : typeof i != "string" && td(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
function ed(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Kl]: t.nodeName.includes("-"),
      [Jl]: t.namespaceURI === dl
    })
  );
}
var hs = /* @__PURE__ */ new Map();
function td(t) {
  var e = t.getAttribute("is") || t.nodeName, i = hs.get(e);
  if (i) return i;
  hs.set(e, i = []);
  for (var r, n = t, s = Element.prototype; s !== n; ) {
    r = No(n);
    for (var a in r)
      r[a].set && i.push(a);
    n = Es(n);
  }
  return i;
}
function Ta(t, e, i = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Sl(t, "input", async (n) => {
    var s = n ? t.defaultValue : t.value;
    if (s = cn(t) ? un(s) : s, i(s), W !== null && r.add(W), await ba(), s !== (s = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = s ?? "", o !== null) {
        var d = t.value.length;
        a === o && o === l && d > l ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = a, t.selectionEnd = Math.min(o, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (U && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  di(e) == null && t.value) && (i(cn(t) ? un(t.value) : t.value), W !== null && r.add(W)), tn(() => {
    var n = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Nr ?? W
      );
      if (r.has(s))
        return;
    }
    cn(t) && n === un(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function cn(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function un(t) {
  return t === "" ? null : +t;
}
function fs(t, e) {
  return t === e || (t == null ? void 0 : t[ur]) === e;
}
function Ar(t = {}, e, i, r) {
  return Dn(() => {
    var n, s;
    return tn(() => {
      n = s, s = [], di(() => {
        t !== i(...s) && (e(t, ...s), n && fs(i(...n), t) && e(null, ...n));
      });
    }), () => {
      $t(() => {
        s && fs(i(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Rr = !1;
function id(t) {
  var e = Rr;
  try {
    return Rr = !1, [t(), Rr];
  } finally {
    Rr = e;
  }
}
function q(t, e, i, r) {
  var L;
  var n = (i & sl) !== 0, s = (i & al) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? di(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (n) {
    var c = ur in t || Ms in t;
    d = ((L = Kt(t, e)) == null ? void 0 : L.set) ?? (c && e in t ? (m) => t[e] = m : void 0);
  }
  var g, v = !1;
  n ? [g, v] = id(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && r !== void 0 && (g = l(), d && (Yo(), d(g)));
  var p;
  if (p = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? l() : (o = !0, m);
  }, !(i & nl))
    return p;
  if (d) {
    var k = t.$$legacy;
    return (
      /** @type {() => V} */
      function(m, y) {
        return arguments.length > 0 ? ((!y || k || v) && d(y ? p() : m), m) : p();
      }
    );
  }
  var x = !1, h = (i & rl ? en : Ys)(() => (x = !1, p()));
  n && f(h);
  var w = (
    /** @type {Effect} */
    X
  );
  return (
    /** @type {() => V} */
    function(m, y) {
      if (arguments.length > 0) {
        const T = y ? f(h) : n ? le(m) : m;
        return A(h, T), x = !0, a !== void 0 && (a = T), m;
      }
      return li && x || w.f & Ct ? h.v : f(h);
    }
  );
}
function rd(t) {
  return new nd(t);
}
var xt, He;
class nd {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    I(this, xt);
    /** @type {Record<string, any>} */
    I(this, He);
    var s;
    var i = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ Js(o, !1, !1);
      return i.set(a, l), l;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return f(i.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Ms ? !0 : (f(i.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return A(i.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    C(this, He, (e.hydrate ? $l : rn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && R(), C(this, xt, n.$$events);
    for (const a of Object.keys(u(this, He)))
      a === "$set" || a === "$destroy" || a === "$on" || Ur(this, a, {
        get() {
          return u(this, He)[a];
        },
        /** @param {any} value */
        set(o) {
          u(this, He)[a] = o;
        },
        enumerable: !0
      });
    u(this, He).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(n, a);
    }, u(this, He).$destroy = () => {
      bi(u(this, He));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    u(this, He).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, i) {
    u(this, xt)[e] = u(this, xt)[e] || [];
    const r = (...n) => i.call(this, ...n);
    return u(this, xt)[e].push(r), () => {
      u(this, xt)[e] = u(this, xt)[e].filter(
        /** @param {any} fn */
        (n) => n !== r
      );
    };
  }
  $destroy() {
    u(this, He).$destroy();
  }
}
xt = new WeakMap(), He = new WeakMap();
let Ea;
typeof HTMLElement == "function" && (Ea = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, i, r) {
    super();
    /** The Svelte component constructor */
    oe(this, "$$ctor");
    /** Slots */
    oe(this, "$$s");
    /** @type {any} The Svelte component instance */
    oe(this, "$$c");
    /** Whether or not the custom element is connected */
    oe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    oe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    oe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    oe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    oe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    oe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    oe(this, "$$me");
    this.$$ctor = e, this.$$s = i, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, i, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(i), this.$$c) {
      const n = this.$$c.$on(e, i);
      this.$$l_u.set(i, n);
    }
    super.addEventListener(e, i, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, i, r) {
    if (super.removeEventListener(e, i, r), this.$$c) {
      const n = this.$$l_u.get(i);
      n && (n(), this.$$l_u.delete(i));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (s) => {
          const a = document.createElement("slot");
          n !== "default" && (a.name = n), N(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, r = sd(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), i.default = !0) : i[n] = e(n));
      for (const n of this.attributes) {
        const s = this.$$g_p(n.name);
        s in this.$$d || (this.$$d[s] = zr(s, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = rd({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = El(() => {
        tn(() => {
          var n;
          this.$$r = !0;
          for (const s of $r(this.$$c)) {
            if (!((n = this.$$p_d[s]) != null && n.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = zr(
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
      for (const n in this.$$l)
        for (const s of this.$$l[n]) {
          const a = this.$$c.$on(n, s);
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
  attributeChangedCallback(e, i, r) {
    var n;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = zr(e, r, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [e]: this.$$d[e] }));
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
    return $r(this.$$p_d).find(
      (i) => this.$$p_d[i].attribute === e || !this.$$p_d[i].attribute && i.toLowerCase() === e
    ) || e;
  }
});
function zr(t, e, i, r) {
  var s;
  const n = (s = i[t]) == null ? void 0 : s.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !i[t])
    return e;
  if (r === "toAttribute")
    switch (n) {
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
    switch (n) {
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
function sd(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), e;
}
function st(t, e, i, r, n, s) {
  let a = class extends Ea {
    constructor() {
      super(t, i, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return $r(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return $r(e).forEach((o) => {
    Ur(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var g;
        l = zr(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var c = (g = Kt(d, o)) == null ? void 0 : g.get;
          c ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Ur(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function nn(t) {
  Ie === null && Ls(), Dt(() => {
    const e = di(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ia(t) {
  Ie === null && Ls(), nn(() => () => di(t));
}
const ad = "5";
var Cs;
typeof window < "u" && ((Cs = window.__svelte ?? (window.__svelte = {})).v ?? (Cs.v = /* @__PURE__ */ new Set())).add(ad);
const od = (t) => t;
function ld(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ps(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function dd(t, { delay: e = 0, duration: i = 400, easing: r = od } = {}) {
  const n = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: r,
    css: (s) => `opacity: ${s * n}`
  };
}
function cd(t, { delay: e = 0, duration: i = 400, easing: r = ld, x: n = 0, y: s = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, c = l * (1 - a), [g, v] = ps(n), [p, k] = ps(s);
  return {
    delay: e,
    duration: i,
    easing: r,
    css: (x, h) => `
			transform: ${d} translate(${(1 - x) * g}${v}, ${(1 - x) * p}${k});
			opacity: ${l - c * h}`
  };
}
var Si, Ci, Ti, Ei, Ii;
class Aa {
  constructor() {
    I(this, Si);
    I(this, Ci);
    I(this, Ti);
    I(this, Ei);
    I(this, Ii);
    C(this, Si, /* @__PURE__ */ D(!1)), C(this, Ci, /* @__PURE__ */ D(!1)), C(this, Ti, /* @__PURE__ */ D(!1)), C(this, Ei, /* @__PURE__ */ D(!1)), C(this, Ii, /* @__PURE__ */ D(!1));
  }
  get isOpen() {
    return f(u(this, Si));
  }
  set isOpen(e) {
    A(u(this, Si), e, !0);
  }
  get isMinimized() {
    return f(u(this, Ci));
  }
  set isMinimized(e) {
    A(u(this, Ci), e, !0);
  }
  get isLoading() {
    return f(u(this, Ti));
  }
  set isLoading(e) {
    A(u(this, Ti), e, !0);
  }
  get hasUnreadMessages() {
    return f(u(this, Ei));
  }
  set hasUnreadMessages(e) {
    A(u(this, Ei), e, !0);
  }
  get hasEngaged() {
    return f(u(this, Ii));
  }
  set hasEngaged(e) {
    A(u(this, Ii), e, !0);
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
  /**
   * Mark the widget as engaged. After the first engagement the closed
   * state is always the bubble. Idempotent.
   */
  markEngaged() {
    this.hasEngaged = !0;
  }
}
Si = new WeakMap(), Ci = new WeakMap(), Ti = new WeakMap(), Ei = new WeakMap(), Ii = new WeakMap();
function Ma() {
  return new Aa();
}
const Pt = new Aa(), ge = {
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
}, Mt = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, vs = {
  /** Visitor ID storage key */
  VISITOR_ID: "ai_chat_visitor_id",
  /** Session history storage key */
  SESSIONS: "ai_chat_sessions"
}, pi = {
  /** Maximum number of quick questions */
  MAX_COUNT: 6,
  /** Maximum character length per question */
  MAX_LENGTH: 100
};
var Ai, Mi, Li, Oi, Ri, Ni;
class La {
  constructor() {
    I(this, Ai);
    I(this, Mi);
    I(this, Li);
    I(this, Oi);
    I(this, Ri);
    I(this, Ni);
    C(this, Ai, /* @__PURE__ */ D(le([]))), C(this, Mi, /* @__PURE__ */ D(null)), C(this, Li, /* @__PURE__ */ D(!1)), C(this, Oi, /* @__PURE__ */ D(null)), C(this, Ri, /* @__PURE__ */ D(null)), this.streamingBuffer = "", this.streamingTimeout = null, C(this, Ni, /* @__PURE__ */ D(0));
  }
  get messages() {
    return f(u(this, Ai));
  }
  set messages(e) {
    A(u(this, Ai), e, !0);
  }
  get currentSession() {
    return f(u(this, Mi));
  }
  set currentSession(e) {
    A(u(this, Mi), e, !0);
  }
  get isTyping() {
    return f(u(this, Li));
  }
  set isTyping(e) {
    A(u(this, Li), e, !0);
  }
  get error() {
    return f(u(this, Oi));
  }
  set error(e) {
    A(u(this, Oi), e, !0);
  }
  get streamingMessageId() {
    return f(u(this, Ri));
  }
  set streamingMessageId(e) {
    A(u(this, Ri), e, !0);
  }
  get streamingUpdateSignal() {
    return f(u(this, Ni));
  }
  set streamingUpdateSignal(e) {
    A(u(this, Ni), e, !0);
  }
  // Derived state
  get unreadCount() {
    return this.messages.filter((e) => e.role === "assistant" && e.status !== "sent").length;
  }
  get hasMessages() {
    return this.messages.length > 0;
  }
  addMessage(e, i = "user") {
    const r = {
      id: crypto.randomUUID(),
      role: i,
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: i === "user" ? "sending" : "sent"
    };
    return this.messages = [...this.messages, r], r;
  }
  updateMessageStatus(e, i) {
    this.messages = this.messages.map((r) => r.id === e ? { ...r, status: i } : r);
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
    var i;
    if (this.streamingMessageId) {
      if (this.streamingBuffer += e, this.streamingTimeout && clearTimeout(this.streamingTimeout), typeof process < "u" && ((i = process.env) == null ? void 0 : i.NODE_ENV) === "test") {
        this.flushStreamingBuffer();
        return;
      }
      this.streamingTimeout = window.setTimeout(
        () => {
          this.flushStreamingBuffer(), this.streamingTimeout = null;
        },
        ge.STREAMING_BATCH_DELAY
      );
    }
  }
  flushStreamingBuffer() {
    if (this.streamingMessageId && this.streamingBuffer) {
      const e = this.messages.find((i) => i.id === this.streamingMessageId);
      e ? (e.content += this.streamingBuffer, this.streamingUpdateSignal++) : console.warn("ChatStore: Streaming message not found", { id: this.streamingMessageId }), this.streamingBuffer = "";
    }
  }
  finishStreamingMessage() {
    this.streamingTimeout && (clearTimeout(this.streamingTimeout), this.streamingTimeout = null), this.flushStreamingBuffer(), this.streamingMessageId = null;
  }
  updateMessageContent(e, i) {
    this.messages = this.messages.map((r) => r.id === e ? { ...r, content: i(r.content) } : r);
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
Ai = new WeakMap(), Mi = new WeakMap(), Li = new WeakMap(), Oi = new WeakMap(), Ri = new WeakMap(), Ni = new WeakMap();
function Oa() {
  return new La();
}
const pt = new La(), ms = {
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
  "auto-init": "autoInit",
  "voice-input": "voiceInput"
}, Ue = {
  theme: "modern",
  position: "bottom-right",
  title: "AI Assistant",
  placeholder: "Type your message...",
  avatarEmoji: "🤖",
  initialMessage: void 0,
  quickQuestions: void 0,
  debug: !1,
  autoInit: !0,
  voiceInput: !1
}, Ra = {
  /**
   * Convert camelCase config to snake_case for backend API
   */
  toBackendFormat(t) {
    return {
      client_id: t.clientId,
      theme: t.theme,
      position: t.position,
      title: t.title,
      logo_url: t.logoUrl,
      placeholder: t.placeholder,
      accent_color: t.accentColor,
      avatar_emoji: t.avatarEmoji,
      company_name: t.companyName,
      initial_message: t.initialMessage,
      quick_questions: t.quickQuestions,
      debug: t.debug,
      auto_init: t.autoInit
    };
  },
  /**
   * Convert snake_case backend response to camelCase config
   */
  fromBackendFormat(t) {
    return {
      clientId: t.client_id,
      theme: t.theme,
      position: t.position,
      title: t.title,
      logoUrl: t.logo_url,
      placeholder: t.placeholder,
      accentColor: t.accent_color,
      avatarEmoji: t.avatar_emoji,
      companyName: t.company_name,
      initialMessage: t.initial_message,
      quickQuestions: t.quick_questions,
      debug: t.debug,
      autoInit: t.auto_init
    };
  },
  /**
   * Convert HTML attribute name to property name
   */
  attributeToProperty(t) {
    return ms[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const i = Object.entries(ms).find(([, r]) => r === t);
    return i ? i[0] : null;
  }
}, ud = [
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
function Na(t) {
  return ud.includes(t);
}
function Mr(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function qa(t, e = "#6b46c1") {
  return Mr(t) ? t : e;
}
function jn(t) {
  if (!Mr(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function gd(t) {
  const e = jn(t), i = parseInt(e.slice(1, 3), 16) / 255, r = parseInt(e.slice(3, 5), 16) / 255, n = parseInt(e.slice(5, 7), 16) / 255, s = Math.max(i, r, n), a = Math.min(i, r, n);
  let o = 0, l = 0;
  const d = (s + a) / 2;
  if (s !== a) {
    const c = s - a;
    switch (l = d > 0.5 ? c / (2 - s - a) : c / (s + a), s) {
      case i:
        o = ((r - n) / c + (r < n ? 6 : 0)) / 6;
        break;
      case r:
        o = ((n - i) / c + 2) / 6;
        break;
      case n:
        o = ((i - r) / c + 4) / 6;
        break;
    }
  }
  return { h: o * 360, s: l * 100, l: d * 100 };
}
function hd(t, e, i) {
  e /= 100, i /= 100;
  const r = e * Math.min(i, 1 - i), n = (s) => {
    const a = (s + t / 30) % 12, o = i - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${n(0)}${n(8)}${n(4)}`.toUpperCase();
}
function En(t) {
  if (!Mr(t)) return null;
  const e = jn(t), i = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return `${i}, ${r}, ${n}`;
}
function Ft(t, e) {
  if (!Mr(t)) return t;
  const i = gd(t), r = Math.max(0, Math.min(100, i.l + e));
  return hd(i.h, i.s, r);
}
const fd = [
  "--widget-primary",
  "--widget-primary-hover",
  "--widget-primary-light",
  "--widget-primary-dark",
  "--widget-primary-rgb",
  "--widget-gradient",
  "--widget-gradient-hover",
  "--widget-gradient-subtle",
  "--widget-accent",
  "--widget-accent-light",
  "--widget-accent-dark",
  "--widget-accent-rgb",
  "--widget-accent-warm",
  "--widget-accent-warm-rgb"
];
function Da(t, e = "#6b46c1") {
  const i = qa(t, e), r = jn(i), n = Ft(r, -20), s = Ft(r, 20), a = Ft(r, -30), o = En(r) ?? "107, 70, 193", l = Ft(r, 15), d = Ft(r, -15), c = Ft(r, 10), g = En(c) ?? o;
  return {
    "--widget-primary": r,
    "--widget-primary-hover": n,
    "--widget-primary-light": s,
    "--widget-primary-dark": a,
    "--widget-primary-rgb": o,
    "--widget-gradient": `linear-gradient(135deg, ${r} 0%, ${s} 100%)`,
    "--widget-gradient-hover": `linear-gradient(135deg, ${n} 0%, ${r} 100%)`,
    // hex-alpha suffix requires 6-digit hex — expansion above guarantees this
    "--widget-gradient-subtle": `linear-gradient(135deg, ${r}1a 0%, ${Ft(r, -30)}0d 100%)`,
    "--widget-accent": r,
    "--widget-accent-light": l,
    "--widget-accent-dark": d,
    "--widget-accent-rgb": o,
    "--widget-accent-warm": c,
    "--widget-accent-warm-rgb": g
  };
}
function yr(t, e) {
  if (!t) return;
  const i = Da(e);
  for (const [r, n] of Object.entries(i))
    t.style.setProperty(r, n);
}
function pd(t) {
  if (t)
    for (const e of fd)
      t.style.removeProperty(e);
}
class vd {
  constructor(e) {
    this.isDebugMode = e.debug ?? !1;
  }
  /**
   * Log debug information - only shows in debug mode
   */
  log(e, i, r) {
    this.isDebugMode && (r !== void 0 ? console.log(`[${e}] ${i}:`, r) : console.log(`[${e}] ${i}`));
  }
  /**
   * Log warning information - only shows in debug mode
   */
  warn(e, i, r) {
    this.isDebugMode && (r !== void 0 ? console.warn(`[${e}] ${i}:`, r) : console.warn(`[${e}] ${i}`));
  }
  /**
   * Log error information - always shows (even in production)
   */
  error(e, i, r) {
    r !== void 0 ? console.error(`[${e}] ${i}:`, r) : console.error(`[${e}] ${i}`);
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
function sn(t) {
  return new vd(t);
}
function gn() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const H = {
  isDebugEnabled: gn,
  log: (t, e, i) => {
    gn() && (i !== void 0 ? console.log(`[${t}] ${e}:`, i) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, i) => {
    gn() && (i !== void 0 ? console.warn(`[${t}] ${e}:`, i) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, i) => {
    i !== void 0 ? console.error(`[${t}] ${e}:`, i) : console.error(`[${t}] ${e}`);
  }
};
class Pa {
  constructor() {
    this.currentId = null, this.messageMap = /* @__PURE__ */ new Map();
  }
  /**
   * Generate a new correlation ID
   */
  generate() {
    const e = Date.now(), i = Math.random().toString(36).substr(2, 9), r = `msg_${e}_${i}`;
    return this.currentId = r, r;
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
  setData(e, i) {
    this.messageMap.set(e, i);
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
    const i = `api_${Date.now()}_fallback`;
    return this.currentId = i, i;
  }
  /**
   * Clean up old correlation data (call periodically to prevent memory leaks)
   */
  cleanup(e = 3e5) {
    const i = Date.now();
    for (const [r] of this.messageMap.entries()) {
      const n = r.match(/(\d+)/);
      if (n) {
        const s = parseInt(n[1], 10);
        i - s > e && this.messageMap.delete(r);
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
function za() {
  return new Pa();
}
const md = new Pa();
function Ji() {
  return md;
}
class wd {
  /**
   * Validate message content and length
   */
  static validate(e, i) {
    const r = i ?? Ji().getCurrent();
    if (H.log("MessageValidator", "validate() called", {
      correlationId: r,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const o = "Message is required and must be a string";
      return H.log("MessageValidator", "Validation failed - invalid type", { correlationId: r, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    if (e.length === 0) {
      const o = "Message is too short";
      return H.log("MessageValidator", "Validation failed - empty string", { correlationId: r, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    const n = e.trim();
    if (H.log("MessageValidator", "After trimming", {
      correlationId: r,
      original: e,
      trimmed: n,
      originalLength: e.length,
      trimmedLength: n.length,
      wasWhitespaceOnly: e.length > 0 && n.length === 0
    }), n.length < Mt.MIN_LENGTH) {
      const o = "Message is too short";
      return H.log("MessageValidator", "Validation failed - too short", {
        correlationId: r,
        trimmedLength: n.length,
        minLength: Mt.MIN_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    if (n.length > Mt.MAX_LENGTH) {
      const o = `Message exceeds maximum length of ${Mt.MAX_LENGTH} characters`;
      return H.log("MessageValidator", "Validation failed - too long", {
        correlationId: r,
        trimmedLength: n.length,
        maxLength: Mt.MAX_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    H.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: r,
      inputContent: n,
      inputLength: n.length
    });
    const s = this.sanitizeHTML(n, r);
    H.log("MessageValidator", "HTML sanitization complete", {
      correlationId: r,
      original: n,
      sanitized: s,
      originalLength: n.length,
      sanitizedLength: s.length,
      contentRemoved: n.length !== s.length,
      contentChanged: n !== s,
      removedContent: n.length !== s.length ? {
        removed: n.replace(s, ""),
        difference: n.length - s.length
      } : null
    });
    const a = {
      isValid: !0,
      sanitizedValue: s
    };
    return H.log("MessageValidator", "Final validation result", { correlationId: r, result: a }), a;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e, i) {
    const r = i ?? Ji().getCurrent();
    H.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: r,
      input: e,
      inputLength: e.length
    });
    let n = e, s = 0;
    const a = n;
    n = n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), n !== a && H.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: r,
      before: a,
      after: n,
      removed: a.length - n.length
    });
    const o = n;
    n = n.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), n !== o && H.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: r,
      before: o,
      after: n,
      removed: o.length - n.length
    });
    const l = n;
    n = n.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), n !== l && H.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: r,
      before: l,
      after: n,
      removed: l.length - n.length
    });
    const d = n;
    return n = n.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), n !== d && H.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: r,
      before: d,
      after: n,
      removed: d.length - n.length
    }), H.log("MessageValidator", "sanitizeHTML() result", {
      correlationId: r,
      originalInput: e,
      finalResult: n,
      inputLength: e.length,
      resultLength: n.length,
      totalRemoved: e.length - n.length,
      wasModified: e !== n
    }), n;
  }
}
class Wn {
  static validate(e, i) {
    const r = [];
    for (const n of e) {
      if (typeof n != "string") {
        H.warn(i, `quick-questions: item skipped (type: ${typeof n})`);
        continue;
      }
      if (n.trim().length === 0) {
        H.warn(i, "quick-questions: item skipped (empty or whitespace-only)");
        continue;
      }
      n.length > pi.MAX_LENGTH ? (H.warn(i, `quick-questions: item truncated to ${pi.MAX_LENGTH} chars`), r.push(n.slice(0, pi.MAX_LENGTH))) : r.push(n);
    }
    return r.length > pi.MAX_COUNT ? (H.warn(i, `quick-questions: array capped at ${pi.MAX_COUNT} items (${r.length} provided)`), r.slice(0, pi.MAX_COUNT)) : r;
  }
}
class $a {
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
var qi, Di, Pi, zi, $i, Ui, ji, Wi, Fi, Hi, Bi, Vi, Gi;
class Ua {
  constructor() {
    I(this, qi);
    I(this, Di);
    I(this, Pi);
    I(this, zi);
    I(this, $i);
    I(this, Ui);
    I(this, ji);
    I(this, Wi);
    I(this, Fi);
    I(this, Hi);
    I(this, Bi);
    I(this, Vi);
    I(this, Gi);
    C(this, qi, /* @__PURE__ */ D("")), C(this, Di, /* @__PURE__ */ D(le(Ue.theme))), C(this, Pi, /* @__PURE__ */ D(le(Ue.position))), C(this, zi, /* @__PURE__ */ D(le(Ue.title))), C(this, $i, /* @__PURE__ */ D(le(Ue.logoUrl))), C(this, Ui, /* @__PURE__ */ D(le(Ue.placeholder))), C(this, ji, /* @__PURE__ */ D(le(Ue.accentColor))), C(this, Wi, /* @__PURE__ */ D(le(Ue.avatarEmoji))), C(this, Fi, /* @__PURE__ */ D(le(Ue.companyName))), C(this, Hi, /* @__PURE__ */ D(le(Ue.initialMessage))), C(this, Bi, /* @__PURE__ */ D(le(Ue.quickQuestions))), C(this, Vi, /* @__PURE__ */ D(le(Ue.voiceInput))), C(this, Gi, /* @__PURE__ */ D("default"));
  }
  get clientId() {
    return f(u(this, qi));
  }
  set clientId(e) {
    A(u(this, qi), e, !0);
  }
  get theme() {
    return f(u(this, Di));
  }
  set theme(e) {
    A(u(this, Di), e, !0);
  }
  get position() {
    return f(u(this, Pi));
  }
  set position(e) {
    A(u(this, Pi), e, !0);
  }
  get title() {
    return f(u(this, zi));
  }
  set title(e) {
    A(u(this, zi), e, !0);
  }
  get logoUrl() {
    return f(u(this, $i));
  }
  set logoUrl(e) {
    A(u(this, $i), e, !0);
  }
  get placeholder() {
    return f(u(this, Ui));
  }
  set placeholder(e) {
    A(u(this, Ui), e, !0);
  }
  get accentColor() {
    return f(u(this, ji));
  }
  set accentColor(e) {
    A(u(this, ji), e, !0);
  }
  get avatarEmoji() {
    return f(u(this, Wi));
  }
  set avatarEmoji(e) {
    A(u(this, Wi), e, !0);
  }
  get companyName() {
    return f(u(this, Fi));
  }
  set companyName(e) {
    A(u(this, Fi), e, !0);
  }
  get initialMessage() {
    return f(u(this, Hi));
  }
  set initialMessage(e) {
    A(u(this, Hi), e, !0);
  }
  get quickQuestions() {
    return f(u(this, Bi));
  }
  set quickQuestions(e) {
    A(u(this, Bi), e, !0);
  }
  get voiceInput() {
    return f(u(this, Vi));
  }
  set voiceInput(e) {
    A(u(this, Vi), e, !0);
  }
  get titleSource() {
    return f(u(this, Gi));
  }
  set titleSource(e) {
    A(u(this, Gi), e, !0);
  }
  updateConfig(e, i = "default") {
    if (e.title !== void 0) {
      this.setTitle(e.title, i);
      const { title: r, ...n } = e;
      Object.assign(this, n);
    } else
      Object.assign(this, e);
  }
  /**
   * Set title with priority enforcement
   * Priority: user > backend > default
   */
  setTitle(e, i) {
    const r = ["user", "backend", "default"], n = r.indexOf(this.titleSource);
    r.indexOf(i) <= n && (this.title = e, this.titleSource = i);
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
    const i = this.parseElementAttributes(e);
    this.updateConfig(i, "user"), this.applyTheme(e);
  }
  /**
   * Parse HTML element attributes into configuration object
   * Reuses unified configuration attribute mapping logic
   */
  parseElementAttributes(e) {
    const i = {}, r = e.getAttributeNames();
    for (const n of r) {
      const s = Ra.attributeToProperty(n);
      if (!s) continue;
      const a = e.getAttribute(n);
      if (s === "initialMessage") {
        i.initialMessage = a === "" ? void 0 : a || void 0;
        continue;
      }
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            i[s] = a;
            break;
          case "accentColor":
            i.accentColor = qa(a, this.accentColor);
            break;
          case "theme":
            Na(a) && (i.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (i.position = a);
            break;
          case "companyName":
            i.companyName = a, e.hasAttribute("title") || (i.title = `${a} Assistant`);
            break;
          case "quickQuestions":
            try {
              const o = JSON.parse(a);
              Array.isArray(o) && (i.quickQuestions = Wn.validate(o, "ConfigStore"));
            } catch {
            }
            break;
          case "voiceInput":
            i.voiceInput = a === "true";
            break;
        }
    }
    return i;
  }
  get cssVariables() {
    return this.accentColor ? Da(this.accentColor) : {};
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const i = this.cssVariables;
    for (const [r, n] of Object.entries(i))
      e.style.setProperty(r, n);
  }
}
qi = new WeakMap(), Di = new WeakMap(), Pi = new WeakMap(), zi = new WeakMap(), $i = new WeakMap(), Ui = new WeakMap(), ji = new WeakMap(), Wi = new WeakMap(), Fi = new WeakMap(), Hi = new WeakMap(), Bi = new WeakMap(), Vi = new WeakMap(), Gi = new WeakMap();
function ja() {
  return new Ua();
}
const Ae = new Ua(), Wa = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", bd = Wa, yd = Wa;
var xd = /* @__PURE__ */ F('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), _d = /* @__PURE__ */ Un('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), kd = /* @__PURE__ */ F('<span class="unread-indicator svelte-bkcus6"></span>'), Sd = /* @__PURE__ */ F("<button><!> <!></button>");
const Cd = {
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

  /* Enhancement 3: Gold glow as pseudo-element for GPU-accelerated transitions */.floating-button.svelte-bkcus6::after {content:'';position:absolute;inset:-4px;border-radius:inherit;background:transparent;box-shadow:0 0 20px rgba(var(--widget-accent-rgb), 0.5);opacity:0.5;transition:opacity 0.2s var(--widget-ease-spring);pointer-events:none;z-index:-1;}.floating-button.svelte-bkcus6:hover::after {opacity:1;}.floating-button.svelte-bkcus6:hover {transform:translateY(-3px);border-color:var(--widget-accent-light);}.floating-button.svelte-bkcus6:active {transform:translateY(-1px) scale(0.97);transition-duration:0.1s;}

  /* Focus-visible for accessibility.
     Note: ring and glow use the integrator's accent-color; very dark accents
     reduce contrast against dark host pages — see "Choosing an accent color"
     in docs/integration-guide.md and README.md. */.floating-button.svelte-bkcus6:focus-visible {outline:2px solid var(--widget-accent);outline-offset:3px;}.floating-button.svelte-bkcus6:focus-visible::after {opacity:1;box-shadow:0 0 0 4px rgba(var(--widget-accent-rgb), 0.25),
                0 0 20px rgba(var(--widget-accent-rgb), 0.5);}.floating-button.open.svelte-bkcus6 {
    /* When open, use blue border to match header */background:var(--widget-primary);border-color:var(--widget-primary);}.floating-button.open.svelte-bkcus6::after {box-shadow:0 0 20px rgba(var(--widget-primary-rgb), 0.5);}.floating-button.svelte-bkcus6 svg:where(.svelte-bkcus6) {width:24px;height:24px;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;
    /* Subtle drop shadow on icon */filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));}.floating-button.svelte-bkcus6 .button-logo:where(.svelte-bkcus6) {
    /* Logo fills most of the button */width:100%;height:100%;border-radius:var(--widget-radius-full);object-fit:cover;transition:transform 0.25s var(--widget-ease-spring);position:relative;z-index:1;}.floating-button.open.svelte-bkcus6 svg:where(.svelte-bkcus6) {transform:rotate(90deg);}.unread-indicator.svelte-bkcus6 {position:absolute;top:-2px;right:-2px;width:16px;height:16px;background:var(--widget-accent);border-radius:var(--widget-radius-full);border:2px solid var(--widget-background);
    /* Bot Gold glow effect */box-shadow:0 0 8px rgba(var(--widget-accent-rgb), 0.5);
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
function Fa(t, e) {
  Ye(e, !0), nt(t, Cd);
  let i = q(e, "onclick", 7), r = q(e, "ui", 7, Pt), n = q(e, "buttonRef", 15, null);
  const s = /* @__PURE__ */ ee(() => r().isOpen), a = /* @__PURE__ */ ee(() => r().hasUnreadMessages);
  function o() {
    var h;
    (h = i()) == null || h();
  }
  var l = {
    get onclick() {
      return i();
    },
    set onclick(h) {
      i(h), R();
    },
    get ui() {
      return r();
    },
    set ui(h = Pt) {
      r(h), R();
    },
    get buttonRef() {
      return n();
    },
    set buttonRef(h = null) {
      n(h), R();
    }
  }, d = Sd();
  let c;
  d.__click = o;
  var g = G(d);
  {
    var v = (h) => {
      var w = xd();
      he(() => ce(w, "src", bd)), N(h, w);
    }, p = (h) => {
      var w = _d();
      N(h, w);
    };
    te(g, (h) => {
      f(s) ? h(p, !1) : h(v);
    });
  }
  var k = J(g, 2);
  {
    var x = (h) => {
      var w = kd();
      N(h, w);
    };
    te(k, (h) => {
      f(a) && !f(s) && h(x);
    });
  }
  return V(d), Ar(d, (h) => n(h), () => n()), he(() => {
    c = ci(d, 1, "floating-button svelte-bkcus6", null, c, { open: f(s) }), ce(d, "aria-label", f(s) ? "Close chat" : "Open chat");
  }), N(t, d), Qe(l);
}
Ut(["click"]);
st(Fa, { onclick: {}, ui: {}, buttonRef: {} }, [], [], !0);
const Td = 0.2, Ed = 0.1;
function ws(t, e) {
  return t + e * Td;
}
function Id(t) {
  return Math.max(0, t - Ed);
}
var Ad = /* @__PURE__ */ F('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Md = /* @__PURE__ */ F('<div class="chip-scroll svelte-otpvm8"></div>'), Ld = /* @__PURE__ */ F('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Od = /* @__PURE__ */ F('<div role="group" aria-label="Suggested questions" part="quick-questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const Rd = {
  hash: "svelte-otpvm8",
  code: `.quick-questions.svelte-otpvm8 {display:flex;flex-direction:column;align-items:center;align-self:center;gap:10px;padding:var(--widget-space-xs) 0;width:100%;max-width:280px;}

  /* Compact: small chips in a horizontal scrolling row, no visible label.
     Used under the resting bar so suggestions stay unobtrusive.
     The outer .quick-questions.compact is now a non-scrolling WRAPPER that owns
     ONLY the right-edge fade mask; the inner .chip-scroll owns overflow + focus
     so a focused chip's :focus-visible ring is never clipped by the mask
     (WCAG 2.4.11). */.quick-questions.compact.svelte-otpvm8 {flex-flow:row nowrap;justify-content:flex-start;gap:0;width:100%;max-width:100%;min-width:0; /* flex fix: respect the bar width so the inner row clips+scrolls
                     instead of growing to content width and escaping the bar */padding:0;
    /* Fade the right edge so the overflow reads as "scroll for more", not "cut".
       Mask is on the wrapper (not the scroller) so focus rings stay visible. */-webkit-mask-image:linear-gradient(to right, #000 calc(100% - 22px), transparent);mask-image:linear-gradient(to right, #000 calc(100% - 22px), transparent);}

  /* Inner scroll row: the actual horizontal scroller (and focus host). Because
     :focus-visible outlines render on the chips inside THIS element — which is
     not masked — a Tab-focused chip's ring is fully visible. Native scroll also
     brings a keyboard-focused chip into view past the fade. */.chip-scroll.svelte-otpvm8 {display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start; /* first chip flush-left, fully visible */gap:6px;width:100%;min-width:0;overflow-x:auto;scrollbar-width:none; /* Firefox */
    /* Padding keeps a focused chip's 2px outline (offset 2px) from being clipped
       by the scroll container's own edge. */padding:4px 0;}.chip-scroll.svelte-otpvm8::-webkit-scrollbar {display:none; /* WebKit — keep the row clean */}.quick-questions.compact.svelte-otpvm8 .section-label:where(.svelte-otpvm8) {display:none;}.quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8) {flex:0 0 auto; /* keep natural width + readable; scroll instead of shrink */min-height:30px;padding:3px 10px;font-size:0.7rem;
    /* Frosted glass: a translucent tint over a strong blur — frosted, NOT opaque.
       The 85% frost keeps the chip label (--widget-primary #1e5ba8, L=0.106)
       above WCAG AA 4.5:1 against ANY backdrop: even a pure-black worst case the
       frost composites to L≈0.69 → 4.76:1; over mid/light backdrops it clears
       comfortably (~5.5:1+). 60% was the prior value and failed (2.36:1 over a
       dark backdrop). The blur stays so soft colour/light still reads through
       (glass), while background TEXT is obscured so the label reads cleanly.
       Theme-aware via --widget-background (dark in dark theme — see dark block). */background:color-mix(in srgb, var(--widget-background) calc(clamp(0, var(--widget-bar-rest-opacity, 0.85), 1) * 100%), transparent);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);}

  /* Restore the fill-on-hover (the compact bg rule above would otherwise win). */.quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8):hover:not(:disabled) {background:var(--widget-primary);}.section-label.svelte-otpvm8 {font-size:var(--widget-font-size-xs);color:var(--widget-text-muted);margin-bottom:var(--widget-space-xs);
    /* animation-delay is set inline, driven by animationDelayBase, so the
       label stays in sync with the chips in both bar and in-window modes. */
    animation: svelte-otpvm8-fadeInUp 0.3s var(--widget-ease-out-expo) backwards;}.question-chip.svelte-otpvm8 {min-height:44px;padding:var(--widget-space-sm) var(--widget-space-lg);border:1.5px solid var(--widget-primary);border-radius:var(--widget-radius-full);background:transparent;color:var(--widget-primary);cursor:pointer;transition:background var(--widget-transition),
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
  .question-chip.svelte-otpvm8:disabled:active {background:transparent;color:var(--widget-text-secondary);transform:none;box-shadow:none;}[data-theme="dark"] .question-chip.svelte-otpvm8:disabled {border:1.5px solid var(--widget-text-muted);color:var(--widget-text-muted);}[data-theme="dark"] .question-chip.svelte-otpvm8 {border-color:var(--widget-primary-light);color:var(--widget-primary-light);}[data-theme="dark"] .question-chip.svelte-otpvm8:hover {background:var(--widget-primary-light);color:var(--widget-text-inverse);}

  /* Dark compact chip: --widget-background resolves dark, so the 85% frost is a
     DARK frost. color-mix(in srgb, var(--widget-primary-light) 55%, white) lifts
     the chip label to a lighter tint that follows the accent color when set.
     Derivation: dark frost composite = 0.85·#0a0e14 + 0.15·black ≈ #090c11
     (L≈0.002); inside the Shadow DOM --widget-primary-light comes from
     DARK_THEME.primaryLight = #fbbf24 (bright gold, themes.ts:72) — NOT #3b82f6.
     color-mix result for default dark primary-light: 0.55·#fbbf24 + 0.45·white
     ≈ #fdd07f (light amber, L≈0.731) → contrast vs dark frost ≈ 15:1 (well above
     AA 4.5:1). With accent-color set, --widget-primary-light re-derives from the
     accent's light variant via adjustColor(accent, +20); the worst-case #222222
     accent still produces ≥7:1 contrast. Resting bar in light theme keeps the
     #1e5ba8 label (the light-frost path). */[data-theme="dark"] .quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8) {color:color-mix(in srgb, var(--widget-primary-light) 55%, white);border-color:color-mix(in srgb, var(--widget-primary-light) 55%, white);}[data-theme="dark"] .quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8):hover:not(:disabled) {color:var(--widget-text-inverse);}`
};
function Fn(t, e) {
  Ye(e, !0), nt(t, Rd);
  const i = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let r = q(e, "questions", 7, i), n = q(e, "onsend", 7), s = q(e, "disabled", 7, !1), a = q(e, "animationDelayBase", 7, 2.8), o = q(e, "compact", 7, !1);
  function l(h) {
    var w;
    s() || (w = n()) == null || w(h);
  }
  var d = {
    get questions() {
      return r();
    },
    set questions(h = i) {
      r(h), R();
    },
    get onsend() {
      return n();
    },
    set onsend(h) {
      n(h), R();
    },
    get disabled() {
      return s();
    },
    set disabled(h = !1) {
      s(h), R();
    },
    get animationDelayBase() {
      return a();
    },
    set animationDelayBase(h = 2.8) {
      a(h), R();
    },
    get compact() {
      return o();
    },
    set compact(h = !1) {
      o(h), R();
    }
  }, c = Od();
  let g;
  var v = G(c), p = J(v, 2);
  {
    var k = (h) => {
      var w = Md();
      Cn(w, 22, r, (L) => L, (L, m, y) => {
        var T = Ad();
        T.__click = () => l(m);
        var _ = G(T, !0);
        V(T), he(
          (M) => {
            T.disabled = s(), ce(T, "title", m), Pr(T, `animation-delay: ${M ?? ""}s`), ce(T, "aria-disabled", s() ? "true" : "false"), Tt(_, m);
          },
          [() => ws(a(), f(y))]
        ), N(L, T);
      }), V(w), N(h, w);
    }, x = (h) => {
      var w = tr(), L = Ge(w);
      Cn(L, 18, r, (m) => m, (m, y, T) => {
        var _ = Ld();
        _.__click = () => l(y);
        var M = G(_, !0);
        V(_), he(
          (j) => {
            _.disabled = s(), ce(_, "title", y), Pr(_, `animation-delay: ${j ?? ""}s`), ce(_, "aria-disabled", s() ? "true" : "false"), Tt(M, y);
          },
          [() => ws(a(), f(T))]
        ), N(m, _);
      }), N(h, w);
    };
    te(p, (h) => {
      o() ? h(k) : h(x, !1);
    });
  }
  return V(c), he(
    (h) => {
      g = ci(c, 1, "quick-questions svelte-otpvm8", null, g, { compact: o() }), Pr(v, `animation-delay: ${h ?? ""}s`);
    },
    [() => Id(a())]
  ), N(t, c), Qe(d);
}
Ut(["click"]);
st(
  Fn,
  {
    questions: {},
    onsend: {},
    disabled: {},
    animationDelayBase: {},
    compact: {}
  },
  [],
  [],
  !0
);
function Nd(t) {
  var i;
  const e = t.getValue().trim();
  return e ? (t.setValue(""), (i = t.onsubmit) == null || i.call(t, e), !0) : !1;
}
function qd(t, e) {
  return t === "Enter" && !e;
}
function Ha(t) {
  return typeof t == "string" && t.trim().toLowerCase() === "collapsed" ? "collapsed" : "visible";
}
var Dd = /* @__PURE__ */ F('<div class="resting-chips svelte-6j7vcd"><div class="resting-chips-inner svelte-6j7vcd"><!></div></div>'), Pd = /* @__PURE__ */ F('<div part="resting-bar-wrapper"><div class="resting-bar svelte-6j7vcd" role="search" aria-label="Chat with assistant" part="resting-bar"><input type="text" class="resting-input svelte-6j7vcd" placeholder="Ask a question…" aria-label="Ask a question" part="resting-input"/> <button class="resting-send svelte-6j7vcd" part="resting-send" aria-label="Send message"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div> <!></div>');
const zd = {
  hash: "svelte-6j7vcd",
  code: `
  /*
   * Resting bar: fixed, bottom-center, slim footprint. Always centered
   * regardless of the \`position\` attribute (which only seeds the open
   * animation's target corner).
   */.resting-bar-wrapper.svelte-6j7vcd {position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:var(--widget-z-base, 9000);display:flex;flex-direction:column;align-items:center;gap:var(--widget-space, 12px);

    /* Match the desktop chat window width so the pill's footprint lines up with
       the window's, letting the window unfold upward out of it. Read from the
       integrator-tunable --widget-bar-width token; the chat window reads the
       SAME token (ChatWidget.svelte) so the bar→window morph stays aligned. The
       100vw clamp keeps the bar on-screen on narrow viewports and MUST use the
       same inset as the window's clamp (ChatWidget.svelte: \`2 * --widget-space-lg\`)
       so the two resolve to identical widths even when the clamp binds — else a
       large --widget-bar-width desyncs the morph. */width:min(var(--widget-bar-width, 400px), calc(100vw - 2 * var(--widget-space-lg)));font-family:var(--widget-font-family);}

  /* The chip-row wrappers must span the bar width (not shrink-to-fit) so the
     compact QuickQuestions row clips + horizontally scrolls WITHIN the bar
     instead of escaping its edges. As centered column-flex items these divs
     would otherwise size to content; width:100% pins them to the bar, and
     min-width:0 lets the inner row's scroll-clip work. Applies in both rest-chips
     modes. */.resting-chips.svelte-6j7vcd,
  .resting-chips-inner.svelte-6j7vcd {width:100%;min-width:0;}

  /*
   * Collapsed chips (rest-chips="collapsed"): hide the chip row at rest and
   * reveal it on focus via pure CSS :focus-within (zero $state). The pill is the
   * last flex child and stays put; the chips animate to ZERO intrinsic height
   * when collapsed (grid-template-rows:0fr on the grid wrapper + collapsed gap),
   * so the row grows UPWARD on reveal to the content's natural height — no magic
   * max-height cap, no clip at any zoom. visibility:hidden at rest removes the
   * chip buttons from BOTH the a11y tree and the tab order, so screen-reader and
   * keyboard users skip them entirely until focus enters the bar (the input/send
   * pill precedes .resting-chips in DOM, so :focus-within flips visibility:visible
   * before a Tab can reach a chip). visibility is sequenced after the fade so the
   * chips fade out THEN go inert; on reveal it flips instantly.
   * Note: interpolating grid-template-rows (0fr↔1fr) needs Chrome 107+/FF 66+/
   * Safari 16+. On older engines the reveal degrades gracefully to an instant
   * height change (still fully functional; only the grow animation is lost).
   */.resting-bar-wrapper.chips-collapsed.svelte-6j7vcd {gap:0; /* collapse the column gap so no reserved sliver shows at rest */}.chips-collapsed.svelte-6j7vcd .resting-chips:where(.svelte-6j7vcd) {display:grid;grid-template-rows:0fr;opacity:0;visibility:hidden;pointer-events:none;transition:opacity 200ms var(--widget-ease-out-expo),
                grid-template-rows 200ms var(--widget-ease-out-expo),
                visibility 0s linear 200ms; /* flip to hidden AFTER the fade */}

  /* The immediate grid child must clip its own overflow and be able to shrink to
     0fr — min-height:0 lets the grid track collapse fully. */.chips-collapsed.svelte-6j7vcd .resting-chips-inner:where(.svelte-6j7vcd) {overflow:hidden;min-height:0;}

  /* Reveal on focus anywhere in the bar (input focus, or a chip itself). */.resting-bar-wrapper.chips-collapsed.svelte-6j7vcd:focus-within {gap:var(--widget-space, 12px);}.chips-collapsed.svelte-6j7vcd:focus-within .resting-chips:where(.svelte-6j7vcd) {grid-template-rows:1fr; /* animate to the chip strip's intrinsic height */opacity:1;visibility:visible; /* instant — no delay — so chips are focusable on reveal */pointer-events:auto;transition:opacity 200ms var(--widget-ease-out-expo),
                grid-template-rows 200ms var(--widget-ease-out-expo),
                visibility 0s linear 0s;}

  /* Mobile: near-full width with side margins */
  @media (max-width: 480px) {.resting-bar-wrapper.svelte-6j7vcd {width:calc(100vw - 2rem);bottom:16px;}
  }

  /*
   * Transition A Phase 1 (desktop only): slide the centered pill toward the
   * target corner while fading out, masking the swap to the scaling window.
   * The resting transform is translateX(-50%); the keyframe preserves that
   * offset and adds the corner shift. Mobile keeps the bar centered (the
   * window is a full-screen takeover, so Phase 1 is skipped).
   */
  @media (min-width: 768px) {.resting-bar-wrapper.translating.svelte-6j7vcd {
      animation: svelte-6j7vcd-barToCornerRight 450ms cubic-bezier(0.4, 0, 0.2, 1) forwards;}.resting-bar-wrapper.translating[data-position="bottom-left"].svelte-6j7vcd {
      animation-name: svelte-6j7vcd-barToCornerLeft;}

    /*
     * Glide the centered pill so its RIGHT edge lands exactly on the chat
     * window's right edge (viewport_right − --widget-space-lg). The resting
     * transform is translateX(-50%) off a left:50% base, so the target delta
     * subtracts the FULL element width (100%) — subtracting half (50%) is what
     * overshot the right edge ~width/2 off-screen. The pill stays fully OPAQUE
     * through the glide: when it lands, the window unmounts the bar and unfolds
     * upward from the same footprint (see ChatWidget barExpandUp), so fading the
     * pill here would read as "disappears then pops" instead of a morph.
     */
    @keyframes svelte-6j7vcd-barToCornerRight {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(calc(50vw - var(--widget-space-lg, 16px) - 100%));
      }
    }

    /* Mirror: left edge lands on the window's left edge (--widget-space-lg). */
    @keyframes svelte-6j7vcd-barToCornerLeft {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(calc(var(--widget-space-lg, 16px) - 50vw));
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {.resting-bar-wrapper.translating.svelte-6j7vcd {
      animation: none !important;opacity:0;}

    /* No collapse/reveal easing for vestibular-sensitive users — the grid/opacity
       reveal snaps instantly. The chips still toggle on focus; only the motion is
       removed. visibility flips with 0s delay too (no lingering 200ms that would
       leave a flash of inert-but-visible chips). */.chips-collapsed.svelte-6j7vcd .resting-chips:where(.svelte-6j7vcd),
    .chips-collapsed.svelte-6j7vcd:focus-within .resting-chips:where(.svelte-6j7vcd) {transition:visibility 0s !important;}
  }.resting-bar.svelte-6j7vcd {display:flex;align-items:center;gap:0;

    /* iOS-style frosted glass — UNIFIED with the compact quick-question chips
       (QuickQuestions.svelte): same 85% color-mix frost + blur so bar and chips
       render as one consistent frosted surface in light AND dark themes. 85%
       (was --widget-glass ~0.98) keeps the surface translucent/frosted while
       guaranteeing the bar's input text (--widget-text #0f172a) and placeholder
       (--widget-text-secondary) clear WCAG AA over any backdrop: input ≥12.6:1,
       placeholder ≥5.35:1 even over the worst-case dark backdrop. Theme-aware
       via --widget-background (dark in dark theme → dark frost). */
    /* Frost ratio is integrator-tunable via --widget-bar-rest-opacity (default
       0.85). Lower = more transparent until engaged. The ratio composites
       against the theme-aware --widget-background, so it stays dark-theme-aware
       without recoloring the shared surface. */background:color-mix(in srgb, var(--widget-background) calc(clamp(0, var(--widget-bar-rest-opacity, 0.85), 1) * 100%), transparent);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--widget-border-light);border-radius:var(--widget-radius-full); /* Fully rounded pill */box-shadow:var(--widget-shadow-bar, 0 8px 32px rgba(0, 0, 0, 0.12)); /* literal fallback for non-Shadow-DOM (app.css) context */overflow:hidden;width:100%;height:48px;transition:background var(--widget-transition);}

  /* Lift the frost to fully opaque once the visitor engages (hover or focus) so
     the input reads at maximum contrast while typing. At rest it honors the
     tunable --widget-bar-rest-opacity. */.resting-bar-wrapper.svelte-6j7vcd:hover .resting-bar:where(.svelte-6j7vcd),
  .resting-bar-wrapper.svelte-6j7vcd:focus-within .resting-bar:where(.svelte-6j7vcd) {background:var(--widget-background);}.resting-input.svelte-6j7vcd {flex:1;min-width:0;height:100%;padding:0 1rem 0 1.25rem;border:none;background:transparent;outline:none;font-size:0.9375rem;
    /* --widget-text-primary is not a defined token; use --widget-text (the
       canonical high-contrast body color, #0f172a light / #f8fafc dark) so the
       typed text contrast over the 85% frost is guaranteed, not inherited. */color:var(--widget-text);font-family:var(--widget-font-family);caret-color:var(--widget-primary);}.resting-input.svelte-6j7vcd::placeholder {color:var(--widget-text-secondary, #718096);}.resting-send.svelte-6j7vcd {flex-shrink:0;
    /* WCAG 2.5.5: 44x44 minimum touch target. margin 2px keeps the 48px pill. */width:44px;height:44px;margin:2px;border:none;border-radius:var(--widget-radius-full);background:var(--widget-primary);color:var(--widget-text-inverse, #fff);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--widget-transition), opacity var(--widget-transition);}.resting-send.svelte-6j7vcd:hover:not(:disabled) {background:var(--widget-primary-hover);}.resting-send.svelte-6j7vcd:disabled {opacity:0.4;cursor:default;}.resting-send.svelte-6j7vcd:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .resting-bar.svelte-6j7vcd {
    /* --widget-background resolves dark here, so the same 85% color-mix frost
       (inherited from .resting-bar above) produces a dark frost — matching the
       compact chips. Keep the blur; just firm up the border for contrast. */border-color:var(--widget-border);}`
};
function Ba(t, e) {
  Ye(e, !0), nt(t, zd);
  let i = q(e, "config", 7, Ae), r = q(e, "position", 7, "bottom-right"), n = q(e, "onsubmit", 7), s = q(e, "onchip", 7), a = q(e, "translating", 7, !1), o = q(e, "onanimationend", 7), l = q(e, "restChips", 7, "visible");
  const d = /* @__PURE__ */ ee(() => Ha(l()));
  let c = /* @__PURE__ */ D("");
  function g() {
    Nd({
      getValue: () => f(c),
      setValue: (_) => {
        A(c, _, !0);
      },
      onsubmit: n()
    });
  }
  function v(_) {
    qd(_.key, _.shiftKey) && (_.preventDefault(), g());
  }
  const p = /* @__PURE__ */ ee(() => {
    var _;
    return (_ = i()) == null ? void 0 : _.quickQuestions;
  });
  var k = {
    get config() {
      return i();
    },
    set config(_ = Ae) {
      i(_), R();
    },
    get position() {
      return r();
    },
    set position(_ = "bottom-right") {
      r(_), R();
    },
    get onsubmit() {
      return n();
    },
    set onsubmit(_) {
      n(_), R();
    },
    get onchip() {
      return s();
    },
    set onchip(_) {
      s(_), R();
    },
    get translating() {
      return a();
    },
    set translating(_ = !1) {
      a(_), R();
    },
    get onanimationend() {
      return o();
    },
    set onanimationend(_) {
      o(_), R();
    },
    get restChips() {
      return l();
    },
    set restChips(_ = "visible") {
      l(_), R();
    }
  }, x = Pd();
  let h;
  var w = G(x), L = G(w);
  Zl(L), L.__keydown = v;
  var m = J(L, 2);
  m.__click = g, V(w);
  var y = J(w, 2);
  {
    var T = (_) => {
      var M = Dd(), j = G(M), Y = G(j);
      Fn(Y, {
        get questions() {
          return f(p);
        },
        get onsend() {
          return s();
        },
        animationDelayBase: 0.3,
        compact: !0
      }), V(j), V(M), N(_, M);
    };
    te(y, (_) => {
      f(p) && f(p).length > 0 && _(T);
    });
  }
  return V(x), he(
    (_) => {
      h = ci(x, 1, "resting-bar-wrapper svelte-6j7vcd", null, h, {
        translating: a(),
        "chips-collapsed": f(d) === "collapsed"
      }), ce(x, "data-position", r()), m.disabled = _;
    },
    [() => !f(c).trim()]
  ), ka("animationend", x, function(..._) {
    var M;
    (M = o()) == null || M.apply(this, _);
  }), Ta(L, () => f(c), (_) => A(c, _)), N(t, x), Qe(k);
}
Ut(["keydown", "click"]);
st(
  Ba,
  {
    config: {},
    position: {},
    onsubmit: {},
    onchip: {},
    translating: {},
    onanimationend: {},
    restChips: {}
  },
  [],
  [],
  !0
);
class ze extends Error {
  constructor(e, i, r = !1) {
    super(e), this.name = "ChatWidgetError", this.context = i, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = r, Error.captureStackTrace && Error.captureStackTrace(this, ze);
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
class mi extends ze {
  constructor(e, i, r, n) {
    super(e, { ...n, statusCode: i, endpoint: r }, !0), this.name = "NetworkError", this.statusCode = i, this.endpoint = r;
  }
}
class Va extends ze {
  constructor(e, i, r, n, s) {
    super(e, { ...s, wsUrl: i, closeCode: r, closeReason: n }, !0), this.name = "WebSocketError", this.wsUrl = i, this.closeCode = r, this.closeReason = n;
  }
}
class fr extends ze {
  constructor(e, i, r, n, s) {
    super(e, { ...s, field: i, value: r, expectedType: n }, !1), this.name = "ValidationError", this.field = i, this.value = r, this.expectedType = n;
  }
}
class Ga extends ze {
  constructor(e, i, r, n) {
    super(e, { ...n, configKey: i, configValue: r }, !1), this.name = "ConfigurationError", this.configKey = i, this.configValue = r;
  }
}
class Ya extends ze {
  constructor(e, i, r, n) {
    super(e, { ...n, clientId: i, statusCode: r }, !1), this.name = "AuthenticationError", this.clientId = i, this.statusCode = r;
  }
}
class wi extends ze {
  constructor(e, i, r, n) {
    super(e, { ...n, retryAfter: i, limit: r }, !0), this.name = "RateLimitError", this.retryAfter = i, this.limit = r;
  }
}
class Qa extends ze {
  constructor(e, i, r, n) {
    super(e, { ...n, storageType: i, operation: r }, !0), this.name = "StorageError", this.storageType = i, this.operation = r;
  }
}
class Xa extends ze {
  constructor(e, i, r, n) {
    super(e, { ...n, timeout: i, operation: r }, !0), this.name = "TimeoutError", this.timeout = i, this.operation = r;
  }
}
function bs(t) {
  return t instanceof ze ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function $d(t) {
  return t instanceof ze ? {
    name: t.name,
    message: t.message,
    context: t.context,
    timestamp: t.timestamp,
    isRetryable: t.isRetryable
  } : t instanceof Error ? {
    name: t.name,
    message: t.message,
    stack: t.stack
  } : {
    error: String(t),
    type: typeof t
  };
}
function Ud(t) {
  return t instanceof mi ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof wi ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Va ? "Connection lost. Attempting to reconnect..." : t instanceof Ya ? "Access denied. Please check your configuration." : t instanceof fr ? t.message : t instanceof Ga ? "Widget configuration error. Please contact support." : t instanceof Xa ? "Request timed out. Please try again." : t instanceof Qa ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class pr {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, i) {
    const r = $d(e);
    let n;
    return e instanceof mi ? n = "NETWORK_ERROR" : e instanceof Va ? n = "WEBSOCKET_ERROR" : e instanceof fr ? n = "VALIDATION_ERROR" : e instanceof Ga ? n = "CONFIGURATION_ERROR" : e instanceof Ya ? n = "AUTHENTICATION_ERROR" : e instanceof wi ? n = "RATE_LIMIT_ERROR" : e instanceof Qa ? n = "STORAGE_ERROR" : e instanceof Xa ? n = "TIMEOUT_ERROR" : e instanceof ze ? n = "WIDGET_ERROR" : n = "UNKNOWN_ERROR", {
      message: Ud(e),
      code: n,
      isUserFacing: !0,
      shouldRetry: bs(e),
      context: {
        ...i,
        metadata: {
          ...i.metadata,
          errorDetails: r
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : bs(e);
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
const jd = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class In {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, i = {}) {
    const r = $a.validate(e);
    if (!r.isValid)
      throw new Error(`Invalid client ID for URL resolution: ${r.error}`);
    const n = r.sanitizedValue;
    return this.isDevelopmentEnvironment(i.environment) ? this.resolveDevelopmentUrls(n) : this.resolveProductionUrls(n);
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
    const i = jd, r = this.isLocalhostUrl(i) ? i : this.ensureHttps(i);
    return {
      apiUrl: this.buildApiUrl(r, e),
      wsUrl: this.buildWsUrl(r, e)
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
  static buildApiUrl(e, i) {
    return this.buildUrlWithPath(e, `/api/v1/widget/${i}`);
  }
  /**
   * Build WebSocket URL by properly appending path to base URL and converting protocol
   */
  static buildWsUrl(e, i) {
    const r = this.buildUrlWithPath(e, `/api/v1/communication/${i}/ws`);
    return this.convertToWebSocket(r);
  }
  /**
   * Safely append a path to a base URL, handling query parameters and fragments correctly
   */
  static buildUrlWithPath(e, i) {
    try {
      const r = new URL(e);
      return r.pathname = (r.pathname === "/" ? "" : r.pathname) + i, r.toString();
    } catch {
      const n = e.endsWith("/") ? "" : "/";
      return e + n + i.substring(1);
    }
  }
  /**
   * Convert HTTP/HTTPS URL to WS/WSS URL
   */
  static convertToWebSocket(e) {
    try {
      const i = new URL(e);
      return i.protocol === "https:" ? i.protocol = "wss:" : i.protocol === "http:" && (i.protocol = "ws:"), i.toString();
    } catch {
      return e.replace("https://", "wss://").replace("http://", "ws://");
    }
  }
  /**
   * Check if URL points to localhost
   */
  static isLocalhostUrl(e) {
    try {
      const i = new URL(e);
      return ["localhost", "127.0.0.1", "::1"].includes(i.hostname);
    } catch {
      return e.includes("localhost") || e.includes("127.0.0.1");
    }
  }
}
class Ka {
  constructor(e) {
    try {
      const i = window, r = i.AIChat || i.ChatWidget || {}, n = e ? this.parseElementAttributes(e) : {}, s = {
        ...Ue,
        ...r,
        ...n
      };
      if ((r.apiUrl || r.wsUrl) && console.warn(
        `[Assistant Widget] Deprecation Warning: window.AIChat.apiUrl and window.AIChat.wsUrl are no longer supported.
URL configuration is now handled at build time via VITE_API_BASE_URL environment variable.
For local development: npm run build:local
For production: npm run build (uses default staging gateway)`
      ), !s.clientId)
        throw new Error("Widget configuration missing: clientId is required");
      const a = $a.validate(s.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = In.resolveUrls(a.sanitizedValue);
      this.config = {
        ...s,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (i) {
      const r = pr.handle(i, {
        component: "ConfigManager",
        action: "constructor"
      });
      throw new Error(r.message);
    }
  }
  /**
   * Parse HTML element attributes into configuration object
   * Uses unified configuration attribute mapping
   */
  parseElementAttributes(e) {
    const i = {}, r = e.getAttributeNames();
    for (const n of r) {
      const s = Ra.attributeToProperty(n);
      if (!s) continue;
      const a = e.getAttribute(n);
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "avatarEmoji":
            i[s] = a;
            break;
          case "accentColor":
            i.accentColor = Mr(a) ? a : void 0;
            break;
          case "theme":
            Na(a) && (i.theme = a);
            break;
          case "position":
            (a === "bottom-left" || a === "bottom-right") && (i.position = a);
            break;
          case "debug":
          case "autoInit":
            i[s] = a === "true" || a === "";
            break;
          case "companyName":
            i.companyName = a, e.hasAttribute("title") || (i.title = `${a} Assistant`);
            break;
        }
    }
    return i;
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
const Zi = /* @__PURE__ */ new Map();
let xr = !1;
function Wd() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
xr = !Wd();
function Fd(t) {
  try {
    return xr ? Zi.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return Zi.get(t) ?? null;
  }
}
function Hd(t, e) {
  try {
    return xr ? (Zi.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return Zi.set(t, e), xr = !0, !1;
  }
}
function Bd(t) {
  try {
    if (xr) {
      Zi.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    Zi.delete(t);
  }
}
const et = class et {
  /**
   * @param storageAdapter - Optional storage adapter for testing (defaults to localStorage via safe utils)
   */
  constructor(e) {
    this.storageAdapter = e, this.visitorId = this.getOrCreateVisitorId();
  }
  getOrCreateVisitorId() {
    var i;
    let e = this.getItem(et.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(et.VISITOR_ID_KEY, e), (i = window.AIChat) != null && i.debug && H.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Fd(e);
  }
  setItem(e, i) {
    this.storageAdapter ? this.storageAdapter.setItem(e, i) : Hd(e, i);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Bd(e);
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
    const i = this.getSessionHistory();
    i.push({
      id: e,
      timestamp: Date.now(),
      active: !0
    });
    const r = i.slice(-10);
    this.setItem(
      et.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  getSessionHistory() {
    const e = this.getItem(et.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const i = this.getSessionHistory().filter(
      (r) => r.active && Date.now() - r.timestamp < ge.SESSION_TIMEOUT
    );
    return i.length > 0 ? i[i.length - 1].id : null;
  }
  /**
   * Mark a session as inactive when it ends
   */
  markSessionInactive(e) {
    const r = this.getSessionHistory().map(
      (n) => n.id === e ? { ...n, active: !1 } : n
    );
    this.setItem(
      et.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(et.VISITOR_ID_KEY), this.removeItem(et.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
et.VISITOR_ID_KEY = vs.VISITOR_ID, et.SESSION_HISTORY_KEY = vs.SESSIONS;
let Br = et;
class cr {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, i) {
    const { apiUrl: r } = In.resolveUrls(i.clientId, i.options);
    switch (e) {
      case "init":
        return `${r}/init`;
      case "chat":
        return `${r}/chat`;
      case "sessionHealth":
        if (!i.sessionId)
          throw new Error("sessionId required for sessionHealth endpoint");
        return `${r}/session/${i.sessionId}/health`;
      default:
        throw new Error(`Unknown API endpoint: ${e}`);
    }
  }
  /**
   * Get WebSocket URL with query parameters
   */
  static getWebSocketUrl(e) {
    const { wsUrl: i } = In.resolveUrls(e.clientId, e.options), r = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && r.append("visitor_id", e.visitorId), `${i}?${r}`;
  }
}
var se = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(se || {});
function Ja(t) {
  return t === "connected" || t === "connecting";
}
class Za {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, i, r = Ji()) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = ge.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = ge.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = i, this.debugLogger = sn(e.getAll()), this.correlationService = r, this.setupVisibilityChangeListener();
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
        const i = cr.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(i), this.setupEventHandlers();
      } catch (i) {
        const r = pr.handle(i, {
          component: "WebSocketManager",
          action: "connect",
          sessionId: e
        });
        this.debugLogger.error("WebSocketManager", "WebSocket connection failed", r.message), this.setState(
          "error"
          /* ERROR */
        ), this.scheduleReconnect();
      }
    }
  }
  setupEventHandlers() {
    this.ws && (this.ws.onopen = () => {
      var e, i, r;
      this.debugLogger.log("WebSocketManager", "WebSocket connected successfully", {
        url: (e = this.ws) == null ? void 0 : e.url,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
        sessionId: this.sessionId,
        messageListeners: ((r = this.listeners.get("message")) == null ? void 0 : r.size) || 0,
        totalListeners: this.listeners.size,
        timestamp: Date.now()
      }), this.setState(
        "connected"
        /* CONNECTED */
      ), this.reconnectAttempts = 0, this.flushMessageQueue(), this.startHeartbeat();
    }, this.ws.onmessage = (e) => {
      var i, r, n, s, a, o, l, d, c;
      this.debugLogger.log("WebSocketManager", "Raw message received", {
        data: e.data,
        type: typeof e.data,
        length: ((i = e.data) == null ? void 0 : i.length) || 0,
        timestamp: Date.now(),
        wsReadyState: (r = this.ws) == null ? void 0 : r.readyState,
        sessionId: this.sessionId
      });
      try {
        const g = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: g,
          messageType: g.type,
          content: (n = g.data) == null ? void 0 : n.content,
          hasContent: !!((s = g.data) != null && s.content),
          contentLength: ((o = (a = g.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: g.type === "error",
          metadata: (l = g.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((d = this.listeners.get("message")) == null ? void 0 : d.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", g), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (g) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: g instanceof Error ? g.message : String(g),
          rawData: e.data,
          rawDataType: typeof e.data,
          rawDataLength: ((c = e.data) == null ? void 0 : c.length) || 0
        });
      }
    }, this.ws.onerror = (e) => {
      var i, r;
      this.debugLogger.error("WebSocketManager", "WebSocket error details", {
        error: e,
        errorType: e.type,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
        url: (r = this.ws) == null ? void 0 : r.url,
        sessionId: this.sessionId,
        connectionState: this.state,
        timestamp: Date.now()
      }), this.setState(
        "error"
        /* ERROR */
      );
    }, this.ws.onclose = (e) => {
      var i;
      this.debugLogger.log("WebSocketManager", "WebSocket closed details", {
        code: e.code,
        reason: e.reason,
        wasClean: e.wasClean,
        readyState: (i = this.ws) == null ? void 0 : i.readyState,
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
    const e = (i) => {
      i.type === "pong" && (this.debugLogger.log("WebSocketManager", "Connection verified - pong received"), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.off("message", e));
    };
    this.on("message", e), this.pendingPongTimeout = window.setTimeout(() => {
      this.debugLogger.warn("WebSocketManager", "No pong received - connection appears stale, reconnecting"), this.off("message", e), this.pendingPongTimeout = null, this.cleanup(), this.reconnect();
    }, ge.VISIBILITY_PING_TIMEOUT);
    try {
      this.ws.send(JSON.stringify({ type: "ping" }));
    } catch (i) {
      this.debugLogger.error("WebSocketManager", "Failed to send verification ping", i), this.off("message", e), this.pendingPongTimeout && (clearTimeout(this.pendingPongTimeout), this.pendingPongTimeout = null), this.reconnect();
    }
  }
  /**
   * Send message through WebSocket
   */
  send(e) {
    var n, s, a;
    const i = this.correlationService.getCurrent();
    this.debugLogger.log("WebSocketManager", "send() called", {
      correlationId: i,
      message: e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      messageType: typeof e,
      wsState: this.state,
      wsReadyState: (n = this.ws) == null ? void 0 : n.readyState,
      sessionId: this.sessionId
    });
    const r = JSON.stringify({
      type: "message",
      message: e,
      correlation_id: i,
      timestamp: Date.now()
    });
    if (this.debugLogger.log("WebSocketManager", "JSON payload created", {
      correlationId: i,
      data: r,
      dataLength: r.length,
      parsedBack: JSON.parse(r)
    }), this.state === "connected" && ((s = this.ws) == null ? void 0 : s.readyState) === WebSocket.OPEN)
      this.debugLogger.log("WebSocketManager", "Sending via WebSocket immediately", { correlationId: i }), this.ws.send(r);
    else {
      if (this.debugLogger.log("WebSocketManager", "WebSocket not ready, queuing message", {
        correlationId: i,
        state: this.state,
        readyState: (a = this.ws) == null ? void 0 : a.readyState,
        queueLength: this.messageQueue.length
      }), this.messageQueue.length >= Mt.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: Mt.MAX_QUEUE_SIZE
        }), this.emit("error", {
          error: "Too many pending messages. Please wait for connection to restore."
        });
        return;
      }
      this.messageQueue.push(r), this.state === "disconnected" && (this.debugLogger.log("WebSocketManager", "Attempting to reconnect...", { correlationId: i }), this.reconnect());
    }
  }
  flushMessageQueue() {
    var e;
    for (; this.messageQueue.length > 0 && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN; ) {
      const i = this.messageQueue.shift();
      i && this.ws.send(i);
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), i = e ? ge.MOBILE_HEARTBEAT_INTERVAL : ge.HEARTBEAT_INTERVAL;
    this.debugLogger.log("WebSocketManager", "Starting heartbeat", {
      isMobile: e,
      interval: i,
      intervalSeconds: i / 1e3
    }), this.heartbeatInterval = window.setInterval(() => {
      var r;
      ((r = this.ws) == null ? void 0 : r.readyState) === WebSocket.OPEN && this.ws.send(JSON.stringify({ type: "ping" }));
    }, i), this.cleanupFunctions.push(() => this.stopHeartbeat());
  }
  stopHeartbeat() {
    this.heartbeatInterval && (clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  /**
   * Event emitter functionality
   */
  on(e, i) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(i);
  }
  off(e, i) {
    var r;
    (r = this.listeners.get(e)) == null || r.delete(i);
  }
  emit(e, i) {
    var r;
    (r = this.listeners.get(e)) == null || r.forEach((n) => n(i));
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
      } catch (i) {
        this.debugLogger.warn("WebSocketManager", "Cleanup function failed", i);
      }
    }), this.cleanupFunctions = [];
  }
  /**
   * Test WebSocket bidirectional communication
   * Sends a test message to verify the connection works both ways
   */
  testConnection() {
    var e, i;
    if (this.state === "connected" && ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN) {
      this.debugLogger.log("WebSocketManager", "Testing bidirectional WebSocket communication...");
      const r = JSON.stringify({
        type: "ping",
        message: "connection-test",
        timestamp: Date.now()
      });
      this.debugLogger.log("WebSocketManager", "Sending test ping", r), this.ws.send(r);
    } else
      this.debugLogger.warn("WebSocketManager", "Cannot test connection - WebSocket not ready", {
        state: this.state,
        readyState: (i = this.ws) == null ? void 0 : i.readyState
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
var Vd = /* @__PURE__ */ F('<button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button>'), Gd = /* @__PURE__ */ F('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <!></header>');
const Yd = {
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
function Hn(t, e) {
  Ye(e, !0), nt(t, Yd);
  let i = q(e, "onclose", 7), r = q(e, "connectionState", 23, () => se.DISCONNECTED), n = q(e, "connectionFailed", 7, !1), s = q(e, "showCloseButton", 7, !0), a = q(e, "ui", 7, Pt), o = q(e, "config", 7, Ae);
  const l = /* @__PURE__ */ ee(() => {
    if (n()) return "var(--widget-error)";
    switch (r()) {
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
  }), d = /* @__PURE__ */ ee(() => {
    if (n()) return "Connection lost";
    switch (r()) {
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
  }), c = /* @__PURE__ */ ee(() => r() === se.CONNECTING ? "pulse-slow" : r() === se.ERROR ? "blink-slow" : "");
  function g() {
    var y;
    a().close(), (y = i()) == null || y();
  }
  var v = {
    get onclose() {
      return i();
    },
    set onclose(y) {
      i(y), R();
    },
    get connectionState() {
      return r();
    },
    set connectionState(y = se.DISCONNECTED) {
      r(y), R();
    },
    get connectionFailed() {
      return n();
    },
    set connectionFailed(y = !1) {
      n(y), R();
    },
    get showCloseButton() {
      return s();
    },
    set showCloseButton(y = !0) {
      s(y), R();
    },
    get ui() {
      return a();
    },
    set ui(y = Pt) {
      a(y), R();
    },
    get config() {
      return o();
    },
    set config(y = Ae) {
      o(y), R();
    }
  }, p = Gd(), k = G(p), x = G(k), h = J(x, 2), w = G(h, !0);
  V(h), V(k);
  var L = J(k, 2);
  {
    var m = (y) => {
      var T = Vd();
      T.__click = g, N(y, T);
    };
    te(L, (y) => {
      s() && y(m);
    });
  }
  return V(p), he(() => {
    ci(x, 1, `status-dot ${f(c) ?? ""}`, "svelte-g5m62x"), Pr(x, `--status-color: ${f(l) ?? ""}`), ce(x, "aria-label", f(d)), ce(x, "title", f(d)), Tt(w, o().title);
  }), N(t, p), Qe(v);
}
Ut(["click"]);
st(
  Hn,
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
let ar = null;
function Qd() {
  return ar || (ar = Promise.all([import("./assistant-widget-marked.esm-BBzvOr5D.js"), import("./assistant-widget-purify.es-BpFm6ZGf.js")]).then(([t, e]) => {
    const i = t.marked, r = e.default;
    return i.setOptions({
      breaks: !0,
      // Convert \n to <br>
      gfm: !0
      // GitHub Flavored Markdown (tables, strikethrough)
    }), r.addHook("afterSanitizeAttributes", (n) => {
      var s;
      if (n.tagName === "A") {
        if (!n.getAttribute("href")) {
          const o = document.createTextNode(n.textContent || "");
          (s = n.parentNode) == null || s.replaceChild(o, n);
          return;
        }
        n.setAttribute("target", "_blank"), n.setAttribute("rel", "noopener noreferrer");
      }
      if (n.tagName === "IMG") {
        const a = n.getAttribute("src");
        a && a.startsWith("data:") && (/^data:image\/(png|jpeg|jpg|gif|webp);base64,/i.test(a) || n.removeAttribute("src"));
      }
    }), { marked: i, DOMPurify: r };
  }).catch((t) => {
    throw ar = null, t;
  }), ar);
}
function Xd(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
async function Kd(t) {
  if (!t) return "";
  let e, i;
  try {
    ({ marked: e, DOMPurify: i } = await Qd());
  } catch {
    return Xd(t);
  }
  const r = await e.parse(t);
  return i.sanitize(r, {
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
var Jd = /* @__PURE__ */ F('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Zd = /* @__PURE__ */ F('<span class="message-content"> </span>'), ec = /* @__PURE__ */ F('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), tc = /* @__PURE__ */ F('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), ic = /* @__PURE__ */ F('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const rc = {
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
function eo(t, e) {
  Ye(e, !0), nt(t, rc);
  let i = q(e, "message", 7);
  function r(m) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(m);
  }
  const n = /* @__PURE__ */ ee(() => i().role === "user");
  let s = /* @__PURE__ */ D(null);
  Dt(() => {
    const m = i().role, y = i().content;
    if (m !== "assistant") {
      A(s, null);
      return;
    }
    let T = !1;
    return Kd(y).then((_) => {
      T || A(s, _, !0);
    }).catch(() => {
      T || A(s, null);
    }), () => {
      T = !0;
    };
  });
  var a = {
    get message() {
      return i();
    },
    set message(m) {
      i(m), R();
    }
  }, o = ic();
  let l;
  var d = G(o), c = G(d);
  {
    var g = (m) => {
      var y = Jd(), T = G(y);
      {
        var _ = (j) => {
          var Y = tr(), E = Ge(Y);
          Hl(E, () => f(s)), N(j, Y);
        }, M = (j) => {
          var Y = zl();
          he(() => Tt(Y, i().content)), N(j, Y);
        };
        te(T, (j) => {
          f(s) ? j(_) : j(M, !1);
        });
      }
      V(y), N(m, y);
    }, v = (m) => {
      var y = Zd(), T = G(y, !0);
      V(y), he(() => Tt(T, i().content)), N(m, y);
    };
    te(c, (m) => {
      i().role === "assistant" ? m(g) : m(v, !1);
    });
  }
  var p = J(c, 2);
  {
    var k = (m) => {
      var y = ec();
      N(m, y);
    };
    te(p, (m) => {
      i().status === "sending" && m(k);
    });
  }
  var x = J(p, 2);
  {
    var h = (m) => {
      var y = tc();
      N(m, y);
    };
    te(x, (m) => {
      i().status === "failed" && m(h);
    });
  }
  V(d);
  var w = J(d, 2), L = G(w, !0);
  return V(w), V(o), he(
    (m, y) => {
      l = ci(o, 1, "message svelte-1uqoiy7", null, l, { user: f(n), assistant: !f(n) }), ce(o, "aria-label", f(n) ? "Your message" : "Assistant message"), ce(w, "aria-label", m), Tt(L, y);
    },
    [
      () => `Sent at ${r(i().timestamp)}`,
      () => r(i().timestamp)
    ]
  ), N(t, o), Qe(a);
}
st(eo, { message: {} }, [], [], !0);
var nc = /* @__PURE__ */ F('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const sc = {
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

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .typing-indicator.svelte-ej4x60 {background:var(--widget-surface);border-color:var(--widget-border);}[data-theme="dark"] .typing-indicator.svelte-ej4x60 span:where(.svelte-ej4x60) {background:var(--widget-accent-warm); /* Warm highlight (gold by default, derived from accent when set) */}`
};
function to(t, e) {
  Ye(e, !0), nt(t, sc);
  let i = q(e, "chat", 7, pt);
  var r = {
    get chat() {
      return i();
    },
    set chat(o = pt) {
      i(o), R();
    }
  }, n = tr(), s = Ge(n);
  {
    var a = (o) => {
      var l = nc();
      N(o, l);
    };
    te(s, (o) => {
      i().isTyping && o(a);
    });
  }
  return N(t, n), Qe(r);
}
st(to, { chat: {} }, [], [], !0);
var ac = /* @__PURE__ */ F('<p class="initial-message svelte-qha2j"> </p>'), oc = /* @__PURE__ */ F('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), lc = /* @__PURE__ */ F('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), dc = /* @__PURE__ */ F('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), cc = /* @__PURE__ */ F('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const uc = {
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
function Bn(t, e) {
  Ye(e, !0), nt(t, uc);
  let i = q(e, "onsend", 7), r = q(e, "connectionState", 23, () => se.DISCONNECTED), n = q(e, "chat", 7, pt), s = q(e, "config", 7, Ae), a, o = !0;
  const l = /* @__PURE__ */ ee(() => n().messages.length > 0), d = /* @__PURE__ */ ee(() => r() !== se.CONNECTED);
  Dt(() => {
    n().messages, o && f(l) && c();
  }), Dt(() => {
    n().isTyping, o && f(l) && c();
  }), Dt(() => {
    n().streamingUpdateSignal, o && n().isStreaming && c();
  });
  async function c() {
    await ba(), a && (a.scrollTop = a.scrollHeight);
  }
  function g() {
    if (a) {
      const { scrollTop: m, scrollHeight: y, clientHeight: T } = a;
      o = y - m - T < 100;
    }
  }
  nn(() => {
    f(l) && c();
  });
  var v = {
    get onsend() {
      return i();
    },
    set onsend(m) {
      i(m), R();
    },
    get connectionState() {
      return r();
    },
    set connectionState(m = se.DISCONNECTED) {
      r(m), R();
    },
    get chat() {
      return n();
    },
    set chat(m = pt) {
      n(m), R();
    },
    get config() {
      return s();
    },
    set config(m = Ae) {
      s(m), R();
    }
  }, p = cc(), k = G(p);
  {
    var x = (m) => {
      var y = oc(), T = G(y), _ = G(T), M = G(_);
      V(_), vr(2), V(T);
      var j = J(T, 2);
      {
        var Y = (z) => {
          var $ = ac(), Z = G($, !0);
          V($), he(() => Tt(Z, s().initialMessage)), N(z, $);
        };
        te(j, (z) => {
          s().initialMessage && z(Y);
        });
      }
      var E = J(j, 2);
      Fn(E, {
        get questions() {
          return s().quickQuestions;
        },
        get onsend() {
          return i();
        },
        get disabled() {
          return f(d);
        }
      }), V(y), he(() => ce(M, "src", yd)), N(m, y);
    }, h = (m) => {
      var y = lc(), T = G(y);
      Cn(T, 17, () => n().messages, (M) => M.id, (M, j) => {
        eo(M, {
          get message() {
            return f(j);
          }
        });
      });
      var _ = J(T, 2);
      to(_, {
        get chat() {
          return n();
        }
      }), V(y), N(m, y);
    };
    te(k, (m) => {
      n().messages.length === 0 ? m(x) : m(h, !1);
    });
  }
  var w = J(k, 2);
  {
    var L = (m) => {
      var y = dc(), T = J(G(y), 2), _ = G(T, !0);
      V(T), V(y), he(() => Tt(_, n().error)), N(m, y);
    };
    te(w, (m) => {
      n().error && m(L);
    });
  }
  return V(p), Ar(p, (m) => a = m, () => a), ka("scroll", p, g), N(t, p), Qe(v);
}
st(Bn, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
class ys {
  constructor(e) {
    this.recognizer = null, this.state = "idle", this.opts = e;
  }
  static isSupported() {
    return typeof window < "u" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);
  }
  start() {
    if (this.state === "listening") return;
    const e = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!e) {
      this.opts.onError("not-supported");
      return;
    }
    const i = new e();
    i.lang = this.opts.lang ?? "en-US", i.continuous = this.opts.continuous ?? !1, i.interimResults = this.opts.interimResults ?? !1, i.addEventListener("result", (r) => {
      const n = r, s = n.results[n.resultIndex], o = s[0].transcript.slice(0, Mt.MAX_LENGTH), l = s.isFinal;
      this.opts.onResult(o, l);
    }), i.addEventListener("end", () => {
      this.state !== "error" && this.setState("idle");
    }), i.addEventListener("error", (r) => {
      const n = r;
      this.setState("error"), this.opts.onError(n.error ?? "unknown");
    }), i.start(), this.recognizer = i, this.setState("listening");
  }
  stop() {
    var e;
    this.state === "listening" && ((e = this.recognizer) == null || e.stop());
  }
  abort() {
    var e;
    (e = this.recognizer) == null || e.abort(), this.setState("idle");
  }
  getState() {
    return this.state;
  }
  setState(e) {
    this.state = e, this.opts.onStateChange(e);
  }
}
function gc(t) {
  switch (t) {
    case "not-allowed":
    case "service-not-allowed":
      return "Microphone permission denied";
    case "no-speech":
      return "No speech detected";
    case "network":
      return "Network error";
    case "not-supported":
      return "Voice not supported in this browser";
    default:
      return "Voice input error";
  }
}
var hc = /* @__PURE__ */ F('<span role="alert" class="sr-only svelte-zcaleu"> </span>'), fc = /* @__PURE__ */ Un('<rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect>', 1), pc = /* @__PURE__ */ Un('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" class="svelte-zcaleu"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></path><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line>', 1), vc = /* @__PURE__ */ F('<!> <button type="button"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-zcaleu"><!></svg></button>', 1);
const mc = {
  hash: "svelte-zcaleu",
  code: `.voice-button.svelte-zcaleu {width:36px;height:36px;border-radius:var(--widget-radius-full, 9999px);background:transparent;border:1px solid var(--widget-border);color:var(--widget-text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:color 0.2s ease, background 0.2s ease, border-color 0.15s ease;}.voice-button.svelte-zcaleu:hover:not(:disabled) {color:var(--widget-primary);border-color:var(--widget-primary);}.voice-button.listening.svelte-zcaleu {color:var(--widget-primary);border-color:var(--widget-primary);background:color-mix(in srgb, var(--widget-primary) 10%, transparent);
    animation: svelte-zcaleu-voicePulse 1.5s ease-in-out infinite;}.voice-button.error.svelte-zcaleu {color:var(--widget-error, #c53030);border-color:var(--widget-error, #c53030);}.voice-button.svelte-zcaleu:disabled {opacity:0.4;cursor:not-allowed;}.voice-button.svelte-zcaleu:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}.voice-button.svelte-zcaleu svg:where(.svelte-zcaleu) {width:16px;height:16px;}

  @keyframes svelte-zcaleu-voicePulse {
    0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--widget-primary) 40%, transparent); }
    50% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--widget-primary) 0%, transparent); }
  }

  @media (max-width: 767px) {.voice-button.svelte-zcaleu {width:44px;height:44px;}.voice-button.svelte-zcaleu svg:where(.svelte-zcaleu) {width:20px;height:20px;}
  }

  @media (prefers-reduced-motion: reduce) {.voice-button.listening.svelte-zcaleu {
      animation: none;}.voice-button.svelte-zcaleu {transition-duration:0.01ms !important;}
  }.sr-only.svelte-zcaleu {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}`
};
function io(t, e) {
  Ye(e, !0), nt(t, mc);
  let i = q(e, "disabled", 7, !1), r = q(e, "lang", 7, "en-US"), n = q(e, "onTranscript", 7), s = /* @__PURE__ */ D("idle"), a = /* @__PURE__ */ D(null);
  const o = ys.isSupported();
  let l = !0, d = null;
  function c() {
    return d || (d = new ys({
      lang: r(),
      continuous: !1,
      interimResults: !1,
      onResult(m, y) {
        y && m.trim() && l && n()(m.trim());
      },
      onStateChange(m) {
        A(s, m, !0), m !== "error" && A(a, null);
      },
      onError(m) {
        A(s, "error"), A(a, gc(m), !0);
      }
    })), d;
  }
  function g() {
    i() || !o || (f(s) === "listening" ? c().stop() : (A(a, null), c().start()));
  }
  Dt(() => () => {
    l = !1, d == null || d.abort(), d = null;
  });
  const v = /* @__PURE__ */ ee(() => f(s) === "listening"), p = /* @__PURE__ */ ee(() => f(s) === "error" ? `Voice input error: ${f(a) ?? "unknown"} — Start voice input` : f(v) ? "Stop listening" : "Start voice input"), k = /* @__PURE__ */ ee(() => f(a) ?? (f(v) ? "Stop listening" : "Start voice input (audio processed by your browser's speech service)"));
  var x = {
    get disabled() {
      return i();
    },
    set disabled(m = !1) {
      i(m), R();
    },
    get lang() {
      return r();
    },
    set lang(m = "en-US") {
      r(m), R();
    },
    get onTranscript() {
      return n();
    },
    set onTranscript(m) {
      n(m), R();
    }
  }, h = tr(), w = Ge(h);
  {
    var L = (m) => {
      var y = vc(), T = Ge(y);
      {
        var _ = (Z) => {
          var ne = hc(), me = G(ne, !0);
          V(ne), he(() => Tt(me, f(a))), N(Z, ne);
        };
        te(T, (Z) => {
          f(a) && Z(_);
        });
      }
      var M = J(T, 2);
      let j;
      M.__click = g;
      var Y = G(M), E = G(Y);
      {
        var z = (Z) => {
          var ne = fc();
          vr(), N(Z, ne);
        }, $ = (Z) => {
          var ne = pc();
          vr(3), N(Z, ne);
        };
        te(E, (Z) => {
          f(v) ? Z(z) : Z($, !1);
        });
      }
      V(Y), V(M), he(() => {
        j = ci(M, 1, "voice-button svelte-zcaleu", null, j, {
          listening: f(v),
          error: f(s) === "error"
        }), M.disabled = i(), ce(M, "aria-label", f(p)), ce(M, "title", f(k)), ce(M, "aria-pressed", f(v));
      }), N(m, y);
    };
    te(w, (m) => {
      o && m(L);
    });
  }
  return N(t, h), Qe(x);
}
Ut(["click"]);
st(io, { disabled: {}, lang: {}, onTranscript: {} }, [], [], !0);
var wc = /* @__PURE__ */ F('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), bc = /* @__PURE__ */ F('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), yc = /* @__PURE__ */ F('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <!> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const xc = {
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

  /* Dark theme adjustments - Use CSS variables for maintainability */[data-theme="dark"] .input-container.svelte-1a8gd73 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .input-container.svelte-1a8gd73:focus-within {border-color:var(--widget-accent-warm);box-shadow:var(--widget-shadow-inner),
                0 0 0 3px rgba(var(--widget-accent-warm-rgb), 0.2); /* Warm highlight (gold by default, derived from accent when set) */}

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
function Vn(t, e) {
  Ye(e, !0), nt(t, xc);
  let i = q(e, "onsend", 7), r = q(e, "disabled", 7, !1), n = q(e, "showBrandBanner", 7, !1), s = q(e, "connectionState", 23, () => se.DISCONNECTED), a = q(e, "chat", 7, pt), o = q(e, "config", 7, Ae), l = q(e, "correlationService", 23, Ji), d = /* @__PURE__ */ D(""), c;
  function g() {
    var Z;
    const E = l().generate(), z = f(d);
    H.log("InputBar", "handleSend() called", {
      correlationId: E,
      rawInputValue: z,
      rawLength: (z == null ? void 0 : z.length) || 0,
      rawType: typeof z,
      disabled: r(),
      isTyping: a().isTyping
    });
    const $ = z.trim();
    H.log("InputBar", "After trimming", {
      correlationId: E,
      original: z,
      trimmed: $,
      originalLength: (z == null ? void 0 : z.length) || 0,
      trimmedLength: ($ == null ? void 0 : $.length) || 0,
      wasEmptyAfterTrim: !$,
      hadWhitespaceOnly: ((z == null ? void 0 : z.length) || 0) > 0 && !$
    }), $ && !r() && !a().isTyping && !a().isStreaming ? (H.log("InputBar", "Conditions met, calling onsend", {
      correlationId: E,
      trimmedValue: $,
      trimmedLength: $.length,
      willSend: !0
    }), l().setCurrent(E), (Z = i()) == null || Z($), A(d, ""), p()) : H.log("InputBar", "Send blocked", {
      correlationId: E,
      hasContent: !!$,
      disabled: r(),
      isTyping: a().isTyping,
      trimmedValue: $ || "(empty)",
      reason: $ ? r() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function v(E) {
    E.key === "Enter" && !E.shiftKey && (E.preventDefault(), g());
  }
  function p() {
    c && (c.style.height = "auto", c.style.height = Math.min(c.scrollHeight, 120) + "px");
  }
  const k = /* @__PURE__ */ ee(() => r() || a().isTyping || a().isStreaming || a().error !== null), x = /* @__PURE__ */ ee(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), h = /* @__PURE__ */ ee(() => s() === se.CONNECTING || s() === se.DISCONNECTED);
  var w = {
    get onsend() {
      return i();
    },
    set onsend(E) {
      i(E), R();
    },
    get disabled() {
      return r();
    },
    set disabled(E = !1) {
      r(E), R();
    },
    get showBrandBanner() {
      return n();
    },
    set showBrandBanner(E = !1) {
      n(E), R();
    },
    get connectionState() {
      return s();
    },
    set connectionState(E = se.DISCONNECTED) {
      s(E), R();
    },
    get chat() {
      return a();
    },
    set chat(E = pt) {
      a(E), R();
    },
    get config() {
      return o();
    },
    set config(E = Ae) {
      o(E), R();
    },
    get correlationService() {
      return l();
    },
    set correlationService(E = Ji()) {
      l(E), R();
    }
  }, L = yc(), m = G(L);
  {
    var y = (E) => {
      var z = tr(), $ = Ge(z);
      {
        var Z = (me) => {
          var Xe = wc();
          N(me, Xe);
        }, ne = (me) => {
          var Xe = bc();
          N(me, Xe);
        };
        te($, (me) => {
          f(h) ? me(Z) : me(ne, !1);
        });
      }
      N(E, z);
    };
    te(m, (E) => {
      n() && E(y);
    });
  }
  var T = J(m, 2), _ = G(T);
  kl(_), _.__keydown = v, _.__input = p, Ar(_, (E) => c = E, () => c);
  var M = J(_, 2);
  {
    var j = (E) => {
      io(E, {
        get disabled() {
          return f(k);
        },
        onTranscript: (z) => {
          A(d, z, !0), c == null || c.focus();
        }
      });
    };
    te(M, (E) => {
      o().voiceInput && E(j);
    });
  }
  var Y = J(M, 2);
  return Y.__click = g, V(T), vr(2), V(L), he(
    (E) => {
      ce(_, "placeholder", f(x)), _.disabled = f(k), Y.disabled = E;
    },
    [() => f(k) || !f(d).trim()]
  ), Ta(_, () => f(d), (E) => A(d, E)), N(t, L), Qe(w);
}
Ut(["keydown", "input", "click"]);
st(
  Vn,
  {
    onsend: {},
    disabled: {},
    showBrandBanner: {},
    connectionState: {},
    chat: {},
    config: {},
    correlationService: {}
  },
  [],
  [],
  !0
);
class ro {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, i, r = Ji()) {
    this.sessionId = null, this.config = e, this.visitor = i, this.debugLogger = sn(e.getAll()), this.correlationService = r;
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), ge.API_TIMEOUT), r = cr.getApiUrl("init", {
        clientId: this.config.clientId
      }), n = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId(),
        page_url: window.location.href,
        referrer: document.referrer
      };
      this.config.debug && this.debugLogger.log("APIClient", "Initializing with", {
        endpoint: "init",
        fullUrl: r,
        payload: n
      });
      const s = this.correlationService.getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: n }),
        signal: e.signal
      });
      if (clearTimeout(i), !a.ok) {
        if (a.status === 403)
          throw new Error("Invalid client configuration. Please check your client ID.");
        if (a.status === 422)
          try {
            const l = await a.json();
            this.debugLogger.error("APIClient", "Validation error (422)", l);
            const d = l.detail || l.message || "Validation failed";
            throw new Error(`Validation error: ${typeof d == "string" ? d : JSON.stringify(d)}`);
          } catch (l) {
            throw l instanceof Error && l.message.startsWith("Validation error:") ? l : new Error("Invalid request data. Please check client ID and visitor ID format.");
          }
        if (a.status === 429) {
          const l = a.headers.get("Retry-After"), d = l ? parseInt(l, 10) : 60;
          throw new wi(
            `Rate limit exceeded. Please try again in ${d} seconds.`,
            d
          );
        }
        throw new mi(
          `Failed to initialize widget: ${a.statusText}`,
          a.status,
          r
        );
      }
      const o = await a.json();
      return this.sessionId = o.session_id, this.visitor.saveSessionId(o.session_id), o;
    } catch (e) {
      if (e instanceof fr || e instanceof mi || e instanceof wi)
        throw e;
      const i = pr.handle(e, {
        component: "APIClient",
        action: "initialize"
      });
      throw new Error(i.message);
    }
  }
  /**
   * Send chat message (HTTP fallback)
   */
  async sendMessage(e) {
    var r, n;
    const i = this.correlationService.getCurrent();
    try {
      this.debugLogger.log("APIClient", "sendMessage() called", {
        correlationId: i,
        message: e,
        messageLength: (e == null ? void 0 : e.length) || 0,
        messageType: typeof e,
        sessionId: this.sessionId,
        clientId: this.config.clientId
      });
      const s = wd.validate(e, i);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: i,
        input: e,
        isValid: s.isValid,
        error: s.error,
        sanitizedValue: s.sanitizedValue,
        sanitizedLength: ((r = s.sanitizedValue) == null ? void 0 : r.length) || 0,
        contentChanged: e !== s.sanitizedValue
      }), !s.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: i, error: s.error }), new fr(s.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: i }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), ge.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: s.sanitizedValue
        }
      }, d = cr.getApiUrl("chat", {
        clientId: this.config.clientId
      });
      this.debugLogger.log("APIClient", "HTTP request payload", {
        correlationId: i,
        url: d,
        payload: l,
        messageContent: l.body.message,
        messageLength: ((n = l.body.message) == null ? void 0 : n.length) || 0
      });
      const c = await fetch(d, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": i
        },
        body: JSON.stringify(l),
        signal: a.signal
      });
      if (clearTimeout(o), this.debugLogger.log("APIClient", "HTTP response status", {
        correlationId: i,
        ok: c.ok,
        status: c.status,
        statusText: c.statusText
      }), !c.ok) {
        if (c.status === 429) {
          const v = c.headers.get("Retry-After"), p = v ? parseInt(v, 10) : 60;
          throw new wi(
            `Rate limit exceeded. Please try again in ${p} seconds.`,
            p
          );
        }
        throw new mi(
          `Failed to send message: ${c.statusText}`,
          c.status,
          d
        );
      }
      const g = await c.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: i, result: g }), g;
    } catch (s) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: i, error: s }), s instanceof fr || s instanceof mi || s instanceof wi)
        throw s;
      const a = pr.handle(s, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), ge.API_TIMEOUT), r = cr.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), n = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      };
      this.config.debug && this.debugLogger.log("APIClient", "Validating session health", {
        sessionId: this.sessionId,
        fullUrl: r,
        payload: n
      });
      const s = this.correlationService.getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: n }),
        signal: e.signal
      });
      if (clearTimeout(i), a.ok) {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), ge.API_TIMEOUT), r = cr.getApiUrl("sessionHealth", {
        clientId: this.config.clientId,
        sessionId: this.sessionId
      }), n = {
        client_id: this.config.clientId,
        visitor_id: this.visitor.getVisitorId()
      }, s = this.correlationService.getCurrent(), a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-Correlation-ID": s
        },
        body: JSON.stringify({ body: n }),
        signal: e.signal
      });
      return clearTimeout(i), a.ok ? await a.json() : a.status === 404 ? {
        status: "invalid",
        session_id: this.sessionId
      } : a.status === 410 ? {
        status: "expired",
        session_id: this.sessionId
      } : null;
    } catch (e) {
      const i = pr.handle(e, {
        component: "APIClient",
        action: "checkSessionHealth",
        sessionId: this.sessionId
      });
      return this.config.debug && this.debugLogger.warn("APIClient", "Session health check error", i.message), null;
    }
  }
  getSessionId() {
    return this.sessionId;
  }
}
class no {
  constructor(e, i, r) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = ge.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = i, this.debugLogger = r;
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
    const i = e.data.content;
    if (!i) {
      this.debugLogger.warn("ChatController", "Assistant chunk without content");
      return;
    }
    if (this.hasHiddenTypingForCurrentStream || (this.chatStore.setTyping(!1), this.hasHiddenTypingForCurrentStream = !0, this.debugLogger.log("ChatController", "Typing indicator hidden - first chunk arrived"), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null)), this.chatStore.isStreaming)
      this.chatStore.appendToStreamingMessage(i);
    else {
      const r = this.chatStore.startStreamingMessage();
      this.chatStore.appendToStreamingMessage(i), this.debugLogger.log("ChatController", "Started streaming message", { messageId: r });
    }
    this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleAssistantComplete(e) {
    this.debugLogger.log("ChatController", "Assistant complete", {
      isStreaming: this.chatStore.isStreaming
    }), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = Date.now(), this.chatStore.setTyping(!1), this.uiStore.isOpen || this.uiStore.markUnread();
  }
  handleConnectionEstablished(e) {
    const i = e.data.initial_message;
    i && !this.chatStore.hasMessages && (Ae.setBackendInitialMessage(i), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: Ae.initialMessage === i ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, i = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && i > ge.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, ge.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
  }
  handleError(e) {
    this.debugLogger.error("ChatController", "Error message received", e.data.message), this.typingTimeout && (clearTimeout(this.typingTimeout), this.typingTimeout = null), this.chatStore.isStreaming && this.chatStore.finishStreamingMessage(), this.hasHiddenTypingForCurrentStream = !1;
    const i = e.data.message || "An error occurred";
    this.chatStore.setError(i);
  }
  /**
   * Set typing indicator with timeout fallback
   * Used when sending messages over HTTP (non-WebSocket)
   */
  setTypingWithTimeout(e = ge.TYPING_FALLBACK_TIMEOUT) {
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
function _c(t) {
  return t.startsWith("barToCorner");
}
const kc = 600, Sc = 420;
async function Cc(t) {
  var i;
  if (t.layout !== "bar" || t.prefersReducedMotion() || t.isMobileViewport()) {
    t.setPhase("idle"), await t.openWindow();
    return;
  }
  if (t.setPhase("translating"), await new Promise((r) => {
    var o;
    let n = !1;
    const s = () => {
      n || (n = !0, t.setTranslateResolver(null), r());
    };
    t.setTranslateResolver({ resolve: s });
    const a = t.setTimer(s, kc);
    (o = t.setSafetyTimer) == null || o.call(t, a);
  }), t.isAlive && !t.isAlive()) return;
  t.setPhase("expanding"), await t.openWindow();
  const e = t.setTimer(() => {
    t.getPhase() === "expanding" && t.setPhase("idle");
  }, Sc);
  (i = t.setSettleTimer) == null || i.call(t, e);
}
async function Tc(t, e) {
  const i = t.trim();
  if (!i || e.isSubmitting() || e.getPhase() !== "idle") return !1;
  e.setSubmitting(!0);
  try {
    e.markEngaged();
    const r = e.echo(i);
    return await e.openWithTransition(), await e.transmit(i, r), !0;
  } finally {
    e.setSubmitting(!1);
  }
}
async function Ec(t) {
  var n, s;
  const { content: e, messageId: i } = t;
  let r = !1;
  try {
    if (t.canUseWebSocket())
      try {
        t.wsSend(e), t.updateMessageStatus(i, "sent"), r = !0;
      } catch (a) {
        (n = t.onError) == null || n.call(t, "WebSocket send error", a), t.updateMessageStatus(i, "failed"), t.setError("Failed to send message. Please try again.");
      }
    else
      try {
        const a = await t.httpSend(e);
        t.addAssistantMessage(a.response), t.updateMessageStatus(i, "sent"), t.isOpen() || t.markUnread();
      } catch (a) {
        (s = t.onError) == null || s.call(t, "HTTP API error", a), t.setError("Failed to send message. Please try again."), t.updateMessageStatus(i, "failed");
      }
  } finally {
    r || t.setTyping(!1);
  }
}
var Ic = /* @__PURE__ */ F('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), Ac = /* @__PURE__ */ F('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Try Again</button>', 1), Mc = /* @__PURE__ */ F('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), Lc = /* @__PURE__ */ F('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), Oc = /* @__PURE__ */ F('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Rc = /* @__PURE__ */ F('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Nc = {
  hash: "svelte-zsv8oa",
  code: `.sr-only.svelte-zsv8oa {position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;}.widget-container.svelte-zsv8oa {position:fixed;bottom:var(--widget-space-lg);z-index:var(--widget-z-base);font-family:var(--widget-font-family);}.widget-container[data-position="bottom-right"].svelte-zsv8oa {right:var(--widget-space-lg);}.widget-container[data-position="bottom-left"].svelte-zsv8oa {left:var(--widget-space-lg);}.chat-container.svelte-zsv8oa {
    /* Mobile-first: Full-screen takeover */position:fixed;top:0;left:0;width:100%;
    /* Dynamic viewport height - adjusts when mobile keyboard appears */height:100vh;  /* Fallback for older browsers */height:100dvh; /* Modern browsers: updates with keyboard */background:var(--widget-background);border-radius:0;box-shadow:none;border:none;display:flex;flex-direction:column;overflow:hidden;z-index:var(--widget-z-modal);}.backdrop.svelte-zsv8oa {display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:calc(var(--widget-z-modal) - 1);}

  /*
   * Bar-mode Transition A, Phase 2 (desktop): the window UNFOLDS UPWARD out of
   * the resting bar's footprint. The bar (same 400px width, right-aligned, fully
   * opaque) is replaced in a single render flush by the window, which starts
   * clipped to just its bottom strip (~bar height) at full width and opacity,
   * then reveals upward. Because the bottom strip already fills the bar's spot,
   * there is no "disappears then pops" — the window grows out of the pill. The
   * \`round\` keeps the window's corner radius through the reveal. Mobile is a
   * full-screen takeover — no upward unfold.
   */
  @media (min-width: 768px) {.chat-container.bar-expanding.svelte-zsv8oa {
      animation: svelte-zsv8oa-barExpandUp 420ms cubic-bezier(0.33, 1, 0.68, 1);}

    @keyframes svelte-zsv8oa-barExpandUp {
      from {
        clip-path: inset(calc(100% - 52px) 0 0 0 round var(--widget-radius-xl));
      }
      to {
        clip-path: inset(0 0 0 0 round var(--widget-radius-xl));
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {.chat-container.bar-expanding.svelte-zsv8oa {
      animation: none !important;}
  }.error-banner.svelte-zsv8oa {position:absolute;bottom:75px;left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;
    /* Stack text above button */display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);
    /* Prevent overflow on mobile */max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  /* Mobile: ensure banner fits */
  @media (max-width: 480px) {.error-banner.svelte-zsv8oa {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-zsv8oa {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-zsv8oa {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-zsv8oa:hover {background:var(--widget-primary-hover);}.restart-button.svelte-zsv8oa:active {background:var(--widget-primary-dark);}.restart-button.svelte-zsv8oa:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Desktop: Floating widget (≥768px) */
  @media (min-width: 768px) {.chat-container.svelte-zsv8oa {
      /* Floating widget mode */position:absolute;top:auto;left:auto;
      /* MUST resolve to the SAME computed width as the resting bar
         (RestingBar.svelte reads --widget-bar-width too) so the bar→window
         morph stays aligned. The co-clamp keeps an over-wide token value from
         pushing the window off-screen. */width:min(var(--widget-bar-width, 400px), calc(100vw - 2 * var(--widget-space-lg)));height:600px;max-height:80vh;min-height:450px;bottom:20px;border-radius:var(--widget-radius-xl);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-border);}.widget-container[data-position="bottom-right"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {right:0;transform-origin:bottom right;}.widget-container[data-position="bottom-left"].svelte-zsv8oa .chat-container:where(.svelte-zsv8oa) {left:0;transform-origin:bottom left;}.backdrop.svelte-zsv8oa {display:none;}
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
function so(t, e) {
  Ye(e, !0), nt(t, Nc);
  let i = q(e, "hostElement", 7), r = q(e, "ui", 7, Pt), n = q(e, "chat", 7, pt), s = q(e, "config", 7, Ae), a = q(e, "layout", 7, "bubble"), o = q(e, "restChips", 7, "visible"), l, d, c, g, v, p;
  const k = za();
  let x = !1, h = !1, w = null, L = /* @__PURE__ */ D(le(se.DISCONNECTED)), m = /* @__PURE__ */ D(
    !1
    // Track if max reconnection attempts exhausted
  ), y = /* @__PURE__ */ D("idle"), T = !1, _ = null, M = null, j = !1;
  function Y() {
    return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function E() {
    return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(max-width: 767px)").matches;
  }
  let z = /* @__PURE__ */ D(null), $ = null, Z = /* @__PURE__ */ D(null), ne = /* @__PURE__ */ D(!1);
  function me() {
    var O;
    if ((O = i()) != null && O.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  function Xe(b) {
    const O = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), K = b.querySelectorAll(O);
    if (K.length === 0) return;
    const Le = K[0], $e = K[K.length - 1];
    return requestAnimationFrame(() => Le.focus()), { firstFocusable: Le, lastFocusable: $e };
  }
  function jt(b) {
    if (b.key === "Escape" && r().isOpen) {
      b.preventDefault(), Q();
      return;
    }
    if (b.key === "Tab" && f(z)) {
      const O = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), K = f(z).querySelectorAll(O);
      if (K.length === 0) return;
      const Le = K[0], $e = K[K.length - 1];
      b.shiftKey && document.activeElement === Le ? (b.preventDefault(), $e.focus()) : !b.shiftKey && document.activeElement === $e && (b.preventDefault(), Le.focus());
    }
  }
  function ui() {
    $ = document.activeElement;
  }
  function Me() {
    $ && typeof $.focus == "function" && requestAnimationFrame(() => $ == null ? void 0 : $.focus()), $ = null;
  }
  function S() {
    a() === "bar" && r().hasEngaged ? ($ = null, A(ne, !0)) : Me();
  }
  Dt(() => {
    f(ne) && f(Z) && (f(Z).focus(), A(ne, !1));
  });
  function Q() {
    r().close(), S();
  }
  function ae() {
    f(z) && Xe(f(z));
  }
  nn(async () => {
    try {
      l = new Ka(i()), p = sn(l.getAll()), d = new Br(), c = new ro(l, d, k), g = new Za(l, d, k), v = new no(n(), r(), p), i() && s().loadFromAttributes(i()), Ke(), me(), p.log("ChatWidget", "Attaching WebSocket listeners"), g.on("message", Wt), g.on("stateChange", (O) => {
        p.log("ChatWidget", "WebSocket state changed", {
          oldState: f(L),
          newState: O,
          timestamp: Date.now()
        }), A(L, O, !0);
      }), g.on("error", (O) => {
        p.error("ChatWidget", "WebSocket error event", O), w = O.error, n().setError(O.error);
      }), g.on("connectionFailed", (O) => {
        p.error("ChatWidget", "WebSocket connection failed after max attempts", O), A(m, !0), w = O.error, n().setError(O.error);
      }), p.log("ChatWidget", "WebSocket listeners attached successfully"), r().isOpen && await wt();
      const b = i();
      b != null && b.setOnOpenChangeCallback && b.setOnOpenChangeCallback((O) => {
        an(O);
      }), p.log("ChatWidget", "Services initialized successfully");
    } catch (b) {
      p.error("ChatWidget", "Initialization failed", b), w = b instanceof Error ? b.message : "Failed to initialize chat";
    }
  }), Dt(() => {
    const b = r().isOpen;
    if (i()) {
      const O = i().hasAttribute("open");
      b && !O ? i().setAttribute("open", "") : !b && O && i().removeAttribute("open");
    }
  }), Ia(() => {
    j = !0;
    const b = c == null ? void 0 : c.getSessionId();
    b && d.markSessionInactive(b), _ !== null && clearTimeout(_), M !== null && clearTimeout(M), _ = null, M = null, ir = null, g == null || g.disconnect(), v == null || v.cleanup();
  });
  async function wt() {
    var b;
    if (!(x || h)) {
      h = !0;
      try {
        if (r().setLoading(!0), await c.resumeSession()) {
          const K = c.getSessionId();
          K && (await g.connect(K), setTimeout(
            () => {
              p.log("ChatWidget", "Testing WebSocket connection after session resumption..."), g.testConnection();
            },
            ge.CONNECTION_DELAY
          ));
        } else {
          const K = await c.initialize();
          (b = K.assistant_info) != null && b.assistant_name && s().setBackendTitle(K.assistant_info.assistant_name), await g.connect(K.session_id), setTimeout(
            () => {
              p.log("ChatWidget", "Testing WebSocket connection after initialization..."), g.testConnection();
            },
            ge.CONNECTION_DELAY
          ), K.settings && It(K.settings);
        }
        x = !0;
      } catch (O) {
        w = O instanceof Error ? O.message : "Failed to initialize", n().setError(w);
      } finally {
        r().setLoading(!1), h = !1;
      }
    }
  }
  function Ke() {
    const b = l.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", b.theme || "modern"), b.primary_color || b.accent_color)) {
        const O = b.accent_color || b.primary_color;
        O && yr(i(), O);
      }
    });
  }
  function It(b) {
    requestAnimationFrame(() => {
      i() && (b.theme && typeof b.theme == "string" && i().setAttribute("data-theme", b.theme), b.primary_color && typeof b.primary_color == "string" && yr(i(), b.primary_color));
    });
  }
  function Wt(b) {
    v.handleMessage(b);
  }
  function gi(b) {
    const O = n().addMessage(b, "user");
    return v.resetForNewMessage(), v.setTypingWithTimeout(), p.log("ChatWidget", "User message echoed to store", {
      messageId: O.id,
      length: O.content.length
    }), O;
  }
  async function Qn(b, O) {
    const K = k.getCurrent();
    let Le = !1;
    try {
      x || await wt();
      const $e = Ja(f(L));
      p.log("ChatWidget", "Routing message", {
        correlationId: K,
        connectionState: f(L),
        routingTo: $e ? "WebSocket" : "HTTP API"
      }), Le = !0, await Ec({
        content: b,
        messageId: O.id,
        canUseWebSocket: () => $e,
        wsSend: (ie) => g.send(ie),
        httpSend: (ie) => c.sendMessage(ie),
        addAssistantMessage: (ie) => n().addMessage(ie, "assistant"),
        updateMessageStatus: (ie, at) => n().updateMessageStatus(ie, at),
        setTyping: (ie) => n().setTyping(ie),
        setError: (ie) => {
          w = ie, n().setError(ie);
        },
        isOpen: () => r().isOpen,
        markUnread: () => r().markUnread(),
        onError: (ie, at) => p.error("ChatWidget", ie, at)
      });
    } finally {
      Le || n().setTyping(!1);
    }
  }
  async function Xn(b) {
    const O = gi(b);
    await Qn(b, O);
  }
  async function an(b) {
    const O = r().isOpen;
    O !== b && (p.log("ChatWidget", "Setting open state", { from: O, to: b }), b && !O && !$ && ui(), b ? r().open() : r().close(), await new Promise((K) => setTimeout(K, 0)), b && !x && s() && await wt(), b ? requestAnimationFrame(() => ae()) : S());
  }
  async function go() {
    await an(!r().isOpen);
  }
  let ir = null;
  function ho(b) {
    _c(b.animationName) && (ir == null || ir.resolve());
  }
  async function fo() {
    await Cc({
      layout: a(),
      setPhase: (b) => {
        A(y, b, !0);
      },
      openWindow: () => an(!0),
      prefersReducedMotion: Y,
      isMobileViewport: E,
      setTranslateResolver: (b) => {
        ir = b;
      },
      setTimer: (b, O) => setTimeout(b, O),
      getPhase: () => f(y),
      setSafetyTimer: (b) => {
        _ = b;
      },
      setSettleTimer: (b) => {
        M = b;
      },
      isAlive: () => !j
    });
  }
  async function Kn(b) {
    await Tc(b, {
      isSubmitting: () => T,
      setSubmitting: (O) => {
        T = O;
      },
      getPhase: () => f(y),
      markEngaged: () => r().markEngaged(),
      openWithTransition: fo,
      // Echo the message + typing BEFORE the open so the window unfolds already
      // populated; transmit (init+connect+send) runs after the transition.
      echo: gi,
      transmit: Qn
    });
  }
  function po() {
    n().clearMessages(), n().setError(null), w = null;
  }
  function vo() {
    p.log("ChatWidget", "Manual retry connection requested"), A(m, !1), w = null, n().setError(null), g == null || g.retryConnection();
  }
  const on = /* @__PURE__ */ ee(() => r().isOpen), mo = /* @__PURE__ */ ee(() => r().isLoading), Jn = /* @__PURE__ */ ee(() => {
    var b;
    return ((b = s()) == null ? void 0 : b.position) || "bottom-right";
  }), wo = /* @__PURE__ */ ee(() => r().hasEngaged), bo = /* @__PURE__ */ ee(() => a() === "bar" && (!f(wo) || f(y) === "translating"));
  var yo = {
    get hostElement() {
      return i();
    },
    set hostElement(b) {
      i(b), R();
    },
    get ui() {
      return r();
    },
    set ui(b = Pt) {
      r(b), R();
    },
    get chat() {
      return n();
    },
    set chat(b = pt) {
      n(b), R();
    },
    get config() {
      return s();
    },
    set config(b = Ae) {
      s(b), R();
    },
    get layout() {
      return a();
    },
    set layout(b = "bubble") {
      a(b), R();
    },
    get restChips() {
      return o();
    },
    set restChips(b = "visible") {
      o(b), R();
    }
  }, rr = Rc(), Zn = G(rr);
  {
    var xo = (b) => {
      var O = tr(), K = Ge(O);
      {
        var Le = (ie) => {
          {
            let at = /* @__PURE__ */ ee(() => f(y) === "translating");
            Ba(ie, {
              get config() {
                return s();
              },
              get position() {
                return f(Jn);
              },
              get restChips() {
                return o();
              },
              get translating() {
                return f(at);
              },
              onsubmit: Kn,
              onchip: Kn,
              onanimationend: ho
            });
          }
        }, $e = (ie) => {
          Fa(ie, {
            onclick: go,
            get ui() {
              return r();
            },
            get buttonRef() {
              return f(Z);
            },
            set buttonRef(at) {
              A(Z, at, !0);
            }
          });
        };
        te(K, (ie) => {
          f(bo) ? ie(Le) : ie($e, !1);
        });
      }
      N(b, O);
    };
    te(Zn, (b) => {
      f(on) || b(xo);
    });
  }
  var _o = J(Zn, 2);
  {
    var ko = (b) => {
      var O = Oc(), K = J(Ge(O), 2);
      let Le;
      K.__keydown = jt;
      var $e = G(K);
      Hn($e, {
        onclose: Q,
        get connectionState() {
          return f(L);
        },
        get connectionFailed() {
          return f(m);
        },
        get ui() {
          return r();
        },
        get config() {
          return s();
        }
      });
      var ie = J($e, 2);
      Bn(ie, {
        onsend: Xn,
        get connectionState() {
          return f(L);
        },
        get chat() {
          return n();
        },
        get config() {
          return s();
        }
      });
      var at = J(ie, 2);
      {
        let Je = /* @__PURE__ */ ee(() => n().error !== null || f(mo)), bt = /* @__PURE__ */ ee(() => n().messages.length === 0);
        Vn(at, {
          onsend: Xn,
          get disabled() {
            return f(Je);
          },
          get showBrandBanner() {
            return f(bt);
          },
          get connectionState() {
            return f(L);
          },
          get chat() {
            return n();
          },
          get config() {
            return s();
          },
          get correlationService() {
            return k;
          }
        });
      }
      var So = J(at, 2);
      {
        var Co = (Je) => {
          var bt = Mc(), Io = G(bt);
          {
            var Ao = (hi) => {
              var nr = Ic(), ln = J(Ge(nr), 2);
              ln.__click = vo, N(hi, nr);
            }, Mo = (hi) => {
              var nr = Ac(), ln = J(Ge(nr), 2);
              ln.__click = po, N(hi, nr);
            };
            te(Io, (hi) => {
              f(m) ? hi(Ao) : hi(Mo, !1);
            });
          }
          V(bt), N(Je, bt);
        };
        te(So, (Je) => {
          n().error && Je(Co);
        });
      }
      V(K), Ar(K, (Je) => A(z, Je), () => f(z));
      var To = J(K, 2);
      {
        var Eo = (Je) => {
          var bt = Lc();
          bt.__click = Q, us(3, bt, () => dd, () => ({ duration: 200 })), N(Je, bt);
        };
        te(To, (Je) => {
          f(on) && Je(Eo);
        });
      }
      he(() => Le = ci(K, 1, "chat-container svelte-zsv8oa", null, Le, { "bar-expanding": a() === "bar" })), us(3, K, () => cd, () => ({
        y: a() === "bar" ? 0 : 20,
        duration: a() === "bar" ? 0 : 300
      })), N(b, O);
    };
    te(_o, (b) => {
      f(on) && b(ko);
    });
  }
  return V(rr), he(() => {
    ce(rr, "data-position", f(Jn)), ce(rr, "data-theme", s().theme);
  }), N(t, rr), Qe(yo);
}
Ut(["keydown", "click"]);
st(
  so,
  {
    hostElement: {},
    ui: {},
    chat: {},
    config: {},
    layout: {},
    restChips: {}
  },
  [],
  [],
  !0
);
var qc = /* @__PURE__ */ F('<span class="error-message svelte-12a99c7" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Retry Connection</button>', 1), Dc = /* @__PURE__ */ F('<span class="error-message svelte-12a99c7" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Try Again</button>', 1), Pc = /* @__PURE__ */ F('<div class="error-banner svelte-12a99c7" role="alert" aria-live="polite"><!></div>'), zc = /* @__PURE__ */ F('<div class="chat-page svelte-12a99c7" role="region" aria-label="Chat assistant"><!> <!> <!> <!></div>');
const $c = {
  hash: "svelte-12a99c7",
  code: `.chat-page.svelte-12a99c7 {width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--widget-background);border-radius:0;border:none;min-height:400px;}.error-banner.svelte-12a99c7 {position:sticky;bottom:var(--widget-space-md);left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  @media (max-width: 480px) {.error-banner.svelte-12a99c7 {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-12a99c7 {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-12a99c7 {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-12a99c7:hover {background:var(--widget-primary-hover);}.restart-button.svelte-12a99c7:active {background:var(--widget-primary-dark);}.restart-button.svelte-12a99c7:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .chat-page.svelte-12a99c7 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-12a99c7 {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function ao(t, e) {
  Ye(e, !0), nt(t, $c);
  let i = q(e, "hostElement", 7), r = q(e, "ui", 7, Pt), n = q(e, "chat", 7, pt), s = q(e, "config", 7, Ae), a, o, l, d, c, g;
  const v = za();
  let p = !1, k = !1, x = null, h = /* @__PURE__ */ D(le(se.DISCONNECTED)), w = /* @__PURE__ */ D(!1), L = /* @__PURE__ */ D(null);
  const m = (S) => {
    const Q = S.detail;
    Q != null && Q.text && typeof Q.text == "string" && Y(Q.text);
  };
  function y() {
    var Q;
    if ((Q = i()) != null && Q.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  nn(async () => {
    try {
      r().open(), a = new Ka(i()), g = sn(a.getAll()), o = new Br(), l = new ro(a, o, v), d = new Za(a, o, v), c = new no(n(), r(), g), i() && s().loadFromAttributes(i()), _(), y(), g.log("ChatPage", "Attaching WebSocket listeners"), d.on("message", j), d.on("stateChange", (S) => {
        g.log("ChatPage", "WebSocket state changed", {
          oldState: f(h),
          newState: S,
          timestamp: Date.now()
        }), A(h, S, !0);
      }), d.on("error", (S) => {
        g.error("ChatPage", "WebSocket error event", S), x = S.error, n().setError(S.error);
      }), d.on("connectionFailed", (S) => {
        g.error("ChatPage", "WebSocket connection failed after max attempts", S), A(w, !0), x = S.error, n().setError(S.error);
      }), g.log("ChatPage", "WebSocket listeners attached successfully"), i() && i().addEventListener("send-message", m), await T(), g.log("ChatPage", "Services initialized successfully");
    } catch (S) {
      g.error("ChatPage", "Initialization failed", S), x = S instanceof Error ? S.message : "Failed to initialize chat";
    }
  }), Ia(() => {
    i() && i().removeEventListener("send-message", m);
    const S = l == null ? void 0 : l.getSessionId();
    S && o.markSessionInactive(S), d == null || d.disconnect(), c == null || c.cleanup();
  });
  async function T() {
    var S;
    if (!(p || k)) {
      k = !0;
      try {
        if (r().setLoading(!0), await l.resumeSession()) {
          const ae = l.getSessionId();
          ae && (await d.connect(ae), setTimeout(
            () => {
              g.log("ChatPage", "Testing WebSocket connection after session resumption..."), d.testConnection();
            },
            ge.CONNECTION_DELAY
          ));
        } else {
          const ae = await l.initialize();
          (S = ae.assistant_info) != null && S.assistant_name && s().setBackendTitle(ae.assistant_info.assistant_name), await d.connect(ae.session_id), setTimeout(
            () => {
              g.log("ChatPage", "Testing WebSocket connection after initialization..."), d.testConnection();
            },
            ge.CONNECTION_DELAY
          ), ae.settings && M(ae.settings);
        }
        p = !0;
      } catch (Q) {
        x = Q instanceof Error ? Q.message : "Failed to initialize", n().setError(x);
      } finally {
        r().setLoading(!1), k = !1;
      }
    }
  }
  function _() {
    const S = a.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", S.theme || "modern"), S.primary_color || S.accent_color)) {
        const Q = S.accent_color || S.primary_color;
        Q && yr(i(), Q);
      }
    });
  }
  function M(S) {
    requestAnimationFrame(() => {
      i() && (S.theme && typeof S.theme == "string" && i().setAttribute("data-theme", S.theme), S.primary_color && typeof S.primary_color == "string" && yr(i(), S.primary_color));
    });
  }
  function j(S) {
    c.handleMessage(S);
  }
  async function Y(S) {
    const Q = v.getCurrent();
    g.log("ChatPage", "handleSendMessage called with content", {
      correlationId: Q,
      content: S,
      length: (S == null ? void 0 : S.length) || 0,
      trimmed: (S == null ? void 0 : S.trim()) || "",
      type: typeof S
    });
    const ae = n().addMessage(S, "user");
    c.resetForNewMessage(), g.log("ChatPage", "Message added to store", {
      correlationId: Q,
      messageId: ae.id,
      content: ae.content,
      length: ae.content.length
    }), p || (g.log("ChatPage", "Widget not initialized, initializing...", { correlationId: Q }), await T());
    const wt = Ja(f(h));
    if (g.log("ChatPage", "Connection state", {
      correlationId: Q,
      connectionState: f(h),
      canUseWebSocket: wt,
      routingTo: wt ? "WebSocket" : "HTTP API"
    }), wt) {
      g.log("ChatPage", "Sending via WebSocket", { correlationId: Q, content: S });
      try {
        c.setTypingWithTimeout(), d.send(S), n().updateMessageStatus(ae.id, "sent"), g.log("ChatPage", "User message marked as sent", { messageId: ae.id });
      } catch (Ke) {
        g.error("ChatPage", "WebSocket send error", Ke), n().updateMessageStatus(ae.id, "failed"), n().setError("Failed to send message. Please try again."), n().setTyping(!1);
        return;
      }
    } else
      try {
        g.log("ChatPage", "Sending via HTTP API", { correlationId: Q, content: S }), c.setTypingWithTimeout();
        const Ke = await l.sendMessage(S);
        g.log("ChatPage", "HTTP API response received", {
          correlationId: Q,
          response: Ke.response,
          sessionId: Ke.session_id
        }), n().addMessage(Ke.response, "assistant"), n().setTyping(!1);
      } catch (Ke) {
        g.error("ChatPage", "HTTP API error", Ke), x = "Failed to send message. Please try again.", n().setError(x), n().updateMessageStatus(ae.id, "failed"), n().setTyping(!1);
      }
  }
  function E() {
    n().clearMessages(), n().setError(null), x = null;
  }
  function z() {
    g.log("ChatPage", "Manual retry connection requested"), A(w, !1), x = null, n().setError(null), d == null || d.retryConnection();
  }
  const $ = /* @__PURE__ */ ee(() => r().isLoading);
  var Z = {
    get hostElement() {
      return i();
    },
    set hostElement(S) {
      i(S), R();
    },
    get ui() {
      return r();
    },
    set ui(S = Pt) {
      r(S), R();
    },
    get chat() {
      return n();
    },
    set chat(S = pt) {
      n(S), R();
    },
    get config() {
      return s();
    },
    set config(S = Ae) {
      s(S), R();
    }
  }, ne = zc(), me = G(ne);
  Hn(me, {
    get connectionState() {
      return f(h);
    },
    get connectionFailed() {
      return f(w);
    },
    showCloseButton: !1,
    get ui() {
      return r();
    },
    get config() {
      return s();
    }
  });
  var Xe = J(me, 2);
  Bn(Xe, {
    onsend: Y,
    get connectionState() {
      return f(h);
    },
    get chat() {
      return n();
    },
    get config() {
      return s();
    }
  });
  var jt = J(Xe, 2);
  {
    let S = /* @__PURE__ */ ee(() => n().error !== null || f($)), Q = /* @__PURE__ */ ee(() => n().messages.length === 0);
    Vn(jt, {
      onsend: Y,
      get disabled() {
        return f(S);
      },
      get showBrandBanner() {
        return f(Q);
      },
      get connectionState() {
        return f(h);
      },
      get chat() {
        return n();
      },
      get config() {
        return s();
      },
      get correlationService() {
        return v;
      }
    });
  }
  var ui = J(jt, 2);
  {
    var Me = (S) => {
      var Q = Pc(), ae = G(Q);
      {
        var wt = (It) => {
          var Wt = qc(), gi = J(Ge(Wt), 2);
          gi.__click = z, N(It, Wt);
        }, Ke = (It) => {
          var Wt = Dc(), gi = J(Ge(Wt), 2);
          gi.__click = E, N(It, Wt);
        };
        te(ae, (It) => {
          f(w) ? It(wt) : It(Ke, !1);
        });
      }
      V(Q), N(S, Q);
    };
    te(ui, (S) => {
      n().error && S(Me);
    });
  }
  return V(ne), Ar(ne, (S) => A(L, S), () => f(L)), N(t, ne), Qe(Z);
}
Ut(["click"]);
st(ao, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
const Gn = {
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
}, An = {
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
function Uc(t = Gn) {
  return `/* ============================================
   Premium Design System - ${t.brand === "bot-brewers" ? "Bot Brewers Brand" : "Generic"}
   ============================================ */

:host {
  /* Primary Colors */
  --widget-primary: ${t.primary};
  --widget-primary-hover: ${t.primaryHover};
  --widget-primary-light: ${t.primaryLight};
  --widget-primary-dark: ${t.primaryDark};
  
  /* Gradient System - Blue to Dark Blue for Bot Brewers brand */
  --widget-gradient: linear-gradient(135deg, ${t.primary} 0%, ${t.primaryDark} 100%);
  --widget-gradient-hover: linear-gradient(135deg, ${t.primaryDark} 0%, ${t.primary} 100%);
  --widget-gradient-subtle: linear-gradient(135deg, ${t.primary}1a 0%, ${t.primaryDark}0d 100%);
  
  /* Surface Colors */
  --widget-background: ${t.background};
  --widget-surface: ${t.surface};
  --widget-surface-hover: ${t.surfaceHover};
  --widget-surface-elevated: ${t.surfaceElevated || t.background};
  --widget-glass: ${t.glass};
  --widget-glass-dark: ${t.glassDark};
  --widget-glass-subtle: ${t.glass};
  
  /* Text Colors */
  --widget-text: ${t.text};
  --widget-text-secondary: ${t.textSecondary};
  --widget-text-muted: ${t.textMuted};
  --widget-text-subtle: ${t.textSubtle || t.textMuted};
  --widget-text-inverse: ${t.textInverse};
  
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
  --widget-accent-warm: #d4a574;   /* Warm highlight (gold by default, derived from accent when set) */
  --widget-accent-warm-rgb: 212, 165, 116;  /* RGB values for opacity control */
  --widget-accent-rgb: 244, 169, 50;  /* Bot Gold RGB — accent glow and rings */

  /* Borders - Theme-aware for dark/light mode */
  --widget-border: ${t.border || (t.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${t.borderLight || (t.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${t.borderSubtle || (t.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  /* Primary RGB for glow effects */
  --widget-primary-rgb: ${En(t.primary) || "30, 91, 168"};

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
  --widget-shadow-bar: 0 8px 32px rgba(0, 0, 0, 0.12);  /* Resting bar elevation */

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
  /* Resting-bar (layout="bar") geometry + frost — integrator-tunable. See
     docs/integration-guide.md ("Tuning the resting bar") for usage + the
     contrast caveat. --widget-bar-width is read by BOTH the bar and the chat
     window it unfolds into (keeps the morph aligned); --widget-bar-rest-opacity
     is a unitless 0..1 frost ratio (consumers clamp to [0,1]). */
  --widget-bar-width: 400px;
  --widget-bar-rest-opacity: 0.85;
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
  --widget-logo-filter: ${t.isDark ? "brightness(1.1)" : "brightness(1)"};

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
function jc(t = Gn) {
  return Uc(t);
}
const oo = {
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
}, xs = oo, _s = {
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
}, Wc = {
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
}, Fc = {
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
}, Hc = {
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
}, Bc = {
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
function Vc(t) {
  return {
    "bot-brewers": An,
    modern: oo,
    professional: xs,
    corporate: xs,
    // Alias for backward compatibility
    friendly: _s,
    playful: _s,
    // Alias
    minimal: Wc,
    dark: Fc,
    elegant: Hc,
    bold: Bc,
    generic: Gn,
    default: An
  }[t.toLowerCase()] || null;
}
function Gc(t) {
  const e = Vc(t) || An;
  return jc(e);
}
function Yn(t, e) {
  const i = t.getAttribute("theme") || t.getAttribute("data-theme") || e;
  return Gc(i);
}
function lo(t, e, i) {
  const r = t.querySelector('style[data-role="theme"]');
  r && (r.textContent = Yn(e, i));
}
function co(t, e, i) {
  const r = t.querySelector(`.${e}`);
  yr(r, i);
}
function uo(t, e) {
  const i = t.querySelector(`.${e}`);
  pd(i);
}
class ks extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Ma(), this._chatStore = Oa(), this._configStore = ja();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open", "voice-input", "layout", "rest-chips"];
  }
  async connectedCallback() {
    var n, s;
    const e = this.getAttribute("client-id"), i = window, r = ((n = i.AIChat) == null ? void 0 : n.clientId) || ((s = i.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !r) {
      H.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (bi(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, r) {
    if (i !== r) {
      if ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this._configStore.updateConfig({ theme: r }, "user"), lo(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && (r ? co(this._shadowRoot, "widget-root", r) : uo(this._shadowRoot, "widget-root")), e === "client-id" && r && this._app && (H.log("ChatWidget", `Client ID changed from ${i} to ${r}, remounting widget`), bi(this._app), this._app = null, this.mountApp()), e === "layout" && this._app && (H.log("ChatWidget", `Layout changed from ${i} to ${r}, remounting widget`), bi(this._app), this._app = null, this.mountApp()), e === "title" && r && this._configStore.setUserTitle(r), e === "initial-message" && this._configStore.updateConfig({ initialMessage: r || void 0 }, "user"), e === "quick-questions")
        if (r)
          try {
            const n = JSON.parse(r);
            Array.isArray(n) ? this._configStore.setQuickQuestions(Wn.validate(n, "ChatWidget")) : H.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            H.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
          }
        else
          this._configStore.setQuickQuestions(void 0);
      if (e === "open") {
        const n = r !== null;
        this._onOpenChangeCallback ? this._onOpenChangeCallback(n) : this._pendingOpenState = n;
      }
    }
  }
  setOnOpenChangeCallback(e) {
    this._onOpenChangeCallback = e, this._pendingOpenState !== null && (e(this._pendingOpenState), this._pendingOpenState = null);
  }
  mountApp() {
    const e = this.getAttribute("theme") || this.getAttribute("data-theme") || "bot-brewers";
    this._currentTheme = e;
    const i = document.createElement("div");
    i.className = "widget-root";
    const r = document.createElement("style");
    r.setAttribute("data-role", "theme"), r.textContent = Yn(this, this._currentTheme), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(i);
    const n = this.getAttribute("layout"), s = n === "bar" ? "bar" : "bubble";
    n && n !== "bar" && n !== "bubble" && H.log("ChatWidget", `Unknown layout "${n}", falling back to bubble`);
    const a = Ha(this.getAttribute("rest-chips"));
    this._app = rn(so, {
      target: i,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore,
        layout: s,
        restChips: a
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
class Yc extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Ma(), this._chatStore = Oa(), this._configStore = ja();
  }
  // Observed attributes (no 'open' or 'position' — always visible, no floating button)
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "title", "client-id", "initial-message", "quick-questions"];
  }
  async connectedCallback() {
    var n, s;
    const e = this.getAttribute("client-id"), i = window, r = ((n = i.AIChat) == null ? void 0 : n.clientId) || ((s = i.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !r) {
      H.error("ChatPage", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (bi(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, r) {
    if (i !== r && ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this._configStore.updateConfig({ theme: r }, "user"), lo(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && (r ? co(this._shadowRoot, "chat-page-root", r) : uo(this._shadowRoot, "chat-page-root")), e === "client-id" && r && this._app && (H.log("ChatPage", `Client ID changed from ${i} to ${r}, remounting`), bi(this._app), this._app = null, this.mountApp()), e === "title" && r && this._configStore.setUserTitle(r), e === "initial-message" && this._configStore.updateConfig({ initialMessage: r || void 0 }, "user"), e === "quick-questions"))
      if (r)
        try {
          const n = JSON.parse(r);
          Array.isArray(n) ? this._configStore.setQuickQuestions(Wn.validate(n, "ChatPage")) : H.warn("ChatPage", "quick-questions must be an array, using defaults");
        } catch {
          H.warn("ChatPage", "Invalid quick-questions JSON, using defaults");
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
    const i = document.createElement("div");
    i.className = "chat-page-root", i.style.cssText = "width: 100%; height: 100%;";
    const r = document.createElement("style");
    r.setAttribute("data-role", "theme"), r.textContent = Yn(this, this._currentTheme);
    const n = document.createElement("style");
    n.textContent = ":host { display: block; width: 100%; height: 100%; box-sizing: border-box; }", this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(n), this._shadowRoot.appendChild(i), this._app = rn(ao, {
      target: i,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore
      }
    });
  }
}
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", ks) : customElements.define("assistant-widget", ks);
customElements.get("assistant-chat-page") || customElements.define("assistant-chat-page", Yc);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ss) : Ss();
function Ss() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      H.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const i = document.createElement("assistant-widget");
    document.body.appendChild(i), H.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  Yc as AssistantChatPage,
  ks as ChatWidgetElement
};
