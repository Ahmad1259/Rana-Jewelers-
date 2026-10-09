/**
 * Basic Data Integrity Tests for Rana Jewellers Configuration
 */
import { siteConfig } from '../src/data/site';
import { categoriesData } from '../src/data/categories';
import { productsData } from '../src/data/products';

export function runDataIntegrityCheck() {
  const errors: string[] = [];

  if (!siteConfig.brandName) {
    errors.push('Brand name is missing from siteConfig');
  }

  if (!siteConfig.location.fullAddress) {
    errors.push('Full address is missing from siteConfig');
  }

  if (categoriesData.length === 0) {
    errors.push('Categories data is empty');
  }

  if (productsData.length === 0) {
    errors.push('Products data is empty');
  }

  // Verify no raw placeholder strings are leaking into published products
  productsData.forEach((p) => {
    if (p.name.includes('ADD_') || p.description.includes('ADD_')) {
      errors.push(`Product ${p.id} contains unhandled raw placeholder string in name/description`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}
