const questions = {
  "G1": {
    "Logic": [
      { "q": "小明排队，从前数第5，从后数第8，一共几人？", "a": "12", "exp": "5+8-1=12" },
      { "q": "红盒不在左，蓝盒在右，黄盒在哪？", "a": "左", "exp": "排除法" }
    ],
    "Arithmetic": [
      { "q": "1+2+3+4+5+6+7+8+9+10=?", "a": "55", "exp": "首尾相加法" }
    ],
    // 更多专题...
  },
  "G4": {
    "NumberTheory": [
      { "q": "一个数除以5余3，除以6余4，这个数最小是多少？", "a": "28", "exp": "最小公倍数减2" }
    ],
    "Geometry": [
      { "q": "正方形边长增加1倍，面积增加几倍？", "a": "3", "exp": "变为原来的4倍，增加3倍" }
    ]
  }
  // 此处已预留各年级六大专题接口...
};

exports.handler = async (event) => {
  const { grade, category } = event.queryStringParameters;
  const data = questions[grade] ? (questions[grade][category] || []) : [];
  
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  };
};