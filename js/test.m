function auto_calculate(file_data)

data = csvread(file_data,[ 3,2 ,14,2])

mean_data = mean(data)
median_data = median(data)
std_data = std(data)
fprintf("mean dari tabel diatas adalah : %.0f\n",mean_data)
fprintf("median dari tabel diatas adalah: %.0f\n", median_data)
fprintf("standar deviasi dari tabel diatas adalah: %.0f\n", std_data)

figure(1)
bar(data, 'FaceColor', [0.2 0.6 0.8])

title("Grafik kedatanagan wisatawan mancanegara per Bulan tahun 2024")
xlabel("bulan januari s/d Desember")
ylabel("jumlah wisatawan(Orang)")
grid on

figure(2);
hist(data, 5);
title('Histogram Distribusi Frekuensi Kedatangan Wisatawan');
xlabel('Rentang Jumlah Wisatawan');
ylabel('Frekuensi (Jumlah bulan )');
grid on

hasil = [mean_data; median_data; std_data];
csvwrite('hasil_analisis.csv', hasil)
disp("berhasil menyimpan Hasil dalam file!")
end