import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { BrowserRouter as Router } from 'react-router-dom'
import { toJS } from 'mobx'
import 'babel-polyfill'

Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.mount = Enzyme.mount
global.routerMount = (Component, props = {}) => {
  return global.mount(
    <Router>
      <Component {...props} />
    </Router>,
  )
}
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.snapshot = toJson
global.toJS = toJS
global.WEBPACK_ASSET_PREFIX = ''
// date mock, see: https://github.com/facebook/jest/issues/2234#issuecomment-294873406
const DATE_TO_USE = new Date(2018)
const _Date = Date
global.Date = jest.fn(() => { return DATE_TO_USE })
global.Date.UTC = _Date.UTC
global.Date.parse = _Date.parse
global.Date.now = _Date.now

// Mock for window.location.assign so we can 'navigate'
// within tests without JSDOM 'Not implemented' errors
global.location.assign = jest.fn()

// payment specific for iframe on checkout
global.tlgRedirectCallback = jest.fn()
global.tlgCancelCallback = jest.fn()

// Mock for react-scroll errors during tests
jest.mock('react-scroll')

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  }
}
