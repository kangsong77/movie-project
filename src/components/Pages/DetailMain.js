import React from 'react';
import Navigation from './Navigation';
import Footer from 'components/Common/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { detailActions } from 'store/modules/detail';
import PropTypes from 'prop-types';
import useComponentWillMount from 'hooks/useComponentWillMount';
import Preloader from 'components/Common/Preloader';
import DetailPage from 'components/Detail/DetailPage';

const DetailMain = ({ match }) => {
  const loadingState = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { id } = match.params;
  const isLoading = loadingState[detailActions.TYPE];
  

  useComponentWillMount(() => dispatch(detailActions.request({ id })));

  return (
    <React.Fragment>
      <Navigation />
        {!isLoading ? <DetailPage /> : <Preloader />}
      <Footer />
    </React.Fragment>
  );
};

DetailMain.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailMain;