// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

import {RegisterPolymerComponentBehaviors, RegisterPolymerTemplateModifications} from 'chrome://brave-resources/polymer_overriding.js'

RegisterPolymerTemplateModifications({
  'settings-sync-account-control': (templateContent) => {
    const banner = templateContent.querySelector('#banner')
    const promo_header = templateContent.querySelector('#promo-header')
    if (!banner) {
      console.error('[Brave Settings Overrides] Could not find sync banner')
      return
    }
    if (!promo_header) {
      console.error('[Brave Settings Overrides] Could not find promo header')
      return
    }
    banner.hidden = true
    promo_header.hidden = true
  }
})

RegisterPolymerComponentBehaviors({
  'settings-sync-account-control': [{
    registered: function() {
      console.error('Yolo Account Control!!')
      if (!this.properties || !this.properties.shouldShowAvatarRow_) {
        console.error('[Brave Settings Overrides] Could not find polymer shouldShowAvatarRow_ property')
        return
      }
      this.properties.shouldShowAvatarRow_ = {
        type: Boolean,
        value: false,
      }
    }
  }]
})
