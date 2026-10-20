// تم + فرم ورود (مشترک بین صفحه‌ی فروش و صفحه‌ی ورود)
(function () {
  var t = document.getElementById("themeBtn");
  if (t) t.addEventListener("click", function () {
    var r = document.documentElement, v = r.getAttribute("data-theme") === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", v);
    try { localStorage.setItem("rayvo:theme", v); } catch (e) {}
  });
  var f = document.getElementById("f");
  if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var b = f.querySelector("button"), er = document.getElementById("err"), c = document.getElementById("code");
    er.textContent = ""; b.disabled = true;
    fetch("/api/login", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: c.value.trim() }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return [r.ok, d]; }); })
      .then(function (x) {
        if (x[0]) { location.href = "/lessons/00-%D9%81%D9%87%D8%B1%D8%B3%D8%AA.html"; }
        else { er.textContent = x[1].error || "کد معتبر نیست"; b.disabled = false; }
      })
      .catch(function () { er.textContent = "خطا در ارتباط؛ دوباره تلاش کن"; b.disabled = false; });
  });
})();
