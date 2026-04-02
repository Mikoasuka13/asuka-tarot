const tarotDeck = [ 
  {name:"愚者", upright:"纯真跃入未知，信任直觉开启新旅程。", reversed:"鲁莽、犹豫不决，因恐惧而止步。"},
  {name:"魔术师", upright:"专注力量，意志创造现实，奇迹显现。", reversed:"潜力分散，缺乏专注或操纵他人。"},
  {name:"女祭司", upright:"内在智慧低语，信任直觉看见隐藏真相。", reversed:"噪音遮蔽内心，忽视直觉或过于封闭。"},
  {name:"皇后", upright:"丰盛滋养环绕，拥抱创造与美。", reversed:"过度控制、自我关怀被忽略。"},
  {name:"皇帝", upright:"结构带来自由，理性守护领域。", reversed:"权威僵化、滥用权力或缺乏计划。"},
  {name:"教皇", upright:"寻找传统与归属，遵循既定灵性路径。", reversed:"打破旧框架，寻找属于自己的独特道路。"},
  {name:"恋人", upright:"价值观对齐带来和谐选择与结合。", reversed:"关系失衡，内心冲突或价值观不合。"},
  {name:"战车", upright:"意志驾驭一切，保持方向将获胜利。", reversed:"方向迷失，缺乏控制或过于激进。"},
  {name:"力量", upright:"温柔勇气胜过蛮力，耐心接纳阴影。", reversed:"自我怀疑，缺乏耐心或感到虚弱。"},
  {name:"隐士", upright:"向内探索寻找永恒智慧，享受孤独。", reversed:"过于孤立，忽视外界或不愿面对内心。"},
  {name:"命运之轮", upright:"变化即机遇，接受循环，幸运自来。", reversed:"抵抗命运。顺流而行。"},
  {name:"正义", upright:"因果清晰，诚实面对，真理显现。", reversed:"失衡不公，逃避责任或有失偏颇。"},
  {name:"倒吊人", upright:"新视角来自放下，牺牲带来顿悟。", reversed:"抗拒改变。释放吧。"},
  {name:"死神", upright:"旧我结束，新生开启，转变是祝福。", reversed:"恐惧结束，抗拒转变只会延长痛苦。"},
  {name:"节制", upright:"流动中找到平衡，对立融合。", reversed:"极端失衡，缺乏融合或缺乏耐心。"},
  {name:"恶魔", upright:"枷锁自铸，直面阴影即觉醒。", reversed:"你已准备挣脱枷锁，迈向自由。"},
  {name:"塔", upright:"虚假崩塌，真相解放，剧变带来新生。", reversed:"缓慢崩解，逃避变革只会痛苦更久。"},
  {name:"星星", upright:"希望疗愈降临，宇宙温柔守护。", reversed:"云暂时遮蔽，继续前行，光仍在。"},
  {name:"月亮", upright:"穿越幻象，直觉找到真实。", reversed:"恐惧是幻觉，真相浮现，看清道路。"},
  {name:"太阳", upright:"纯粹喜悦成功，生命高光时刻。", reversed:"云暂时遮蔽，继续前行，光明不减。"},
  {name:"审判", upright:"灵魂觉醒重生，回应内在呼唤。", reversed:"自我批判，忽视呼唤或不愿改变。"},
  {name:"世界", upright:"圆满完成，新起点达成和谐。", reversed:"还有一步未完，坚持到底。"},
  {name:"权杖王牌", upright:"灵感迸发、新机会、创造力与热情。", reversed:"灵感停滞、延误、缺乏动力。"},
  {name:"权杖二", upright:"长远计划、远见、做出决定、勇敢探索。", reversed:"计划不周、犹豫不决、局限在舒适区。"},
  {name:"权杖三", upright:"展望未来、耐心等待回报、拓展与合作。", reversed:"延误、距离导致对结果感到失望。"},
  {name:"权杖四", upright:"庆祝时刻、和谐家庭、巩固基础。", reversed:"内部不和、局势不稳定、缺乏庆祝。"},
  {name:"权杖五", upright:"竞争、冲突、观点碰撞、需要克服的挑战。", reversed:"避免冲突、达成妥协、厌倦竞争。"},
  {name:"权杖六", upright:"胜利、成功、获得公开认可、顺利进展。", reversed:"失败、缺乏认可、成功被推迟。"},
  {name:"权杖七", upright:"防御、面对挑战的勇气、坚定立场。", reversed:"放弃抵抗、缺乏勇气、过度防御。"},
  {name:"权杖八", upright:"迅速的行动、快速沟通、事情飞速进展。", reversed:"延误、由于混乱导致停滞、过度急躁。"},
  {name:"权杖九", upright:"坚持不懈、保持警惕、黎明前的最后冲刺。", reversed:"精疲力竭、放弃希望、过度警惕。"},
  {name:"权杖十", upright:"沉重的负担、压力、过度劳累但即将完成。", reversed:"被重担压垮、精疲力竭、无法完成目标。"},
  {name:"权杖侍从", upright:"充满好奇心、新消息、探索新机会。", reversed:"灵感停滞、犹豫不决、缺乏探索欲。"},
  {name:"权杖骑士", upright:"行动力强、充满热情、热爱冒险。", reversed:"冲动鲁莽、制造混乱、缺乏实际行动。"},
  {name:"权杖王后", upright:"自信、热情洋溢、极具创造力与独立性。", reversed:"缺乏安全感、犹豫不决、失去热情。"},
  {name:"权杖国王", upright:"强大的领导力、坚定的意志、成功与果断。", reversed:"滥用权力、制造混乱、缺乏领导统御力。"},
  {name:"圣杯王牌", upright:"情感的溢出、深刻的爱、直觉与新机会。", reversed:"情感阻塞、感到空虚、忽视直觉。"},
  {name:"圣杯二", upright:"深度的契合、和谐的伴侣关系、相互吸引。", reversed:"关系出现裂痕、不和谐、缺乏信任。"},
  {name:"圣杯三", upright:"欢庆、社交聚会、友谊的成功与喜悦。", reversed:"过度放纵社交、缺乏真正的庆祝。"},
  {name:"圣杯四", upright:"冷漠、沉思、错过眼前的机会。", reversed:"从封闭中走出、准备接受新机会。"},
  {name:"圣杯五", upright:"沉浸于悲伤、对失去感到遗憾。", reversed:"走出阴霾、接受现实的遗憾、重新寻找。"},
  {name:"圣杯六", upright:"纯真的怀旧、回忆童年、旧人重逢。", reversed:"沉溺于过去无法自拔、拒绝成长。"},
  {name:"圣杯七", upright:"面对众多选择时的迷茫、幻想、白日梦。", reversed:"看破幻象、做出明确选择、恢复清醒。"},
  {name:"圣杯八", upright:"主动离开现状、追寻更深的精神意义。", reversed:"害怕未知而拒绝离开、目标不明确。"},
  {name:"圣杯九", upright:"愿望成真、情感与物质的极大满足。", reversed:"表面满足内心空虚、过度贪婪。"},
  {name:"圣杯十", upright:"完美的情感归宿、家庭和睦、长久的幸福。", reversed:"家庭矛盾、失去内心的平静。"},
  {name:"圣杯侍从", upright:"富有想象力、情感细腻、新的消息。", reversed:"情感不成熟、逃避现实、容易受影响。"},
  {name:"圣杯骑士", upright:"浪漫主义者、追随内心的呼唤。", reversed:"情绪化、不切实际的幻想、缺乏责任感。"},
  {name:"圣杯王后", upright:"极强的直觉力、充满同理心、情感滋养。", reversed:"情绪泛滥、过度敏感、在情感中失去自我。"},
  {name:"圣杯国王", upright:"情绪的掌控者、成熟稳重、保持智慧。", reversed:"情绪操控、压抑真实感受、冷漠无情。"},
  {name:"宝剑王牌", upright:"理智的突破、清晰的思维、真理与新见解。", reversed:"思维混乱、判断失误、缺乏清晰的认知。"},
  {name:"宝剑二", upright:"闭上眼睛逃避现实、僵局、需要艰难抉择。", reversed:"打破僵局、看清真相、最终做出决定。"},
  {name:"宝剑三", upright:"心碎、情感上的痛苦、悲伤与失落。", reversed:"逐渐愈合、释放痛苦、从创伤中恢复。"},
  {name:"宝剑四", upright:"休息与恢复、暂时的退避、积蓄力量。", reversed:"被迫休息、精疲力竭、准备重新行动。"},
  {name:"宝剑五", upright:"不择手段的胜利、冲突、充满敌意的争吵。", reversed:"愿意和解、结束争端、意识到胜利的代价。"},
  {name:"宝剑六", upright:"渡过难关、向更平静的水域航行、过渡期。", reversed:"无法摆脱过去的阴影、过渡受到阻碍。"},
  {name:"宝剑七", upright:"欺骗、背叛、策略性的撤退、隐藏动机。", reversed:"谎言被揭穿、坦诚面对、改变欺骗的策略。"},
  {name:"宝剑八", upright:"自我设限、感到被困住、被消极思想束缚。", reversed:"解开束缚、获得自由的新视角、打破限制。"},
  {name:"宝剑九", upright:"焦虑、梦魇、内心的恐惧与精神上的折磨。", reversed:"恐惧逐渐消散、面对现实的阴影。"},
  {name:"宝剑十", upright:"彻底的失败、跌入谷底、但也意味着痛苦终结。", reversed:"从绝望中重生、最坏的情况已经过去。"},
  {name:"宝剑侍从", upright:"思维敏捷、好奇心强、保持警惕、新的消息。", reversed:"流言蜚语、思维散漫、缺乏行动的计划。"},
  {name:"宝剑骑士", upright:"目标明确、果断迅速、强势的沟通与行动。", reversed:"过于鲁莽、言语伤人、缺乏深思熟虑。"},
  {name:"宝剑王后", upright:"理智清醒、独立自主、洞察力强。", reversed:"过于冷酷、刻薄寡恩、因悲伤前线封闭内心。"},
  {name:"宝剑国王", upright:"绝对的理性、公正无私、强大的逻辑与智力。", reversed:"滥用智力、残忍无情、暴虐或不公正。"},
  {name:"星币王牌", upright:"物质上的新机会、繁荣的开端、显化与丰盛。", reversed:"错失良机、财务上的延误、缺乏长远规划。"},
  {name:"星币二", upright:"在变化中寻找平衡、灵活应对财务与时间分配。", reversed:"失去平衡、过度透支、难以兼顾多项事务。"},
  {name:"星币三", upright:"团队合作、精湛的技艺、共同构建长远目标。", reversed:"缺乏团队精神、技能不足、合作出现阻碍。"},
  {name:"星币四", upright:"保守与稳固、对物质的控制欲、安全感第一。", reversed:"极度贪婪或过度挥霍、打破固执、学会分享。"},
  {name:"星币五", upright:"物质匮乏、被排斥感、在寒冬中寻找帮助。", reversed:"精神和财务状况开始好转、度过艰难时期。"},
  {name:"星币六", upright:"慷慨与慈善、资源的分享、付出与获得的平衡。", reversed:"自私自利、不平等的施舍、财务上的不公平。"},
  {name:"星币七", upright:"停下来审视成果、耐心等待投资的回报。", reversed:"缺乏耐心、投资失败、努力没有得到应有回报。"},
  {name:"星币八", upright:"专注细节、勤奋工作、技能的提升与精进。", reversed:"由于追求完美导致的拖延、工作乏味。"},
  {name:"星币九", upright:"物质的富足、独立自主、享受劳动带来的成果。", reversed:"过度依赖他人、对财务感到不安全、失去独立。"},
  {name:"星币十", upright:"家族的繁荣、长期的稳定、财富与传统的传承。", reversed:"家族纠纷、财务损失、打破传统的束缚。"},
  {name:"星币侍从", upright:"脚踏实地、好学不倦、新的商业或学习机会。", reversed:"缺乏进步、目标不切实际、错失学习良机。"},
  {name:"星币骑士", upright:"勤奋可靠、按部就班、稳步实现长远目标。", reversed:"固执见、工作狂、或是过于懒惰缺乏动力。"},
  {name:"星币王后", upright:"务实滋养、物质上的安全感、享受生活的品质。", reversed:"过度物质主义、忽视内心需求、财务不安全感。"},
  {name:"星币国王", upright:"财富的掌控者、商业成功、极高的现实成就。", reversed:"过度追求金钱、贪婪无度、缺乏商业道德。"}
];

tarotDeck.forEach((card, index) => {
  let fileName = "";
  if (index <= 21) { let num = index < 10 ? "0" + index : index; fileName = `maj${num}.jpg`; }
  else if (index <= 35) { let num = index - 21; num = num < 10 ? "0" + num : num; fileName = `wands${num}.jpg`; }
  else if (index <= 49) { let num = index - 35; num = num < 10 ? "0" + num : num; fileName = `cups${num}.jpg`; }
  else if (index <= 63) { let num = index - 49; num = num < 10 ? "0" + num : num; fileName = `swords${num}.jpg`; }
  else { let num = index - 63; num = num < 10 ? "0" + num : num; fileName = `pents${num}.jpg`; }
  card.image = `./images/${fileName}`;
});

function getCosmicRandom() {
  const cryptoObj = window.crypto || window.msCrypto;
  const array = new Uint32Array(1);
  cryptoObj.getRandomValues(array);
  return array[0] / 4294967296;
}

let selectedCards = [];
let maxToSelect = 3;
let currentWheelRotation = 0;
let isDragging = false;
let startX = 0;
let lastRotation = 0;
let hasDragged = false; 
let isShuffling = false;
let ringRadius = 700; 

// Particle、catCursor、animateTrail（完全不变）
const canvas = document.getElementById('trailCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1.2 - 0.6;
    this.speedY = Math.random() * 1.2 - 0.6;
    this.color = `hsl(${Math.random()*50 + 260}, 85%, 75%)`;
    this.alpha = 1;
  }
  update() { this.x += this.speedX; this.y += this.speedY; this.alpha -= 0.02; }
  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const catCursor = document.getElementById('catCursor');
window.addEventListener('mousemove', (e) => {
  catCursor.style.left = e.clientX + 'px';
  catCursor.style.top = e.clientY + 'px';
  for(let i = 0; i < 2; i++) particles.push(new Particle(e.clientX, e.clientY));
});
window.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  catCursor.style.left = touch.clientX + 'px';
  catCursor.style.top = touch.clientY + 'px';
  for(let i = 0; i < 2; i++) particles.push(new Particle(touch.clientX, touch.clientY));
}, {passive: true});

function animateTrail() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].alpha <= 0) particles.splice(i, 1);
  }
  requestAnimationFrame(animateTrail);
}
animateTrail();

const wheelWrapper = document.getElementById('wheelWrapper');
const cardContainer = document.getElementById('cardContainer');

function updateWheelTransform() {
  cardContainer.style.transform = `translateZ(-${ringRadius}px) rotateX(-7deg) rotateY(${currentWheelRotation}deg)`;
}

const startDrag = (e) => { if (isShuffling) return; isDragging = true; hasDragged = false; startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX; lastRotation = currentWheelRotation; cardContainer.style.transition = 'none'; };
const onDrag = (e) => { if (!isDragging) return; const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX; const deltaX = currentX - startX; if (Math.abs(deltaX) > 12) { hasDragged = true; if (e.type.includes('touch')) e.preventDefault(); } currentWheelRotation = lastRotation + deltaX * 0.45; updateWheelTransform(); };
const stopDrag = () => { isDragging = false; cardContainer.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'; };

wheelWrapper.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', onDrag);
window.addEventListener('mouseup', stopDrag);
wheelWrapper.addEventListener('touchstart', startDrag, {passive: true});
window.addEventListener('touchmove', onDrag, {passive: false});
window.addEventListener('touchend', stopDrag);

function shuffleAndShowDeck() {
  if(isShuffling) return;
  isShuffling = true;
  selectedCards = [];
  document.getElementById('drawSelected').style.display = 'none';
  const interpArea = document.getElementById('interpretation');
  interpArea.style.display = 'none';
  interpArea.innerHTML = '';
  cardContainer.innerHTML = '';

  const vw = window.innerWidth;
  // ==================== 关键调整：手机端像电脑端一样自然叠加 ====================
  ringRadius = vw < 600 ? 340 : 580;   // 适度缩小环 → 自然叠加

  currentWheelRotation = 0;
  cardContainer.style.transition = 'none';
  updateWheelTransform();

  let deck = [...tarotDeck];
  for (let round = 0; round < 3; round++) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(getCosmicRandom() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  const angleStep = 360 / deck.length; 
  deck.forEach((card, index) => {
    const cardElem = document.createElement('div');
    cardElem.className = 'deck-card';
    cardElem.innerHTML = `<div class="card-back"></div>`;

    const angle = index * angleStep;
    const tilt = Math.random() * 6 - 3;
    
    // 轻微偏移 → 自然叠加 + 不穿模
    const zOffset = Math.sin(index * 1.1) * 8;
    const yOffset = Math.cos(index * 0.8) * 3 - 2;

    const baseTransform = `rotateY(${angle}deg) rotateX(${tilt}deg) translateY(${yOffset}px) translateZ(${ringRadius + zOffset}px)`;
    cardElem.dataset.baseTransform = baseTransform;
    cardElem.style.transform = `rotateY(${angle}deg) rotateX(${tilt}deg) translateZ(0px) scale(0)`;

    const selectHandler = () => selectCard(cardElem, card, angle);
    cardElem.addEventListener('click', selectHandler);
    cardElem.addEventListener('touchend', (e) => {
      if (!hasDragged) {
        e.preventDefault();
        selectHandler();
      }
    });

    cardContainer.appendChild(cardElem);

    setTimeout(() => {
      cardElem.style.opacity = '1';
      cardElem.style.transform = baseTransform;
    }, index * 11 + 85); 
  });

  setTimeout(() => { 
    isShuffling = false; 
    cardContainer.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
  }, deck.length * 11 + 650);
}

function selectCard(elem, card, cardAngle) {
  if (hasDragged || isShuffling) return; 

  const isSelected = elem.classList.contains('selected');

  if (!isSelected && selectedCards.length >= maxToSelect) {
    alert(`命运的指引已满，最多选择 ${maxToSelect} 张牌 ✨`);
    return;
  }

  if (isSelected) {
    elem.classList.remove('selected');
    selectedCards = selectedCards.filter(c => c.name !== card.name);
    elem.style.transform = elem.dataset.baseTransform;
  } else {
    let targetRotation = -cardAngle; 
    let currentMod = currentWheelRotation % 360;
    let diff = targetRotation - currentMod;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    currentWheelRotation += diff;
    
    cardContainer.style.transition = 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)';
    updateWheelTransform();

    elem.classList.add('selected');
    card.isUpright = getCosmicRandom() > 0.5;
    selectedCards.push(card);
    
    setTimeout(() => {
      const isMobile = window.innerWidth < 600;
      const liftZ = isMobile ? 48 : 80;
      const scaleVal = isMobile ? 1.09 : 1.15;
      const liftY = isMobile ? -26 : -40;
      elem.style.transform = elem.dataset.baseTransform + ` translateY(${liftY}px) translateZ(${liftZ}px) scale(${scaleVal})`;
    }, 150);
  }

  document.getElementById('drawSelected').style.display = selectedCards.length === maxToSelect ? 'inline-block' : 'none';
}

document.getElementById('drawSelected').addEventListener('click', () => {
  const area = document.getElementById('interpretation');
  area.innerHTML = '';
  area.style.display = 'flex';

  selectedCards.forEach((card) => {
    const div = document.createElement('div');
    div.className = 'interp-card';
    const orient = card.isUpright ? '正位 ✨' : '逆位 🌑';
    const meaning = card.isUpright ? card.upright : card.reversed;
    const imgTransform = !card.isUpright ? 'transform:rotate(180deg)' : '';
    div.innerHTML = `
      <img src="${card.image}" onerror="this.src='https://via.placeholder.com/240x360/0d053d/ffd700?text=${card.name}'" style="${imgTransform}">
      <h3>${card.name}</h3>
      <small>${orient}</small>
      <p>${meaning}</p>
    `;
    area.appendChild(div);
  });
  area.scrollIntoView({behavior:'smooth'});
});

document.getElementById('shuffleBtn').addEventListener('click', shuffleAndShowDeck);
document.getElementById('spreadSelect').addEventListener('change', e => {
  maxToSelect = +e.target.value;
  shuffleAndShowDeck();
});

setTimeout(shuffleAndShowDeck, 100);