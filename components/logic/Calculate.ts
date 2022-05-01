import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateAmount } from '../../redux/amountSlice';
import { updateWater } from '../../redux/waterSlice';

export const Calculate = () => {
  const amount = useSelector((state) => state.amount.amount);
  const ratio = useSelector((state) => state.beans.ratio);
  const dispatch = useDispatch();

  const water = amount * ratio;

  useEffect(() => {
    dispatch(updateWater(water));
  }, [water]);
};

export const BeansCalculate = () => {
  const water = useSelector((state) => state.water.water);
  const ratio = useSelector((state) => state.ratio.ratio);
  const dispatch = useDispatch();

  const amount = water / ratio;

  useEffect(() => {
    dispatch(updateAmount(amount));
  }, [water]);
}

