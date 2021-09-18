import React from 'react';
import ReactDom from 'react-dom';
import { LoadingOutlined } from '@ant-design/icons';
let showing = false;
const div = document.createElement("div");
Object.assign(div.style, {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 9999,
  background: 'rgba(0,0,0,.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const loading = <LoadingOutlined style={{ fontSize: 60, color: '#fff' }} spin />;

export function showLoading() {
  if (showing) return;
  showing = true;
  document.body.appendChild(div);
  ReactDom.render(loading, div);
}

export function hideLoading() {
  if (!showing) return;
  showing = false;
  ReactDom.unmountComponentAtNode(div);
  div.remove();
}
