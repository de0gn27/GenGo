const url = window.location;
const params = new URLSearchParams(url.search);
const lr = params.get("lr");
let selected: string | null;
if (lr) {
  selected = lr.replace("lang_", "");
} else {
  selected = null;
}

const form = document.createElement("form");
const controlTabs = document.getElementById("hdtb-msb");
controlTabs.appendChild(form);

const select = document.createElement("select");
select.id = "langSelect";
const languageCodes = [
  "-----",
  "af",
  "ar",
  "hy",
  "be",
  "bg",
  "ca",
  "zh-CN",
  "zh-TW",
  "hr",
  "cs",
  "da",
  "nl",
  "en",
  "eo",
  "et",
  "tl",
  "fi",
  "fr",
  "de",
  "el",
  "iw",
  "hi",
  "hu",
  "is",
  "id",
  "it",
  "ja",
  "ko",
  "lv",
  "lt",
  "no",
  "fa",
  "pl",
  "pt",
  "ro",
  "ru",
  "sr",
  "sk",
  "sl",
  "es",
  "sw",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
];
for (const code of languageCodes) {
  const option = document.createElement("option");
  if (code == "-----") {
    option.value = null;
    option.text = code;
  } else {
    option.value = code;
    option.text = new Intl.DisplayNames(navigator.language, {
      type: "language",
    }).of(code);
  }
  select.add(option);
}
select.value = selected;
select.onchange = () => {
  params.set("lr", `lang_${select.value}`);
  window.location.assign(
    url.toString().split("?")[0] + "?" + params.toString()
  );
};
form.appendChild(select);
