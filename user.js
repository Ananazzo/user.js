// v8.6.3 Lepton
// ** Theme Default Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar - 89 Above
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// CSS's `:has()` selector #457 - 103 Above
user_pref("layout.css.has-selector.enabled", true);

// Browser Theme Based Scheme - Will be activate 95 Above
// user_pref("layout.css.prefers-color-scheme.content-override", 3);

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
// The rows that are located continuously must be changed `true`/`false` explicitly because there is a collision.
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#important
user_pref("userChrome.tab.connect_to_window",          true); // Original, Photon
user_pref("userChrome.tab.color_like_toolbar",         true); // Original, Photon

user_pref("userChrome.tab.lepton_like_padding",        true); // Original
user_pref("userChrome.tab.photon_like_padding",       false); // Photon

user_pref("userChrome.tab.dynamic_separator",          true); // Original, Proton
user_pref("userChrome.tab.static_separator",          false); // Photon
user_pref("userChrome.tab.static_separator.selected_accent", false); // Just option
user_pref("userChrome.tab.bar_separator",             false); // Just option

user_pref("userChrome.tab.newtab_button_like_tab",     true); // Original
user_pref("userChrome.tab.newtab_button_smaller",     false); // Photon
user_pref("userChrome.tab.newtab_button_proton",      false); // Proton

user_pref("userChrome.icon.panel_full",                true); // Original, Proton
user_pref("userChrome.icon.panel_photon",             false); // Photon

// Original Only
user_pref("userChrome.tab.box_shadow",                 true);
user_pref("userChrome.tab.bottom_rounded_corner",      true);

// Photon Only
user_pref("userChrome.tab.photon_like_contextline",   false);
user_pref("userChrome.rounding.square_tab",           false);

// Proton Only
// user_pref("userChrome.tab.supernova_like_contextline",   true);

// == Theme Compatibility Settings =============================================
// user_pref("userChrome.compatibility.accent_color",         true); // Firefox v103 Below
// user_pref("userChrome.compatibility.covered_header_image", true);
// user_pref("userChrome.compatibility.panel_cutoff",         true);
// user_pref("userChrome.compatibility.navbar_top_border",    true);
// user_pref("userChrome.compatibility.dynamic_separator",    true); // Need dynamic_separator

// user_pref("userChrome.compatibility.os.linux_non_native_titlebar_button", true);
// user_pref("userChrome.compatibility.os.windows_maximized", true);
// user_pref("userChrome.compatibility.os.win11",             true);

// == Theme Custom Settings ====================================================
// -- User Chrome --------------------------------------------------------------
// user_pref("userChrome.theme.private",                       true);
// user_pref("userChrome.theme.proton_color.dark_blue_accent", true);
// user_pref("userChrome.theme.monospace",                     true);
// user_pref("userChrome.theme.transparent.frame",             true);
// user_pref("userChrome.theme.transparent.menu",              true);
// user_pref("userChrome.theme.transparent.panel",             true);
// user_pref("userChrome.theme.non_native_menu",               true); // only for linux

// user_pref("userChrome.decoration.disable_panel_animate",    true);
user_pref("userChrome.decoration.disable_sidebar_animate",  true);
// user_pref("userChrome.decoration.panel_button_separator",   true);
// user_pref("userChrome.decoration.panel_arrow",              true);

// user_pref("userChrome.autohide.tab",                        true);
// user_pref("userChrome.autohide.tab.opacity",                true);
// user_pref("userChrome.autohide.tab.blur",                   true);
// user_pref("userChrome.autohide.tabbar",                     true);
// user_pref("userChrome.autohide.navbar",                     true);
// user_pref("userChrome.autohide.bookmarkbar",                true);
// user_pref("userChrome.autohide.sidebar",                    true);
// user_pref("userChrome.autohide.fill_urlbar",                true);
// user_pref("userChrome.autohide.back_button",                true);
// user_pref("userChrome.autohide.forward_button",             true);
// user_pref("userChrome.autohide.page_action",                true);
// user_pref("userChrome.autohide.toolbar_overlap",            true);
// user_pref("userChrome.autohide.toolbar_overlap.allow_layout_shift", true);

// user_pref("userChrome.hidden.tab_icon",                     true);
// user_pref("userChrome.hidden.tab_icon.always",              true);
// user_pref("userChrome.hidden.tabbar",                       true);
// user_pref("userChrome.hidden.navbar",                       true);
// user_pref("userChrome.hidden.private_indicator",            true);
// user_pref("userChrome.hidden.titlebar_container",           true);
// user_pref("userChrome.hidden.sidebar_header",               true);
// user_pref("userChrome.hidden.sidebar_header.vertical_tab_only", true);
// user_pref("userChrome.hidden.urlbar_iconbox",               true);
// user_pref("userChrome.hidden.urlbar_iconbox.label_only",    true);
// user_pref("userChrome.hidden.bookmarkbar_icon",             true);
// user_pref("userChrome.hidden.bookmarkbar_label",            true);
// user_pref("userChrome.hidden.disabled_menu",                true);

// user_pref("userChrome.centered.tab",                        true);
// user_pref("userChrome.centered.tab.label",                  true);
// user_pref("userChrome.centered.urlbar",                     true);
// user_pref("userChrome.centered.bookmarkbar",                true);

// user_pref("userChrome.counter.tab",                         true);
// user_pref("userChrome.counter.bookmark_menu",               true);

// user_pref("userChrome.combined.nav_button",                 true);
// user_pref("userChrome.combined.nav_button.home_button",     true);
// user_pref("userChrome.combined.urlbar.nav_button",          true);
// user_pref("userChrome.combined.urlbar.home_button",         true);
// user_pref("userChrome.combined.urlbar.reload_button",       true);
// user_pref("userChrome.combined.sub_button.none_background", true);
// user_pref("userChrome.combined.sub_button.as_normal",       true);

// user_pref("userChrome.rounding.square_button",              true);
// user_pref("userChrome.rounding.square_dialog",              true);
// user_pref("userChrome.rounding.square_panel",               true);
// user_pref("userChrome.rounding.square_panelitem",           true);
// user_pref("userChrome.rounding.square_menupopup",           true);
// user_pref("userChrome.rounding.square_menuitem",            true);
// user_pref("userChrome.rounding.square_infobox",             true);
// user_pref("userChrome.rounding.square_toolbar",             true);
// user_pref("userChrome.rounding.square_field",               true);
// user_pref("userChrome.rounding.square_urlView_item",        true);
// user_pref("userChrome.rounding.square_checklabel",          true);

// user_pref("userChrome.padding.first_tab",                   true);
// user_pref("userChrome.padding.first_tab.always",            true);
// user_pref("userChrome.padding.drag_space",                  true);
// user_pref("userChrome.padding.drag_space.maximized",        true);

// user_pref("userChrome.padding.toolbar_button.compact",      true);
// user_pref("userChrome.padding.menu_compact",                true);
// user_pref("userChrome.padding.bookmark_menu.compact",       true);
// user_pref("userChrome.padding.urlView_expanding",           true);
// user_pref("userChrome.padding.urlView_result",              true);
// user_pref("userChrome.padding.panel_header",                true);

// user_pref("userChrome.urlbar.iconbox_with_separator",       true);

// user_pref("userChrome.urlView.as_commandbar",               true);
// user_pref("userChrome.urlView.full_width_padding",          true);
// user_pref("userChrome.urlView.always_show_page_actions",    true);
// user_pref("userChrome.urlView.move_icon_to_left",           true);
// user_pref("userChrome.urlView.go_button_when_typing",       true);
// user_pref("userChrome.urlView.focus_item_border",           true);

// user_pref("userChrome.tabbar.as_titlebar",                  true);
// user_pref("userChrome.tabbar.fill_width",                   true);
// user_pref("userChrome.tabbar.multi_row",                    true);
// user_pref("userChrome.tabbar.unscroll",                     true);
// user_pref("userChrome.tabbar.on_bottom",                    true);
// user_pref("userChrome.tabbar.on_bottom.above_bookmark",     true); // Need on_bottom
// user_pref("userChrome.tabbar.on_bottom.menubar_on_top",     true); // Need on_bottom
// user_pref("userChrome.tabbar.on_bottom.hidden_single_tab",  true); // Need on_bottom
// user_pref("userChrome.tabbar.one_liner",                    true);
// user_pref("userChrome.tabbar.one_liner.combine_navbar",     true); // Need one_liner
// user_pref("userChrome.tabbar.one_liner.tabbar_first",       true); // Need one_liner
// user_pref("userChrome.tabbar.one_liner.responsive",         true); // Need one_liner

// user_pref("userChrome.tab.bottom_rounded_corner.all",       true);
// user_pref("userChrome.tab.bottom_rounded_corner.australis", true);
// user_pref("userChrome.tab.bottom_rounded_corner.edge",      true);
// user_pref("userChrome.tab.bottom_rounded_corner.chrome",    true);
// user_pref("userChrome.tab.bottom_rounded_corner.chrome_legacy", true);
// user_pref("userChrome.tab.bottom_rounded_corner.wave",      true);
// user_pref("userChrome.tab.always_show_tab_icon",            true);
// user_pref("userChrome.tab.close_button_at_pinned",          true);
// user_pref("userChrome.tab.close_button_at_pinned.always",   true);
// user_pref("userChrome.tab.close_button_at_pinned.background", true);
// user_pref("userChrome.tab.close_button_at_hover.always",    true); // Need close_button_at_hover
// user_pref("userChrome.tab.close_button_at_hover.with_selected", true);  // Need close_button_at_hover
// user_pref("userChrome.tab.sound_show_label",                true); // Need remove sound_hide_label
// user_pref("userChrome.tab.container.on_top",                true);
// user_pref("userChrome.tab.container.always_long",           true);
// user_pref("userChrome.tab.sound_with_favicons.on_center",   true);
// user_pref("userChrome.tab.selected_bold",                   true);

// user_pref("userChrome.navbar.as_sidebar",                   true);

// user_pref("userChrome.bookmarkbar.multi_row",               true);

// user_pref("userChrome.findbar.floating_on_top",             true);

user_pref("userChrome.panel.remove_strip",                  true);
// user_pref("userChrome.panel.full_width_separator",          true);
// user_pref("userChrome.panel.full_width_padding",            true);

// user_pref("userChrome.sidebar.overlap",                     true);

// user_pref("userChrome.icon.disabled",                       true);
// user_pref("userChrome.icon.account_image_to_right",         true);
// user_pref("userChrome.icon.account_label_to_right",         true);
// user_pref("userChrome.icon.menu.full",                      true);
// user_pref("userChrome.icon.global_menu.mac",                true);

// -- User Content -------------------------------------------------------------
// user_pref("userContent.player.ui.twoline",                  true);

// user_pref("userContent.newTab.hidden_logo",                 true);
// user_pref("userContent.newTab.background_image",            true); // Need wallpaper image to `userContent.css`. :root { --uc-newTab-wallpaper: url("../icons/background_image.png"); }

// user_pref("userContent.page.proton_color.dark_blue_accent", true);
// user_pref("userContent.page.proton_color.system_accent",    true);
// user_pref("userContent.page.dark_mode.pdf",                 true);
// user_pref("userContent.page.monospace",                     true);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.compatibility.theme",       true);
user_pref("userChrome.compatibility.os",          true);

user_pref("userChrome.theme.built_in_contrast",   true);
user_pref("userChrome.theme.system_default",      false);
user_pref("userChrome.theme.proton_color",        true);
user_pref("userChrome.theme.proton_chrome",       true); // Need proton_color
user_pref("userChrome.theme.fully_color",         false); // Need proton_color
user_pref("userChrome.theme.fully_dark",          true); // Need proton_color

user_pref("userChrome.decoration.cursor",         true);
user_pref("userChrome.decoration.field_border",   true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate",        false);

user_pref("userChrome.padding.tabbar_width",      true);
user_pref("userChrome.padding.tabbar_height",     true);
user_pref("userChrome.padding.toolbar_button",    true);
user_pref("userChrome.padding.navbar_width",      true);
user_pref("userChrome.padding.urlbar",            true);
user_pref("userChrome.padding.bookmarkbar",       true);
user_pref("userChrome.padding.infobar",           true);
user_pref("userChrome.padding.menu",              true);
user_pref("userChrome.padding.bookmark_menu",     true);
user_pref("userChrome.padding.global_menubar",    true);
user_pref("userChrome.padding.panel",             true);
user_pref("userChrome.padding.popup_panel",       true);

user_pref("userChrome.tab.multi_selected",        true);
user_pref("userChrome.tab.unloaded",              true);
user_pref("userChrome.tab.letters_cleary",        true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label",      true);
user_pref("userChrome.tab.sound_with_favicons",   true);
user_pref("userChrome.tab.pip",                   true);
user_pref("userChrome.tab.container",             true);
user_pref("userChrome.tab.crashed",               true);

user_pref("userChrome.fullscreen.overlap",        true);
user_pref("userChrome.fullscreen.show_bookmarkbar", true);

user_pref("userChrome.icon.library",              true);
user_pref("userChrome.icon.panel",                true);
user_pref("userChrome.icon.menu",                 true);
user_pref("userChrome.icon.context_menu",         true);
user_pref("userChrome.icon.global_menu",          true);
user_pref("userChrome.icon.global_menubar",       true);
user_pref("userChrome.icon.1-25px_stroke",        true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.player.ui",             true);
user_pref("userContent.player.icon",           true);
user_pref("userContent.player.noaudio",        true);
user_pref("userContent.player.size",           true);
user_pref("userContent.player.click_to_play",  true);
user_pref("userContent.player.animate",        true);

user_pref("userContent.newTab.full_icon",      true);
user_pref("userContent.newTab.animate",        true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar",      true);

user_pref("userContent.page.field_border",     true);
user_pref("userContent.page.illustration",     true);
user_pref("userContent.page.proton_color",     true);
user_pref("userContent.page.dark_mode",        true); // Need proton_color
user_pref("userContent.page.proton",           true); // Need proton_color

// ** Useful Options ***********************************************************
// Tab preview
// https://blog.nightly.mozilla.org/2024/02/06/a-preview-of-tab-previews-these-weeks-in-firefox-issue-153/
user_pref("browser.tabs.hoverPreview.enabled", true);

// Paste suggestion at urlbar
// https://blog.nightly.mozilla.org/2023/12/04/url-gonna-want-to-check-this-out-these-weeks-in-firefox-issue-150/
user_pref("browser.urlbar.clipboard.featureGate", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
// user_pref("browser.urlbar.unitConversion.enabled", true);

// Draw in Titlebar
// user_pref("browser.tabs.drawInTitlebar", true);
// user_pref("browser.tabs.inTitlebar",        1); // Nightly, 96 Above

// Searchbar, Removed from settings starting with FF v122
// user_pref("browser.search.widget.inNavBar",    true);

// Firefox view search
// https://blog.nightly.mozilla.org/2023/12/14/better-searching-in-firefox-to-close-out-2023-these-weeks-in-firefox-issue-151/
// user_pref("browser.firefox-view.search.enabled",       true);
// user_pref("browser.firefox-view.virtual-list.enabled", true);

// Firefox screenshot
// https://blog.nightly.mozilla.org/2024/01/22/happy-new-year-these-weeks-in-firefox-issue-152/
// user_pref("screenshots.browser.component.enabled", true);

// ** Scrolling Settings *******************************************************
// == Only Sharpen Scrolling ===================================================
//         Pref                                             Value      Original
/*
user_pref("mousewheel.min_line_scroll_amount",                 10); //        5
user_pref("general.smoothScroll.mouseWheel.durationMinMS",     80); //       50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); //   "0.25"
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); //    "0.4"
*/

// == Smooth Scrolling ==========================================================
// ** Scrolling Options ********************************************************
// based on natural smooth scrolling v2 by aveyo
// this preset will reset couple extra variables for consistency
//         Pref                                              Value                 Original
/*
user_pref("apz.allow_zooming",                               true);            ///     true
user_pref("apz.force_disable_desktop_zooming_scrollbars",   false);            ///    false
user_pref("apz.paint_skipping.enabled",                      true);            ///     true
user_pref("apz.windows.use_direct_manipulation",             true);            ///     true
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);            ///    false
user_pref("general.smoothScroll.currentVelocityWeighting", "0.12");            ///   "0.25" <- 1. If scroll too slow, set to "0.15"
user_pref("general.smoothScroll.durationToIntervalRatio",    1000);            ///      200
user_pref("general.smoothScroll.lines.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.lines.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",    100);            ///      200
user_pref("general.smoothScroll.mouseWheel.durationMinMS",      0);            ///       50
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);            ///      100
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);   ///      120
user_pref("general.smoothScroll.msdPhysics.enabled",                  true);   ///    false
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);   ///     1250
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",     200);   ///     1000
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",         10);   ///       12
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  "1.20");   ///    "1.3"
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",   1000);   ///     2000
user_pref("general.smoothScroll.other.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.other.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pages.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.pages.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pixels.durationMaxMS",        100);            ///      150
user_pref("general.smoothScroll.pixels.durationMinMS",          0);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMaxMS",    100);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMinMS",      0);            ///      150
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");            ///    "0.4"
user_pref("layers.async-pan-zoom.enabled",                   true);            ///     true
user_pref("layout.css.scroll-behavior.spring-constant",   "250.0");            ///   "250.0"
user_pref("mousewheel.acceleration.factor",                     3);            ///       10
user_pref("mousewheel.acceleration.start",                     -1);            ///       -1
user_pref("mousewheel.default.delta_multiplier_x",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_y",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_z",            100);            ///      100
user_pref("mousewheel.min_line_scroll_amount",                  0);            ///        5
user_pref("mousewheel.system_scroll_override.enabled",       true);            ///     true <- 2. If scroll too fast, set to false
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false); ///     true
user_pref("mousewheel.transaction.timeout",                  1500);            ///     1500
user_pref("toolkit.scrollbox.horizontalScrollDistance",         4);            ///        5
user_pref("toolkit.scrollbox.verticalScrollDistance",           3);            ///        3
*/

/****************************************************************************
 * Fingerprinting Resistance and Privacy                                    *
 ****************************************************************************/
user_pref("privacy.resistFingerprinting", true); // General fingerprinting resistance
user_pref("privacy.firstparty.isolate", true); // Isolate cookies and storage by the first party
user_pref("network.http.referer.XOriginPolicy", 2); // Only send minimal referer info across domains
user_pref("network.http.referer.trimmingPolicy", 2); // Trim referer headers to minimal data
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // Block addon manager leaks
user_pref("media.peerconnection.enabled", false); // Disable WebRTC to prevent IP leaks
user_pref("dom.battery.enabled", false); // Disable battery API (fingerprinting risk)
user_pref("media.navigator.enabled", false); // Disable WebRTC APIs (prevent fingerprinting via device access)
user_pref("dom.maxHardwareConcurrency", 2); // Limit cores exposed to reduce fingerprinting
user_pref("privacy.window.name.update.enabled", true); // Protect window.name from leakage

/****************************************************************************
 * Google Search and Quad9 DNS-over-HTTPS                                    *
 ****************************************************************************/
user_pref("browser.search.defaultenginename", "Google"); // Use Google Search
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query"); // Use Quad9 for DNS-over-HTTPS
user_pref("network.trr.mode", 3); // Enforce DNS-over-HTTPS for privacy
user_pref("network.trr.bootstrapAddress", "9.9.9.9"); // Bootstrap Quad9 DNS server
user_pref("network.security.esni.enabled", true); // Enable encrypted SNI to hide domain lookups

/****************************************************************************
 * Blocking Malicious Content: Phishing, Coin Miners, and Malicious URLs     *
 ****************************************************************************/
user_pref("browser.safebrowsing.malware.enabled", true); // Enable Safe Browsing for malware protection
user_pref("browser.safebrowsing.phishing.enabled", true); // Enable phishing protection
user_pref("browser.safebrowsing.downloads.remote.enabled", true); // Enable Safe Browsing for downloads
user_pref("browser.safebrowsing.blockedURIs.enabled", true); // Block known malicious URLs
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // Disable Google’s gethashURL to limit data collection
user_pref("extensions.blocklist.enabled", true); // Block malicious extensions
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/"); // Extension blocklist
user_pref("webchannel.allowObject.urlWhitelist", ""); // Restrict webchannel access for security

/****************************************************************************
 * Annoyance Blocking: App Banners, Popups, Widgets, Cookie Notices, Ads     *
 ****************************************************************************/
// General UI annoyances
user_pref("dom.disable_beforeunload", true); // Disable "Are you sure you want to leave?" popups
user_pref("dom.popup_maximum", 0); // Block all popup windows
user_pref("dom.event.contextmenu.enabled", false); // Disable context menu manipulations (stop popup menus)
user_pref("privacy.popups.disable_from_plugins", 3); // Block all popups triggered by plugins
user_pref("dom.push.enabled", false); // Disable push notifications
user_pref("browser.uitour.enabled", false); // Disable Firefox tour prompts
user_pref("permissions.default.desktop-notification", 2); // Block desktop notifications globally
user_pref("browser.shell.checkDefaultBrowser", false); // Disable "Set as default browser" popup

// Cookie and App banners
user_pref("cookiebanners.service.mode", 1); // Automatically manage cookie banners
user_pref("cookiebanners.service.mode.privateBrowsing", 1); // Manage cookie banners in private mode
user_pref("privacy.firstparty.isolate", true); // Isolate all cookies by domain to limit tracking
user_pref("network.cookie.cookieBehavior", 1); // Block third-party cookies
user_pref("privacy.cookieBannerReduction", true); // Automatically hide cookie banners

// Ad blocking and anti-tracking
user_pref("browser.contentblocking.category", "strict"); // Strict blocking (trackers, ads, etc.)
user_pref("extensions.adblockplus.currentVersion", true); // Use an ad blocker like Adblock Plus or uBlock Origin
user_pref("network.dns.disablePrefetch", true); // Block prefetching (used by ads to load faster)
user_pref("network.predictor.enabled", false); // Disable speculative connections (preloading trackers)
user_pref("dom.serviceWorkers.enabled", false); // Disable service workers (often abused by ad networks)
user_pref("network.prefetch-next", false); // Disable link prefetching

/****************************************************************************
 * Speed Optimizations: Keep the Browser Fast                                *
 ****************************************************************************/
user_pref("network.http.max-connections", 1800); // Increase max connections for faster browsing
user_pref("network.http.max-persistent-connections-per-server", 10); // Increase persistent connections
user_pref("gfx.canvas.accelerated.cache-items", 4096); // Increase canvas cache for smoother rendering
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("image.mem.decode_bytes_at_a_time", 32768); // Optimize image cache loading
user_pref("browser.cache.disk.enable", false); // Disable disk cache (enhances privacy and speed)
user_pref("browser.cache.memory.enable", true); // Use memory cache for better performance

/****************************************************************************
 * Smooth Scrolling and Usability                                            *
 ****************************************************************************/
user_pref("general.smoothScroll", true); // Enable smooth scrolling
user_pref("general.smoothScroll.msdPhysics.enabled", true); // Enable physics-based smooth scrolling
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12); 
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("mousewheel.default.delta_multiplier_y", 300); // Improve scroll speed

/****************************************************************************
 * Passwords, Data Persistence, and Usability                                *
 ****************************************************************************/
user_pref("signon.rememberSignons", true); // Enable saving passwords
user_pref("signon.autofillForms", true); // Automatically fill in login forms
user_pref("privacy.clearOnShutdown.cookies", false); // Don't clear cookies on shutdown
user_pref("privacy.clearOnShutdown.history", false); // Keep browsing history on shutdown
user_pref("privacy.clearOnShutdown.sessions", false); // Keep session data on shutdown
user_pref("places.history.enabled", true); // Enable browsing history
user_pref("browser.sessionstore.resume_from_crash", true); // Resume session after crashes
user_pref("browser.download.useDownloadDir", true); // Keep download directories remembered

/****************************************************************************
 * HTTPS and Security                                                        *
 ****************************************************************************/
user_pref("dom.security.https_only_mode", true); // Enforce HTTPS-only mode
user_pref("network.stricttransportsecurity.preloadlist", true); // Preload HSTS list for enhanced HTTPS
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // Warn on unsafe SSL negotiations
user_pref("security.cert_pinning.enforcement_level", 2); // Enforce public key pinning for enhanced security
user_pref("security.ssl.enable_ocsp_stapling", true); // Enable OCSP stapling to check certificates
user_pref("security.ssl.disable_session_identifiers", true); // Disable SSL session IDs for better privacy
user_pref("security.tls.enable_0rtt_data", false); // Disable early TLS data to prevent attacks
user_pref("network.IDN_show_punycode", true); // Show Punycode to prevent IDN homograph phishing attacks

/****************************************************************************
 * Miscellaneous: General Improvements                                       *
 ****************************************************************************/
user_pref("browser.startup.page", 0); // Start with a blank page
user_pref("browser.tabs.warnOnClose", false); // Don’t warn on closing multiple tabs
user_pref("browser.tabs.closeWindowWithLastTab", false); // Don't close window when last tab is closed
user_pref("browser.shell.checkDefaultBrowser", false); // Disable default browser check
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // Disable sponsored search suggestions
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // Disable non-sponsored suggestions
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Disable Pocket recommendations
user_pref("extensions.pocket.enabled", false); // Disable Pocket integration
user_pref("signon.autofillForms.http", false); // Don't autofill login on HTTP pages
user_pref("dom.allow_cut_copy", false); // Disable "copy to clipboard" via JavaScript
