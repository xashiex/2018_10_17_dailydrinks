import Vue from 'vue';

Vue.filter('currency', (v, maximumFractionDigits = 0, minimumFractionDigits = -1) => {
  if (v === undefined) return '';
  if (Number.isNaN(v)) return v;
  if (minimumFractionDigits === -1) minimumFractionDigits = maximumFractionDigits; // eslint-disable-line
  return Number(v).toLocaleString('en', {
    maximumFractionDigits,
    minimumFractionDigits,
  });
});
