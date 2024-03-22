import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const Toaster = () => {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="position-relative"
            style={{ minHeight: '110px' }}
        >
            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
                <Toast>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body >Wooah ! Signed UP</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}