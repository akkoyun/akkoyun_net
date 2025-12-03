import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Hakkımda"
      description="Mehmet Günce Akkoyun — Elektronik, Yazılım, IoT ve Gastronomi alanlarında multidisipliner bir üretici, mühendis ve araştırmacı.">
      <main style={{padding: '3rem 1.5rem', maxWidth: '980px', margin: '0 auto'}}>
        {/* Hero / Hakkımda üst blok */}
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}>
          <img
            src="/img/kisisel/gunce-akkoyun-1.jpeg"
            style={{borderRadius: '12px', maxWidth: '300px', width: '100%'}}
            alt="Mehmet Günce Akkoyun"
          />

          <div style={{maxWidth: '500px'}}>
            <Heading as="h1" style={{marginBottom: '0.75rem'}}>
              Mehmet Günce Akkoyun
            </Heading>
            <p style={{fontSize: '1.05rem', lineHeight: '1.55'}}>
              Ben Günce Akkoyun. Elektronik ve yazılım mühendisliği alanında uzmanlaşmış, üretim odaklı
              donanım projeleri geliştiren bir mühendisim. Uzun yıllardır IoT, tarımsal teknolojiler ve
              endüstriyel otomasyon üzerine çalışıyorum ve fikirden seri üretime uzanan ürün geliştirme
              yolculuğunun her aşamasında aktif rol alıyorum.
            </p>
            <p style={{fontSize: '1.05rem', lineHeight: '1.55'}}>
              Proje tanımlama, Ar‑Ge yönetimi, elektronik tasarım, gömülü yazılım, PCB geliştirme, mekanik
              tasarım, prototipleme ve test süreçlerinde edindiğim deneyim; hem kendi projelerimde hem de
              endüstriyel müşterilerim için yüzlerce ürünün ortaya çıkmasına katkı sağladı.
            </p>
            <p style={{fontSize: '1.05rem', lineHeight: '1.55'}}>
              Aynı zamanda bir eş, bir baba ve bir öğretmenim. Üretmeye, öğrenmeye ve öğrendiklerimi
              paylaşmaya duyduğum tutku, hem çalışmalarımın hem de kişisel yolculuğumun temelini
              oluşturuyor.
            </p>
          </div>
        </section>
        <hr style={{margin: '3rem 0'}} />
        {/* Uzmanlık Alanlarım */}
        <section style={{marginBottom: '2.5rem'}}>
          <Heading as="h2" style={{marginBottom: '1rem'}}>
            Uzmanlık Alanlarım
          </Heading>

          <Heading as="h3" style={{marginTop: '1.25rem', marginBottom: '0.5rem'}}>
            Elektronik Donanım Tasarımı
          </Heading>
          <p style={{fontSize: '1.02rem', lineHeight: '1.6'}}>
            Elektronik donanım alanında yüksek hassasiyetli, endüstriyel sınıf PCB tasarımları yapıyorum.
            Analog ve dijital devre tasarımı, güç elektroniği, sensör entegrasyonları ve izolasyonlu enerji
            ölçüm mimarileri (MAX78630 gibi profesyonel çözümler) üzerine yoğunlaşıyorum. Aynı zamanda
            donanımların seri üretime uygun hale getirilmesi, maliyet optimizasyonu ve uzun dönem saha
            dayanıklılığı konularında güçlü bir mühendislik yaklaşımına sahibim.
          </p>

          <Heading as="h3" style={{marginTop: '1.25rem', marginBottom: '0.5rem'}}>
            IoT &amp; Sistem Mimarisi
          </Heading>
          <p style={{fontSize: '1.02rem', lineHeight: '1.6'}}>
            IoT projelerinin arka planında yer alan sistem mimarilerini Python ve Node.js ekosistemleriyle
            geliştiriyorum. Async tabanlı yapılarda ölçeklenebilir mikroservis mimarileri tasarlıyor; FastAPI,
            Kafka, Redis ve PostgreSQL gibi modern teknolojilerle gerçek zamanlı veri işleme altyapıları
            oluşturuyorum. Cihaz–sunucu iletişim protokolleri ve veri güvenliği konularında kapsamlı deneyime
            sahibim.
          </p>

          <Heading as="h3" style={{marginTop: '1.25rem', marginBottom: '0.5rem'}}>
            Tarımsal Teknolojiler ve Otomasyon
          </Heading>
          <p style={{fontSize: '1.02rem', lineHeight: '1.6'}}>
            Tarımsal teknolojiler alanında uzaktan kontrollü sulama sistemleri, saha otomasyon çözümleri,
            enerji tüketimi analizi ve reaktif güç yönetimi üzerine odaklanıyorum. IoT tabanlı çevresel veri
            toplama sistemleri geliştiriyor; çiftçilerin sahada karşılaştığı gerçek problemlere yönelik
            uygulanabilir, dayanıklı ve kullanıcı dostu çözümler üretiyorum. Ürünlerim, uzun süreli saha
            testleriyle doğrulanmış mühendislik prensipleri üzerine kuruludur.
          </p>
        </section>
        <hr style={{margin: '3rem 0'}} />
        {/* Üzerinde Çalıştığım Başlıca Projeler */}
        <section style={{marginBottom: '2.5rem'}}>
          <Heading as="h2" style={{marginBottom: '1rem'}}>
            Üzerinde Çalıştığım Başlıca Projeler
          </Heading>
          <p style={{fontSize: '1.02rem', lineHeight: '1.6'}}>
            Üretim odaklı mühendislik yaklaşımımın bir sonucu olarak birçok farklı alanda projeler
            geliştiriyorum. Bunların başında, tarımsal ve endüstriyel işletmeler için tasarladığım{' '}
            <strong>PowerStat</strong> sistemi geliyor; enerji analizi, uzaktan kontrol ve otomasyon gibi
            kritik işlevleri tek bir platformda bir araya getirerek gerçek saha ihtiyaçlarına çözümler sunuyor.
            Bunun yanında geliştirdiğim <strong>WeatherStat</strong> mikro iklim gözlem istasyonları, düşük güç
            tüketimli sensör mimarileriyle çevresel verilerin güvenilir şekilde toplanmasını sağlıyor. Ayrıca,
            açık kaynak kültürünü destekleyen biri olarak elektronik devrelerden yazılım kütüphanelerine kadar
            birçok <strong>açık kaynak donanım ve yazılım projesini</strong> GitHub üzerinde paylaşıyor; hem
            geliştiricilere hem girişimcilere ilham verecek referans projeler üretmeye devam ediyorum.
          </p>
        </section>
        <hr style={{margin: '3rem 0'}} />
        {/* İş Birliği ve İletişim */}
        <section style={{marginBottom: '2.5rem'}}>
          <Heading as="h2" style={{marginBottom: '1rem'}}>
            İş Birliği ve İletişim
          </Heading>
          <p style={{fontSize: '1.02rem', lineHeight: '1.6'}}>
            Benim için üretmek sadece bir meslek değil, aynı zamanda paylaşılması gereken bir bilgi yolculuğu.
            Endüstriyel projeler, IoT tabanlı sistemler, donanım geliştirme, tarımsal otomasyon ya da akademik
            çalışmalar üzerine iş birliği yapmak isterseniz{' '}
            <a href="mailto:akkoyun@me.com">akkoyun@me.com</a> mail adresinden her zaman ulaşabilirsiniz. Yeni
            fikirleri konuşmak, projeleri birlikte şekillendirmek ve gerçek hayatta karşılığı olan çözümler
            üretmek benim için büyük bir motivasyon kaynağıdır.
          </p>
        </section>
        <hr style={{margin: '3rem 0'}} />
        {/* Bağlantılar */}
        <section>
          <Heading as="h2" style={{marginBottom: '1rem'}}>
            Bağlantılar
          </Heading>

          <div style={{lineHeight: '1.9', fontSize: '1.05rem'}}>
            <div style={{marginBottom: '0.75rem'}}>
              <strong>GitHub:</strong>
              <br />
              <Link href="https://github.com/akkoyun" target="_blank">
                github.com/akkoyun
              </Link>
            </div>

            <div style={{marginBottom: '0.75rem'}}>
              <strong>LinkedIn:</strong>
              <br />
              <Link href="https://www.linkedin.com/in/akkoyun" target="_blank">
                linkedin.com/in/akkoyun
              </Link>
            </div>

            <div>
              <strong>Özgeçmiş (PDF):</strong>
              <br />
              <Link href="/cv.pdf" target="_blank">
                cv.pdf
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
