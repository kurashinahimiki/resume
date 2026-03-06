import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  currentLang: 'zh' | 'en' | 'jp' = 'en';

  title = 'resume';
  resumeData = {
    zh: {
      name: '李彥鋒',
      position: '現居台灣',
      skills: '技能',
      cpu_languages: '程式語言',
      frameworks: '開發框架',
      Databases_Tools: '資料庫和工具',
      education: '教育程度',
      school: '中原大學',
      department: '電子工程學系 學士',
      language: '語言能力',
      chinese: '中文',
      chinese_level: '母語',
      japanese: '日文',
      english: '英文',
      profile: '個人簡介',
      profile_content: '具備全端開發經驗的 <strong>Java 後端工程師</strong>，專長於構建可擴展的 API 與自動化流程。具備團隊合作經驗，熱衷於利用技術提升用戶效率。目前正努力考取日檢 N1 以應對全球化技術環境。',
      experience: '經歷',
      exp_title: '<strong>Java 全端開發實務班</strong> | 專案：GOGOBUY',
      exp_list: [
        '使用 <strong>Java</strong> 設計並實作商店管理與銷售統計的 RESTful APIs。',
        '開發<strong>圖像識別系統</strong>，實現商店資料自動輸入，顯著減少人工登錄時間。',
        '與前端工程師合作，使用 <strong>Angular</strong> 確保數據無縫整合。'
      ],
      projects: '專案作品',
      project_title: '<strong>GOGOBUY - 團購平台</strong>',
      project_list: [
        '<strong>後端重點：</strong>開發提供即時數據洞察的銷售分析模組。',
        '<strong>創新技術：</strong>整合 <strong>OCR/物件偵測</strong> 技術以簡化商家入駐流程。',
        '<strong>開發工具：</strong>Eclipse, Git/GitHub, MySQL。'
      ]

    },
    en: {
      name: 'YENFENG LEE',
      position: 'Based in Taiwan (Open to Relocation to Japan)',
      skills: 'SKILLS',
      cpu_languages: 'Languages',
      frameworks: 'Frameworks',
      Databases_Tools: 'Databases & Tools',
      education: 'EDUCATION',
      school: 'Chung Yuan Christian University (CYCU)',
      department: 'Bachelor of Electronic Engineering',
      language: 'LANGUAGES',
      chinese: 'Chinese',
      chinese_level: 'Native',
      japanese: 'Japanese',
      english: 'English',
      profile: 'PROFILE',
      profile_content: '<strong>Java Backend Engineer</strong> with full-stack development experience, specializing in building scalable APIs and automating manual processes. Proven ability to work in agile teams and passionate about leveraging technology to improve user efficiency. Currently advancing Japanese proficiency to N1.',
      experience: 'EXPERIENCE',
      exp_title: '<strong>Java Full-Stack Development Program</strong> | Group Project: GOGOBUY',
      exp_list: [
        'Designed and implemented RESTful APIs for store management and sales statistics using <strong>Java</strong>.',
        'Engineered an <strong>Image Recognition System</strong> to automate store data entry, reducing manual input time significantly.',
        'Collaborated with front-end developers using <strong>Angular</strong> to ensure seamless data integration.'
      ],
      projects: 'PROJECTS',
      project_title: '<strong>GOGOBUY - Groupbuy Platform</strong>',
      project_list: [
        '<strong>Backend Focus:</strong> Developed sales analytics modules providing real-time data insights.',
        '<strong>Innovation:</strong> Integrated <strong>OCR/Object Detection</strong> to streamline merchant onboarding.',
        '<strong>Tools:</strong> Eclipse, Git/GitHub, MySQL.'
      ]
    },
    jp: {
      name: 'LEE YENFENG',
      position: '台湾在住（日本への転居・赴任可能）',
      skills: 'スキル',
      cpu_languages: 'プログラミング言語',
      frameworks: 'フレームワーク',
      Databases_Tools: 'DB・ツール',
      education: '学歴',
      school: '中原大学（台湾）',
      department: '電子工学科卒業（学士）',
      language: '語学力',
      chinese: '中国語',
      chinese_level: '母国語',
      japanese: '日本語',
      english: '英語',
      profile: '自己紹介',
      profile_content: 'フルスタック開発の経験を持つ <strong>Javaバックエンドエンジニア</strong>です。スケーラブルなAPI構築や業務自動化を得意としています。アジャイルチームでの開発経験があり、現在はグローバルな環境で活躍するため、日本語能力試験N1取得を目指しています。',
      experience: '職務経歴',
      exp_title: '<strong>Javaフルスタック開発研修</strong> | プロジェクト：GOGOBUY',
      exp_list: [
        '<strong>Java</strong>を用いた店舗管理および売上統計用RESTful APIの設計・実装。',
        '<strong>画像認識システム</strong>を導入し、店舗データ入力作業の自動化を実現（作業時間を大幅に短縮）。',
        '<strong>Angular</strong>を使用し、フロントエンドとバックエンドのシームレスなデータ連携を実現。'
      ],
      projects: '主要プロジェクト',
      project_title: '<strong>GOGOBUY - 共同購入プラットフォーム</strong>',
      project_list: [
        '<strong>バックエンド：</strong>リアルタイムなデータ分析を可能にする売上管理モジュールの開発。',
        '<strong>イノベーション：</strong><strong>OCR/物体検知</strong>技術を統合し、加盟店の登録プロセスを簡素化。',
        '<strong>ツール：</strong>Eclipse, Git/GitHub, MySQL。'
      ]
    }
  }

  // 文本閘
  get content() {
    return this.resumeData[this.currentLang];
  }

  // 切換
  setLanguage(lang: 'zh' | 'en' | 'jp') {
    this.currentLang = lang;

  }
}
