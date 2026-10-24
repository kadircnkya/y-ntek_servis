const steps = [
  { title: 'Arayın ya da yazın', text: 'Nerede oturduğunuzu ve ne izlemek istediğinizi söyleyin. Çatının ya da balkonun fotoğrafı işi hızlandırır.' },
  { title: 'Yerinde keşif', text: 'Çanağın nereye gideceğine, hangi uyduya bakacağına ve kablonun nereden geçeceğine birlikte karar veririz.' },
  { title: 'Montaj ve ayar', text: 'Konsolu sabitler, çanağı sinyal ölçerle uyduya kilitler, kabloyu düzgünce yerleştiririz.' },
  { title: 'Test ve teslim', text: 'Kanalları sizinle birlikte tek tek açar, her şey çalışmadan işi bitirmeyiz.' },
]

export default function Process() {
  return (
    <section id="surec" className="section">
      <div className="wrap process-grid">
        <div>
          <h2 className="h2">Telefondan teslime dört adım.</h2>
          <p className="lede">Sürpriz yok. Ne yapılacağını, ne kadar süreceğini ve ne olacağını baştan söyleriz.</p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-dot" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
