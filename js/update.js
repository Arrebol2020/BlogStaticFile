<div class="app-refresh" id="app-refresh">
  <div class="app-refresh-wrap">
    <label>✨ 网站已更新最新版本 👉</label>
    <a href="javascript:void(0)" onclick="location.reload()">点击刷新</a>
  </div>
</div>
<script>
  if ('serviceWorker' in navigator) {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        showNotification()
      })
    }

    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js')
    })
  }

  function showNotification() {
    if (GLOBAL_CONFIG.Snackbar) {
      var snackbarBg =
        document.documentElement.getAttribute('data-theme') === 'light'
          ? GLOBAL_CONFIG.Snackbar.bgLight
          : GLOBAL_CONFIG.Snackbar.bgDark
      var snackbarPos = GLOBAL_CONFIG.Snackbar.position
      Snackbar.show({
        text: '已更新最新版本',
        backgroundColor: snackbarBg,
        duration: 500000,
        pos: snackbarPos,
        actionText: '点击刷新',
        actionTextColor: '#fff',
        onActionClick: function (e) {
          location.reload()
        },
      })
    } else {
      var showBg =
        document.documentElement.getAttribute('data-theme') === 'light'
          ? '#49b1f5'
          : '#1f1f1f'
      var cssText = `top: 0; background: ${showBg};`
      document.getElementById('app-refresh').style.cssText = cssText
    }
  }
</script>
