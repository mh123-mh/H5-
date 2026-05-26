/**
 * 游戏通用工具类
 */

(function() {
    'use strict';
    
    const GameUtils = {
        navigateTo(url) {
            window.location.href = url;
        },
        
        hideAddressBar() {
            window.scrollTo(0, 1);
        }
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        // 隐藏地址栏
        window.scrollTo(0, 1);
    });
    
    window.GameUtils = GameUtils;
})();
