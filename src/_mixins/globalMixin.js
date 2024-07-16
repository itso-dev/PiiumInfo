import router from '@/_router';
import { useCommonStore } from '@/_stores';

export default {
  methods: {
    goToMyProfile() {
      const commonStore = useCommonStore();
      router.push({ name: "Page", params: { profile: commonStore.member.link } });
    },
    goToLanding() {
      return window.open('https://info.nopi.io/', "_blank");
    },
    goToHref(url) {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }
      return window.open(url, "_blank");
    },
    goToPage(name) {
      router.push({ name: name });
    },
    goToDetail(name, key) {
      router.push({ name: name, query: { key: key } });
    },
    goToId(name, id) {
      router.push({ name: name, query: { id: id } });
    },
    getFirstImagePath: (data) => {
      if (typeof data == "string") {
        if (
          data !== "" &&
          data !== "[]" &&
          typeof data !== "undefined" &&
          data != null
        ) {
          let file = JSON.parse(data);
          return `${import.meta.env.VITE_FILE_URL}/${file[0].path}`;
        }
      }
      return "";
    },
    getImagePath: (data) => {
      return `${import.meta.env.VITE_FILE_URL}/${data}`;
    },
    getFileDownPath: (data) => {
      location.href = `${import.meta.env.VITE_API_URL}/file/download?path=${data.path}&name=${data.name}`;
    },
    getFile: (data) => {
      if (
        data !== "" &&
        data !== "[]" &&
        typeof data !== "undefined" &&
        data != null
      ) {
        return JSON.parse(data);
      } else {
        return null
      }
    },
    addComma(number) {
      if (isNaN(number)) {
        // 문자일 경우 0으로 대체
        number = 0;
      }
      // 리턴값 문자열O 숫자X
      if (Number(number) > 999) {
        const result = Number.isInteger(number)
          ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : 0;
        return result;
      } else {
        return String(number);
      }
    },
    formatNumberHits(value) {
      //조회수 1000단위 넘어갈시 K 표시
      if (value >= 1000 && value < 1000000) {
        return (value / 1000).toFixed(1) + 'k';
      } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
      }
      return String(value);
    },
    getPageNums(total, pages) {
      pages.pagesList = [];
      pages.end_page = Math.ceil(total / pages.page_block)
      let pagesList = [];

      pages.start = (Math.ceil(pages.page / pages.num_block) - 1) * pages.num_block + 1;
      pages.end = pages.start + pages.num_block;
      if (pages.end > pages.end_page) {
        pages.end = pages.end_page + 1;
      }

      for (let i = pages.start; i < pages.end; i++) {
        pages.pagesList.push(i)
      }
    },
    removeHashtag(data) {
      const regExp = /#/g;
      return data.replace(regExp, '');
    },
    unspaced(data) {
      const regExp = /\s/g;
      return data.replace(regExp, '');
    },
    onlyNumber(data) {
      const regExp = /[^0-9]/g;
      return data.replace(regExp, '');
    },
    onlyText(data) {
      // return data.replace(/[^\w\s]/gi, '');
      return data;
    },
    onlyEnglish(data) {
      const regExp = /^[a-z|A-Z]+/;
      return data.replace(regExp, '');
    },
    checkText(data) {
      const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+/;
      return regExp.test(data);
    },
    checkEnglish(data) {
      const regExp = /^[a-z|A-Z]+/;
      return regExp.test(data);
    },
    onlyLink(data) {
      const regExp = /[^a-zA-Z0-9_]+/;
      return data.replace(regExp, '');
    },
    checkEnglishNum(data) {
      const regExp = /[^a-zA-Z0-9_]+/;
      return regExp.test(data);
    },
    checkLink(data) {
      const regExp = /^(https?:\/\/)[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?$/i;
      const httpPattern = /^http:\/\//i;
      const httpsPattern = /^https:\/\//i;

      if (!httpPattern.test(data) && !httpsPattern.test(data)) {
        data = "https://" + data;
      }

      return data;
    },
  }
};
