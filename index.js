const _0x478e = [
  "env",
  "https:",
  "replace",
  "\x22\x20sound\x20name\x20\x22purr\x22",
  "POST",
  "dotenv",
  "application/json",
  "https://go.srsh.link/",
  "stringify",
  "node-fetch",
  "readSync",
  "clipboardy",
  "KEY_SC",
  "display\x20notification\x20\x22",
  "link",
  "applescript",
  "execString",
  "match",
  "json",
  "\x22\x20with\x20title\x20\x22Invalid\x20Link\x22\x20subtitle\x20\x22Make\x20sure\x20link\x20has\x20http\x20or\x20https\x22\x20sound\x20name\x20\x22glass\x22",
  "error",
  "KEY",
  "config",
];
(function (_0x5ade65, _0x478efb) {
  const _0x49f213 = function (_0x5614b1) {
    while (--_0x5614b1) {
      _0x5ade65.push(_0x5ade65.shift());
    }
  };
  _0x49f213(++_0x478efb);
})(_0x478e, 0x1e2);
const _0x49f2 = function (_0x5ade65, _0x478efb) {
  _0x5ade65 -= 0x0;
  const _0x49f213 = _0x478e[_0x5ade65];
  return _0x49f213;
};
const dotenv = require(_0x49f2("0x6"));
const fetch = require(_0x49f2("0xa"));
const clipboardy = require(_0x49f2("0xc"));
const applescript = require(_0x49f2("0x10"));
dotenv[_0x49f2("0x0")]();
const replaceHTTP = (_0x3adfcd) => {
  _0x3adfcd[_0x49f2("0x3")](/http:/, _0x49f2("0x2"));
};
const shortenNormal = async (_0x46472f) => {
  try {
    const _0x2a6f27 = await fetch("https://kutt.it/api/v2/links", {
      method: _0x49f2("0x5"),
      body: JSON[_0x49f2("0x9")]({
        target: _0x46472f,
        reuse: !![],
        domain: _0x49f2("0x8"),
      }),
      headers: {
        "content-type": _0x49f2("0x7"),
        "X-API-KEY": process[_0x49f2("0x1")][_0x49f2("0x16")],
      },
    });
    const _0x28ff39 = await _0x2a6f27[_0x49f2("0x13")]();
    return _0x28ff39[_0x49f2("0xf")];
  } catch (_0x4f4ab5) {
    console[_0x49f2("0x15")](_0x4f4ab5);
  }
};
const shortenScreenshot = async (_0x42139b) => {
  try {
    const _0x2649fd = await fetch("https://kutt.it/api/v2/links", {
      method: _0x49f2("0x5"),
      body: JSON[_0x49f2("0x9")]({
        target: _0x42139b,
        reuse: !![],
        domain: "https://sc.srsh.link/",
      }),
      headers: {
        "content-type": _0x49f2("0x7"),
        "X-API-KEY": process[_0x49f2("0x1")][_0x49f2("0xd")],
      },
    });
    const _0x70680 = await _0x2649fd[_0x49f2("0x13")]();
    return _0x70680[_0x49f2("0xf")];
  } catch (_0xb7cdf9) {
    console[_0x49f2("0x15")](_0xb7cdf9);
  }
};
const whatDomain = async (_0x253122) => {
  if (_0x253122[_0x49f2("0x12")](/^https:\/\/cln.sh\//)) {
    const _0x4fed4e = await shortenScreenshot(_0x253122);
    return _0x4fed4e;
  }
  const _0x3fed80 = await shortenNormal(_0x253122);
  return _0x3fed80;
};
const shortenURL = async (_0x49441f) => {
  const _0x4ef293 = await whatDomain(_0x49441f);
  return replaceHTTP(_0x4ef293), clipboardy.writeSync(_0x4ef293), _0x4ef293;
};
const run = async (_0x1949a7) => {
  if (_0x1949a7.match(/^http/)) {
    const _0x476a3d = `${
      _0x49f2("0xe") + _0x1949a7
    }\x22\x20with\x20title\x20\x22Link\x20Shortened\x22\x20subtitle\x20\x22${await shortenURL(
      _0x1949a7
    )}${_0x49f2("0x4")}`;
    applescript.execString(_0x476a3d);
  } else {
    const _0x10ee2f = _0x49f2("0xe") + _0x1949a7 + _0x49f2("0x14");
    applescript[_0x49f2("0x11")](_0x10ee2f);
  }
};
const targetLink = clipboardy[_0x49f2("0xb")]();
run(targetLink);
