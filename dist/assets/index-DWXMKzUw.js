import { importShared } from './__federation_fn_import-iRn10MJH.js';
import { j as jsxRuntimeExports, R as RemoteComponent } from './RemoteComponent-Dv6Ekhww.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteComponent, {}) });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
