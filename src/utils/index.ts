export const getFeeling = (threshold?: number) => {
  if (!threshold) return 'π€'
  if (threshold < 0.2) {
    return 'π'
  }
  if (threshold < 0.3) {
    return 'π'
  }
  if (threshold < 0.5) {
    return 'π₯Ί'
  }
  if (threshold < 0.8) {
    return 'π¨'
  }
  return 'π€¬'
}

export const getKoreanLabel = <T extends string>(label: T) => {
  if (label === 'identity_attack') {
    return 'μΈμ κ³΅κ²© μ λ'
  }
  if (label === 'insult') {
    return 'λͺ¨μμ± μ λ'
  }
  if (label === 'obscene') {
    return 'μΈμ€ μ λ'
  }

  if (label === 'severe_toxicity') {
    return 'μ¬ν λ§ μ λ'
  }

  if (label === 'sexual_explicit') {
    return 'μ±μ  μμ μ λ'
  }

  if (label === 'threat') {
    return 'μνμ μΈ μ λ'
  }

  if (label === 'toxicity') {
    return 'λͺ»λλ§ μ λ'
  }
}
