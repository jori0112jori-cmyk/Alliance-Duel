const duelData = [
    { // Day 0: 月曜日
        title: { ja: '月曜日 (レーダー特訓)', en: 'Monday (Radar Training)' },
        actions: [
            { text: { ja: 'APを1消費する', en: 'Use 1 Stamina' }, points: 375, id: 'action_0_0' },
            { text: { ja: 'レーダークエストを1回クリアする', en: 'Complete 1 Radar task' }, points: 30000, id: 'action_0_1' },
            { text: { ja: '一度に英雄EXPを660以上消費する', en: 'Use at least 660+ Hero EXP' }, points: 2.5, id: 'action_0_2' },
            { text: { ja: 'ドローン戦闘データを1消費する', en: 'Use 1 Drone Battle Data' }, points: 7.5, id: 'action_0_3' },
            { text: { ja: 'ドローンギアを1個消費する', en: 'Use 1 Drone part' }, points: 6250, id: 'action_0_4' },
            { text: { ja: 'パック購入ダイヤを1個購入', en: 'Buy Packs (1 Diamond)' }, points: 30, id: 'action_0_5' },
            { text: { ja: '食料を100採取する', en: 'Gather 100 Food' }, points: 50, id: 'action_0_6' },
            { text: { ja: '鋼材を100採取する', en: 'Gather 100 Iron' }, points: 50, id: 'action_0_7' },
            { text: { ja: '金貨を60採取する', en: 'Gather 60 Coins' }, points: 50, id: 'action_0_8' },
            { text: { ja: 'チップ宝箱Nを開ける', en: 'Open Chip Chest (N)' }, points: 2812.5, id: 'action_0_9' },
            { text: { ja: 'チップ宝箱SRを開ける', en: 'Open Chip Chest (SR)' }, points: 14062.5, id: 'action_0_10' },
            { text: { ja: 'チップ宝箱SSRを開ける', en: 'Open Chip Chest (SSR)' }, points: 84375, id: 'action_0_11' },
            { text: { ja: 'チップ宝箱URを開ける', en: 'Open Chip Chest (UR)' }, points: 281250, id: 'action_0_12' }
        ]
    },
    { // Day 1: 火曜日
        title: { ja: '火曜日 (基地建設)', en: 'Tuesday (Base Expansion)' },
        actions: [
            { text: { ja: '建造時間を1分間短縮', en: '1-min Construction Speed-up' }, points: 150, id: 'action_1_0' },
            { text: { ja: '施設建設で戦力を1獲得', en: 'Increase Building Power by 1' }, points: 30, id: 'action_1_1' },
            { text: { ja: 'UR貿易輸送車を1回発車', en: 'Dispatch UR Trade Truck' }, points: 300000, id: 'action_1_2' },
            { text: { ja: 'UR極秘任務を1回遂行', en: 'Perform 1 UR secret task' }, points: 225000, id: 'action_1_3' },
            { text: { ja: 'パック購入ダイヤを1個購入', en: 'Buy Packs (1 Diamond)' }, points: 30, id: 'action_1_4' },
            { text: { ja: '生存者募集を1回行う', en: 'Recruit Survivor' }, points: 4500, id: 'action_1_5' },
            { text: { ja: '兵装素材を1個使う', en: 'Use 1 Armament Material' }, points: 2.5, id: 'action_1_6' },
            { text: { ja: '兵装コアを1個使う', en: 'Use 1 Armament Core' }, points: 6250, id: 'action_1_7' }
        ]
    },
    { // Day 2: 水曜日
        title: { ja: '水曜日 (科学研究)', en: 'Wednesday (Age of Science)' },
        actions: [
            { text: { ja: '科学研究時間を1分間短縮', en: '1-min Research Speedup' }, points: 150, id: 'action_2_0' },
            { text: { ja: '科学研究で戦力を1獲得', en: 'Increase Tech Power by 1' }, points: 30, id: 'action_2_1' },
            { text: { ja: '栄光の勲章を1枚消費', en: 'Use 1 Valor Badge' }, points: 750, id: 'action_2_2' },
            { text: { ja: 'レーダークエストを1回クリア', en: 'Complete 1 Radar task' }, points: 30000, id: 'action_2_3' },
            { text: { ja: 'パック購入ダイヤを1個購入', en: 'Buy Packs (1 Diamond)' }, points: 30, id: 'action_2_4' },
            { text: { ja: 'Lv.1ドローン部品宝箱を開ける', en: 'Lv.1 Drone Chest' }, points: 2750, id: 'action_2_5' },
            { text: { ja: 'Lv.2ドローン部品宝箱を開ける', en: 'Lv.2 Drone Chest' }, points: 8250, id: 'action_2_6' },
            { text: { ja: 'Lv.3ドローン部品宝箱を開ける', en: 'Lv.3 Drone Chest' }, points: 25000, id: 'action_2_7' },
            { text: { ja: 'Lv.4ドローン部品宝箱を開ける', en: 'Lv.4 Drone Chest' }, points: 75000, id: 'action_2_8' },
            { text: { ja: 'Lv.5ドローン部品宝箱を開ける', en: 'Lv.5 Drone Chest' }, points: 225000, id: 'action_2_9' },
            { text: { ja: 'Lv.6ドローン部品宝箱を開ける', en: 'Lv.6 Drone Chest' }, points: 675000, id: 'action_2_10' },
            { text: { ja: 'Lv.7ドローン部品宝箱を開ける', en: 'Lv.7 Drone Chest' }, points: 2025000, id: 'action_2_11' }
        ]
    },
    { // Day 3: 木曜日
        title: { ja: '木曜日 (英雄育成)', en: 'Thursday (Train Heroes)' },
        actions: [
            { text: { ja: '英雄募集を1回行う', en: 'Elite Recruit' }, points: 4500, id: 'action_3_0' },
            { text: { ja: '一度に英雄EXPを660以上消費', en: 'Use 660+ Hero EXP' }, points: 2.5, id: 'action_3_1' },
            { text: { ja: 'UR英雄かけらを1枚消費', en: 'Use 1 Legendary Shard' }, points: 25000, id: 'action_3_2' },
            { text: { ja: 'SSR英雄かけらを1枚消費', en: 'Use 1 Epic Shard' }, points: 8750, id: 'action_3_3' },
            { text: { ja: 'SR英雄かけらを1枚消費', en: 'Use 1 Rare Shard' }, points: 2500, id: 'action_3_4' },
            { text: { ja: 'スキルメダルを1枚消費', en: 'Use 1 Skill Medal' }, points: 25, id: 'action_3_5' },
            { text: { ja: 'パック購入ダイヤを1個購入', en: 'Buy Packs (1 Diamond)' }, points: 30, id: 'action_3_6' },
            { text: { ja: '専用武装のかけらを1枚消費', en: 'Use Exclusive Weapon shard' }, points: 25000, id: 'action_3_7' }
        ]
    },
    { // Day 4: 金曜日
        title: { ja: '金曜日 (戦争準備)', en: 'Friday (Total Mobilization)' },
        actions: [
            { text: { ja: 'レーダークエストを1回クリア', en: 'Complete 1 Radar task' }, points: 30000, id: 'action_4_0' },
            { text: { ja: '建造時間を1分間短縮', en: '1-min Construction Speed-up' }, points: 150, id: 'action_4_1' },
            { text: { ja: '施設建設で戦力を1獲得', en: 'Increase Building Power by 1' }, points: 30, id: 'action_4_2' },
            { text: { ja: '科学研究時間を1分間短縮', en: '1-min research Speed-up' }, points: 150, id: 'action_4_3' },
            { text: { ja: '科学研究で戦力を1獲得', en: 'Increase Tech Power by 1' }, points: 30, id: 'action_4_4' },
            { text: { ja: '訓練時間を1分間短縮', en: '1-min Training Speed-up' }, points: 150, id: 'action_4_5' },
            { text: { ja: 'Lv.1兵士を1人訓練', en: 'Train Lv.1 unit' }, points: 60, id: 'action_4_6' },
            { text: { ja: 'Lv.5兵士を1人訓練', en: 'Train Lv.5 unit' }, points: 180, id: 'action_4_10' },
            { text: { ja: 'Lv.7兵士を1人訓練', en: 'Train Lv.7 unit' }, points: 240, id: 'action_4_12' },
            { text: { ja: 'Lv.8兵士を1人訓練', en: 'Train Lv.8 unit' }, points: 270, id: 'action_4_13' },
            { text: { ja: 'Lv.9兵士を1人訓練', en: 'Train Lv.9 unit' }, points: 300, id: 'action_4_14' },
            { text: { ja: 'Lv.10兵士を1人訓練', en: 'Train Lv.10 unit' }, points: 330, id: 'action_4_15' },
            { text: { ja: 'パック購入ダイヤを1個購入', en: 'Buy Packs (1 Diamond)' }, points: 30, id: 'action_4_16' },
            { text: { ja: 'ドミネーターのかけらを消費', en: 'Overlord Promotion Shard' }, points: 25000, id: 'action_4_17' },
            { text: { ja: '訓練ノートを100個消費', en: '100 Training Guidebooks' }, points: 1562.5, id: 'action_4_18' }
        ]
    },
    { // Day 5: 土曜日
        title: { ja: '土曜日 (連盟奇襲)', en: 'Saturday (Enemy Buster)' },
        actions: [
            { text: { ja: 'UR貿易輸送車を1回発車', en: 'Dispatch UR Trade Truck' }, points: 30000, id: 'action_5_0' },
            { text: { ja: 'UR極秘任務を1回遂行', en: 'Legendary Secret Task' }, points: 225000, id: 'action_5_1' },
            { text: { ja: '建造時間を1分間短縮', en: '1-min Construction Speedup' }, points: 150, id: 'action_5_2' },
            { text: { ja: '科学研究時間を1分間短縮', en: '1-min Research Speedup' }, points: 150, id: 'action_5_3' },
            { text: { ja: '訓練時間を1分間短縮', en: '1-min Training Speedup' }, points: 150, id: 'action_5_4' },
            { text: { ja: '治療時間を1分間短縮', en: 'Healing Speedup' }, points: 150, id: 'action_5_5' },
            { text: { ja: '相手連盟Lv.8兵士を撃破', en: 'Kill Rival Lv.8 Unit' }, points: 132.7, id: 'action_5_13' },
            { text: { ja: '相手連盟Lv.9兵士を撃破', en: 'Kill Rival Lv.9 Unit' }, points: 147.5, id: 'action_5_14' },
            { text: { ja: '相手連盟Lv.10兵士を撃破', en: 'Kill Rival Lv.10 Unit' }, points: 151.3, id: 'action_5_15' },
            { text: { ja: 'Lv.8兵士を撃破', en: 'Kill Lv.8 Unit' }, points: 26.5, id: 'action_5_23' },
            { text: { ja: 'Lv.9兵士を撃破', en: 'Kill Lv.9 Unit' }, points: 29.5, id: 'action_5_24' },
            { text: { ja: 'Lv.10兵士を撃破', en: 'Kill Lv.10 Unit' }, points: 32.4, id: 'action_5_25' },
            { text: { ja: 'パック購入ダイヤを1個購入', en: 'Buy Packs (1 Diamond)' }, points: 30, id: 'action_5_26' }
        ]
    }
];

const i18n = {
    ja: {
        pageTitle: '連盟対決 ポイント計算', daySelectLabel: '曜日選択', saveButton: '保存', resetButton: 'リセット',
        resetAllButton: '全リセット', tableHeaderAction: '行動内容', tableHeaderPoints: 'ポイント',
        tableHeaderQuantity: '数量', tableHeaderAcquired: '獲得ポイント', tableHeaderClear: 'クリア',
        totalPointsLabel: '合計獲得ポイント', alertDataSaved: 'データを保存しました',
        confirmResetDay: '現在の日の数値をリセットしますか？',
        alertDayResetted: 'リセットしました',
        confirmResetAll: '全てのデータを完全に削除しますか？',
        alertAllResetted: '全データをリセットしました'
    },
    en: {
        pageTitle: 'Duel Point Calc', daySelectLabel: 'Select Day', saveButton: 'Save', resetButton: 'Reset',
        resetAllButton: 'Reset All', tableHeaderAction: 'Action', tableHeaderPoints: 'Pts',
        tableHeaderQuantity: 'Qty', tableHeaderAcquired: 'Total', tableHeaderClear: 'Clear',
        totalPointsLabel: 'Total', alertDataSaved: 'Data Saved!',
        confirmResetDay: 'Reset current day?',
        alertDayResetted: 'Reset Complete',
        confirmResetAll: 'Reset ALL data?',
        alertAllResetted: 'All Data Reset'
    }
};

const TARGET_SCORE = 7200000;

let currentLang = 'ja';
let currentDayIndex = 0;
let allDaysData = [];
let lockedStates = {};

const timeActionsKeywords = ["action_1_0", "action_2_0", "action_4_1", "action_4_3", "action_4_5", "action_5_2", "action_5_3", "action_5_4", "action_5_5"];
const heroExpActionKeywords = ["action_0_2", "action_3_1"];

// ▼▼▼ 修正: 入力時の挙動を安定化 ▼▼▼
function createNumericInput(value, onBlur, readOnly = false) {
    const input = document.createElement('input');
    input.type = 'text'; 
    input.inputMode = 'decimal'; 
    input.value = value;
    input.readOnly = readOnly;
    
    if(readOnly) input.classList.add('locked-input');

    // フォーカス時の全選択を少し遅延させる（スマホでの挙動安定のため）
    input.onfocus = function() {
        setTimeout(() => {
            this.select();
        }, 50);
    };
    
    input.onblur = onBlur;
    return input;
}

function showToast(message) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('calculatorLanguage', lang);
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (i18n[lang] && i18n[lang][key]) {
            element.textContent = i18n[lang][key];
        }
    });
    document.title = i18n[lang]['pageTitle'];

    const langToggleBtn = document.getElementById('langToggleBtn');
    const flag_us_svg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 741 390'%3E%3Crect width='741' height='390' fill='%23B22234'/%3E%3Cpath d='M0,30H741 M0,90H741 M0,150H741 M0,210H741 M0,270H741 M0,330H741' stroke='%23fff' stroke-width='30'/%3E%3Crect width='390' height='210' fill='%233C3B6E'/%3E%3C/svg%3E";
    const flag_jp_svg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3E%3Crect fill='%23fff' width='900' height='600'/%3E%3Ccircle fill='%23bc002d' cx='450' cy='300' r='180'/%3E%3C/svg%3E";
    langToggleBtn.innerHTML = (lang === 'ja') ? `<img src="${flag_us_svg}" alt="Switch to English">` : `<img src="${flag_jp_svg}" alt="日本語に切り替える">`;

    initDaySelect();
    renderTable();
}

function formatNumber(num) {
    if (num === null || isNaN(num)) return '';
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function formatWithUnit(num) {
    if (num === null || isNaN(num) || num === 0) return '';
    if (num < 1000) return num.toString();
    let formatted;
    if (num >= 1000000000) {
        formatted = (num / 1000000000).toFixed(2) + 'G';
    } else if (num >= 1000000) {
        formatted = (num / 1000000).toFixed(2) + 'M';
    } else {
        formatted = (num / 1000).toFixed(2) + 'K';
    }
    return formatted.replace(/\.00(?=[a-zA-Z])/, '').replace(/(\.\d)0(?=[a-zA-Z])/, '$1');
}

function cleanAndParseNumber(value) {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string' || value.trim() === '') return 0;
    let cleanedValue = value.replace(/,/g, '').trim().toLowerCase();
    let multiplier = 1;
    if (cleanedValue.endsWith('g')) {
        multiplier = 1000000000;
        cleanedValue = cleanedValue.slice(0, -1);
    } else if (cleanedValue.endsWith('m')) {
        multiplier = 1000000;
        cleanedValue = cleanedValue.slice(0, -1);
    } else if (cleanedValue.endsWith('k')) {
        multiplier = 1000;
        cleanedValue = cleanedValue.slice(0, -1);
    }
    let num = parseFloat(cleanedValue);
    return (isNaN(num) || num < 0) ? 0 : num * multiplier;
}

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('pointCalculationData');
    if (storedData) {
        try {
            const parsedData = JSON.parse(storedData);
            return duelData.map((dayDefinition, i) => {
                const storedDayData = (parsedData && Array.isArray(parsedData) && parsedData.length > i) ? parsedData[i] : null;
                return dayDefinition.actions.map((originalAction, j) => {
                    const storedActionData = (storedDayData && Array.isArray(storedDayData) && storedDayData.length > j) ? storedDayData[j] : null;
                    const pointsPerUnit = storedActionData && storedActionData[1] !== undefined ? cleanAndParseNumber(storedActionData[1]) : originalAction.points;
                    const quantity = storedActionData && storedActionData[2] !== undefined ? cleanAndParseNumber(storedActionData[2]) : 0;
                    const totalPoints = storedActionData && storedActionData[3] !== undefined ? cleanAndParseNumber(storedActionData[3]) : 0;
                    return [originalAction.id, pointsPerUnit, quantity, totalPoints];
                });
            });
        } catch (e) { return initializeDefaultData(); }
    }
    return initializeDefaultData();
}

function initializeDefaultData() {
    return duelData.map(day => day.actions.map(action => [action.id, action.points, 0, 0]));
}

function loadLockedStates() {
    try {
        return JSON.parse(localStorage.getItem('pointCalculationLockedStates')) || {};
    } catch (e) { return {}; }
}

allDaysData = loadDataFromLocalStorage();
lockedStates = loadLockedStates();

function saveAllData() {
    localStorage.setItem('pointCalculationData', JSON.stringify(allDaysData));
    localStorage.setItem('pointCalculationLockedStates', JSON.stringify(lockedStates));
}

function renderTable() {
    const container = document.getElementById("tableContainer");
    container.innerHTML = '';
    const table = document.createElement('table');
    const thead = table.createTHead();
    const tbody = table.createTBody();
    const tfoot = table.createTFoot();

    const t = i18n[currentLang];
    const headers = [t.tableHeaderAction, t.tableHeaderPoints, t.tableHeaderQuantity, t.tableHeaderAcquired, t.tableHeaderClear];
    
    const headerRow = thead.insertRow();
    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    const currentDayActions = duelData[currentDayIndex].actions;

    allDaysData[currentDayIndex].forEach((actionData, index) => {
        const [actionId, pointsPerUnit, quantity, totalPoints] = actionData;
        const actionInfo = currentDayActions[index];
        const row = tbody.insertRow();
        const isLocked = lockedStates[currentDayIndex]?.[index];

        const actionCell = row.insertCell();
        actionCell.className = 'action-name';
        actionCell.textContent = actionInfo.text[currentLang];
        actionCell.setAttribute('data-label', headers[0]);

        const pointsCell = row.insertCell();
        pointsCell.className = 'numeric';
        pointsCell.setAttribute('data-label', headers[1]);
        
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';
        
        const pointsInput = createNumericInput(
            formatNumber(pointsPerUnit),
            () => {
                allDaysData[currentDayIndex][index][1] = cleanAndParseNumber(pointsInput.value);
                recalculateRow(index, 'points');
            },
            isLocked
        );
        
        const lockButton = document.createElement('button');
        lockButton.className = `lock-btn ${isLocked ? 'locked' : ''}`;
        lockButton.innerHTML = `<i class="fas ${isLocked ? 'fa-lock' : 'fa-lock-open'}"></i>`;
        lockButton.onclick = () => handleLockToggle(index);
        buttonGroup.append(pointsInput, lockButton);
        pointsCell.appendChild(buttonGroup);

        const quantityCell = row.insertCell();
        quantityCell.className = 'numeric';
        quantityCell.setAttribute('data-label', headers[2]);

        if (timeActionsKeywords.includes(actionId)) {
            const timeWrapper = document.createElement('div');
            timeWrapper.className = 'time-inputs';
            const totalMinutes = quantity || 0;
            const d = Math.floor(totalMinutes / 1440);
            const h = Math.floor((totalMinutes % 1440) / 60);
            const m = totalMinutes % 60;
            
            const createTimeInput = (val, callback) => {
                const inp = document.createElement('input');
                inp.type = 'number';
                inp.inputMode = 'decimal';
                inp.value = val > 0 ? val : '';
                inp.onfocus = function() { 
                    setTimeout(() => { this.select(); }, 50); 
                };
                inp.onblur = callback;
                return inp;
            };

            const updateFromTime = () => {
                const newTotal = (cleanAndParseNumber(daysInput.value) * 1440) + (cleanAndParseNumber(hoursInput.value) * 60) + cleanAndParseNumber(minutesInput.value);
                allDaysData[currentDayIndex][index][2] = newTotal;
                recalculateRow(index, 'quantity');
            };

            const daysInput = createTimeInput(d, updateFromTime);
            const hoursInput = createTimeInput(h, updateFromTime);
            const minutesInput = createTimeInput(m, updateFromTime);
            
            timeWrapper.append(daysInput, document.createTextNode('d'), hoursInput, document.createTextNode('h'), minutesInput, document.createTextNode('m'));
            quantityCell.appendChild(timeWrapper);
        } else {
            const inputWrapper = document.createElement('div');
            inputWrapper.className = 'input-with-unit';
            const quantityInput = createNumericInput(
                formatWithUnit(quantity),
                () => {
                    allDaysData[currentDayIndex][index][2] = cleanAndParseNumber(quantityInput.value);
                    recalculateRow(index, 'quantity');
                }
            );
            inputWrapper.appendChild(quantityInput);
            quantityCell.appendChild(inputWrapper);
        }

        const totalPointsCell = row.insertCell();
        totalPointsCell.className = 'numeric';
        totalPointsCell.setAttribute('data-label', headers[3]);
        const totalPointsInput = createNumericInput(
            totalPoints === 0 ? '' : formatNumber(totalPoints),
            () => {
                allDaysData[currentDayIndex][index][3] = cleanAndParseNumber(totalPointsInput.value);
                recalculateRow(index, 'totalPoints');
            }
        );
        totalPointsCell.appendChild(totalPointsInput);

        const resetCell = row.insertCell();
        resetCell.setAttribute('data-label', headers[4]);
        resetCell.className = 'reset-cell-container';
        const resetButton = document.createElement('button');
        resetButton.className = 'reset-btn';
        resetButton.innerHTML = `<i class="fas ${window.innerWidth <= 768 ? 'fa-trash-alt' : 'fa-undo'}"></i> <span>${t.tableHeaderClear}</span>`;
        resetButton.onclick = () => handleActionReset(index);
        resetCell.appendChild(resetButton);
    });

    const totalRow = tfoot.insertRow();
    totalRow.className = 'total-row';
    const totalHeader = document.createElement('th');
    totalHeader.colSpan = 3;
    totalHeader.textContent = t.totalPointsLabel;
    const totalValue = document.createElement('td');
    totalValue.id = 'totalPoints';
    totalValue.className = 'numeric';
    const clearCell = document.createElement('td');
    totalRow.append(totalHeader, totalValue, clearCell);
    container.appendChild(table);
    
    updateDayTotalPoints();
}

function recalculateRow(rowIndex, lastEdited) {
    let [actionId, pointsPerUnit, quantity, totalPoints] = allDaysData[currentDayIndex][rowIndex];
    if (lastEdited === 'quantity' || lastEdited === 'points') {
        let multiplier = heroExpActionKeywords.includes(actionId) ? 1 / 660 : 1;
        totalPoints = Math.floor(quantity * pointsPerUnit * multiplier);
        allDaysData[currentDayIndex][rowIndex][3] = totalPoints;
    } else if (lastEdited === 'totalPoints') {
        if (pointsPerUnit > 0) {
            let multiplier = heroExpActionKeywords.includes(actionId) ? 660 : 1;
            quantity = Math.ceil((totalPoints / pointsPerUnit) * multiplier);
            allDaysData[currentDayIndex][rowIndex][2] = quantity;
        } else {
            allDaysData[currentDayIndex][rowIndex][2] = 0;
        }
    }
    renderTable();
    saveAllData();
}

function handleLockToggle(rowIndex) {
    if (!lockedStates[currentDayIndex]) lockedStates[currentDayIndex] = {};
    lockedStates[currentDayIndex][rowIndex] = !lockedStates[currentDayIndex][rowIndex];
    renderTable();
    saveAllData();
}

function handleActionReset(rowIndex) {
    const originalPointsValue = duelData[currentDayIndex].actions[rowIndex].points;
    const isLocked = lockedStates[currentDayIndex]?.[rowIndex];
    const pointsToSet = isLocked ? allDaysData[currentDayIndex][rowIndex][1] : originalPointsValue;
    allDaysData[currentDayIndex][rowIndex] = [allDaysData[currentDayIndex][rowIndex][0], pointsToSet, 0, 0];
    renderTable();
    saveAllData();
}

function resetCurrentDayData() {
    if (!confirm(i18n[currentLang].confirmResetDay)) return;
    const dayDefinition = duelData[currentDayIndex];
    allDaysData[currentDayIndex] = dayDefinition.actions.map((originalAction, j) => {
        const isLocked = lockedStates[currentDayIndex]?.[j];
        const pointsToSet = isLocked ? allDaysData[currentDayIndex][j][1] : originalAction.points;
        return [originalAction.id, pointsToSet, 0, 0];
    });
    renderTable();
    saveAllData();
    showToast(i18n[currentLang].alertDayResetted);
}

function resetAllDataConfirmation() {
    if (confirm(i18n[currentLang].confirmResetAll)) {
        localStorage.clear();
        allDaysData = initializeDefaultData();
        lockedStates = {};
        initDaySelect();
        renderTable();
        showToast(i18n[currentLang].alertAllResetted);
    }
}

function updateDayTotalPoints() {
    const sum = allDaysData[currentDayIndex].reduce((acc, actionData) => acc + cleanAndParseNumber(actionData[3]), 0);
    const formattedSum = formatNumber(sum);
    
    if (document.getElementById('totalPoints')) document.getElementById('totalPoints').textContent = formattedSum;
    if (document.getElementById('stickyTotalValue')) document.getElementById('stickyTotalValue').textContent = formattedSum;

    const percentage = Math.min((sum / TARGET_SCORE) * 100, 100);
    const progressBar = document.getElementById('stickyProgressBar');
    if(progressBar) {
        progressBar.style.width = percentage + '%';
        if(percentage >= 100) progressBar.style.backgroundColor = '#28a745';
        else progressBar.style.backgroundColor = 'var(--accent-color)';
    }
}

function initDaySelect() {
    const select = document.getElementById("daySelect");
    const selectedValue = select.value;
    select.innerHTML = '';
    duelData.forEach((day, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = day.title[currentLang];
        select.appendChild(option);
    });

    if (selectedValue) {
        select.value = selectedValue;
        currentDayIndex = parseInt(selectedValue, 10);
    } else {
        const lastSelectedDay = localStorage.getItem('lastSelectedDayIndex');
        if (lastSelectedDay !== null && parseInt(lastSelectedDay, 10) < duelData.length) {
            currentDayIndex = parseInt(lastSelectedDay, 10);
        } else {
            const now = new Date();
            let today = now.getDay();
            if (now.getHours() < 11) today = (today === 0) ? 6 : today - 1;
            currentDayIndex = (today + 6) % 7;
            if (currentDayIndex >= duelData.length) currentDayIndex = duelData.length - 1;
        }
        select.value = currentDayIndex;
    }
}

const saveFunction = () => {
    saveAllData();
    showToast(i18n[currentLang].alertDataSaved);
};

document.getElementById('saveBtn').onclick = saveFunction;
document.getElementById('resetDayBtn').onclick = resetCurrentDayData;
document.getElementById('resetAllBtn').onclick = resetAllDataConfirmation;
document.getElementById('stickySaveBtn').onclick = saveFunction;
document.getElementById('stickyResetDayBtn').onclick = resetCurrentDayData;
document.getElementById('stickyResetAllBtn').onclick = resetAllDataConfirmation;
document.getElementById('daySelect').onchange = (event) => {
    currentDayIndex = parseInt(event.target.value, 10);
    localStorage.setItem('lastSelectedDayIndex', currentDayIndex);
    renderTable();
};

// ▼▼▼ 修正: 画面の「横幅」が変わったときだけ再描画する（キーボードによる縦幅変化を無視） ▼▼▼
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        renderTable();
    }
});

window.onload = function() {
    const savedLang = localStorage.getItem('calculatorLanguage');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (i18n[browserLang] ? browserLang : 'ja');
    setLanguage(initialLang);

    document.getElementById('langToggleBtn').addEventListener('click', () => {
        setLanguage(currentLang === 'ja' ? 'en' : 'ja');
    });
    
    document.getElementById('tableContainer').style.visibility = 'visible';
    document.getElementById('tableContainer').style.opacity = '1';
};
