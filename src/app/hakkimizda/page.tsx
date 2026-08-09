export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-brand-charcoal space-y-8">
      <div className="text-center border-b border-brand-border pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Atelier Hikayemiz</span>
        <h1 className="font-heading font-extrabold text-4xl mt-2">
          Netero Giyim & Zamansız Estetik
        </h1>
      </div>

      <div className="prose max-w-none text-sm text-brand-muted space-y-6 leading-relaxed">
        <p className="text-base text-brand-charcoal font-medium">
          Netero Giyim, hızlı tüketim modasına karşı sürdürülebilir lüks ve yüksek terzilik ilkeleri üzerine kuruldu. 
          Amacımız; sezonluk modanın ötesinde, nesiller boyu saklanabilecek zamansız parçalar üretmektir.
        </p>

        <h3 className="font-heading font-bold text-lg text-brand-charcoal pt-4">Kumaş ve Zanaat Standartlarımız</h3>
        <p>
          Kullandığımız her bir kumaş; İtalya, Moğolistan ve Türkiye’nin en köklü tekstil havzalarından özenle tedarik edilir. 
          Moğol kaşmiri, Ege pamuğu ve Dut ipeği, usta terzilerimizin ellerinde benzersiz birer sanat eserine dönüşür.
        </p>

        <h3 className="font-heading font-bold text-lg text-brand-charcoal pt-4">&quot;Less But Better&quot; Felsefesi</h3>
        <p>
          Daha az ama çok daha kaliteli ilkesiyle gardırobunuzda yıllarca eskimeyecek parçalara odaklanıyoruz. 
          Tüm deri aksesuarlarımız %100 hakiki dana derisinden el işçiliğiyle üretilmekte ve çevre dostu bitkisel tabaklama teknikleriyle işlenmektedir.
        </p>
      </div>
    </div>
  );
}
