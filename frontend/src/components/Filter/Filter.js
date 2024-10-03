import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(selectTitleFilter);

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <div className="filter-row">
                    <input
                        onChange={(e) => {
                            dispatch(setTitleFilter(e.target.value));
                        }}
                        value={inputValue}
                        type="text"
                        placeholder="Filter by title..."
                    />
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(resetFilter());
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
