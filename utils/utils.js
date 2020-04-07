function debounce(callback, wait, immediate = false) {
	let timeout = null;

	return function() {
		const callNow = immediate && !timeout;
		const next = () => callback.apply(this, arguments);

		clearTimeout(timeout);
		timeout = setTimeout(next, wait);

		if (callNow) {
			next();
		}
	};
}

var SmoothScroll = function(a, d, f) {
	var Site = {
		height: window.innerHeight,
		width: window.innerWidth
	};
	function c(c) {
		c.preventDefault();
		if (!p) {
			if (h.paginate && (u || (u = new Lethargy()), !u.check(c))) {
				v && clearTimeout(v);
				v = setTimeout(function() {
					u = null;
				}, 100);
				return;
			}
			c = c.detail
				? c.wheelDelta
					? (-c.wheelDelta / c.detail / 40) * (0 < c.detail ? 1 : -1)
					: c.detail / 3
				: -c.wheelDelta / 120;
			r += (c * d) / (h.paginate ? 3 : 1);
			r = Math.max(0, Math.min(r, a.scrollHeight - a.clientHeight));
			k =
				0 < r - pageYOffset
					? Math.ceil(r / Site.height) * Site.height
					: Math.floor(r / Site.height) * Site.height;
			l || g();
		}
	}
	function g(a) {
		a || (l = !0);
		if (l) {
			a = n;
			var c = (r - a) / f;
			h.paginate &&
				((c = (k - a) / f), (r = 1 < Math.abs(c) ? a + 1.01 * c : k));
			n = c = a + c;
			scrollTo(0, c);
			Math.abs(c - a) > 0.25 / f
				? z(g)
				: (h.paginate && (r = k),
				  (n = r),
				  scrollTo(0, r),
				  (l = !1),
				  v && clearTimeout(v),
				  (v = setTimeout(function() {
						u = null;
				  }, 100)));
		}
	}
	var h = this;
	h.paginate = !1;
	a == document &&
		(a =
			document.documentElement ||
			document.body.parentNode ||
			document.body);
	var n = 0,
		l = !1,
		r = pageYOffset,
		k = 0,
		u,
		v,
		y,
		A = 0,
		w = 0,
		p,
		q;
	h.scrollToY = function(a, c) {
		c
			? ((r = a),
			  (k = Math.round(a / Site.height) * Site.height),
			  l || g())
			: ((r = n = a),
			  (k = Math.round(a / Site.height) * Site.height),
			  scrollTo(0, a));
	};
	h.reset = function() {
		k = r = n = pageYOffset;
	};
	var F = function(a) {
		if (
			{
				37: 1,
				38: 1,
				39: 1,
				40: 1,
				32: 1,
				33: 1,
				34: 1,
				35: 1,
				36: 1
			}[a.keyCode]
		)
			return (
				console.log(a),
				(a = a || window.event),
				a.preventDefault && a.preventDefault(),
				(a.returnValue = !1)
			);
	};
	h.enableScrolling = function() {
		p &&
			((document.onkeydown = null),
			bodyScrollLock.enableBodyScroll(Menu.menu),
			(p = !1));
	};
	h.disableScrolling = function() {
		p ||
			(bodyScrollLock.disableBodyScroll(Menu.menu),
			(document.onkeydown = F),
			(p = !0));
	};
	var O = debounce(function() {
			h.paginate &&
				!q &&
				((n = pageYOffset),
				(k = Math.round(pageYOffset / Site.height) * Site.height),
				l || g());
		}, 250),
		z = (function() {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(a) {
					window.setTimeout(a, 20);
				}
			);
		})();
	a.addEventListener("mousewheel", c, {
		capture: !1,
		passive: !1
	});
	a.addEventListener("DOMMouseScroll", c, {
		capture: !1,
		passive: !1
	});
	a.addEventListener(
		"touchstart",
		function(a) {
			1 == a.changedTouches.length &&
				(h.reset(), (A = a.changedTouches[0].screenY), (w = 0));
			q = !0;
		},
		!1
	);
	a.addEventListener(
		"touchmove",
		function(a) {
			if (1 == a.changedTouches.length) {
				var c = A;
				A = a.changedTouches[0].screenY;
				w += A - c;
			}
		},
		!1
	);
	a.addEventListener(
		"touchend",
		function(c) {
			h.paginate &&
				((n = pageYOffset),
				(k =
					0 < w
						? Math.max(Math.floor(pageYOffset / Site.height), 0) *
						  Site.height
						: Math.min(
								Math.ceil(pageYOffset / Site.height) *
									Site.height,
								a.scrollHeight - Site.height
						  )),
				0 < pageYOffset &&
					pageYOffset < a.scrollHeight - Site.height &&
					UserAgent.iOS &&
					(l || g()));
			q = c.touches.length;
		},
		!1
	);
	addEventListener("scroll", function(a) {
		y && (clearTimeout(y), (y = null));
		h.paginate &&
			(q ||
				(y = setTimeout(function() {
					n = pageYOffset;
					k = Math.round(pageYOffset / Site.height) * Site.height;
					l || g();
				}, 500)));
	});
	addEventListener("resize", O);
};
export { SmoothScroll };
