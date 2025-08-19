// hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState,AppDispatch } from '../store';

// ✅ استخدم هذا لـ dispatch مع النوع الصحيح
export const useAppDispatch: () => AppDispatch = useDispatch;

// ✅ استخدم هذا للـ selector مع النوع الصحيح
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
