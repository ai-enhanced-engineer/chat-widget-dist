var So = Object.defineProperty;
var Kn = (t) => {
  throw TypeError(t);
};
var Co = (t, e, i) => e in t ? So(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var oe = (t, e, i) => Co(t, typeof e != "symbol" ? e + "" : e, i), ln = (t, e, i) => e.has(t) || Kn("Cannot " + i);
var u = (t, e, i) => (ln(t, e, "read from private field"), i ? i.call(t) : e.get(t)), E = (t, e, i) => e.has(t) ? Kn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), S = (t, e, i, r) => (ln(t, e, "write to private field"), r ? r.call(t, i) : e.set(t, i), i), se = (t, e, i) => (ln(t, e, "access private method"), i);
var ks = Array.isArray, To = Array.prototype.indexOf, Yr = Array.from, zr = Object.keys, $r = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Eo = Object.getOwnPropertyDescriptors, Io = Object.prototype, Ao = Array.prototype, Ss = Object.getPrototypeOf, Jn = Object.isExtensible;
function Mo(t) {
  return typeof t == "function";
}
const ar = () => {
};
function Lo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Cs() {
  var t, e, i = new Promise((r, n) => {
    t = r, e = n;
  });
  return { promise: i, resolve: t, reject: e };
}
const me = 2, In = 4, An = 8, Oo = 1 << 24, mt = 16, Et = 32, $t = 64, Qr = 128, rt = 512, ye = 1024, ze = 2048, ht = 4096, Ne = 8192, Ct = 16384, Tr = 32768, ti = 65536, Zn = 1 << 17, Ts = 1 << 18, ai = 1 << 19, Po = 1 << 20, kt = 1 << 25, ii = 32768, gn = 1 << 21, Mn = 1 << 22, qt = 1 << 23, gr = Symbol("$state"), Es = Symbol("legacy props"), Ro = Symbol(""), vi = new class extends Error {
  constructor() {
    super(...arguments);
    oe(this, "name", "StaleReactionError");
    oe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xr = 3, oi = 8;
function Is(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function qo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function No(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Do() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zo(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $o() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Uo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wo(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ho() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Vo = 1, Go = 2, As = 4, Yo = 8, Qo = 16, Xo = 1, Ko = 4, Jo = 8, Zo = 16, el = 4, Ms = 1, tl = 2, Ls = "[", Kr = "[!", Ln = "]", ri = {}, be = Symbol(), il = "http://www.w3.org/1999/xhtml";
function Er(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function rl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let W = !1;
function St(t) {
  W = t;
}
let U;
function xe(t) {
  if (t === null)
    throw Er(), ri;
  return U = t;
}
function Yi() {
  return xe(/* @__PURE__ */ nt(U));
}
function Y(t) {
  if (W) {
    if (/* @__PURE__ */ nt(U) !== null)
      throw Er(), ri;
    U = t;
  }
}
function mr(t = 1) {
  if (W) {
    for (var e = t, i = U; e--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nt(i);
    U = i;
  }
}
function Ur(t = !0) {
  for (var e = 0, i = U; ; ) {
    if (i.nodeType === oi) {
      var r = (
        /** @type {Comment} */
        i.data
      );
      if (r === Ln) {
        if (e === 0) return i;
        e -= 1;
      } else (r === Ls || r === Kr) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(i)
    );
    t && i.remove(), i = n;
  }
}
function Os(t) {
  if (!t || t.nodeType !== oi)
    throw Er(), ri;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Ps(t) {
  return t === this.v;
}
function nl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Rs(t) {
  return !nl(t, this.v);
}
let Me = null;
function Qi(t) {
  Me = t;
}
function Qe(t, e = !1, i) {
  Me = {
    p: Me,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Xe(t) {
  var e = (
    /** @type {ComponentContext} */
    Me
  ), i = e.e;
  if (i !== null) {
    e.e = null;
    for (var r of i)
      ra(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, Me = e.p, t ?? /** @type {T} */
  {};
}
function qs() {
  return !0;
}
let Ht = [];
function Ns() {
  var t = Ht;
  Ht = [], Lo(t);
}
function Ut(t) {
  if (Ht.length === 0 && !fr) {
    var e = Ht;
    queueMicrotask(() => {
      e === Ht && Ns();
    });
  }
  Ht.push(t);
}
function sl() {
  for (; Ht.length > 0; )
    Ns();
}
function Ds(t) {
  var e = Q;
  if (e === null)
    return B.f |= qt, t;
  if (e.f & Tr)
    Xi(t, e);
  else {
    if (!(e.f & Qr))
      throw t;
    e.b.error(t);
  }
}
function Xi(t, e) {
  for (; e !== null; ) {
    if (e.f & Qr)
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
const Mr = /* @__PURE__ */ new Set();
let j = null, Pr = null, de = null, Ve = [], Jr = null, fn = !1, fr = !1;
var yi, xi, Bt, Vt, _r, _i, ki, ve, hn, lr, pn, zs, $s;
const Br = class Br {
  constructor() {
    E(this, ve);
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
    E(this, yi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, xi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    E(this, Bt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    E(this, Vt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, _r, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, _i, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, ki, /* @__PURE__ */ new Set());
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
    Ve = [], Pr = null, this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const n of e)
      se(this, ve, hn).call(this, n, i);
    this.is_fork || se(this, ve, zs).call(this), this.is_deferred() ? (se(this, ve, lr).call(this, i.effects), se(this, ve, lr).call(this, i.render_effects)) : (Pr = this, j = null, es(i.render_effects), es(i.effects), Pr = null, (r = u(this, _r)) == null || r.resolve()), de = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, i) {
    this.previous.has(e) || this.previous.set(e, i), e.f & qt || (this.current.set(e, e.v), de == null || de.set(e, e.v));
  }
  activate() {
    j = this, this.apply();
  }
  deactivate() {
    j === this && (j = null, de = null);
  }
  flush() {
    if (this.activate(), Ve.length > 0) {
      if (Us(), j !== null && j !== this)
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
    S(this, Bt, u(this, Bt) + 1), e && S(this, Vt, u(this, Vt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    S(this, Bt, u(this, Bt) - 1), e && S(this, Vt, u(this, Vt) - 1), this.revive();
  }
  revive() {
    for (const e of u(this, _i))
      u(this, ki).delete(e), _e(e, ze), ni(e);
    for (const e of u(this, ki))
      _e(e, ht), ni(e);
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
    return (u(this, _r) ?? S(this, _r, Cs())).promise;
  }
  static ensure() {
    if (j === null) {
      const e = j = new Br();
      Mr.add(j), fr || Br.enqueue(() => {
        j === e && e.flush();
      });
    }
    return j;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ut(e);
  }
  apply() {
  }
};
yi = new WeakMap(), xi = new WeakMap(), Bt = new WeakMap(), Vt = new WeakMap(), _r = new WeakMap(), _i = new WeakMap(), ki = new WeakMap(), ve = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
hn = function(e, i) {
  var c;
  e.f ^= ye;
  for (var r = e.first; r !== null; ) {
    var n = r.f, s = (n & (Et | $t)) !== 0, a = s && (n & ye) !== 0, o = a || (n & Ne) !== 0 || this.skipped_effects.has(r);
    if (r.f & Qr && ((c = r.b) != null && c.is_pending()) && (i = {
      parent: i,
      effect: r,
      effects: [],
      render_effects: []
    }), !o && r.fn !== null) {
      s ? r.f ^= ye : n & In ? i.effects.push(r) : Ir(r) && (r.f & mt && u(this, _i).add(r), yr(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var d = r.parent;
    for (r = r.next; r === null && d !== null; )
      d === i.effect && (se(this, ve, lr).call(this, i.effects), se(this, ve, lr).call(this, i.render_effects), i = /** @type {EffectTarget} */
      i.parent), r = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
lr = function(e) {
  for (const i of e)
    i.f & ze ? u(this, _i).add(i) : i.f & ht && u(this, ki).add(i), se(this, ve, pn).call(this, i.deps), _e(i, ye);
}, /**
 * @param {Value[] | null} deps
 */
pn = function(e) {
  if (e !== null)
    for (const i of e)
      !(i.f & me) || !(i.f & ii) || (i.f ^= ii, se(this, ve, pn).call(
        this,
        /** @type {Derived} */
        i.deps
      ));
}, zs = function() {
  if (u(this, Vt) === 0) {
    for (const e of u(this, yi)) e();
    u(this, yi).clear();
  }
  u(this, Bt) === 0 && se(this, ve, $s).call(this);
}, $s = function() {
  var s;
  if (Mr.size > 1) {
    this.previous.clear();
    var e = de, i = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of Mr) {
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
        var n = Ve;
        Ve = [];
        const d = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
        for (const f of o)
          Ws(f, l, d, c);
        if (Ve.length > 0) {
          j = a, a.apply();
          for (const f of Ve)
            se(s = a, ve, hn).call(s, f, r);
          a.deactivate();
        }
        Ve = n;
      }
    }
    j = null, de = e;
  }
  this.committed = !0, Mr.delete(this);
};
let gt = Br;
function L(t) {
  var e = fr;
  fr = !0;
  try {
    for (var i; ; ) {
      if (sl(), Ve.length === 0 && (j == null || j.flush(), Ve.length === 0))
        return Jr = null, /** @type {T} */
        i;
      Us();
    }
  } finally {
    fr = e;
  }
}
function Us() {
  var t = Zt;
  fn = !0;
  var e = null;
  try {
    var i = 0;
    for (jr(!0); Ve.length > 0; ) {
      var r = gt.ensure();
      if (i++ > 1e3) {
        var n, s;
        al();
      }
      r.process(Ve), Nt.clear();
    }
  } finally {
    fn = !1, jr(t), Jr = null;
  }
}
function al() {
  try {
    $o();
  } catch (t) {
    Xi(t, Jr);
  }
}
let et = null;
function es(t) {
  var e = t.length;
  if (e !== 0) {
    for (var i = 0; i < e; ) {
      var r = t[i++];
      if (!(r.f & (Ct | Ne)) && Ir(r) && (et = /* @__PURE__ */ new Set(), yr(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? oa(r) : r.fn = null), (et == null ? void 0 : et.size) > 0)) {
        Nt.clear();
        for (const n of et) {
          if (n.f & (Ct | Ne)) continue;
          const s = [n];
          let a = n.parent;
          for (; a !== null; )
            et.has(a) && (et.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            l.f & (Ct | Ne) || yr(l);
          }
        }
        et.clear();
      }
    }
    et = null;
  }
}
function Ws(t, e, i, r) {
  if (!i.has(t) && (i.add(t), t.reactions !== null))
    for (const n of t.reactions) {
      const s = n.f;
      s & me ? Ws(
        /** @type {Derived} */
        n,
        e,
        i,
        r
      ) : s & (Mn | mt) && !(s & ze) && js(n, e, r) && (_e(n, ze), ni(
        /** @type {Effect} */
        n
      ));
    }
}
function js(t, e, i) {
  const r = i.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const n of t.deps) {
      if (e.includes(n))
        return !0;
      if (n.f & me && js(
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
  for (var e = Jr = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if (fn && e === Q && i & mt && !(i & Ts))
      return;
    if (i & ($t | Et)) {
      if (!(i & ye)) return;
      e.f ^= ye;
    }
  }
  Ve.push(e);
}
function ol(t) {
  let e = 0, i = si(0), r;
  return () => {
    wr() && (h(i), en(() => (e === 0 && (r = di(() => t(() => hr(i)))), e += 1, () => {
      Ut(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, hr(i));
      });
    })));
  };
}
var ll = ti | ai | Qr;
function dl(t, e, i) {
  new cl(t, e, i);
}
var Fe, Re, kr, lt, Gt, dt, He, Ee, ct, yt, Ot, Yt, Pt, Qt, Rt, Vr, ue, Fs, Hs, vn, Rr, qr, mn;
class cl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, i, r) {
    E(this, ue);
    /** @type {Boundary | null} */
    oe(this, "parent");
    E(this, Fe, !1);
    /** @type {TemplateNode} */
    E(this, Re);
    /** @type {TemplateNode | null} */
    E(this, kr, W ? U : null);
    /** @type {BoundaryProps} */
    E(this, lt);
    /** @type {((anchor: Node) => void)} */
    E(this, Gt);
    /** @type {Effect} */
    E(this, dt);
    /** @type {Effect | null} */
    E(this, He, null);
    /** @type {Effect | null} */
    E(this, Ee, null);
    /** @type {Effect | null} */
    E(this, ct, null);
    /** @type {DocumentFragment | null} */
    E(this, yt, null);
    /** @type {TemplateNode | null} */
    E(this, Ot, null);
    E(this, Yt, 0);
    E(this, Pt, 0);
    E(this, Qt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, Rt, null);
    E(this, Vr, ol(() => (S(this, Rt, si(u(this, Yt))), () => {
      S(this, Rt, null);
    })));
    S(this, Re, e), S(this, lt, i), S(this, Gt, r), this.parent = /** @type {Effect} */
    Q.b, S(this, Fe, !!u(this, lt).pending), S(this, dt, qn(() => {
      if (Q.b = this, W) {
        const s = u(this, kr);
        Yi(), /** @type {Comment} */
        s.nodeType === oi && /** @type {Comment} */
        s.data === Kr ? se(this, ue, Hs).call(this) : se(this, ue, Fs).call(this);
      } else {
        var n = se(this, ue, vn).call(this);
        try {
          S(this, He, Ge(() => r(n)));
        } catch (s) {
          this.error(s);
        }
        u(this, Pt) > 0 ? se(this, ue, qr).call(this) : S(this, Fe, !1);
      }
      return () => {
        var s;
        (s = u(this, Ot)) == null || s.remove();
      };
    }, ll)), W && S(this, Re, U);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return u(this, Fe) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!u(this, lt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    se(this, ue, mn).call(this, e), S(this, Yt, u(this, Yt) + e), u(this, Rt) && Ki(u(this, Rt), u(this, Yt));
  }
  get_effect_pending() {
    return u(this, Vr).call(this), h(
      /** @type {Source<number>} */
      u(this, Rt)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var i = u(this, lt).onerror;
    let r = u(this, lt).failed;
    if (u(this, Qt) || !i && !r)
      throw e;
    u(this, He) && (Se(u(this, He)), S(this, He, null)), u(this, Ee) && (Se(u(this, Ee)), S(this, Ee, null)), u(this, ct) && (Se(u(this, ct)), S(this, ct, null)), W && (xe(
      /** @type {TemplateNode} */
      u(this, kr)
    ), mr(), xe(Ur()));
    var n = !1, s = !1;
    const a = () => {
      if (n) {
        rl();
        return;
      }
      n = !0, s && Bo(), gt.ensure(), S(this, Yt, 0), u(this, ct) !== null && Jt(u(this, ct), () => {
        S(this, ct, null);
      }), S(this, Fe, this.has_pending_snippet()), S(this, He, se(this, ue, Rr).call(this, () => (S(this, Qt, !1), Ge(() => u(this, Gt).call(this, u(this, Re)))))), u(this, Pt) > 0 ? se(this, ue, qr).call(this) : S(this, Fe, !1);
    };
    var o = B;
    try {
      Ie(null), s = !0, i == null || i(e, a), s = !1;
    } catch (l) {
      Xi(l, u(this, dt) && u(this, dt).parent);
    } finally {
      Ie(o);
    }
    r && Ut(() => {
      S(this, ct, se(this, ue, Rr).call(this, () => {
        gt.ensure(), S(this, Qt, !0);
        try {
          return Ge(() => {
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
            u(this, dt).parent
          ), null;
        } finally {
          S(this, Qt, !1);
        }
      }));
    });
  }
}
Fe = new WeakMap(), Re = new WeakMap(), kr = new WeakMap(), lt = new WeakMap(), Gt = new WeakMap(), dt = new WeakMap(), He = new WeakMap(), Ee = new WeakMap(), ct = new WeakMap(), yt = new WeakMap(), Ot = new WeakMap(), Yt = new WeakMap(), Pt = new WeakMap(), Qt = new WeakMap(), Rt = new WeakMap(), Vr = new WeakMap(), ue = new WeakSet(), Fs = function() {
  try {
    S(this, He, Ge(() => u(this, Gt).call(this, u(this, Re))));
  } catch (e) {
    this.error(e);
  }
  S(this, Fe, !1);
}, Hs = function() {
  const e = u(this, lt).pending;
  e && (S(this, Ee, Ge(() => e(u(this, Re)))), gt.enqueue(() => {
    var i = se(this, ue, vn).call(this);
    S(this, He, se(this, ue, Rr).call(this, () => (gt.ensure(), Ge(() => u(this, Gt).call(this, i))))), u(this, Pt) > 0 ? se(this, ue, qr).call(this) : (Jt(
      /** @type {Effect} */
      u(this, Ee),
      () => {
        S(this, Ee, null);
      }
    ), S(this, Fe, !1));
  }));
}, vn = function() {
  var e = u(this, Re);
  return u(this, Fe) && (S(this, Ot, Ae()), u(this, Re).before(u(this, Ot)), e = u(this, Ot)), e;
}, /**
 * @param {() => Effect | null} fn
 */
Rr = function(e) {
  var i = Q, r = B, n = Me;
  pt(u(this, dt)), Ie(u(this, dt)), Qi(u(this, dt).ctx);
  try {
    return e();
  } catch (s) {
    return Ds(s), null;
  } finally {
    pt(i), Ie(r), Qi(n);
  }
}, qr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    u(this, lt).pending
  );
  u(this, He) !== null && (S(this, yt, document.createDocumentFragment()), u(this, yt).append(
    /** @type {TemplateNode} */
    u(this, Ot)
  ), ca(u(this, He), u(this, yt))), u(this, Ee) === null && S(this, Ee, Ge(() => e(u(this, Re))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
mn = function(e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && se(i = this.parent, ue, mn).call(i, e);
    return;
  }
  S(this, Pt, u(this, Pt) + e), u(this, Pt) === 0 && (S(this, Fe, !1), u(this, Ee) && Jt(u(this, Ee), () => {
    S(this, Ee, null);
  }), u(this, yt) && (u(this, Re).before(u(this, yt)), S(this, yt, null)));
};
function ul(t, e, i, r) {
  const n = Zr;
  if (i.length === 0 && t.length === 0) {
    r(e.map(n));
    return;
  }
  var s = j, a = (
    /** @type {Effect} */
    Q
  ), o = gl();
  function l() {
    Promise.all(i.map((d) => /* @__PURE__ */ fl(d))).then((d) => {
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
function gl() {
  var t = Q, e = B, i = Me, r = j;
  return function(s = !0) {
    pt(t), Ie(e), Qi(i), s && (r == null || r.activate());
  };
}
function Wr() {
  pt(null), Ie(null), Qi(null);
}
// @__NO_SIDE_EFFECTS__
function Zr(t) {
  var e = me | ze, i = B !== null && B.f & me ? (
    /** @type {Derived} */
    B
  ) : null;
  return Q !== null && (Q.f |= ai), {
    ctx: Me,
    deps: null,
    effects: null,
    equals: Ps,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      be
    ),
    wv: 0,
    parent: i ?? Q,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function fl(t, e) {
  let i = (
    /** @type {Effect | null} */
    Q
  );
  i === null && qo();
  var r = (
    /** @type {Boundary} */
    i.b
  ), n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = si(
    /** @type {V} */
    be
  ), a = !B, o = /* @__PURE__ */ new Map();
  return _l(() => {
    var p;
    var l = Cs();
    n = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        d === j && d.committed && d.deactivate(), Wr();
      });
    } catch (v) {
      l.reject(v), Wr();
    }
    var d = (
      /** @type {Batch} */
      j
    );
    if (a) {
      var c = !r.is_pending();
      r.update_pending_count(1), d.increment(c), (p = o.get(d)) == null || p.reject(vi), o.delete(d), o.set(d, l);
    }
    const f = (v, _ = void 0) => {
      if (d.activate(), _)
        _ !== vi && (s.f |= qt, Ki(s, _));
      else {
        s.f & qt && (s.f ^= qt), Ki(s, v);
        for (const [x, g] of o) {
          if (o.delete(x), x === d) break;
          g.reject(vi);
        }
      }
      a && (r.update_pending_count(-1), d.decrement(c));
    };
    l.promise.then(f, (v) => f(null, v || "unknown"));
  }), ia(() => {
    for (const l of o.values())
      l.reject(vi);
  }), new Promise((l) => {
    function d(c) {
      function f() {
        c === n ? l(s) : d(n);
      }
      c.then(f, f);
    }
    d(n);
  });
}
// @__NO_SIDE_EFFECTS__
function ie(t) {
  const e = /* @__PURE__ */ Zr(t);
  return ua(e), e;
}
// @__NO_SIDE_EFFECTS__
function Bs(t) {
  const e = /* @__PURE__ */ Zr(t);
  return e.equals = Rs, e;
}
function Vs(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      Se(
        /** @type {Effect} */
        e[i]
      );
  }
}
function hl(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & me))
      return e.f & Ct ? null : (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function On(t) {
  var e, i = Q;
  pt(hl(t));
  try {
    t.f &= ~ii, Vs(t), e = pa(t);
  } finally {
    pt(i);
  }
  return e;
}
function Gs(t) {
  var e = On(t);
  if (t.equals(e) || (j != null && j.is_fork || (t.v = e), t.wv = fa()), !li)
    if (de !== null)
      (wr() || j != null && j.is_fork) && de.set(t, e);
    else {
      var i = t.f & rt ? ye : ht;
      _e(t, i);
    }
}
let wn = /* @__PURE__ */ new Set();
const Nt = /* @__PURE__ */ new Map();
let Ys = !1;
function si(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ps,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function R(t, e) {
  const i = si(t);
  return ua(i), i;
}
// @__NO_SIDE_EFFECTS__
function Qs(t, e = !1, i = !0) {
  const r = si(t);
  return e || (r.equals = Rs), r;
}
function I(t, e, i = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ft || B.f & Zn) && qs() && B.f & (me | mt | Mn | Zn) && !(Ce != null && Ce.includes(t)) && Ho();
  let r = i ? le(e) : e;
  return Ki(t, r);
}
function Ki(t, e) {
  if (!t.equals(e)) {
    var i = t.v;
    li ? Nt.set(t, e) : Nt.set(t, i), t.v = e;
    var r = gt.ensure();
    r.capture(t, i), t.f & me && (t.f & ze && On(
      /** @type {Derived} */
      t
    ), _e(t, t.f & rt ? ye : ht)), t.wv = fa(), Xs(t, ze), Q !== null && Q.f & ye && !(Q.f & (Et | $t)) && (je === null ? Sl([t]) : je.push(t)), !r.is_fork && wn.size > 0 && !Ys && pl();
  }
  return e;
}
function pl() {
  Ys = !1;
  var t = Zt;
  jr(!0);
  const e = Array.from(wn);
  try {
    for (const i of e)
      i.f & ye && _e(i, ht), Ir(i) && yr(i);
  } finally {
    jr(t);
  }
  wn.clear();
}
function hr(t) {
  I(t, t.v + 1);
}
function Xs(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var r = i.length, n = 0; n < r; n++) {
      var s = i[n], a = s.f, o = (a & ze) === 0;
      if (o && _e(s, e), a & me) {
        var l = (
          /** @type {Derived} */
          s
        );
        de == null || de.delete(l), a & ii || (a & rt && (s.f |= ii), Xs(l, ht));
      } else o && (a & mt && et !== null && et.add(
        /** @type {Effect} */
        s
      ), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function le(t) {
  if (typeof t != "object" || t === null || gr in t)
    return t;
  const e = Ss(t);
  if (e !== Io && e !== Ao)
    return t;
  var i = /* @__PURE__ */ new Map(), r = ks(t), n = /* @__PURE__ */ R(0), s = ei, a = (o) => {
    if (ei === s)
      return o();
    var l = B, d = ei;
    Ie(null), ns(s);
    var c = o();
    return Ie(l), ns(d), c;
  };
  return r && i.set("length", /* @__PURE__ */ R(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && jo();
        var c = i.get(l);
        return c === void 0 ? c = a(() => {
          var f = /* @__PURE__ */ R(d.value);
          return i.set(l, f), f;
        }) : I(c, d.value, !0), !0;
      },
      deleteProperty(o, l) {
        var d = i.get(l);
        if (d === void 0) {
          if (l in o) {
            const c = a(() => /* @__PURE__ */ R(be));
            i.set(l, c), hr(n);
          }
        } else
          I(d, be), hr(n);
        return !0;
      },
      get(o, l, d) {
        var v;
        if (l === gr)
          return t;
        var c = i.get(l), f = l in o;
        if (c === void 0 && (!f || (v = Kt(o, l)) != null && v.writable) && (c = a(() => {
          var _ = le(f ? o[l] : be), x = /* @__PURE__ */ R(_);
          return x;
        }), i.set(l, c)), c !== void 0) {
          var p = h(c);
          return p === be ? void 0 : p;
        }
        return Reflect.get(o, l, d);
      },
      getOwnPropertyDescriptor(o, l) {
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d && "value" in d) {
          var c = i.get(l);
          c && (d.value = h(c));
        } else if (d === void 0) {
          var f = i.get(l), p = f == null ? void 0 : f.v;
          if (f !== void 0 && p !== be)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return d;
      },
      has(o, l) {
        var p;
        if (l === gr)
          return !0;
        var d = i.get(l), c = d !== void 0 && d.v !== be || Reflect.has(o, l);
        if (d !== void 0 || Q !== null && (!c || (p = Kt(o, l)) != null && p.writable)) {
          d === void 0 && (d = a(() => {
            var v = c ? le(o[l]) : be, _ = /* @__PURE__ */ R(v);
            return _;
          }), i.set(l, d));
          var f = h(d);
          if (f === be)
            return !1;
        }
        return c;
      },
      set(o, l, d, c) {
        var w;
        var f = i.get(l), p = l in o;
        if (r && l === "length")
          for (var v = d; v < /** @type {Source<number>} */
          f.v; v += 1) {
            var _ = i.get(v + "");
            _ !== void 0 ? I(_, be) : v in o && (_ = a(() => /* @__PURE__ */ R(be)), i.set(v + "", _));
          }
        if (f === void 0)
          (!p || (w = Kt(o, l)) != null && w.writable) && (f = a(() => /* @__PURE__ */ R(void 0)), I(f, le(d)), i.set(l, f));
        else {
          p = f.v !== be;
          var x = a(() => le(d));
          I(f, x);
        }
        var g = Reflect.getOwnPropertyDescriptor(o, l);
        if (g != null && g.set && g.set.call(c, d), !p) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              i.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= b.v && I(b, P + 1);
          }
          hr(n);
        }
        return !0;
      },
      ownKeys(o) {
        h(n);
        var l = Reflect.ownKeys(o).filter((f) => {
          var p = i.get(f);
          return p === void 0 || p.v !== be;
        });
        for (var [d, c] of i)
          c.v !== be && !(d in o) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Fo();
      }
    }
  );
}
var ts, Ks, Js, Zs;
function bn() {
  if (ts === void 0) {
    ts = window, Ks = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, i = Text.prototype;
    Js = Kt(e, "firstChild").get, Zs = Kt(e, "nextSibling").get, Jn(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Jn(i) && (i.__t = void 0);
  }
}
function Ae(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function pe(t) {
  return (
    /** @type {TemplateNode | null} */
    Js.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function nt(t) {
  return (
    /** @type {TemplateNode | null} */
    Zs.call(t)
  );
}
function X(t, e) {
  if (!W)
    return /* @__PURE__ */ pe(t);
  var i = /* @__PURE__ */ pe(U);
  if (i === null)
    i = U.appendChild(Ae());
  else if (e && i.nodeType !== Xr) {
    var r = Ae();
    return i == null || i.before(r), xe(r), r;
  }
  return xe(i), i;
}
function Ye(t, e = !1) {
  if (!W) {
    var i = /* @__PURE__ */ pe(t);
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ nt(i) : i;
  }
  if (e && (U == null ? void 0 : U.nodeType) !== Xr) {
    var r = Ae();
    return U == null || U.before(r), xe(r), r;
  }
  return U;
}
function Z(t, e = 1, i = !1) {
  let r = W ? U : t;
  for (var n; e--; )
    n = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ nt(r);
  if (!W)
    return r;
  if (i && (r == null ? void 0 : r.nodeType) !== Xr) {
    var s = Ae();
    return r === null ? n == null || n.after(s) : r.before(s), xe(s), s;
  }
  return xe(r), r;
}
function Pn(t) {
  t.textContent = "";
}
function ea() {
  return !1;
}
function vl(t) {
  W && /* @__PURE__ */ pe(t) !== null && Pn(t);
}
let is = !1;
function ta() {
  is || (is = !0, document.addEventListener(
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
function tr(t) {
  var e = B, i = Q;
  Ie(null), pt(null);
  try {
    return t();
  } finally {
    Ie(e), pt(i);
  }
}
function ml(t, e, i, r = i) {
  t.addEventListener(e, () => tr(i));
  const n = t.__on_r;
  n ? t.__on_r = () => {
    n(), r(!0);
  } : t.__on_r = () => r(!0), ta();
}
function wl(t) {
  Q === null && (B === null && zo(), Do()), li && No();
}
function bl(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function wt(t, e, i) {
  var r = Q;
  r !== null && r.f & Ne && (t |= Ne);
  var n = {
    ctx: Me,
    deps: null,
    nodes: null,
    f: t | ze | rt,
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
      yr(n), n.f |= Tr;
    } catch (o) {
      throw Se(n), o;
    }
  else e !== null && ni(n);
  var s = n;
  if (i && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  !(s.f & ai) && (s = s.first, t & mt && t & ti && s !== null && (s.f |= ti)), s !== null && (s.parent = r, r !== null && bl(s, r), B !== null && B.f & me && !(t & $t))) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function wr() {
  return B !== null && !ft;
}
function ia(t) {
  const e = wt(An, null, !1);
  return _e(e, ye), e.teardown = t, e;
}
function Dt(t) {
  wl();
  var e = (
    /** @type {Effect} */
    Q.f
  ), i = !B && (e & Et) !== 0 && (e & Tr) === 0;
  if (i) {
    var r = (
      /** @type {ComponentContext} */
      Me
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ra(t);
}
function ra(t) {
  return wt(In | Po, t, !1);
}
function yl(t) {
  gt.ensure();
  const e = wt($t | ai, t, !0);
  return () => {
    Se(e);
  };
}
function xl(t) {
  gt.ensure();
  const e = wt($t | ai, t, !0);
  return (i = {}) => new Promise((r) => {
    i.outro ? Jt(e, () => {
      Se(e), r(void 0);
    }) : (Se(e), r(void 0));
  });
}
function Rn(t) {
  return wt(In, t, !1);
}
function _l(t) {
  return wt(Mn | ai, t, !0);
}
function en(t, e = 0) {
  return wt(An | e, t, !0);
}
function he(t, e = [], i = [], r = []) {
  ul(r, e, i, (n) => {
    wt(An, () => t(...n.map(h)), !0);
  });
}
function qn(t, e = 0) {
  var i = wt(mt | e, t, !0);
  return i;
}
function Ge(t) {
  return wt(Et | ai, t, !0);
}
function na(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = li, r = B;
    rs(!0), Ie(null);
    try {
      e.call(null);
    } finally {
      rs(i), Ie(r);
    }
  }
}
function sa(t, e = !1) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    const n = i.ac;
    n !== null && tr(() => {
      n.abort(vi);
    });
    var r = i.next;
    i.f & $t ? i.parent = null : Se(i, e), i = r;
  }
}
function kl(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    e.f & Et || Se(e), e = i;
  }
}
function Se(t, e = !0) {
  var i = !1;
  (e || t.f & Ts) && t.nodes !== null && t.nodes.end !== null && (aa(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), i = !0), sa(t, e && !i), Fr(t, 0), _e(t, Ct);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  na(t);
  var n = t.parent;
  n !== null && n.first !== null && oa(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function aa(t, e) {
  for (; t !== null; ) {
    var i = t === e ? null : /* @__PURE__ */ nt(t);
    t.remove(), t = i;
  }
}
function oa(t) {
  var e = t.parent, i = t.prev, r = t.next;
  i !== null && (i.next = r), r !== null && (r.prev = i), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = i));
}
function Jt(t, e, i = !0) {
  var r = [];
  la(t, r, !0);
  var n = () => {
    i && Se(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || n();
    for (var o of r)
      o.out(a);
  } else
    n();
}
function la(t, e, i) {
  if (!(t.f & Ne)) {
    t.f ^= Ne;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || i) && e.push(o);
    for (var n = t.first; n !== null; ) {
      var s = n.next, a = (n.f & ti) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & Et) !== 0 && (t.f & mt) !== 0;
      la(n, e, a ? i : !1), n = s;
    }
  }
}
function Nn(t) {
  da(t, !0);
}
function da(t, e) {
  if (t.f & Ne) {
    t.f ^= Ne, t.f & ye || (_e(t, ze), ni(t));
    for (var i = t.first; i !== null; ) {
      var r = i.next, n = (i.f & ti) !== 0 || (i.f & Et) !== 0;
      da(i, n ? e : !1), i = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function ca(t, e) {
  if (t.nodes)
    for (var i = t.nodes.start, r = t.nodes.end; i !== null; ) {
      var n = i === r ? null : /* @__PURE__ */ nt(i);
      e.append(i), i = n;
    }
}
let Zt = !1;
function jr(t) {
  Zt = t;
}
let li = !1;
function rs(t) {
  li = t;
}
let B = null, ft = !1;
function Ie(t) {
  B = t;
}
let Q = null;
function pt(t) {
  Q = t;
}
let Ce = null;
function ua(t) {
  B !== null && (Ce === null ? Ce = [t] : Ce.push(t));
}
let ke = null, Pe = 0, je = null;
function Sl(t) {
  je = t;
}
let ga = 1, br = 0, ei = br;
function ns(t) {
  ei = t;
}
function fa() {
  return ++ga;
}
function Ir(t) {
  var e = t.f;
  if (e & ze)
    return !0;
  if (e & me && (t.f &= ~ii), e & ht) {
    var i = t.deps;
    if (i !== null)
      for (var r = i.length, n = 0; n < r; n++) {
        var s = i[n];
        if (Ir(
          /** @type {Derived} */
          s
        ) && Gs(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
      }
    e & rt && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    de === null && _e(t, ye);
  }
  return !1;
}
function ha(t, e, i = !0) {
  var r = t.reactions;
  if (r !== null && !(Ce != null && Ce.includes(t)))
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      s.f & me ? ha(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (i ? _e(s, ze) : s.f & ye && _e(s, ht), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function pa(t) {
  var _;
  var e = ke, i = Pe, r = je, n = B, s = Ce, a = Me, o = ft, l = ei, d = t.f;
  ke = /** @type {null | Value[]} */
  null, Pe = 0, je = null, B = d & (Et | $t) ? null : t, Ce = null, Qi(t.ctx), ft = !1, ei = ++br, t.ac !== null && (tr(() => {
    t.ac.abort(vi);
  }), t.ac = null);
  try {
    t.f |= gn;
    var c = (
      /** @type {Function} */
      t.fn
    ), f = c(), p = t.deps;
    if (ke !== null) {
      var v;
      if (Fr(t, Pe), p !== null && Pe > 0)
        for (p.length = Pe + ke.length, v = 0; v < ke.length; v++)
          p[Pe + v] = ke[v];
      else
        t.deps = p = ke;
      if (wr() && t.f & rt)
        for (v = Pe; v < p.length; v++)
          ((_ = p[v]).reactions ?? (_.reactions = [])).push(t);
    } else p !== null && Pe < p.length && (Fr(t, Pe), p.length = Pe);
    if (qs() && je !== null && !ft && p !== null && !(t.f & (me | ht | ze)))
      for (v = 0; v < /** @type {Source[]} */
      je.length; v++)
        ha(
          je[v],
          /** @type {Effect} */
          t
        );
    return n !== null && n !== t && (br++, je !== null && (r === null ? r = je : r.push(.../** @type {Source[]} */
    je))), t.f & qt && (t.f ^= qt), f;
  } catch (x) {
    return Ds(x);
  } finally {
    t.f ^= gn, ke = e, Pe = i, je = r, B = n, Ce = s, Qi(a), ft = o, ei = l;
  }
}
function Cl(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var r = To.call(i, t);
    if (r !== -1) {
      var n = i.length - 1;
      n === 0 ? i = e.reactions = null : (i[r] = i[n], i.pop());
    }
  }
  i === null && e.f & me && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ke === null || !ke.includes(e)) && (_e(e, ht), e.f & rt && (e.f ^= rt, e.f &= ~ii), Vs(
    /** @type {Derived} **/
    e
  ), Fr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Fr(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var r = e; r < i.length; r++)
      Cl(t, i[r]);
}
function yr(t) {
  var e = t.f;
  if (!(e & Ct)) {
    _e(t, ye);
    var i = Q, r = Zt;
    Q = t, Zt = !0;
    try {
      e & (mt | Oo) ? kl(t) : sa(t), na(t);
      var n = pa(t);
      t.teardown = typeof n == "function" ? n : null, t.wv = ga;
      var s;
    } finally {
      Zt = r, Q = i;
    }
  }
}
async function va() {
  await Promise.resolve(), L();
}
function h(t) {
  var e = t.f, i = (e & me) !== 0;
  if (B !== null && !ft) {
    var r = Q !== null && (Q.f & Ct) !== 0;
    if (!r && !(Ce != null && Ce.includes(t))) {
      var n = B.deps;
      if (B.f & gn)
        t.rv < br && (t.rv = br, ke === null && n !== null && n[Pe] === t ? Pe++ : ke === null ? ke = [t] : ke.includes(t) || ke.push(t));
      else {
        (B.deps ?? (B.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [B] : s.includes(B) || s.push(B);
      }
    }
  }
  if (li) {
    if (Nt.has(t))
      return Nt.get(t);
    if (i) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return (!(a.f & ye) && a.reactions !== null || wa(a)) && (o = On(a)), Nt.set(a, o), o;
    }
  } else i && (!(de != null && de.has(t)) || j != null && j.is_fork && !wr()) && (a = /** @type {Derived} */
  t, Ir(a) && Gs(a), Zt && wr() && !(a.f & rt) && ma(a));
  if (de != null && de.has(t))
    return de.get(t);
  if (t.f & qt)
    throw t.v;
  return t.v;
}
function ma(t) {
  if (t.deps !== null) {
    t.f ^= rt;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), e.f & me && !(e.f & rt) && ma(
        /** @type {Derived} */
        e
      );
  }
}
function wa(t) {
  if (t.v === be) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Nt.has(e) || e.f & me && wa(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function di(t) {
  var e = ft;
  try {
    return ft = !0, t();
  } finally {
    ft = e;
  }
}
const Tl = -7169;
function _e(t, e) {
  t.f = t.f & Tl | e;
}
const El = ["touchstart", "touchmove"];
function Il(t) {
  return El.includes(t);
}
const ba = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Set();
function Al(t, e, i, r = {}) {
  function n(s) {
    if (r.capture || dr.call(e, s), !s.cancelBubble)
      return tr(() => i == null ? void 0 : i.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ut(() => {
    e.addEventListener(t, n, r);
  }) : e.addEventListener(t, n, r), n;
}
function ya(t, e, i, r, n) {
  var s = { capture: r, passive: n }, a = Al(t, e, i, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ia(() => {
    e.removeEventListener(t, a, s);
  });
}
function Wt(t) {
  for (var e = 0; e < t.length; e++)
    ba.add(t[e]);
  for (var i of yn)
    i(t);
}
let ss = null;
function dr(t) {
  var g;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, n = ((g = t.composedPath) == null ? void 0 : g.call(t)) || [], s = (
    /** @type {null | Element} */
    n[0] || t.target
  );
  ss = t;
  var a = 0, o = ss === t && t.__root;
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
    $r(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || i;
      }
    });
    var c = B, f = Q;
    Ie(null), pt(null);
    try {
      for (var p, v = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + r];
          x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && x.call(s, t);
        } catch (b) {
          p ? v.push(b) : p = b;
        }
        if (t.cancelBubble || _ === e || _ === null)
          break;
        s = _;
      }
      if (p) {
        for (let b of v)
          queueMicrotask(() => {
            throw b;
          });
        throw p;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Ie(c), pt(f);
    }
  }
}
function Dn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function De(t, e) {
  var i = (
    /** @type {Effect} */
    Q
  );
  i.nodes === null && (i.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  var i = (e & Ms) !== 0, r = (e & tl) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (W)
      return De(U, null), U;
    n === void 0 && (n = Dn(s ? t : "<!>" + t), i || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ pe(n)));
    var a = (
      /** @type {TemplateNode} */
      r || Ks ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (i) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(a)
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
function Ml(t, e, i = "svg") {
  var r = !t.startsWith("<!>"), n = (e & Ms) !== 0, s = `<${i}>${r ? t : "<!>" + t}</${i}>`, a;
  return () => {
    if (W)
      return De(U, null), U;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Dn(s)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ pe(o)
      );
      if (n)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ pe(l); )
          a.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ pe(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ pe(l);
    }
    var d = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(d)
      ), f = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      De(c, f);
    } else
      De(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function zn(t, e) {
  return /* @__PURE__ */ Ml(t, e, "svg");
}
function Ll(t = "") {
  if (!W) {
    var e = Ae(t + "");
    return De(e, e), e;
  }
  var i = U;
  return i.nodeType !== Xr && (i.before(i = Ae()), xe(i)), De(i, i), i;
}
function ir() {
  if (W)
    return De(U, null), U;
  var t = document.createDocumentFragment(), e = document.createComment(""), i = Ae();
  return t.append(e, i), De(e, i), t;
}
function O(t, e) {
  if (W) {
    var i = (
      /** @type {Effect & { nodes: EffectNodes }} */
      Q
    );
    (!(i.f & Tr) || i.nodes.end === null) && (i.nodes.end = U), Yi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let xn = !0;
function Tt(t, e) {
  var i = e == null ? "" : typeof e == "object" ? e + "" : e;
  i !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = i, t.nodeValue = i + "");
}
function tn(t, e) {
  return xa(t, e);
}
function Ol(t, e) {
  bn(), e.intro = e.intro ?? !1;
  const i = e.target, r = W, n = U;
  try {
    for (var s = /* @__PURE__ */ pe(i); s && (s.nodeType !== oi || /** @type {Comment} */
    s.data !== Ls); )
      s = /* @__PURE__ */ nt(s);
    if (!s)
      throw ri;
    St(!0), xe(
      /** @type {Comment} */
      s
    );
    const a = xa(t, { ...e, anchor: s });
    return St(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ri && console.warn("Failed to hydrate: ", a), e.recover === !1 && Uo(), bn(), Pn(i), St(!1), tn(t, e);
  } finally {
    St(r), xe(n);
  }
}
const hi = /* @__PURE__ */ new Map();
function xa(t, { target: e, anchor: i, props: r = {}, events: n, context: s, intro: a = !0 }) {
  bn();
  var o = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var v = f[p];
      if (!o.has(v)) {
        o.add(v);
        var _ = Il(v);
        e.addEventListener(v, dr, { passive: _ });
        var x = hi.get(v);
        x === void 0 ? (document.addEventListener(v, dr, { passive: _ }), hi.set(v, 1)) : hi.set(v, x + 1);
      }
    }
  };
  l(Yr(ba)), yn.add(l);
  var d = void 0, c = xl(() => {
    var f = i ?? e.appendChild(Ae());
    return dl(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        if (s) {
          Qe({});
          var v = (
            /** @type {ComponentContext} */
            Me
          );
          v.c = s;
        }
        if (n && (r.$$events = n), W && De(
          /** @type {TemplateNode} */
          p,
          null
        ), xn = a, d = t(p, r) || {}, xn = !0, W && (Q.nodes.end = U, U === null || U.nodeType !== oi || /** @type {Comment} */
        U.data !== Ln))
          throw Er(), ri;
        s && Xe();
      }
    ), () => {
      var _;
      for (var p of o) {
        e.removeEventListener(p, dr);
        var v = (
          /** @type {number} */
          hi.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, dr), hi.delete(p)) : hi.set(p, v);
      }
      yn.delete(l), f !== i && ((_ = f.parentNode) == null || _.removeChild(f));
    };
  });
  return _n.set(d, c), d;
}
let _n = /* @__PURE__ */ new WeakMap();
function bi(t, e) {
  const i = _n.get(t);
  return i ? (_n.delete(t), i(e)) : Promise.resolve();
}
var it, ut, qe, Xt, Sr, Cr, Gr;
class Pl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, i = !0) {
    /** @type {TemplateNode} */
    oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, it, /* @__PURE__ */ new Map());
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
    E(this, ut, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, qe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, Xt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Sr, !0);
    E(this, Cr, () => {
      var e = (
        /** @type {Batch} */
        j
      );
      if (u(this, it).has(e)) {
        var i = (
          /** @type {Key} */
          u(this, it).get(e)
        ), r = u(this, ut).get(i);
        if (r)
          Nn(r), u(this, Xt).delete(i);
        else {
          var n = u(this, qe).get(i);
          n && (u(this, ut).set(i, n.effect), u(this, qe).delete(i), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), r = n.effect);
        }
        for (const [s, a] of u(this, it)) {
          if (u(this, it).delete(s), s === e)
            break;
          const o = u(this, qe).get(a);
          o && (Se(o.effect), u(this, qe).delete(a));
        }
        for (const [s, a] of u(this, ut)) {
          if (s === i || u(this, Xt).has(s)) continue;
          const o = () => {
            if (Array.from(u(this, it).values()).includes(s)) {
              var d = document.createDocumentFragment();
              ca(a, d), d.append(Ae()), u(this, qe).set(s, { effect: a, fragment: d });
            } else
              Se(a);
            u(this, Xt).delete(s), u(this, ut).delete(s);
          };
          u(this, Sr) || !r ? (u(this, Xt).add(s), Jt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, Gr, (e) => {
      u(this, it).delete(e);
      const i = Array.from(u(this, it).values());
      for (const [r, n] of u(this, qe))
        i.includes(r) || (Se(n.effect), u(this, qe).delete(r));
    });
    this.anchor = e, S(this, Sr, i);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, i) {
    var r = (
      /** @type {Batch} */
      j
    ), n = ea();
    if (i && !u(this, ut).has(e) && !u(this, qe).has(e))
      if (n) {
        var s = document.createDocumentFragment(), a = Ae();
        s.append(a), u(this, qe).set(e, {
          effect: Ge(() => i(a)),
          fragment: s
        });
      } else
        u(this, ut).set(
          e,
          Ge(() => i(this.anchor))
        );
    if (u(this, it).set(r, e), n) {
      for (const [o, l] of u(this, ut))
        o === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [o, l] of u(this, qe))
        o === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(u(this, Cr)), r.ondiscard(u(this, Gr));
    } else
      W && (this.anchor = U), u(this, Cr).call(this);
  }
}
it = new WeakMap(), ut = new WeakMap(), qe = new WeakMap(), Xt = new WeakMap(), Sr = new WeakMap(), Cr = new WeakMap(), Gr = new WeakMap();
function ee(t, e, i = !1) {
  W && Yi();
  var r = new Pl(t), n = i ? ti : 0;
  function s(a, o) {
    if (W) {
      const d = Os(t) === Kr;
      if (a === d) {
        var l = Ur();
        xe(l), r.anchor = l, St(!1), r.ensure(a, o), St(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  qn(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, n);
}
function Rl(t, e, i) {
  for (var r = [], n = e.length, s, a = e.length, o = 0; o < n; o++) {
    let f = e[o];
    Jt(
      f,
      () => {
        if (s) {
          if (s.pending.delete(f), s.done.add(f), s.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            kn(Yr(s.done)), p.delete(s), p.size === 0 && (t.outrogroups = null);
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
      Pn(c), c.append(d), t.items.clear();
    }
    kn(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function kn(t, e = !0) {
  for (var i = 0; i < t.length; i++)
    Se(t[i], e);
}
var as;
function Sn(t, e, i, r, n, s = null) {
  var a = t, o = /* @__PURE__ */ new Map(), l = (e & As) !== 0;
  if (l) {
    var d = (
      /** @type {Element} */
      t
    );
    a = W ? xe(/* @__PURE__ */ pe(d)) : d.appendChild(Ae());
  }
  W && Yi();
  var c = null, f = /* @__PURE__ */ Bs(() => {
    var b = i();
    return ks(b) ? b : b == null ? [] : Yr(b);
  }), p, v = !0;
  function _() {
    g.fallback = c, ql(g, p, a, e, r), c !== null && (p.length === 0 ? c.f & kt ? (c.f ^= kt, cr(c, null, a)) : Nn(c) : Jt(c, () => {
      c = null;
    }));
  }
  var x = qn(() => {
    p = /** @type {V[]} */
    h(f);
    var b = p.length;
    let P = !1;
    if (W) {
      var w = Os(a) === Kr;
      w !== (b === 0) && (a = Ur(), xe(a), St(!1), P = !0);
    }
    for (var m = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      j
    ), M = ea(), q = 0; q < b; q += 1) {
      W && U.nodeType === oi && /** @type {Comment} */
      U.data === Ln && (a = /** @type {Comment} */
      U, P = !0, St(!1));
      var V = p[q], K = r(V, q), C = v ? null : o.get(K);
      C ? (C.v && Ki(C.v, V), C.i && Ki(C.i, q), M && T.skipped_effects.delete(C.e)) : (C = Nl(
        o,
        v ? a : as ?? (as = Ae()),
        V,
        K,
        q,
        n,
        e,
        i
      ), v || (C.e.f |= kt), o.set(K, C)), m.add(K);
    }
    if (b === 0 && s && !c && (v ? c = Ge(() => s(a)) : (c = Ge(() => s(as ?? (as = Ae()))), c.f |= kt)), W && b > 0 && xe(Ur()), !v)
      if (M) {
        for (const [D, G] of o)
          m.has(D) || T.skipped_effects.add(G.e);
        T.oncommit(_), T.ondiscard(() => {
        });
      } else
        _();
    P && St(!0), h(f);
  }), g = { effect: x, items: o, outrogroups: null, fallback: c };
  v = !1, W && (a = U);
}
function ql(t, e, i, r, n) {
  var C, D, G, te, ge, we, Ke, jt, ui;
  var s = (r & Yo) !== 0, a = e.length, o = t.items, l = t.effect.first, d, c = null, f, p = [], v = [], _, x, g, b;
  if (s)
    for (b = 0; b < a; b += 1)
      _ = e[b], x = n(_, b), g = /** @type {EachItem} */
      o.get(x).e, g.f & kt || ((D = (C = g.nodes) == null ? void 0 : C.a) == null || D.measure(), (f ?? (f = /* @__PURE__ */ new Set())).add(g));
  for (b = 0; b < a; b += 1) {
    if (_ = e[b], x = n(_, b), g = /** @type {EachItem} */
    o.get(x).e, t.outrogroups !== null)
      for (const Te of t.outrogroups)
        Te.pending.delete(g), Te.done.delete(g);
    if (g.f & kt)
      if (g.f ^= kt, g === l)
        cr(g, null, i);
      else {
        var P = c ? c.next : l;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Mt(t, c, g), Mt(t, g, P), cr(g, P, i), c = g, p = [], v = [], l = c.next;
        continue;
      }
    if (g.f & Ne && (Nn(g), s && ((te = (G = g.nodes) == null ? void 0 : G.a) == null || te.unfix(), (f ?? (f = /* @__PURE__ */ new Set())).delete(g))), g !== l) {
      if (d !== void 0 && d.has(g)) {
        if (p.length < v.length) {
          var w = v[0], m;
          c = w.prev;
          var T = p[0], M = p[p.length - 1];
          for (m = 0; m < p.length; m += 1)
            cr(p[m], w, i);
          for (m = 0; m < v.length; m += 1)
            d.delete(v[m]);
          Mt(t, T.prev, M.next), Mt(t, c, T), Mt(t, M, w), l = w, c = M, b -= 1, p = [], v = [];
        } else
          d.delete(g), cr(g, l, i), Mt(t, g.prev, g.next), Mt(t, g, c === null ? t.effect.first : c.next), Mt(t, c, g), c = g;
        continue;
      }
      for (p = [], v = []; l !== null && l !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
    }
    g.f & kt || p.push(g), c = g, l = g.next;
  }
  if (t.outrogroups !== null) {
    for (const Te of t.outrogroups)
      Te.pending.size === 0 && (kn(Yr(Te.done)), (ge = t.outrogroups) == null || ge.delete(Te));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || d !== void 0) {
    var q = [];
    if (d !== void 0)
      for (g of d)
        g.f & Ne || q.push(g);
    for (; l !== null; )
      !(l.f & Ne) && l !== t.fallback && q.push(l), l = l.next;
    var V = q.length;
    if (V > 0) {
      var K = r & As && a === 0 ? i : null;
      if (s) {
        for (b = 0; b < V; b += 1)
          (Ke = (we = q[b].nodes) == null ? void 0 : we.a) == null || Ke.measure();
        for (b = 0; b < V; b += 1)
          (ui = (jt = q[b].nodes) == null ? void 0 : jt.a) == null || ui.fix();
      }
      Rl(t, q, K);
    }
  }
  s && Ut(() => {
    var Te, k;
    if (f !== void 0)
      for (g of f)
        (k = (Te = g.nodes) == null ? void 0 : Te.a) == null || k.apply();
  });
}
function Nl(t, e, i, r, n, s, a, o) {
  var l = a & Vo ? a & Qo ? si(i) : /* @__PURE__ */ Qs(i, !1, !1) : null, d = a & Go ? si(n) : null;
  return {
    v: l,
    i: d,
    e: Ge(() => (s(e, l ?? i, d ?? n, o), () => {
      t.delete(r);
    }))
  };
}
function cr(t, e, i) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end, s = e && !(e.f & kt) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : i; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nt(r)
      );
      if (s.before(r), r === n)
        return;
      r = a;
    }
}
function Mt(t, e, i) {
  e === null ? t.effect.first = i : e.next = i, i === null ? t.effect.last = e : i.prev = e;
}
function Dl(t, e, i = !1, r = !1, n = !1) {
  var s = t, a = "";
  he(() => {
    var o = (
      /** @type {Effect} */
      Q
    );
    if (a === (a = e() ?? "")) {
      W && Yi();
      return;
    }
    if (o.nodes !== null && (aa(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (W) {
        U.data;
        for (var l = Yi(), d = l; l !== null && (l.nodeType !== oi || /** @type {Comment} */
        l.data !== ""); )
          d = l, l = /* @__PURE__ */ nt(l);
        if (l === null)
          throw Er(), ri;
        De(U, d), s = xe(l);
        return;
      }
      var c = a + "";
      i ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var f = Dn(c);
      if ((i || r) && (f = /** @type {Element} */
      /* @__PURE__ */ pe(f)), De(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), i || r)
        for (; /* @__PURE__ */ pe(f); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ pe(f)
          );
      else
        s.before(f);
    }
  });
}
const zl = () => performance.now(), _t = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => zl(),
  tasks: /* @__PURE__ */ new Set()
};
function _a() {
  const t = _t.now();
  _t.tasks.forEach((e) => {
    e.c(t) || (_t.tasks.delete(e), e.f());
  }), _t.tasks.size !== 0 && _t.tick(_a);
}
function $l(t) {
  let e;
  return _t.tasks.size === 0 && _t.tick(_a), {
    promise: new Promise((i) => {
      _t.tasks.add(e = { c: t, f: i });
    }),
    abort() {
      _t.tasks.delete(e);
    }
  };
}
function Lr(t, e) {
  tr(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Ul(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (i) => i[0].toUpperCase() + i.slice(1)
  ).join("");
}
function os(t) {
  const e = {}, i = t.split(";");
  for (const r of i) {
    const [n, s] = r.split(":");
    if (!n || s === void 0) break;
    const a = Ul(n.trim());
    e[a] = s.trim();
  }
  return e;
}
const Wl = (t) => t;
function ls(t, e, i, r) {
  var g;
  var n = (t & el) !== 0, s = "both", a, o = e.inert, l = e.style.overflow, d, c;
  function f() {
    return tr(() => a ?? (a = i()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: s
    })));
  }
  var p = {
    is_global: n,
    in() {
      e.inert = o, Lr(e, "introstart"), d = Cn(e, f(), c, 1, () => {
        Lr(e, "introend"), d == null || d.abort(), d = a = void 0, e.style.overflow = l;
      });
    },
    out(b) {
      e.inert = !0, Lr(e, "outrostart"), c = Cn(e, f(), d, 0, () => {
        Lr(e, "outroend"), b == null || b();
      });
    },
    stop: () => {
      d == null || d.abort(), c == null || c.abort();
    }
  }, v = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Q
  );
  if (((g = v.nodes).t ?? (g.t = [])).push(p), xn) {
    var _ = n;
    if (!_) {
      for (var x = (
        /** @type {Effect | null} */
        v.parent
      ); x && x.f & ti; )
        for (; (x = x.parent) && !(x.f & mt); )
          ;
      _ = !x || (x.f & Tr) !== 0;
    }
    _ && Rn(() => {
      di(() => p.in());
    });
  }
}
function Cn(t, e, i, r, n) {
  var s = r === 1;
  if (Mo(e)) {
    var a, o = !1;
    return Ut(() => {
      if (!o) {
        var g = e({ direction: s ? "in" : "out" });
        a = Cn(t, g, i, r, n);
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
      abort: ar,
      deactivate: ar,
      reset: ar,
      t: () => r
    };
  const { delay: l = 0, css: d, tick: c, easing: f = Wl } = e;
  var p = [];
  if (s && i === void 0 && (c && c(0, 1), d)) {
    var v = os(d(0, 1));
    p.push(v, v);
  }
  var _ = () => 1 - r, x = t.animate(p, { duration: l, fill: "forwards" });
  return x.onfinish = () => {
    x.cancel();
    var g = (i == null ? void 0 : i.t()) ?? 1 - r;
    i == null || i.abort();
    var b = r - g, P = (
      /** @type {number} */
      e.duration * Math.abs(b)
    ), w = [];
    if (P > 0) {
      var m = !1;
      if (d)
        for (var T = Math.ceil(P / 16.666666666666668), M = 0; M <= T; M += 1) {
          var q = g + b * f(M / T), V = os(d(q, 1 - q));
          w.push(V), m || (m = V.overflow === "hidden");
        }
      m && (t.style.overflow = "hidden"), _ = () => {
        var K = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          x.currentTime
        );
        return g + b * f(K / P);
      }, c && $l(() => {
        if (x.playState !== "running") return !1;
        var K = _();
        return c(K, 1 - K), !0;
      });
    }
    x = t.animate(w, { duration: P, fill: "forwards" }), x.onfinish = () => {
      _ = () => r, c == null || c(r, 1 - r), n();
    };
  }, {
    abort: () => {
      x && (x.cancel(), x.effect = null, x.onfinish = ar);
    },
    deactivate: () => {
      n = ar;
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0));
    },
    t: () => _()
  };
}
function st(t, e) {
  Rn(() => {
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
const ds = [...` 	
\r\f \v\uFEFF`];
function jl(t, e, i) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), i) {
    for (var n in i)
      if (i[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var s = n.length, a = 0; (a = r.indexOf(n, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || ds.includes(r[a - 1])) && (o === r.length || ds.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function Fl(t, e) {
  return t == null ? null : String(t);
}
function ci(t, e, i, r, n, s) {
  var a = t.__className;
  if (W || a !== i || a === void 0) {
    var o = jl(i, r, s);
    (!W || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = i;
  } else if (s && n !== s)
    for (var l in s) {
      var d = !!s[l];
      (n == null || d !== !!n[l]) && t.classList.toggle(l, d);
    }
  return s;
}
function Nr(t, e, i, r) {
  var n = t.__style;
  if (W || n !== e) {
    var s = Fl(e);
    (!W || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  }
  return r;
}
const Hl = Symbol("is custom element"), Bl = Symbol("is html");
function Vl(t) {
  if (W) {
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
    t.__on_r = i, Ut(i), ta();
  }
}
function ce(t, e, i, r) {
  var n = Gl(t);
  W && (n[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || n[e] !== (n[e] = i) && (e === "loading" && (t[Ro] = i), i == null ? t.removeAttribute(e) : typeof i != "string" && Yl(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
function Gl(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Hl]: t.nodeName.includes("-"),
      [Bl]: t.namespaceURI === il
    })
  );
}
var cs = /* @__PURE__ */ new Map();
function Yl(t) {
  var e = t.getAttribute("is") || t.nodeName, i = cs.get(e);
  if (i) return i;
  cs.set(e, i = []);
  for (var r, n = t, s = Element.prototype; s !== n; ) {
    r = Eo(n);
    for (var a in r)
      r[a].set && i.push(a);
    n = Ss(n);
  }
  return i;
}
function ka(t, e, i = e) {
  var r = /* @__PURE__ */ new WeakSet();
  ml(t, "input", async (n) => {
    var s = n ? t.defaultValue : t.value;
    if (s = dn(t) ? cn(s) : s, i(s), j !== null && r.add(j), await va(), s !== (s = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = s ?? "", o !== null) {
        var d = t.value.length;
        a === o && o === l && d > l ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = a, t.selectionEnd = Math.min(o, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (W && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  di(e) == null && t.value) && (i(dn(t) ? cn(t.value) : t.value), j !== null && r.add(j)), en(() => {
    var n = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Pr ?? j
      );
      if (r.has(s))
        return;
    }
    dn(t) && n === cn(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function dn(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function cn(t) {
  return t === "" ? null : +t;
}
function us(t, e) {
  return t === e || (t == null ? void 0 : t[gr]) === e;
}
function Ar(t = {}, e, i, r) {
  return Rn(() => {
    var n, s;
    return en(() => {
      n = s, s = [], di(() => {
        t !== i(...s) && (e(t, ...s), n && us(i(...n), t) && e(null, ...n));
      });
    }), () => {
      Ut(() => {
        s && us(i(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Or = !1;
function Ql(t) {
  var e = Or;
  try {
    return Or = !1, [t(), Or];
  } finally {
    Or = e;
  }
}
function N(t, e, i, r) {
  var P;
  var n = (i & Jo) !== 0, s = (i & Zo) !== 0, a = (
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
    var c = gr in t || Es in t;
    d = ((P = Kt(t, e)) == null ? void 0 : P.set) ?? (c && e in t ? (w) => t[e] = w : void 0);
  }
  var f, p = !1;
  n ? [f, p] = Ql(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = l(), d && (Wo(), d(f)));
  var v;
  if (v = () => {
    var w = (
      /** @type {V} */
      t[e]
    );
    return w === void 0 ? l() : (o = !0, w);
  }, !(i & Ko))
    return v;
  if (d) {
    var _ = t.$$legacy;
    return (
      /** @type {() => V} */
      function(w, m) {
        return arguments.length > 0 ? ((!m || _ || p) && d(m ? v() : w), w) : v();
      }
    );
  }
  var x = !1, g = (i & Xo ? Zr : Bs)(() => (x = !1, v()));
  n && h(g);
  var b = (
    /** @type {Effect} */
    Q
  );
  return (
    /** @type {() => V} */
    function(w, m) {
      if (arguments.length > 0) {
        const T = m ? h(g) : n ? le(w) : w;
        return I(g, T), x = !0, a !== void 0 && (a = T), w;
      }
      return li && x || b.f & Ct ? g.v : h(g);
    }
  );
}
function Xl(t) {
  return new Kl(t);
}
var xt, Be;
class Kl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    E(this, xt);
    /** @type {Record<string, any>} */
    E(this, Be);
    var s;
    var i = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ Qs(o, !1, !1);
      return i.set(a, l), l;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return h(i.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Es ? !0 : (h(i.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return I(i.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    S(this, Be, (e.hydrate ? Ol : tn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && L(), S(this, xt, n.$$events);
    for (const a of Object.keys(u(this, Be)))
      a === "$set" || a === "$destroy" || a === "$on" || $r(this, a, {
        get() {
          return u(this, Be)[a];
        },
        /** @param {any} value */
        set(o) {
          u(this, Be)[a] = o;
        },
        enumerable: !0
      });
    u(this, Be).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(n, a);
    }, u(this, Be).$destroy = () => {
      bi(u(this, Be));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    u(this, Be).$set(e);
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
    u(this, Be).$destroy();
  }
}
xt = new WeakMap(), Be = new WeakMap();
let Sa;
typeof HTMLElement == "function" && (Sa = class extends HTMLElement {
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
          n !== "default" && (a.name = n), O(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, r = Jl(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), i.default = !0) : i[n] = e(n));
      for (const n of this.attributes) {
        const s = this.$$g_p(n.name);
        s in this.$$d || (this.$$d[s] = Dr(s, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Xl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = yl(() => {
        en(() => {
          var n;
          this.$$r = !0;
          for (const s of zr(this.$$c)) {
            if (!((n = this.$$p_d[s]) != null && n.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = Dr(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Dr(e, r, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [e]: this.$$d[e] }));
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
      (i) => this.$$p_d[i].attribute === e || !this.$$p_d[i].attribute && i.toLowerCase() === e
    ) || e;
  }
});
function Dr(t, e, i, r) {
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
function Jl(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), e;
}
function at(t, e, i, r, n, s) {
  let a = class extends Sa {
    constructor() {
      super(t, i, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return zr(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return zr(e).forEach((o) => {
    $r(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var f;
        l = Dr(o, l, e), this.$$d[o] = l;
        var d = this.$$c;
        if (d) {
          var c = (f = Kt(d, o)) == null ? void 0 : f.get;
          c ? d[o] = l : d.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    $r(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
function rn(t) {
  Me === null && Is(), Dt(() => {
    const e = di(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ca(t) {
  Me === null && Is(), rn(() => () => di(t));
}
const Zl = "5";
var _s;
typeof window < "u" && ((_s = window.__svelte ?? (window.__svelte = {})).v ?? (_s.v = /* @__PURE__ */ new Set())).add(Zl);
const ed = (t) => t;
function td(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function gs(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function id(t, { delay: e = 0, duration: i = 400, easing: r = ed } = {}) {
  const n = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: r,
    css: (s) => `opacity: ${s * n}`
  };
}
function rd(t, { delay: e = 0, duration: i = 400, easing: r = td, x: n = 0, y: s = 0, opacity: a = 0 } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, c = l * (1 - a), [f, p] = gs(n), [v, _] = gs(s);
  return {
    delay: e,
    duration: i,
    easing: r,
    css: (x, g) => `
			transform: ${d} translate(${(1 - x) * f}${p}, ${(1 - x) * v}${_});
			opacity: ${l - c * g}`
  };
}
var Si, Ci, Ti, Ei, Ii;
class Ta {
  constructor() {
    E(this, Si);
    E(this, Ci);
    E(this, Ti);
    E(this, Ei);
    E(this, Ii);
    S(this, Si, /* @__PURE__ */ R(!1)), S(this, Ci, /* @__PURE__ */ R(!1)), S(this, Ti, /* @__PURE__ */ R(!1)), S(this, Ei, /* @__PURE__ */ R(!1)), S(this, Ii, /* @__PURE__ */ R(!1));
  }
  get isOpen() {
    return h(u(this, Si));
  }
  set isOpen(e) {
    I(u(this, Si), e, !0);
  }
  get isMinimized() {
    return h(u(this, Ci));
  }
  set isMinimized(e) {
    I(u(this, Ci), e, !0);
  }
  get isLoading() {
    return h(u(this, Ti));
  }
  set isLoading(e) {
    I(u(this, Ti), e, !0);
  }
  get hasUnreadMessages() {
    return h(u(this, Ei));
  }
  set hasUnreadMessages(e) {
    I(u(this, Ei), e, !0);
  }
  get hasEngaged() {
    return h(u(this, Ii));
  }
  set hasEngaged(e) {
    I(u(this, Ii), e, !0);
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
function Ea() {
  return new Ta();
}
const zt = new Ta(), fe = {
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
}, Lt = {
  /** Maximum message length */
  MAX_LENGTH: 4e3,
  /** Minimum message length */
  MIN_LENGTH: 1,
  /** Maximum message queue size to prevent memory leaks */
  MAX_QUEUE_SIZE: 50
}, fs = {
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
var Ai, Mi, Li, Oi, Pi, Ri;
class Ia {
  constructor() {
    E(this, Ai);
    E(this, Mi);
    E(this, Li);
    E(this, Oi);
    E(this, Pi);
    E(this, Ri);
    S(this, Ai, /* @__PURE__ */ R(le([]))), S(this, Mi, /* @__PURE__ */ R(null)), S(this, Li, /* @__PURE__ */ R(!1)), S(this, Oi, /* @__PURE__ */ R(null)), S(this, Pi, /* @__PURE__ */ R(null)), this.streamingBuffer = "", this.streamingTimeout = null, S(this, Ri, /* @__PURE__ */ R(0));
  }
  get messages() {
    return h(u(this, Ai));
  }
  set messages(e) {
    I(u(this, Ai), e, !0);
  }
  get currentSession() {
    return h(u(this, Mi));
  }
  set currentSession(e) {
    I(u(this, Mi), e, !0);
  }
  get isTyping() {
    return h(u(this, Li));
  }
  set isTyping(e) {
    I(u(this, Li), e, !0);
  }
  get error() {
    return h(u(this, Oi));
  }
  set error(e) {
    I(u(this, Oi), e, !0);
  }
  get streamingMessageId() {
    return h(u(this, Pi));
  }
  set streamingMessageId(e) {
    I(u(this, Pi), e, !0);
  }
  get streamingUpdateSignal() {
    return h(u(this, Ri));
  }
  set streamingUpdateSignal(e) {
    I(u(this, Ri), e, !0);
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
        fe.STREAMING_BATCH_DELAY
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
Ai = new WeakMap(), Mi = new WeakMap(), Li = new WeakMap(), Oi = new WeakMap(), Pi = new WeakMap(), Ri = new WeakMap();
function Aa() {
  return new Ia();
}
const vt = new Ia(), hs = {
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
}, We = {
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
}, Ma = {
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
    return hs[t] || null;
  },
  /**
   * Convert property name to HTML attribute name
   */
  propertyToAttribute(t) {
    const i = Object.entries(hs).find(([, r]) => r === t);
    return i ? i[0] : null;
  }
}, nd = [
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
function La(t) {
  return nd.includes(t);
}
function $n(t) {
  return !t || typeof t != "string" ? !1 : /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t);
}
function Ji(t, e = "#6b46c1") {
  return $n(t) ? t : e;
}
function sd(t) {
  if (!$n(t)) return t;
  if (t.length === 4) {
    const e = t.slice(1);
    return "#" + e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
  }
  return t;
}
function ad(t) {
  const e = sd(t), i = parseInt(e.slice(1, 3), 16) / 255, r = parseInt(e.slice(3, 5), 16) / 255, n = parseInt(e.slice(5, 7), 16) / 255, s = Math.max(i, r, n), a = Math.min(i, r, n);
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
function od(t, e, i) {
  e /= 100, i /= 100;
  const r = e * Math.min(i, 1 - i), n = (s) => {
    const a = (s + t / 30) % 12, o = i - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return Math.round(255 * o).toString(16).padStart(2, "0");
  };
  return `#${n(0)}${n(8)}${n(4)}`.toUpperCase();
}
function re(t, e) {
  if (!$n(t)) return t;
  const i = ad(t), r = Math.max(0, Math.min(100, i.l + e));
  return od(i.h, i.s, r);
}
class ld {
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
function nn(t) {
  return new ld(t);
}
function un() {
  var t;
  try {
    return typeof process < "u" && ((t = process.env) == null ? void 0 : t.NODE_ENV) === "test" ? process.env.ENABLE_TEST_DEBUG === "true" : localStorage.getItem("ai-widget-debug") === "true" || window._aiWidgetDebug === !0 || !1;
  } catch {
    return !1;
  }
}
const F = {
  isDebugEnabled: un,
  log: (t, e, i) => {
    un() && (i !== void 0 ? console.log(`[${t}] ${e}:`, i) : console.log(`[${t}] ${e}`));
  },
  warn: (t, e, i) => {
    un() && (i !== void 0 ? console.warn(`[${t}] ${e}:`, i) : console.warn(`[${t}] ${e}`));
  },
  error: (t, e, i) => {
    i !== void 0 ? console.error(`[${t}] ${e}:`, i) : console.error(`[${t}] ${e}`);
  }
};
class Oa {
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
function Pa() {
  return new Oa();
}
const dd = new Oa();
function Zi() {
  return dd;
}
class cd {
  /**
   * Validate message content and length
   */
  static validate(e, i) {
    const r = i ?? Zi().getCurrent();
    if (F.log("MessageValidator", "validate() called", {
      correlationId: r,
      message: e,
      messageType: typeof e,
      messageLength: (e == null ? void 0 : e.length) || 0,
      isNullOrUndefined: e == null
    }), typeof e != "string") {
      const o = "Message is required and must be a string";
      return F.log("MessageValidator", "Validation failed - invalid type", { correlationId: r, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    if (e.length === 0) {
      const o = "Message is too short";
      return F.log("MessageValidator", "Validation failed - empty string", { correlationId: r, message: e, error: o }), {
        isValid: !1,
        error: o
      };
    }
    const n = e.trim();
    if (F.log("MessageValidator", "After trimming", {
      correlationId: r,
      original: e,
      trimmed: n,
      originalLength: e.length,
      trimmedLength: n.length,
      wasWhitespaceOnly: e.length > 0 && n.length === 0
    }), n.length < Lt.MIN_LENGTH) {
      const o = "Message is too short";
      return F.log("MessageValidator", "Validation failed - too short", {
        correlationId: r,
        trimmedLength: n.length,
        minLength: Lt.MIN_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    if (n.length > Lt.MAX_LENGTH) {
      const o = `Message exceeds maximum length of ${Lt.MAX_LENGTH} characters`;
      return F.log("MessageValidator", "Validation failed - too long", {
        correlationId: r,
        trimmedLength: n.length,
        maxLength: Lt.MAX_LENGTH,
        error: o
      }), {
        isValid: !1,
        error: o
      };
    }
    F.log("MessageValidator", "Starting HTML sanitization", {
      correlationId: r,
      inputContent: n,
      inputLength: n.length
    });
    const s = this.sanitizeHTML(n, r);
    F.log("MessageValidator", "HTML sanitization complete", {
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
    return F.log("MessageValidator", "Final validation result", { correlationId: r, result: a }), a;
  }
  /**
   * Basic HTML sanitization
   */
  static sanitizeHTML(e, i) {
    const r = i ?? Zi().getCurrent();
    F.log("MessageValidator", "sanitizeHTML() input", {
      correlationId: r,
      input: e,
      inputLength: e.length
    });
    let n = e, s = 0;
    const a = n;
    n = n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), n !== a && F.log("MessageValidator", `Step ${++s} - Removed script tags`, {
      correlationId: r,
      before: a,
      after: n,
      removed: a.length - n.length
    });
    const o = n;
    n = n.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href=""'), n !== o && F.log("MessageValidator", `Step ${++s} - Removed javascript: protocol`, {
      correlationId: r,
      before: o,
      after: n,
      removed: o.length - n.length
    });
    const l = n;
    n = n.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), n !== l && F.log("MessageValidator", `Step ${++s} - Removed event handlers:`, {
      correlationId: r,
      before: l,
      after: n,
      removed: l.length - n.length
    });
    const d = n;
    return n = n.replace(/src\s*=\s*["']data:[^"']*["']/gi, 'src=""'), n !== d && F.log("MessageValidator", `Step ${++s} - Removed data: URLs:`, {
      correlationId: r,
      before: d,
      after: n,
      removed: d.length - n.length
    }), F.log("MessageValidator", "sanitizeHTML() result", {
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
class Un {
  static validate(e, i) {
    const r = [];
    for (const n of e) {
      if (typeof n != "string") {
        F.warn(i, `quick-questions: item skipped (type: ${typeof n})`);
        continue;
      }
      if (n.trim().length === 0) {
        F.warn(i, "quick-questions: item skipped (empty or whitespace-only)");
        continue;
      }
      n.length > pi.MAX_LENGTH ? (F.warn(i, `quick-questions: item truncated to ${pi.MAX_LENGTH} chars`), r.push(n.slice(0, pi.MAX_LENGTH))) : r.push(n);
    }
    return r.length > pi.MAX_COUNT ? (F.warn(i, `quick-questions: array capped at ${pi.MAX_COUNT} items (${r.length} provided)`), r.slice(0, pi.MAX_COUNT)) : r;
  }
}
class Ra {
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
var qi, Ni, Di, zi, $i, Ui, Wi, ji, Fi, Hi, Bi, Vi, Gi;
class qa {
  constructor() {
    E(this, qi);
    E(this, Ni);
    E(this, Di);
    E(this, zi);
    E(this, $i);
    E(this, Ui);
    E(this, Wi);
    E(this, ji);
    E(this, Fi);
    E(this, Hi);
    E(this, Bi);
    E(this, Vi);
    E(this, Gi);
    S(this, qi, /* @__PURE__ */ R("")), S(this, Ni, /* @__PURE__ */ R(le(We.theme))), S(this, Di, /* @__PURE__ */ R(le(We.position))), S(this, zi, /* @__PURE__ */ R(le(We.title))), S(this, $i, /* @__PURE__ */ R(le(We.logoUrl))), S(this, Ui, /* @__PURE__ */ R(le(We.placeholder))), S(this, Wi, /* @__PURE__ */ R(le(We.accentColor))), S(this, ji, /* @__PURE__ */ R(le(We.avatarEmoji))), S(this, Fi, /* @__PURE__ */ R(le(We.companyName))), S(this, Hi, /* @__PURE__ */ R(le(We.initialMessage))), S(this, Bi, /* @__PURE__ */ R(le(We.quickQuestions))), S(this, Vi, /* @__PURE__ */ R(le(We.voiceInput))), S(this, Gi, /* @__PURE__ */ R("default"));
  }
  get clientId() {
    return h(u(this, qi));
  }
  set clientId(e) {
    I(u(this, qi), e, !0);
  }
  get theme() {
    return h(u(this, Ni));
  }
  set theme(e) {
    I(u(this, Ni), e, !0);
  }
  get position() {
    return h(u(this, Di));
  }
  set position(e) {
    I(u(this, Di), e, !0);
  }
  get title() {
    return h(u(this, zi));
  }
  set title(e) {
    I(u(this, zi), e, !0);
  }
  get logoUrl() {
    return h(u(this, $i));
  }
  set logoUrl(e) {
    I(u(this, $i), e, !0);
  }
  get placeholder() {
    return h(u(this, Ui));
  }
  set placeholder(e) {
    I(u(this, Ui), e, !0);
  }
  get accentColor() {
    return h(u(this, Wi));
  }
  set accentColor(e) {
    I(u(this, Wi), e, !0);
  }
  get avatarEmoji() {
    return h(u(this, ji));
  }
  set avatarEmoji(e) {
    I(u(this, ji), e, !0);
  }
  get companyName() {
    return h(u(this, Fi));
  }
  set companyName(e) {
    I(u(this, Fi), e, !0);
  }
  get initialMessage() {
    return h(u(this, Hi));
  }
  set initialMessage(e) {
    I(u(this, Hi), e, !0);
  }
  get quickQuestions() {
    return h(u(this, Bi));
  }
  set quickQuestions(e) {
    I(u(this, Bi), e, !0);
  }
  get voiceInput() {
    return h(u(this, Vi));
  }
  set voiceInput(e) {
    I(u(this, Vi), e, !0);
  }
  get titleSource() {
    return h(u(this, Gi));
  }
  set titleSource(e) {
    I(u(this, Gi), e, !0);
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
      const s = Ma.attributeToProperty(n);
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
            i.accentColor = Ji(a, this.accentColor);
            break;
          case "theme":
            La(a) && (i.theme = a);
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
              Array.isArray(o) && (i.quickQuestions = Un.validate(o, "ConfigStore"));
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
    const e = {};
    return this.accentColor && (e["--widget-primary"] = this.accentColor, e["--widget-primary-hover"] = re(this.accentColor, -20), e["--widget-primary-light"] = re(this.accentColor, 20), e["--widget-primary-dark"] = re(this.accentColor, -30), e["--widget-gradient"] = `linear-gradient(135deg, ${this.accentColor} 0%, ${re(this.accentColor, 20)} 100%)`, e["--widget-gradient-hover"] = `linear-gradient(135deg, ${re(this.accentColor, -20)} 0%, ${this.accentColor} 100%)`), e;
  }
  applyTheme(e) {
    e.setAttribute("data-theme", this.theme);
    const i = this.cssVariables;
    for (const [r, n] of Object.entries(i))
      e.style.setProperty(r, n);
  }
  // Remove duplicate adjustColor method - using shared utility from color.ts
}
qi = new WeakMap(), Ni = new WeakMap(), Di = new WeakMap(), zi = new WeakMap(), $i = new WeakMap(), Ui = new WeakMap(), Wi = new WeakMap(), ji = new WeakMap(), Fi = new WeakMap(), Hi = new WeakMap(), Bi = new WeakMap(), Vi = new WeakMap(), Gi = new WeakMap();
function Na() {
  return new qa();
}
const Le = new qa(), Da = "data:image/webp;base64,UklGRugJAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSFACAAABkEXbtik59777XleN2LZt27Zt27ZtW99tuzuF2LbtpKpGp3BivHNujIiYAPZ3d2OLGUu7p5aXUmc/AMCFdkJWtWzwQVcXLqdUZ+GjtzPIqSt84jAp8UWfsppLaemnrJUS6/spA5iUM9/72O2McmKdnB9ydmCS5h2vv3e1oyIrxjKdBjiZnklcDQOIFjLTogFiValFyU6Eyk4Jll6Q7ESI9EJlpwTLgxu+pJemBQDEGDUvwxc0KqQYig/fGmf+TJPJZIqP8LkP8MQ/LHavyfz5O4eUSUSFoWNcAqB0WnsmooDXMANiczWOzjjRDqhf9RHI1OWA3T1eoFLGAH7PIAVTzQQCwFYNUaJDQOLBRGj4CCCyJ5okl6iwGrG0ASqdpZAoW8iAGUgSHaMj0oAj81M6LifFUc5Jx8tcOJoAnfa8CFRV1CXElkNVVX2lHuYTGnKQEFd8SKjviJQ6qngGSD5WVDcZrwLRZ9PpZSqQPVgnmj9de4Q+kp2gy0fVySm6vL+VTkrv1C8/p2WXyEKXn074erpWKfpg1ZxUJZRiOhWTifKMEnphSlvrC9srOyUOm+2VtaVgOvbKnjNHcxcdjto5c+UwMt3XBzrtORnKRpTkxVHIIbsMj+i4nhKHYS8d/ioOvpSO2RwHq+6iwlmWITUeoCJQw8LaEvG6OkOrBdCwTeBh+e5TcC4Dw9zcge9BeYaat3iE7W51hr3ccVym4gx/qqUv8TyanIRRqBRdcQ3Hxbm5OCOSp2owaX2wvv2Xja6ahDNSuRCKjoXg7L//f54CVlA4IHIHAACwKACdASqAAIAAPlEkkEWjoiGTST0YOAUEoA1fIQfqvZTa57fyGW9PeP90OkinbzF+UP87/Q/yk+AH9V9mfmC/p5/hPzA9zP1a+YD+Wf13/Xf6L2M/2c9yPoAfrV1iXoMfwf+x+mH+2HwSftD+0/wFfrd/7+sAs5dANxsoF2Qp/XuKnjE8Gvwf1Gf6x/wvUPz4PRP7B/AP/Mf6v/0OuF+5Hsi/ryxHk0B48YBTRtdB5WCf3dKxN+Z3e0Bap21U4g0QNgmgt9PszIvWmrmvDr/zjzLxO1+KHiMxSwKbP/CmfQapmXy8GPwlWwZzWyDJKSzuSxG3oImZ+aAV5K6ukJTpOOPfUdUnNUrs2CTonYo1/mdtQnYigkahltolBX+gz3dswlpDn7EPz3ifxMbj6L/yfEgMvWzgisK1N1dy/5lC7Zwr0NTM81DtakR50uAAAP7+pTZc//8cSrMe16Db1wMrZOlPVcrZyaAcPVhS95237FTuuF4m977CEVAwBMUJwFRGDoEKQipeVQdPqKdnp9YwI89N2eTzoo27BX3l7acdt+NGQnnZqQnzMeC4MS7ryzaHFab9GApUauHd9b9i37aLi79SW9CeZWyZGfdtJaSaE1b467r48k/kEszB3I0cGm0JQq+Hlbn+SCl5MG63ApAqG8Lud8FVHMrY5xH0PC4ah5djicc1c/XvyZJAVH+KbeG19UFXrf8X1ffTOuOjvVCn8bFf8T5gUAZ5rOo4daVYTbhMt1efaL2SetLP+XRxxDPNYwYHbD7K5eOKdAFOQ+mG4MKDXvQJBAC50HrqnKo9O405Q8Z8O/+ZRXeFiV6vKdDVGdVUluUVIq3t7wryRVmKAwiDOc1qi9TnXHTUWfXCeCFNC7Y5EPmc7li11DywVw84gE+NnXo/p8YDJM4SBeFEznUonSd2j9ie/azILWu7JVZfb+zlEWKboli0MsIBUYOS3KQsZ7779L9ogSjLn4n49yfimFO1AYn3qOz+HlTle3rPzLols3XLqkvp5yFLLr31gT+lHXXiEAXgAFn2JWJepcnEq0CfPs9nhwmhMoh4Am5PzzVXbe1RK/RYnKIoEz5YEv3yEl7PEw3+g3+Nvdx7dXV+61BaRRFYdprsKFb2Q9og3it+vCd4r4npE3l0a6SuBklxIiRQ7McizSDzhUgm2joVcDjjjFjF3Rp+1asiMHqJ6Tlz46aRB+F/FvPJq24HNEM+vKuhmpOdKnC3EWm8UT334DI8ItBX/MMxgirhjjGH2XxvjVEGwOymA93sFadiIimsN+u6QrXwl12/vMeuYr33Tr8mJEdp6tRVYZFXxEfc41n0meSi2ibjmu0wBtu1iqjnRan5xKMGDonKLqcAFzGILwkdHc3/Yewg6OY4zVMpmIvq2FIVieitjQbY8LW9nsKes5pOGr7tQQ6MqWAVW2eBIPJl8PmShHRgYzrjD9eWeQ6uINH+sp1XeWhsy1c64ummq+LnJCaV7HoqnQKiRjS1LFyxFPyvzKOpb03K1Z/Fj8v8Z66/SwiLAt+EtdhfrgPWxb69TZSFv+srYe/kve4aU6WzJGW7qUid4BiKSiHlvbo3MJFq2c/5PYveMTFX8qUtyBRDX5pevb//fG/6xm2ymF0XRY4/lyUprmi0po9xoz5IzHz368qsmPl+g3lCG29YWnJGFX/HviGuKm5o1ZdOTiPu/V6G20ih+v8fMnUDhJ6T5D530RgLx8n6Ya4xMDvuVlf4/6tmAJne81CE+mV00oIXwEoPYBt8sEvGb6bkPBm+er+sYRy0WDSKdt7Jb/wxos7jYmqiHy96cp6mmRa7nARocgS+eOzmcRhceaUf00neRyBWf2pvNc/VOnUir2hvXD1I8sZ9WsZ2cko1O1qM9SQX5LmBk+VE6lDUfMB8NuaZrMFye30QJXYrRnMDhPHRQMYJeP39qXPPhTCbeK56GkFc/vBXz4/ByRaOYorLlSw62qs4CF+GguMponNWuIIOuxmMgkZXOg9KeKzHzK+QfzxtQDPnlI0vTocV6YvIQoqxevmEdQ+ZJ/tYfBkXGNEuH12Wyv/+Dmmj/vJ6o3vP7gPfWbMvDH445D3Nw/lCYSNTKJ7ZJxwVDNbcLSKYgGgNigtMh/erRSzs7AY7IJ5R2y/i0uN/YcWF+SdBga8mdvUVlPg8adxHMXRo6hcgg3SL97JJCLeOmQGgt0Pj9EFVKXA/FZH0lQ7WuU1WnnwhnBX97rNb+77R/HstinK6Vy4/ZE3F/r3s6qEPQsJoEqArQO1BLIKS6TucRxCwFIP/cUvW49Onm283s/qdn4YhPbidHpkFW1rd6nkG+MwD1qe9h80gBM0MJx0cR5e7G2dVtUNurZqIXpXx2jABNlADHjbqBYcAGR93bylmP89clRe0pLc78uD/r4yf8vygxwrqooTDCnFh045zBwvryQ7xk1M3D7sYJAHyU6H74HI4eL/iITAjvoT8f+6klN4/114TfGrAYuX+b89XZEdxQSqx+bsya/c9Udon6nBJcRIqCfYPh7JysWSPhAAAAAAAAAAA", ud = Da, gd = Da;
var fd = /* @__PURE__ */ H('<img alt="Chat" class="button-logo svelte-bkcus6"/>'), hd = /* @__PURE__ */ zn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bkcus6"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-bkcus6"></path></svg>'), pd = /* @__PURE__ */ H('<span class="unread-indicator svelte-bkcus6"></span>'), vd = /* @__PURE__ */ H("<button><!> <!></button>");
const md = {
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
function za(t, e) {
  Qe(e, !0), st(t, md);
  let i = N(e, "onclick", 7), r = N(e, "ui", 7, zt), n = N(e, "buttonRef", 15, null);
  const s = /* @__PURE__ */ ie(() => r().isOpen), a = /* @__PURE__ */ ie(() => r().hasUnreadMessages);
  function o() {
    var g;
    (g = i()) == null || g();
  }
  var l = {
    get onclick() {
      return i();
    },
    set onclick(g) {
      i(g), L();
    },
    get ui() {
      return r();
    },
    set ui(g = zt) {
      r(g), L();
    },
    get buttonRef() {
      return n();
    },
    set buttonRef(g = null) {
      n(g), L();
    }
  }, d = vd();
  let c;
  d.__click = o;
  var f = X(d);
  {
    var p = (g) => {
      var b = fd();
      he(() => ce(b, "src", ud)), O(g, b);
    }, v = (g) => {
      var b = hd();
      O(g, b);
    };
    ee(f, (g) => {
      h(s) ? g(v, !1) : g(p);
    });
  }
  var _ = Z(f, 2);
  {
    var x = (g) => {
      var b = pd();
      O(g, b);
    };
    ee(_, (g) => {
      h(a) && !h(s) && g(x);
    });
  }
  return Y(d), Ar(d, (g) => n(g), () => n()), he(() => {
    c = ci(d, 1, "floating-button svelte-bkcus6", null, c, { open: h(s) }), ce(d, "aria-label", h(s) ? "Close chat" : "Open chat");
  }), O(t, d), Xe(l);
}
Wt(["click"]);
at(za, { onclick: {}, ui: {}, buttonRef: {} }, [], [], !0);
const wd = 0.2, bd = 0.1;
function ps(t, e) {
  return t + e * wd;
}
function yd(t) {
  return Math.max(0, t - bd);
}
var xd = /* @__PURE__ */ H('<button class="question-chip svelte-otpvm8" type="button"> </button>'), _d = /* @__PURE__ */ H('<div class="chip-scroll svelte-otpvm8"></div>'), kd = /* @__PURE__ */ H('<button class="question-chip svelte-otpvm8" type="button"> </button>'), Sd = /* @__PURE__ */ H('<div role="group" aria-label="Suggested questions"><div class="section-label svelte-otpvm8">Suggested questions</div> <!></div>');
const Cd = {
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
       Theme-aware via --widget-background (dark in dark theme — see dark block). */background:color-mix(in srgb, var(--widget-background) 85%, transparent);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);}

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
     DARK frost. The default dark label (--widget-primary-light #3b82f6, L=0.236)
     only clears 3.10:1 over the worst-case (light backdrop, dark frost L≈0.042)
     and fails AA. #93c5fd (a lighter brand-blue tint) clears 6.33:1 against that
     worst case while staying on-brand. Resting bar in light theme keeps the
     #1e5ba8 label (the light-frost path). */[data-theme="dark"] .quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8) {color:#93c5fd;border-color:#93c5fd;}[data-theme="dark"] .quick-questions.compact.svelte-otpvm8 .question-chip:where(.svelte-otpvm8):hover:not(:disabled) {color:var(--widget-text-inverse);}`
};
function Wn(t, e) {
  Qe(e, !0), st(t, Cd);
  const i = [
    "What's Leo's professional background?",
    "What technologies does Leo work with?",
    "How can I get in touch with Leo?"
  ];
  let r = N(e, "questions", 7, i), n = N(e, "onsend", 7), s = N(e, "disabled", 7, !1), a = N(e, "animationDelayBase", 7, 2.8), o = N(e, "compact", 7, !1);
  function l(g) {
    var b;
    s() || (b = n()) == null || b(g);
  }
  var d = {
    get questions() {
      return r();
    },
    set questions(g = i) {
      r(g), L();
    },
    get onsend() {
      return n();
    },
    set onsend(g) {
      n(g), L();
    },
    get disabled() {
      return s();
    },
    set disabled(g = !1) {
      s(g), L();
    },
    get animationDelayBase() {
      return a();
    },
    set animationDelayBase(g = 2.8) {
      a(g), L();
    },
    get compact() {
      return o();
    },
    set compact(g = !1) {
      o(g), L();
    }
  }, c = Sd();
  let f;
  var p = X(c), v = Z(p, 2);
  {
    var _ = (g) => {
      var b = _d();
      Sn(b, 22, r, (P) => P, (P, w, m) => {
        var T = xd();
        T.__click = () => l(w);
        var M = X(T, !0);
        Y(T), he(
          (q) => {
            T.disabled = s(), ce(T, "title", w), Nr(T, `animation-delay: ${q ?? ""}s`), ce(T, "aria-disabled", s() ? "true" : "false"), Tt(M, w);
          },
          [() => ps(a(), h(m))]
        ), O(P, T);
      }), Y(b), O(g, b);
    }, x = (g) => {
      var b = ir(), P = Ye(b);
      Sn(P, 18, r, (w) => w, (w, m, T) => {
        var M = kd();
        M.__click = () => l(m);
        var q = X(M, !0);
        Y(M), he(
          (V) => {
            M.disabled = s(), ce(M, "title", m), Nr(M, `animation-delay: ${V ?? ""}s`), ce(M, "aria-disabled", s() ? "true" : "false"), Tt(q, m);
          },
          [() => ps(a(), h(T))]
        ), O(w, M);
      }), O(g, b);
    };
    ee(v, (g) => {
      o() ? g(_) : g(x, !1);
    });
  }
  return Y(c), he(
    (g) => {
      f = ci(c, 1, "quick-questions svelte-otpvm8", null, f, { compact: o() }), Nr(p, `animation-delay: ${g ?? ""}s`);
    },
    [() => yd(a())]
  ), O(t, c), Xe(d);
}
Wt(["click"]);
at(
  Wn,
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
function Td(t) {
  var i;
  const e = t.getValue().trim();
  return e ? (t.setValue(""), (i = t.onsubmit) == null || i.call(t, e), !0) : !1;
}
function Ed(t, e) {
  return t === "Enter" && !e;
}
var Id = /* @__PURE__ */ H('<div><div class="resting-bar svelte-6j7vcd" role="search" aria-label="Chat with assistant"><input type="text" class="resting-input svelte-6j7vcd" placeholder="Ask a question…" aria-label="Ask a question"/> <button class="resting-send svelte-6j7vcd" aria-label="Send message"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div> <!></div>');
const Ad = {
  hash: "svelte-6j7vcd",
  code: `
  /*
   * Resting bar: fixed, bottom-center, slim footprint. Always centered
   * regardless of the \`position\` attribute (which only seeds the open
   * animation's target corner).
   */.resting-bar-wrapper.svelte-6j7vcd {position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:var(--widget-z-base, 9000);display:flex;flex-direction:column;align-items:center;gap:12px;

    /* Match the desktop chat window width (400px) so the pill's footprint lines
       up with the window's, letting the window unfold upward out of it. */width:min(400px, calc(100vw - 2rem));font-family:var(--widget-font-family);}

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
  }.resting-bar.svelte-6j7vcd {display:flex;align-items:center;gap:0;

    /* iOS-style frosted glass — UNIFIED with the compact quick-question chips
       (QuickQuestions.svelte): same 85% color-mix frost + blur so bar and chips
       render as one consistent frosted surface in light AND dark themes. 85%
       (was --widget-glass ~0.98) keeps the surface translucent/frosted while
       guaranteeing the bar's input text (--widget-text #0f172a) and placeholder
       (--widget-text-secondary) clear WCAG AA over any backdrop: input ≥12.6:1,
       placeholder ≥5.35:1 even over the worst-case dark backdrop. Theme-aware
       via --widget-background (dark in dark theme → dark frost). */background:color-mix(in srgb, var(--widget-background) 85%, transparent);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--widget-border-light);border-radius:9999px; /* Fully rounded pill */box-shadow:0 8px 32px rgba(0, 0, 0, 0.12);overflow:hidden;width:100%;height:48px;}.resting-input.svelte-6j7vcd {flex:1;min-width:0;height:100%;padding:0 1rem 0 1.25rem;border:none;background:transparent;outline:none;font-size:0.9375rem;
    /* --widget-text-primary is not a defined token; use --widget-text (the
       canonical high-contrast body color, #0f172a light / #f8fafc dark) so the
       typed text contrast over the 85% frost is guaranteed, not inherited. */color:var(--widget-text);font-family:var(--widget-font-family);caret-color:var(--widget-primary);}.resting-input.svelte-6j7vcd::placeholder {color:var(--widget-text-secondary, #718096);}.resting-send.svelte-6j7vcd {flex-shrink:0;
    /* WCAG 2.5.5: 44x44 minimum touch target. margin 2px keeps the 48px pill. */width:44px;height:44px;margin:2px;border:none;border-radius:9999px;background:var(--widget-primary);color:var(--widget-text-inverse, #fff);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 150ms ease, opacity 150ms ease;}.resting-send.svelte-6j7vcd:hover:not(:disabled) {background:var(--widget-primary-hover);}.resting-send.svelte-6j7vcd:disabled {opacity:0.4;cursor:default;}.resting-send.svelte-6j7vcd:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .resting-bar.svelte-6j7vcd {
    /* --widget-background resolves dark here, so the same 85% color-mix frost
       (inherited from .resting-bar above) produces a dark frost — matching the
       compact chips. Keep the blur; just firm up the border for contrast. */border-color:var(--widget-border);}`
};
function $a(t, e) {
  Qe(e, !0), st(t, Ad);
  let i = N(e, "config", 7, Le), r = N(e, "position", 7, "bottom-right"), n = N(e, "onsubmit", 7), s = N(e, "onchip", 7), a = N(e, "translating", 7, !1), o = N(e, "onanimationend", 7), l = /* @__PURE__ */ R("");
  function d() {
    Td({
      getValue: () => h(l),
      setValue: (m) => {
        I(l, m, !0);
      },
      onsubmit: n()
    });
  }
  function c(m) {
    Ed(m.key, m.shiftKey) && (m.preventDefault(), d());
  }
  const f = /* @__PURE__ */ ie(() => {
    var m;
    return (m = i()) == null ? void 0 : m.quickQuestions;
  });
  var p = {
    get config() {
      return i();
    },
    set config(m = Le) {
      i(m), L();
    },
    get position() {
      return r();
    },
    set position(m = "bottom-right") {
      r(m), L();
    },
    get onsubmit() {
      return n();
    },
    set onsubmit(m) {
      n(m), L();
    },
    get onchip() {
      return s();
    },
    set onchip(m) {
      s(m), L();
    },
    get translating() {
      return a();
    },
    set translating(m = !1) {
      a(m), L();
    },
    get onanimationend() {
      return o();
    },
    set onanimationend(m) {
      o(m), L();
    }
  }, v = Id();
  let _;
  var x = X(v), g = X(x);
  Vl(g), g.__keydown = c;
  var b = Z(g, 2);
  b.__click = d, Y(x);
  var P = Z(x, 2);
  {
    var w = (m) => {
      Wn(m, {
        get questions() {
          return h(f);
        },
        get onsend() {
          return s();
        },
        animationDelayBase: 0.3,
        compact: !0
      });
    };
    ee(P, (m) => {
      h(f) && h(f).length > 0 && m(w);
    });
  }
  return Y(v), he(
    (m) => {
      _ = ci(v, 1, "resting-bar-wrapper svelte-6j7vcd", null, _, { translating: a() }), ce(v, "data-position", r()), b.disabled = m;
    },
    [() => !h(l).trim()]
  ), ya("animationend", v, function(...m) {
    var T;
    (T = o()) == null || T.apply(this, m);
  }), ka(g, () => h(l), (m) => I(l, m)), O(t, v), Xe(p);
}
Wt(["keydown", "click"]);
at(
  $a,
  {
    config: {},
    position: {},
    onsubmit: {},
    onchip: {},
    translating: {},
    onanimationend: {}
  },
  [],
  [],
  !0
);
class $e extends Error {
  constructor(e, i, r = !1) {
    super(e), this.name = "ChatWidgetError", this.context = i, this.timestamp = /* @__PURE__ */ new Date(), this.isRetryable = r, Error.captureStackTrace && Error.captureStackTrace(this, $e);
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
class mi extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, statusCode: i, endpoint: r }, !0), this.name = "NetworkError", this.statusCode = i, this.endpoint = r;
  }
}
class Ua extends $e {
  constructor(e, i, r, n, s) {
    super(e, { ...s, wsUrl: i, closeCode: r, closeReason: n }, !0), this.name = "WebSocketError", this.wsUrl = i, this.closeCode = r, this.closeReason = n;
  }
}
class pr extends $e {
  constructor(e, i, r, n, s) {
    super(e, { ...s, field: i, value: r, expectedType: n }, !1), this.name = "ValidationError", this.field = i, this.value = r, this.expectedType = n;
  }
}
class Wa extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, configKey: i, configValue: r }, !1), this.name = "ConfigurationError", this.configKey = i, this.configValue = r;
  }
}
class ja extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, clientId: i, statusCode: r }, !1), this.name = "AuthenticationError", this.clientId = i, this.statusCode = r;
  }
}
class wi extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, retryAfter: i, limit: r }, !0), this.name = "RateLimitError", this.retryAfter = i, this.limit = r;
  }
}
class Fa extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, storageType: i, operation: r }, !0), this.name = "StorageError", this.storageType = i, this.operation = r;
  }
}
class Ha extends $e {
  constructor(e, i, r, n) {
    super(e, { ...n, timeout: i, operation: r }, !0), this.name = "TimeoutError", this.timeout = i, this.operation = r;
  }
}
function vs(t) {
  return t instanceof $e ? t.isRetryable : !!(t instanceof TypeError && t.message.includes("fetch"));
}
function Md(t) {
  return t instanceof $e ? {
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
function Ld(t) {
  return t instanceof mi ? t.statusCode === 404 ? "Service temporarily unavailable. Please try again later." : t.statusCode === 429 || t instanceof wi ? "Too many requests. Please wait a moment and try again." : t.statusCode && t.statusCode >= 500 ? "Server error. Please try again in a few moments." : t.statusCode && (t.statusCode === 400 || t.statusCode === 401 || t.statusCode === 403) ? t.message : "Unable to connect to the server. Please check your internet connection." : t instanceof Ua ? "Connection lost. Attempting to reconnect..." : t instanceof ja ? "Access denied. Please check your configuration." : t instanceof pr ? t.message : t instanceof Wa ? "Widget configuration error. Please contact support." : t instanceof Ha ? "Request timed out. Please try again." : t instanceof Fa ? "Unable to save data. Please check your browser settings." : "Something went wrong. Please try again.";
}
class vr {
  /**
   * Process and categorize errors using custom error classes
   */
  static handle(e, i) {
    const r = Md(e);
    let n;
    return e instanceof mi ? n = "NETWORK_ERROR" : e instanceof Ua ? n = "WEBSOCKET_ERROR" : e instanceof pr ? n = "VALIDATION_ERROR" : e instanceof Wa ? n = "CONFIGURATION_ERROR" : e instanceof ja ? n = "AUTHENTICATION_ERROR" : e instanceof wi ? n = "RATE_LIMIT_ERROR" : e instanceof Fa ? n = "STORAGE_ERROR" : e instanceof Ha ? n = "TIMEOUT_ERROR" : e instanceof $e ? n = "WIDGET_ERROR" : n = "UNKNOWN_ERROR", {
      message: Ld(e),
      code: n,
      isUserFacing: !0,
      shouldRetry: vs(e),
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
    return e && typeof e == "object" && "shouldRetry" in e ? e.shouldRetry : vs(e);
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
const Od = "https://ai-gateway-service-staging-639717727892.us-east4.run.app";
class Tn {
  // Production URL configured via VITE_API_BASE_URL environment variable
  // Falls back to DEFAULT_GATEWAY_URL if not set
  /**
   * Resolve API and WebSocket URLs based on client ID and environment
   */
  static resolveUrls(e, i = {}) {
    const r = Ra.validate(e);
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
    const i = Od, r = this.isLocalhostUrl(i) ? i : this.ensureHttps(i);
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
class Ba {
  constructor(e) {
    try {
      const i = window, r = i.AIChat || i.ChatWidget || {}, n = e ? this.parseElementAttributes(e) : {}, s = {
        ...We,
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
      const a = Ra.validate(s.clientId);
      if (!a.isValid)
        throw new Error(`Invalid client ID: ${a.error}`);
      const o = Tn.resolveUrls(a.sanitizedValue);
      this.config = {
        ...s,
        clientId: a.sanitizedValue,
        ...o
      };
    } catch (i) {
      const r = vr.handle(i, {
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
      const s = Ma.attributeToProperty(n);
      if (!s) continue;
      const a = e.getAttribute(n);
      if (a)
        switch (s) {
          case "clientId":
          case "title":
          case "logoUrl":
          case "placeholder":
          case "accentColor":
          case "avatarEmoji":
            i[s] = a;
            break;
          case "theme":
            La(a) && (i.theme = a);
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
const er = /* @__PURE__ */ new Map();
let xr = !1;
function Pd() {
  try {
    const t = "__storage_test__";
    return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
}
xr = !Pd();
function Rd(t) {
  try {
    return xr ? er.get(t) ?? null : localStorage.getItem(t);
  } catch {
    return er.get(t) ?? null;
  }
}
function qd(t, e) {
  try {
    return xr ? (er.set(t, e), !0) : (localStorage.setItem(t, e), !0);
  } catch {
    return er.set(t, e), xr = !0, !1;
  }
}
function Nd(t) {
  try {
    if (xr) {
      er.delete(t);
      return;
    }
    localStorage.removeItem(t);
  } catch {
    er.delete(t);
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
    var i;
    let e = this.getItem(tt.VISITOR_ID_KEY);
    return e || (e = this.generateVisitorId(), this.setItem(tt.VISITOR_ID_KEY, e), (i = window.AIChat) != null && i.debug && F.log("ChatWidget", "Created new visitor", e)), e;
  }
  /**
   * Internal storage access methods that use adapter if available
   */
  getItem(e) {
    return this.storageAdapter ? this.storageAdapter.getItem(e) : Rd(e);
  }
  setItem(e, i) {
    this.storageAdapter ? this.storageAdapter.setItem(e, i) : qd(e, i);
  }
  removeItem(e) {
    this.storageAdapter ? this.storageAdapter.removeItem(e) : Nd(e);
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
      tt.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  getSessionHistory() {
    const e = this.getItem(tt.SESSION_HISTORY_KEY);
    return e ? JSON.parse(e) : [];
  }
  getLastActiveSession() {
    const i = this.getSessionHistory().filter(
      (r) => r.active && Date.now() - r.timestamp < fe.SESSION_TIMEOUT
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
      tt.SESSION_HISTORY_KEY,
      JSON.stringify(r)
    );
  }
  /**
   * Clear visitor data for GDPR compliance
   */
  clearVisitorData() {
    this.removeItem(tt.VISITOR_ID_KEY), this.removeItem(tt.SESSION_HISTORY_KEY), this.visitorId = this.generateVisitorId();
  }
};
tt.VISITOR_ID_KEY = fs.VISITOR_ID, tt.SESSION_HISTORY_KEY = fs.SESSIONS;
let Hr = tt;
class ur {
  /**
   * Get API endpoint URL with base path resolved
   */
  static getApiUrl(e, i) {
    const { apiUrl: r } = Tn.resolveUrls(i.clientId, i.options);
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
    const { wsUrl: i } = Tn.resolveUrls(e.clientId, e.options), r = new URLSearchParams({
      session_id: e.sessionId
    });
    return e.visitorId && r.append("visitor_id", e.visitorId), `${i}?${r}`;
  }
}
var ae = /* @__PURE__ */ ((t) => (t.DISCONNECTED = "disconnected", t.CONNECTING = "connecting", t.CONNECTED = "connected", t.ERROR = "error", t))(ae || {});
function Va(t) {
  return t === "connected" || t === "connecting";
}
class Ga {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, i, r = Zi()) {
    this.ws = null, this.sessionId = null, this.state = "disconnected", this.messageQueue = [], this.reconnectAttempts = 0, this.maxReconnectAttempts = fe.MAX_RECONNECT_ATTEMPTS, this.reconnectDelay = fe.RECONNECT_DELAY, this.heartbeatInterval = null, this.listeners = /* @__PURE__ */ new Map(), this.abortController = null, this.cleanupFunctions = [], this.visibilityChangeHandler = null, this.pendingPongTimeout = null, this.config = e, this.visitor = i, this.debugLogger = nn(e.getAll()), this.correlationService = r, this.setupVisibilityChangeListener();
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
        const i = ur.getWebSocketUrl({
          clientId: this.config.clientId,
          sessionId: e,
          visitorId: this.visitor.getVisitorId()
        });
        this.ws = new WebSocket(i), this.setupEventHandlers();
      } catch (i) {
        const r = vr.handle(i, {
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
        const f = JSON.parse(e.data);
        this.debugLogger.log("WebSocketManager", "Parsed message", {
          message: f,
          messageType: f.type,
          content: (n = f.data) == null ? void 0 : n.content,
          hasContent: !!((s = f.data) != null && s.content),
          contentLength: ((o = (a = f.data) == null ? void 0 : a.content) == null ? void 0 : o.length) || 0,
          hasError: f.type === "error",
          metadata: (l = f.data) == null ? void 0 : l.metadata
        }), this.debugLogger.log("WebSocketManager", "Emitting to listeners", {
          listenerCount: ((d = this.listeners.get("message")) == null ? void 0 : d.size) || 0,
          hasMessageListeners: this.listeners.has("message"),
          allListenerTypes: Array.from(this.listeners.keys())
        }), this.emit("message", f), this.debugLogger.log("WebSocketManager", "Message emission completed successfully");
      } catch (f) {
        this.debugLogger.error("WebSocketManager", "Parse error", {
          error: f instanceof Error ? f.message : String(f),
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
    }, fe.VISIBILITY_PING_TIMEOUT);
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
      }), this.messageQueue.length >= Lt.MAX_QUEUE_SIZE) {
        this.debugLogger.warn("WebSocketManager", "Message queue full", {
          queueSize: this.messageQueue.length,
          maxSize: Lt.MAX_QUEUE_SIZE
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
    const e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), i = e ? fe.MOBILE_HEARTBEAT_INTERVAL : fe.HEARTBEAT_INTERVAL;
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
var Dd = /* @__PURE__ */ H('<button class="close-button svelte-g5m62x" aria-label="Close chat" type="button"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svelte-g5m62x"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" class="svelte-g5m62x"></path></svg></button>'), zd = /* @__PURE__ */ H('<header class="chat-header svelte-g5m62x"><div class="header-content svelte-g5m62x"><div role="status"></div> <h2 class="header-title svelte-g5m62x"> </h2></div> <!></header>');
const $d = {
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
function jn(t, e) {
  Qe(e, !0), st(t, $d);
  let i = N(e, "onclose", 7), r = N(e, "connectionState", 23, () => ae.DISCONNECTED), n = N(e, "connectionFailed", 7, !1), s = N(e, "showCloseButton", 7, !0), a = N(e, "ui", 7, zt), o = N(e, "config", 7, Le);
  const l = /* @__PURE__ */ ie(() => {
    if (n()) return "var(--widget-error)";
    switch (r()) {
      case ae.CONNECTED:
        return "var(--widget-success)";
      case ae.CONNECTING:
        return "var(--widget-warning, #ca8a04)";
      case /* Darker yellow for WCAG AA */
      ae.ERROR:
        return "var(--widget-error)";
      default:
        return "var(--widget-text-secondary)";
    }
  }), d = /* @__PURE__ */ ie(() => {
    if (n()) return "Connection lost";
    switch (r()) {
      case ae.CONNECTED:
        return "Connected";
      case ae.CONNECTING:
        return "Connecting";
      case ae.ERROR:
        return "Connection error";
      case ae.DISCONNECTED:
        return "Disconnected";
      default:
        return "";
    }
  }), c = /* @__PURE__ */ ie(() => r() === ae.CONNECTING ? "pulse-slow" : r() === ae.ERROR ? "blink-slow" : "");
  function f() {
    var m;
    a().close(), (m = i()) == null || m();
  }
  var p = {
    get onclose() {
      return i();
    },
    set onclose(m) {
      i(m), L();
    },
    get connectionState() {
      return r();
    },
    set connectionState(m = ae.DISCONNECTED) {
      r(m), L();
    },
    get connectionFailed() {
      return n();
    },
    set connectionFailed(m = !1) {
      n(m), L();
    },
    get showCloseButton() {
      return s();
    },
    set showCloseButton(m = !0) {
      s(m), L();
    },
    get ui() {
      return a();
    },
    set ui(m = zt) {
      a(m), L();
    },
    get config() {
      return o();
    },
    set config(m = Le) {
      o(m), L();
    }
  }, v = zd(), _ = X(v), x = X(_), g = Z(x, 2), b = X(g, !0);
  Y(g), Y(_);
  var P = Z(_, 2);
  {
    var w = (m) => {
      var T = Dd();
      T.__click = f, O(m, T);
    };
    ee(P, (m) => {
      s() && m(w);
    });
  }
  return Y(v), he(() => {
    ci(x, 1, `status-dot ${h(c) ?? ""}`, "svelte-g5m62x"), Nr(x, `--status-color: ${h(l) ?? ""}`), ce(x, "aria-label", h(d)), ce(x, "title", h(d)), Tt(b, o().title);
  }), O(t, v), Xe(p);
}
Wt(["click"]);
at(
  jn,
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
let or = null;
function Ud() {
  return or || (or = Promise.all([import("./assistant-widget-marked.esm-BBzvOr5D.js"), import("./assistant-widget-purify.es-BpFm6ZGf.js")]).then(([t, e]) => {
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
    throw or = null, t;
  }), or);
}
function Wd(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
async function jd(t) {
  if (!t) return "";
  let e, i;
  try {
    ({ marked: e, DOMPurify: i } = await Ud());
  } catch {
    return Wd(t);
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
var Fd = /* @__PURE__ */ H('<div class="message-content markdown-body svelte-1uqoiy7"><!></div>'), Hd = /* @__PURE__ */ H('<span class="message-content"> </span>'), Bd = /* @__PURE__ */ H('<span class="sending-indicator svelte-1uqoiy7" aria-label="Sending message" role="status"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" opacity="0.3"></path><path d="M12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4V2Z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform></path></svg></span>'), Vd = /* @__PURE__ */ H('<span class="failed-indicator svelte-1uqoiy7" aria-label="Message failed to send" role="alert"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1uqoiy7"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444"></path></svg></span>'), Gd = /* @__PURE__ */ H('<div role="listitem"><div class="message-bubble svelte-1uqoiy7"><!> <!> <!></div> <div class="message-time svelte-1uqoiy7"> </div></div>');
const Yd = {
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
function Ya(t, e) {
  Qe(e, !0), st(t, Yd);
  let i = N(e, "message", 7);
  function r(w) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 }).format(w);
  }
  const n = /* @__PURE__ */ ie(() => i().role === "user");
  let s = /* @__PURE__ */ R(null);
  Dt(() => {
    const w = i().role, m = i().content;
    if (w !== "assistant") {
      I(s, null);
      return;
    }
    let T = !1;
    return jd(m).then((M) => {
      T || I(s, M, !0);
    }).catch(() => {
      T || I(s, null);
    }), () => {
      T = !0;
    };
  });
  var a = {
    get message() {
      return i();
    },
    set message(w) {
      i(w), L();
    }
  }, o = Gd();
  let l;
  var d = X(o), c = X(d);
  {
    var f = (w) => {
      var m = Fd(), T = X(m);
      {
        var M = (V) => {
          var K = ir(), C = Ye(K);
          Dl(C, () => h(s)), O(V, K);
        }, q = (V) => {
          var K = Ll();
          he(() => Tt(K, i().content)), O(V, K);
        };
        ee(T, (V) => {
          h(s) ? V(M) : V(q, !1);
        });
      }
      Y(m), O(w, m);
    }, p = (w) => {
      var m = Hd(), T = X(m, !0);
      Y(m), he(() => Tt(T, i().content)), O(w, m);
    };
    ee(c, (w) => {
      i().role === "assistant" ? w(f) : w(p, !1);
    });
  }
  var v = Z(c, 2);
  {
    var _ = (w) => {
      var m = Bd();
      O(w, m);
    };
    ee(v, (w) => {
      i().status === "sending" && w(_);
    });
  }
  var x = Z(v, 2);
  {
    var g = (w) => {
      var m = Vd();
      O(w, m);
    };
    ee(x, (w) => {
      i().status === "failed" && w(g);
    });
  }
  Y(d);
  var b = Z(d, 2), P = X(b, !0);
  return Y(b), Y(o), he(
    (w, m) => {
      l = ci(o, 1, "message svelte-1uqoiy7", null, l, { user: h(n), assistant: !h(n) }), ce(o, "aria-label", h(n) ? "Your message" : "Assistant message"), ce(b, "aria-label", w), Tt(P, m);
    },
    [
      () => `Sent at ${r(i().timestamp)}`,
      () => r(i().timestamp)
    ]
  ), O(t, o), Xe(a);
}
at(Ya, { message: {} }, [], [], !0);
var Qd = /* @__PURE__ */ H('<div class="typing-indicator svelte-ej4x60" role="status" aria-live="polite" aria-label="Assistant is typing"><span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span aria-hidden="true" class="svelte-ej4x60"></span> <span class="sr-only svelte-ej4x60">Assistant is typing a response</span></div>');
const Xd = {
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
function Qa(t, e) {
  Qe(e, !0), st(t, Xd);
  let i = N(e, "chat", 7, vt);
  var r = {
    get chat() {
      return i();
    },
    set chat(o = vt) {
      i(o), L();
    }
  }, n = ir(), s = Ye(n);
  {
    var a = (o) => {
      var l = Qd();
      O(o, l);
    };
    ee(s, (o) => {
      i().isTyping && o(a);
    });
  }
  return O(t, n), Xe(r);
}
at(Qa, { chat: {} }, [], [], !0);
var Kd = /* @__PURE__ */ H('<p class="initial-message svelte-qha2j"> </p>'), Jd = /* @__PURE__ */ H('<div class="empty-state svelte-qha2j" role="status" aria-label="botbrewers.ca assistant ready"><div class="branding-phase svelte-qha2j" aria-hidden="true"><div class="empty-icon svelte-qha2j"><img alt="" class="brand-logo svelte-qha2j" width="68" height="68"/></div> <span class="brand-name svelte-qha2j">botbrewers.ca</span></div> <!> <!></div>'), Zd = /* @__PURE__ */ H('<div class="messages-container svelte-qha2j" role="list" aria-label="Messages"><!> <!></div>'), ec = /* @__PURE__ */ H('<div class="error-message svelte-qha2j"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qha2j"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#ef4444" class="svelte-qha2j"></path><path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#ef4444" class="svelte-qha2j"></path></svg> <p class="svelte-qha2j"> </p></div>'), tc = /* @__PURE__ */ H('<div class="message-list svelte-qha2j" role="log" aria-live="polite" aria-label="Chat conversation"><!> <!></div>');
const ic = {
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
function Fn(t, e) {
  Qe(e, !0), st(t, ic);
  let i = N(e, "onsend", 7), r = N(e, "connectionState", 23, () => ae.DISCONNECTED), n = N(e, "chat", 7, vt), s = N(e, "config", 7, Le), a, o = !0;
  const l = /* @__PURE__ */ ie(() => n().messages.length > 0), d = /* @__PURE__ */ ie(() => r() !== ae.CONNECTED);
  Dt(() => {
    n().messages, o && h(l) && c();
  }), Dt(() => {
    n().isTyping, o && h(l) && c();
  }), Dt(() => {
    n().streamingUpdateSignal, o && n().isStreaming && c();
  });
  async function c() {
    await va(), a && (a.scrollTop = a.scrollHeight);
  }
  function f() {
    if (a) {
      const { scrollTop: w, scrollHeight: m, clientHeight: T } = a;
      o = m - w - T < 100;
    }
  }
  rn(() => {
    h(l) && c();
  });
  var p = {
    get onsend() {
      return i();
    },
    set onsend(w) {
      i(w), L();
    },
    get connectionState() {
      return r();
    },
    set connectionState(w = ae.DISCONNECTED) {
      r(w), L();
    },
    get chat() {
      return n();
    },
    set chat(w = vt) {
      n(w), L();
    },
    get config() {
      return s();
    },
    set config(w = Le) {
      s(w), L();
    }
  }, v = tc(), _ = X(v);
  {
    var x = (w) => {
      var m = Jd(), T = X(m), M = X(T), q = X(M);
      Y(M), mr(2), Y(T);
      var V = Z(T, 2);
      {
        var K = (D) => {
          var G = Kd(), te = X(G, !0);
          Y(G), he(() => Tt(te, s().initialMessage)), O(D, G);
        };
        ee(V, (D) => {
          s().initialMessage && D(K);
        });
      }
      var C = Z(V, 2);
      Wn(C, {
        get questions() {
          return s().quickQuestions;
        },
        get onsend() {
          return i();
        },
        get disabled() {
          return h(d);
        }
      }), Y(m), he(() => ce(q, "src", gd)), O(w, m);
    }, g = (w) => {
      var m = Zd(), T = X(m);
      Sn(T, 17, () => n().messages, (q) => q.id, (q, V) => {
        Ya(q, {
          get message() {
            return h(V);
          }
        });
      });
      var M = Z(T, 2);
      Qa(M, {
        get chat() {
          return n();
        }
      }), Y(m), O(w, m);
    };
    ee(_, (w) => {
      n().messages.length === 0 ? w(x) : w(g, !1);
    });
  }
  var b = Z(_, 2);
  {
    var P = (w) => {
      var m = ec(), T = Z(X(m), 2), M = X(T, !0);
      Y(T), Y(m), he(() => Tt(M, n().error)), O(w, m);
    };
    ee(b, (w) => {
      n().error && w(P);
    });
  }
  return Y(v), Ar(v, (w) => a = w, () => a), ya("scroll", v, f), O(t, v), Xe(p);
}
at(Fn, { onsend: {}, connectionState: {}, chat: {}, config: {} }, [], [], !0);
class ms {
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
      const n = r, s = n.results[n.resultIndex], o = s[0].transcript.slice(0, Lt.MAX_LENGTH), l = s.isFinal;
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
function rc(t) {
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
var nc = /* @__PURE__ */ H('<span role="alert" class="sr-only svelte-zcaleu"> </span>'), sc = /* @__PURE__ */ zn('<rect x="6" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect><rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor" class="svelte-zcaleu"></rect>', 1), ac = /* @__PURE__ */ zn('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" class="svelte-zcaleu"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></path><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line><line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="svelte-zcaleu"></line>', 1), oc = /* @__PURE__ */ H('<!> <button type="button"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-zcaleu"><!></svg></button>', 1);
const lc = {
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
function Xa(t, e) {
  Qe(e, !0), st(t, lc);
  let i = N(e, "disabled", 7, !1), r = N(e, "lang", 7, "en-US"), n = N(e, "onTranscript", 7), s = /* @__PURE__ */ R("idle"), a = /* @__PURE__ */ R(null);
  const o = ms.isSupported();
  let l = !0, d = null;
  function c() {
    return d || (d = new ms({
      lang: r(),
      continuous: !1,
      interimResults: !1,
      onResult(w, m) {
        m && w.trim() && l && n()(w.trim());
      },
      onStateChange(w) {
        I(s, w, !0), w !== "error" && I(a, null);
      },
      onError(w) {
        I(s, "error"), I(a, rc(w), !0);
      }
    })), d;
  }
  function f() {
    i() || !o || (h(s) === "listening" ? c().stop() : (I(a, null), c().start()));
  }
  Dt(() => () => {
    l = !1, d == null || d.abort(), d = null;
  });
  const p = /* @__PURE__ */ ie(() => h(s) === "listening"), v = /* @__PURE__ */ ie(() => h(s) === "error" ? `Voice input error: ${h(a) ?? "unknown"} — Start voice input` : h(p) ? "Stop listening" : "Start voice input"), _ = /* @__PURE__ */ ie(() => h(a) ?? (h(p) ? "Stop listening" : "Start voice input (audio processed by your browser's speech service)"));
  var x = {
    get disabled() {
      return i();
    },
    set disabled(w = !1) {
      i(w), L();
    },
    get lang() {
      return r();
    },
    set lang(w = "en-US") {
      r(w), L();
    },
    get onTranscript() {
      return n();
    },
    set onTranscript(w) {
      n(w), L();
    }
  }, g = ir(), b = Ye(g);
  {
    var P = (w) => {
      var m = oc(), T = Ye(m);
      {
        var M = (te) => {
          var ge = nc(), we = X(ge, !0);
          Y(ge), he(() => Tt(we, h(a))), O(te, ge);
        };
        ee(T, (te) => {
          h(a) && te(M);
        });
      }
      var q = Z(T, 2);
      let V;
      q.__click = f;
      var K = X(q), C = X(K);
      {
        var D = (te) => {
          var ge = sc();
          mr(), O(te, ge);
        }, G = (te) => {
          var ge = ac();
          mr(3), O(te, ge);
        };
        ee(C, (te) => {
          h(p) ? te(D) : te(G, !1);
        });
      }
      Y(K), Y(q), he(() => {
        V = ci(q, 1, "voice-button svelte-zcaleu", null, V, {
          listening: h(p),
          error: h(s) === "error"
        }), q.disabled = i(), ce(q, "aria-label", h(v)), ce(q, "title", h(_)), ce(q, "aria-pressed", h(p));
      }), O(w, m);
    };
    ee(b, (w) => {
      o && w(P);
    });
  }
  return O(t, g), Xe(x);
}
Wt(["click"]);
at(Xa, { disabled: {}, lang: {}, onTranscript: {} }, [], [], !0);
var dc = /* @__PURE__ */ H('<div class="connection-status svelte-1a8gd73" role="status" aria-live="polite"><span class="connecting-text svelte-1a8gd73">Connecting...</span> <span class="connecting-dot svelte-1a8gd73"></span></div>'), cc = /* @__PURE__ */ H('<div class="brand-banner svelte-1a8gd73"><a href="https://botbrewers.ca" target="_blank" rel="noopener noreferrer" class="svelte-1a8gd73">botbrewers.ca<span class="sr-only svelte-1a8gd73">(opens in new tab)</span></a></div>'), uc = /* @__PURE__ */ H('<div class="input-bar svelte-1a8gd73"><!> <div class="input-container svelte-1a8gd73"><textarea class="input-field svelte-1a8gd73" rows="1" aria-label="Message input"></textarea> <!> <button class="send-button svelte-1a8gd73" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1a8gd73"><path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" class="svelte-1a8gd73"></path></svg></button></div> <div class="ai-disclaimer svelte-1a8gd73">AI can make mistakes. Please double-check responses.</div></div>');
const gc = {
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
function Hn(t, e) {
  Qe(e, !0), st(t, gc);
  let i = N(e, "onsend", 7), r = N(e, "disabled", 7, !1), n = N(e, "showBrandBanner", 7, !1), s = N(e, "connectionState", 23, () => ae.DISCONNECTED), a = N(e, "chat", 7, vt), o = N(e, "config", 7, Le), l = N(e, "correlationService", 23, Zi), d = /* @__PURE__ */ R(""), c;
  function f() {
    var te;
    const C = l().generate(), D = h(d);
    F.log("InputBar", "handleSend() called", {
      correlationId: C,
      rawInputValue: D,
      rawLength: (D == null ? void 0 : D.length) || 0,
      rawType: typeof D,
      disabled: r(),
      isTyping: a().isTyping
    });
    const G = D.trim();
    F.log("InputBar", "After trimming", {
      correlationId: C,
      original: D,
      trimmed: G,
      originalLength: (D == null ? void 0 : D.length) || 0,
      trimmedLength: (G == null ? void 0 : G.length) || 0,
      wasEmptyAfterTrim: !G,
      hadWhitespaceOnly: ((D == null ? void 0 : D.length) || 0) > 0 && !G
    }), G && !r() && !a().isTyping && !a().isStreaming ? (F.log("InputBar", "Conditions met, calling onsend", {
      correlationId: C,
      trimmedValue: G,
      trimmedLength: G.length,
      willSend: !0
    }), l().setCurrent(C), (te = i()) == null || te(G), I(d, ""), v()) : F.log("InputBar", "Send blocked", {
      correlationId: C,
      hasContent: !!G,
      disabled: r(),
      isTyping: a().isTyping,
      trimmedValue: G || "(empty)",
      reason: G ? r() ? "disabled" : a().isTyping ? "typing in progress" : "unknown" : "empty content"
    });
  }
  function p(C) {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), f());
  }
  function v() {
    c && (c.style.height = "auto", c.style.height = Math.min(c.scrollHeight, 120) + "px");
  }
  const _ = /* @__PURE__ */ ie(() => r() || a().isTyping || a().isStreaming || a().error !== null), x = /* @__PURE__ */ ie(() => a().isTyping ? "Waiting for response..." : a().error ? "Error occurred" : o().placeholder), g = /* @__PURE__ */ ie(() => s() === ae.CONNECTING || s() === ae.DISCONNECTED);
  var b = {
    get onsend() {
      return i();
    },
    set onsend(C) {
      i(C), L();
    },
    get disabled() {
      return r();
    },
    set disabled(C = !1) {
      r(C), L();
    },
    get showBrandBanner() {
      return n();
    },
    set showBrandBanner(C = !1) {
      n(C), L();
    },
    get connectionState() {
      return s();
    },
    set connectionState(C = ae.DISCONNECTED) {
      s(C), L();
    },
    get chat() {
      return a();
    },
    set chat(C = vt) {
      a(C), L();
    },
    get config() {
      return o();
    },
    set config(C = Le) {
      o(C), L();
    },
    get correlationService() {
      return l();
    },
    set correlationService(C = Zi()) {
      l(C), L();
    }
  }, P = uc(), w = X(P);
  {
    var m = (C) => {
      var D = ir(), G = Ye(D);
      {
        var te = (we) => {
          var Ke = dc();
          O(we, Ke);
        }, ge = (we) => {
          var Ke = cc();
          O(we, Ke);
        };
        ee(G, (we) => {
          h(g) ? we(te) : we(ge, !1);
        });
      }
      O(C, D);
    };
    ee(w, (C) => {
      n() && C(m);
    });
  }
  var T = Z(w, 2), M = X(T);
  vl(M), M.__keydown = p, M.__input = v, Ar(M, (C) => c = C, () => c);
  var q = Z(M, 2);
  {
    var V = (C) => {
      Xa(C, {
        get disabled() {
          return h(_);
        },
        onTranscript: (D) => {
          I(d, D, !0), c == null || c.focus();
        }
      });
    };
    ee(q, (C) => {
      o().voiceInput && C(V);
    });
  }
  var K = Z(q, 2);
  return K.__click = f, Y(T), mr(2), Y(P), he(
    (C) => {
      ce(M, "placeholder", h(x)), M.disabled = h(_), K.disabled = C;
    },
    [() => h(_) || !h(d).trim()]
  ), ka(M, () => h(d), (C) => I(d, C)), O(t, P), Xe(b);
}
Wt(["keydown", "input", "click"]);
at(
  Hn,
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
class Ka {
  /**
   * @param correlationService Per-instance CorrelationService for multi-widget isolation.
   *   Defaults to the module singleton. Omitting this parameter breaks state isolation
   *   when multiple widget instances exist on the same page.
   */
  constructor(e, i, r = Zi()) {
    this.sessionId = null, this.config = e, this.visitor = i, this.debugLogger = nn(e.getAll()), this.correlationService = r;
  }
  /**
   * Initialize widget session with backend
   */
  async initialize() {
    try {
      const e = new AbortController(), i = setTimeout(() => e.abort(), fe.API_TIMEOUT), r = ur.getApiUrl("init", {
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
      if (e instanceof pr || e instanceof mi || e instanceof wi)
        throw e;
      const i = vr.handle(e, {
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
      const s = cd.validate(e, i);
      if (this.debugLogger.log("APIClient", "Message validation result", {
        correlationId: i,
        input: e,
        isValid: s.isValid,
        error: s.error,
        sanitizedValue: s.sanitizedValue,
        sanitizedLength: ((r = s.sanitizedValue) == null ? void 0 : r.length) || 0,
        contentChanged: e !== s.sanitizedValue
      }), !s.isValid)
        throw this.debugLogger.error("APIClient", "Validation failed", { correlationId: i, error: s.error }), new pr(s.error || "Validation failed", "message", e);
      this.sessionId || (this.debugLogger.log("APIClient", "No session ID, attempting to resume or initialize...", { correlationId: i }), await this.resumeSession() || await this.initialize());
      const a = new AbortController(), o = setTimeout(() => a.abort(), fe.API_TIMEOUT), l = {
        body: {
          client_id: this.config.clientId,
          visitor_id: this.visitor.getVisitorId(),
          session_id: this.sessionId,
          message: s.sanitizedValue
        }
      }, d = ur.getApiUrl("chat", {
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
          const p = c.headers.get("Retry-After"), v = p ? parseInt(p, 10) : 60;
          throw new wi(
            `Rate limit exceeded. Please try again in ${v} seconds.`,
            v
          );
        }
        throw new mi(
          `Failed to send message: ${c.statusText}`,
          c.status,
          d
        );
      }
      const f = await c.json();
      return this.debugLogger.log("APIClient", "HTTP response data", { correlationId: i, result: f }), f;
    } catch (s) {
      if (this.debugLogger.error("APIClient", "sendMessage() error", { correlationId: i, error: s }), s instanceof pr || s instanceof mi || s instanceof wi)
        throw s;
      const a = vr.handle(s, {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), fe.API_TIMEOUT), r = ur.getApiUrl("sessionHealth", {
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
      const e = new AbortController(), i = setTimeout(() => e.abort(), fe.API_TIMEOUT), r = ur.getApiUrl("sessionHealth", {
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
      const i = vr.handle(e, {
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
class Ja {
  constructor(e, i, r) {
    this.typingTimeout = null, this.hasHiddenTypingForCurrentStream = !1, this.lastCompletionTimestamp = null, this.lastMessageSentTimestamp = null, this.COMPLETION_GRACE_PERIOD_MS = fe.COMPLETION_GRACE_PERIOD, this.chatStore = e, this.uiStore = i, this.debugLogger = r;
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
    i && !this.chatStore.hasMessages && (Le.setBackendInitialMessage(i), this.debugLogger.log("ChatController", "Initial message configured for empty state", {
      source: Le.initialMessage === i ? "server" : "client-override"
    }));
  }
  handleTypingIndicator() {
    const e = this.lastCompletionTimestamp ? Date.now() - this.lastCompletionTimestamp : 1 / 0, i = this.lastMessageSentTimestamp ? Date.now() - this.lastMessageSentTimestamp : 1 / 0;
    if (e < this.COMPLETION_GRACE_PERIOD_MS && i > fe.CONNECTION_DELAY) {
      this.debugLogger.log("ChatController", "Ignoring typing indicator - grace period");
      return;
    }
    !this.hasHiddenTypingForCurrentStream && !this.chatStore.isStreaming ? (this.debugLogger.log("ChatController", "Processing typing indicator"), this.chatStore.setTyping(!0), this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = window.setTimeout(() => {
      this.debugLogger.log("ChatController", "Typing indicator timeout"), this.chatStore.setTyping(!1), this.typingTimeout = null;
    }, fe.TYPING_INDICATOR_TIMEOUT)) : this.debugLogger.log("ChatController", "Ignoring typing indicator - already streaming");
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
  setTypingWithTimeout(e = fe.TYPING_FALLBACK_TIMEOUT) {
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
function fc(t) {
  return t.startsWith("barToCorner");
}
const hc = 600, pc = 420;
async function vc(t) {
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
    const a = t.setTimer(s, hc);
    (o = t.setSafetyTimer) == null || o.call(t, a);
  }), t.isAlive && !t.isAlive()) return;
  t.setPhase("expanding"), await t.openWindow();
  const e = t.setTimer(() => {
    t.getPhase() === "expanding" && t.setPhase("idle");
  }, pc);
  (i = t.setSettleTimer) == null || i.call(t, e);
}
async function mc(t, e) {
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
async function wc(t) {
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
var bc = /* @__PURE__ */ H('<span class="error-message svelte-zsv8oa" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Retry Connection</button>', 1), yc = /* @__PURE__ */ H('<span class="error-message svelte-zsv8oa" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-zsv8oa" aria-describedby="error-message">Try Again</button>', 1), xc = /* @__PURE__ */ H('<div class="error-banner svelte-zsv8oa" role="alert" aria-live="polite"><!></div>'), _c = /* @__PURE__ */ H('<button class="backdrop svelte-zsv8oa" aria-label="Close chat overlay" tabindex="-1"></button>'), kc = /* @__PURE__ */ H('<div role="status" aria-live="polite" class="sr-only svelte-zsv8oa">Chat assistant opened</div> <div role="dialog" aria-label="Chat assistant" aria-modal="true" tabindex="-1"><!> <!> <!> <!></div> <!>', 1), Sc = /* @__PURE__ */ H('<div class="widget-container svelte-zsv8oa"><!> <!></div>');
const Cc = {
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
function Za(t, e) {
  Qe(e, !0), st(t, Cc);
  let i = N(e, "hostElement", 7), r = N(e, "ui", 7, zt), n = N(e, "chat", 7, vt), s = N(e, "config", 7, Le), a = N(e, "layout", 7, "bubble"), o, l, d, c, f, p;
  const v = Pa();
  let _ = !1, x = !1, g = null, b = /* @__PURE__ */ R(le(ae.DISCONNECTED)), P = /* @__PURE__ */ R(
    !1
    // Track if max reconnection attempts exhausted
  ), w = /* @__PURE__ */ R("idle"), m = !1, T = null, M = null, q = !1;
  function V() {
    return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function K() {
    return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(max-width: 767px)").matches;
  }
  let C = /* @__PURE__ */ R(null), D = null, G = /* @__PURE__ */ R(null), te = /* @__PURE__ */ R(!1);
  function ge() {
    var A;
    if ((A = i()) != null && A.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  function we(y) {
    const A = [
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      "a[href]"
    ].join(", "), z = y.querySelectorAll(A);
    if (z.length === 0) return;
    const Oe = z[0], Ue = z[z.length - 1];
    return requestAnimationFrame(() => Oe.focus()), { firstFocusable: Oe, lastFocusable: Ue };
  }
  function Ke(y) {
    if (y.key === "Escape" && r().isOpen) {
      y.preventDefault(), k();
      return;
    }
    if (y.key === "Tab" && h(C)) {
      const A = [
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
        "a[href]"
      ].join(", "), z = h(C).querySelectorAll(A);
      if (z.length === 0) return;
      const Oe = z[0], Ue = z[z.length - 1];
      y.shiftKey && document.activeElement === Oe ? (y.preventDefault(), Ue.focus()) : !y.shiftKey && document.activeElement === Ue && (y.preventDefault(), Oe.focus());
    }
  }
  function jt() {
    D = document.activeElement;
  }
  function ui() {
    D && typeof D.focus == "function" && requestAnimationFrame(() => D == null ? void 0 : D.focus()), D = null;
  }
  function Te() {
    a() === "bar" && r().hasEngaged ? (D = null, I(te, !0)) : ui();
  }
  Dt(() => {
    h(te) && h(G) && (h(G).focus(), I(te, !1));
  });
  function k() {
    r().close(), Te();
  }
  function $() {
    h(C) && we(h(C));
  }
  rn(async () => {
    try {
      o = new Ba(i()), p = nn(o.getAll()), l = new Hr(), d = new Ka(o, l, v), c = new Ga(o, l, v), f = new Ja(n(), r(), p), i() && s().loadFromAttributes(i()), Ft(), ge(), p.log("ChatWidget", "Attaching WebSocket listeners"), c.on("message", It), c.on("stateChange", (A) => {
        p.log("ChatWidget", "WebSocket state changed", {
          oldState: h(b),
          newState: A,
          timestamp: Date.now()
        }), I(b, A, !0);
      }), c.on("error", (A) => {
        p.error("ChatWidget", "WebSocket error event", A), g = A.error, n().setError(A.error);
      }), c.on("connectionFailed", (A) => {
        p.error("ChatWidget", "WebSocket connection failed after max attempts", A), I(P, !0), g = A.error, n().setError(A.error);
      }), p.log("ChatWidget", "WebSocket listeners attached successfully"), r().isOpen && await J();
      const y = i();
      y != null && y.setOnOpenChangeCallback && y.setOnOpenChangeCallback((A) => {
        sn(A);
      }), p.log("ChatWidget", "Services initialized successfully");
    } catch (y) {
      p.error("ChatWidget", "Initialization failed", y), g = y instanceof Error ? y.message : "Failed to initialize chat";
    }
  }), Dt(() => {
    const y = r().isOpen;
    if (i()) {
      const A = i().hasAttribute("open");
      y && !A ? i().setAttribute("open", "") : !y && A && i().removeAttribute("open");
    }
  }), Ca(() => {
    q = !0;
    const y = d == null ? void 0 : d.getSessionId();
    y && l.markSessionInactive(y), T !== null && clearTimeout(T), M !== null && clearTimeout(M), T = null, M = null, rr = null, c == null || c.disconnect(), f == null || f.cleanup();
  });
  async function J() {
    var y;
    if (!(_ || x)) {
      x = !0;
      try {
        if (r().setLoading(!0), await d.resumeSession()) {
          const z = d.getSessionId();
          z && (await c.connect(z), setTimeout(
            () => {
              p.log("ChatWidget", "Testing WebSocket connection after session resumption..."), c.testConnection();
            },
            fe.CONNECTION_DELAY
          ));
        } else {
          const z = await d.initialize();
          (y = z.assistant_info) != null && y.assistant_name && s().setBackendTitle(z.assistant_info.assistant_name), await c.connect(z.session_id), setTimeout(
            () => {
              p.log("ChatWidget", "Testing WebSocket connection after initialization..."), c.testConnection();
            },
            fe.CONNECTION_DELAY
          ), z.settings && Je(z.settings);
        }
        _ = !0;
      } catch (A) {
        g = A instanceof Error ? A.message : "Failed to initialize", n().setError(g);
      } finally {
        r().setLoading(!1), x = !1;
      }
    }
  }
  function Ft() {
    const y = o.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", y.theme || "modern"), y.primary_color || y.accent_color)) {
        const A = y.accent_color || y.primary_color;
        if (A) {
          const z = Ji(A, "#6b46c1");
          i().style.setProperty("--widget-primary", z), i().style.setProperty("--widget-primary-hover", re(z, -20)), i().style.setProperty("--widget-primary-light", re(z, 20)), i().style.setProperty("--widget-primary-dark", re(z, -30)), i().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${z} 0%, ${re(z, 20)} 100%)`), i().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${re(z, -20)} 0%, ${z} 100%)`);
        }
      }
    });
  }
  function Je(y) {
    requestAnimationFrame(() => {
      if (i() && (y.theme && typeof y.theme == "string" && i().setAttribute("data-theme", y.theme), y.primary_color && typeof y.primary_color == "string")) {
        const A = Ji(y.primary_color, "#6b46c1");
        i().style.setProperty("--widget-primary", A), i().style.setProperty("--widget-primary-hover", re(A, -15)), i().style.setProperty("--widget-gradient-start", A), i().style.setProperty("--widget-gradient-end", re(A, -30));
      }
    });
  }
  function It(y) {
    f.handleMessage(y);
  }
  function At(y) {
    const A = n().addMessage(y, "user");
    return f.resetForNewMessage(), f.setTypingWithTimeout(), p.log("ChatWidget", "User message echoed to store", {
      messageId: A.id,
      length: A.content.length
    }), A;
  }
  async function gi(y, A) {
    const z = v.getCurrent();
    let Oe = !1;
    try {
      _ || await J();
      const Ue = Va(h(b));
      p.log("ChatWidget", "Routing message", {
        correlationId: z,
        connectionState: h(b),
        routingTo: Ue ? "WebSocket" : "HTTP API"
      }), Oe = !0, await wc({
        content: y,
        messageId: A.id,
        canUseWebSocket: () => Ue,
        wsSend: (ne) => c.send(ne),
        httpSend: (ne) => d.sendMessage(ne),
        addAssistantMessage: (ne) => n().addMessage(ne, "assistant"),
        updateMessageStatus: (ne, ot) => n().updateMessageStatus(ne, ot),
        setTyping: (ne) => n().setTyping(ne),
        setError: (ne) => {
          g = ne, n().setError(ne);
        },
        isOpen: () => r().isOpen,
        markUnread: () => r().markUnread(),
        onError: (ne, ot) => p.error("ChatWidget", ne, ot)
      });
    } finally {
      Oe || n().setTyping(!1);
    }
  }
  async function Gn(y) {
    const A = At(y);
    await gi(y, A);
  }
  async function sn(y) {
    const A = r().isOpen;
    A !== y && (p.log("ChatWidget", "Setting open state", { from: A, to: y }), y && !A && !D && jt(), y ? r().open() : r().close(), await new Promise((z) => setTimeout(z, 0)), y && !_ && s() && await J(), y ? requestAnimationFrame(() => $()) : Te());
  }
  async function no() {
    await sn(!r().isOpen);
  }
  let rr = null;
  function so(y) {
    fc(y.animationName) && (rr == null || rr.resolve());
  }
  async function ao() {
    await vc({
      layout: a(),
      setPhase: (y) => {
        I(w, y, !0);
      },
      openWindow: () => sn(!0),
      prefersReducedMotion: V,
      isMobileViewport: K,
      setTranslateResolver: (y) => {
        rr = y;
      },
      setTimer: (y, A) => setTimeout(y, A),
      getPhase: () => h(w),
      setSafetyTimer: (y) => {
        T = y;
      },
      setSettleTimer: (y) => {
        M = y;
      },
      isAlive: () => !q
    });
  }
  async function Yn(y) {
    await mc(y, {
      isSubmitting: () => m,
      setSubmitting: (A) => {
        m = A;
      },
      getPhase: () => h(w),
      markEngaged: () => r().markEngaged(),
      openWithTransition: ao,
      // Echo the message + typing BEFORE the open so the window unfolds already
      // populated; transmit (init+connect+send) runs after the transition.
      echo: At,
      transmit: gi
    });
  }
  function oo() {
    n().clearMessages(), n().setError(null), g = null;
  }
  function lo() {
    p.log("ChatWidget", "Manual retry connection requested"), I(P, !1), g = null, n().setError(null), c == null || c.retryConnection();
  }
  const an = /* @__PURE__ */ ie(() => r().isOpen), co = /* @__PURE__ */ ie(() => r().isLoading), Qn = /* @__PURE__ */ ie(() => {
    var y;
    return ((y = s()) == null ? void 0 : y.position) || "bottom-right";
  }), uo = /* @__PURE__ */ ie(() => r().hasEngaged), go = /* @__PURE__ */ ie(() => a() === "bar" && (!h(uo) || h(w) === "translating"));
  var fo = {
    get hostElement() {
      return i();
    },
    set hostElement(y) {
      i(y), L();
    },
    get ui() {
      return r();
    },
    set ui(y = zt) {
      r(y), L();
    },
    get chat() {
      return n();
    },
    set chat(y = vt) {
      n(y), L();
    },
    get config() {
      return s();
    },
    set config(y = Le) {
      s(y), L();
    },
    get layout() {
      return a();
    },
    set layout(y = "bubble") {
      a(y), L();
    }
  }, nr = Sc(), Xn = X(nr);
  {
    var ho = (y) => {
      var A = ir(), z = Ye(A);
      {
        var Oe = (ne) => {
          {
            let ot = /* @__PURE__ */ ie(() => h(w) === "translating");
            $a(ne, {
              get config() {
                return s();
              },
              get position() {
                return h(Qn);
              },
              get translating() {
                return h(ot);
              },
              onsubmit: Yn,
              onchip: Yn,
              onanimationend: so
            });
          }
        }, Ue = (ne) => {
          za(ne, {
            onclick: no,
            get ui() {
              return r();
            },
            get buttonRef() {
              return h(G);
            },
            set buttonRef(ot) {
              I(G, ot, !0);
            }
          });
        };
        ee(z, (ne) => {
          h(go) ? ne(Oe) : ne(Ue, !1);
        });
      }
      O(y, A);
    };
    ee(Xn, (y) => {
      h(an) || y(ho);
    });
  }
  var po = Z(Xn, 2);
  {
    var vo = (y) => {
      var A = kc(), z = Z(Ye(A), 2);
      let Oe;
      z.__keydown = Ke;
      var Ue = X(z);
      jn(Ue, {
        onclose: k,
        get connectionState() {
          return h(b);
        },
        get connectionFailed() {
          return h(P);
        },
        get ui() {
          return r();
        },
        get config() {
          return s();
        }
      });
      var ne = Z(Ue, 2);
      Fn(ne, {
        onsend: Gn,
        get connectionState() {
          return h(b);
        },
        get chat() {
          return n();
        },
        get config() {
          return s();
        }
      });
      var ot = Z(ne, 2);
      {
        let Ze = /* @__PURE__ */ ie(() => n().error !== null || h(co)), bt = /* @__PURE__ */ ie(() => n().messages.length === 0);
        Hn(ot, {
          onsend: Gn,
          get disabled() {
            return h(Ze);
          },
          get showBrandBanner() {
            return h(bt);
          },
          get connectionState() {
            return h(b);
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
      var mo = Z(ot, 2);
      {
        var wo = (Ze) => {
          var bt = xc(), xo = X(bt);
          {
            var _o = (fi) => {
              var sr = bc(), on = Z(Ye(sr), 2);
              on.__click = lo, O(fi, sr);
            }, ko = (fi) => {
              var sr = yc(), on = Z(Ye(sr), 2);
              on.__click = oo, O(fi, sr);
            };
            ee(xo, (fi) => {
              h(P) ? fi(_o) : fi(ko, !1);
            });
          }
          Y(bt), O(Ze, bt);
        };
        ee(mo, (Ze) => {
          n().error && Ze(wo);
        });
      }
      Y(z), Ar(z, (Ze) => I(C, Ze), () => h(C));
      var bo = Z(z, 2);
      {
        var yo = (Ze) => {
          var bt = _c();
          bt.__click = k, ls(3, bt, () => id, () => ({ duration: 200 })), O(Ze, bt);
        };
        ee(bo, (Ze) => {
          h(an) && Ze(yo);
        });
      }
      he(() => Oe = ci(z, 1, "chat-container svelte-zsv8oa", null, Oe, { "bar-expanding": a() === "bar" })), ls(3, z, () => rd, () => ({
        y: a() === "bar" ? 0 : 20,
        duration: a() === "bar" ? 0 : 300
      })), O(y, A);
    };
    ee(po, (y) => {
      h(an) && y(vo);
    });
  }
  return Y(nr), he(() => {
    ce(nr, "data-position", h(Qn)), ce(nr, "data-theme", s().theme);
  }), O(t, nr), Xe(fo);
}
Wt(["keydown", "click"]);
at(Za, { hostElement: {}, ui: {}, chat: {}, config: {}, layout: {} }, [], [], !0);
var Tc = /* @__PURE__ */ H('<span class="error-message svelte-12a99c7" id="error-message">Connection lost. Unable to reconnect.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Retry Connection</button>', 1), Ec = /* @__PURE__ */ H('<span class="error-message svelte-12a99c7" id="error-message">Something went wrong. Please try again.</span> <button class="restart-button svelte-12a99c7" aria-describedby="error-message">Try Again</button>', 1), Ic = /* @__PURE__ */ H('<div class="error-banner svelte-12a99c7" role="alert" aria-live="polite"><!></div>'), Ac = /* @__PURE__ */ H('<div class="chat-page svelte-12a99c7" role="region" aria-label="Chat assistant"><!> <!> <!> <!></div>');
const Mc = {
  hash: "svelte-12a99c7",
  code: `.chat-page.svelte-12a99c7 {width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:var(--widget-background);border-radius:0;border:none;min-height:400px;}.error-banner.svelte-12a99c7 {position:sticky;bottom:var(--widget-space-md);left:50%;transform:translateX(-50%);background:var(--widget-background);padding:var(--widget-space-md) var(--widget-space-lg);border-radius:var(--widget-radius-lg);box-shadow:var(--widget-shadow-lg);border:1px solid var(--widget-error);z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--widget-space-sm);max-width:calc(100% - 2 * var(--widget-space-lg));width:max-content;min-width:200px;box-sizing:border-box;}

  @media (max-width: 480px) {.error-banner.svelte-12a99c7 {max-width:calc(100% - 2 * var(--widget-space-md));padding:var(--widget-space) var(--widget-space-md);min-width:160px;}
  }.error-message.svelte-12a99c7 {color:var(--widget-error);font-size:var(--widget-font-size-sm);text-align:center;line-height:1.4;word-break:break-word;overflow-wrap:break-word;}.restart-button.svelte-12a99c7 {background:var(--widget-primary);color:var(--widget-text-inverse);border:none;padding:var(--widget-space) var(--widget-space-lg);border-radius:var(--widget-radius-md);font-size:var(--widget-font-size-sm);font-weight:600;cursor:pointer;transition:all var(--widget-transition);font-family:var(--widget-font-family);width:100%;}.restart-button.svelte-12a99c7:hover {background:var(--widget-primary-hover);}.restart-button.svelte-12a99c7:active {background:var(--widget-primary-dark);}.restart-button.svelte-12a99c7:focus-visible {outline:2px solid var(--widget-primary);outline-offset:2px;}

  /* Dark theme adjustments */[data-theme="dark"] .chat-page.svelte-12a99c7 {background:var(--widget-background);border-color:var(--widget-border);}[data-theme="dark"] .error-banner.svelte-12a99c7 {background:var(--widget-surface);border-color:var(--widget-error);}`
};
function eo(t, e) {
  Qe(e, !0), st(t, Mc);
  let i = N(e, "hostElement", 7), r = N(e, "ui", 7, zt), n = N(e, "chat", 7, vt), s = N(e, "config", 7, Le), a, o, l, d, c, f;
  const p = Pa();
  let v = !1, _ = !1, x = null, g = /* @__PURE__ */ R(le(ae.DISCONNECTED)), b = /* @__PURE__ */ R(!1), P = /* @__PURE__ */ R(null);
  const w = (k) => {
    const $ = k.detail;
    $ != null && $.text && typeof $.text == "string" && K($.text);
  };
  function m() {
    var $;
    if (($ = i()) != null && $.hasAttribute("data-theme")) return;
    window.matchMedia("(prefers-color-scheme: dark)").matches && i() && i().setAttribute("data-theme", "dark");
  }
  rn(async () => {
    try {
      r().open(), a = new Ba(i()), f = nn(a.getAll()), o = new Hr(), l = new Ka(a, o, p), d = new Ga(a, o, p), c = new Ja(n(), r(), f), i() && s().loadFromAttributes(i()), M(), m(), f.log("ChatPage", "Attaching WebSocket listeners"), d.on("message", V), d.on("stateChange", (k) => {
        f.log("ChatPage", "WebSocket state changed", {
          oldState: h(g),
          newState: k,
          timestamp: Date.now()
        }), I(g, k, !0);
      }), d.on("error", (k) => {
        f.error("ChatPage", "WebSocket error event", k), x = k.error, n().setError(k.error);
      }), d.on("connectionFailed", (k) => {
        f.error("ChatPage", "WebSocket connection failed after max attempts", k), I(b, !0), x = k.error, n().setError(k.error);
      }), f.log("ChatPage", "WebSocket listeners attached successfully"), i() && i().addEventListener("send-message", w), await T(), f.log("ChatPage", "Services initialized successfully");
    } catch (k) {
      f.error("ChatPage", "Initialization failed", k), x = k instanceof Error ? k.message : "Failed to initialize chat";
    }
  }), Ca(() => {
    i() && i().removeEventListener("send-message", w);
    const k = l == null ? void 0 : l.getSessionId();
    k && o.markSessionInactive(k), d == null || d.disconnect(), c == null || c.cleanup();
  });
  async function T() {
    var k;
    if (!(v || _)) {
      _ = !0;
      try {
        if (r().setLoading(!0), await l.resumeSession()) {
          const J = l.getSessionId();
          J && (await d.connect(J), setTimeout(
            () => {
              f.log("ChatPage", "Testing WebSocket connection after session resumption..."), d.testConnection();
            },
            fe.CONNECTION_DELAY
          ));
        } else {
          const J = await l.initialize();
          (k = J.assistant_info) != null && k.assistant_name && s().setBackendTitle(J.assistant_info.assistant_name), await d.connect(J.session_id), setTimeout(
            () => {
              f.log("ChatPage", "Testing WebSocket connection after initialization..."), d.testConnection();
            },
            fe.CONNECTION_DELAY
          ), J.settings && q(J.settings);
        }
        v = !0;
      } catch ($) {
        x = $ instanceof Error ? $.message : "Failed to initialize", n().setError(x);
      } finally {
        r().setLoading(!1), _ = !1;
      }
    }
  }
  function M() {
    const k = a.getAll();
    requestAnimationFrame(() => {
      if (i() && (i().setAttribute("data-theme", k.theme || "modern"), k.primary_color || k.accent_color)) {
        const $ = k.accent_color || k.primary_color;
        if ($) {
          const J = Ji($, "#6b46c1");
          i().style.setProperty("--widget-primary", J), i().style.setProperty("--widget-primary-hover", re(J, -20)), i().style.setProperty("--widget-primary-light", re(J, 20)), i().style.setProperty("--widget-primary-dark", re(J, -30)), i().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${J} 0%, ${re(J, 20)} 100%)`), i().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${re(J, -20)} 0%, ${J} 100%)`);
        }
      }
    });
  }
  function q(k) {
    requestAnimationFrame(() => {
      if (i() && (k.theme && typeof k.theme == "string" && i().setAttribute("data-theme", k.theme), k.primary_color && typeof k.primary_color == "string")) {
        const $ = Ji(k.primary_color, "#6b46c1");
        i().style.setProperty("--widget-primary", $), i().style.setProperty("--widget-primary-hover", re($, -20)), i().style.setProperty("--widget-primary-light", re($, 20)), i().style.setProperty("--widget-primary-dark", re($, -30)), i().style.setProperty("--widget-gradient", `linear-gradient(135deg, ${$} 0%, ${re($, 20)} 100%)`), i().style.setProperty("--widget-gradient-hover", `linear-gradient(135deg, ${re($, -20)} 0%, ${$} 100%)`);
      }
    });
  }
  function V(k) {
    c.handleMessage(k);
  }
  async function K(k) {
    const $ = p.getCurrent();
    f.log("ChatPage", "handleSendMessage called with content", {
      correlationId: $,
      content: k,
      length: (k == null ? void 0 : k.length) || 0,
      trimmed: (k == null ? void 0 : k.trim()) || "",
      type: typeof k
    });
    const J = n().addMessage(k, "user");
    c.resetForNewMessage(), f.log("ChatPage", "Message added to store", {
      correlationId: $,
      messageId: J.id,
      content: J.content,
      length: J.content.length
    }), v || (f.log("ChatPage", "Widget not initialized, initializing...", { correlationId: $ }), await T());
    const Ft = Va(h(g));
    if (f.log("ChatPage", "Connection state", {
      correlationId: $,
      connectionState: h(g),
      canUseWebSocket: Ft,
      routingTo: Ft ? "WebSocket" : "HTTP API"
    }), Ft) {
      f.log("ChatPage", "Sending via WebSocket", { correlationId: $, content: k });
      try {
        c.setTypingWithTimeout(), d.send(k), n().updateMessageStatus(J.id, "sent"), f.log("ChatPage", "User message marked as sent", { messageId: J.id });
      } catch (Je) {
        f.error("ChatPage", "WebSocket send error", Je), n().updateMessageStatus(J.id, "failed"), n().setError("Failed to send message. Please try again."), n().setTyping(!1);
        return;
      }
    } else
      try {
        f.log("ChatPage", "Sending via HTTP API", { correlationId: $, content: k }), c.setTypingWithTimeout();
        const Je = await l.sendMessage(k);
        f.log("ChatPage", "HTTP API response received", {
          correlationId: $,
          response: Je.response,
          sessionId: Je.session_id
        }), n().addMessage(Je.response, "assistant"), n().setTyping(!1);
      } catch (Je) {
        f.error("ChatPage", "HTTP API error", Je), x = "Failed to send message. Please try again.", n().setError(x), n().updateMessageStatus(J.id, "failed"), n().setTyping(!1);
      }
  }
  function C() {
    n().clearMessages(), n().setError(null), x = null;
  }
  function D() {
    f.log("ChatPage", "Manual retry connection requested"), I(b, !1), x = null, n().setError(null), d == null || d.retryConnection();
  }
  const G = /* @__PURE__ */ ie(() => r().isLoading);
  var te = {
    get hostElement() {
      return i();
    },
    set hostElement(k) {
      i(k), L();
    },
    get ui() {
      return r();
    },
    set ui(k = zt) {
      r(k), L();
    },
    get chat() {
      return n();
    },
    set chat(k = vt) {
      n(k), L();
    },
    get config() {
      return s();
    },
    set config(k = Le) {
      s(k), L();
    }
  }, ge = Ac(), we = X(ge);
  jn(we, {
    get connectionState() {
      return h(g);
    },
    get connectionFailed() {
      return h(b);
    },
    showCloseButton: !1,
    get ui() {
      return r();
    },
    get config() {
      return s();
    }
  });
  var Ke = Z(we, 2);
  Fn(Ke, {
    onsend: K,
    get connectionState() {
      return h(g);
    },
    get chat() {
      return n();
    },
    get config() {
      return s();
    }
  });
  var jt = Z(Ke, 2);
  {
    let k = /* @__PURE__ */ ie(() => n().error !== null || h(G)), $ = /* @__PURE__ */ ie(() => n().messages.length === 0);
    Hn(jt, {
      onsend: K,
      get disabled() {
        return h(k);
      },
      get showBrandBanner() {
        return h($);
      },
      get connectionState() {
        return h(g);
      },
      get chat() {
        return n();
      },
      get config() {
        return s();
      },
      get correlationService() {
        return p;
      }
    });
  }
  var ui = Z(jt, 2);
  {
    var Te = (k) => {
      var $ = Ic(), J = X($);
      {
        var Ft = (It) => {
          var At = Tc(), gi = Z(Ye(At), 2);
          gi.__click = D, O(It, At);
        }, Je = (It) => {
          var At = Ec(), gi = Z(Ye(At), 2);
          gi.__click = C, O(It, At);
        };
        ee(J, (It) => {
          h(b) ? It(Ft) : It(Je, !1);
        });
      }
      Y($), O(k, $);
    };
    ee(ui, (k) => {
      n().error && k(Te);
    });
  }
  return Y(ge), Ar(ge, (k) => I(P, k), () => h(P)), O(t, ge), Xe(te);
}
Wt(["click"]);
at(eo, { hostElement: {}, ui: {}, chat: {}, config: {} }, [], [], !0);
const Bn = {
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
}, En = {
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
function Lc(t = Bn) {
  var e;
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
  --widget-accent-gold: #d4a574;   /* Warm gold accent for dark mode focus states */
  --widget-accent-gold-rgb: 212, 165, 116;  /* RGB values for opacity control */

  /* Borders - Theme-aware for dark/light mode */
  --widget-border: ${t.border || (t.isDark ? "#334155" : "#e2e8f0")};
  --widget-border-light: ${t.borderLight || (t.isDark ? "#475569" : "#f1f5f9")};
  --widget-border-subtle: ${t.borderSubtle || (t.isDark ? "#1e293b" : "#f8fafc")};
  --widget-border-focus: var(--widget-primary);
  
  /* Primary RGB for glow effects */
  --widget-primary-rgb: ${((e = t.primary.replace("#", "").match(/.{2}/g)) == null ? void 0 : e.map((i) => parseInt(i, 16)).join(", ")) || "30, 91, 168"};

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
function Oc(t = Bn) {
  return Lc(t);
}
const to = {
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
}, ws = to, bs = {
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
}, Pc = {
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
}, Rc = {
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
}, qc = {
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
}, Nc = {
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
function Dc(t) {
  return {
    "bot-brewers": En,
    modern: to,
    professional: ws,
    corporate: ws,
    // Alias for backward compatibility
    friendly: bs,
    playful: bs,
    // Alias
    minimal: Pc,
    dark: Rc,
    elegant: qc,
    bold: Nc,
    generic: Bn,
    default: En
  }[t.toLowerCase()] || null;
}
function zc(t) {
  const e = Dc(t) || En;
  return Oc(e);
}
function Vn(t, e) {
  const i = t.getAttribute("theme") || t.getAttribute("data-theme") || e;
  return zc(i);
}
function io(t, e, i) {
  const r = t.querySelector('style[data-role="theme"]');
  r && (r.textContent = Vn(e, i));
}
function ro(t, e, i) {
  const r = t.querySelector(`.${e}`);
  if (r) {
    const n = Ji(i, "#6b46c1");
    r.style.setProperty("--widget-primary", n), r.style.setProperty("--widget-primary-hover", re(n, -20)), r.style.setProperty("--widget-primary-light", re(n, 20)), r.style.setProperty("--widget-primary-dark", re(n, -30));
  }
}
class ys extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._onOpenChangeCallback = null, this._pendingOpenState = null, this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Ea(), this._chatStore = Aa(), this._configStore = Na();
  }
  // Define which attributes we should observe for changes
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "position", "title", "client-id", "initial-message", "quick-questions", "open", "voice-input", "layout"];
  }
  async connectedCallback() {
    var n, s;
    const e = this.getAttribute("client-id"), i = window, r = ((n = i.AIChat) == null ? void 0 : n.clientId) || ((s = i.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !r) {
      F.error("ChatWidget", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (bi(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, r) {
    if (i !== r) {
      if ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this._configStore.updateConfig({ theme: r }, "user"), io(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && r && ro(this._shadowRoot, "widget-root", r), e === "client-id" && r && this._app && (F.log("ChatWidget", `Client ID changed from ${i} to ${r}, remounting widget`), bi(this._app), this._app = null, this.mountApp()), e === "layout" && this._app && (F.log("ChatWidget", `Layout changed from ${i} to ${r}, remounting widget`), bi(this._app), this._app = null, this.mountApp()), e === "title" && r && this._configStore.setUserTitle(r), e === "initial-message" && this._configStore.updateConfig({ initialMessage: r || void 0 }, "user"), e === "quick-questions")
        if (r)
          try {
            const n = JSON.parse(r);
            Array.isArray(n) ? this._configStore.setQuickQuestions(Un.validate(n, "ChatWidget")) : F.warn("ChatWidget", "quick-questions must be an array, using defaults");
          } catch {
            F.warn("ChatWidget", "Invalid quick-questions JSON, using defaults");
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
    r.setAttribute("data-role", "theme"), r.textContent = Vn(this, this._currentTheme), this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(i);
    const n = this.getAttribute("layout"), s = n === "bar" ? "bar" : "bubble";
    n && n !== "bar" && n !== "bubble" && F.log("ChatWidget", `Unknown layout "${n}", falling back to bubble`), this._app = tn(Za, {
      target: i,
      props: {
        hostElement: this,
        ui: this._uiStore,
        chat: this._chatStore,
        config: this._configStore,
        layout: s
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
class $c extends HTMLElement {
  constructor() {
    super(), this._app = null, this._currentTheme = "bot-brewers", this._shadowRoot = this.attachShadow({ mode: "open" }), this._uiStore = Ea(), this._chatStore = Aa(), this._configStore = Na();
  }
  // Observed attributes (no 'open' or 'position' — always visible, no floating button)
  static get observedAttributes() {
    return ["theme", "data-theme", "accent-color", "title", "client-id", "initial-message", "quick-questions"];
  }
  async connectedCallback() {
    var n, s;
    const e = this.getAttribute("client-id"), i = window, r = ((n = i.AIChat) == null ? void 0 : n.clientId) || ((s = i.ChatWidget) == null ? void 0 : s.clientId);
    if (!e && !r) {
      F.error("ChatPage", 'Configuration missing. Please set client-id attribute or window.AIChat = { clientId: "your_client_id" }');
      return;
    }
    this.mountApp();
  }
  disconnectedCallback() {
    this._app && (bi(this._app), this._app = null);
  }
  attributeChangedCallback(e, i, r) {
    if (i !== r && ((e === "theme" || e === "data-theme") && r && (this._currentTheme = r, this._configStore.updateConfig({ theme: r }, "user"), io(this._shadowRoot, this, this._currentTheme)), e === "accent-color" && r && ro(this._shadowRoot, "chat-page-root", r), e === "client-id" && r && this._app && (F.log("ChatPage", `Client ID changed from ${i} to ${r}, remounting`), bi(this._app), this._app = null, this.mountApp()), e === "title" && r && this._configStore.setUserTitle(r), e === "initial-message" && this._configStore.updateConfig({ initialMessage: r || void 0 }, "user"), e === "quick-questions"))
      if (r)
        try {
          const n = JSON.parse(r);
          Array.isArray(n) ? this._configStore.setQuickQuestions(Un.validate(n, "ChatPage")) : F.warn("ChatPage", "quick-questions must be an array, using defaults");
        } catch {
          F.warn("ChatPage", "Invalid quick-questions JSON, using defaults");
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
    r.setAttribute("data-role", "theme"), r.textContent = Vn(this, this._currentTheme);
    const n = document.createElement("style");
    n.textContent = ":host { display: block; width: 100%; height: 100%; box-sizing: border-box; }", this._shadowRoot.innerHTML = "", this._shadowRoot.appendChild(r), this._shadowRoot.appendChild(n), this._shadowRoot.appendChild(i), this._app = tn(eo, {
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
customElements.get("assistant-widget") ? customElements.get("chat-widget") || customElements.define("chat-widget", ys) : customElements.define("assistant-widget", ys);
customElements.get("assistant-chat-page") || customElements.define("assistant-chat-page", $c);
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", xs) : xs();
function xs() {
  if (document.querySelector("assistant-widget, chat-widget"))
    return;
  const t = window, e = t.AIChat || t.ChatWidget;
  if (e != null && e.clientId) {
    if (e.autoInit === !1) {
      F.log("ChatWidget", "Auto-initialization disabled");
      return;
    }
    const i = document.createElement("assistant-widget");
    document.body.appendChild(i), F.log("ChatWidget", "Auto-initialized with client ID", e.clientId);
  }
}
export {
  $c as AssistantChatPage,
  ys as ChatWidgetElement
};
