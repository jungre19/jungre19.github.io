import { CodeTabs } from "/Users/yangyia/Desktop/studySpace/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_tuvwlbujpyokprqyr3aix5d4u4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/yangyia/Desktop/studySpace/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_tuvwlbujpyokprqyr3aix5d4u4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/yangyia/Desktop/studySpace/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_tuvwlbujpyokprqyr3aix5d4u4/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};